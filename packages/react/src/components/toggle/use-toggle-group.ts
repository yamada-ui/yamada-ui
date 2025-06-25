"use client"

import type { RefObject } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  createContext,
  dataAttr,
  isArray,
  isUndefined,
  toArray,
  useUpdateEffect,
} from "../../utils"

interface ToggleGroupContext {
  onChangeMapRef: RefObject<Map<string, (value: boolean) => void>>
  disabled?: boolean
  readOnly?: boolean
  value?: string | string[]
  onChange?: <Y extends string = string>(value: undefined | Y) => void
}

export const [ToggleGroupContext, useToggleGroupContext] =
  createContext<ToggleGroupContext>({
    name: "ToggleGroupContext",
    strict: false,
  })

export interface UseToggleGroupProps<Y extends string | string[] = string>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value"> {
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

export const useToggleGroup = <Y extends string | string[] = string>({
  defaultValue,
  disabled,
  readOnly,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseToggleGroupProps<Y>) => {
  type Value = Y extends any[] ? Y : undefined | Y

  const onChangeMapRef = useRef<Map<string, (value: boolean) => void>>(
    new Map(),
  )
  const [value, setValue] = useControllableState<Value>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })

  const onReset = useCallback((targetValue?: string[]) => {
    onChangeMapRef.current.forEach((onChange, value) => {
      if (targetValue?.includes(value)) {
        onChange(true)
      } else {
        onChange(false)
      }
    })
  }, [])

  const onChange = useCallback(
    <M extends string = Y extends any[] ? Y[number] : Y>(
      value: M | undefined,
    ) => {
      if (isUndefined(value)) return

      setValue((prev) => {
        if (isArray(prev)) {
          const included = prev.includes(value)

          if (included) {
            const nextValue = prev.filter((prevValue) => prevValue !== value)

            onReset(nextValue)

            return nextValue as Value
          } else {
            const nextValue = [...prev, value]

            onReset(nextValue)

            return nextValue as Value
          }
        } else {
          if (value === (prev as string | undefined)) {
            onReset()

            return undefined as Value
          } else {
            onReset([value])

            return value as unknown as Value
          }
        }
      })
    },
    [setValue, onReset],
  )

  useUpdateEffect(() => {
    onReset(!isUndefined(valueProp) ? toArray(valueProp) : undefined)

    setValue(valueProp as Value)
  }, [valueProp])

  const getGroupProps: PropGetter = useCallback(
    (props) => ({
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "group",
      ...rest,
      ...props,
    }),
    [disabled, readOnly, rest],
  )

  return { disabled, readOnly, value, getGroupProps, onChange, onChangeMapRef }
}

export type UseToggleGroupReturn = ReturnType<typeof useToggleGroup>
