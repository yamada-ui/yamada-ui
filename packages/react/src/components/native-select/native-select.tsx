import type { DetailedHTMLProps, OptionHTMLAttributes, ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { NativeSelectStyle } from "./native-select.style"
import { cloneElement, useMemo } from "react"
import { createSlotComponent } from "../../core"
import { useFieldProps } from "../field"
import { useGroupItemProps } from "../group"
import { ChevronDownIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { nativeSelectStyle } from "./native-select.style"

interface NativeSelectSharedItem
  extends Omit<HTMLProps<"option">, "children" | "label" | "value"> {
  label?: string
}

type Value = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>["value"]

interface NativeSelectItemWithValue extends NativeSelectSharedItem {
  value?: Value
}

interface NativeSelectItemWithItems extends NativeSelectSharedItem {
  items?: NativeSelectItemWithValue[]
}

export type NativeSelectItem =
  | NativeSelectItemWithItems
  | NativeSelectItemWithValue

export interface NativeSelectRootProps
  extends Omit<HTMLStyledProps<"select">, "size">,
    ThemeProps<NativeSelectStyle>,
    FieldProps,
    UseInputBorderProps {
  /**
   * The icon to be used in the select.
   */
  icon?: ReactNode
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: NativeSelectItem[]
  /**
   * The placeholder for select.
   */
  placeholder?: string
  /**
   * If `true`, include placeholders in options.
   *
   * @default true
   */
  placeholderInOptions?: boolean
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

export const {
  PropsContext: NativeSelectPropsContext,
  usePropsContext: useNativeSelectProps,
  withContext,
  withProvider,
} = createSlotComponent<NativeSelectRootProps, NativeSelectStyle>(
  "native-select",
  nativeSelectStyle,
)

/**
 * `NativeSelect` is a component used for allowing users to select one option from a list. It displays a native dropdown list provided by the browser (user agent).
 *
 * @see https://yamada-ui.com/components/native-select
 */
export const NativeSelectRoot = withProvider<"select", NativeSelectRootProps>(
  (props) => {
    const [groupItemProps, computedProps] = useGroupItemProps(props)
    const {
      props: {
        ref,
        className,
        css,
        colorScheme,
        children,
        errorBorderColor,
        focusBorderColor,
        icon,
        items = [],
        placeholder,
        placeholderInOptions = true,
        elementProps,
        iconProps,
        rootProps,
        ...rest
      },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps({ ...computedProps, notSupportReadOnly: true })
    const varProps = useInputBorder({
      errorBorderColor,
      focusBorderColor,
    })
    const computedChildren = useMemo(() => {
      if (children || !items.length) return

      return items.map((item, index) => {
        if ("value" in item) {
          const { label, ...props } = item

          return cloneElement(<NativeOption />, {
            key: index,
            children: label,
            ...props,
          })
        } else if ("items" in item) {
          const { items = [], label, ...props } = item

          return cloneElement(<NativeOptionGroup />, {
            key: index,
            children: items.map(({ label, ...props }, index) =>
              cloneElement(<NativeOption />, {
                key: index,
                children: label,
                ...props,
              }),
            ),
            label,
            ...props,
          })
        }
      })
    }, [children, items])

    return (
      <InputGroup.Root
        className={className}
        css={css}
        colorScheme={colorScheme}
        {...groupItemProps}
        {...rootProps}
      >
        <NativeSelectField
          ref={ref}
          aria-label={placeholder}
          {...varProps}
          {...ariaProps}
          {...dataProps}
          {...eventProps}
          {...rest}
        >
          {placeholder ? (
            <NativeOption hidden={!placeholderInOptions} value="">
              {placeholder}
            </NativeOption>
          ) : null}

          {children ?? computedChildren}
        </NativeSelectField>

        <InputGroup.Element {...elementProps}>
          <NativeSelectIcon icon={icon} {...dataProps} {...iconProps} />
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

export interface NativeOptionGroupProps extends HTMLStyledProps<"optgroup"> {}

export const NativeOptionGroup = withContext<
  "optgroup",
  NativeOptionGroupProps
>("optgroup", "optionGroup")()

export interface NativeOptionProps
  extends Omit<HTMLStyledProps<"option">, "children"> {
  children?: string
}

export const NativeOption = withContext<"option", NativeOptionProps>(
  "option",
  "option",
)()
