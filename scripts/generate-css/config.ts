import type { CSSObject, ThemeToken, Union } from "@yamada-ui/react"
import type { CSSProperties, UIProperties } from "."
import type { TransformOptions } from "./transform-props"

const generateTransform = (...transforms: TransformOptions[]) => {
  let transform = transforms
    .map(({ args, transform }) => {
      let func = `transforms.${transform}`

      if (args) func += `(${args.map((arg) => `"${arg}"`).join(", ")})`

      return func
    })
    .join(", ")

  transform = transforms.length > 1 ? `pipe(${transform})` : transform

  return `transform: ${transform}`
}

interface GetConfigOptions {
  css?: CSSObject
  isProcessResult?: boolean
  isProcessSkip?: boolean
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transforms?: TransformOptions[]
}

export const generateConfig =
  ({
    css,
    isProcessResult,
    isProcessSkip,
    properties,
    token,
    transforms,
  }: GetConfigOptions) =>
  (isConfig?: boolean) => {
    if (!isConfig && !token && !transforms && !css) return true

    const config: string[] = []

    if (properties) {
      if (typeof properties === "string") {
        const value = `"${properties}"`

        config.push(`properties: ${value}`)
      } else {
        const value = `[${properties.map((p) => `"${p}"`).join(", ")}]`

        config.push(`properties: ${value}`)
      }
    }

    if (token) config.push(`token: "${token}"`)
    if (isProcessResult) config.push(`isProcessResult: true`)
    if (isProcessSkip) config.push(`isProcessSkip: true`)
    if (css) config.push(`static: ${JSON.stringify(css)}`)

    if (transforms || token) {
      transforms ??= []

      if (token) transforms.unshift({ args: [token], transform: "token" })

      config.push(generateTransform(...transforms))
    }

    return `{ ${config.join(", ")} }`
  }
