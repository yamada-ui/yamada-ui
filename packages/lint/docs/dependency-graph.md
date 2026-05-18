# `@yamada-ui/lint` Dependency Graph

`packages/lint/src/` 配下のファイル間依存関係と、各ファイルが利用している外部パッケージをまとめたドキュメントです。

## プロダクションコードの依存ツリー

```
              src/index.ts                          (plugin entry / default export)
                    │
                    │ propsShorthand
                    ▼
       src/rules/props-shorthand/index.ts           (rule body)
                    │
         ┌──────────┴───────────────────┐
         │ createUI                     │ getShorthand
         │ ComponentTracker             │ Map
         ▼                              ▼
src/rules/props-shorthand/     src/rules/props-shorthand/
ui-component-tracker.ts        shorthand-map.ts
                                        │
                                        │ shorthandStyles,
                                        │ standardStyles
                                        ▼
                               @yamada-ui/react/core (peer)
```

## ファイルごとの役割と依存

### `src/index.ts` （plugin entry）

**役割**: パッケージのエントリーポイント。ESLint プラグインの公開形を組み立てて default export する。

**やっていること**:

- `package.json` から `name` (`@yamada-ui/lint`) と `version` を読み取り `meta` に埋める
- `rules` 辞書に `propsShorthand` を `"props-shorthand"` キーで登録
- `recommended` config を組み立て、`[`${name}/props-shorthand`]: "error"` でルールを有効化
- `basePlugin` + `configs: { recommended }` を default export

利用者は `import yamadaUi from "@yamada-ui/lint"` で取り込み、`yamadaUi.configs.recommended` を Flat Config 配列に展開する。

| Import 先                  | 種類              | 用途                                             |
| -------------------------- | ----------------- | ------------------------------------------------ |
| `@typescript-eslint/utils` | external (型のみ) | `TSESLint.FlatConfig.Plugin` / `Config` の型注釈 |
| `../package.json`          | external (JSON)   | `meta.name` / `meta.version` のソース            |
| `./rules/props-shorthand`  | internal          | ルール本体を辞書に登録するため                   |

### `src/rules/props-shorthand/index.ts` （rule body）

**役割**: `props-shorthand` ルール本体。`ESLintUtils.RuleCreator` 経由でルールオブジェクトを返す。

**やっていること**:

- メッセージ ID 3 種（`duplicateProps` / `preferLonghand` / `preferShorthand`）と JSON Schema（`preferred: "shorthand" | "longhand"`、既定 `"shorthand"`）を定義
- `ImportDeclaration` ビジターで `createUIComponentTracker` に import を流し込む
- `JSXOpeningElement` ビジターで以下を順に実施:
  1. tracker による Yamada UI 由来判定（非該当ならスキップ）
  2. `{...spread}` を除外して属性集合を作る
  3. 属性ループで `preferred` 方向に応じた分岐:
     - `preferred: "shorthand"` → attr が shorthand なら同じ longhand を指す兄弟との衝突を検出、longhand なら shorthand への自動修正提案
     - `preferred: "longhand"` → 逆方向
  4. shorthand と longhand が同居 / 兄弟 shorthand が同居 → `duplicateProps` 指摘・**自動修正なし**
- `fixer.replaceText(attr.name, ...)` で属性名のみを置換（値・空白・フォーマットを保つ）

| Import 先                            | 種類              | 用途                                                |
| ------------------------------------ | ----------------- | --------------------------------------------------- |
| `@typescript-eslint/utils`           | external          | `TSESTree`（型）+ `ESLintUtils.RuleCreator`（実体） |
| `@typescript-eslint/utils/ts-eslint` | external (型のみ) | `RuleModule` の型注釈                               |
| `./ui-component-tracker`             | internal          | Yamada UI 由来の JSX タグを判定                     |
| `./shorthand-map`                    | internal          | shorthand ⇄ longhand の対応マップ                   |

### `src/rules/props-shorthand/ui-component-tracker.ts`

**役割**: JSX タグが Yamada UI 由来かどうかを追跡するヘルパー（型 checker 非依存・AST のみ）。

**やっていること**:

- `createUIComponentTracker(sourcePackages)` でファイルごとにインスタンス化
- `visitImport(node)` で `sourcePackages` に含まれる import を以下に分類:
  - 名前付き import (`{ Box }`, `{ Box as B }`) → `components` Set に **local 名** で登録
  - `ui` factory の名前付き import (`{ ui }`, `{ ui as u }`) → `namespaces` Set に登録（`<ui.div />` 形式で使われるため）
  - default / namespace import (`import Y from`, `import * as Y`) → `namespaces` Set に登録
- `matchesJSXName(node)` で:
  - `JSXIdentifier`（例: `<Box />`） → `components.has(name)`
  - `JSXMemberExpression`（例: `<Y.Box />`、`<A.B.C />`） → 左端まで辿って `namespaces.has(base.name)`
- 副作用のみ import、別パッケージ import、ネイティブ HTML (`<div />`) は自然に false

| Import 先                  | 種類              | 用途                       |
| -------------------------- | ----------------- | -------------------------- |
| `@typescript-eslint/utils` | external (型のみ) | `TSESTree`（AST ノード型） |

### `src/rules/props-shorthand/shorthand-map.ts`

**役割**: shorthand ⇄ longhand の対応マップを `@yamada-ui/react/core` から実行時派生する。

**やっていること**:

- 初回呼び出し時に `standardStyles` の各定義オブジェクトを `WeakMap<object, string>` で逆引き登録（GC 阻害なし）
- `shorthandStyles` の各 entry に 2 段階のマッチング:
  - **戦略 1**: 値が `standardStyles` のいずれかと **同一オブジェクト参照** → `standardByRef.get(def)` で longhand 名を取得（例: `shorthandStyles.m === standardStyles.margin`）
  - **戦略 2**: `{ properties: ["marginX"], transform: ... }` のように `properties` が単一要素文字列 → それを longhand 名とする（複数要素の合成 shorthand はスキップ）
- 結果を 2 種のマップに格納:
  - `shorthandToLonghand: Map<string, string>` — 1 対 1（`"m" → "margin"`）
  - `longhandToShorthands: Map<string, string[]>` — 1 対多（`"backgroundImage" → ["bgGradient", "bgImage", "bgImg"]`）
- モジュールレベルキャッシュで 2 回目以降は再計算なし
- 複数 shorthand 兄弟の配列順は `Object.entries(shorthandStyles)` の登場順を継承（ルール側が「先頭を採用」する）

| Import 先               | 種類            | 用途                                            |
| ----------------------- | --------------- | ----------------------------------------------- |
| `@yamada-ui/react/core` | external (peer) | `shorthandStyles` / `standardStyles` の元データ |

## 凡例

- **internal**: `packages/lint/src/` 内部のファイル
- **external**: 別パッケージ（`peerDependencies` / `dependencies` / `devDependencies` のいずれか）
- **型のみ**: `import type { ... }` で型情報だけ取り込み、ランタイムには残らない
- **peer**: `peerDependencies` で宣言され、ユーザー側にインストールが委ねられる依存

## 観察ポイント

1. **依存方向は常に親 → 子**
   `index.ts` → `rules/.../index.ts` → `rules/.../{ui-component-tracker,shorthand-map}.ts`。逆方向の依存はなく、コロケーション原則を満たしている。

2. **`ui-component-tracker` は `props-shorthand` ルールにコロケーション**
   現状の消費者は `props-shorthand` の 1 つだけなので、`rules/props-shorthand/` 配下に置く。別ルールから利用したくなった時点で `src/utils/` に昇格させる。

3. **`shorthand-map` も `props-shorthand` ルール専用**
   `rules/props-shorthand/` 配下にコロケーション。他ルールで shorthand マップが必要になったら `src/utils/` に昇格させる動機が出る。

4. **`@yamada-ui/react/core` が唯一の workspace 依存**
   公式の shorthand 定義を `@yamada-ui/react` 本体から借りているので、本体側で対応が増えれば lint も自動追従する設計。

5. **テストは全部 sibling テスト**
   各 `.ts` の隣に `.test.ts` を置く配置。クロスファイルテストはないので、テスト追加時の影響範囲も小さい。
