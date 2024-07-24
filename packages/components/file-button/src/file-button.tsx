import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { ColorModeToken, CSS, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import {
  assignRef,
  cx,
  handlerAll,
  isFunction,
  isNull,
  mergeRefs,
  pickObject,
} from "@yamada-ui/utils"
import type { ChangeEvent, ForwardedRef, ReactNode } from "react"
import { useCallback, useRef } from "react"

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
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
  children?: ReactNode | ((props: Props) => ReactNode)
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
}

type InputProps = Partial<Pick<HTMLInputElement, "accept" | "multiple">>

export type FileButtonProps = Omit<ButtonProps, "onChange" | "children"> &
  ThemeProps<"FileButton"> &
  InputProps &
  FileButtonOptions &
  FormControlOptions

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton = forwardRef<FileButtonProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("FileButton", props)
  const computedProps = omitThemeProps(mergedProps)
  let {
    className,
    resetRef,
    as: As,
    children,
    id,
    name,
    accept,
    multiple,
    form,
    "aria-readonly": ariaReadonly,
    onClick: onClickProp,
    onChange: onChangeProp,
    ...rest
  } = useFormControlProps(computedProps)
  const { disabled, readOnly, required, "aria-invalid": isInvalid } = rest
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const files = !isNull(ev.currentTarget.files)
        ? Array.from(ev.currentTarget.files)
        : undefined

      onChangeProp?.(files)
    },
    [onChangeProp],
  )

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""
  }, [])

  if (!isFunction(children)) {
    const Component = As || Button

    children = (
      <Component
        className={cx("ui-file-button", className)}
        __css={styles}
        __overrideTheme={!As}
        {...rest}
        onClick={handlerAll(onClickProp, onClick)}
      >
        {children}
      </Component>
    )
  }

  assignRef(resetRef, onReset)

  return (
    <>
      <ui.input
        ref={mergeRefs(inputRef, ref)}
        type="file"
        aria-hidden
        tabIndex={-1}
        id={id}
        name={name}
        form={form}
        accept={accept}
        multiple={multiple}
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
        onChange={onChange}
        aria-readonly={ariaReadonly}
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
})
