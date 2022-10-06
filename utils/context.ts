import {
  Context as ReactContext,
  createContext as ReactCreateContext,
  Provider as ReactProvider,
  useContext as ReactUseContext,
} from 'react'

type Options = {
  strict?: boolean
  errorMessage?: string
  name?: string
}

type CreateContextReturn<T> = [ReactProvider<T>, () => T, ReactContext<T>]

export const createContext = <ContextType>({
  strict = true,
  errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
  name,
}: Options = {}) => {
  const Context = ReactCreateContext<ContextType | undefined>(undefined)

  Context.displayName = name

  const useContext = () => {
    const context = ReactUseContext(Context)

    if (!context && strict) {
      const error = new Error(errorMessage)
      error.name = 'ContextError'
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<ContextType>
}
