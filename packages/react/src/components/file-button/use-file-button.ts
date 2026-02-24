"use client"

import type { PropGetter } from "../../core"
import type { FieldProps } from "../field"
import type { UseFileInputProps } from "../file-input"
import { useCallback } from "react"
import { ariaAttr } from "../../utils"
import { useFileInput } from "../file-input"

export interface UseFileButtonProps
  extends UseFileInputProps<"button">, FieldProps {}

export const useFileButton = (props: UseFileButtonProps = {}) => {
  const { interactive, clickableProps, getInputProps } =
    useFileInput<"button">(props)

  const getButtonProps: PropGetter<"button"> = useCallback(
    (props) => ({
      ...clickableProps,
      "aria-disabled": ariaAttr(!interactive),
      tabIndex: interactive ? clickableProps.tabIndex : -1,
      ...props,
    }),
    [clickableProps, interactive],
  )

  return {
    clickableProps,
    getButtonProps,
    getInputProps,
  }
}

export type UseFileButtonReturn = ReturnType<typeof useFileButton>
