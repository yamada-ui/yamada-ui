import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  CSSUIProps,
  useMultiComponentStyle,
} from '@yamada-ui/core'
import {
  FormControlOptions,
  useFormControlProps,
  formControlProperties,
} from '@yamada-ui/form-control'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import {
  assignRef,
  cx,
  dataAttr,
  handlerAll,
  isNull,
  mergeRefs,
  omitObject,
  pickObject,
} from '@yamada-ui/utils'
import { ChangeEvent, FC, ForwardedRef, ReactNode, useCallback, useMemo, useRef } from 'react'

type Format = (value: File, index: number) => string

type FileInputOptions = {
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  value?: File[] | null
  defaultValue?: File[] | null
  onChange?: (files: File[] | null) => void
  tag?: FC<{ value: File; index: number }>
  format?: Format
  separator?: string
  children?: (files: File[] | null) => ReactNode
  reset?: ForwardedRef<() => void>
}

type InputProps = Partial<Pick<HTMLInputElement, 'accept' | 'multiple'>>

export type FileInputProps = Omit<HTMLUIProps<'div'>, 'onChange' | 'children'> &
  ThemeProps<'Input'> &
  InputProps &
  FileInputOptions &
  FormControlOptions

const defaultFormat: Format = ({ name }) => name

export const FileInput = forwardRef<FileInputProps, 'input'>(({ children, ...props }, ref) => {
  const styles = useMultiComponentStyle('Input', props)
  const {
    className,
    id,
    name,
    accept,
    multiple,
    form,
    placeholder,
    value,
    defaultValue,
    tag,
    format = defaultFormat,
    isTruncated = true,
    separator = ', ',
    reset,
    ...rest
  } = useFormControlProps(omitThemeProps(props))

  const { disabled, readOnly } = rest

  const inputRef = useRef<HTMLInputElement>(null)

  const [values, setValues] = useControllableState({
    value,
    defaultValue,
    onChange: rest.onChange,
  })

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const files = !isNull(ev.currentTarget.files) ? Array.from(ev.currentTarget.files) : null

      setValues(files)
    },
    [setValues],
  )

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ''

    setValues(null)
  }, [setValues])

  assignRef(reset, onReset)

  const cloneChildren = useMemo(() => {
    if (!values && placeholder) return <ui.span isTruncated={isTruncated}>{placeholder}</ui.span>

    if (children) return children(values)

    if (!values) return null

    if (tag) {
      return (
        <ui.span isTruncated={isTruncated}>
          {values.map((value, index) => tag({ value, index }))}
        </ui.span>
      )
    } else {
      return <ui.span isTruncated={isTruncated}>{values.map(format).join(separator)}</ui.span>
    }
  }, [children, format, isTruncated, placeholder, separator, tag, values])

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    cursor: !readOnly ? 'pointer' : 'auto',
    ...styles.field,
  }

  return (
    <>
      <ui.input
        ref={mergeRefs(inputRef, ref)}
        type='file'
        tabIndex={-1}
        id={id}
        name={name}
        form={form}
        accept={accept}
        multiple={multiple}
        style={{
          border: '0px',
          clip: 'rect(0px, 0px, 0px, 0px)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
        }}
        onChange={onChange}
        {...pickObject(rest, formControlProperties)}
      />

      <ui.div
        ref={ref}
        className={cx('ui-file-input', className)}
        {...omitObject(rest, ['onChange'])}
        __css={css}
        tabIndex={0}
        data-placeholder={dataAttr(!values?.length)}
        onClick={handlerAll(rest.onClick, onClick)}
      >
        {cloneChildren}
      </ui.div>
    </>
  )
})
