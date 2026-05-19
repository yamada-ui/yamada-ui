import type { TSESTree } from "@typescript-eslint/utils"
import { parse } from "@typescript-eslint/parser"
import { describe, expect, test } from "vitest"
import { createUIComponentTracker } from "./ui-component-tracker"

// parseCode が AST から取り出した、検証に使うノードのまとまり
// imports: tracker.visitImport に渡す対象
// jsxNames: tracker.matchesJSXName に渡す対象（<Foo /> や <Foo.Bar /> の名前部分の AST）
interface ParsedCode {
  imports: TSESTree.ImportDeclaration[]
  jsxNames: TSESTree.JSXTagNameExpression[]
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
    }

    // ノードのプロパティを順に辿って子ノードへ再帰
    for (const key in node) {
      // parent は子 → 親への循環参照になるのでスキップ（無限ループ防止）
      if (key === "parent") continue
      visit((node as Record<string, unknown>)[key])
    }
  }
  visit(ast)
  return { imports, jsxNames }
}

// コード文字列から tracker を構築し、import 文を全部 visitImport に渡し終わった
// 状態の tracker と、検証用の JSX タグ名一覧を返すテスト用ヘルパー
//
// ESLint の実際の流れ（ImportDeclaration を全部見終わってから JSXOpeningElement を見る）
// を再現するため、import の登録を先に済ませてから返している
const setupTracker = (
  code: string,
  sourcePackages: readonly string[] = ["@yamada-ui/react"],
) => {
  const { imports, jsxNames } = parseCode(code)
  const tracker = createUIComponentTracker(sourcePackages)
  for (const imp of imports) tracker.visitImport(imp)
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

  // 名前付き import: `ui` factory は namespace の基底として扱う
  test("named imports: treats the `ui` factory as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { ui } from "@yamada-ui/react"
      const App = () => <ui.div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  // 名前付き import: `ui` factory は元の export 名で判定し、エイリアスで判定しない
  test("named imports: classifies the `ui` factory by its original exported name, not the alias", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { ui as u } from "@yamada-ui/react"
      const App = () => (
        <>
          <u.div />
          <ui.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  // 名前付き import: 1 つの import 文に並んだ複数の specifier をまとめて登録する
  test("named imports: registers multiple specifiers from a single import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, HStack, ui } from "@yamada-ui/react"
      const App = () => (
        <>
          <Box />
          <HStack />
          <ui.div />
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
})
