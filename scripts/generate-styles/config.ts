import type { EmotionCSSObject, ThemeToken, Union } from "@yamada-ui/react"
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
  css?: EmotionCSSObject
  processResult?: boolean
  processSkip?: boolean
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transforms?: TransformOptions[]
}

export const generateConfig =
  ({
    css,
    processResult,
    processSkip,
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
    if (processResult) config.push(`processResult: true`)
    if (processSkip) config.push(`processSkip: true`)
    if (css) config.push(`static: ${JSON.stringify(css)}`)

    if (transforms || token) {
      transforms ??= []

      if (token) transforms.unshift({ args: [token], transform: "token" })

      config.push(generateTransform(...transforms))
    }

    return `{ ${config.join(", ")} }`
  }
