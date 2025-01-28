import type { ChangeEvent, ForwardedRef, ReactNode, RefAttributes } from "react"
import type { ButtonProps } from "../../components/button"
import type { FormControlOptions } from "../../components/form-control"
import type { ColorModeToken, CSS, FC, ThemeProps } from "../../core"
import { useCallback, useRef } from "react"
import { Button } from "../../components/button"
import {
  formControlProperties,
  useFormControlProps,
} from "../../components/form-control"
import { ui, useComponentStyle } from "../../core"
import {
  assignRef,
  cx,
  handlerAll,
  isFunction,
  isNull,
  mergeRefs,
  pickObject,
} from "../../utils"

interface Props extends FormControlOptions {
  onClick: () => void
}

interface FileButtonOptions {
  children?: ((props: Props) => ReactNode) | ReactNode
  /**
   * The border color when the button is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
}

interface InputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">>,
    RefAttributes<HTMLInputElement> {}

export interface FileButtonProps
  extends Omit<ButtonProps, "children" | "onChange" | "ref">,
    ThemeProps<"FileButton">,
    InputProps,
    FileButtonOptions,
    FormControlOptions {}

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton: FC<FileButtonProps> = ({ ref, ...props }) => {
  const [styles, mergedProps] = useComponentStyle("FileButton", props)
  const {
    id,
    as,
    form,
    name,
    className,
    accept,
    children,
    multiple,
    resetRef,
    onChange: onChangeProp,
    onClick: onClickProp,
    ...rest
  } = useFormControlProps(mergedProps)
  const {
    onBlur: _onBlur,
    onFocus: _onFocus,
    ...formControlProps
  } = pickObject(rest, formControlProperties)
  const {
    "aria-invalid": invalid,
    disabled,
    readOnly,
    required,
  } = formControlProps
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

  assignRef(resetRef, onReset)

  return (
    <>
      <ui.input
        id={id}
        ref={mergeRefs(inputRef, ref)}
        form={form}
        type="file"
        name={name}
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        }}
        aria-hidden
        accept={accept}
        multiple={multiple}
        tabIndex={-1}
        onChange={onChange}
        {...formControlProps}
      />

      {isFunction(children) ? (
        children({
          disabled,
          invalid,
          readOnly,
          required,
          onClick,
        })
      ) : (
        <ui.button
          as={as || Button}
          className={cx("ui-file-button", className)}
          __isProcessSkip={!as}
          __styles={styles}
          {...rest}
          onClick={handlerAll(onClickProp, onClick)}
        >
          {children}
        </ui.button>
      )}
    </>
  )
}

FileButton.__ui__ = "FileButton"
