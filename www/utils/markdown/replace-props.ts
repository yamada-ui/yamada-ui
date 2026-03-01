import type { Props } from "@/data"
import { getProps, isNamespace, isSingle } from "@/utils/props"
import { createTable } from "./create-table"

function createRows(props: Props) {
  return Object.entries(props).map(
    ([name, { type, defaultValue, description }]) => {
      return [
        `\`${name}\``,
        defaultValue ? `\`${defaultValue}\`` : "-",
        `\`${type.replaceAll("|", "\\|")}\``,
        description
          ? description.replace(/```[\s\S]*?```/g, "").replaceAll("\n", " ")
          : "-",
      ]
    },
  )
}

export async function replaceProps(text: string) {
  try {
    const headers = ["Prop", "Default", "Type", "Description"]
    const matches = text.matchAll(
      /<PropsTable(?:\s+name="([^"]+)")?(?:\s+(all))?(?:\s+omit=\{(\[.*?\])\})?(?:\s+pick=\{(\[.*?\])\})?\s*\/>/g,
    )

    for (const match of matches) {
      const name = match[1]

      if (!name) continue

      const target = match[0]
      const all = match[2] === "all"
      const omit = match[3] ? JSON.parse(match[3]) : undefined
      const pick = match[4] ? JSON.parse(match[4]) : undefined
      const data = await getProps(name, { cwd: "..", omit, pick })
      const single = isSingle(data)
      const namespace = Object.values(data).some((data) => isNamespace(data))
      const content = Object.entries(data)
        .flatMap(([rootName, propsOrNamespace]) => {
          if (isNamespace(propsOrNamespace)) {
            return Object.entries(propsOrNamespace).flatMap(([name, props]) => {
              return [
                !single ? `### ${rootName}.${name}` : null,
                createTable(headers, createRows(props)),
              ]
            })
          } else if (!namespace || all) {
            return [
              !single ? `### ${rootName}` : null,
              createTable(headers, createRows(propsOrNamespace)),
            ]
          } else {
            return []
          }
        })
        .filter(Boolean)
        .join("\n\n")

      text = text.replace(target, content)
    }

    return text
  } catch {
    return text
  }
}
