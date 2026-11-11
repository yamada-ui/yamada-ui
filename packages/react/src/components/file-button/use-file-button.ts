"use client"

import type { PropGetter } from "../../core"
import type { FieldProps } from "../field"
import type { UseFileInputProps } from "../file-input"
import { useCallback } from "react"
import { mergeProps } from "../../core"
import { useFileInput } from "../file-input"

export interface UseFileButtonProps
  extends UseFileInputProps<"button">, FieldProps {}

export const useFileButton = (props: UseFileButtonProps = {}) => {
  const { clickableProps, getInputProps } = useFileInput<"button">(props)

  const getButtonProps: PropGetter<"button"> = useCallback(
    (props = {}) => mergeProps(clickableProps, props)(),
    [clickableProps],
  )

  return {
    clickableProps,
    getButtonProps,
    getInputProps,
  }
}

export type UseFileButtonReturn = ReturnType<typeof useFileButton>
