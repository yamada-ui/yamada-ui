import type { CSSObject, ThemeToken, Union } from "@yamada-ui/react"
import type { TransformOptions } from "./transform-props"
import type { CSSProperties, UIProperties } from "."

const insertTransform = (
  config: string[],
  token: ThemeToken | undefined,
  transform?: Union<TransformOptions>,
) => {
  if (transform) {
    let result = transform

    if (typeof result !== "string") {
      let { transform, additionalTransform, args = "" } = result

      if (additionalTransform) args = `transforms.${additionalTransform}`

      result = `${transform}(${args})`
    }

    if (token) result = `token("${token}", transforms.${result})`

    config = [...config, `transform: transforms.${result}`]
  } else if (token) {
    const result = `token("${token}")`

    config = [...config, `transform: transforms.${result}`]
  }

  return config
}

export const getConfig = ({
  properties,
  token,
  transform,
  css,
  isProcessResult,
}: {
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transform?: TransformOptions
  css?: CSSObject
  isProcessResult?: boolean
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

  if (isProcessResult) config = [...config, `isProcessResult: true`]

  if (css) config = [...config, `static: ${JSON.stringify(css)}`]

  if (transform || token) config = insertTransform(config, token, transform)

  return `{ ${config.join(", ")} }`
}
