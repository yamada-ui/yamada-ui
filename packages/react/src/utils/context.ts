import { use } from "react"
import * as React from "react"

export type MaybeRenderProp<Y> =
  | ((props: Y) => React.ReactNode)
  | React.ReactNode

interface Options<Y = any> {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: boolean
}

type CreateContextReturn<Y> = [React.Context<Y>, () => Y]

export function createContext<Y = any>(options: {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: true
}): CreateContextReturn<Y>

export function createContext<Y = any>(options: {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: false
}): CreateContextReturn<undefined | Y>

export function createContext<Y = any>({
  name,
  defaultValue,
  errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
  strict = true,
}: Options<Y> = {}) {
  const Context = React.createContext<undefined | Y>(defaultValue)

  Context.displayName = name

  const useContext = () => {
    const context = use(Context)

    if (!context && strict) {
      const error = new Error(errorMessage)
      error.name = "ContextError"
      Error.captureStackTrace(error, useContext)
      throw error
    }

    return context
  }

  return [Context, useContext] as CreateContextReturn<undefined | Y>
}
