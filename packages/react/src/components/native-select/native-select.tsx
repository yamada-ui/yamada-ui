"use client"

import type { ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { NativeSelectStyle } from "./native-select.style"
import type { UseNativeSelectProps } from "./use-native-select"
import { createSlotComponent } from "../../core"
import { useGroupItemProps } from "../group"
import { ChevronDownIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { nativeSelectStyle } from "./native-select.style"
import { useNativeSelect } from "./use-native-select"

export interface NativeSelectRootProps
  extends Omit<HTMLStyledProps<"select">, "size">,
    UseNativeSelectProps,
    ThemeProps<NativeSelectStyle>,
    FieldProps,
    UseInputBorderProps {
  /**
   * The icon to be used in the select.
   */
  icon?: ReactNode
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * Props for icon element.
   */
  iconProps?: NativeSelectIconProps
  /**
   * Props for root element.
   */
  rootProps?: InputGroup.RootProps
}

const {
  component,
  PropsContext: NativeSelectPropsContext,
  usePropsContext: useNativeSelectPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NativeSelectRootProps, NativeSelectStyle>(
  "native-select",
  nativeSelectStyle,
)

export { NativeSelectPropsContext, useNativeSelectPropsContext }

/**
 * `NativeSelect` is a component used for allowing users to select one option from a list. It displays a native dropdown list provided by the browser (user agent).
 *
 * @see https://yamada-ui.com/docs/components/native-select
 */
export const NativeSelectRoot = withProvider<"select", NativeSelectRootProps>(
  (props) => {
    const [
      groupItemProps,
      {
        className,
        css,
        colorScheme,
        errorBorderColor,
        focusBorderColor,
        icon,
        elementProps,
        iconProps,
        rootProps,
        ...rest
      },
    ] = useGroupItemProps(props)
    const { getFieldProps, getIconProps, getRootProps } = useNativeSelect(rest)
    const varProps = useInputBorder({
      errorBorderColor,
      focusBorderColor,
    })

    return (
      <InputGroup.Root
        className={className}
        css={css}
        colorScheme={colorScheme}
        {...getRootProps({ ...groupItemProps, ...rootProps })}
      >
        <NativeSelectField {...getFieldProps(varProps)} />

        <InputGroup.Element {...elementProps}>
          <NativeSelectIcon icon={icon} {...getIconProps(iconProps)} />
        </InputGroup.Element>
      </InputGroup.Root>
    )
  },
  "root",
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
})

interface NativeSelectFieldProps extends HTMLStyledProps<"select"> {}

const NativeSelectField = withContext<"select", NativeSelectFieldProps>(
  "select",
  "field",
)({ "data-group-propagate": "" })

interface NativeSelectIconProps extends HTMLStyledProps {
  icon?: ReactNode
}

const NativeSelectIcon = withContext<"div", NativeSelectIconProps>(
  "div",
  "icon",
)(undefined, ({ children, icon, ...rest }) => ({
  children: icon || children || <ChevronDownIcon />,
  ...rest,
}))

export interface NativeSelectGroupProps extends HTMLProps<"optgroup"> {}

export const NativeSelectGroup = component<"optgroup", NativeSelectGroupProps>(
  "optgroup",
  "group",
)()

export interface NativeSelectOptionProps extends HTMLProps<"option"> {}

export const NativeSelectOption = component<"option", NativeSelectOptionProps>(
  "option",
  "option",
)()

export interface NativeSelectSeparatorProps extends HTMLProps<"hr"> {}

export const NativeSelectSeparator = component<
  "hr",
  NativeSelectSeparatorProps
>("hr", "separator")()
