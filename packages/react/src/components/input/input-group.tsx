"use client"

import type { FC } from "react"
import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { GroupProps } from "../group"
import type { InputProps } from "./input"
import type { InputStyle } from "./input.style"
import { cloneElement, useMemo } from "react"
import { getValidChildren, isSomeElement } from "../../utils"
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

export const InputGroupRoot: FC<InputGroupRootProps> = (props) => {
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
  const validChildren = getValidChildren(children)
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

  const context = useMemo(
    () => ({
      size,
      variant,
      disabled,
      errorBorderColor,
      focusBorderColor,
      invalid: props.invalid,
      readOnly,
      required,
      ...dataProps,
    }),
    [
      size,
      variant,
      disabled,
      errorBorderColor,
      focusBorderColor,
      readOnly,
      required,
      props.invalid,
      dataProps,
    ],
  )

  return (
    <InputPropsContext value={context}>
      <InputAddonPropsContext value={context}>
        <InputElementPropsContext value={context}>
          <Group attached w="full" {...rest}>
            {cloneChildren}
          </Group>
        </InputElementPropsContext>
      </InputAddonPropsContext>
    </InputPropsContext>
  )
}
