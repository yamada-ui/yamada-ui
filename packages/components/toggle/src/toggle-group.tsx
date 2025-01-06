import type {
  ComponentArgs,
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  createContext,
  cx,
  isArray,
  isUndefined,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useMemo, useRef } from "react"

interface ToggleGroupContext extends ThemeProps<"Button"> {
  controlled: boolean
  disabled?: boolean
  readOnly?: boolean
  value?: (number | string)[] | number | string
  onChange?: <M extends number | string = string>(value: M | undefined) => void
}

const [ToggleGroupProvider, useToggleGroup] = createContext<ToggleGroupContext>(
  {
    name: "ToggleGroupContext",
    strict: false,
  },
)

export { useToggleGroup }

interface ToggleGroupOptions<
  Y extends (number | string)[] | number | string = string,
> {
  /**
   * The initial value of the toggle button group.
   */
  defaultValue?: Y extends any[] ? Y : undefined | Y
  /**
   * The CSS `flex-direction` property.
   *
   * @deprecated Use `flexDirection` instead.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * If `true`, all wrapped toggle button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, all wrapped toggle button will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, all wrapped toggle button will be readonly.
   *
   * @default false
   *
   * @deprecated Use `readOnly` instead.
   */
  isReadOnly?: boolean
  /**
   * If `true`, all wrapped toggle button will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The value of the toggle button group.
   */
  value?: Y extends any[] ? Y : undefined | Y
  /**
   * The callback fired when any children toggle button is selected or unselected.
   */
  onChange?: (value: Y extends any[] ? Y : undefined | Y) => void
}

/**
 * `ToggleGroup` is a set of two-state buttons that can be toggled on or off.
 *
 * @see Docs https://yamada-ui.com/components/forms/toggle
 */
export interface ToggleGroupProps<
  Y extends (number | string)[] | number | string = string,
> extends Omit<HTMLUIProps, "defaultValue" | "direction" | "onChange">,
    ThemeProps<"Toggle">,
    ToggleGroupOptions<Y> {}

export const ToggleGroup = forwardRef(
  <Y extends (number | string)[] | number | string = string>(
    {
      className,
      size,
      variant,
      defaultValue,
      direction,
      isDisabled,
      disabled = isDisabled,
      flexDirection = direction,
      isReadOnly,
      readOnly = isReadOnly,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    }: ToggleGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    type Value = Y extends any[] ? Y : undefined | Y

    const [value, setValue] = useControllableState<Value>({
      defaultValue,
      value: valueProp,
      onChange: onChangeProp,
    })
    const controlledRef = useRef<boolean>(!isUndefined(value))

    const onChange = useCallback(
      <M extends number | string = Y extends any[] ? Y[number] : Y>(
        value: M | undefined,
      ) => {
        if (isUndefined(value)) return

        setValue((prev) => {
          if (isArray(prev)) {
            const isIncluded = prev.includes(value)

            if (isIncluded) {
              return prev.filter((prevValue) => prevValue !== value) as Value
            } else {
              return [...prev, value] as Value
            }
          } else {
            if (value === (prev as number | string | undefined)) {
              return undefined as Value
            } else {
              return value as unknown as Value
            }
          }
        })
      },
      [setValue],
    )

    const css: CSSUIObject = {
      display: "inline-flex",
      flexDirection,
      gap: "0.5rem",
    }

    const values: ToggleGroupContext = useMemo(
      () => ({
        size,
        variant,
        controlled: controlledRef.current,
        disabled,
        readOnly,
        value,
        onChange,
      }),
      [value, size, variant, disabled, readOnly, onChange],
    )

    useUpdateEffect(() => {
      if (isUndefined(value)) return

      controlledRef.current = true
    }, [valueProp])

    return (
      <ToggleGroupProvider value={values}>
        <ui.div
          ref={ref}
          className={cx("ui-toggle-group", className)}
          role="group"
          __css={css}
          {...rest}
        />
      </ToggleGroupProvider>
    )
  },
) as {
  <Y extends (number | string)[] | number | string = string>(
    props: RefAttributes<HTMLDivElement> & ToggleGroupProps<Y>,
  ): ReactElement
} & ComponentArgs

ToggleGroup.displayName = "ToggleGroup"
ToggleGroup.__ui__ = "ToggleGroup"
