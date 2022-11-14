import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  ThemeProps,
} from '@yamada-ui/system'
import { Slide, SlideProps } from '@yamada-ui/transitions'
import { createContext, getValidChildren, findChildren, cx } from '@yamada-ui/utils'
import {
  useModal,
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

type DrawerOptions = {
  direction?: SlideProps['direction']
  isFullHeight?: boolean
}

export type DrawerProps = Omit<
  ModalProps,
  'scrollBehavior' | 'animation' | 'position' | 'outside' | keyof ThemeProps
> &
  ThemeProps<'Drawer'> &
  DrawerOptions

type DrawerContext = Record<string, CSSUIObject>

const [DrawerProvider, useDrawer] = createContext<DrawerContext>({
  name: `DrawerContext`,
  errorMessage: `useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `,
})

export const Drawer = forwardRef<DrawerProps, 'div'>(({ size, ...props }, ref) => {
  const styles = useMultiComponentStyle('Drawer', { size, ...props })
  const {
    className,
    children,
    isOpen,
    direction = 'right',
    onClose,
    onOverlayClick,
    onEsc,
    onCloseComplete,
    closeButton = true,
    overlay = true,
    allowPinchZoom,
    autoFocus,
    restoreFocus,
    initialFocusRef,
    finalFocusRef,
    blockScrollOnMount,
    closeOnOverlayClick,
    closeOnEsc,
    lockFocusAcrossFrames,
    ...rest
  } = omitThemeProps({ size, ...props })

  const validChildren = getValidChildren(children)

  const [customDrawerOverlay, ...cloneChildren] = findChildren(validChildren, DrawerOverlay)

  return (
    <DrawerProvider value={styles}>
      <Modal
        ref={ref}
        {...{
          isOpen,
          onClose,
          onOverlayClick,
          onEsc,
          onCloseComplete,
          closeButton: false,
          overlay: false,
          allowPinchZoom,
          autoFocus,
          restoreFocus,
          initialFocusRef,
          finalFocusRef,
          blockScrollOnMount,
          closeOnOverlayClick,
          closeOnEsc,
          lockFocusAcrossFrames,
        }}
      >
        {customDrawerOverlay ?? (overlay && size !== 'full' ? <DrawerOverlay /> : null)}

        <DrawerContent {...{ direction, closeButton, ...rest }}>{cloneChildren}</DrawerContent>
      </Modal>
    </DrawerProvider>
  )
})

type DrawerContentProps = Omit<DrawerProps, 'color' | 'transition' | 'isOpen' | keyof ThemeProps>

export const DrawerContent = forwardRef<DrawerContentProps, 'div'>(
  ({ className, children, direction, closeButton, ...rest }, ref) => {
    const { isOpen, onClose } = useModal()
    const styles = useDrawer()

    const validChildren = getValidChildren(children)

    const [customDrawerCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      DrawerCloseButton,
    )

    const css: CSSUIObject = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      outline: 0,
      ...styles.container,
    }

    return (
      <Slide
        ref={ref}
        className={cx('ui-drawer', className)}
        tabIndex={-1}
        isOpen={isOpen}
        direction={direction}
        duration={{ enter: 0.25, exit: 0.2 }}
        __css={css}
        {...rest}
      >
        {customDrawerCloseButton ?? (closeButton && onClose ? <DrawerCloseButton /> : null)}

        {cloneChildren}
      </Slide>
    )
  },
)

export type DrawerOverlayProps = ModalOverlayProps

export const DrawerOverlay = forwardRef<DrawerOverlayProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx('ui-drawer-overlay', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerCloseButtonProps = ModalCloseButtonProps

export const DrawerCloseButton = forwardRef<DrawerCloseButtonProps, 'button'>(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx('ui-drawer-close-button', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerHeaderProps = ModalHeaderProps

export const DrawerHeader = forwardRef<DrawerHeaderProps, 'header'>(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader ref={ref} className={cx('ui-drawer-header', className)} __css={css} {...rest} />
    )
  },
)

export type DrawerBodyProps = ModalBodyProps

export const DrawerBody = forwardRef<DrawerBodyProps, 'main'>(({ className, ...rest }, ref) => {
  const styles = useDrawer()

  const css: CSSUIObject = { ...styles.body }

  return <ModalBody ref={ref} className={cx('ui-drawer-body', className)} __css={css} {...rest} />
})

export type DrawerFooterProps = ModalFooterProps

export const DrawerFooter = forwardRef<DrawerFooterProps, 'footer'>(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter ref={ref} className={cx('ui-drawer-footer', className)} __css={css} {...rest} />
    )
  },
)
