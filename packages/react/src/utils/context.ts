"use client"

import { use } from "react"
import * as React from "react"

function getErrorMessage(hookName: string, ContextName: string) {
  return `${hookName} returned \`undefined\`. Seems you forgot to wrap component within ${ContextName}`
}

interface Options<Y = any> {
  defaultValue?: Y
  errorMessage?: string
  hookName?: string
  name?: string
  strict?: boolean
}

type CreateContextReturn<Y> = [React.Context<Y>, () => Y]

export function createContext<Y = any>(options: {
  defaultValue?: Y
  errorMessage?: string
  hookName?: string
  name?: string
  strict?: true
}): CreateContextReturn<Y>
export function createContext<Y = any>(options: {
  defaultValue: Y
  errorMessage?: string
  hookName?: string
  name?: string
  strict?: false
}): CreateContextReturn<Y>
export function createContext<Y = any>(options: {
  defaultValue?: Y
  errorMessage?: string
  hookName?: string
  name?: string
  strict?: false
}): CreateContextReturn<undefined | Y>

export function createContext<Y = any>({
  name = "Context",
  defaultValue,
  errorMessage,
  hookName = `use${name}`,
  strict = true,
}: Options<Y> = {}) {
  const Context = React.createContext<undefined | Y>(defaultValue)

  Context.displayName = name

  const useContext = () => {
    const context = use(Context)

    if (!context && strict) {
      const error = new Error(errorMessage ?? getErrorMessage(hookName, name))
      error.name = "ContextError"
      Error.captureStackTrace(error, useContext)
      throw error
    }

    return context
  }

  return [Context, useContext] as CreateContextReturn<undefined | Y>
}
