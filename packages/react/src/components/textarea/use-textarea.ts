import type { ForwardedRef } from "react"
import type { CSSObject, HTMLUIProps, PropGetter } from "../../core"
import { useCallback, useRef } from "react"
import {
  addDomEvent,
  assignRef,
  createdDom,
  handlerAll,
  mergeRefs,
  noop,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { useAutosize } from "./use-autosize"

export interface UseTextareaProps
  extends Omit<HTMLUIProps<"textarea">, "disabled" | "readOnly" | "required"> {
  /**
   * If `true`, the Textarea height auto-adjusts to text height.
   */
  autosize?: boolean
  /**
   * Autosize up to maxRows rows.
   *
   * @default Infinity
   */
  maxRows?: number
  /**
   * Autosize up to minRows rows.
   *
   * @default 1
   */
  minRows?: number
  /**
   * Ref to a resize function.
   */
  resizeRef?: ForwardedRef<() => void>
}

export const useTextarea = ({
  ref,
  css: cssProp,
  autosize,
  h,
  height,
  maxH,
  maxHeight,
  maxRows = Infinity,
  minH,
  minHeight,
  minRows = 1,
  resize = "none",
  resizeRef,
  rows,
  onChange,
}: UseTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const value = textareaRef.current?.value ?? ""

  const resizeTextarea = useAutosize({ ref: textareaRef, maxRows, minRows })

  let css: CSSObject | CSSObject[] | undefined

  if (rows || autosize) {
    css = cssProp
  } else {
    css = { h, height, maxH, maxHeight, minH, minHeight, ...cssProp }
  }

  useSafeLayoutEffect(() => {
    if (!createdDom() || !autosize) return

    resizeTextarea()

    const unsubscribeResize = addDomEvent(window, "resize", resizeTextarea)
    const unsubscribeLoadingdone = addDomEvent(
      document.fonts,
      "loadingdone",
      resizeTextarea,
    )

    return () => {
      unsubscribeResize()
      unsubscribeLoadingdone()
    }
  }, [])

  useUpdateEffect(() => {
    if (!autosize) return
    resizeTextarea()
  }, [value])

  assignRef(resizeRef, resizeTextarea)

  const getRootProps: PropGetter<"textarea"> = useCallback(
    (props) => ({
      ref: mergeRefs(ref, textareaRef),
      css,
      resize,
      rows,
      onChange: handlerAll(autosize ? resizeTextarea : noop, onChange),
      ...props,
    }),
    [ref, textareaRef, css, resize, rows, autosize, onChange, resizeTextarea],
  )

  return {
    getRootProps,
  }
}

export type UseTextareaReturn = ReturnType<typeof useTextarea>
