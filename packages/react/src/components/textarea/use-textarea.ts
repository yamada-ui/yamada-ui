"use client"

import type { ForwardedRef } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseAutosizeProps } from "./use-autosize"
import { useCallback } from "react"
import { assignRef, handlerAll, mergeRefs, noop } from "../../utils"
import { useAutosize } from "./use-autosize"

export interface UseTextareaProps
  extends HTMLProps<"textarea">,
    Omit<UseAutosizeProps, "disabled" | "ref"> {
  /**
   * If `true`, the Textarea height auto-adjusts to text height.
   */
  autosize?: boolean
  /**
   * Ref to a resize function.
   */
  resizeRef?: ForwardedRef<() => void>
}

export const useTextarea = ({
  autosize,
  maxRows,
  minRows,
  resizeRef,
  ...rest
}: UseTextareaProps = {}) => {
  const { ref, onResizeTextarea } = useAutosize({
    disabled: !autosize,
    maxRows,
    minRows,
  })

  assignRef(resizeRef, onResizeTextarea)

  const getTextareaProps: PropGetter<"textarea"> = useCallback(
    ({ style, ...props } = {}) => ({
      ...rest,
      ...props,
      ref: mergeRefs(props.ref, rest.ref, ref),
      style: { resize: autosize ? "none" : undefined, ...rest.style, ...style },
      onChange: handlerAll(
        props.onChange,
        rest.onChange,
        autosize ? onResizeTextarea : noop,
      ),
    }),
    [autosize, onResizeTextarea, rest, ref],
  )

  return {
    getTextareaProps,
    onResizeTextarea,
  }
}

export type UseTextareaReturn = ReturnType<typeof useTextarea>
