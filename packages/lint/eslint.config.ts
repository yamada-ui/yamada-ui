// @yamada-ui/lint 自身を lint するための ESLint Flat Config
//
// このパッケージは yamada-ui モノレポ内で唯一 ESLint を使う（他は oxlint）。
// 本パッケージは ESLint プラグインそのもので、`@typescript-eslint/rule-tester`
// 経由で ESLint + typescript-eslint のツールチェーンが既に devDependencies に
// 入っているため、lint も同じツールで実行する（セットアップ最小化 + dogfooding 的意図）。
//
// Flat Config は「config オブジェクトの配列」で、後続要素が前の要素の files に
// 該当する部分にマージ／上書きされる
// @docs: https://eslint.org/docs/latest/use/configure/configuration-files
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig([
  // グローバルな除外パス（旧来の .eslintignore 相当）
  // ignores だけを持つ config オブジェクトは、後続のどの files にも適用されず
  // 単に「リポジトリ全体で常にスキップするパス」として扱われる
  // @docs: https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
  {
    ignores: ["dist", "coverage", "trace", "node_modules", ".eslintcache"],
  },
  // typescript-eslint の推奨プリセット
  // 値は「config オブジェクトの配列」なので、defineConfig に渡すにはスプレッドが必要
  // パーサ（@typescript-eslint/parser）の差し込みと推奨ルール一式が含まれる
  // @docs: https://typescript-eslint.io/users/configs#recommended
  ...tseslint.configs.recommended,
  // プロジェクト独自の追加ルール（TS ソース限定）
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // 型のみの import を `import type { X } from "..."` 形式に矯正する
      // 値を伴わない参照が JS 出力に残らず、型のみの循環依存も検出しやすくなる
      // ルール側で AST 型（TSESTree）を多用する本パッケージとは特に相性が良い
      // @docs: https://typescript-eslint.io/rules/consistent-type-imports
      "@typescript-eslint/consistent-type-imports": "error",
      // デバッグ用の console.log を出荷物に混入させないためのガード
      // ルール利用者向けに警告/エラーを出す目的の console.warn / console.error は許可
      // @docs: https://eslint.org/docs/latest/rules/no-console
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
])
