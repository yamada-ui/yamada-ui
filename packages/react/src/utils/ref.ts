import { isObject } from "@yamada-ui/utils"
import * as React from "react"

export function isRefObject(val: any): val is { current: any } {
  return isObject(val) && "current" in val
}

export function assignRef<Y = any>(ref: React.Ref<Y> | undefined, value: Y) {
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

export function mergeRefs<Y = any>(
  ...refs: (null | React.Ref<Y> | undefined)[]
) {
  return function (node: null | Y) {
    return refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export function useMergeRefs<Y = any>(...refs: (React.Ref<Y> | undefined)[]) {
  return React.useMemo(() => mergeRefs(...refs), [refs])
}

export function useCallbackRef<Y extends (...args: any[]) => any>(
  callback: undefined | Y,
  deps: React.DependencyList = [],
) {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  return React.useCallback(
    ((...args) => callbackRef.current?.(...args)) as Y,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )
}
