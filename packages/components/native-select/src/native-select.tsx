import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  layoutStylesProperties,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import { ChevronIcon } from "@yamada-ui/icon"
import {
  createContext,
  cx,
  splitObject,
  getValidChildren,
  isValidElement,
  pickObject,
} from "@yamada-ui/utils"
import type {
  DetailedHTMLProps,
  FC,
  OptionHTMLAttributes,
  ReactElement,
} from "react"
import { cloneElement } from "react"

type NativeSelectBaseItem = Omit<
  DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
  "label" | "children" | "value"
> & { label?: string }

type Value = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>["value"]

type NativeSelectItemWithValue = NativeSelectBaseItem & { value?: Value }

type NativeSelectItemWithItems = NativeSelectBaseItem & {
  items?: NativeSelectItemWithValue[]
}

export type NativeSelectItem = NativeSelectItemWithValue &
  NativeSelectItemWithItems

type NativeSelectContext = Record<string, CSSUIObject>

const [NativeSelectProvider, useNativeSelect] =
  createContext<NativeSelectContext>({
    name: "NativeSelectContext",
    errorMessage: `useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`,
  })

type NativeSelectOptions = {
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
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for icon element.
   */
  iconProps?: HTMLUIProps<"div">
}

export type NativeSelectProps = Omit<HTMLUIProps<"select">, "size"> &
  ThemeProps<"Select"> &
  NativeSelectOptions &
  FormControlOptions

/**
 * `NativeSelect` is a component used for allowing users to select one option from a list. It displays a native dropdown list provided by the browser (user agent).
 *
 * @see Docs https://yamada-ui.com/components/forms/native-select
 */
export const NativeSelect = forwardRef<NativeSelectProps, "select">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("NativeSelect", props)
    let {
      className,
      children,
      placeholderInOptions = true,
      color,
      h,
      height,
      minH,
      minHeight,
      items = [],
      placeholder,
      containerProps,
      iconProps,
      ...rest
    } = omitThemeProps(mergedProps)

    rest = useFormControlProps(rest)

    const formControlProps = pickObject(rest, formControlProperties)
    const [layoutProps, selectProps] = splitObject(rest, layoutStylesProperties)

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
            const { label, items = [], ...props } = item

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
            position: "relative",
            w: "100%",
            h: "fit-content",
            color,
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
              paddingEnd: "2rem",
              h: h ?? height,
              minH: minH ?? minHeight,
              ...styles.field,
            }}
            {...selectProps}
          >
            {placeholder ? (
              <NativeOption value="" hidden={!placeholderInOptions}>
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

type NativeSelectIconProps = HTMLUIProps<"div">

const NativeSelectIcon: FC<NativeSelectIconProps> = ({
  className,
  children,
  ...rest
}) => {
  const styles = useNativeSelect()

  const css: CSSUIObject = {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)",
    ...styles.icon,
  }

  const validChildren = getValidChildren(children)

  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      focusable: false,
      "aria-hidden": true,
      style: {
        width: "1em",
        height: "1em",
        color: "currentColor",
      },
    }),
  )

  return (
    <ui.div className={cx("ui-select__icon", className)} __css={css} {...rest}>
      {isValidElement(children) ? cloneChildren : <ChevronIcon />}
    </ui.div>
  )
}

export type NativeOptionGroupProps = HTMLUIProps<"optgroup">

export const NativeOptionGroup = forwardRef<NativeOptionGroupProps, "optgroup">(
  (props, ref) => <ui.optgroup ref={ref} {...props} />,
)

export type NativeOptionProps = Omit<HTMLUIProps<"option">, "children"> & {
  children?: string
}

export const NativeOption = forwardRef<NativeOptionProps, "option">(
  (props, ref) => <ui.option ref={ref} {...props} />,
)
