# no-hardcoded-token 解説

`packages/eslint-plugin/src/rules/no-hardcoded-token/index.ts` に定義されている、Yamada UI コンポーネントの JSX 属性に書かれたハードコードのスタイル値を検出し、対応するデザイントークンへ auto-fix する ESLint ルール。

---

## 全体構造: 3 つのモジュール

| ファイル                              | 用途                                                                   | 例                                   |
| ------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| `index.ts`                            | **ルール本体**。visitor 定義、値の再帰走査、報告と fix                 | `p="1rem"` → `p={4}`                 |
| `token-map.ts`                        | **マップの実行時生成**。prop → スケール、CSS 実値 → トークン名の逆引き | `"p"` → `"spaces"`、`"1rem"` → `"4"` |
| `../../utils/ui-component-tracker.ts` | **コンポーネント判定**。import と `styled(...)` を追跡                 | `<Box />` が Yamada UI 由来か        |

---

## 理解の順序

```
1. ui-component-tracker.ts を読む（依存がなく、状態機械として独立している）
2. token-map.ts を読む（ルールが使う 2 つのマップの中身が分かる）
3. index.ts の visitor（L460-）から reportLiteral（L250-）へ遡って読む
   （入口 → 出口の順に漏斗状の構造をたどれる）
```

---

## 処理の流れ

```
ImportDeclaration ──────────┐
VariableDeclarator ─────────┤→ tracker が「Yamada UI コンポーネント」を記録
                            │
JSXOpeningElement
  │ tracker.matchesJSXName で対象コンポーネントか判定
  │ propTokenScaleMap で prop → スケールを解決（例: p → spaces）
  │ ignoreScales / DETECTION_PATTERNS 未定義スケールを除外
  ▼
checkValueNode（L392-）… 属性値の式を再帰的に走査
  │   Literal / TemplateLiteral / Array / Object / Conditional
  ▼
checkStringValue（L333-）/ checkNumericValue（L352-）
  │   shouldSkipValue（誤検知回避）→ DETECTION_PATTERNS（書式照合）
  ▼
reportLiteral（L250-）
  │   lookupToken で theme 逆引き
  ├─ トークンあり ────→ noHardcodedToken（fix 付き）
  ├─ 負の値 + 数値キー → noHardcodedTokenNoFix（報告のみ）
  └─ トークンなし ────→ noHardcodedTokenNoFix（報告のみ）
```

---

## 検出対象の prop とスケール

prop → スケールの対応は `@yamada-ui/react/core` の `standardStyles` / `shorthandStyles` から実行時に生成する（`token-map.ts` L36-）。正式名（`padding`）と省略形（`p`）の両方が同じスケールに解決される。

検出パターン（`DETECTION_PATTERNS`、`index.ts` L48-）を持つスケールは以下の 14 種:

`aspectRatios` / `blurs` / `borders` / `colors` / `durations` / `easings` / `fontSizes` / `fontWeights` / `letterSpacings` / `lineHeights` / `radii` / `sizes` / `spaces` / `zIndices`

---

## 対応しているパターン

### auto-fix（theme 値と完全一致する場合）

トークンのキーが数値なら `{n}` 形式、文字列なら `"name"` 形式に変換する。

```tsx
// NG → auto-fix 後
<Box p="1rem" />           // → <Box p={4} />（数値キートークン）
<Box p="0.25rem" />        // → <Box p={1} />
<Box fontSize="0.75rem" /> // → <Box fontSize="xs" />
<Box color="#e2edfd" />    // → <Box color="blue.50" />
<Box rounded="9999px" />   // → <Box rounded="full" />
<Box fontWeight="700" />   // → <Box fontWeight="bold" />
<Box fontWeight={700} />   // → <Box fontWeight={"bold"} />
<Box lineHeight={1.5} />   // → <Box lineHeight={"moderate"} />
<Box zIndex="9999" />      // → <Box zIndex="beerus" />
<Box aspectRatio="16 / 9" />          // → <Box aspectRatio="wide" />
<Box border="1px solid" />            // → <Box border="sm" />
<Box animationDuration="200ms" />     // → <Box animationDuration="moderate" />
```

ポイント: 数値リテラルの検査対象は `fontWeights` / `lineHeights` / `zIndices` の 3 スケールのみ（`checkNumericValue` L352-）。`spaces` / `sizes` などの数値（`p={4}`）は「すでにトークン参照」なので検査しない。

### 値の書式ゆれの吸収

```tsx
<Box color="#E2EDFD" />               // ✅ 大文字 hex も小文字に正規化して照合
<Box bg="rgba(0, 0, 0, 0.36)" />      // ✅ rgb / rgba / hsl / hsla 構文も照合
```

### コンテナ形式（再帰走査、`checkValueNode` L392-）

```tsx
// レスポンシブ配列
<Box p={["0.25rem", "0.5rem"]} />        // ✅ 各要素を個別に検出・fix（2 エラー）

// レスポンシブオブジェクト
<Box p={{ base: "1rem", md: "2rem" }} /> // ✅ 各値を個別に検出・fix

// 三項演算子
<Box p={cond ? "1rem" : "2rem"} />       // ✅ 両分岐を検出・fix

// 式の埋め込みがないテンプレートリテラル
<Box p={`0.25rem`} />                    // ✅ → <Box p={1} />

// これらのネストした組み合わせ（再帰的に走査）
<Box p={{ base: cond ? "1rem" : ["2rem", "3rem"], md: "4rem" }} /> // ✅

// `=` 前後の空白があっても安全に fix（リテラルノードだけを置換するため）
<Box p = "0.25rem" />                    // ✅ → <Box p = {1} />
```

### コンポーネントの判定（`ui-component-tracker.ts`）

`sources` オプションのパッケージ（デフォルト: `@yamada-ui/react`, `@workspaces/ui`）からの import を起点に追跡する。

```tsx
import { Box } from "@yamada-ui/react" // ✅ named import
import { Box as MyBox } from "@yamada-ui/react" // ✅ エイリアス（local 名で追跡）
import * as Y from "@yamada-ui/react" // ✅ namespace import（<Y.Box />）
import Y from "@yamada-ui/react" // ✅ default import（<Y.Box />）

import { Box, styled } from "@yamada-ui/react"
const StyledBox = styled(Box) // ✅ styled ファクトリのラッパー
const StyledBox2 = styled(StyledBox) // ✅ ラッパーの多段チェーンも追跡される
const StyledDiv = styled("div") // ✅ タグ名からの生成
const A = Y.styled("div") // ✅ namespace 経由の styled
// <styled.div /> のような JSX メンバーアクセスも namespace 判定でヒットする
```

---

## 対応していないパターン

### 動的な値

```tsx
const spacing = "1rem"
<Box p={spacing} />          // ❌ 検出されない（静的リテラルのみ対象）

<Box p={`${size}rem`} />     // ❌ 式入りテンプレートリテラルは対象外

<Box p={isWide && "1rem"} /> // ❌ 論理演算子は対象外（三項演算子は対応）
```

### 数値リテラルの制限

```tsx
<Box fontSize={12} />      // ❌ fontSizes は数値リテラル検査の対象外
<Box fontWeight={450} />   // ❌ 100〜900 の 100 刻みのみ対象（isFontWeightMultipleOf100 L131-）
```

### 複合値の分解

```tsx
<Box border="1px solid #000000" /> // ❌ borders パターンは "Npx solid" に完全一致のみ。
//    色部分だけを取り出しての検出はしない
```

### 対象外のスケール（`token-map.ts` L67- の `EXCLUDED_SCALES`）

`animations` / `breakpoints` / `fonts` / `gradients` / `keyframes` / `semanticTokens` / `shadows` / `styles` は逆引きマップから除外されており、トークン提案の対象外。

```tsx
<Box boxShadow="0 1px 2px rgba(0,0,0,0.05)" /> // ❌ 報告されない
```

### style props 以外の経路

```tsx
<Box style={{ padding: 16 }} /> // ❌ style prop はトークンスケールに紐づかないため対象外
<Box {...styleProps} />         // ❌ spread 属性は静的解析できないため対象外
```

### コンポーネント追跡の限界

```tsx
import { Box } from "./my-components" // ❌ 再エクスポート経由は sources に
//    パッケージ名を追加しない限り追跡不可

const X = styled(Box)({ padding: "1rem" }) // ❌ チェーン呼び出しは未対応
//    （callee が CallExpression になるため）
const Y = styled.div // ❌ 変数宣言でのメンバーアクセス形式は未対応
```

### 検出はするが fix しないケース

```tsx
<Box m="-0.25rem" /> // ⚠️ noHardcodedTokenNoFix（報告のみ）。
                     //    負の値 + 数値キートークンは m={-1} への機械的置換が
                     //    安全でないため fix しない（reportLiteral L250- 参照）
<Box p="14px" />     // ⚠️ noHardcodedTokenNoFix。書式は spaces らしいが
                     //    theme に一致する値がない
```

---

## 誤検知を避けるスキップ条件（`shouldSkipValue` L155-）

| 条件                     | 例                                  | 理由                                                                                                                |
| ------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| CSS グローバルキーワード | `auto` / `inherit` / `none` など    | トークン化の対象ではない正当な値                                                                                    |
| ゼロ値                   | `0` / `0px` / `0rem` / `0em`        | トークン化する意味がない                                                                                            |
| CSS 関数                 | `calc()` / `var()` / `clamp()` など | 静的に解決できない                                                                                                  |
| スペース含み値           | `10px 20px`                         | 複数値の一括指定とみなす。ただし `borders` / `colors` / `easings` / `aspectRatios` は値自体にスペースを含むため例外 |
| トークン名そのもの       | `p="md"` / `p="4"`（単位なし）      | 検出パターンに一致しないため素通し                                                                                  |

---

## 具体例: なぜ対応表をハードコードしないのか

素朴に書くなら `{ "1rem": "4", "#e2edfd": "blue.50", ... }` の静的な対応表を持てばよいが、Yamada UI 側でトークンが追加・変更されるたびにプラグインの更新が必要になり、必ずズレる。

このルールは `@yamada-ui/react` を peerDependency とし、`standardStyles` / `theme` の実データから両マップを実行時に生成する（`token-map.ts`）。利用者がインストールしている Yamada UI のバージョンに自動で追従し、生成コストはモジュールレベルのキャッシュで 1 回に抑えている。

---

## デモコード（テストより）

テストファイル: `packages/eslint-plugin/src/rules/no-hardcoded-token/index.test.ts`

```tsx
// styled ファクトリのラッパーも追跡される
import { Box, styled } from "@yamada-ui/react"
const StyledBox = styled(Box)
const App = () => <StyledBox p="0.25rem" />
// → <StyledBox p={1} /> に fix（messageId: noHardcodedToken）

// theme に一致しない値は報告のみ
import { Box } from "@yamada-ui/react"
const App2 = () => <Box p="14px" />
// → fix なし（messageId: noHardcodedTokenNoFix, scale: "spaces"）
```

### テストの実行

```bash
pnpm eslint-plugin test -- --run
```
