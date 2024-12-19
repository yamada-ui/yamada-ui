import type { ChangeEvent } from "react"
import type { PropGetter } from "../../core"
import { useCallback, useEffect, useState } from "react"
import { trackFocusVisible } from "../../hooks/use-focus-visible"
import { dataAttr, handlerAll } from "../../utils"
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
    outside,
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
  const [focused, setFocused] = useState<boolean>(false)
  const [focusVisible, setFocusVisible] = useState<boolean>(false)
  const active = value === resolvedValue
  const checked = value === roundedValue
  const filled = highlightSelectedOnly
    ? value === resolvedValue
    : value <= resolvedValue

  const onBlur = useCallback(() => {
    setFocused(false)

    if (outside) setHoveredValue(-1)
  }, [outside, setHoveredValue])

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
      const zIndex = active ? 1 : -1

      return {
        ref,
        htmlFor: `${id}-${groupValue}-${value}`,
        ...omittedFormControlProps,
        ...props,
        "data-active": dataAttr(active),
        "data-disabled": dataAttr(disabled),
        "data-filled": dataAttr(filled),
        "data-focus": dataAttr(focused),
        "data-focus-visible": dataAttr(focused && focusVisible),
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
      active,
      filled,
      focusVisible,
      focused,
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
        "data-active": dataAttr(active),
        "data-checked": dataAttr(checked),
        checked,
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
      checked,
      onInputChange,
      onBlur,
      active,
      onChange,
    ],
  )

  useEffect(() => {
    return trackFocusVisible(setFocusVisible)
  }, [])

  return {
    active,
    checked,
    filled,
    getInputProps,
    getItemProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
