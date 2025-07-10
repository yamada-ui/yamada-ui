"use client"

import type { FC, PropsWithChildren } from "react"
import { createContext, use, useCallback, useMemo, useRef } from "react"
import { createdDom, getDocument, getWindow, runIfFn } from "../../utils"

export type RootNode = Document | Node | ShadowRoot

export interface Environment {
  getDocument: () => Document | undefined
  getRootNode: () => RootNode | undefined
  getWindow: () => undefined | Window
}

export const defaultEnvironment: Environment = {
  getDocument: () => document,
  getRootNode: () => document,
  getWindow: () => window,
}

const EnvironmentContext = createContext<Environment>(defaultEnvironment)

export interface EnvironmentProviderProps extends PropsWithChildren {
  value?: (() => RootNode) | RootNode
}

export const EnvironmentProvider: FC<EnvironmentProviderProps> = ({
  children,
  value,
}) => {
  const ref = useRef<HTMLSpanElement>(null)

  const getRootNode = useCallback(() => {
    return runIfFn(value) ?? ref.current?.getRootNode() ?? document
  }, [value, ref])

  const context = useMemo<Environment>(() => {
    if (createdDom()) {
      return {
        getDocument: () => getDocument(getRootNode()),
        getRootNode,
        getWindow: () => getWindow(getRootNode()),
      }
    } else {
      return {
        getDocument: () => undefined,
        getRootNode: () => undefined,
        getWindow: () => undefined,
      }
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
