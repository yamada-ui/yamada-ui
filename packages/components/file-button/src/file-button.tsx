import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, forwardRef, CSSUIProps } from '@yamada-ui/core'
import {
  FormControlOptions,
  formControlProperties,
  useFormControlProps,
} from '@yamada-ui/form-control'
import {
  assignRef,
  cx,
  handlerAll,
  isFunction,
  isNull,
  mergeRefs,
  omitObject,
  pickObject,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  ForwardedRef,
  ReactNode,
  useCallback,
  useRef,
} from 'react'

type Props = {
  onClick: () => void
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
} & FormControlOptions

type FileButtonOptions = {
  /**
   * The border color when the button is invalid.
   */
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | null) => void
  children?: ReactNode | ((props: Props) => ReactNode)
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
}

type InputProps = Partial<Pick<HTMLInputElement, 'accept' | 'multiple'>>

export type FileButtonProps = Omit<ButtonProps, 'onChange' | 'children'> &
  InputProps &
  FileButtonOptions &
  FormControlOptions

export const FileButton = forwardRef<FileButtonProps, 'input'>(
  ({ className, resetRef, as: As, children, ...props }, ref) => {
    const { id, name, accept, multiple, form, ...rest } =
      useFormControlProps(props)

    const { disabled, readOnly, required, 'aria-invalid': isInvalid } = rest

    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = useCallback(() => {
      if (disabled || readOnly) return

      inputRef.current?.click()
    }, [disabled, readOnly])

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        const files = !isNull(ev.currentTarget.files)
          ? Array.from(ev.currentTarget.files)
          : null

        rest.onChange?.(files)
      },
      [rest],
    )

    const onReset = useCallback(() => {
      if (inputRef.current) inputRef.current.value = ''
    }, [])

    if (!isFunction(children)) {
      const Component = As || Button

      children = (
        <Component
          className={cx('ui-file-button', className)}
          {...omitObject(rest, ['onChange'])}
          onClick={handlerAll(rest.onClick, onClick)}
        >
          {children}
        </Component>
      ) as ReactNode
    }

    assignRef(resetRef, onReset)

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

        {isFunction(children)
          ? children({
              onClick,
              disabled,
              readOnly,
              required,
              isDisabled: disabled,
              isReadOnly: readOnly,
              isRequired: required,
              isInvalid,
            })
          : children}
      </>
    )
  },
)
