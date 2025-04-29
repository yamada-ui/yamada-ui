import type {
  DetailedHTMLProps,
  OptionHTMLAttributes,
  ReactElement,
} from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { FormControlOptions } from "../form-control"
import { cloneElement } from "react"
import {
  forwardRef,
  layoutStyleProperties,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import {
  createContext,
  cx,
  getValidChildren,
  isValidElement,
  omitObject,
  pickObject,
  splitObject,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"
import { ChevronDownIcon } from "../icon"

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

interface NativeSelectContext {
  [key: string]: CSSUIObject | undefined
}

const [NativeSelectProvider, useNativeSelect] =
  createContext<NativeSelectContext>({
    name: "NativeSelectContext",
    errorMessage: `useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`,
  })

interface NativeSelectOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
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
   * Props for container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for icon element.
   */
  iconProps?: HTMLUIProps
}

export interface NativeSelectProps
  extends Omit<HTMLUIProps<"select">, "size">,
    ThemeProps<"NativeSelect">,
    NativeSelectOptions,
    FormControlOptions {}

/**
 * `NativeSelect` is a component used for allowing users to select one option from a list. It displays a native dropdown list provided by the browser (user agent).
 *
 * @see https://yamada-ui.com/components/forms/native-select
 */
export const NativeSelect = forwardRef<NativeSelectProps, "select">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("NativeSelect", props)
    const {
      className,
      children,
      color,
      items = [],
      placeholder,
      placeholderInOptions = true,
      containerProps,
      iconProps,
      ...rest
    } = useFormControlProps(omitThemeProps(mergedProps))
    const {
      "aria-readonly": _ariaReadonly,
      onBlur: _onBlur,
      onFocus: _onFocus,
      ...formControlProps
    } = pickObject(rest, formControlProperties)
    const [{ h, height, minH, minHeight, ...layoutProps }, selectProps] =
      splitObject(omitObject(rest, ["aria-readonly"]), layoutStyleProperties)

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
      <NativeSelectProvider value={styles}>
        <ui.div
          className="ui-select"
          __css={{
            color,
            h: "fit-content",
            position: "relative",
            w: "100%",
            ...styles.container,
          }}
          {...layoutProps}
          {...containerProps}
          {...formControlProps}
        >
          <ui.select
            ref={ref}
            className={cx("ui-select__field", className)}
            __css={{
              h: h ?? height,
              minH: minH ?? minHeight,
              pe: "2rem",
              ...styles.field,
            }}
            {...selectProps}
          >
            {placeholder ? (
              <NativeOption hidden={!placeholderInOptions} value="">
                {placeholder}
              </NativeOption>
            ) : null}
            {children ?? computedChildren}
          </ui.select>

          <NativeSelectIcon {...iconProps} {...formControlProps} />
        </ui.div>
      </NativeSelectProvider>
    )
  },
)

NativeSelect.displayName = "NativeSelect"
NativeSelect.__ui__ = "NativeSelect"

interface NativeSelectIconProps extends HTMLUIProps {}

const NativeSelectIcon: FC<NativeSelectIconProps> = ({
  className,
  children,
  ...rest
}) => {
  const styles = useNativeSelect()

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
    <ui.div
      className={cx("ui-select__icon", className)}
      __css={styles.icon}
      {...rest}
    >
      {isValidElement(children) ? cloneChildren : <ChevronDownIcon />}
    </ui.div>
  )
}

NativeSelectIcon.displayName = "NativeSelectIcon"
NativeSelectIcon.__ui__ = "NativeSelectIcon"

export interface NativeOptionGroupProps extends HTMLUIProps<"optgroup"> {}

export const NativeOptionGroup = forwardRef<NativeOptionGroupProps, "optgroup">(
  (props, ref) => <ui.optgroup ref={ref} {...props} />,
)

NativeOptionGroup.displayName = "NativeOptionGroup"
NativeOptionGroup.__ui__ = "NativeOptionGroup"

export interface NativeOptionProps
  extends Omit<HTMLUIProps<"option">, "children"> {
  children?: string
}

export const NativeOption = forwardRef<NativeOptionProps, "option">(
  (props, ref) => <ui.option ref={ref} {...props} />,
)

NativeOption.displayName = "NativeOption"
NativeOption.__ui__ = "NativeOption"
