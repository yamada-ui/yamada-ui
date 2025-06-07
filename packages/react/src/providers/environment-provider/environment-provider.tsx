import type { FC, ReactNode } from "react"
import { createContext, use, useMemo, useRef } from "react"
import { getDocument, getWindow, runIfFn } from "../../utils"

export type RootNode = Document | Node | ShadowRoot

export interface Environment {
  getDocument: () => Document | undefined
  getRootNode: () => RootNode
  getWindow: () => undefined | Window
}

export const defaultEnvironment: Environment = {
  getDocument: () => document,
  getRootNode: () => document,
  getWindow: () => window,
}

const EnvironmentContext = createContext<Environment>(defaultEnvironment)

export interface EnvironmentProviderProps {
  children: ReactNode
  value?: (() => RootNode) | RootNode
}

export const EnvironmentProvider: FC<EnvironmentProviderProps> = ({
  children,
  value,
}) => {
  const ref = useRef<HTMLSpanElement>(null)

  const getRootNode = useMemo(() => {
    return () => runIfFn(value) ?? ref.current?.getRootNode() ?? document
  }, [value, ref])

  const context = useMemo<Environment>(() => {
    return {
      getDocument: () => getDocument(getRootNode()),
      getRootNode,
      getWindow: () => getWindow(getRootNode()),
    }
  }, [getRootNode])

  return (
    <EnvironmentContext value={context}>
      {children}

      {!value ? <span ref={ref} hidden /> : null}
    </EnvironmentContext>
  )
}

export const useEnvironment = () => {
  return use(EnvironmentContext)
}
