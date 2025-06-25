"use client"

import type { FC, PropsWithChildren } from "react"
import type { System, ThemeConfig, UsageTheme } from "./index.types"
import { createContext, use, useMemo } from "react"
import { createSystem, defaultSystem } from "./create-system"

interface SystemContext extends System {}

const SystemContext = createContext<SystemContext>(defaultSystem)

export interface SystemProviderProps extends PropsWithChildren {
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * The theme of the yamada ui.
   */
  theme?: UsageTheme
}

export const SystemProvider: FC<SystemProviderProps> = ({
  children,
  config,
  theme = {},
}) => {
  const system = useMemo(() => createSystem(theme, config), [theme, config])

  return <SystemContext value={system}>{children}</SystemContext>
}

export const useSystem = () => {
  const system = use(SystemContext)

  return system
}
