import type { ReactNode } from "react"
import type { CSSUIObject, FC, ThemeProps } from "../../core"
import type { ButtonProps } from "../button"
import type { ModalProps } from "./modal"
import { omitThemeProps, useComponentMultiStyle } from "../../core"
import {
  cx,
  findChild,
  getValidChildren,
  isEmpty,
  isUndefined,
  isValidElement,
  omitChildren,
} from "../../utils"
import { Button } from "../button"
import { DialogBody } from "./dialog-body"
import { DialogCloseButton } from "./dialog-close-button"
import { DialogFooter } from "./dialog-footer"
import { DialogHeader } from "./dialog-header"
import { DialogOverlay } from "./dialog-overlay"
import { Modal } from "./modal"
import { DialogProvider } from "./modal-context"

interface DialogOptions {
  /**
   * The dialog cancel to use.
   */
  cancel?: ButtonProps | ReactNode
  /**
   * The dialog footer to use.
   */
  footer?: ReactNode
  /**
   * The dialog header to use.
   */
  header?: ReactNode
  /**
   * The dialog other to use.
   */
  other?: ButtonProps | ReactNode
  /**
   * The dialog success to use.
   */
  success?: ButtonProps | ReactNode
  /**
   * The callback invoked when cancel button clicked.
   */
  onCancel?: (onClose: (() => void) | undefined) => void
  /**
   * The callback invoked when other button clicked.
   */
  onOther?: (onClose: (() => void) | undefined) => void
  /**
   * The callback invoked when success button clicked.
   */
  onSuccess?: (onClose: (() => void) | undefined) => void
}

export interface DialogProps
  extends Omit<ModalProps, keyof ThemeProps>,
    ThemeProps<"Dialog">,
    DialogOptions {}

/**
 * `Dialog` is a component used to confirm or interrupt user actions.
 *
 * @see Docs https://yamada-ui.com/components/overlay/dialog
 */
export const Dialog: FC<DialogProps> = ({ size, ...props }) => {
  const [styles, mergedProps] = useComponentMultiStyle("Dialog", {
    size,
    ...props,
  })
  const {
    className,
    cancel,
    children,
    footer,
    header,
    other,
    success,
    withCloseButton = true,
    withOverlay = true,
    containerProps,
    onCancel,
    onClose,
    onOther,
    onSuccess,
    ...rest
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)

  const customDialogOverlay = findChild(validChildren, DialogOverlay)
  const customDialogCloseButton = findChild(validChildren, DialogCloseButton)
  const customDialogHeader = findChild(validChildren, DialogHeader)
  const customDialogBody = findChild(validChildren, DialogBody)
  const customDialogFooter = findChild(validChildren, DialogFooter)

  const cloneChildren = !isEmpty(validChildren)
    ? omitChildren(
        validChildren,
        DialogOverlay,
        DialogCloseButton,
        DialogHeader,
        DialogBody,
        DialogFooter,
      )
    : children

  const css: CSSUIObject = { ...styles.container }

  const cancelButtonProps: ButtonProps =
    isValidElement(cancel) || isUndefined(cancel)
      ? { children: cancel }
      : cancel
  const otherButtonProps: ButtonProps =
    isValidElement(other) || isUndefined(other) ? { children: other } : other
  const successButtonProps: ButtonProps =
    isValidElement(success) || isUndefined(success)
      ? { children: success }
      : success

  if (!cancelButtonProps.variant) cancelButtonProps.variant = "ghost"
  if (!otherButtonProps.colorScheme) otherButtonProps.colorScheme = "secondary"
  if (!successButtonProps.colorScheme)
    successButtonProps.colorScheme = "primary"

  const hasCancelButton = !!cancelButtonProps.children
  const hasOtherButton = !!otherButtonProps.children
  const hasSuccessButton = !!successButtonProps.children
  const hasFooter = hasCancelButton || hasOtherButton || hasSuccessButton

  return (
    <DialogProvider value={styles}>
      <Modal
        className={cx("ui-dialog", className)}
        __css={css}
        {...{
          withCloseButton: false,
          withOverlay: false,
          containerProps,
          onClose,
          ...rest,
          size,
        }}
      >
        {customDialogOverlay ??
          (withOverlay && size !== "full" ? <DialogOverlay /> : null)}
        {customDialogCloseButton ??
          (withCloseButton && onClose ? <DialogCloseButton /> : null)}
        {customDialogHeader ??
          (header ? <DialogHeader>{header}</DialogHeader> : null)}
        {customDialogBody ??
          (cloneChildren ? <DialogBody>{cloneChildren}</DialogBody> : null)}
        {customDialogFooter ??
          (footer || hasFooter ? (
            <DialogFooter>
              {footer ?? (
                <>
                  {hasCancelButton ? (
                    <Button
                      onClick={() => onCancel?.(onClose)}
                      {...cancelButtonProps}
                    />
                  ) : null}
                  {hasOtherButton ? (
                    <Button
                      onClick={() => onOther?.(onClose)}
                      {...otherButtonProps}
                    />
                  ) : null}
                  {hasSuccessButton ? (
                    <Button
                      onClick={() => onSuccess?.(onClose)}
                      {...successButtonProps}
                    />
                  ) : null}
                </>
              )}
            </DialogFooter>
          ) : null)}
      </Modal>
    </DialogProvider>
  )
}

Dialog.__ui__ = "Dialog"
