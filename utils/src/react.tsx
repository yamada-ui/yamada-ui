import * as React from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'
import { getAllFocusable, isNumber, isString } from './'

type Options = {
  strict?: boolean
  errorMessage?: string
  name?: string
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

export const createContext = <ContextType extends any = any>({
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

export const useSafeLayoutEffect = Boolean(globalThis?.document)
  ? React.useLayoutEffect
  : React.useEffect

export const useUnmountEffect = (callback: () => void) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => () => callback(), [])

export const useIsMounted = () => {
  const isMounted = React.useRef(false)

  useSafeLayoutEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}

export const getValidChildren = (children: React.ReactNode): React.ReactElement[] =>
  React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]

export const isValidElement = (child: any): child is React.ReactNode =>
  React.isValidElement(child) || isString(child) || isNumber(child)

export const findChildren = (
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
  ...types: React.JSXElementConstructor<any>[]
): [React.ReactElement | undefined, ...React.ReactElement[]] =>
  (children.find((child) => types.some((type) => child.type === type))
    ? children.sort((a, b) =>
        types.some((type) => a.type === type) ? -1 : types.some((type) => b.type === type) ? 1 : 0,
      )
    : [undefined, ...children]) as [React.ReactElement | undefined, ...React.ReactElement[]]

export const filterChildren = (
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
  ...types: React.JSXElementConstructor<any>[]
): React.ReactElement[] => children.filter((child) => types.every((type) => child.type !== type))

export const cx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>

export const assignRef = <T extends any = any>(ref: ReactRef<T> | undefined, value: T) => {
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

export const useMergeRefs = <T,>(...refs: (ReactRef<T> | undefined)[]) =>
  React.useMemo(() => {
    if (refs.every((ref) => ref == null)) return null

    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node)
      })
    }
  }, [refs])

export type FocusableElement = {
  focus(options?: FocusOptions): void
}
export type FocusLockProps = {
  initialFocusRef?: React.RefObject<FocusableElement>
  finalFocusRef?: React.RefObject<FocusableElement>
  contentRef?: React.RefObject<HTMLElement>
  restoreFocus?: boolean
  children: React.ReactNode
  isDisabled?: boolean
  autoFocus?: boolean
  persistentFocus?: boolean
  lockFocusAcrossFrames?: boolean
}

export const FocusLock: React.FC<FocusLockProps> = ({
  initialFocusRef,
  finalFocusRef,
  contentRef,
  restoreFocus,
  children,
  isDisabled,
  autoFocus,
  persistentFocus,
  lockFocusAcrossFrames,
}) => {
  const onActivation = React.useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus()
    } else if (contentRef?.current) {
      const focusables = getAllFocusable(contentRef.current)

      if (focusables.length === 0)
        requestAnimationFrame(() => {
          contentRef.current?.focus()
        })
    }
  }, [initialFocusRef, contentRef])

  const onDeactivation = React.useCallback(() => {
    finalFocusRef?.current?.focus()
  }, [finalFocusRef])

  const returnFocus = restoreFocus && !finalFocusRef

  return (
    <ReactFocusLock
      crossFrame={lockFocusAcrossFrames}
      persistentFocus={persistentFocus}
      autoFocus={autoFocus}
      disabled={isDisabled}
      onActivation={onActivation}
      onDeactivation={onDeactivation}
      returnFocus={returnFocus}
    >
      {children}
    </ReactFocusLock>
  )
}

type PortalContext = HTMLDivElement | null

const [PortalProvider, usePortal] = createContext<PortalContext>({
  strict: false,
  name: 'PortalContext',
})

const DefaultPortal: React.FC<React.PropsWithChildren<{ appendToParentPortal: boolean }>> = ({
  appendToParentPortal,
  children,
}) => {
  const [node, setNode] = React.useState<HTMLElement | null>(null)
  const el = React.useRef<HTMLDivElement | null>(null)

  const [, forceUpdate] = React.useState({})

  React.useEffect(() => forceUpdate({}), [])

  const parent = usePortal()

  useSafeLayoutEffect(() => {
    if (!node) return

    const { ownerDocument } = node
    const host = appendToParentPortal ? parent ?? ownerDocument.body : ownerDocument.body

    if (!host) return

    el.current = ownerDocument.createElement('div')
    el.current.className = 'ui-portal'

    host.appendChild(el.current)
    forceUpdate({})

    const portalNode = el.current

    return () => {
      if (host.contains(portalNode)) host.removeChild(portalNode)
    }
  }, [node])

  return el.current ? (
    createPortal(<PortalProvider value={el.current}>{children}</PortalProvider>, el.current)
  ) : (
    <span ref={(el) => (el ? setNode(el) : undefined)} />
  )
}

type ContainerPortalProps = React.PropsWithChildren & {
  containerRef: React.RefObject<HTMLElement | null>
  appendToParentPortal?: boolean
}

const ContainerPortal: React.FC<ContainerPortalProps> = ({
  children,
  containerRef,
  appendToParentPortal,
}) => {
  const parent = containerRef.current
  const host = parent ?? (typeof window !== 'undefined' ? document.body : undefined)

  const portal = React.useMemo(() => {
    if (!parent) return

    const { ownerDocument } = parent

    const node = ownerDocument.createElement('div')

    if (node) node.className = 'ui-portal'

    return node
  }, [parent])

  const [, forceUpdate] = React.useState({})

  useSafeLayoutEffect(() => forceUpdate({}), [])

  useSafeLayoutEffect(() => {
    if (!portal || !host) return

    host.appendChild(portal)

    return () => {
      host.removeChild(portal)
    }
  }, [portal, host])

  return host && portal
    ? createPortal(
        <PortalProvider value={appendToParentPortal ? portal : null}>{children}</PortalProvider>,
        portal,
      )
    : null
}

export type PortalProps = {
  containerRef?: React.RefObject<HTMLElement | null>
  children: React.ReactNode
  appendToParentPortal?: boolean
}

export const Portal = ({ containerRef, appendToParentPortal = true, children }: PortalProps) => {
  return containerRef ? (
    <ContainerPortal containerRef={containerRef} {...{ children }} />
  ) : (
    <DefaultPortal appendToParentPortal={appendToParentPortal} {...{ children }} />
  )
}

Portal.className = 'ui-portal'
Portal.selector = '.ui-portal'
