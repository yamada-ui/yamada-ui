import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  CSSUIObject,
  useMultiComponentStyle,
  CSSUIProps,
  Token,
} from '@yamada-ui/core'
import { FocusLock, FocusLockProps } from '@yamada-ui/focus-lock'
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  MotionTransitionProperties,
} from '@yamada-ui/motion'
import { Portal } from '@yamada-ui/portal'
import { scaleFadeProps, slideFadeProps } from '@yamada-ui/transitions'
import { useValue } from '@yamada-ui/use-value'
import { cx, createContext, getValidChildren, findChildren } from '@yamada-ui/utils'
import { cloneElement, KeyboardEvent, useCallback } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import { DrawerContent } from './drawer'
import { DrawerOverlay, DialogOverlay, DialogCloseButton, ModalOverlay, ModalCloseButton } from './'

type Placement =
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
  placement?: Token<Placement>
  outside?: CSSUIProps['p']
  withCloseButton?: boolean
  withOverlay?: boolean
  allowPinchZoom?: boolean
  scrollBehavior?: ScrollBehavior
  blockScrollOnMount?: boolean
  closeOnOverlay?: boolean
  closeOnEsc?: boolean
  animation?: Animation
  duration?: MotionTransitionProperties['duration']
}

export type ModalProps = Omit<HTMLUIProps<'section'>, 'scrollBehavior' | 'animation'> &
  Omit<HTMLMotionProps<'section'>, 'color' | 'transition'> &
  ThemeProps<'Modal'> &
  ModalOptions

export const Modal = forwardRef<ModalProps, 'section'>(({ size, ...props }, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Modal', { size, ...props })
  const {
    className,
    children,
    isOpen,
    onClose,
    onOverlayClick,
    onEsc,
    onCloseComplete,
    placement: _placement = 'center',
    outside = 'md',
    withCloseButton = true,
    withOverlay = true,
    allowPinchZoom = false,
    scrollBehavior = 'inside',
    autoFocus,
    restoreFocus,
    initialFocusRef,
    finalFocusRef,
    blockScrollOnMount = true,
    closeOnOverlay = true,
    closeOnEsc = true,
    lockFocusAcrossFrames = true,
    animation = 'scale',
    duration,
    ...rest
  } = omitThemeProps(mergedProps)

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

  const placement = useValue(_placement)

  const css: CSSUIObject = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 'beerus',
    w: '100vw',
    h: '100vh',
    p: size !== 'full' ? outside : undefined,
    display: 'flex',
    justifyContent: placement.includes('right')
      ? 'flex-start'
      : placement.includes('left')
      ? 'flex-end'
      : 'center',
    alignItems: placement.includes('top')
      ? 'flex-start'
      : placement.includes('bottom')
      ? 'flex-end'
      : 'center',
  }

  return (
    <ModalProvider
      value={{
        isOpen,
        onClose,
        onOverlayClick,
        withCloseButton,
        scrollBehavior,
        closeOnOverlay,
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
                  {customModalOverlay ?? (withOverlay && size !== 'full' ? <ModalOverlay /> : null)}

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

type ModalContentProps = Omit<HTMLUIProps<'section'>, 'scrollBehavior' | 'animation'> &
  Omit<HTMLMotionProps<'section'>, 'color' | 'transition'>

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
    const { styles, scrollBehavior, withCloseButton, onClose, animation, duration } = useModal()

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
      <ui.section
        as={motion.section}
        ref={ref}
        className={cx('ui-modal', className)}
        tabIndex={-1}
        __css={css}
        {...props}
        {...rest}
      >
        {customModalCloseButton ?? (withCloseButton && onClose ? <ModalCloseButton /> : null)}

        {cloneChildren}
      </ui.section>
    )
  },
)
