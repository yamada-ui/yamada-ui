import { isObject } from "@yamada-ui/utils"
import * as React from "react"

export function isRefObject(val: any): val is { current: any } {
  return isObject(val) && "current" in val
}

export function assignRef<T = any>(ref: React.Ref<T> | undefined, value: T) {
  if (ref == null) return

  if (typeof ref === "function") {
    ref(value)

    return
  }

  try {
    // @ts-ignore
    ref.current = value
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T = any>(
  ...refs: (null | React.Ref<T> | undefined)[]
) {
  return function (node: null | T) {
    return refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export function useMergeRefs<T = any>(...refs: (React.Ref<T> | undefined)[]) {
  return React.useMemo(() => mergeRefs(...refs), [refs])
}

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  return React.useCallback(
    ((...args) => callbackRef.current?.(...args)) as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )
}
