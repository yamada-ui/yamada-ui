import { FC, PropsWithChildren, createContext, useContext } from 'react'
import configs from 'configs/site.json'

type ConfigsContext = typeof configs

const ConfigsContext = createContext<ConfigsContext>({
  colorScheme: 'blue',
})

export type ConfigsProviderProps = PropsWithChildren

export const ConfigsProvider: FC<ConfigsProviderProps> = ({ children }) => {
  return <ConfigsContext.Provider value={{ ...configs }}>{children}</ConfigsContext.Provider>
}

export const useConfigs = () => {
  const context = useContext(ConfigsContext)

  return context
}
