import type { Dict, Path, StringLiteral } from "@yamada-ui/react"
import type { FC, PropsWithChildren, ReactElement } from "react"
import type { Locale, UI } from "utils/i18n"
import {
  getMemoizedObject as get,
  isObject,
  isString,
  isUndefined,
  noop,
  Text,
} from "@yamada-ui/react"
import { CONSTANT } from "constant"
import { useRouter } from "next/router"
import {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useMemo,
} from "react"
import { getContents, getUI } from "utils/i18n"

interface I18nContext {
  changeLocale: (locale: Locale | StringLiteral) => void
  contents: Dict[]
  locale: Locale
  t: (
    path: Path<UI> | StringLiteral,
    replaceValue?: { [key: string]: number | string } | number | string,
    pattern?: string,
  ) => string
  tc: (
    path: Path<UI> | StringLiteral,
    callback?: (str: string, index: number) => ReactElement,
  ) => ReactElement[] | string
}

const I18nContext = createContext<I18nContext>({
  changeLocale: noop,
  contents: [],
  locale: CONSTANT.I18N.DEFAULT_LOCALE as Locale,
  t: () => "",
  tc: () => "",
})

export interface I18nProviderProps extends PropsWithChildren {}

export const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const { asPath, locale = CONSTANT.I18N.DEFAULT_LOCALE, push } = useRouter()

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
      replaceValue?: { [key: string]: number | string } | number | string,
      pattern = "label",
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
      callback?: (str: string, index: number) => ReactElement,
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
    () => ({ changeLocale, contents, locale: locale as Locale, t, tc }),
    [changeLocale, locale, t, tc, contents],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

const renderElement = (
  str: string,
  callback?: (str: string, index: number) => ReactElement,
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
