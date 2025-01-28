import type { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from "react"
import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "../../core"
import type { FormControlOptions } from "../form-control"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useFocusOnPointerDown } from "../../hooks/use-focus"
import {
  createContext,
  cx,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  runIfFunc,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

export interface UseEditableProps extends FormControlOptions {
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

export const useEditable = (props: UseEditableProps) => {
  const {
    id,
    defaultValue,
    placeholder,
    previewFocusable = true,
    selectAllOnFocus = true,
    startWithEditView,
    submitOnBlur = true,
    value: valueProp,
    onCancel: onCancelProp,
    onChange: onChangeProp,
    onEdit: onEditProp,
    onSubmit: onSubmitProp,
    ...rest
  } = useFormControlProps(props)
  const onEditRef = useCallbackRef(onEditProp)
  const { disabled, readOnly, required, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
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
      const targetIsCancel = isContains(cancelRef.current, relatedTarget)
      const targetIsSubmit = isContains(submitRef.current, relatedTarget)
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

  const getPreviewProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, previewRef),
      children: emptyValue ? placeholder : value,
      hidden: editing,
      tabIndex: interactive && previewFocusable ? 0 : undefined,
      onFocus: handlerAll(props.onFocus, onEdit, onUpdatePrevValue),
    }),
    [
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
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref: mergeRefs(ref, inputRef),
      disabled,
      hidden: !editing,
      placeholder,
      readOnly,
      required,
      value,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onUpdatePrevValue),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      disabled,
      id,
      editing,
      onBlur,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      readOnly,
      required,
      formControlProps,
      value,
    ],
  )

  const getTextareaProps: PropGetter<"textarea"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref: mergeRefs(ref, inputRef),
      disabled,
      hidden: !editing,
      placeholder,
      readOnly,
      required,
      value,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onUpdatePrevValue),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDownWithoutSubmit),
    }),
    [
      disabled,
      id,
      editing,
      onBlur,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      readOnly,
      required,
      formControlProps,
      value,
    ],
  )

  const getEditProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(ref, editRef),
      type: "button",
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onEdit),
    }),
    [disabled, onEdit, readOnly, formControlProps],
  )

  const getSubmitProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(submitRef, ref),
      type: "button",
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onSubmit),
    }),
    [disabled, onSubmit, readOnly, formControlProps],
  )

  const getCancelProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(cancelRef, ref),
      type: "button",
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onCancel),
    }),
    [disabled, onCancel, readOnly, formControlProps],
  )

  return {
    editing,
    value,
    getCancelProps,
    getEditProps,
    getInputProps,
    getPreviewProps,
    getSubmitProps,
    getTextareaProps,
    onCancel,
    onEdit,
    onSubmit,
  }
}

export type UseEditableReturn = ReturnType<typeof useEditable>

export const useEditableControl = () => {
  const { editing, getCancelProps, getEditProps, getSubmitProps } =
    useEditableContext()

  return {
    editing,
    getCancelProps,
    getEditProps,
    getSubmitProps,
  }
}

interface EditableContext {
  editing: boolean
  styles: { [key: string]: CSSUIObject | undefined }
  getCancelProps: PropGetter<"button">
  getEditProps: PropGetter<"button">
  getInputProps: PropGetter<"input">
  getPreviewProps: PropGetter<"span">
  getSubmitProps: PropGetter<"button">
  getTextareaProps: PropGetter<"textarea">
}

const [EditableProvider, useEditableContext] = createContext<EditableContext>({
  name: "EditableContext",
  errorMessage:
    "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`",
})

interface EditableElementProps
  extends Pick<
    UseEditableReturn,
    "editing" | "onCancel" | "onEdit" | "onSubmit"
  > {}

type EditableElement = (props: EditableElementProps) => ReactNode

interface EditableOptions {
  children?: EditableElement | ReactNode
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export interface EditableProps
  extends Omit<
      HTMLUIProps,
      "children" | "defaultValue" | "onChange" | "onSubmit" | "value"
    >,
    ThemeProps<"Editable">,
    UseEditableProps,
    EditableOptions {}

/**
 * `Editable` is a component used to obtain inline editable text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/editable
 */
export const Editable = forwardRef<EditableProps, "div">(
  ({ errorBorderColor, focusBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Editable", {
      errorBorderColor,
      focusBorderColor,
      ...props,
    })
    const {
      className,
      children,
      defaultValue,
      disabled,
      invalid,
      placeholder,
      previewFocusable,
      readOnly,
      required,
      selectAllOnFocus,
      startWithEditView,
      submitOnBlur,
      value,
      onCancel: onCancelProp,
      onChange,
      onEdit: onEditProp,
      onSubmit: onSubmitProp,
      ...rest
    } = omitThemeProps(mergedProps)
    const {
      editing,
      getCancelProps,
      getEditProps,
      getInputProps,
      getPreviewProps,
      getSubmitProps,
      getTextareaProps,
      onCancel,
      onEdit,
      onSubmit,
    } = useEditable({
      defaultValue,
      disabled,
      invalid,
      placeholder,
      previewFocusable,
      readOnly,
      required,
      selectAllOnFocus,
      startWithEditView,
      submitOnBlur,
      value,
      onCancel: onCancelProp,
      onChange,
      onEdit: onEditProp,
      onSubmit: onSubmitProp,
    })

    const cloneChildren = runIfFunc(children, {
      editing,
      onCancel,
      onEdit,
      onSubmit,
    })

    return (
      <EditableProvider
        value={{
          editing,
          styles,
          getCancelProps,
          getEditProps,
          getInputProps,
          getPreviewProps,
          getSubmitProps,
          getTextareaProps,
        }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-editable", className)}
          {...rest}
          __css={styles.container}
        >
          {cloneChildren}
        </ui.div>
      </EditableProvider>
    )
  },
)

Editable.displayName = "Editable"
Editable.__ui__ = "Editable"

export interface EditablePreviewProps extends HTMLUIProps<"span"> {}

export const EditablePreview = forwardRef<EditablePreviewProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles, getPreviewProps } = useEditableContext()

    return (
      <ui.span
        className={cx("ui-editable__preview", className)}
        {...getPreviewProps(rest, ref)}
        __css={styles.preview}
      />
    )
  },
)

EditablePreview.displayName = "EditablePreview"
EditablePreview.__ui__ = "EditablePreview"

export interface EditableInputProps extends HTMLUIProps<"input"> {}

export const EditableInput = forwardRef<EditableInputProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles, getInputProps } = useEditableContext()

    return (
      <ui.input
        className={cx("ui-editable__input", className)}
        {...getInputProps(rest, ref)}
        __css={styles.input}
      />
    )
  },
)

EditableInput.displayName = "EditableInput"
EditableInput.__ui__ = "EditableInput"

export interface EditableTextareaProps extends HTMLUIProps<"textarea"> {}

export const EditableTextarea = forwardRef<EditableTextareaProps, "textarea">(
  ({ className, ...rest }, ref) => {
    const { styles, getTextareaProps } = useEditableContext()

    return (
      <ui.textarea
        className={cx("ui-editable__textarea", className)}
        {...getTextareaProps(rest, ref)}
        __css={styles.textarea}
      />
    )
  },
)

EditableTextarea.displayName = "EditableTextarea"
EditableTextarea.__ui__ = "EditableTextarea"
