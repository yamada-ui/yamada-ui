import type { Path, StringLiteral, Dict } from "@yamada-ui/react"
import {
  getMemoizedObject as get,
  isString,
  Text,
  noop,
} from "@yamada-ui/react"
import { useRouter } from "next/router"
import type { PropsWithChildren, FC } from "react"
import {
  createContext,
  useMemo,
  useContext,
  useCallback,
  Fragment,
} from "react"
import { CONSTANT } from "constant"
import CONTENT_EN from "i18n/content.en.json"
import CONTENT_JA from "i18n/content.ja.json"
import UI_EN from "i18n/ui.en.json"
import UI_JA from "i18n/ui.ja.json"
import type { Locale } from "utils/i18n"

type UIData = typeof UI_EN

const uiData = { ja: UI_JA, en: UI_EN }
const contentData = { ja: CONTENT_JA, en: CONTENT_EN }

type I18nContext = {
  locale: Locale
  t: (path: Path<UIData> | StringLiteral) => string
  tc: (
    path: Path<UIData> | StringLiteral,
    callback?: (str: string, index: number) => JSX.Element,
  ) => string | JSX.Element[]
  changeLocale: (locale: Locale | StringLiteral) => void
  contents: Dict[]
}

const I18nContext = createContext<I18nContext>({
  locale: CONSTANT.I18N.DEFAULT_LOCALE as Locale,
  t: () => "",
  tc: () => "",
  changeLocale: noop,
  contents: [],
})

export type I18nProviderProps = PropsWithChildren

export const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const { locale, asPath, push } = useRouter()

  const contents = useMemo(() => contentData[locale], [locale])

  const changeLocale = useCallback(
    (locale: Locale | StringLiteral) => {
      push(asPath, asPath, { locale })
    },
    [push, asPath],
  )

  const t = useCallback(
    (path: Path<UIData> | StringLiteral) =>
      get<string>(uiData[locale], path, ""),
    [locale],
  )

  const tc = useCallback(
    (
      path: Path<UIData> | StringLiteral,
      callback?: (str: string, index: number) => JSX.Element,
    ) => {
      const strOrArray = get<string | string[]>(uiData[locale], path, "")

      if (isString(strOrArray)) {
        const match = strOrArray.match(/`([^`]+)`/)

        if (!match) {
          return strOrArray
        } else {
          return renderElement(strOrArray, callback)
        }
      } else {
        return strOrArray.map((str, index) => (
          <Text key={index} as="span" display="block">
            {renderElement(str, callback)}
          </Text>
        ))
      }
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale: locale as Locale, t, tc, changeLocale, contents }),
    [changeLocale, locale, t, tc, contents],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

const renderElement = (
  str: string,
  callback?: (str: string, index: number) => JSX.Element,
) => {
  const array = str.split(/(`[^`]+`)/)

  return array.map((str, index) => {
    if (str.startsWith("`") && str.endsWith("`")) {
      return (
        <Fragment key={index}>
          {callback ? callback(str.replace(/`/g, ""), index) : str}
        </Fragment>
      )
    } else {
      return <Fragment key={index}>{str}</Fragment>
    }
  })
}

export const useI18n = () => {
  const context = useContext(I18nContext)

  return context
}
