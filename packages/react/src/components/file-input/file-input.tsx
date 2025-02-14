import type {
  ChangeEvent,
  CSSProperties,
  ForwardedRef,
  ReactElement,
  ReactNode,
} from "react"
import type {
  ColorModeToken,
  CSS,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import type { FormControlOptions } from "../form-control"
import { cloneElement, useCallback, useMemo, useRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  assignRef,
  cx,
  dataAttr,
  handlerAll,
  isNull,
  mergeRefs,
  splitObject,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

const defaultFormat: (value: File, index: number) => string = ({ name }) => name

interface FileInputOptions {
  children?: (files: File[] | undefined) => ReactNode
  /**
   * The component that displays uploaded files.
   */
  component?: FC<{ index: number; value: File }>
  /**
   * The initial value of the file input.
   */
  defaultValue?: File[]
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * A callback that formats the name of the uploaded file.
   */
  format?: (value: File, index: number) => string
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
  /**
   * The string to separate uploaded files.
   *
   * @default ','
   */
  separator?: string
  /**
   * The value of the file input.
   */
  value?: File[]
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
}

interface InputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">> {}

export interface FileInputProps
  extends Omit<
      HTMLUIProps<"input">,
      "children" | "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<"Input">,
    InputProps,
    FileInputOptions,
    FormControlOptions {}

/**
 * `FileInput` is a component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-input
 */
export const FileInput: FC<FileInputProps> = ({ ref, children, ...props }) => {
  const [styles, mergedProps] = useComponentMultiStyle("FileInput", props)
  const {
    id,
    form,
    name,
    className,
    accept,
    component,
    defaultValue,
    format = defaultFormat,
    lineClamp = 1,
    multiple,
    placeholder,
    resetRef,
    separator = ",",
    value,
    onChange: onChangeProp,
    onClick: onClickProp,
    ...computedProps
  } = useFormControlProps(omitThemeProps(mergedProps))
  const [
    { "aria-readonly": ariaReadonly, disabled, readOnly, ...formControlProps },
    rest,
  ] = splitObject(computedProps, formControlProperties)

  const inputRef = useRef<HTMLInputElement>(null)

  const [values, setValues] = useControllableState<File[] | undefined>({
    defaultValue,
    value,
    onChange: onChangeProp,
  })

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let files = !isNull(ev.currentTarget.files)
        ? Array.from(ev.currentTarget.files)
        : undefined

      if (!files?.length) files = undefined

      setValues(files)
    },
    [setValues],
  )

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""

    setValues(undefined)
  }, [setValues])

  assignRef(resetRef, onReset)

  const cloneChildren = useMemo(() => {
    if (!values?.length)
      return <ui.span lineClamp={lineClamp}>{placeholder}</ui.span>

    if (children) return children(values)

    if (component) {
      return (
        <ui.span lineClamp={lineClamp}>
          {values.map((value, index) => {
            const el = component({ index, value })

            const style: CSSProperties = {
              marginBlockEnd: "0.125rem",
              marginBlockStart: "0.125rem",
              marginInlineEnd: "0.25rem",
            }

            return el
              ? cloneElement<any>(el as ReactElement, { key: index, style })
              : null
          })}
        </ui.span>
      )
    } else {
      return (
        <ui.span lineClamp={lineClamp}>
          {values.map((value, index) => {
            const last = values.length === index + 1

            return (
              <ui.span key={index} display="inline-block" me="0.25rem">
                {format(value, index)}
                {!last ? separator : null}
              </ui.span>
            )
          })}
        </ui.span>
      )
    }
  }, [children, format, lineClamp, placeholder, separator, component, values])

  const clickableProps = useClickable<HTMLDivElement>({
    ref,
    ...formControlProps,
    ...rest,
    disabled: disabled || readOnly,
    onClick: handlerAll(onClickProp, onClick),
  })

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
        aria-readonly={ariaReadonly}
        accept={accept}
        disabled={disabled}
        multiple={multiple}
        readOnly={readOnly}
        tabIndex={-1}
        onChange={onChange}
        {...formControlProps}
      />

      <ui.div
        className={cx("ui-file-input", className)}
        data-placeholder={dataAttr(!values?.length)}
        py={values?.length && component ? "0.125rem" : undefined}
        __css={{
          cursor: !readOnly ? "pointer" : "auto",
          ...styles.field,
        }}
        {...clickableProps}
      >
        {cloneChildren}
      </ui.div>
    </>
  )
}

FileInput.__ui__ = "FileInput"
