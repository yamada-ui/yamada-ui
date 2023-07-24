import { useLocalStorage, getMemoizedObject as get, Path, isString, Text } from '@yamada-ui/react'
import {
  PropsWithChildren,
  createContext,
  useMemo,
  useContext,
  FC,
  useCallback,
  Fragment,
} from 'react'
import en from '@/i18n/en.json'
import ja from '@/i18n/ja.json'

type Data = typeof en

const i18nData = { ja, en }

export type I18n = 'en' | 'ja'

type I18nContext = {
  i18n: I18n
  t: (
    path: Path<Data>,
    callback?: (str: string, index: number) => JSX.Element,
  ) => string | JSX.Element[]
  changeI18n: (valOrFunc: I18n | ((prevState: I18n) => I18n)) => void
}

const I18nContext = createContext<I18nContext>({
  i18n: 'en',
  t: () => '',
  changeI18n: () => {},
})

export type I18nProviderProps = PropsWithChildren<{}>

export const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const [i18n, changeI18n] = useLocalStorage<I18n>({
    key: 'i18n',
    defaultValue: 'en',
  })

  const t = useCallback(
    (path: Path<Data>, callback?: (str: string, index: number) => JSX.Element) => {
      const strOrArray = get<string | string[]>(i18nData[i18n], path, '')

      if (isString(strOrArray)) {
        const array = strOrArray.split(/(`[^`]+`)/)

        return array.map((str, index) => {
          if (str.startsWith('`') && str.endsWith('`')) {
            return (
              <Fragment key={index}>
                {callback ? callback(str.replace(/`/g, ''), index) : str}
              </Fragment>
            )
          } else {
            return <Fragment key={index}>{str}</Fragment>
          }
        })
      } else {
        return strOrArray.map((str, index) => {
          const array = str.split(/(`[^`]+`)/)

          return (
            <Text key={index} as='span' display='block'>
              {array.map((str, index) => {
                if (str.startsWith('`') && str.endsWith('`')) {
                  return (
                    <Fragment key={index}>
                      {callback ? callback(str.replace(/`/g, ''), index) : str}
                    </Fragment>
                  )
                } else {
                  return <Fragment key={index}>{str}</Fragment>
                }
              })}
            </Text>
          )
        })
      }
    },
    [i18n],
  )

  const value = useMemo(() => ({ i18n, t, changeI18n }), [changeI18n, t, i18n])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)

  return context
}
