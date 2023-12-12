import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { CloseButtonProps } from "@yamada-ui/close-button"
import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import {
  createContext,
  getValidChildren,
  findChildren,
  omitChildren,
  isValidElement,
  isEmpty,
  cx,
} from "@yamada-ui/utils"
import type { ReactNode } from "react"
import type {
  ModalProps,
  ModalOverlayProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./"
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./"

type DialogOptions = {
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

export type DialogProps = Omit<ModalProps, keyof ThemeProps> &
  ThemeProps<"Dialog"> &
  DialogOptions

type DialogContext = Record<string, CSSUIObject>

const [DialogProvider, useDialog] = createContext<DialogContext>({
  name: `DialogContext`,
  errorMessage: `useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `,
})

export const Dialog = forwardRef<DialogProps, "section">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("Dialog", {
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
      ...rest
    } = omitThemeProps(mergedProps)

    const validChildren = getValidChildren(children)

    const [customDialogOverlay] = findChildren(validChildren, DialogOverlay)
    const [customDialogCloseButton] = findChildren(
      validChildren,
      DialogCloseButton,
    )
    const [customDialogHeader] = findChildren(validChildren, DialogHeader)
    const [customDialogBody] = findChildren(validChildren, DialogBody)
    const [customDialogFooter] = findChildren(validChildren, DialogFooter)

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
            size,
            onClose,
            withOverlay: false,
            withCloseButton: false,
            ...rest,
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

export type DialogOverlayProps = ModalOverlayProps

export const DialogOverlay = forwardRef<DialogOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx("ui-dialog__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogCloseButtonProps = CloseButtonProps

export const DialogCloseButton = forwardRef<DialogCloseButtonProps, "button">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx("ui-dialog__close-button", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogHeaderProps = ModalHeaderProps

export const DialogHeader = forwardRef<DialogHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader
        ref={ref}
        className={cx("ui-dialog__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogBodyProps = ModalBodyProps

export const DialogBody = forwardRef<DialogBodyProps, "main">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.body }

    return (
      <ModalBody
        ref={ref}
        className={cx("ui-dialog__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogFooterProps = ModalFooterProps

export const DialogFooter = forwardRef<DialogFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter
        ref={ref}
        className={cx("ui-dialog__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
