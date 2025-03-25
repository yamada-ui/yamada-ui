import type { ChangeEvent, FocusEventHandler } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import { trackFocusVisible } from "../../hooks/use-focus-visible"
import {
  ariaAttr,
  dataAttr,
  handlerAll,
  mergeRefs,
  useCallbackRef,
} from "../../utils"

export const { DescendantsContext, useDescendant, useDescendants } =
  createDescendant<HTMLInputElement>()

export interface UseSegmentedControlProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The initial value of the segmented control.
   */
  defaultValue?: string
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The value of the segmented control.
   */
  value?: string
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: string) => void
}

export const useSegmentedControl = ({
  id,
  name,
  defaultValue,
  disabled,
  readOnly,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseSegmentedControlProps) => {
  const uuid = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const [focusVisible, setFocusVisible] = useState<boolean>(false)
  const onChangeRef = useCallbackRef(onChangeProp)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeRef,
  })

  const descendants = useDescendants()

  id ??= uuid
  name ??= `segmented-control-${uuid}`

  const onFocus = useCallback(
    (index: number, skip: boolean) => {
      if (disabled) return

      if (skip) {
        const next = descendants.enabledNextValue(index)

        if (next) setFocusedIndex(next.index)
      } else {
        setFocusedIndex(index)
      }
    },
    [descendants, disabled, setFocusedIndex],
  )

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        ev.preventDefault()

        return
      }

      setValue(ev.target.value)
    },
    [disabled, readOnly, setValue],
  )

  const onBlur = useCallback(() => setFocusedIndex(-1), [])

  useEffect(() => {
    return trackFocusVisible(setFocusVisible)
  }, [])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      "aria-disabled": ariaAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "radiogroup",
      ...rest,
      ...props,
      id,
      ref: mergeRefs(containerRef, ref),
      onBlur: handlerAll(props.onBlur, onBlur),
    }),
    [disabled, id, onBlur, readOnly, rest],
  )

  const getInputProps: RequiredPropGetter<
    HTMLProps<"input">,
    { index: number }
  > = useCallback(
    ({ index, ...props }) => {
      const trulyDisabled = props.disabled ?? disabled
      const trulyReadOnly = props.readOnly ?? readOnly
      const checked = props.value === value

      return {
        ...props,
        id: `${id}-${index}`,
        type: "radio",
        name,
        style: {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        },
        "aria-disabled": ariaAttr(trulyDisabled),
        "data-checked": dataAttr(checked),
        "data-focus": dataAttr(index === focusedIndex),
        "data-readonly": dataAttr(trulyReadOnly),
        checked,
        disabled: trulyDisabled || trulyReadOnly,
        readOnly: trulyReadOnly,
        onChange: handlerAll(props.onChange, (ev) =>
          !trulyDisabled && !trulyReadOnly
            ? onChange(ev as ChangeEvent<HTMLInputElement>)
            : {},
        ),
      }
    },
    [disabled, focusedIndex, id, name, onChange, readOnly, value],
  )

  const getLabelProps: RequiredPropGetter<
    HTMLProps<"label">,
    {
      index: number
      value: string
      disabled?: boolean
      readOnly?: boolean
    }
  > = useCallback(
    ({ index, ...props }) => {
      const trulyDisabled = props.disabled ?? disabled
      const trulyReadOnly = props.readOnly ?? readOnly
      const checked = props.value === value
      const focused = index === focusedIndex

      return {
        ...props,
        "aria-disabled": ariaAttr(trulyDisabled),
        "data-checked": dataAttr(checked),
        "data-focus": dataAttr(focused),
        "data-focus-visible": dataAttr(focused && focusVisible),
        "data-readonly": dataAttr(trulyReadOnly),
        onFocus: handlerAll(
          props.onFocus as unknown as FocusEventHandler<HTMLLabelElement>,
          () => onFocus(index, trulyDisabled || trulyReadOnly || false),
        ),
        ...(trulyDisabled || trulyReadOnly
          ? {
              _invalid: {},
              _hover: {},
              _active: {},
              _focus: {},
              _focusVisible: {},
            }
          : {}),
      }
    },
    [disabled, focusVisible, focusedIndex, onFocus, readOnly, value],
  )

  return {
    defaultValue,
    descendants,
    setValue,
    value,
    getInputProps,
    getLabelProps,
    getRootProps,
  }
}

export type UseSegmentedControlReturn = ReturnType<typeof useSegmentedControl>
