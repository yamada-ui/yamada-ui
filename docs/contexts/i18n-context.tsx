import { useLocalStorage, getMemoizedObject as get, Path } from '@yamada-ui/react'
import { PropsWithChildren, createContext, useMemo, useContext, FC, useCallback } from 'react'
import en from '@/i18n/en.json'
import ja from '@/i18n/ja.json'

type Data = typeof en

const i18nData = { ja, en }

export type I18n = 'en' | 'ja'

type I18nContext = {
  i18n: I18n
  t: (path: Path<Data>) => string
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

  const t = useCallback((path: Path<Data>) => get(i18nData[i18n], path, ''), [i18n])

  const value = useMemo(() => ({ i18n, t, changeI18n }), [changeI18n, t, i18n])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)

  return context
}
