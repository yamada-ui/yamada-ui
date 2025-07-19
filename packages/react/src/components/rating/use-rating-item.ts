"use client"

import type { ChangeEvent } from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { useCallback } from "react"
import { dataAttr, handlerAll, mergeRefs } from "../../utils"
import { useRatingContext } from "./rating"

export interface UseRatingItemProps
  extends Merge<HTMLProps<"label">, HTMLRefAttributes<"input">> {
  fractionValue: number
  groupValue: number
  value: number
}

export const useRatingItem = ({
  ref,
  fractionValue,
  groupValue,
  value,
  ...rest
}: UseRatingItemProps) => {
  const {
    id,
    name,
    disabled,
    highlightSelectedOnly,
    outside,
    readOnly,
    resolvedValue,
    roundedValue,
    setHoveredValue,
    setValue,
    formControlProps,
  } = useRatingContext()
  const {
    "aria-disabled": ariaDisabled,
    "aria-readonly": _ariaReadOnly,
    ...omittedFormControlProps
  } = formControlProps
  const active = value === resolvedValue
  const checked = value === roundedValue
  const filled = highlightSelectedOnly
    ? value === resolvedValue
    : value <= resolvedValue

  const onBlur = useCallback(() => {
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
    (props = {}) => {
      const zIndex = active ? 1 : -1

      return {
        htmlFor: `${id}-${groupValue}-${value}`,
        ...omittedFormControlProps,
        ...props,
        ...rest,
        "data-active": dataAttr(active),
        "data-disabled": dataAttr(disabled),
        "data-filled": dataAttr(filled),
        zIndex: fractionValue !== 1 ? zIndex : undefined,
        onMouseDown: handlerAll(onMouseDown, props.onMouseDown),
        onTouchStart: handlerAll(onTouchStart, props.onTouchStart),
      }
    },
    [
      active,
      id,
      groupValue,
      value,
      omittedFormControlProps,
      rest,
      disabled,
      filled,
      fractionValue,
      onMouseDown,
      onTouchStart,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => {
      return {
        "aria-disabled": ariaDisabled,
        "aria-label": `${value}`,
        disabled,
        readOnly,
        ...omittedFormControlProps,
        ...props,
        id: `${id}-${groupValue}-${value}`,
        ref: mergeRefs(ref, props.ref),
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
        onKeyDown: handlerAll(
          (ev) => (ev.key === " " ? onChange(value) : void 0),
          props.onKeyDown,
        ),
      }
    },
    [
      ariaDisabled,
      value,
      disabled,
      readOnly,
      omittedFormControlProps,
      id,
      groupValue,
      ref,
      name,
      active,
      checked,
      onBlur,
      onInputChange,
      onChange,
    ],
  )

  return {
    active,
    checked,
    filled,
    getInputProps,
    getItemProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
