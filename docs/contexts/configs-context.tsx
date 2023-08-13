import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react'
import configs from 'configs/site.json'

type ConfigsContext = typeof configs

const ConfigsContext = createContext<ConfigsContext>({
  colorScheme: 'blue',
})

export type ConfigsProviderProps = PropsWithChildren

export const ConfigsProvider: FC<ConfigsProviderProps> = ({ children }) => {
  const value = useMemo(() => ({ ...configs }), [])

  return <ConfigsContext.Provider value={value}>{children}</ConfigsContext.Provider>
}

export const useConfigs = () => {
  const context = useContext(ConfigsContext)

  return context
}
