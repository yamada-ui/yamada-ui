import { useSafeLayoutEffect } from "@yamada-ui/utils"
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from "react"

export type Environment = {
  getWindow: () => Window
  getDocument: () => Document
}

const environment: Environment = {
  getDocument: () => document,
  getWindow: () => window,
}

const EnvironmentContext = createContext<Environment>(environment)

export type EnvironmentProviderProps = {
  children: ReactNode
  disabled?: boolean
  environment?: Environment
}

export const EnvironmentProvider: FC<EnvironmentProviderProps> = ({
  children,
  environment,
  disabled,
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
    <EnvironmentContext.Provider value={context}>
      {children}

      {enabled ? <span id="__ui_dev" hidden ref={ref} /> : null}
    </EnvironmentContext.Provider>
  )
}

EnvironmentProvider.displayName = "EnvironmentProvider"

export const useEnvironment = ({ isDefer }: { isDefer?: boolean } = {}) => {
  const [, forceUpdate] = useReducer((c) => c + 1, 0)

  useSafeLayoutEffect(() => {
    if (!isDefer) return

    forceUpdate()
  }, [isDefer])

  return useContext(EnvironmentContext)
}
