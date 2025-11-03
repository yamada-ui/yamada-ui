import type { Namespace, Props } from "@/data"

export function isNamespace(data: Namespace | Props): data is Namespace {
  const key = Object.keys(data).at(0)!
  const first = key.charAt(0)

  return first === first.toUpperCase()
}

export function isSingle(data: { [key: string]: Namespace | Props }) {
  return Object.keys(data).length === 1 && !isNamespace(Object.values(data)[0]!)
}

function sortRoot([a]: [string, any], [b]: [string, any]) {
  return a.endsWith("Root") ? -1 : b.endsWith("Root") ? 1 : a.localeCompare(b)
}

interface GetDataOptions {
  cwd?: string
  omit?: string[]
  pick?: string[]
}

export async function getProps(
  name: string,
  { cwd = "@", omit, pick }: GetDataOptions = {},
) {
  const data = (
    await import(`${cwd}/data/props/${name}.json`, {
      with: { type: "json" },
    })
  ).default as { [key: string]: Namespace | Props }

  return Object.fromEntries(
    Object.entries(data)
      .sort(sortRoot)
      .filter(([rootName]) => !pick || pick.includes(rootName))
      .filter(([rootName]) => !omit?.includes(rootName))
      .map(([rootName, propsOrNamespace]) => {
        if (isNamespace(propsOrNamespace)) {
          return [
            rootName,
            Object.fromEntries(
              Object.entries(propsOrNamespace)
                .sort(sortRoot)
                .filter(
                  ([name]) => !pick || pick.includes(`${rootName}.${name}`),
                )
                .filter(([name]) => !omit?.includes(`${rootName}.${name}`)),
            ),
          ]
        } else {
          return [rootName, propsOrNamespace]
        }
      }),
  ) as { [key: string]: Namespace | Props }
}
