import { useI18n } from "@yamada-ui/core"
import { useFormatNumber } from "./use-format-number"

const bitPrefixes = ["", "kilo", "mega", "giga", "tera"]
const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"]

export interface FormatBytesOptions {
  locale?: string
  unit?: "bit" | "byte"
  unitDisplay?: "long" | "narrow" | "short"
}

/**
 * `useFormatByte` is a custom hook that returns the formatted byte.
 *
 * @see Docs https://yamada-ui.com/hooks/use-format-byte
 */
export const useFormatByte = (
  bytes: number,
  { locale, unit = "byte", unitDisplay = "short" }: FormatBytesOptions = {},
) => {
  const { locale: defaultLocale } = useI18n()

  locale ??= defaultLocale

  const sanitizedBytes = Number.isNaN(bytes) ? 0 : bytes
  const prefix = unit === "bit" ? bitPrefixes : bytePrefixes
  const index = Math.max(
    0,
    Math.min(Math.floor(Math.log10(sanitizedBytes) / 3), prefix.length - 1),
  )
  const value =
    sanitizedBytes === 0
      ? 0
      : Number.parseFloat((sanitizedBytes / 10 ** (3 * index)).toPrecision(3))

  return useFormatNumber(value, {
    style: "unit",
    locale,
    unit: prefix[index] + unit,
    unitDisplay,
  })
}
