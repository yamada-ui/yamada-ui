import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
  PropGetter,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useFocusOnPointerDown } from "@yamada-ui/use-focus"
import {
  createContext,
  cx,
  runIfFunc,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
  isContains,
  handlerAll,
  mergeRefs,
  pickObject,
} from "@yamada-ui/utils"
import type { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent } from "react"
import { useCallback, useEffect, useRef, useState } from "react"

export interface UseEditableProps extends FormControlOptions {
  /**
   * The placeholder text when the value is empty.
   */
  placeholder?: string
  /**
   * The value of the Editable in both edit & preview mode.
   */
  value?: string
  /**
   * The initial value of the Editable in both edit & preview mode.
   */
  defaultValue?: string
  /**
   * If `true`, the Editable will start with edit mode by default.
   */
  startWithEditView?: boolean
  /**
   * If `true`, the read only view, has a `tabIndex` set to `0`
   * so it can receive focus via the keyboard or click.
   *
   * @default true
   */
  isPreviewFocusable?: boolean
  /**
   * If `true`, it'll update the value onBlur and turn off the edit mode.
   *
   * @default true
   */
  submitOnBlur?: boolean
  /**
   * If `true`, the input's text will be highlighted on focus.
   *
   * @default true
   */
  selectAllOnFocus?: boolean
  /**
   * A callback invoked when user changes input.
   */
  onChange?: (value: string) => void
  /**
   * Callback invoked when user cancels input with the `Esc` key.
   * It provides the last confirmed value as argument.
   */
  onCancel?: (preValue: string) => void
  /**
   * A callback invoked when user confirms value with `enter` key or by blurring input.
   */
  onSubmit?: (value: string) => void
  /**
   * A callback invoked once the user enters edit mode.
   */
  onEdit?: () => void
}

export const useEditable = (props: UseEditableProps) => {
  const {
    id,
    placeholder,
    value: valueProp,
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    onEdit: onEditProp,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    ...rest
  } = useFormControlProps(props)
  const onEditRef = useCallbackRef(onEditProp)
  const { required, disabled, readOnly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )

  const [isEditing, setIsEditing] = useState<boolean>(
    !!startWithEditView && !disabled,
  )

  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp,
  })

  const isInteractive = !isEditing && !disabled
  const isValueEmpty = value.length === 0

  const [prevValue, setPrevValue] = useState(value)

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLElement>(null)
  const editRef = useRef<HTMLButtonElement>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)
  const submitRef = useRef<HTMLButtonElement>(null)

  useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelRef, submitRef],
  })

  useSafeLayoutEffect(() => {
    if (!isEditing) return

    inputRef.current?.focus()

    if (selectAllOnFocus) inputRef.current?.select()
  }, [])

  useUpdateEffect(() => {
    if (!isEditing) {
      editRef.current?.focus()

      return
    }

    inputRef.current?.focus()

    if (selectAllOnFocus) inputRef.current?.select()

    onEditRef()
  }, [isEditing, onEditRef, selectAllOnFocus])

  useEffect(() => {
    if (isEditing) return

    const el = inputRef.current
    const activeEl = el?.ownerDocument.activeElement

    if (activeEl === el) el?.blur()
  }, [isEditing])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(ev.currentTarget.value),
    [setValue],
  )

  const onUpdatePrevValue = useCallback(() => setPrevValue(value), [value])

  const onEdit = useCallback(() => {
    if (isInteractive) setIsEditing(true)
  }, [isInteractive])

  const onCancel = useCallback(() => {
    setIsEditing(false)
    setValue(prevValue)
    onCancelProp?.(prevValue)
  }, [prevValue, onCancelProp, setValue])

  const onSubmit = useCallback(() => {
    setIsEditing(false)
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
        const { shiftKey, metaKey } = ev

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
      if (!isEditing) return

      const ownerDocument = ev.currentTarget.ownerDocument
      const relatedTarget = (ev.relatedTarget ??
        ownerDocument.activeElement) as HTMLElement
      const targetIsCancel = isContains(cancelRef.current, relatedTarget)
      const targetIsSubmit = isContains(submitRef.current, relatedTarget)
      const isValidBlur = !targetIsCancel && !targetIsSubmit

      if (!isValidBlur) return

      if (submitOnBlur) {
        onSubmit()
      } else {
        onCancel()
      }
    },
    [isEditing, submitOnBlur, onSubmit, onCancel],
  )

  const getPreviewProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, previewRef),
      hidden: isEditing,
      tabIndex: isInteractive && isPreviewFocusable ? 0 : undefined,
      children: isValueEmpty ? placeholder : value,
      onFocus: handlerAll(props.onFocus, onEdit, onUpdatePrevValue),
    }),
    [
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
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
      ref: mergeRefs(ref, inputRef),
      id,
      placeholder,
      hidden: !isEditing,
      value,
      required,
      disabled,
      readOnly,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onFocus: handlerAll(props.onFocus, onUpdatePrevValue),
    }),
    [
      disabled,
      id,
      isEditing,
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
      ref: mergeRefs(ref, inputRef),
      id,
      placeholder,
      hidden: !isEditing,
      value,
      required,
      disabled,
      readOnly,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: handlerAll(props.onFocus, onUpdatePrevValue),
    }),
    [
      disabled,
      id,
      isEditing,
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
    isEditing,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditProps,
    getSubmitProps,
    getCancelProps,
  }
}

export type UseEditableReturn = ReturnType<typeof useEditable>

export const useEditableControl = () => {
  const { isEditing, getEditProps, getCancelProps, getSubmitProps } =
    useEditableContext()

  return { isEditing, getEditProps, getCancelProps, getSubmitProps }
}

interface EditableContext {
  isEditing: boolean
  getPreviewProps: PropGetter<"span">
  getInputProps: PropGetter<"input">
  getTextareaProps: PropGetter<"textarea">
  getEditProps: PropGetter<"button">
  getCancelProps: PropGetter<"button">
  getSubmitProps: PropGetter<"button">
  styles: { [key: string]: CSSUIObject }
}

const [EditableProvider, useEditableContext] = createContext<EditableContext>({
  name: "EditableContext",
  errorMessage:
    "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`",
})

interface EditableElementProps
  extends Pick<
    UseEditableReturn,
    "isEditing" | "onSubmit" | "onCancel" | "onEdit"
  > {}

type EditableElement = (props: EditableElementProps) => ReactNode

interface EditableOptions {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  children?: ReactNode | EditableElement
}

export interface EditableProps
  extends Omit<
      HTMLUIProps,
      "onChange" | "value" | "defaultValue" | "onSubmit" | "children"
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
  ({ focusBorderColor, errorBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Editable", {
      focusBorderColor,
      errorBorderColor,
      ...props,
    })
    const {
      className,
      children,
      isInvalid,
      isReadOnly,
      isRequired,
      isDisabled,
      placeholder,
      value,
      defaultValue,
      startWithEditView,
      isPreviewFocusable,
      submitOnBlur,
      selectAllOnFocus,
      onChange,
      onCancel: onCancelProp,
      onSubmit: onSubmitProp,
      onEdit: onEditProp,
      ...rest
    } = omitThemeProps(mergedProps)
    const {
      isEditing,
      getPreviewProps,
      getInputProps,
      getTextareaProps,
      getEditProps,
      getCancelProps,
      getSubmitProps,
      onSubmit,
      onCancel,
      onEdit,
    } = useEditable({
      isInvalid,
      isReadOnly,
      isRequired,
      isDisabled,
      placeholder,
      value,
      defaultValue,
      startWithEditView,
      isPreviewFocusable,
      submitOnBlur,
      selectAllOnFocus,
      onChange,
      onCancel: onCancelProp,
      onSubmit: onSubmitProp,
      onEdit: onEditProp,
    })

    const cloneChildren = runIfFunc(children, {
      isEditing,
      onSubmit,
      onCancel,
      onEdit,
    })

    const css: CSSUIObject = { ...styles.container }

    return (
      <EditableProvider
        value={{
          isEditing,
          getPreviewProps,
          getInputProps,
          getTextareaProps,
          getEditProps,
          getCancelProps,
          getSubmitProps,
          styles,
        }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-editable", className)}
          {...rest}
          __css={css}
        >
          {cloneChildren}
        </ui.div>
      </EditableProvider>
    )
  },
)

export interface EditablePreviewProps extends HTMLUIProps<"span"> {}

export const EditablePreview = forwardRef<EditablePreviewProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles, getPreviewProps } = useEditableContext()

    const css: CSSUIObject = {
      ...styles.preview,
    }

    return (
      <ui.span
        className={cx("ui-editable__preview", className)}
        {...getPreviewProps(rest, ref)}
        __css={css}
      />
    )
  },
)

export interface EditableInputProps extends HTMLUIProps<"input"> {}

export const EditableInput = forwardRef<EditableInputProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles, getInputProps } = useEditableContext()

    const css: CSSUIObject = {
      ...styles.input,
    }

    return (
      <ui.input
        className={cx("ui-editable__input", className)}
        {...getInputProps(rest, ref)}
        __css={css}
      />
    )
  },
)

export interface EditableTextareaProps extends HTMLUIProps<"textarea"> {}

export const EditableTextarea = forwardRef<EditableTextareaProps, "textarea">(
  ({ className, ...rest }, ref) => {
    const { styles, getTextareaProps } = useEditableContext()

    const css: CSSUIObject = {
      ...styles.textarea,
    }

    return (
      <ui.textarea
        className={cx("ui-editable__textarea", className)}
        {...getTextareaProps(rest, ref)}
        __css={css}
      />
    )
  },
)
