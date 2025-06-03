import type { CSSObject } from "@emotion/styled"
import type { AnyString, ThemeToken } from "@yamada-ui/react"
import type { CSSProperties, StyledProperties } from "."
import type { TransformOptions } from "./transform-props"

function generateTransform(...transforms: TransformOptions[]) {
  let transform = transforms
    .map(({ args, transform }) => {
      let fn = `transforms.${transform}`

      if (args) fn += `(${args.map((arg) => `"${arg}"`).join(", ")})`

      return fn
    })
    .join(", ")

  transform = transforms.length > 1 ? `pipe(${transform})` : transform

  return `transform: ${transform}`
}

interface GetConfigOptions {
  css?: CSSObject
  properties?: (AnyString | CSSProperties | StyledProperties)[]
  token?: ThemeToken
  transforms?: TransformOptions[]
}

export function generateConfig({
  css,
  properties,
  token,
  transforms,
}: GetConfigOptions) {
  return function (isConfig?: boolean) {
    if (!isConfig && !token && !transforms && !css) return true

    const config: string[] = []

    if (properties) {
      const value = `[${properties.map((p) => `"${p}"`).join(", ")}]`

      config.push(`properties: ${value}`)
    }

    if (token) config.push(`token: "${token}"`)
    if (css) config.push(`static: ${JSON.stringify(css)}`)

    if (transforms || token) {
      transforms ??= []

      if (token) transforms.unshift({ args: [token], transform: "token" })

      config.push(generateTransform(...transforms))
    }

    return `{ ${config.join(", ")} }`
  }
}
