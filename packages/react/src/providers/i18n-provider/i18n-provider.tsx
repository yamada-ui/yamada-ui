import type { FC, ReactNode } from "react"
import type { TextDirection } from "../../core"
import type { Dict, Path, StringLiteral } from "../../utils"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { DEFAULT_DIRECTION, DEFAULT_LOCALE } from "../../core"
import {
  createdDom,
  getMemoizedObject as get,
  isEmptyObject,
  isObject,
  isUndefined,
  useSsr,
} from "../../utils"
import INTL_MESSAGE from "./data.json"

export interface IntlMessage {
  [key: string]: Dict
}

export const defaultIntlMessage: IntlMessage = INTL_MESSAGE

export interface Language {
  direction: TextDirection
  locale: string
}

const RTL_SCRIPTS = new Set([
  "Adlm",
  "Arab",
  "Hebr",
  "Mand",
  "Mend",
  "Nkoo",
  "Rohg",
  "Samr",
  "Syrc",
  "Thaa",
  "Yezi",
])

const RTL_LANGS = new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
])

const DEFAULT_LANGUAGE: Language = {
  direction: DEFAULT_DIRECTION,
  locale: DEFAULT_LOCALE,
}

export function getLanguage(): Language {
  let locale = createdDom() ? navigator.language : DEFAULT_LOCALE

  try {
    Intl.DateTimeFormat.supportedLocalesOf([locale])
  } catch (_err) {
    locale = DEFAULT_LOCALE
  }

  const direction = isRtl(locale) ? "rtl" : "ltr"

  return { direction, locale }
}

interface I18nContext extends Language {
  t: (
    path: Path<Dict> | StringLiteral,
    replaceValue?: { [key: string]: number | string } | number | string,
    pattern?: string,
  ) => string
}

export const I18nContext = createContext<I18nContext>({
  ...DEFAULT_LANGUAGE,
  t: () => "",
})

export interface I18nProviderProps {
  children?: ReactNode
  /**
   * The text direction to apply to the application.
   *
   * @default 'ltr'
   */
  direction?: TextDirection
  /**
   * The internationalization messages to apply to the application.
   *
   * This prop expects a dictionary object where the keys are locale strings (e.g., "en-US").
   *
   */
  intl?: IntlMessage
  /**
   * The locale to apply to the application.
   *
   * @default 'en-US'
   */
  locale?: string
}

export const I18nProvider: FC<I18nProviderProps> = ({
  children,
  direction: directionProp,
  intl,
  locale,
}) => {
  const ssr = useSsr()
  const [language, setLanguage] = useState(getLanguage())

  const onChangeLanguage = useCallback(() => {
    setLanguage(getLanguage())
  }, [])

  const t = useCallback(
    (
      path: Path<any> | StringLiteral,
      replaceValue?: { [key: string]: number | string } | number | string,
      pattern = "label",
    ) => {
      const messages: IntlMessage = intl ?? defaultIntlMessage
      const currentLocale = locale ?? DEFAULT_LOCALE
      const translations = messages[currentLocale] ?? messages["en-US"]
      let value = get<string>(translations!, path, "")

      if (isUndefined(replaceValue)) return value

      if (!isObject(replaceValue)) {
        value = value.replace(
          new RegExp(`{${pattern}}`, "g"),
          `${replaceValue}`,
        )
      } else {
        value = Object.entries(replaceValue).reduce(
          (prev, [pattern, value]) =>
            prev.replace(new RegExp(`{${pattern}}`, "g"), `${value}`),
          value,
        )
      }

      return value
    },
    [locale, intl],
  )

  const value = useMemo(() => {
    if (ssr) return { ...DEFAULT_LANGUAGE, t }

    if (!locale) return { ...language, t }

    const direction = directionProp ?? (isRtl(locale) ? "rtl" : "ltr")

    return { direction, locale, t }
  }, [locale, ssr, language, directionProp, t])

  useEffect(() => {
    window.addEventListener("languagechange", onChangeLanguage)

    return () => {
      window.removeEventListener("languagechange", onChangeLanguage)
    }
  }, [onChangeLanguage])

  return <I18nContext value={value}>{children}</I18nContext>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (isEmptyObject(context)) return { ...DEFAULT_LANGUAGE, t: () => "" }

  return context
}

export function isRtl(_locale: string) {
  const locale = new Intl.Locale(_locale).maximize()

  if ("textInfo" in locale) return (locale.textInfo as any).direction === "rtl"

  if (locale.script) {
    return RTL_SCRIPTS.has(locale.script)
  } else {
    return RTL_LANGS.has(_locale.split("-")[0]!)
  }
}
