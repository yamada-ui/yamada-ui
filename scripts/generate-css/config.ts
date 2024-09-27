import type { TransformOptions } from "./transform-props"
import type { CSSProperties, UIProperties } from "."
import type { CSSObject, ThemeToken, Union } from "@yamada-ui/react"

const generateTransform = (...transforms: TransformOptions[]) => {
  let transform = transforms
    .map(({ transform, args }) => {
      let func = `transforms.${transform}`

      if (args) func += `(${args.map((arg) => `"${arg}"`).join(", ")})`

      return func
    })
    .join(", ")

  transform = transforms.length > 1 ? `pipe(${transform})` : transform

  return `transform: ${transform}`
}

interface GetConfigOptions {
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transforms?: TransformOptions[]
  css?: CSSObject
  isProcessResult?: boolean
  isProcessSkip?: boolean
}

export const generateConfig =
  ({
    properties,
    token,
    transforms,
    css,
    isProcessResult,
    isProcessSkip,
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

      if (token) transforms.unshift({ transform: "token", args: [token] })

      config.push(generateTransform(...transforms))
    }

    return `{ ${config.join(", ")} }`
  }
