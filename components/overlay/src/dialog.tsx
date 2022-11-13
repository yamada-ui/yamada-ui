import { Button, ButtonProps } from '@yamada-ui/forms'
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  ThemeProps,
} from '@yamada-ui/system'
import {
  createContext,
  getValidChildren,
  findChildren,
  filterChildren,
  isValidElement,
  isEmpty,
  cx,
} from '@yamada-ui/utils'
import { ReactNode } from 'react'
import {
  Modal,
  ModalProps,
  ModalOverlay,
  ModalOverlayProps,
  ModalCloseButton,
  ModalCloseButtonProps,
  ModalHeader,
  ModalHeaderProps,
  ModalBody,
  ModalBodyProps,
  ModalFooter,
  ModalFooterProps,
} from './'

type DialogOptions = {
  header?: ReactNode
  footer?: ReactNode
  cancel?: ReactNode | ButtonProps
  other?: ReactNode | ButtonProps
  success?: ReactNode | ButtonProps
  onCancel?: (onClose: (() => void) | undefined) => void
  onOther?: (onClose: (() => void) | undefined) => void
  onSuccess?: (onClose: (() => void) | undefined) => void
}

export type DialogProps = Omit<ModalProps, 'variant' | 'size' | 'colorStyle'> &
  ThemeProps<'Dialog'> &
  DialogOptions

type DialogContext = Record<string, CSSUIObject>

const [DialogProvider, useDialog] = createContext<DialogContext>({
  name: `DialogContext`,
  errorMessage: `useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `,
})

export const Dialog = forwardRef<DialogProps, 'section'>(({ size, ...props }, ref) => {
  const styles = useMultiComponentStyle('Dialog', { size, ...props })
  const {
    className,
    children,
    overlay = true,
    closeButton = true,
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
  } = omitThemeProps({ size, ...props })

  const validChildren = getValidChildren(children)

  const [customDialogOverlay] = findChildren(validChildren, DialogOverlay)
  const [customDialogCloseButton] = findChildren(validChildren, DialogCloseButton)
  const [customDialogHeader] = findChildren(validChildren, DialogHeader)
  const [customDialogBody] = findChildren(validChildren, DialogBody)
  const [customDialogFooter] = findChildren(validChildren, DialogFooter)

  const cloneChildren = !isEmpty(validChildren)
    ? filterChildren(
        validChildren,
        DialogOverlay,
        DialogCloseButton,
        DialogHeader,
        DialogBody,
        DialogFooter,
      )
    : children

  const css: CSSUIObject = { ...styles.container }

  const cancelButtonProps: ButtonProps = isValidElement(cancel) ? { children: cancel } : cancel
  const otherButtonProps: ButtonProps = isValidElement(other) ? { children: other } : other
  const successButtonProps: ButtonProps = isValidElement(success) ? { children: success } : success

  if (cancelButtonProps && !cancelButtonProps.variant) cancelButtonProps.variant = 'ghost'
  if (otherButtonProps && !otherButtonProps.colorStyle) otherButtonProps.colorStyle = 'secondary'
  if (successButtonProps && !successButtonProps.colorStyle)
    successButtonProps.colorStyle = 'primary'

  return (
    <DialogProvider value={styles}>
      <Modal
        ref={ref}
        __css={css}
        {...{ size, onClose, overlay: false, closeButton: false, ...rest }}
      >
        {customDialogOverlay ?? (overlay && size !== 'full' ? <DialogOverlay /> : null)}
        {customDialogCloseButton ?? (closeButton && onClose ? <DialogCloseButton /> : null)}
        {customDialogHeader ?? (header ? <DialogHeader>{header}</DialogHeader> : null)}
        {customDialogBody ?? (cloneChildren ? <DialogBody>{cloneChildren}</DialogBody> : null)}
        {customDialogFooter ??
          (footer || cancelButtonProps || otherButtonProps || successButtonProps ? (
            <DialogFooter>
              {footer ?? (
                <>
                  {cancelButtonProps ? (
                    <Button onClick={() => onCancel?.(onClose)} {...cancelButtonProps} />
                  ) : null}
                  {otherButtonProps ? (
                    <Button onClick={() => onOther?.(onClose)} {...otherButtonProps} />
                  ) : null}
                  {successButtonProps ? (
                    <Button onClick={() => onSuccess?.(onClose)} {...successButtonProps} />
                  ) : null}
                </>
              )}
            </DialogFooter>
          ) : null)}
      </Modal>
    </DialogProvider>
  )
})

export type DialogOverlayProps = ModalOverlayProps

export const DialogOverlay = forwardRef<DialogOverlayProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx('ui-dialog-overlay', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogCloseButtonProps = ModalCloseButtonProps

export const DialogCloseButton = forwardRef<DialogCloseButtonProps, 'button'>(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx('ui-dialog-close-button', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DialogHeaderProps = ModalHeaderProps

export const DialogHeader = forwardRef<DialogHeaderProps, 'header'>(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader ref={ref} className={cx('ui-dialog-header', className)} __css={css} {...rest} />
    )
  },
)

export type DialogBodyProps = ModalBodyProps

export const DialogBody = forwardRef<DialogBodyProps, 'main'>(({ className, ...rest }, ref) => {
  const styles = useDialog()

  const css: CSSUIObject = { ...styles.body }

  return <ModalBody ref={ref} className={cx('ui-dialog-body', className)} __css={css} {...rest} />
})

export type DialogFooterProps = ModalFooterProps

export const DialogFooter = forwardRef<DialogFooterProps, 'footer'>(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter ref={ref} className={cx('ui-dialog-footer', className)} __css={css} {...rest} />
    )
  },
)
