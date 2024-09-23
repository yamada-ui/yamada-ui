import type { PropGetter } from "@yamada-ui/core"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import { dataAttr, handlerAll } from "@yamada-ui/utils"
import type { ChangeEvent } from "react"
import { useCallback, useEffect, useState } from "react"
import { useRatingContext } from "./rating-context"

export interface UseRatingItemProps {
  groupValue: number
  fractionValue: number
  value: number
}

export const useRatingItem = ({
  groupValue,
  fractionValue,
  value,
}: UseRatingItemProps) => {
  const {
    id,
    name,
    formControlProps,
    isOutside,
    highlightSelectedOnly,
    roundedValue,
    resolvedValue,
    setValue,
    setHoveredValue,
  } = useRatingContext()
  const { readOnly, disabled } = formControlProps
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const isActive = value === resolvedValue
  const isChecked = value === roundedValue
  const isFilled = highlightSelectedOnly
    ? value === resolvedValue
    : value <= resolvedValue

  const onBlur = useCallback(() => {
    setFocused(false)

    if (isOutside) setHoveredValue(-1)
  }, [isOutside, setHoveredValue])

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) return

      const value = parseFloat(ev.target.value)

      setHoveredValue(value)
    },
    [disabled, readOnly, setHoveredValue],
  )

  const onChange = useCallback(
    (value: number) => {
      if (readOnly || disabled) return

      setValue(value)
    },
    [disabled, readOnly, setValue],
  )

  const onMouseDown = useCallback(() => {
    if (readOnly || disabled) return

    onChange(value)
  }, [disabled, onChange, readOnly, value])

  const onTouchStart = useCallback(() => {
    if (readOnly || disabled) return

    onChange(value)
  }, [disabled, onChange, readOnly, value])

  const getItemProps: PropGetter<"label"> = useCallback(
    (props = {}, ref = null) => {
      const zIndex = isActive ? 1 : -1

      return {
        ref,
        htmlFor: `${id}-${groupValue}-${value}`,
        ...formControlProps,
        ...props,
        zIndex: fractionValue !== 1 ? zIndex : undefined,
        onMouseDown: handlerAll(onMouseDown, props.onMouseDown),
        onTouchStart: handlerAll(onTouchStart, props.onTouchStart),
        "data-active": dataAttr(isActive),
        "data-filled": dataAttr(isFilled),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      }
    },
    [
      formControlProps,
      fractionValue,
      groupValue,
      id,
      isActive,
      isFilled,
      isFocusVisible,
      isFocused,
      onMouseDown,
      onTouchStart,
      value,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => {
      return {
        ref,
        "aria-label": `${value}`,
        ...formControlProps,
        ...props,
        style: {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        type: "radio",
        id: `${id}-${groupValue}-${value}`,
        name,
        value,
        checked: isChecked,
        onChange: handlerAll(onInputChange, props.onChange),
        onFocus: handlerAll(() => setFocused(true), props.onFocus),
        onBlur: handlerAll(onBlur, props.onBlur),
        onKeyDown: handlerAll(
          (ev) => (ev.key === " " ? onChange(value) : void 0),
          props.onKeyDown,
        ),
        "data-active": dataAttr(isActive),
        "data-checked": dataAttr(isChecked),
      }
    },
    [
      value,
      formControlProps,
      id,
      groupValue,
      name,
      isChecked,
      onInputChange,
      onBlur,
      isActive,
      onChange,
    ],
  )

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  return {
    isActive,
    isChecked,
    isFilled,
    getItemProps,
    getInputProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
