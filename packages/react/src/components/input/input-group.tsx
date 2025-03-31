import type { FC, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
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
import { InputElement } from "./input-element"

export interface InputGroupRootProps
  extends Merge<GroupProps, ThemeProps<InputStyle>>,
    Pick<InputProps, "errorBorderColor" | "focusBorderColor">,
    FieldProps {}

export const InputGroupRoot: FC<InputGroupRootProps> = (props) => {
  const {
    props: {
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

        if (isSomeElement(child, InputElement)) {
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
      dataProps,
    ],
  )

  return (
    <InputPropsContext value={context}>
      <InputAddonPropsContext value={context}>
        <Group attached {...rest}>
          {cloneChildren}
        </Group>
      </InputAddonPropsContext>
    </InputPropsContext>
  )
}
