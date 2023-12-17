import type { CSSObject, ThemeToken, Union } from "@yamada-ui/react"
import type { TransformOptions } from "./transform-props"
import type { CSSProperties, UIProperties } from "."

const insertTransform = (
  config: string[],
  token: ThemeToken | undefined,
  transform: Union<TransformOptions>,
) => {
  let result = transform

  if (typeof result !== "string") {
    let { transform, additionalTransform, args = "" } = result

    if (additionalTransform) args = `transforms.${additionalTransform}`

    result = `${transform}(${args})`
  }

  if (token) result = `token("${token}", transforms.${result})`

  config = [...config, `transform: transforms.${result}`]

  return config
}

export const getConfig = ({
  properties,
  token,
  transform,
  css,
}: {
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transform?: TransformOptions
  css?: CSSObject
}) => {
  if (!token && !transform && !css) return true

  let config: string[] = []

  if (properties) {
    if (typeof properties === "string") {
      const value = `"${properties}"`

      config = [...config, `properties: ${value}`]
    } else {
      const value = `[${properties.map((p) => `"${p}"`).join(", ")}]`

      config = [...config, `properties: ${value}`]
    }
  }

  if (token) config = [...config, `token: "${token}"`]

  if (css) config = [...config, `static: ${JSON.stringify(css)}`]

  if (transform) config = insertTransform(config, token, transform)

  return `{ ${config.join(", ")} }`
}
