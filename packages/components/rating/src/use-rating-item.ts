import type { PropGetter } from "@yamada-ui/core"
import type { ChangeEvent } from "react"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import { dataAttr, handlerAll } from "@yamada-ui/utils"
import { useCallback, useEffect, useState } from "react"
import { useRatingContext } from "./rating-context"

export interface UseRatingItemProps {
  fractionValue: number
  groupValue: number
  value: number
}

export const useRatingItem = ({
  fractionValue,
  groupValue,
  value,
}: UseRatingItemProps) => {
  const {
    id,
    name,
    highlightSelectedOnly,
    isOutside,
    resolvedValue,
    roundedValue,
    setHoveredValue,
    setValue,
    formControlProps,
  } = useRatingContext()
  const {
    "aria-disabled": ariaDisabled,
    "aria-readonly": _ariaReadOnly,
    disabled,
    readOnly,
    ...omittedFormControlProps
  } = formControlProps
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
        ...omittedFormControlProps,
        ...props,
        "data-active": dataAttr(isActive),
        "data-disabled": dataAttr(disabled),
        "data-filled": dataAttr(isFilled),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible),
        zIndex: fractionValue !== 1 ? zIndex : undefined,
        onMouseDown: handlerAll(onMouseDown, props.onMouseDown),
        onTouchStart: handlerAll(onTouchStart, props.onTouchStart),
      }
    },
    [
      disabled,
      omittedFormControlProps,
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
        "aria-disabled": ariaDisabled,
        "aria-label": `${value}`,
        disabled,
        readOnly,
        ...omittedFormControlProps,
        ...props,
        id: `${id}-${groupValue}-${value}`,
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
        "data-active": dataAttr(isActive),
        "data-checked": dataAttr(isChecked),
        checked: isChecked,
        value,
        onBlur: handlerAll(onBlur, props.onBlur),
        onChange: handlerAll(onInputChange, props.onChange),
        onFocus: handlerAll(() => setFocused(true), props.onFocus),
        onKeyDown: handlerAll(
          (ev) => (ev.key === " " ? onChange(value) : void 0),
          props.onKeyDown,
        ),
      }
    },
    [
      ariaDisabled,
      disabled,
      readOnly,
      value,
      omittedFormControlProps,
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
    getInputProps,
    getItemProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
