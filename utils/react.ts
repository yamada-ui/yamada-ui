import * as React from 'react'

type Options = {
  strict?: boolean
  errorMessage?: string
  name?: string
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

export const createContext = <ContextType>({
  strict = true,
  errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
  name,
}: Options = {}) => {
  const Context = React.createContext<ContextType | undefined>(undefined)

  Context.displayName = name

  const useContext = () => {
    const context = React.useContext(Context)

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

export const getValidChildren = (children: React.ReactNode): React.ReactElement[] =>
  React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]

export const cx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>

export const assignRef = <T = any>(ref: ReactRef<T> | undefined, value: T) => {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)

    return
  }

  try {
    // @ts-ignore
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export const useMergeRefs = <T>(...refs: (ReactRef<T> | undefined)[]) =>
  React.useMemo(() => {
    if (refs.every((ref) => ref == null)) return null

    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node)
      })
    }
  }, [refs])
