import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleModule } from "@typescript-eslint/utils/ts-eslint"
import { ESLintUtils } from "@typescript-eslint/utils"
import { getShorthandMap } from "./shorthand-map"
import { createUIComponentTracker } from "./ui-component-tracker"

// ルールが出す指摘メッセージの ID 一覧
// meta.messages のキーと一致させる（型レベルで紐づけることで typo を防ぐ）
type MessageIds = "duplicateProps" | "preferLonghand" | "preferShorthand"

// ESLint がユーザーから受け取るルールオプションの型
// `["error", { preferred: "longhand" }]` のように tuple の 2 要素目に渡される
// 全部省略可能なので外側もオプショナル（[?]）
type Options = [{ preferred?: "longhand" | "shorthand" }?]

// typescript-eslint 公式の RuleCreator
// 第一引数は「ルール名 → ドキュメント URL」を返す関数
// 各 createRule で作ったルールの meta.docs.url がここで生成した URL で自動的に埋まる
// @docs: https://typescript-eslint.io/developers/custom-rules#rulecreator
const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/yamada-ui/yamada-ui/blob/main/packages/eslint-plugin/src/rules/${name}/README.md`,
)

// JSX 属性から属性名（文字列）を抜き出すヘルパー
// 名前が JSXIdentifier（普通の prop 名）なら文字列を返し、
// JSXNamespacedName（例: xml:lang のような名前空間付き属性）なら null を返してスキップさせる
// 引数の型は JSXAttribute 限定なので、{...spread} (= JSXSpreadAttribute) は呼び出し側で除外する前提
function getAttrName(attr: TSESTree.JSXAttribute): null | string {
  return attr.name.type === "JSXIdentifier" ? attr.name.name : null
}

export const propsShorthand: RuleModule<MessageIds, Options> = createRule<
  Options,
  MessageIds
>({
  name: "props-shorthand",
  // @docs(meta 全体): https://eslint.org/docs/latest/extend/custom-rules#rule-structure
  meta: {
    // "suggestion": スタイル統一のための指摘（バグではない）
    // 他に "problem"（バグ）、"layout"（フォーマット）がある
    type: "suggestion",
    docs: {
      // 訳: Yamada UI のコンポーネントにおいて、shorthand または longhand の
      //     スタイル prop の使い方を一貫させる
      description:
        "Enforce consistent use of shorthand or longhand style props on Yamada UI components",
    },
    // "code": ESLint の --fix で自動修正できる
    // 属性名の置換だけで意味が変わらない範囲にだけ fix を提供する
    // @docs: https://eslint.org/docs/latest/extend/custom-rules#applying-fixes
    fixable: "code",
    // suggestion は IDE 上で人が個別に選択して適用する候補機能（CodeAction）
    // ここではすべて --fix で機械的に直すので false
    // @docs: https://eslint.org/docs/latest/extend/custom-rules#providing-suggestions
    hasSuggestions: false,
    // 指摘メッセージのテンプレート
    // {{ }} 内のキーは context.report({ data: { ... } }) の data で埋められる
    // @docs: https://eslint.org/docs/latest/extend/custom-rules#messageids
    messages: {
      // 同じ longhand を共有する 2 つの属性が 1 つのタグに同居しているときの指摘
      // - shorthand + longhand: <Box m={1} margin={2} /> → a="m", b="margin", longhand="margin"
      // - 兄弟 shorthand 同居: <Box bgGradient="x" bgImage="y" /> → a="bgGradient", b="bgImage", longhand="backgroundImage"
      // メッセージ内に出る名前は実際の JSX に書かれた属性名のみで構成し、
      // 利用者が「書いてない属性名」を提示されて混乱しないようにする
      // 1 タグに対して 1 回しか報告しない（属性ごとに重複報告しない）
      // 自動修正は行わない（どちらを残すべきかは人間の判断）
      duplicateProps:
        "Both '{{a}}' and '{{b}}' are specified for the same style property '{{longhand}}'; keep only one.",
      // preferred: "longhand" 設定で shorthand を見つけたときに出す指摘
      // 例: <Box m={2} /> → "Use longhand prop 'margin' instead of 'm'."
      // --fix で属性名のみ longhand に置換される
      preferLonghand:
        "Use longhand prop '{{longhand}}' instead of '{{shorthand}}'.",
      // preferred: "shorthand"（既定）で longhand を見つけたときに出す指摘
      // 例: <Box margin={2} /> → "Use shorthand prop 'm' instead of 'margin'."
      // --fix で属性名のみ shorthand に置換される
      preferShorthand:
        "Use shorthand prop '{{shorthand}}' instead of '{{longhand}}'.",
    },
    // ユーザーがルールに渡せるオプションの JSON Schema
    // ESLint が起動時にこの schema で検証してくれるので、不正値はルール本体に届かない
    // @docs: https://eslint.org/docs/latest/extend/custom-rules#options-schemas
    schema: [
      {
        type: "object",
        additionalProperties: false,
        properties: {
          preferred: { type: "string", enum: ["shorthand", "longhand"] },
        },
      },
    ],
  },
  // ユーザーがオプションを省略したときに使われる既定値
  // create の第 2 引数 `[options]` で受け取れる
  // @docs: https://eslint.org/docs/latest/extend/custom-rules#option-defaults
  defaultOptions: [{ preferred: "shorthand" }],

  // create は ESLint がファイルごとに 1 回呼ぶ
  // 戻り値オブジェクトのキーが AST ノード種別、値がそのノードに対するビジター関数
  create(context, [options]) {
    const preferred = options?.preferred ?? "shorthand"

    // shorthand ⇄ longhand の対応マップ（getShorthandMap 側でモジュール内キャッシュ済み）
    const { longhandToShorthands, shorthandToLonghand } = getShorthandMap()

    // 「Yamada UI 由来かどうか」を import 経由で追跡するトラッカー
    // 対象パッケージは @yamada-ui/react のみ
    const tracker = createUIComponentTracker(["@yamada-ui/react"])

    return {
      // ESLint は AST を上から走査するので、ファイル先頭の import 文が
      // JSX より先にこのビジターに到達する → import を全部見終えた状態で
      // 後段の JSXOpeningElement 判定が行える
      ImportDeclaration(node) {
        tracker.visitImport(node)
      },

      // `const Wrapped = styled(Box)` のように styled factory で wrap された変数を
      // tracker に登録する。ESLint は AST 走査の preorder で各 VariableDeclarator を
      // enter したタイミングでこのビジターを呼ぶので、後段で <Wrapped /> を見るときには
      // すでに components に追加されている状態になる
      VariableDeclarator(node) {
        tracker.visitVariableDeclarator(node)
      },

      // JSX タグの開始要素 <Foo prop="..." > が来るたびに呼ばれる
      JSXOpeningElement(node) {
        // Yamada UI 由来でないタグ（<div /> や別ライブラリのコンポーネント）はスキップ
        if (!tracker.matchesJSXName(node.name)) return

        // {...spread} を除外して、名前のある属性だけを対象にする
        // spread 内の prop 名は静的に判定できないので、対象から外す
        const attributes = node.attributes.filter(
          (a): a is TSESTree.JSXAttribute => a.type === "JSXAttribute",
        )

        // longhand → 同居する属性たち、というグルーピングを作る
        // shorthand 属性は対応する longhand キーへ、longhand 属性自身は自分の名前キーへ集約する
        // 後段ではこのグループ単位で duplicate を判定するため、1 タグ・1 longhand につき
        // 最大 1 回しか duplicate を報告しないようにする
        const byLonghand = new Map<
          string,
          { attr: TSESTree.JSXAttribute; name: string }[]
        >()
        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue

          // 属性名が shorthand なら対応 longhand を、longhand なら自分自身をキーにする
          // どちらでもないスタイル外の属性（onClick など）は undefined になり、グルーピング対象外
          const longhand =
            shorthandToLonghand.get(name) ??
            (longhandToShorthands.has(name) ? name : undefined)
          if (!longhand) continue

          const entries = byLonghand.get(longhand) ?? []
          entries.push({ attr, name })
          byLonghand.set(longhand, entries)
        }

        // duplicate に該当する属性名の集合
        // 後段の preferShorthand / preferLonghand 判定で、duplicate になっている属性は
        // 二重に報告しないようにここでスキップ対象として記録する
        const duplicateNames = new Set<string>()
        for (const [longhand, entries] of byLonghand) {
          if (entries.length < 2) continue
          const [first, second] = entries
          if (!first || !second) continue
          for (const e of entries) duplicateNames.add(e.name)
          // 1 タグ・1 longhand あたり 1 回だけ報告する
          // node は登場順で先頭の属性に紐づける（メッセージのアンカーが安定する）
          context.report({
            node: first.attr.name,
            messageId: "duplicateProps",
            data: { a: first.name, b: second.name, longhand },
          })
        }

        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue
          // duplicate として既に報告した属性は、prefer 系の指摘を重ねて出さない
          if (duplicateNames.has(name)) continue

          if (preferred === "shorthand") {
            // ─── preferred: shorthand（longhand を見つけたら shorthand に変えたい） ───

            // 属性が shorthand 自身なら preferred 通りに使われているので何もしない
            if (shorthandToLonghand.has(name)) continue

            // 属性名が longhand でなければ対象外
            const shorts = longhandToShorthands.get(name)
            if (!shorts || shorts.length === 0) continue

            // 候補が複数ある場合は先頭を採用（shorthand-map で配列の並びを固定済み）
            const short = shorts[0]
            if (!short) continue

            // 属性名だけを置換する（値や中括弧、JSX 全体には触らない）
            context.report({
              node: attr.name,
              messageId: "preferShorthand",
              data: { longhand: name, shorthand: short },
              fix: (fixer) => fixer.replaceText(attr.name, short),
            })
          } else {
            // ─── preferred: longhand（shorthand を見つけたら longhand に変えたい） ───

            // 属性名が shorthand でなければ対象外
            const longhand = shorthandToLonghand.get(name)
            if (!longhand) continue

            // 属性名だけを longhand に置換
            context.report({
              node: attr.name,
              messageId: "preferLonghand",
              data: { longhand, shorthand: name },
              fix: (fixer) => fixer.replaceText(attr.name, longhand),
            })
          }
        }
      },
    }
  },
})
