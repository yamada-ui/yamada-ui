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
    `https://github.com/yamada-ui/yamada-ui/blob/main/packages/lint/src/rules/${name}/README.md`,
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
      // 同じタグに shorthand と longhand の両方（または同じ longhand を持つ shorthand 兄弟同士）が
      // 書かれている場合に出す指摘
      // 例: <Box m={2} margin={4} /> → "Both 'm' and 'margin' are specified; ..."
      // 自動修正は行わない（どちらを残すべきかは人間の判断）
      duplicateProps:
        "Both '{{shorthand}}' and '{{longhand}}' are specified; keep only the preferred one.",
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

      // JSX タグの開始要素 <Foo prop="..." > が来るたびに呼ばれる
      JSXOpeningElement(node) {
        // Yamada UI 由来でないタグ（<div /> や別ライブラリのコンポーネント）はスキップ
        if (!tracker.matchesJSXName(node.name)) return

        // {...spread} を除外して、名前のある属性だけを対象にする
        // spread 内の prop 名は静的に判定できないので、対象から外す
        const attributes = node.attributes.filter(
          (a): a is TSESTree.JSXAttribute => a.type === "JSXAttribute",
        )

        // 同じタグ内に書かれている属性名の集合を先にまとめて作る
        // 後段で「shorthand と longhand が両方書かれていないか」を O(1) で判定するため
        const presentNames = new Set<string>()
        for (const a of attributes) {
          const name = getAttrName(a)
          if (name) presentNames.add(name)
        }

        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue

          if (preferred === "shorthand") {
            // ─── preferred: shorthand（longhand を見つけたら shorthand に変えたい） ───

            // 属性名が longhand でなければ対象外
            const shorts = longhandToShorthands.get(name)
            if (!shorts || shorts.length === 0) continue

            // 同じタグに対応する shorthand 兄弟（margin に対する m など）も書かれていれば
            // 両方を残すと props が重複するので duplicate として指摘する
            // 自動修正はしない（どちらを残すべきかは人が決める）
            //
            // ここでは現在見ているのが longhand なので、shorts には自分は含まれない
            // → `s !== name` のような除外は不要で、has() 一発で兄弟チェックになる
            // @docs(context.report): https://eslint.org/docs/latest/extend/custom-rules#report-problems
            const duplicate = shorts.find((s) => presentNames.has(s))
            if (duplicate) {
              context.report({
                node: attr.name,
                messageId: "duplicateProps",
                data: { longhand: name, shorthand: duplicate },
              })
              continue
            }

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
            const long = shorthandToLonghand.get(name)
            if (!long) continue

            // 同じタグに対応する longhand 本体も書かれていれば duplicate として指摘
            if (presentNames.has(long)) {
              context.report({
                node: attr.name,
                messageId: "duplicateProps",
                data: { longhand: long, shorthand: name },
              })
              continue
            }

            // 同じ longhand に紐づく別の shorthand 兄弟（例: bg と bgGradient は両方 backgroundImage 系）
            // が同居している場合も duplicate 扱い
            //
            // 現在見ているのが shorthand なので、siblings には自分も含まれる
            // → `s !== name` で自分自身を除外してから presentNames を引く必要がある
            const siblings = longhandToShorthands.get(long) ?? []
            const conflicting = siblings.find(
              (s) => s !== name && presentNames.has(s),
            )
            if (conflicting) {
              context.report({
                node: attr.name,
                messageId: "duplicateProps",
                data: { longhand: long, shorthand: name },
              })
              continue
            }

            // 属性名だけを longhand に置換
            context.report({
              node: attr.name,
              messageId: "preferLonghand",
              data: { longhand: long, shorthand: name },
              fix: (fixer) => fixer.replaceText(attr.name, long),
            })
          }
        }
      },
    }
  },
})
