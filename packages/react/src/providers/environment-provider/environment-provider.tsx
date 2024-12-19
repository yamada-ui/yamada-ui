import type { FC, ReactNode } from "react"
import { createContext, use, useMemo, useReducer, useRef } from "react"
import { useSafeLayoutEffect } from "../../utils"

export interface Environment {
  getDocument: () => Document | undefined
  getWindow: () => undefined | Window
}

export const defaultEnvironment: Environment = {
  getDocument: () => document,
  getWindow: () => window,
}

const EnvironmentContext = createContext<Environment>(defaultEnvironment)

export interface EnvironmentProviderProps {
  children: ReactNode
  disabled?: boolean
  environment?: Environment
}

export const EnvironmentProvider: FC<EnvironmentProviderProps> = ({
  children,
  disabled,
  environment,
}) => {
  const ref = useRef<HTMLSpanElement>(null)

  const context = useMemo<Environment>(() => {
    if (environment) return environment

    return {
      getDocument: () => ref.current?.ownerDocument ?? document,
      getWindow: () => ref.current?.ownerDocument.defaultView ?? window,
    }
  }, [environment])

  const enabled = !disabled || !environment

  return (
    <EnvironmentContext value={context}>
      {children}

      {enabled ? <span id="__ui_dev" ref={ref} hidden /> : null}
    </EnvironmentContext>
  )
}

EnvironmentProvider.displayName = "EnvironmentProvider"

export const useEnvironment = ({ isDefer }: { isDefer?: boolean } = {}) => {
  const [, forceUpdate] = useReducer((c) => c + 1, 0)

  useSafeLayoutEffect(() => {
    if (!isDefer) return

    forceUpdate()
  }, [isDefer])

  return use(EnvironmentContext)
}
