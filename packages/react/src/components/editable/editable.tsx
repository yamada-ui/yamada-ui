import type { PropsWithChildren } from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { UseInputBorderProps } from "../input"
import type { EditableStyle } from "./editable.style"
import type { UseEditableProps, UseEditableReturn } from "./use-editable"
import { createSlotComponent, ui } from "../../core"
import { runIfFunc } from "../../utils"
import { useInputBorder } from "../input"
import { Slot } from "../slot"
import { editableStyle } from "./editable.style"
import { useEditable } from "./use-editable"

interface EditableContext
  extends Omit<
    UseEditableReturn,
    "getRootProps" | "onCancel" | "onEdit" | "onSubmit" | "value"
  > {}

interface EditableElementProps
  extends Pick<
    UseEditableReturn,
    "editing" | "onCancel" | "onEdit" | "onSubmit"
  > {}

export interface EditableRootProps
  extends Omit<
      HTMLUIProps,
      "children" | "defaultValue" | "onChange" | "onSubmit" | "value"
    >,
    ThemeProps<EditableStyle>,
    UseInputBorderProps,
    UseEditableProps {
  children?: ReactNodeOrFunction<EditableElementProps>
}

export const {
  ComponentContext: EditableContext,
  PropsContext: EditablePropsContext,
  useComponentContext: useEditableContext,
  usePropsContext: useEditablePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<EditableRootProps, EditableStyle, EditableContext>(
  "editable",
  editableStyle,
)

/**
 * `Editable` is a component used to obtain inline editable text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/editable
 */
export const EditableRoot = withProvider(
  ({
    children,
    errorBorderColor,
    focusBorderColor,
    vars: varsProp,
    ...props
  }) => {
    const {
      editing,
      value: _value,
      getRootProps,
      onCancel,
      onEdit,
      onSubmit,
      ...rest
    } = useEditable(props)
    const vars = useInputBorder(varsProp, {
      errorBorderColor,
      focusBorderColor,
    })
    const cloneChildren = runIfFunc(children, {
      editing,
      onCancel,
      onEdit,
      onSubmit,
    })

    return (
      <EditableContext value={{ editing, ...rest }}>
        <ui.div {...getRootProps()} vars={vars}>
          {cloneChildren}
        </ui.div>
      </EditableContext>
    )
  },
)()

export interface EditablePreviewProps extends HTMLUIProps<"span"> {}

export const EditablePreview = withContext<"span", EditablePreviewProps>(
  "span",
  "preview",
)(undefined, (props) => {
  const { getPreviewProps } = useEditableContext()

  return { ...getPreviewProps(props) }
})

export interface EditableInputProps extends HTMLUIProps<"input"> {}

export const EditableInput = withContext<"input", EditableInputProps>(
  "input",
  "input",
)(undefined, (props) => {
  const { getInputProps } = useEditableContext()

  return { ...getInputProps(props) }
})

export interface EditableTextareaProps extends HTMLUIProps<"textarea"> {}

export const EditableTextarea = withContext<"textarea", EditableTextareaProps>(
  "textarea",
  "textarea",
)(undefined, (props) => {
  const { getTextareaProps } = useEditableContext()

  return { ...getTextareaProps(props) }
})

export interface EditableControlProps extends HTMLUIProps {}

export const EditableControl = withContext<"div", EditableControlProps>(
  "div",
  "control",
)(undefined, (props) => {
  const { getControlProps } = useEditableContext()

  return { ...getControlProps(props) }
})

export interface EditableEditTriggerProps extends PropsWithChildren {}

export const EditableEditTrigger: FC<EditableEditTriggerProps> = (props) => {
  const { getEditProps } = useEditableContext()

  return <Slot {...getEditProps(props)} />
}

export interface EditableCancelTriggerProps extends PropsWithChildren {}

export const EditableCancelTrigger: FC<EditableCancelTriggerProps> = (
  props,
) => {
  const { getCancelProps } = useEditableContext()

  return <Slot {...getCancelProps(props)} />
}

export interface EditableSubmitTriggerProps extends PropsWithChildren {}

export const EditableSubmitTrigger: FC<EditableSubmitTriggerProps> = (
  props,
) => {
  const { getSubmitProps } = useEditableContext()

  return <Slot {...getSubmitProps(props)} />
}
