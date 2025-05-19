import type { ReactElement, RefAttributes } from "react"
import type { ComponentArgs, HTMLStyledProps, ThemeProps } from "../../core"
import type { ToggleStyle } from "./toggle.style"
import { useCallback, useMemo, useRef } from "react"
import { styled } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { isArray, isUndefined, useUpdateEffect } from "../../utils"
import {
  component,
  ToggleContext,
  TogglePropsContext,
  useRootComponentProps,
} from "./toggle"

/**
 * `ToggleGroup` is a set of two-state buttons that can be toggled on or off.
 *
 * @see https://yamada-ui.com/components/toggle
 */
export interface ToggleGroupProps<
  Y extends (number | string)[] | number | string = string,
> extends Omit<HTMLStyledProps, "defaultValue" | "direction" | "onChange">,
    ThemeProps<ToggleStyle> {
  /**
   * The initial value of the toggle button group.
   */
  defaultValue?: Y extends any[] ? Y : undefined | Y
  /**
   * If `true`, all wrapped toggle button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
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

export const ToggleGroup = component<"div", ToggleGroupProps>(
  <Y extends (number | string)[] | number | string = string>(
    props: ToggleGroupProps<Y>,
  ) => {
    type Value = Y extends any[] ? Y : undefined | Y

    const [
      ,
      {
        colorScheme,
        size,
        variant,
        defaultValue,
        disabled,
        readOnly,
        value: valueProp,
        onChange: onChangeProp,
        ...rest
      },
    ] = useRootComponentProps(props, "group", {
      transferProps: ["size", "variant", "colorScheme"],
    })

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

    const values = useMemo(
      () => ({
        controlled: controlledRef.current,
        disabled,
        readOnly,
        value,
        onChange,
      }),
      [value, disabled, readOnly, onChange],
    )

    const context = useMemo(
      () => ({ colorScheme, size, variant }),
      [variant, size, colorScheme],
    )

    useUpdateEffect(() => {
      if (isUndefined(value)) return

      controlledRef.current = true
    }, [valueProp])

    return (
      <TogglePropsContext value={context}>
        <ToggleContext value={values}>
          <styled.div role="group" {...rest} />
        </ToggleContext>
      </TogglePropsContext>
    )
  },
  "group",
)() as ComponentArgs & {
  <Y extends (number | string)[] | number | string = string>(
    props: RefAttributes<HTMLDivElement> & ToggleGroupProps<Y>,
  ): ReactElement
}
