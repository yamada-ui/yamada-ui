import type { ChangeEvent, ForwardedRef, RefAttributes } from "react"
import type { ButtonProps } from "../../components/button"
import type { ColorModeToken, CSS, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { FieldProps } from "../field"
import type { FileButtonStyle } from "./file-button.style"
import { useCallback, useRef } from "react"
import { Button } from "../../components/button"
import { createSlotComponent, mergeVars, ui } from "../../core"
import {
  ariaAttr,
  assignRef,
  handlerAll,
  isFunction,
  isNull,
  mergeRefs,
  pickObject,
} from "../../utils"
import { fieldProperties, useFieldProps } from "../field"
import { fileButtonStyle } from "./file-button.style"

export interface FileButtonContext
  // TODO: 型の見直し
  extends Pick<FileButtonProps, "children"> {}

export interface FileButtonElementProps extends FieldProps {
  onClick: () => void
}

export interface FileButtonProps
  // SEE: なぜrefを排斥するのか
  extends Omit<ButtonProps, "children" | "onChange" | "ref">,
    FieldProps,
    InputProps,
    ThemeProps<FileButtonStyle> {
  children?: ReactNodeOrFunction<FileButtonElementProps>
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

export interface InputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">>,
    RefAttributes<HTMLInputElement> {}

export const {
  component,
  PropsContext: FileButtonPropsContext,
  usePropsContext: useFileButtonPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FileButtonProps, FileButtonStyle, FileButtonContext>(
  "file-button",
  fileButtonStyle,
)

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton = withProvider<"div", FileButtonProps>(
  ({
    id,
    ref,
    as,
    form,
    name,
    css,
    accept,
    children,
    multiple,
    resetRef,
    onChange: onChangeProp,
    onClick: onClickProp,
    ...rest
  }) => {
    const {
      onBlur: _onBlur,
      onFocus: _onFocus,
      ...fieldProps
    } = pickObject(rest, fieldProperties)
    const { "aria-invalid": invalid, disabled, readOnly, required } = fieldProps
    const inputRef = useRef<HTMLInputElement>(null)

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        const files = !isNull(ev.currentTarget.files)
          ? Array.from(ev.currentTarget.files)
          : undefined

        onChangeProp?.(files)
      },
      [onChangeProp],
    )

    const onClick = useCallback(() => {
      if (disabled || readOnly) return

      inputRef.current?.click()
    }, [disabled, readOnly, inputRef])

    const onReset = useCallback(() => {
      if (inputRef.current) inputRef.current.value = ""
    }, [inputRef])

    assignRef(resetRef, onReset)
    return (
      <ui.div>
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
          {...fieldProps}
        />
        {isFunction(children) ? (
          children({
            disabled,
            invalid: ariaAttr(invalid),
            readOnly,
            required,
            onClick,
          })
        ) : (
          <ui.button
            as={as || Button}
            css={as ? undefined : css}
            disabled={disabled}
            onClick={handlerAll(onClickProp, onClick)}
            {...rest}
          >
            {children}
          </ui.button>
        )}
      </ui.div>
    )
  },
  "root",
)(undefined, (props) => {
  const {
    props: { errorBorderColor, vars: varsProp, ...rest },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)

  const vars = mergeVars(varsProp, {
    name: "errorBorderColor",
    token: "colors",
    value: errorBorderColor,
  })

  return {
    vars,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  }
})
