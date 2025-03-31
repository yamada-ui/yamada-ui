import type { FC, ReactNode } from "react"
import type { TextDirection } from "../../core"
import type { Dict, Path, Value } from "../../utils"
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
  isRtl,
  isUndefined,
  noop,
  useSsr,
  useUpdateEffect,
} from "../../utils"
import DEFAULT_INTL from "./intl"

export interface Language {
  dir: TextDirection
  locale: string
}

const DEFAULT_LANGUAGE: Language = {
  dir: DEFAULT_DIRECTION,
  locale: DEFAULT_LOCALE,
}

export function getLanguage(locale?: string, dir?: TextDirection): Language {
  locale ??= createdDom() ? navigator.language : DEFAULT_LOCALE

  try {
    Intl.DateTimeFormat.supportedLocalesOf([locale])
  } catch (_err) {
    locale = DEFAULT_LOCALE
  }

  dir ??= isRtl(locale) ? "rtl" : "ltr"

  return { dir, locale }
}

type Pattern<Y> = Y extends `${string}{${infer M}}${infer D}`
  ? M | Pattern<D>
  : never

type PatternValue = number | string

type ReplaceValue<Y> =
  Pattern<Y> extends never
    ? never
    : PatternValue | { [M in Pattern<Y>]: PatternValue }

type IntlData = (typeof DEFAULT_INTL)["en-US"]
type IntlKey = keyof IntlData
type IntlPath = Path<IntlData>

interface I18nContext<Y extends object = IntlData, M extends string = IntlPath>
  extends Language {
  changeLanguage: (locale?: string, dir?: TextDirection) => void
  t: <D extends M>(
    path: D,
    replaceValue?: ReplaceValue<Value<Y, D>>,
    pattern?: string,
  ) => string
}

export const I18nContext = createContext<I18nContext>({
  ...DEFAULT_LANGUAGE,
  changeLanguage: noop,
  t: () => "",
})

export interface I18nProviderProps {
  children?: ReactNode
  /**
   * The text direction to apply to the application.
   *
   * If not provided, the direction will be determined by the locale.
   */
  dir?: TextDirection
  /**
   * The internationalization messages to apply to the application.
   *
   * This prop expects a dictionary object where the keys are locale strings (e.g., "en-US").
   */
  intl?: Dict
  /**
   * The locale to apply to the application.
   *
   * If not provided, the locale will be determined by the browser.
   */
  locale?: string
}

export const I18nProvider: FC<I18nProviderProps> = ({
  children,
  dir: forcedDir,
  intl = DEFAULT_INTL as Dict,
  locale: forcedLocale,
}) => {
  const ssr = useSsr()
  const [language, setLanguage] = useState(getLanguage(forcedLocale, forcedDir))
  const controlled = !isUndefined(forcedLocale)
  const { locale } = language

  const messages = useMemo(() => intl[locale], [intl, locale])

  const changeSystemLanguage = useCallback(() => {
    setLanguage(getLanguage())
  }, [])

  const changeLanguage = useCallback((locale?: string, dir?: TextDirection) => {
    setLanguage(getLanguage(locale, dir))
  }, [])

  const translate = useCallback(
    <Y extends IntlPath>(
      path: Y,
      replaceValue?: ReplaceValue<Value<IntlData, Y>>,
      pattern = "label",
    ) => {
      let value = get<string>(messages, path, "")

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
    [messages],
  )

  const value = useMemo(() => {
    const rest = { changeLanguage, t: translate }

    if (ssr) return { ...DEFAULT_LANGUAGE, ...rest }

    return { ...language, ...rest }
  }, [changeLanguage, translate, ssr, language])

  useEffect(() => {
    if (controlled) return

    window.addEventListener("languagechange", changeSystemLanguage)

    return () => {
      window.removeEventListener("languagechange", changeSystemLanguage)
    }
  }, [controlled, changeSystemLanguage])

  useUpdateEffect(() => {
    setLanguage(getLanguage(forcedLocale, forcedDir))
  }, [forcedLocale, forcedDir])

  return <I18nContext value={value}>{children}</I18nContext>
}

export function useI18n(): I18nContext

export function useI18n<Y extends IntlKey>(
  key: Y,
): I18nContext<IntlData[Y], Path<IntlData[Y]>>

export function useI18n<Y extends IntlKey>(key?: Y) {
  const context = useContext(I18nContext)

  const translate = useCallback(
    <M extends Path<IntlData[Y]>>(
      path: M,
      replaceValue?: ReplaceValue<M>,
      pattern = "label",
    ) => context.t(`${key!}.${path}` as any, replaceValue, pattern),
    [key, context],
  )

  if (isEmptyObject(context))
    return {
      ...DEFAULT_LANGUAGE,
      changeLanguage: noop,
      t: () => "",
    }

  if (key) {
    return { ...context, t: translate }
  } else {
    return context
  }
}
