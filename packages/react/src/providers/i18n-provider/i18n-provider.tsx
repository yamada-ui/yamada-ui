import type { FC, ReactNode } from "react"
import type { TextDirection } from "../../core"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { DEFAULT_DIRECTION, DEFAULT_LOCALE } from "../../core"
import { createdDom, isEmptyObject, useSsr } from "../../utils"

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

interface I18nContext extends Language {}

export const I18nContext = createContext<I18nContext>({ ...DEFAULT_LANGUAGE })

export interface I18nProviderProps {
  children?: ReactNode
  /**
   * The text direction to apply to the application.
   *
   * @default 'ltr'
   */
  direction?: TextDirection
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
  locale,
}) => {
  const ssr = useSsr()
  const [language, setLanguage] = useState(getLanguage())

  const onChangeLanguage = useCallback(() => {
    setLanguage(getLanguage())
  }, [])

  const value = useMemo(() => {
    if (ssr) return DEFAULT_LANGUAGE

    if (!locale) return language

    const direction = directionProp ?? (isRtl(locale) ? "rtl" : "ltr")

    return { direction, locale }
  }, [locale, ssr, language, directionProp])

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

  if (isEmptyObject(context)) return DEFAULT_LANGUAGE

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
