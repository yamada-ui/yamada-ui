import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  CSSUIProps,
} from '@yamada-ui/core'
import {
  FormControlOptions,
  formControlProperties,
  useFormControlProps,
} from '@yamada-ui/form-control'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { useFocusOnPointerDown } from '@yamada-ui/use-focus'
import {
  createContext,
  cx,
  omitObject,
  PropGetter,
  runIfFunc,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
  isContains,
  handlerAll,
  mergeRefs,
  pickObject,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react'

export type UseEditableProps = FormControlOptions & {
  placeholder?: string
  value?: string
  defaultValue?: string
  startWithEditView?: boolean
  isPreviewFocusable?: boolean
  submitOnBlur?: boolean
  selectAllOnFocus?: boolean
  onChange?: (value: string) => void
  onCancel?: (preValue: string) => void
  onSubmit?: (value: string) => void
  onEdit?: () => void
}

export const useEditable = (props: UseEditableProps) => {
  const {
    id,
    placeholder,
    defaultValue,
    required,
    disabled,
    readOnly,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    ...rest
  } = useFormControlProps(props)
  rest.onEdit = useCallbackRef(rest.onEdit)

  const [isEditing, setIsEditing] = useState<boolean>(!!startWithEditView && !disabled)

  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || '',
    value: rest.value,
    onChange: rest.onChange,
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

    rest.onEdit?.()
  }, [isEditing, rest.onEdit, selectAllOnFocus])

  useEffect(() => {
    if (isEditing) return

    const el = inputRef.current
    const activeEl = el?.ownerDocument.activeElement

    if (activeEl === el) el?.blur()
  }, [isEditing])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(ev.currentTarget.value),
    [setValue],
  )

  const onUpdatePrevValue = useCallback(() => setPrevValue(value), [value])

  const onEdit = useCallback(() => {
    if (isInteractive) setIsEditing(true)
  }, [isInteractive])

  const onCancel = useCallback(() => {
    setIsEditing(false)
    setValue(prevValue)
    rest.onCancel?.(prevValue)
  }, [prevValue, rest, setValue])

  const onSubmit = useCallback(() => {
    setIsEditing(false)
    setPrevValue(value)
    rest.onSubmit?.(value)
  }, [rest, value])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<Element>) => {
      if (ev.key !== 'Escape' && ev.key !== 'Enter') return

      ev.preventDefault()

      if (ev.key === 'Escape') {
        onCancel()
      } else {
        const { shiftKey, metaKey } = ev

        if (!shiftKey && !metaKey) onSubmit()
      }
    },
    [onCancel, onSubmit],
  )

  const onKeyDownWithoutSubmit = useCallback(
    (ev: KeyboardEvent<Element>) => {
      if (ev.key !== 'Escape') return

      ev.preventDefault()
      onCancel()
    },
    [onCancel],
  )

  const onBlur = useCallback(
    (ev: FocusEvent) => {
      if (!isEditing) return

      const ownerDocument = ev.currentTarget.ownerDocument
      const relatedTarget = (ev.relatedTarget ?? ownerDocument.activeElement) as HTMLElement
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

  const getPreviewProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, formControlProperties),
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
      rest,
      value,
    ],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, formControlProperties),
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
      rest,
      value,
    ],
  )

  const getTextareaProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, formControlProperties),
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
      rest,
      value,
    ],
  )

  const getEditProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['value', 'onChange', 'onCancel', 'onSubmit', 'onEdit']),
      ref: mergeRefs(ref, editRef),
      type: 'button',
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onEdit),
    }),
    [disabled, onEdit, readOnly, rest],
  )

  const getSubmitProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['value', 'onChange', 'onCancel', 'onSubmit', 'onEdit']),
      ref: mergeRefs(submitRef, ref),
      type: 'button',
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onSubmit),
    }),
    [disabled, onSubmit, readOnly, rest],
  )

  const getCancelProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['value', 'onChange', 'onCancel', 'onSubmit', 'onEdit']),
      ref: mergeRefs(cancelRef, ref),
      type: 'button',
      disabled,
      readOnly,
      onClick: handlerAll(props.onClick, onCancel),
    }),
    [disabled, onCancel, readOnly, rest],
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
  const { isEditing, getEditProps, getCancelProps, getSubmitProps } = useEditableContext()

  return { isEditing, getEditProps, getCancelProps, getSubmitProps }
}

type EditableContext = {
  isEditing: boolean
  getPreviewProps: PropGetter
  getInputProps: PropGetter
  getTextareaProps: PropGetter
  getEditProps: PropGetter
  getCancelProps: PropGetter
  getSubmitProps: PropGetter
  styles: Record<string, CSSUIObject>
}

const [EditableProvider, useEditableContext] = createContext<EditableContext>({
  name: 'EditableContext',
  errorMessage:
    'useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`',
})

type EditableOptions = {
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  children?:
    | ReactNode
    | ((
        props: Pick<UseEditableReturn, 'isEditing' | 'onSubmit' | 'onCancel' | 'onEdit'>,
      ) => ReactNode)
}

export type EditableProps = Omit<
  HTMLUIProps<'div'>,
  'onChange' | 'value' | 'defaultValue' | 'onSubmit' | 'children'
> &
  ThemeProps<'Editable'> &
  UseEditableProps &
  EditableOptions

export const Editable = forwardRef<EditableProps, 'div'>(
  ({ focusBorderColor, errorBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle('Editable', {
      focusBorderColor,
      errorBorderColor,
      ...props,
    })
    const { className, children, ...rest } = omitThemeProps(mergedProps)
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
    } = useEditable(rest)

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
          className={cx('ui-editable', className)}
          {...omitObject(rest, [
            'placeholder',
            'value',
            'defaultValue',
            'isInvalid',
            'isReadOnly',
            'isRequired',
            'isDisabled',
            'startWithEditView',
            'isPreviewFocusable',
            'submitOnBlur',
            'selectAllOnFocus',
            'onChange',
            'onCancel',
            'onSubmit',
            'onEdit',
          ])}
          __css={css}
        >
          {cloneChildren}
        </ui.div>
      </EditableProvider>
    )
  },
)

export type EditablePreviewProps = HTMLUIProps<'span'>

export const EditablePreview = forwardRef<EditablePreviewProps, 'span'>(
  ({ className, ...rest }, ref) => {
    const { styles, getPreviewProps } = useEditableContext()

    const css: CSSUIObject = {
      cursor: 'text',
      display: 'inline-block',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'inherit',
      bg: 'transparent',
      ...styles.preview,
    }

    return (
      <ui.span
        className={cx('ui-editable-preview', className)}
        {...getPreviewProps(rest, ref)}
        __css={css}
      />
    )
  },
)

export type EditableInputProps = HTMLUIProps<'input'>

export const EditableInput = forwardRef<EditableInputProps, 'input'>(
  ({ className, ...rest }, ref) => {
    const { styles, getInputProps } = useEditableContext()

    const css: CSSUIObject = {
      outline: 0,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'inherit',
      bg: 'transparent',
      ...styles.input,
    }

    return (
      <ui.input
        className={cx('ui-editable-input', className)}
        {...getInputProps(rest, ref)}
        __css={css}
      />
    )
  },
)

export type EditableTextareaProps = HTMLUIProps<'textarea'>

export const EditableTextarea = forwardRef<EditableTextareaProps, 'textarea'>(
  ({ className, ...rest }, ref) => {
    const { styles, getTextareaProps } = useEditableContext()

    const css: CSSUIObject = {
      outline: 0,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'inherit',
      bg: 'transparent',
      ...styles.textarea,
    }

    return (
      <ui.textarea
        className={cx('ui-editable-textarea', className)}
        {...getTextareaProps(rest, ref)}
        __css={css}
      />
    )
  },
)
