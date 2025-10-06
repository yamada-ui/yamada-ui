"use client"

import type { Locale } from "../../providers/i18n-provider"
import type { AnyString } from "../../utils"
import { useCallback } from "react"
import { useI18n } from "../../providers/i18n-provider"
import { useNumberFormat } from "./use-format-number"

const bitPrefixes = ["", "kilo", "mega", "giga", "tera"]
const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"]

export interface FormatBytesOptions {
  /**
   * The locale string to use for formatting.
   *
   * @default 'en-US'
   */
  locale?: AnyString | Locale
  /**
   * The unit granularity to display
   */
  unit?: "bit" | "byte"
  /**
   * The unit display
   */
  unitDisplay?: "long" | "narrow" | "short"
}

/**
 * `useFormatByte` is a custom hook that returns the formatted byte.
 *
 * @see https://yamada-ui.com/docs/hooks/use-format-byte
 */
export const useFormatByte = (bytes: number, options?: FormatBytesOptions) => {
  const byteFormat = useByteFormat(options)

  return byteFormat(bytes)
}

export type UseFormatByteReturn = ReturnType<typeof useFormatByte>

export const useByteFormat = ({
  locale,
  unit: defaultUnit = "byte",
  unitDisplay: defaultUnitDisplay = "short",
}: FormatBytesOptions = {}) => {
  const { locale: defaultLocale } = useI18n()
  const numberFormat = useNumberFormat({ locale: locale ?? defaultLocale })

  const byteFormat = useCallback(
    (
      bytes: number,
      {
        unit = defaultUnit,
        unitDisplay = defaultUnitDisplay,
      }: Omit<FormatBytesOptions, "locale"> = {},
    ) => {
      const sanitizedBytes = Number.isNaN(bytes) ? 0 : bytes
      const prefix = unit === "bit" ? bitPrefixes : bytePrefixes
      const index = Math.max(
        0,
        Math.min(Math.floor(Math.log10(sanitizedBytes) / 3), prefix.length - 1),
      )
      const value =
        sanitizedBytes === 0
          ? 0
          : Number.parseFloat(
              (sanitizedBytes / 10 ** (3 * index)).toPrecision(3),
            )

      return numberFormat(value, {
        style: "unit",
        unit: prefix[index] + unit,
        unitDisplay,
      })
    },
    [defaultUnit, defaultUnitDisplay, numberFormat],
  )

  return byteFormat
}

export type UseByteFormatReturn = ReturnType<typeof useByteFormat>
