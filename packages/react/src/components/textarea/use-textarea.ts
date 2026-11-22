"use client"

import type { ForwardedRef } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseAutosizeProps } from "./use-autosize"
import { useCallback } from "react"
import { mergeProps } from "../../core"
import { assignRef } from "../../utils"
import { useAutosize } from "./use-autosize"

export interface UseTextareaProps
  extends HTMLProps<"textarea">, Omit<UseAutosizeProps, "disabled" | "ref"> {
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
    (props = {}) =>
      mergeProps(
        rest,
        props,
        { ref },
        autosize
          ? { style: { resize: "none" as const }, onChange: onResizeTextarea }
          : undefined,
      )(),
    [autosize, onResizeTextarea, rest, ref],
  )

  return {
    getTextareaProps,
    onResizeTextarea,
  }
}

export type UseTextareaReturn = ReturnType<typeof useTextarea>
