import type {
  DetailedHTMLProps,
  OptionHTMLAttributes,
  ReactElement,
} from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { NativeSelectStyle } from "./native-select.style"
import { cloneElement } from "react"
import { createSlotComponent, styled } from "../../core"
import { getValidChildren, isValidElement } from "../../utils"
import { useFieldProps } from "../field"
import { ChevronDownIcon } from "../icon"
import { useInputBorder } from "../input"
import { nativeSelectStyle } from "./native-select.style"

interface NativeSelectBaseItem
  extends Omit<
    DetailedHTMLProps<
      OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >,
    "children" | "label" | "value"
  > {
  label?: string
}

type Value = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>["value"]

interface NativeSelectItemWithValue extends NativeSelectBaseItem {
  value?: Value
}

interface NativeSelectItemWithItems extends NativeSelectBaseItem {
  items?: NativeSelectItemWithValue[]
}

export interface NativeSelectItem
  extends NativeSelectItemWithValue,
    NativeSelectItemWithItems {}

export interface NativeSelectRootProps
  extends Omit<HTMLStyledProps<"select">, "size">,
    ThemeProps<NativeSelectStyle>,
    FieldProps,
    UseInputBorderProps {
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
   * Props for icon element.
   */
  iconProps?: HTMLStyledProps
  /**
   * Props for container element.
   */
  rootProps?: Omit<HTMLStyledProps, "children">
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
    const {
      props: {
        ref,
        className,
        css,
        children,
        errorBorderColor,
        focusBorderColor,
        items = [],
        placeholder,
        placeholderInOptions = true,
        iconProps,
        rootProps,
        ...rest
      },
      ariaProps: { "aria-readonly": _ariaReadonly, ...ariaProps },
      dataProps,
    } = useFieldProps(props)
    const vars = useInputBorder({
      errorBorderColor,
      focusBorderColor,
    })

    let computedChildren: ReactElement[] = []

    if (!children && items.length) {
      computedChildren = items
        .map((item, i) => {
          if ("value" in item) {
            const { label, value, ...props } = item

            return (
              <NativeOption key={i} value={value} {...props}>
                {label}
              </NativeOption>
            )
          } else if ("items" in item) {
            const { items = [], label, ...props } = item

            return (
              <NativeOptionGroup key={i} label={label} {...props}>
                {items.map(({ label, value, ...props }, i) => (
                  <NativeOption key={i} value={value} {...props}>
                    {label}
                  </NativeOption>
                ))}
              </NativeOptionGroup>
            )
          }
        })
        .filter(Boolean) as ReactElement[]
    }

    return (
      <styled.div
        className={className}
        css={css}
        {...ariaProps}
        {...dataProps}
        {...rootProps}
      >
        <NativeSelectField
          ref={ref}
          {...vars}
          {...ariaProps}
          {...dataProps}
          {...rest}
        >
          {placeholder ? (
            <NativeOption hidden={!placeholderInOptions} value="">
              {placeholder}
            </NativeOption>
          ) : null}
          {children ?? computedChildren}
        </NativeSelectField>

        <NativeSelectIcon {...iconProps} {...ariaProps} {...dataProps} />
      </styled.div>
    )
  },
  "root",
)()

interface NativeSelectFieldProps extends HTMLStyledProps<"select"> {}

const NativeSelectField = withContext<"select", NativeSelectFieldProps>(
  "select",
  "field",
)()

interface NativeSelectIconProps extends HTMLStyledProps {}

const NativeSelectIcon = withContext<"div", NativeSelectIconProps>(
  ({ children, ...rest }) => {
    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          height: "1em",
          width: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    return (
      <styled.div {...rest}>
        {isValidElement(children) ? cloneChildren : <ChevronDownIcon />}
      </styled.div>
    )
  },
  "icon",
)()

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
