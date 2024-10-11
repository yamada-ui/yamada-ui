import type { ThemeTokens } from "@yamada-ui/core"
import { defaultTheme } from "@yamada-ui/theme"
import { hslaTo, isArray, isString, parseToHsla, TONES } from "@yamada-ui/utils"

function analyzeValue(value: any) {
  const n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { n, unit }
}

function spaces(x: number) {
  if (isNaN(x)) throw new Error("The multiplier must be a valid number.")

  if (!isFinite(x)) throw new Error("The multiplier must be a finite number.")

  if (isString(x)) throw new Error("The multiplier must be a number.")

  const { spaces: defaultSpaces } = defaultTheme

  const generateValue = (value: any) => {
    const { n, unit } = analyzeValue(value)

    return `${n * x}${unit}`
  }

  const computedSpaces = Object.entries(defaultSpaces).reduce<ThemeTokens>(
    (prev, [key, value]) => {
      if (key === "px") {
        prev[key] = value
      } else {
        const resolvedKey = Number(key)

        if (isArray(value)) {
          const [lightValue, darkValue] = value

          prev[resolvedKey] = [
            generateValue(lightValue),
            generateValue(darkValue),
          ]
        } else {
          prev[resolvedKey] = generateValue(value)
        }
      }

      return prev
    },
    {},
  )

  return computedSpaces
}

function tones(hex: string) {
  const [h, s, l, a] = parseToHsla(hex) ?? [0, 0, 0]
  const v = l > 0.5
  const x = ((v ? 1 : 0.95) - l) / 5
  const y = (l - (!v ? 0.05 : 0.15)) / 5

  const tokens = TONES.reduce<ThemeTokens>((prev, tone) => {
    if (tone === 500) {
      prev[tone] = hex
    } else {
      const t = tone / 100
      const w = t > 5
      const u = (w ? t - 5 : 5 - t) * (w ? y : x)
      const z = w ? l - u : l + u

      prev[tone] = hslaTo([h, s, z, a ?? 1])("hex")!
    }

    return prev
  }, {})

  return tokens
}

/**
 * Useful tools for generating theme tokens and other related items.
 */
export const generate = {
  /**
   * Generate tokens by multiplying the default theme's `spaces` with the provided number.
   */
  spaces,
  /**
   * Generate tone colors from 50 to 950 based on the provided hex value.
   */
  tones,
}
