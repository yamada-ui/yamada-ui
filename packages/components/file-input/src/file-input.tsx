import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  assignRef,
  cx,
  dataAttr,
  handlerAll,
  isNull,
  mergeRefs,
  omitObject,
  pickObject,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  CSSProperties,
  FC,
  ForwardedRef,
  ReactElement,
  ReactNode,
} from "react"
import { cloneElement, useCallback, useMemo, useRef } from "react"

type FileInputOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The value of the file input.
   */
  value?: File[]
  /**
   * The initial value of the file input.
   */
  defaultValue?: File[]
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
  /**
   * The component that displays uploaded files.
   */
  component?: FC<{ value: File; index: number }>
  /**
   * A callback that formats the name of the uploaded file.
   */
  format?: (value: File, index: number) => string
  /**
   * The string to separate uploaded files.
   *
   * @default ','
   */
  separator?: string
  children?: (files: File[] | undefined) => ReactNode
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
}

type InputProps = Partial<Pick<HTMLInputElement, "accept" | "multiple">>

export type FileInputProps = Omit<HTMLUIProps<"div">, "onChange" | "children"> &
  ThemeProps<"Input"> &
  InputProps &
  FileInputOptions &
  FormControlOptions

const defaultFormat: (value: File, index: number) => string = ({ name }) => name

export const FileInput = forwardRef<FileInputProps, "input">(
  ({ children, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("FileInput", props)
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
      component,
      format = defaultFormat,
      noOfLines = 1,
      separator = ",",
      resetRef,
      ...rest
    } = useFormControlProps(omitThemeProps(mergedProps))

    const { disabled, readOnly } = rest

    const inputRef = useRef<HTMLInputElement>(null)

    const [values, setValues] = useControllableState<File[] | undefined>({
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
        return <ui.span noOfLines={noOfLines}>{placeholder}</ui.span>

      if (children) return children(values)

      if (component) {
        return (
          <ui.span noOfLines={noOfLines}>
            {values.map((value, index) => {
              const el = component({ value, index })

              const style: CSSProperties = {
                marginBlockStart: "0.125rem",
                marginBlockEnd: "0.125rem",
                marginInlineEnd: "0.25rem",
              }

              return el ? cloneElement(el as ReactElement, { style }) : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span noOfLines={noOfLines}>
            {values.map((value, index) => {
              const isLast = values.length === index + 1

              return (
                <ui.span key={index} display="inline-block" me="0.25rem">
                  {format(value, index)}
                  {!isLast ? separator : null}
                </ui.span>
              )
            })}
          </ui.span>
        )
      }
    }, [children, format, noOfLines, placeholder, separator, component, values])

    const css: CSSUIObject = {
      display: "flex",
      alignItems: "center",
      cursor: !readOnly ? "pointer" : "auto",
      ...styles.field,
    }

    return (
      <>
        <ui.input
          ref={mergeRefs(inputRef, ref)}
          type="file"
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
          {...pickObject(rest, formControlProperties)}
        />

        <ui.div
          ref={ref}
          className={cx("ui-file-input", className)}
          py={values?.length && component ? "0.125rem" : undefined}
          {...omitObject(rest, ["onChange"])}
          __css={css}
          tabIndex={0}
          data-placeholder={dataAttr(!values?.length)}
          onClick={handlerAll(rest.onClick, onClick)}
        >
          {cloneChildren}
        </ui.div>
      </>
    )
  },
)
