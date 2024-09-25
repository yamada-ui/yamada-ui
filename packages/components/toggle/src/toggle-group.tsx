import type {
  CSSUIObject,
  ComponentArgs,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  createContext,
  cx,
  isArray,
  isUndefined,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type { ForwardedRef, RefAttributes } from "react"
import { useCallback, useMemo, useRef } from "react"

type ToggleGroupContext = ThemeProps<"Button"> & {
  isControlled: boolean
  value?: string | number | (string | number)[]
  onChange?: <M extends string | number = string>(value: M | undefined) => void
  isDisabled?: boolean
  isReadOnly?: boolean
}

const [ToggleGroupProvider, useToggleGroup] = createContext<ToggleGroupContext>(
  {
    strict: false,
    name: "ToggleGroupContext",
  },
)

export { useToggleGroup }

interface ToggleGroupOptions<
  Y extends string | number | (string | number)[] = string,
> {
  /**
   * The value of the toggle button group.
   */
  value?: Y extends any[] ? Y : Y | undefined
  /**
   * The initial value of the toggle button group.
   */
  defaultValue?: Y extends any[] ? Y : Y | undefined
  /**
   * The callback fired when any children toggle button is selected or unselected.
   */
  onChange?: (value: Y extends any[] ? Y : Y | undefined) => void
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * If `true`, all wrapped toggle button will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, all wrapped toggle button will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
}

/**
 * `ToggleGroup` is a set of two-state buttons that can be toggled on or off.
 *
 * @see Docs https://yamada-ui.com/components/forms/toggle
 */
export interface ToggleGroupProps<
  Y extends string | number | (string | number)[] = string,
> extends Omit<HTMLUIProps, "direction" | "defaultValue" | "onChange">,
    ThemeProps<"Toggle">,
    ToggleGroupOptions<Y> {}

export const ToggleGroup = forwardRef(
  <Y extends string | number | (string | number)[] = string>(
    {
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      className,
      size,
      variant,
      direction: flexDirection,
      isDisabled,
      isReadOnly,
      ...rest
    }: ToggleGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    type Value = Y extends any[] ? Y : Y | undefined

    const [value, setValue] = useControllableState<Value>({
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
    })
    const isControlledRef = useRef<boolean>(!isUndefined(value))

    const onChange = useCallback(
      <M extends string | number = Y extends any[] ? Y[number] : Y>(
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
            if (value === (prev as string | number | undefined)) {
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
      gap: "0.5rem",
      flexDirection,
    }

    const values: ToggleGroupContext = useMemo(
      () => ({
        value,
        size,
        variant,
        isDisabled,
        isReadOnly,
        isControlled: isControlledRef.current,
        onChange,
      }),
      [value, size, variant, isDisabled, isReadOnly, onChange],
    )

    useUpdateEffect(() => {
      if (isUndefined(value)) return

      isControlledRef.current = true
    }, [valueProp])

    return (
      <ToggleGroupProvider value={values}>
        <ui.div
          ref={ref}
          role="group"
          className={cx("ui-toggle-group", className)}
          __css={css}
          {...rest}
        />
      </ToggleGroupProvider>
    )
  },
) as {
  <Y extends string | number | (string | number)[] = string>(
    props: ToggleGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): JSX.Element
} & ComponentArgs

ToggleGroup.displayName = "ToggleGroup"
ToggleGroup.__ui__ = "ToggleGroup"
