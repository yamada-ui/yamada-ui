import type { TSESTree } from "@typescript-eslint/utils"
import { parse } from "@typescript-eslint/parser"
import { describe, expect, test } from "vitest"
import { createUIComponentTracker } from "./ui-component-tracker"

// parseCode が AST から取り出した、検証に使うノードのまとまり
// imports: tracker.visitImport に渡す対象
// jsxNames: tracker.matchesJSXName に渡す対象（<Foo /> や <Foo.Bar /> の名前部分の AST）
// variableDeclarators: tracker.visitVariableDeclarator に渡す対象（`const X = ...` の宣言ぶん）
interface ParsedCode {
  imports: TSESTree.ImportDeclaration[]
  jsxNames: TSESTree.JSXTagNameExpression[]
  variableDeclarators: TSESTree.VariableDeclarator[]
}

// コード文字列を AST に変換し、検証に必要な ImportDeclaration と
// JSX タグ名（JSXOpeningElement.name）だけを取り出すテスト用ヘルパー
//
// プロダクションでは ESLint が AST を走査してビジターを呼んでくれるが、
// テスト単体で挙動を確認したいので自前で AST から該当ノードを抽出する
const parseCode = (code: string): ParsedCode => {
  const ast = parse(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  })

  const imports: TSESTree.ImportDeclaration[] = []
  const jsxNames: TSESTree.JSXTagNameExpression[] = []
  const variableDeclarators: TSESTree.VariableDeclarator[] = []

  // AST 全体を再帰的に辿り、必要な type のノードだけ配列に集める
  // node は { type, ... } のオブジェクトか、子ノードを並べた配列のどちらか
  const visit = (node: unknown): void => {
    // null / プリミティブ（文字列・数値・boolean）は AST ノードではないので終了
    if (!node || typeof node !== "object") return

    // 配列なら中身の各要素をさらに辿る（例: body[], specifiers[], children[]）
    if (Array.isArray(node)) {
      for (const item of node) visit(item)
      return
    }

    // type フィールドで欲しいノードかを判定して収集
    const typed = node as { type?: string }
    if (typed.type === "ImportDeclaration") {
      imports.push(node as TSESTree.ImportDeclaration)
    } else if (typed.type === "JSXOpeningElement") {
      // JSXOpeningElement.name が JSXTagNameExpression（タグの名前部分の AST）
      jsxNames.push((node as TSESTree.JSXOpeningElement).name)
    } else if (typed.type === "VariableDeclarator") {
      variableDeclarators.push(node as TSESTree.VariableDeclarator)
    }

    // ノードのプロパティを順に辿って子ノードへ再帰
    for (const key in node) {
      // parent は子 → 親への循環参照になるのでスキップ（無限ループ防止）
      if (key === "parent") continue
      visit((node as Record<string, unknown>)[key])
    }
  }
  visit(ast)
  return { imports, jsxNames, variableDeclarators }
}

// コード文字列から tracker を構築し、import 文と `const X = styled(...)` 系の宣言を
// 全部処理し終えた状態の tracker と、検証用の JSX タグ名一覧を返すテスト用ヘルパー
//
// ESLint の実際の流れ（ImportDeclaration → VariableDeclarator → JSXOpeningElement の preorder）
// を簡略化して再現するため、import → 宣言 の順に登録してから返している
const setupTracker = (
  code: string,
  sourcePackages: readonly string[] = ["@yamada-ui/react"],
) => {
  const { imports, jsxNames, variableDeclarators } = parseCode(code)
  const tracker = createUIComponentTracker(sourcePackages)
  for (const imp of imports) tracker.visitImport(imp)
  for (const decl of variableDeclarators) tracker.visitVariableDeclarator(decl)
  return { jsxNames, tracker }
}

describe("createUIComponentTracker", () => {
  // 名前付き import: sourcePackages から単体で import されたコンポーネントを追跡する
  test("named imports: tracks a bare component imported from sourcePackages", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@yamada-ui/react"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // 名前付き import: ローカルエイリアスで登録し、元の名前は無視する
  test("named imports: registers under the local alias and ignores the original name", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box as B } from "@yamada-ui/react"
      const App = () => (
        <>
          <B />
          <Box />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  // 名前付き import: `styled` factory は namespace の基底として扱う
  test("named imports: treats the `styled` factory as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@yamada-ui/react"
      const App = () => <styled.div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // 名前付き import: `styled` factory は元の export 名で判定し、エイリアスで判定しない
  test("named imports: classifies the `styled` factory by its original exported name, not the alias", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled as s } from "@yamada-ui/react"
      const App = () => (
        <>
          <s.div />
          <styled.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  // 名前付き import: 1 つの import 文に並んだ複数の specifier をまとめて登録する
  test("named imports: registers multiple specifiers from a single import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, HStack, styled } from "@yamada-ui/react"
      const App = () => (
        <>
          <Box />
          <HStack />
          <styled.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[2]!)).toBe(true)
  })

  // namespace import: `import * as Y` を member-access の JSX（<Y.X />）の対象として追跡する
  test("namespace imports: tracks `import * as Y` for member-access JSX", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y.Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // namespace import: 深くネストした member access の最左の基底を解決する（<Y.Foo.Bar /> の Y）
  test("namespace imports: resolves the leftmost base in deeply nested member access", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y.Foo.Bar />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // namespace import: namespace として登録された名前を単体識別子（<Y />）として書いた場合はマッチしない
  test("namespace imports: does not match a bare identifier whose name was registered as a namespace", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // default import: default import は namespace の基底として登録される
  test("default imports: registers default imports as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import YamadaUI from "@yamada-ui/react"
      const App = () => (
        <>
          <YamadaUI.Box />
          <YamadaUI />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  // sourcePackages 以外のパッケージからの import は無視する
  test("ignores imports from packages outside sourcePackages", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@some/other-lib"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // ネイティブな HTML 要素（<div /> など）は無視する
  test("ignores native HTML elements", () => {
    const { jsxNames, tracker } = setupTracker(`
      const App = () => <div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // 副作用のみの import（specifier なし: `import "@yamada-ui/react"`）は無視する
  test("ignores side-effect-only imports (no specifiers)", () => {
    const { jsxNames, tracker } = setupTracker(`
      import "@yamada-ui/react"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // sourcePackages 配列: 列挙されたいずれかのパッケージからの import にマッチする
  test("sourcePackages array: matches imports from any of the listed packages", () => {
    const { jsxNames, tracker } = setupTracker(
      `
        import { Box } from "@yamada-ui/react"
        import { Card } from "@yamada-ui/react/components"
        const App = () => (
          <>
            <Box />
            <Card />
          </>
        )
      `,
      ["@yamada-ui/react", "@yamada-ui/react/components"],
    )
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
  })

  // styled wrapper: `const Wrapped = styled(Box)` で作った変数を追跡対象に追加する
  test("styled wrapper: tracks a variable assigned from the styled factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled } from "@yamada-ui/react"
      const Wrapped = styled(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // styled wrapper: styled factory のエイリアス（styled as s）を呼んでも追跡する
  test("styled wrapper: tracks via the local alias of the styled factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled as s } from "@yamada-ui/react"
      const Wrapped = s(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // styled wrapper: ホスト要素文字列（"button" など）を渡すパターンも追跡する
  test("styled wrapper: tracks when wrapping a host element string", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@yamada-ui/react"
      const Wrapped = styled('button')
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // styled wrapper: チェーン（前段の wrapper を更に wrap）も、各段が factory 経由なら追跡する
  test("styled wrapper: tracks chained wrapping when each step goes through the factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled } from "@yamada-ui/react"
      const First = styled(Box)
      const Second = styled(First)
      const App = () => (
        <>
          <First />
          <Second />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
  })

  // styled wrapper: namespace import 経由（`Y.styled(...)`）の wrap も追跡する
  test("styled wrapper: tracks `Y.styled(Box)` via a namespace import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const Wrapped = Y.styled(Y.Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // styled wrapper: default import 経由（`YamadaUI.styled(...)`）の wrap も追跡する
  test("styled wrapper: tracks `YamadaUI.styled(Box)` via a default import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import YamadaUI from "@yamada-ui/react"
      const Wrapped = YamadaUI.styled(YamadaUI.Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // styled wrapper: 未知の関数（factory 以外）で wrap した場合は追跡しない
  test("styled wrapper: ignores wrappers from unknown factory identifiers", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@yamada-ui/react"
      const Wrapped = withSomething(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // styled wrapper: 別パッケージから来た同名 `styled` 関数による wrap は追跡しない
  test("styled wrapper: ignores a `styled` factory imported from another package", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@some/other-lib"
      const Wrapped = styled('button')
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // styled wrapper: namespace の他メソッド（`Y.somethingElse(...)`）は wrap として扱わない
  test("styled wrapper: ignores `Y.somethingElse(Box)` even when Y is a tracked namespace", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const Wrapped = Y.withSomething(Y.Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  // styled wrapper: 初期化子が CallExpression でない（再代入や identifier のみ）場合は対象外
  test("styled wrapper: ignores non-call initializers", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@yamada-ui/react"
      const Wrapped = styled
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })
})
