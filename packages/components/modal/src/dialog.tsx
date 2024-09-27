import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import {
  getValidChildren,
  omitChildren,
  isValidElement,
  isEmpty,
  cx,
  findChild,
} from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { DialogBody } from "./dialog-body"
import { DialogCloseButton } from "./dialog-close-button"
import { DialogFooter } from "./dialog-footer"
import { DialogHeader } from "./dialog-header"
import { DialogOverlay } from "./dialog-overlay"
import type { ModalProps } from "./modal"
import { Modal } from "./modal"
import { DialogProvider } from "./modal-context"

interface DialogOptions {
  /**
   * The dialog header to use.
   */
  header?: ReactNode
  /**
   * The dialog footer to use.
   */
  footer?: ReactNode
  /**
   * The dialog cancel to use.
   */
  cancel?: ReactNode | ButtonProps
  /**
   * The dialog other to use.
   */
  other?: ReactNode | ButtonProps
  /**
   * The dialog success to use.
   */
  success?: ReactNode | ButtonProps
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
export const Dialog = motionForwardRef<DialogProps, "section">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Dialog", {
      size,
      ...props,
    })
    const {
      className,
      children,
      withOverlay = true,
      withCloseButton = true,
      header,
      footer,
      cancel,
      other,
      success,
      onClose,
      onCancel,
      onOther,
      onSuccess,
      containerProps,
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

    const cancelButtonProps: ButtonProps = isValidElement(cancel)
      ? { children: cancel }
      : cancel
    const otherButtonProps: ButtonProps = isValidElement(other)
      ? { children: other }
      : other
    const successButtonProps: ButtonProps = isValidElement(success)
      ? { children: success }
      : success

    if (cancelButtonProps && !cancelButtonProps.variant)
      cancelButtonProps.variant = "ghost"
    if (otherButtonProps && !otherButtonProps.colorScheme)
      otherButtonProps.colorScheme = "secondary"
    if (successButtonProps && !successButtonProps.colorScheme)
      successButtonProps.colorScheme = "primary"

    return (
      <DialogProvider value={styles}>
        <Modal
          ref={ref}
          className={cx("ui-dialog", className)}
          __css={css}
          {...{
            onClose,
            withOverlay: false,
            withCloseButton: false,
            containerProps,
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
            (footer ||
            cancelButtonProps ||
            otherButtonProps ||
            successButtonProps ? (
              <DialogFooter>
                {footer ?? (
                  <>
                    {cancelButtonProps ? (
                      <Button
                        onClick={() => onCancel?.(onClose)}
                        {...cancelButtonProps}
                      />
                    ) : null}
                    {otherButtonProps ? (
                      <Button
                        onClick={() => onOther?.(onClose)}
                        {...otherButtonProps}
                      />
                    ) : null}
                    {successButtonProps ? (
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
  },
)
