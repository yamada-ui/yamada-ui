"use client"

import type { Component, ThemeProps, WithoutThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { GroupProps } from "../group"
import type { InputProps } from "./input"
import type { InputStyle } from "./input.style"
import { cloneElement, useMemo } from "react"
import { isSomeElement, isTruthyDataAttr, useValidChildren } from "../../utils"
import { useFieldProps } from "../field"
import { Group } from "../group"
import { InputPropsContext } from "./input"
import { InputAddonPropsContext } from "./input-addon"
import { InputElement, InputElementPropsContext } from "./input-element"

export interface InputGroupRootProps
  extends WithoutThemeProps<GroupProps, InputStyle>,
    ThemeProps<InputStyle>,
    Pick<InputProps, "errorBorderColor" | "focusBorderColor">,
    FieldProps {}

export const InputGroupRoot = ((props: InputGroupRootProps) => {
  const {
    props: {
      id: _id,
      size,
      variant,
      children,
      disabled,
      errorBorderColor,
      focusBorderColor,
      readOnly,
      required,
      ...rest
    },
    dataProps,
  } = useFieldProps(props)
  const validChildren = useValidChildren(children)
  const cloneChildren = useMemo(
    () =>
      validChildren.map((child, index) => {
        const first = !index

        if (isSomeElement(child.type, InputElement)) {
          return cloneElement(child, {
            "data-ungrouped": "",
            placement: first ? "start" : "end",
            ...child.props,
          })
        } else {
          return child
        }
      }),
    [validChildren],
  )
  const sharedContext = useMemo(
    () => ({
      size,
      variant,
      errorBorderColor,
      focusBorderColor,
      ...dataProps,
    }),
    [size, variant, errorBorderColor, focusBorderColor, dataProps],
  )
  const inputContext = useMemo(
    () => ({
      ...sharedContext,
      disabled,
      invalid: isTruthyDataAttr(sharedContext["data-invalid"]),
      readOnly,
      required,
    }),
    [sharedContext, disabled, readOnly, required],
  )

  return (
    <InputPropsContext value={inputContext}>
      <InputAddonPropsContext value={sharedContext}>
        <InputElementPropsContext value={sharedContext}>
          <Group attached minW="0" w="full" {...rest}>
            {cloneChildren}
          </Group>
        </InputElementPropsContext>
      </InputAddonPropsContext>
    </InputPropsContext>
  )
}) as Component<"div", InputGroupRootProps>
