import {
  getMemoizedObject as get,
  Path,
  isString,
  Text,
  StringLiteral,
  noop,
} from '@yamada-ui/react'
import { useRouter } from 'next/router'
import {
  PropsWithChildren,
  createContext,
  useMemo,
  useContext,
  FC,
  useCallback,
  Fragment,
} from 'react'
import en from 'i18n/en.json'
import ja from 'i18n/ja.json'

type LocaleData = typeof en

const localeData = { ja, en }

export type Locale = 'en' | 'ja'

type I18nContext = {
  locale: Locale
  t: (path: Path<LocaleData>) => string
  tc: (
    path: Path<LocaleData>,
    callback?: (str: string, index: number) => JSX.Element,
  ) => string | JSX.Element[]
  changeLocale: (locale: Locale & StringLiteral) => void
}

const I18nContext = createContext<I18nContext>({
  locale: 'en',
  t: () => '',
  tc: () => '',
  changeLocale: noop,
})

export type I18nProviderProps = PropsWithChildren

export const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const { locale, pathname, asPath, push } = useRouter()

  const changeLocale = useCallback(
    (locale: Locale & StringLiteral) => {
      push(pathname, asPath, { locale })
    },
    [push, pathname, asPath],
  )

  const t = useCallback(
    (path: Path<LocaleData>) => get<string>(localeData[locale], path, ''),
    [locale],
  )

  const tc = useCallback(
    (path: Path<LocaleData>, callback?: (str: string, index: number) => JSX.Element) => {
      const strOrArray = get<string | string[]>(localeData[locale], path, '')

      if (isString(strOrArray)) {
        const match = strOrArray.match(/`([^`]+)`/)

        if (!match) {
          return strOrArray
        } else {
          return renderElement(strOrArray, callback)
        }
      } else {
        return strOrArray.map((str, index) => (
          <Text key={index} as='span' display='block'>
            {renderElement(str, callback)}
          </Text>
        ))
      }
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale: locale as Locale, t, tc, changeLocale }),
    [changeLocale, locale, t, tc],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

const renderElement = (str: string, callback?: (str: string, index: number) => JSX.Element) => {
  const array = str.split(/(`[^`]+`)/)

  return array.map((str, index) => {
    if (str.startsWith('`') && str.endsWith('`')) {
      return (
        <Fragment key={index}>{callback ? callback(str.replace(/`/g, ''), index) : str}</Fragment>
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
