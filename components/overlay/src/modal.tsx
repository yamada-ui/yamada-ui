import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  CSSUIObject,
  useMultiComponentStyle,
  CSSUIProps,
  MotionTransitionProperties,
} from '@yamada-ui/system'
import { scaleFadeProps, slideFadeProps } from '@yamada-ui/transitions'
import {
  cx,
  createContext,
  FocusLock,
  FocusLockProps,
  Portal,
  getValidChildren,
  findChildren,
} from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { cloneElement, KeyboardEvent, useCallback } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import {
  ModalOverlay,
  DialogOverlay,
  ModalCloseButton,
  DialogCloseButton,
  DrawerContent,
  DrawerOverlay,
} from './'

type Position =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

type ScrollBehavior = 'inside' | 'outside'

type Animation = 'scale' | 'top' | 'right' | 'left' | 'bottom' | 'none'

type ModalContext = ModalOptions & {
  styles: Record<string, CSSUIObject>
}

const [ModalProvider, useModal] = createContext<ModalContext>({
  name: `ModalContext`,
  errorMessage: `useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
})

export { useModal }

type ModalOptions = Pick<
  FocusLockProps,
  'autoFocus' | 'initialFocusRef' | 'finalFocusRef' | 'restoreFocus' | 'lockFocusAcrossFrames'
> & {
  isOpen: boolean
  onClose?: () => void
  onOverlayClick?: () => void
  onEsc?(): void
  onCloseComplete?: () => void
  position?: Position
  outside?: CSSUIProps['p']
  closeButton?: boolean
  overlay?: boolean
  allowPinchZoom?: boolean
  scrollBehavior?: ScrollBehavior
  blockScrollOnMount?: boolean
  closeOnOverlayClick?: boolean
  closeOnEsc?: boolean
  animation?: Animation
  duration?: MotionTransitionProperties['duration']
}

export type ModalProps = Omit<HTMLUIProps<'section'>, 'position' | 'scrollBehavior' | 'animation'> &
  Omit<HTMLMotionProps<'section'>, 'color' | 'transition'> &
  ThemeProps<'Modal'> &
  ModalOptions

export const Modal = forwardRef<ModalProps, 'section'>(({ size, ...props }, ref) => {
  const styles = useMultiComponentStyle('Modal', { size, ...props })
  const {
    className,
    children,
    isOpen,
    onClose,
    onOverlayClick,
    onEsc,
    onCloseComplete,
    position = 'center',
    outside = 'md',
    closeButton = true,
    overlay = true,
    allowPinchZoom = false,
    scrollBehavior = 'inside',
    autoFocus,
    restoreFocus,
    initialFocusRef,
    finalFocusRef,
    blockScrollOnMount = true,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    lockFocusAcrossFrames = true,
    animation = 'scale',
    duration,
    ...rest
  } = omitThemeProps({ size, ...props })

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      event.stopPropagation()

      if (closeOnEsc) onClose?.()

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

  const validChildren = getValidChildren(children)

  const [customModalOverlay, ...cloneChildren] = findChildren(
    validChildren,
    ModalOverlay,
    DialogOverlay,
    DrawerOverlay,
  )

  let [drawerContent] = findChildren(validChildren, DrawerContent)

  if (drawerContent) drawerContent = cloneElement(drawerContent, { onKeyDown })

  const css: CSSUIObject = {
    position: 'fixed',
    top: 0,
    left: 0,
    w: '100vw',
    h: '100vh',
    p: size !== 'full' ? outside : undefined,
    display: 'flex',
    justifyContent: position.includes('right')
      ? 'flex-start'
      : position.includes('left')
      ? 'flex-end'
      : 'center',
    alignItems: position.includes('top')
      ? 'flex-start'
      : position.includes('bottom')
      ? 'flex-end'
      : 'center',
  }

  return (
    <ModalProvider
      value={{
        isOpen,
        onClose,
        onOverlayClick,
        onEsc,
        position,
        closeButton,
        scrollBehavior,
        closeOnOverlayClick,
        closeOnEsc,
        animation,
        duration,
        styles,
      }}
    >
      <AnimatePresence onExitComplete={onCloseComplete}>
        {isOpen ? (
          <Portal>
            <FocusLock
              autoFocus={autoFocus}
              initialFocusRef={initialFocusRef}
              finalFocusRef={finalFocusRef}
              restoreFocus={restoreFocus}
              lockFocusAcrossFrames={lockFocusAcrossFrames}
            >
              <RemoveScroll
                allowPinchZoom={allowPinchZoom}
                enabled={blockScrollOnMount}
                forwardProps
              >
                <ui.div __css={css}>
                  {customModalOverlay ?? (overlay && size !== 'full' ? <ModalOverlay /> : null)}

                  {drawerContent ?? (
                    <ModalContent ref={ref} className={className} onKeyDown={onKeyDown} {...rest}>
                      {cloneChildren}
                    </ModalContent>
                  )}
                </ui.div>
              </RemoveScroll>
            </FocusLock>
          </Portal>
        ) : null}
      </AnimatePresence>
    </ModalProvider>
  )
})

type ModalContentProps = Omit<HTMLUIProps<'section'>, 'position' | 'scrollBehavior' | 'animation'> &
  Omit<HTMLMotionProps<'section'>, 'color' | 'transition'>

const MotionSection = ui(motion.section)

const getModalContentProps = (
  animation: Animation = 'scale',
  duration?: MotionTransitionProperties['duration'],
) => {
  switch (animation) {
    case 'scale':
      return {
        ...scaleFadeProps,
        custom: { scale: 0.95, reverse: true, duration },
      }
    case 'top':
      return {
        ...slideFadeProps,
        custom: { offsetY: -16, reverse: true, duration },
      }
    case 'right':
      return {
        ...slideFadeProps,
        custom: { offsetX: 16, reverse: true, duration },
      }
    case 'left':
      return {
        ...slideFadeProps,
        custom: { offsetX: -16, reverse: true, duration },
      }
    case 'bottom':
      return {
        ...slideFadeProps,
        custom: { offsetY: 16, reverse: true, duration },
      }
  }
}

const ModalContent = forwardRef<ModalContentProps, 'section'>(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles, scrollBehavior, closeButton, onClose, animation, duration } = useModal()

    const validChildren = getValidChildren(children)

    const [customModalCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      ModalCloseButton,
      DialogCloseButton,
    )

    const props = animation !== 'none' ? getModalContentProps(animation, duration) : {}

    const css: CSSUIObject = {
      position: 'relative',
      maxH: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
      outline: 0,
      ...(__css ? __css : styles.container),
    }

    return (
      <MotionSection
        ref={ref}
        className={cx('ui-modal', className)}
        tabIndex={-1}
        __css={css}
        {...props}
        {...rest}
      >
        {customModalCloseButton ?? (closeButton && onClose ? <ModalCloseButton /> : null)}

        {cloneChildren}
      </MotionSection>
    )
  },
)
