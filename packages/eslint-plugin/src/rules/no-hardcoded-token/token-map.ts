import { shorthandStyles, standardStyles } from "@yamada-ui/react/core"
import { theme } from "@yamada-ui/react/theme"

let propTokenScaleCache: Map<string, string> | null = null

export function getPropTokenScaleMap(): Map<string, string> {
  if (propTokenScaleCache) return propTokenScaleCache

  const map = new Map<string, string>()

  for (const [name, def] of [
    ...Object.entries(standardStyles),
    ...Object.entries(shorthandStyles),
  ])
    if (def && typeof def === "object" && "token" in def)
      map.set(name, def.token as string)

  propTokenScaleCache = map

  return map
}

const EXCLUDED_SCALES = new Set([
  "animations",
  "breakpoints",
  "fonts",
  "gradients",
  "keyframes",
  "semanticTokens",
  "shadows",
  "styles",
])

let valueToTokenCache: Map<string, Map<string, string>> | null = null

export function getValueToTokenMap(): Map<string, Map<string, string>> {
  if (valueToTokenCache) return valueToTokenCache

  const result = new Map<string, Map<string, string>>()

  for (const [scaleName, scaleValue] of Object.entries(
    theme as { [key: string]: unknown },
  )) {
    if (EXCLUDED_SCALES.has(scaleName)) continue
    if (!scaleValue || typeof scaleValue !== "object") continue

    const reverseMap = new Map<string, string>()
    const isColors = scaleName === "colors"

    for (const [tokenKey, tokenValue] of Object.entries(
      scaleValue as { [key: string]: unknown },
    ))
      if (tokenValue !== null && typeof tokenValue === "object") {
        for (const [shade, shadeValue] of Object.entries(
          tokenValue as { [key: string]: unknown },
        )) {
          if (typeof shadeValue !== "string") continue
          if (/^(?:tint|shade)\(/.test(shadeValue)) continue
          const key = isColors ? shadeValue.toLowerCase() : shadeValue
          reverseMap.set(key, `${tokenKey}.${shade}`)
        }
      } else if (typeof tokenValue === "string") {
        const key = isColors ? tokenValue.toLowerCase() : tokenValue
        reverseMap.set(key, tokenKey)
      } else if (typeof tokenValue === "number") {
        reverseMap.set(String(tokenValue), tokenKey)
      }

    if (reverseMap.size > 0) result.set(scaleName, reverseMap)
  }

  valueToTokenCache = result

  return result
}
