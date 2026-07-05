// ============================================================================
// no-hardcoded-token ルール本体
// ----------------------------------------------------------------------------
// Yamada UI コンポーネントの JSX 属性に書かれたハードコードのスタイル値
// （例: p="16px", color="#ef4444"）を検出し、対応するデザイントークンが
// あれば auto-fix（例: p={4}, color="red.500"）するルール。
//
// 処理の全体フロー:
//   1. ImportDeclaration / VariableDeclarator を tracker に渡して
//      「Yamada UI コンポーネント」を追跡する（ui-component-tracker.ts）
//   2. JSXOpeningElement ごとに、タグが Yamada UI コンポーネントかを判定
//   3. 各属性について prop 名 → トークンスケールを解決（token-map.ts）
//   4. 属性値（文字列 / 数値 / 配列 / オブジェクト / 三項演算子 /
//      テンプレートリテラル）を再帰的にたどって値を取り出す
//   5. 値が「ハードコードらしい」書式（DETECTION_PATTERNS）に一致したら、
//      theme の逆引きマップでトークンを検索
//   6. トークンが見つかれば fix 付きで報告、見つからなければ提案のみ報告
// ============================================================================

import type { Rule } from "eslint"
import type {
  Expression,
  JSXAttribute,
  Literal,
  TemplateLiteral,
} from "estree-jsx"
import { createUIComponentTracker } from "../../utils/ui-component-tracker"
import { getPropTokenScaleMap, getValueToTokenMap } from "./token-map"

// ルールのオプション（ESLint 設定の rules: { "...": ["error", { ... }] } の部分）
interface Options {
  // 検査から除外するトークンスケール名（例: ["colors"]）
  ignoreScales?: string[]
  // 「Yamada UI コンポーネント」とみなす import 元パッケージ
  sources?: string[]
}

// sources オプションのデフォルト値。
// @yamada-ui/react 本体に加えて、CLI で生成されるプロジェクト内
// コンポーネント（@workspaces/ui）もデフォルトで対象にする。
const DEFAULT_SOURCES = ["@yamada-ui/react", "@workspaces/ui"] as const

// スケールごとの「ハードコード値らしい書式」の正規表現。
// この段階では theme との照合はせず、あくまで「検査する価値がある
// 書式かどうか」の事前フィルタとして働く。パターンに一致しない値
// （例: すでにトークン名の "md" や、単位なしの "4"）は即座にスキップ
// されるため、誤検出と無駄な逆引きを防ぐ。
const DETECTION_PATTERNS: { [key: string]: RegExp } = {
  aspectRatios: /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/, // "16 / 9" のような分数
  blurs: /^-?\d+(\.\d+)?(px|rem|em)$/, // "4px" など長さ
  borders: /^\d+(\.\d+)?px\s+solid$/, // "1px solid" の複合値
  colors: /^#[0-9a-fA-F]{3,8}$|^rgba?\(.+\)$|^hsla?\(.+\)$/, // hex / rgb(a) / hsl(a)
  durations: /^\d+(\.\d+)?m?s$/, // "200ms" / "0.2s"
  easings: /^cubic-bezier\(.+\)$/, // イージング関数
  fontSizes: /^-?\d+(\.\d+)?(px|rem|em)$/, // 長さ
  fontWeights: /^\d{3}$/, // "700" のような 3 桁数値
  letterSpacings: /^-?\d+(\.\d+)?em$/, // em のみ（theme が em 基準のため）
  lineHeights: /^\d+(\.\d+)?$/, // 単位なし数値 "1.5"
  radii: /^-?\d+(\.\d+)?(px|rem|em)$/, // 長さ
  sizes: /^-?\d+(\.\d+)?(px|rem|em)$/, // 長さ
  spaces: /^-?\d+(\.\d+)?(px|rem|em)$/, // 長さ
  zIndices: /^\d+$/, // 整数
}

// どのスケールでも検査対象外にする CSS グローバルキーワード。
// これらはトークンに置き換える対象ではない正当な値。
const CSS_KEYWORDS = new Set([
  "auto",
  "inherit",
  "initial",
  "none",
  "revert",
  "unset",
])

// 値がこれらの CSS 関数で始まる場合はスキップする。
// calc() や var() の中身は静的に解決できず、そもそも
// トークンで置き換えられる値ではないため。
const SKIPPED_CSS_FUNCTIONS = new Set([
  "calc",
  "clamp",
  "env",
  "max",
  "min",
  "var",
])

// ゼロは単位に関わらず「トークン化する意味がない値」なのでスキップ。
const ZERO_VALUES = new Set(["0", "0em", "0px", "0rem"])

// 通常、スペースを含む値（"10px 20px" など）は複数値の一括指定と
// みなして検査をスキップするが、これらのスケールは値自体にスペースを
// 含みうる（"1px solid", "16 / 9", "rgb(0, 0, 0)" など）ため例外とする。
const COMPOUND_VALUE_SCALES = new Set([
  "aspectRatios",
  "borders",
  "colors",
  "easings",
])

// JSX 属性から prop 名を取り出す。
// <Box ns:attr /> のような JSXNamespacedName は対象外（null を返す）。
function getAttrName(attr: JSXAttribute): null | string {
  return attr.name.type === "JSXIdentifier" ? attr.name.name : null
}

// 値が SKIPPED_CSS_FUNCTIONS のいずれかの関数呼び出し形式かを判定。
// 例: "calc(100% - 8px)" → true, "rgb(0,0,0)" → false（rgb はリストにない）
function isCSSFunction(value: string): boolean {
  const match = /^([a-zA-Z-]+)\(/.exec(value)
  if (!match?.[1]) return false

  return SKIPPED_CSS_FUNCTIONS.has(match[1])
}

function isZeroValue(value: string): boolean {
  return ZERO_VALUES.has(value)
}

function hasSpaces(value: string): boolean {
  return /\s/.test(value)
}

function isNegativeValue(value: string): boolean {
  return value.startsWith("-")
}

// fontWeights の数値リテラル（p fontWeight={700} など）は、
// 100〜900 の 100 刻みのときだけ「フォントウェイトらしい値」として扱う。
// 700 以外の任意の数値（例: 550）を誤って検査しないためのガード。
function isFontWeightMultipleOf100(value: string): boolean {
  const num = Number(value)

  return Number.isFinite(num) && num >= 100 && num <= 900 && num % 100 === 0
}

// トークン名が数値キーかどうか（spaces の "4" や zIndices の "10" など）。
// 数値キーのトークンは fix 時に p={4} のように数値リテラルへ置換するため、
// 文字列キー（"md" など）と扱いを分ける必要がある。
function isNumericKey(tokenName: string): boolean {
  return Number.isFinite(Number(tokenName))
}

// 値がそのスケールの検出パターンに一致するか。
// パターン未定義のスケールは常に false = 検査しない。
function matchesDetectionPattern(scale: string, value: string): boolean {
  const pattern = DETECTION_PATTERNS[scale]
  if (!pattern) return false

  return pattern.test(value)
}

// 検査そのものをスキップすべき値かどうかの総合判定。
// スキップ順: CSS キーワード → ゼロ → CSS 関数 → スペース含み（複合値スケール以外）
function shouldSkipValue(value: string, scale: string): boolean {
  if (CSS_KEYWORDS.has(value)) return true
  if (isZeroValue(value)) return true
  if (isCSSFunction(value)) return true
  if (hasSpaces(value) && !COMPOUND_VALUE_SCALES.has(scale)) return true

  return false
}

// theme 逆引きマップからトークン名を検索する。
// colors だけは書式ゆれ吸収のため小文字化してから引く
// （token-map.ts 側もキーを小文字で格納している）。
// 見つからなければ null（= fix 不可、提案のみの報告になる）。
function lookupToken(
  value: string,
  scale: string,
  valueToTokenMap: Map<string, Map<string, string>>,
): null | string {
  const reverseMap = valueToTokenMap.get(scale)
  if (!reverseMap) return null

  const lookupValue = scale === "colors" ? value.toLowerCase() : value

  return reverseMap.get(lookupValue) ?? null
}

export const noHardcodedToken: Rule.RuleModule = {
  meta: {
    // "suggestion" = コードの改善提案（"problem" ほど深刻ではない）
    type: "suggestion",
    docs: {
      description:
        "Enforce use of design tokens instead of hard-coded style values on Yamada UI components",
    },
    // `eslint --fix` での自動修正を許可する宣言。
    // これがないと context.report に fix を渡してもエラーになる。
    fixable: "code",
    messages: {
      // トークンが見つかった場合（fix あり）
      noHardcodedToken:
        "Hard-coded value '{{value}}' in prop '{{prop}}'. Use design token '{{token}}' instead.",
      // 対応トークンがない、または安全に fix できない場合（報告のみ）
      noHardcodedTokenNoFix:
        "Hard-coded value '{{value}}' in prop '{{prop}}' (token scale: '{{scale}}'). Consider using a design token.",
    },
    // オプションの JSON Schema。ESLint が設定値を事前検証してくれる。
    schema: [
      {
        type: "object",
        additionalProperties: false,
        properties: {
          ignoreScales: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
          sources: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
        },
      },
    ],
  },

  // create() はファイルごとに呼ばれ、AST ノード種別 → visitor 関数の
  // マッピングを返す。ESLint が AST を走査しながら該当 visitor を呼ぶ。
  create(context) {
    const options = (context.options[0] ?? {}) as Options
    const ignoreScales = new Set(options.ignoreScales ?? [])

    // どちらもモジュールレベルでキャッシュされるため、
    // 2 ファイル目以降はほぼノーコスト（token-map.ts 参照）。
    const propTokenScaleMap = getPropTokenScaleMap()
    const valueToTokenMap = getValueToTokenMap()

    // コンポーネント追跡はファイルごとの状態なので create() 内で生成する
    // （ファイル A の import がファイル B に漏れてはいけない）。
    const tracker = createUIComponentTracker(options.sources ?? DEFAULT_SOURCES)

    // ------------------------------------------------------------------
    // 検出済みの値を ESLint に報告する。報告は 3 パターンに分岐:
    //   (a) トークンが見つからない        → NoFix メッセージ（報告のみ)
    //   (b) 負の値 + 数値キーのトークン    → NoFix メッセージ（報告のみ)
    //       ※ m="-1rem" は m={-4} ではなく m="-4"（負のトークン参照の
    //         文字列形式）が正しい書き方になるケースがあり、機械的な
    //         置換が安全でないため fix しない
    //   (c) それ以外                       → fix 付きで報告
    //
    // isDirectAttrValue: 値が属性に直接書かれた文字列リテラルか
    //   （p="16px" → true, p={"16px"} や配列内 → false）。
    //   true のとき数値トークンへの fix は p={4} のように
    //   JSXExpressionContainer ごと生成する必要があるため区別する。
    // ------------------------------------------------------------------
    function reportLiteral(
      literalNode: Literal | TemplateLiteral,
      value: string,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      const token = lookupToken(value, scale, valueToTokenMap)
      if (!token) {
        // (a) 対応トークンなし: 「トークンの利用を検討して」とだけ伝える
        context.report({
          data: {
            prop: propName,
            scale,
            value,
          },
          messageId: "noHardcodedTokenNoFix",
          node: literalNode,
        })

        return
      }

      if (isNegativeValue(value) && isNumericKey(token)) {
        // (b) 負の値: fix せず報告のみ
        context.report({
          data: {
            prop: propName,
            scale,
            value,
          },
          messageId: "noHardcodedTokenNoFix",
          node: literalNode,
        })

        return
      }

      if (isNumericKey(token)) {
        // (c-1) 数値キーのトークン（spaces の 4 など）
        // 属性直下なら p="16px" → p={4}（波括弧つき）、
        // 配列やオブジェクトの中なら ["16px", ...] → [4, ...]（数値のみ）
        const numericValue = Number(token)
        context.report({
          data: {
            prop: propName,
            token: `{${numericValue}}`,
            value,
          },
          fix: (fixer) =>
            fixer.replaceText(
              // estree-jsx の Literal 型と eslint の Rule.Node 型が
              // 別ライブラリ由来で互換宣言がないため、キャストで橋渡しする
              literalNode as unknown as Rule.Node,
              isDirectAttrValue ? `{${numericValue}}` : String(numericValue),
            ),
          messageId: "noHardcodedToken",
          node: literalNode,
        })
      } else {
        // (c-2) 文字列キーのトークン（"md" や "red.500" など）
        // 位置に関わらず常にダブルクォート文字列に置換する
        context.report({
          data: {
            prop: propName,
            token: `"${token}"`,
            value,
          },
          fix: (fixer) =>
            fixer.replaceText(
              literalNode as unknown as Rule.Node,
              `"${token}"`,
            ),
          messageId: "noHardcodedToken",
          node: literalNode,
        })
      }
    }

    // ------------------------------------------------------------------
    // 文字列値の検査エントリ。
    // スキップ判定 → 書式パターン照合 を通過したものだけ報告に進む。
    // ------------------------------------------------------------------
    function checkStringValue(
      literalNode: Literal | TemplateLiteral,
      value: string,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      if (shouldSkipValue(value, scale)) return
      if (!matchesDetectionPattern(scale, value)) return

      reportLiteral(literalNode, value, propName, scale, isDirectAttrValue)
    }

    // ------------------------------------------------------------------
    // 数値リテラルの検査エントリ（fontWeight={700} など）。
    // 数値がそのまま CSS 値として意味を持つスケールだけを対象にする。
    // spaces/sizes の数値（p={4}）は「すでにトークン参照」なので
    // ここには含めない（含めると正しいコードを誤検出してしまう）。
    // ------------------------------------------------------------------
    function checkNumericValue(
      literalNode: Literal,
      value: number,
      propName: string,
      scale: string,
    ): void {
      if (value === 0) return

      const isNumericMatchScale =
        scale === "fontWeights" ||
        scale === "lineHeights" ||
        scale === "zIndices"
      if (!isNumericMatchScale) return

      // 以降の照合は文字列ベースの共通処理に乗せるため文字列化する
      const strValue = String(value)

      if (scale === "fontWeights" && !isFontWeightMultipleOf100(strValue))
        return

      if (shouldSkipValue(strValue, scale)) return
      if (!matchesDetectionPattern(scale, strValue)) return

      reportLiteral(literalNode, strValue, propName, scale, false)
    }

    // ------------------------------------------------------------------
    // 属性値の式を再帰的にたどるディスパッチャ。
    // Yamada UI のレスポンシブ記法（配列・オブジェクト）や条件式の
    // 中に埋まったリテラルも漏れなく検査するのが役割。
    //
    // 対応する形:
    //   Literal:               p={16} / p={"16px"}
    //   TemplateLiteral:       p={`16px`}（式の埋め込みがないものだけ）
    //   ArrayExpression:       p={["8px", "16px"]}（レスポンシブ配列）
    //   ObjectExpression:      p={{ base: "8px", md: "16px" }}
    //   ConditionalExpression: p={cond ? "8px" : "16px"}（両側を検査）
    // 上記以外（変数参照や関数呼び出しなど動的な値）は静的に解決
    // できないため、何もせず素通しする。
    // ------------------------------------------------------------------
    function checkValueNode(
      node: Expression | Literal,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      if (node.type === "Literal") {
        if (typeof node.value === "string")
          checkStringValue(node, node.value, propName, scale, isDirectAttrValue)
        else if (typeof node.value === "number")
          checkNumericValue(node, node.value, propName, scale)

        return
      }

      if (node.type === "TemplateLiteral") {
        // `${size}px` のような式入りテンプレートは動的値なのでスキップ
        if (node.expressions.length > 0) return

        // 式がなければ quasis（静的文字列部分）は 1 要素だけ。
        // cooked はエスケープ解決済みの実際の文字列値。
        const cooked = node.quasis[0]?.value.cooked
        if (typeof cooked !== "string") return

        checkStringValue(node, cooked, propName, scale, false)

        return
      }

      if (node.type === "ArrayExpression") {
        // レスポンシブ配列: 各要素を個別に検査（要素ごとに報告される）
        for (const element of node.elements) {
          // 穴あき配列（[, "16px"]）の null と spread（...values）はスキップ
          if (!element || element.type === "SpreadElement") continue
          checkValueNode(element, propName, scale, false)
        }

        return
      }

      if (node.type === "ObjectExpression") {
        // レスポンシブオブジェクト: 各プロパティの「値」を検査。
        // キー（base / md など）は検査対象ではない。
        for (const prop of node.properties) {
          if (prop.type === "SpreadElement") continue
          // AssignmentPattern（{ a = 1 }）は分割代入の文脈でしか現れず
          // 属性値としては不正な形なのでスキップ
          if (prop.value.type === "AssignmentPattern") continue
          checkValueNode(prop.value as Expression, propName, scale, false)
        }

        return
      }

      if (node.type === "ConditionalExpression") {
        // 三項演算子は真偽どちらの分岐も静的な値になりうるので両方検査
        checkValueNode(node.consequent, propName, scale, false)
        checkValueNode(node.alternate, propName, scale, false)

        return
      }
    }

    // ------------------------------------------------------------------
    // visitor 定義。ESLint が AST 走査中に各ノード種別で呼び出す。
    // import と変数宣言は JSX より先（ファイル上方）に現れる前提で、
    // tracker への記録 → JSX 判定の順序が成立している。
    // ------------------------------------------------------------------
    return {
      ImportDeclaration(node) {
        tracker.visitImport(node)
      },

      VariableDeclarator(node) {
        tracker.visitVariableDeclarator(node)
      },

      JSXOpeningElement(node) {
        // Yamada UI コンポーネントでなければ属性を見る必要すらない
        if (!tracker.matchesJSXName(node.name)) return

        for (const attr of node.attributes) {
          // {...props} のような JSXSpreadAttribute は静的解析できないので対象外
          if (attr.type !== "JSXAttribute") continue

          const propName = getAttrName(attr)
          if (!propName) continue

          // prop がトークンスケールに紐づかない（= トークンを受け取らない
          // prop）なら検査不要
          const scale = propTokenScaleMap.get(propName)
          if (!scale) continue
          // ユーザーがオプションで除外したスケール
          if (ignoreScales.has(scale)) continue
          // 検出パターン未定義のスケール（keyframes 等）も検査しない
          if (!DETECTION_PATTERNS[scale]) continue

          const { value } = attr
          // 値なしのブール属性（<Box disabled />）は対象外
          if (!value) continue

          if (value.type === "Literal") {
            // p="16px" の形。属性に直接書かれた文字列なので
            // isDirectAttrValue = true（fix 時に {4} 形式へ変換するため）
            if (typeof value.value === "string")
              checkStringValue(value, value.value, propName, scale, true)

            continue
          }

          if (value.type === "JSXExpressionContainer") {
            // p={...} の形。中の式を再帰ディスパッチャへ渡す
            const expr = value.expression
            // p={} のような空の式コンテナはスキップ
            if (expr.type === "JSXEmptyExpression") continue
            checkValueNode(expr, propName, scale, false)
          }
        }
      },
    }
  },
}
