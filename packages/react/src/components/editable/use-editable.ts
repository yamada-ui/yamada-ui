"use client"

import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react"
import type { PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useEffect, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useFocusOnPointerDown } from "../../hooks/use-focus"
import {
  contains,
  createContext,
  handlerAll,
  mergeRefs,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { useFieldProps } from "../field"

interface EditableContext
  extends Omit<
    UseEditableReturn,
    "getRootProps" | "onCancel" | "onEdit" | "onSubmit" | "value"
  > {}

const [EditableContext, useEditableContext] = createContext<EditableContext>({
  name: "EditableContext",
})

export { EditableContext, useEditableContext }

export interface UseEditableProps extends FieldProps {
  /**
   * The initial value of the Editable in both edit & preview mode.
   */
  defaultValue?: string
  /**
   * The placeholder text when the value is empty.
   */
  placeholder?: string
  /**
   * If `true`, the read only view, has a `tabIndex` set to `0`
   * so it can receive focus via the keyboard or click.
   *
   * @default true
   */
  previewFocusable?: boolean
  /**
   * If `true`, the input's text will be highlighted on focus.
   *
   * @default true
   */
  selectAllOnFocus?: boolean
  /**
   * If `true`, the Editable will start with edit mode by default.
   */
  startWithEditView?: boolean
  /**
   * If `true`, it'll update the value onBlur and turn off the edit mode.
   *
   * @default true
   */
  submitOnBlur?: boolean
  /**
   * The value of the Editable in both edit & preview mode.
   */
  value?: string
  /**
   * Callback invoked when user cancels input with the `Esc` key.
   * It provides the last confirmed value as argument.
   */
  onCancel?: (preValue: string) => void
  /**
   * A callback invoked when user changes input.
   */
  onChange?: (value: string) => void
  /**
   * A callback invoked once the user enters edit mode.
   */
  onEdit?: () => void
  /**
   * A callback invoked when user confirms value with `enter` key or by blurring input.
   */
  onSubmit?: (value: string) => void
}

export const useEditable = (props: UseEditableProps = {}) => {
  const {
    props: {
      id,
      defaultValue,
      disabled,
      placeholder,
      previewFocusable = true,
      readOnly,
      required,
      selectAllOnFocus = true,
      startWithEditView,
      submitOnBlur = true,
      value: valueProp,
      onCancel: onCancelProp,
      onChange: onChangeProp,
      onEdit: onEditProp,
      onSubmit: onSubmitProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const onEditRef = useCallbackRef(onEditProp)
  const [editing, setEditing] = useState<boolean>(
    !!startWithEditView && !disabled,
  )
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp,
  })
  const interactive = !editing && !disabled
  const emptyValue = value.length === 0
  const [prevValue, setPrevValue] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLElement>(null)
  const editRef = useRef<HTMLButtonElement>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)
  const submitRef = useRef<HTMLButtonElement>(null)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(ev.currentTarget.value),
    [setValue],
  )

  const onUpdatePrevValue = useCallback(() => setPrevValue(value), [value])

  const onEdit = useCallback(() => {
    if (interactive) setEditing(true)
  }, [interactive])

  const onCancel = useCallback(() => {
    setEditing(false)
    setValue(prevValue)
    onCancelProp?.(prevValue)
  }, [prevValue, onCancelProp, setValue])

  const onSubmit = useCallback(() => {
    setEditing(false)
    setPrevValue(value)
    onSubmitProp?.(value)
  }, [onSubmitProp, value])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape" && ev.key !== "Enter") return

      ev.preventDefault()

      if (ev.key === "Escape") {
        onCancel()
      } else {
        const { metaKey, shiftKey } = ev

        if (!shiftKey && !metaKey) onSubmit()
      }
    },
    [onCancel, onSubmit],
  )

  const onKeyDownWithoutSubmit = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      ev.preventDefault()
      onCancel()
    },
    [onCancel],
  )

  const onBlur = useCallback(
    (ev: FocusEvent) => {
      if (!editing) return

      const ownerDocument = ev.currentTarget.ownerDocument
      const relatedTarget = (ev.relatedTarget ??
        ownerDocument.activeElement) as HTMLElement
      const targetIsCancel = contains(cancelRef.current, relatedTarget)
      const targetIsSubmit = contains(submitRef.current, relatedTarget)
      const validBlur = !targetIsCancel && !targetIsSubmit

      if (!validBlur) return

      if (submitOnBlur) {
        onSubmit()
      } else {
        onCancel()
      }
    },
    [editing, submitOnBlur, onSubmit, onCancel],
  )

  useFocusOnPointerDown({
    ref: inputRef,
    elements: [cancelRef, submitRef],
    enabled: editing,
  })

  useSafeLayoutEffect(() => {
    if (!editing) return

    inputRef.current?.focus()

    if (selectAllOnFocus) inputRef.current?.select()
  }, [])

  useUpdateEffect(() => {
    if (!editing) {
      editRef.current?.focus()

      return
    }

    inputRef.current?.focus()

    if (selectAllOnFocus) inputRef.current?.select()

    onEditRef()
  }, [editing, onEditRef, selectAllOnFocus])

  useEffect(() => {
    if (editing) return

    const el = inputRef.current
    const activeEl = el?.ownerDocument.activeElement

    if (activeEl === el) el?.blur()
  }, [editing])

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...rest,
      ...dataProps,
      ...props,
    }),
    [rest, dataProps],
  )

  const getPreviewProps: PropGetter<"span"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...props,
      ref: mergeRefs(previewRef, ref),
      children: emptyValue ? placeholder : value,
      hidden: editing,
      tabIndex: interactive && previewFocusable ? 0 : undefined,
      onFocus: handlerAll(props.onFocus, onEdit, onUpdatePrevValue),
    }),
    [
      dataProps,
      editing,
      interactive,
      previewFocusable,
      emptyValue,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...ariaProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      disabled,
      hidden: !editing,
      placeholder,
      readOnly,
      required,
      value,
      onBlur: handlerAll(eventProps.onBlur, props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(eventProps.onFocus, props.onFocus, onUpdatePrevValue),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      dataProps,
      ariaProps,
      id,
      disabled,
      editing,
      placeholder,
      readOnly,
      required,
      value,
      eventProps.onBlur,
      eventProps.onFocus,
      onBlur,
      onChange,
      onUpdatePrevValue,
      onKeyDown,
    ],
  )

  const getTextareaProps: PropGetter<"textarea"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...ariaProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      disabled,
      hidden: !editing,
      placeholder,
      readOnly,
      required,
      value,
      onBlur: handlerAll(eventProps.onBlur, props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(eventProps.onFocus, props.onFocus, onUpdatePrevValue),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDownWithoutSubmit),
    }),
    [
      dataProps,
      ariaProps,
      id,
      disabled,
      editing,
      placeholder,
      readOnly,
      required,
      value,
      eventProps.onBlur,
      eventProps.onFocus,
      onBlur,
      onChange,
      onUpdatePrevValue,
      onKeyDownWithoutSubmit,
    ],
  )

  const getControlProps: PropGetter = useCallback(
    (props) => ({
      ...dataProps,
      role: "group",
      ...props,
    }),
    [dataProps],
  )

  const getEditProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...props,
      ref: mergeRefs(editRef, ref),
      disabled,
      hidden: editing,
      onClick: handlerAll(props.onClick, onEdit),
    }),
    [dataProps, disabled, editing, onEdit],
  )

  const getSubmitProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...props,
      ref: mergeRefs(submitRef, ref),
      disabled,
      hidden: !editing,
      onClick: handlerAll(props.onClick, onSubmit),
    }),
    [dataProps, disabled, editing, onSubmit],
  )

  const getCancelProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...props,
      ref: mergeRefs(cancelRef, ref),
      disabled,
      hidden: !editing,
      onClick: handlerAll(props.onClick, onCancel),
    }),
    [dataProps, disabled, editing, onCancel],
  )

  return {
    editing,
    value,
    getCancelProps,
    getControlProps,
    getEditProps,
    getInputProps,
    getPreviewProps,
    getRootProps,
    getSubmitProps,
    getTextareaProps,
    onCancel,
    onEdit,
    onSubmit,
  }
}

export type UseEditableReturn = ReturnType<typeof useEditable>
