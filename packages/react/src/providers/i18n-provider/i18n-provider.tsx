"use client"

import type { Formats, Options } from "intl-messageformat"
import type { FC, ReactNode } from "react"
import type { TextDirection } from "../../core"
import type { AnyString, Dict, Path, Value } from "../../utils"
import type { IcuArgs } from "./icu.types"
import type { DefaultIntlData } from "./intl"
import IntlMessageFormat from "intl-messageformat"
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
  isRtl,
  isString,
  isUndefined,
  noop,
  useUpdateEffect,
} from "../../utils"
import INTL from "./intl"

export interface Language {
  dir: TextDirection
  locale: string
}

const DEFAULT_LANGUAGE: Language = {
  dir: DEFAULT_DIRECTION,
  locale: DEFAULT_LOCALE,
}

export const LOCALES = Object.keys(INTL) as readonly Locale[]

type IntlData = DefaultIntlData
type IntlKey = keyof IntlData
type IntlPath = Path<IntlData>

export type Locale = keyof typeof INTL

type Translation<Y extends object = IntlData, M extends string = IntlPath> = <
  D extends M,
>(
  path: D,
  ...args: IcuArgs<Value<Y, D>> extends never
    ? [replaceValues?: IcuArgs<Value<Y, D>, IntlPath | M>]
    : [replaceValues: IcuArgs<Value<Y, D>, IntlPath | M>]
) => string

interface I18nContext<
  Y extends object = IntlData,
  M extends string = IntlPath,
> extends Language {
  t: Translation<Y, M>
  changeLanguage: (locale?: string, dir?: TextDirection) => void
  getTranslation: (key?: IntlKey) => Translation<Y, M>
}

export const I18nContext = createContext<I18nContext>({
  ...DEFAULT_LANGUAGE,
  changeLanguage: noop,
  getTranslation: () => () => "",
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
   * The fallback locale to use if no matching locale is available.
   */
  fallbackLocale?: AnyString | Locale
  /**
   * The formats to pass to the `intlMessageFormat` instance.
   */
  formats?: Formats
  /**
   * The internationalization messages to apply to the application.
   *
   * This prop expects a dictionary object where the keys are locale strings (e.g., "en-US").
   */
  intl?: Dict
  /**
   * The options to pass to the `intlMessageFormat` instance.
   */
  intlMessageFormatOptions?: Options
  /**
   * The locale to apply to the application.
   *
   * If not provided, the locale will be determined by the browser.
   */
  locale?: AnyString | Locale
}

export const I18nProvider: FC<I18nProviderProps> = ({
  children,
  dir: forcedDir,
  fallbackLocale = DEFAULT_LOCALE,
  formats,
  intl: forcedIntl,
  intlMessageFormatOptions,
  locale: forcedLocale,
}) => {
  const intl = useMemo<Dict>(() => {
    if (!forcedIntl) return INTL

    if (isEmptyObject(forcedIntl)) return INTL

    return forcedIntl
  }, [forcedIntl])
  const locales = useMemo(() => Object.keys(intl), [intl])

  const getFallbackLocale = useCallback(
    (language?: string) => {
      if (language)
        for (const key of locales) if (key.startsWith(language)) return key

      if (locales.includes(fallbackLocale)) return fallbackLocale

      if (createdDom()) {
        try {
          const { language } = new Intl.Locale(fallbackLocale)

          for (const key of locales) if (key.startsWith(language)) return key
        } catch {
          return locales[0]!
        }
      } else {
        const language = fallbackLocale.split("-")[0]!

        for (const key of locales) if (key.startsWith(language)) return key
      }

      return locales[0]!
    },
    [locales, fallbackLocale],
  )

  const getLocale = useCallback(
    (forcedLocale?: string) => {
      if (forcedLocale) {
        if (locales.includes(forcedLocale)) return forcedLocale

        const language = forcedLocale.split("-")[0]!

        return getFallbackLocale(language)
      } else if (createdDom()) {
        try {
          const { language, region } = new Intl.Locale(navigator.language)
          const locale = `${language}-${region}`

          return locales.includes(locale) ? locale : getFallbackLocale(language)
        } catch {
          return getFallbackLocale()
        }
      } else {
        return getFallbackLocale()
      }
    },
    [locales, getFallbackLocale],
  )

  const getLanguage = useCallback(
    (locale?: string, dir?: TextDirection): Language => {
      locale = getLocale(locale)

      try {
        Intl.DateTimeFormat.supportedLocalesOf([locale])
      } catch {
        locale = getFallbackLocale()
      }

      dir ??= isRtl(locale) ? "rtl" : "ltr"

      return { dir, locale }
    },
    [getLocale, getFallbackLocale],
  )

  const [{ dir, locale }, setLanguage] = useState(
    getLanguage(forcedLocale, forcedDir),
  )
  const controlled = !isUndefined(forcedLocale)

  const messages = useMemo(() => intl[locale], [intl, locale])

  const changeSystemLanguage = useCallback(() => {
    setLanguage(getLanguage())
  }, [getLanguage])

  const changeLanguage = useCallback(
    (locale?: string, dir?: TextDirection) => {
      setLanguage(getLanguage(locale, dir))
    },
    [getLanguage],
  )

  const getValue = useCallback(
    (path: number | string) => {
      const value = get<string | undefined>(messages, path)

      if (!isUndefined(value)) {
        return value
      } else {
        path = path.toString().replace(/^[^.]+\./g, "")

        return get<string | undefined>(messages, path)
      }
    },
    [messages],
  )

  const getTranslation = useCallback(
    (key?: IntlKey) =>
      <Y extends IntlPath>(
        path: Y,
        replaceValues?: IcuArgs<Value<IntlData, Y>, IntlPath>,
      ) => {
        const value = getValue(key ? `${key}.${path}` : path) ?? path

        if (isUndefined(replaceValues)) return value

        try {
          const resolvedReplaceValues = Object.entries(replaceValues).reduce<{
            [key: string]: any
          }>((prev, [key, pathOrValue]) => {
            if (isString(pathOrValue)) {
              const resolvedPathOrValue = String(pathOrValue)
              const value =
                getValue(
                  key ? `${key}.${resolvedPathOrValue}` : resolvedPathOrValue,
                ) ?? resolvedPathOrValue

              prev[key] = value
            } else {
              prev[key] = pathOrValue
            }

            return prev
          }, {})

          const message = new IntlMessageFormat(
            value,
            locale,
            formats,
            intlMessageFormatOptions,
          )

          return message.format(resolvedReplaceValues) as string
        } catch (e) {
          if (e instanceof Error) console.warn(e.message)

          return value
        }
      },
    [getValue, locale, formats, intlMessageFormatOptions],
  )

  const value = useMemo(
    () => ({
      changeLanguage,
      dir,
      getTranslation,
      locale,
      t: getTranslation(),
    }),
    [changeLanguage, dir, getTranslation, locale],
  )

  useEffect(() => {
    if (controlled) return

    window.addEventListener("languagechange", changeSystemLanguage)

    return () => {
      window.removeEventListener("languagechange", changeSystemLanguage)
    }
  }, [controlled, changeSystemLanguage])

  useUpdateEffect(() => {
    setLanguage(getLanguage(forcedLocale, forcedDir))
  }, [forcedLocale, forcedDir, getLanguage])

  return <I18nContext value={value}>{children}</I18nContext>
}

export function useI18n(): I18nContext

export function useI18n<Y extends IntlKey>(
  key: Y,
): I18nContext<IntlData[Y], Path<IntlData[Y]>>

export function useI18n<Y extends IntlKey>(key?: Y) {
  const context = useContext(I18nContext)

  const translation = useCallback(
    <M extends Path<IntlData[Y]>>(
      path: M,
      replaceValues?: IcuArgs<
        Value<IntlData[Y], M>,
        IntlPath | Path<IntlData[Y]>
      >,
    ) => context.getTranslation(key)(path as any, replaceValues as any),
    [key, context],
  )

  if (isEmptyObject(context))
    return {
      ...DEFAULT_LANGUAGE,
      changeLanguage: noop,
      t: () => "",
    }

  if (key) return { ...context, t: translation }
  else return context
}
