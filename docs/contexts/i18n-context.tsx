import type { Path, StringLiteral, Dict } from "@yamada-ui/react"
import {
  getMemoizedObject as get,
  isString,
  Text,
  noop,
  isObject,
  isUndefined,
} from "@yamada-ui/react"
import { CONSTANT } from "constant"
import { useRouter } from "next/router"
import type { PropsWithChildren, FC } from "react"
import {
  createContext,
  useMemo,
  useContext,
  useCallback,
  Fragment,
} from "react"
import { getContents, getUI, type Locale, type UI } from "utils/i18n"

type I18nContext = {
  locale: Locale
  t: (
    path: Path<UI> | StringLiteral,
    replaceValue?: string | number | Record<string, string | number>,
    pattern?: string,
  ) => string
  tc: (
    path: Path<UI> | StringLiteral,
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
  const { locale = CONSTANT.I18N.DEFAULT_LOCALE, asPath, push } = useRouter()

  const ui = useMemo(() => getUI(locale as Locale), [locale])
  const contents = useMemo(() => getContents(locale as Locale), [locale])

  const changeLocale = useCallback(
    (locale: Locale | StringLiteral) => {
      push(asPath, asPath, { locale })
    },
    [push, asPath],
  )

  const t = useCallback(
    (
      path: Path<UI> | StringLiteral,
      replaceValue?: string | number | Record<string, string | number>,
      pattern: string = "label",
    ) => {
      let value = get<string>(ui, path, "")

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
    [ui],
  )

  const tc = useCallback(
    (
      path: Path<UI> | StringLiteral,
      callback?: (str: string, index: number) => JSX.Element,
    ) => {
      const strOrArray = get<string | string[]>(ui, path, "")

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
    [ui],
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
