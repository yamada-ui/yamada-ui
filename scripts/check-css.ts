import { styles } from "@yamada-ui/react"
import { glob } from "glob"
import { JSDOM } from "jsdom"
import ListIt from "list-it"
import ora from "ora"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"

const list = new ListIt({
  headerBold: true,
  headerColor: "green",
  headerUnderline: true,
})

const SOURCE = "https://developer.mozilla.org"

const toCamelCase = (value: string & {}) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

const getDoc = async () => {
  const res = await fetch(SOURCE + "/docs/Web/CSS")
  const data = await res.text()

  const dom = new JSDOM(data)

  return dom.window.document
}

const getCSSProperties = (doc: Document) => {
  const list = doc.querySelectorAll(".sidebar-body details")

  const item = Array.from(list).find((item) => {
    const summary = item.querySelector("summary")

    return summary?.textContent?.trim() === "Properties"
  })

  const els = item?.querySelectorAll("li a") as HTMLAnchorElement[] | undefined

  if (!els) return []

  return Array.from(els)
    .filter(
      ({ textContent }) => textContent && !/^(-moz|-webkit)/.test(textContent),
    )
    .map((el) => ({
      origin: el.textContent ?? "",
      name: toCamelCase(el.textContent ?? ""),
      href: SOURCE + el.href,
    }))
}

const getCSSTypes = async () => {
  const typeInfo: Record<string, string> = {}

  const paths = await glob("node_modules/**/csstype/index.d.ts")

  const path = paths[0]

  if (!path) return typeInfo

  const { getSourceFile, getTypeChecker } = createProgram([path], {})

  const sourceFile = getSourceFile(path)
  const typeChecker = getTypeChecker()

  if (!sourceFile) return typeInfo

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      isInterfaceDeclaration(statement) || isTypeAliasDeclaration(statement),
  )

  for (const typeStatement of typeStatements) {
    const type = typeChecker.getTypeAtLocation(typeStatement)
    const symbol = type.getSymbol()
    const name = symbol?.getName()

    if (name !== "StandardProperties") continue

    for (const property of type.getProperties()) {
      const name = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)
      const nonNullableType = type.getNonNullableType()
      const value = typeChecker.typeToString(nonNullableType)

      typeInfo[name] = value
    }

    break
  }

  return typeInfo
}

const main = async () => {
  const spinner = ora("Getting CSS differences").start()

  try {
    const start = process.hrtime.bigint()

    const cssTypes = await getCSSTypes()

    spinner.text = `Got the "csstype" module`

    const doc = await getDoc()

    spinner.text = `Got the "MDN Web Docs" document`

    const cssProperties = getCSSProperties(doc)

    spinner.text = `Got the css properties from the document`

    const typeProperties = Object.keys(cssTypes)
    const uiProperties = Object.keys(styles)
    const omittedProperties = cssProperties.filter(
      ({ name }) =>
        !uiProperties.includes(name) && typeProperties.includes(name),
    )

    const table = omittedProperties.map(({ origin, name, href }, index) => ({
      row: index + 1,
      name: origin,
      csstype: cssTypes[name],
      url: href,
    }))

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    spinner.succeed(`Done in ${duration}s\n`)

    if (table.length) {
      console.log(list.d(table).toString())
    } else {
      console.log("Not Found")
    }
  } catch (e) {
    spinner.fail("An error occurred\n")

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
  }
}

main()
