import ts from "typescript"

const DEFINE_STYLE_NAMES = ["defineComponentSlotStyle", "defineComponentStyle"]
const OMITTED_DEFAULT_PROPS = ["colorScheme", "size", "variant"]

interface Edit {
  end: number
  start: number
  text: string
}

export function isStyleFile(fileName: string) {
  return fileName.endsWith(".style.ts")
}

export function transformHeadless(content: string) {
  const sourceFile = ts.createSourceFile(
    "style.ts",
    content,
    ts.ScriptTarget.Latest,
    true,
  )
  const edits: Edit[] = []

  function getEmptyText(node: ts.ObjectLiteralExpression) {
    const spreads = node.properties
      .filter((property) => ts.isSpreadAssignment(property))
      .map((property) => property.getText(sourceFile))

    return spreads.length ? `{ ${spreads.join(", ")} }` : "{}"
  }

  function emptyObject(node: ts.Expression) {
    if (!ts.isObjectLiteralExpression(node)) return

    edits.push({
      end: node.getEnd(),
      start: node.getStart(sourceFile),
      text: getEmptyText(node),
    })
  }

  function emptyValues(node: ts.Expression) {
    if (!ts.isObjectLiteralExpression(node)) return

    node.properties.forEach((property) => {
      if (ts.isPropertyAssignment(property)) emptyObject(property.initializer)
    })
  }

  function omitDefaultProps(node: ts.Expression) {
    if (!ts.isObjectLiteralExpression(node)) return

    const properties = node.properties.filter(
      (property) =>
        !(
          ts.isPropertyAssignment(property) &&
          OMITTED_DEFAULT_PROPS.includes(property.name.getText(sourceFile))
        ),
    )

    if (properties.length === node.properties.length) return

    const text = properties.length
      ? `{ ${properties.map((property) => property.getText(sourceFile)).join(", ")} }`
      : "{}"

    edits.push({ end: node.getEnd(), start: node.getStart(sourceFile), text })
  }

  function visit(node: ts.Node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      DEFINE_STYLE_NAMES.includes(node.expression.text)
    ) {
      const slot = node.expression.text === "defineComponentSlotStyle"
      const [arg] = node.arguments

      if (arg && ts.isObjectLiteralExpression(arg)) {
        arg.properties.forEach((property) => {
          if (!ts.isPropertyAssignment(property)) return

          const name = property.name.getText(sourceFile)
          const value = property.initializer

          switch (name) {
            case "base":
              if (slot) {
                emptyValues(value)
              } else {
                emptyObject(value)
              }

              break

            case "compounds":
              if (ts.isArrayLiteralExpression(value))
                edits.push({
                  end: value.getEnd(),
                  start: value.getStart(sourceFile),
                  text: "[]",
                })

              break

            case "defaultProps":
              omitDefaultProps(value)

              break

            case "props":
              if (ts.isObjectLiteralExpression(value)) {
                value.properties.forEach((property) => {
                  if (ts.isPropertyAssignment(property))
                    emptyValues(property.initializer)
                })
              }

              break

            case "sizes":
            case "variants":
              emptyValues(value)

              break

            default:
              break
          }
        })
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)

  return edits
    .sort((a, b) => b.start - a.start)
    .reduce(
      (content, { end, start, text }) =>
        content.slice(0, start) + text + content.slice(end),
      content,
    )
}
