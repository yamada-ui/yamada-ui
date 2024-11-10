import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { ReactNode } from "react"
import type { UseEditableProps, UseEditableReturn } from "./use-editable"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { createContext, cx, runIfFunc } from "@yamada-ui/utils"
import { useEditable } from "./use-editable"

export const useEditableControl = () => {
  const { isEditing, getCancelProps, getEditProps, getSubmitProps } =
    useEditableContext()

  return { isEditing, getCancelProps, getEditProps, getSubmitProps }
}

interface EditableContext {
  isEditing: boolean
  styles: { [key: string]: CSSUIObject | undefined }
  getCancelProps: PropGetter<"button">
  getEditProps: PropGetter<"button">
  getInputProps: PropGetter<"input">
  getPreviewProps: PropGetter<"span">
  getSubmitProps: PropGetter<"button">
  getTextareaProps: PropGetter<"textarea">
}

const [EditableProvider, useEditableContext] = createContext<EditableContext>({
  name: "EditableContext",
  errorMessage:
    "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`",
})

interface EditableElementProps
  extends Pick<
    UseEditableReturn,
    "isEditing" | "onCancel" | "onEdit" | "onSubmit"
  > {}

type EditableElement = (props: EditableElementProps) => ReactNode

interface EditableOptions {
  children?: EditableElement | ReactNode
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export interface EditableProps
  extends Omit<
      HTMLUIProps,
      "children" | "defaultValue" | "onChange" | "onSubmit" | "value"
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
  ({ errorBorderColor, focusBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Editable", {
      errorBorderColor,
      focusBorderColor,
      ...props,
    })
    const {
      className,
      children,
      defaultValue,
      isDisabled,
      isInvalid,
      isPreviewFocusable,
      isReadOnly,
      isRequired,
      placeholder,
      selectAllOnFocus,
      startWithEditView,
      submitOnBlur,
      value,
      onCancel: onCancelProp,
      onChange,
      onEdit: onEditProp,
      onSubmit: onSubmitProp,
      ...rest
    } = omitThemeProps(mergedProps)
    const {
      isEditing,
      getCancelProps,
      getEditProps,
      getInputProps,
      getPreviewProps,
      getSubmitProps,
      getTextareaProps,
      onCancel,
      onEdit,
      onSubmit,
    } = useEditable({
      defaultValue,
      isDisabled,
      isInvalid,
      isPreviewFocusable,
      isReadOnly,
      isRequired,
      placeholder,
      selectAllOnFocus,
      startWithEditView,
      submitOnBlur,
      value,
      onCancel: onCancelProp,
      onChange,
      onEdit: onEditProp,
      onSubmit: onSubmitProp,
    })

    const cloneChildren = runIfFunc(children, {
      isEditing,
      onCancel,
      onEdit,
      onSubmit,
    })

    const css: CSSUIObject = { ...styles.container }

    return (
      <EditableProvider
        value={{
          isEditing,
          styles,
          getCancelProps,
          getEditProps,
          getInputProps,
          getPreviewProps,
          getSubmitProps,
          getTextareaProps,
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

Editable.displayName = "Editable"
Editable.__ui__ = "Editable"

export interface EditablePreviewProps extends HTMLUIProps<"span"> {}

export const EditablePreview = forwardRef<EditablePreviewProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles, getPreviewProps } = useEditableContext()

    const css: CSSUIObject = {
      bg: "transparent",
      cursor: "text",
      display: "inline-block",
      fontSize: "inherit",
      fontWeight: "inherit",
      textAlign: "inherit",
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

EditablePreview.displayName = "EditablePreview"
EditablePreview.__ui__ = "EditablePreview"

export interface EditableInputProps extends HTMLUIProps<"input"> {}

export const EditableInput = forwardRef<EditableInputProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles, getInputProps } = useEditableContext()

    const css: CSSUIObject = {
      bg: "transparent",
      fontSize: "inherit",
      fontWeight: "inherit",
      outline: 0,
      textAlign: "inherit",
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

EditableInput.displayName = "EditableInput"
EditableInput.__ui__ = "EditableInput"

export interface EditableTextareaProps extends HTMLUIProps<"textarea"> {}

export const EditableTextarea = forwardRef<EditableTextareaProps, "textarea">(
  ({ className, ...rest }, ref) => {
    const { styles, getTextareaProps } = useEditableContext()

    const css: CSSUIObject = {
      bg: "transparent",
      fontSize: "inherit",
      fontWeight: "inherit",
      outline: 0,
      textAlign: "inherit",
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

EditableTextarea.displayName = "EditableTextarea"
EditableTextarea.__ui__ = "EditableTextarea"
