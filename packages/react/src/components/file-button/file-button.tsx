import type { ChangeEvent, ForwardedRef, RefAttributes, RefObject } from "react"
import type { ButtonProps } from "../../components/button"
import type { ColorModeToken, CSS, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { FieldProps } from "../field"
import type { FileButtonStyle } from "./file-button.style"
import { useCallback, useMemo, useRef } from "react"
import { Button } from "../../components/button"
import { createSlotComponent, ui } from "../../core"
import {
  ariaAttr,
  assignRef,
  handlerAll,
  isFunction,
  isNull,
  mergeRefs,
  pickObject,
} from "../../utils"
import { fileButtonStyle } from "./file-button.style"

export interface FileButtonContext
  // TODO: 型の見直し
  extends Pick<FileButtonRootProps, "children"> {}

export interface FileButtonElementProps extends FieldProps {
  onClick: () => void
}

export interface FileButtonRootProps
  // SEE: なぜrefを排斥するのか
  extends Omit<ButtonProps, "children" | "onChange" | "ref">,
    FileButtonInputProps,
    FieldProps,
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

export const {
  component,
  PropsContext: FileButtonPropsContext,
  usePropsContext: useFileButtonPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  FileButtonRootProps,
  FileButtonStyle,
  FileButtonContext
>("file-button", fileButtonStyle)

export const fieldProperties = [
  "disabled",
  "required",
  "readOnly",
  "aria-disabled",
  "aria-readonly",
  "aria-required",
  "aria-invalid",
  "data-readonly",
  "onFocus",
  "onBlur",
  "_hover",
  "_active",
  "_focus",
  "_invalid",
  "_focusVisible",
] as const

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton = withProvider<"fragment", FileButtonRootProps>(
  ({
    id,
    ref,
    as,
    form,
    name,
    accept,
    children,
    multiple,
    resetRef,
    onChange,
    ...rest
  }) => {
    const {
      onBlur: _onBlur,
      onFocus: _onFocus,
      ...formControlProps
    } = pickObject(rest, fieldProperties)
    const {
      "aria-invalid": invalid,
      disabled,
      readOnly,
      required,
    } = formControlProps
    const inputRef = useRef<HTMLInputElement>(null)

    const context = useMemo(
      () => ({
        id,
        form,
        name,
        "aria-invalid": invalid,
        accept,
        disabled,
        multiple,
        readOnly,
        required,
        resetRef,
        onChange,
      }),
      [
        id,
        form,
        name,
        invalid,
        accept,
        disabled,
        multiple,
        readOnly,
        required,
        resetRef,
        onChange,
      ],
    )

    return (
      <FileButtonPropsContext value={context}>
        <FileButtonInput ref={mergeRefs(inputRef, ref)} />
        <FileButtonButton as={as} inputRef={inputRef} {...rest}>
          {children}
        </FileButtonButton>
      </FileButtonPropsContext>
    )
  },
  "root",
)()

export interface FileButtonInputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">>,
    RefAttributes<HTMLInputElement> {}

const FileButtonInput = withContext<"input", FileButtonInputProps>(
  ({ ref, ...rest }) => {
    const {
      id,
      form,
      name,
      accept,
      multiple,
      onChange: onChangeProp,
    } = useFileButtonPropsContext() ?? {}
    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        const files = !isNull(ev.currentTarget.files)
          ? Array.from(ev.currentTarget.files)
          : undefined

        onChangeProp?.(files)
      },
      [onChangeProp],
    )
    return (
      <ui.input
        id={id}
        ref={ref}
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
        {...rest}
      />
    )
  },
  "input",
)()

export interface FileButtonButtonProps
  extends Omit<ButtonProps, "children">,
    Pick<FileButtonRootProps, "children"> {
  inputRef: RefObject<HTMLInputElement | null>
}

const FileButtonButton = withContext<"button", FileButtonButtonProps>(
  ({ as = undefined, children, inputRef, ...rest }) => {
    const {
      disabled,
      invalid,
      readOnly,
      required,
      resetRef,
      onClick: onClickProp,
    } = useFileButtonPropsContext() ?? {}

    const onClick = useCallback(() => {
      if (disabled || readOnly) return

      inputRef.current?.click()
    }, [disabled, readOnly, inputRef])

    const onReset = useCallback(() => {
      if (inputRef.current) inputRef.current.value = ""
    }, [inputRef])

    assignRef(resetRef, onReset)
    return isFunction(children) ? (
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
        {...rest}
        onClick={handlerAll(onClickProp, onClick)}
      >
        {children}
      </ui.button>
    )
  },
  "button",
  {},
)()
