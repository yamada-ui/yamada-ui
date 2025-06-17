import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { UseInputBorderProps } from "../input"
import type { EditableStyle } from "./editable.style"
import type { UseEditableProps, UseEditableReturn } from "./use-editable"
import { createSlotComponent, styled } from "../../core"
import { runIfFn } from "../../utils"
import { useInputBorder } from "../input"
import { editableStyle } from "./editable.style"
import {
  EditableContext,
  useEditable,
  useEditableContext,
} from "./use-editable"

interface EditableElementProps
  extends Pick<
    UseEditableReturn,
    "editing" | "onCancel" | "onEdit" | "onSubmit"
  > {}

export interface EditableRootProps
  extends Omit<
      HTMLStyledProps,
      "children" | "defaultValue" | "onChange" | "onSubmit" | "value"
    >,
    ThemeProps<EditableStyle>,
    UseInputBorderProps,
    UseEditableProps {
  /**
   * The editable children to use.
   */
  children?: ReactNodeOrFunction<EditableElementProps>
}

export const {
  PropsContext: EditablePropsContext,
  usePropsContext: useEditablePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<EditableRootProps, EditableStyle>(
  "editable",
  editableStyle,
)

/**
 * `Editable` is a component used to obtain inline editable text input.
 *
 * @see https://yamada-ui.com/components/editable
 */
export const EditableRoot = withProvider(
  ({ children, errorBorderColor, focusBorderColor, ...props }) => {
    const {
      editing,
      value: _value,
      getRootProps,
      onCancel,
      onEdit,
      onSubmit,
      ...rest
    } = useEditable(props)
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const cloneChildren = runIfFn(children, {
      editing,
      onCancel,
      onEdit,
      onSubmit,
    })

    return (
      <EditableContext value={{ editing, ...rest }}>
        <styled.div {...getRootProps()} {...varProps}>
          {cloneChildren}
        </styled.div>
      </EditableContext>
    )
  },
)()

export interface EditablePreviewProps extends HTMLStyledProps<"span"> {}

export const EditablePreview = withContext<"span", EditablePreviewProps>(
  "span",
  "preview",
)(undefined, (props) => {
  const { getPreviewProps } = useEditableContext()

  return { ...getPreviewProps(props) }
})

export interface EditableInputProps extends HTMLStyledProps<"input"> {}

export const EditableInput = withContext<"input", EditableInputProps>(
  "input",
  "input",
)(undefined, (props) => {
  const { getInputProps } = useEditableContext()

  return { ...getInputProps(props) }
})

export interface EditableTextareaProps extends HTMLStyledProps<"textarea"> {}

export const EditableTextarea = withContext<"textarea", EditableTextareaProps>(
  "textarea",
  "textarea",
)(undefined, (props) => {
  const { getTextareaProps } = useEditableContext()

  return { ...getTextareaProps(props) }
})

export interface EditableControlProps extends HTMLStyledProps {}

export const EditableControl = withContext<"div", EditableControlProps>(
  "div",
  "control",
)(undefined, (props) => {
  const { getControlProps } = useEditableContext()

  return { ...getControlProps(props) }
})

export interface EditableEditTriggerProps extends HTMLStyledProps<"button"> {}

export const EditableEditTrigger = withContext<
  "button",
  EditableEditTriggerProps
>("button", { name: "editTrigger", slot: ["trigger", "edit"] })(
  undefined,
  (props) => {
    const { getEditProps } = useEditableContext()

    return { asChild: true, ...getEditProps(props) }
  },
)

export interface EditableCancelTriggerProps extends HTMLStyledProps<"button"> {}

export const EditableCancelTrigger = withContext<
  "button",
  EditableCancelTriggerProps
>("button", { name: "cancelTrigger", slot: ["trigger", "cancel"] })(
  undefined,
  (props) => {
    const { getCancelProps } = useEditableContext()

    return { asChild: true, ...getCancelProps(props) }
  },
)

export interface EditableSubmitTriggerProps extends HTMLStyledProps<"button"> {}

export const EditableSubmitTrigger = withContext<
  "button",
  EditableSubmitTriggerProps
>("button", { name: "submitTrigger", slot: ["trigger", "submit"] })(
  undefined,
  (props) => {
    const { getSubmitProps } = useEditableContext()

    return { asChild: true, ...getSubmitProps(props) }
  },
)
