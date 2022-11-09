import { CloseButton, CloseButtonProps } from '@yamada-ui/forms'
import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  CSSUIObject,
  useMultiComponentStyle,
  CSSUIProps,
  useDynamicAnimation,
  AnimationStyle,
  useLazy,
} from '@yamada-ui/system'
import { cx, createContext, FocusLock, FocusLockProps, Portal } from '@yamada-ui/utils'
import { KeyboardEvent, useCallback, useEffect } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

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
  position?: Position
  outside?: CSSUIProps['p']
  closeButton?: boolean
  overlay?: boolean
  allowPinchZoom?: boolean
  scrollBehavior?: ScrollBehavior
  blockScrollOnMount?: boolean
  closeOnOverlayClick?: boolean
  closeOnEsc?: boolean
}

export type ModalProps = Omit<HTMLUIProps<'section'>, 'position' | 'scrollBehavior'> &
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
    ...rest
  } = omitThemeProps({ size, ...props })

  const [isLazyOpen, { on, lazyOff }] = useLazy(200, isOpen)

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      event.stopPropagation()

      if (closeOnEsc) onClose?.()

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

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

  useEffect(() => {
    if (isOpen) {
      on()
    } else {
      lazyOff()
    }
  }, [isOpen, on, lazyOff])

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
        styles,
      }}
    >
      {isLazyOpen ? (
        <Portal>
          <FocusLock
            autoFocus={autoFocus}
            initialFocusRef={initialFocusRef}
            finalFocusRef={finalFocusRef}
            restoreFocus={restoreFocus}
            lockFocusAcrossFrames={lockFocusAcrossFrames}
          >
            <RemoveScroll allowPinchZoom={allowPinchZoom} enabled={blockScrollOnMount} forwardProps>
              <ui.div __css={css}>
                {overlay ? <ModalOverlay /> : null}

                <ModalContent ref={ref} className={className} onKeyDown={onKeyDown} {...rest}>
                  {children}
                </ModalContent>
              </ui.div>
            </RemoveScroll>
          </FocusLock>
        </Portal>
      ) : null}
    </ModalProvider>
  )
})

type ModalContent = HTMLUIProps<'section'>

const ModalContent = forwardRef<ModalOverlayProps, 'section'>(
  ({ className, children, ...rest }, ref) => {
    const { styles, isOpen, scrollBehavior, closeButton, onClose } = useModal()

    const [animation, setAnimation] = useDynamicAnimation<
      Record<'fadeIn' | 'fadeOut', AnimationStyle>
    >({
      fadeIn: {
        keyframes: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        duration: 'normal',
        fillMode: 'forwards',
        timingFunction: 'ease',
      },
      fadeOut: {
        keyframes: {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
        },
        duration: 'normal',
        fillMode: 'forwards',
        timingFunction: 'ease',
      },
    })

    const css: CSSUIObject = {
      position: 'relative',
      maxH: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
      animation,
      ...styles.container,
    }

    useEffect(() => {
      setAnimation(isOpen ? 'fadeIn' : 'fadeOut')
    }, [isOpen, setAnimation])

    return (
      <ui.section
        ref={ref}
        className={cx('ui-modal', className)}
        __css={css}
        tabIndex={-1}
        {...rest}
      >
        {closeButton && onClose ? <ModalCloseButton /> : null}

        {children}
      </ui.section>
    )
  },
)

type ModalOverlayProps = HTMLUIProps<'div'>

const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(({ className, ...rest }, ref) => {
  const { styles, isOpen, closeOnOverlayClick, onOverlayClick, onClose } = useModal()

  const [animation, setAnimation] = useDynamicAnimation<
    Record<'fadeIn' | 'fadeOut', AnimationStyle>
  >({
    fadeIn: {
      keyframes: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      duration: 'normal',
      fillMode: 'forwards',
      timingFunction: 'ease',
    },
    fadeOut: {
      keyframes: {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
      duration: 'normal',
      fillMode: 'forwards',
      timingFunction: 'ease',
    },
  })

  const css: CSSUIObject = {
    position: 'fixed',
    top: 0,
    left: 0,
    w: '100vw',
    h: '100vh',
    animation,
    ...styles.overlay,
  }

  useEffect(() => {
    setAnimation(isOpen ? 'fadeIn' : 'fadeOut')
  }, [isOpen, setAnimation])

  return (
    <ui.div
      ref={ref}
      className={cx('ui-modal-overlay', className)}
      __css={css}
      onClick={() => {
        onOverlayClick?.()
        if (closeOnOverlayClick) onClose?.()
      }}
      {...rest}
    />
  )
})

type ModalCloseButtonProps = CloseButtonProps

const ModalCloseButton = forwardRef<ModalCloseButtonProps, 'button'>(
  ({ onClick, ...rest }, ref) => {
    const { styles, onClose } = useModal()

    const css: CSSUIObject = {
      position: 'absolute',
      ...styles.closeButton,
    }

    return (
      <CloseButton
        ref={ref}
        className={cx('ui-modal-close-button')}
        __css={css}
        onClick={(event) => {
          onClick?.(event)
          onClose?.()
        }}
        {...rest}
      />
    )
  },
)

export type ModalHeaderProps = HTMLUIProps<'header'>

export const ModalHeader = forwardRef<ModalHeaderProps, 'header'>(({ className, ...rest }, ref) => {
  const { styles } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...styles.header,
  }

  return <ui.header ref={ref} className={cx('ui-modal-header', className)} __css={css} {...rest} />
})

export type ModalBodyProps = HTMLUIProps<'main'>

export const ModalBody = forwardRef<ModalBodyProps, 'main'>(({ className, ...rest }, ref) => {
  const { styles, scrollBehavior } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
    ...styles.body,
  }

  return <ui.main ref={ref} className={cx('ui-modal-body', className)} __css={css} {...rest} />
})

export type ModalFooterProps = HTMLUIProps<'footer'>

export const ModalFooter = forwardRef<ModalFooterProps, 'footer'>(({ className, ...rest }, ref) => {
  const { styles } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...styles.footer,
  }

  return <ui.footer ref={ref} className={cx('ui-modal-footer', className)} __css={css} {...rest} />
})
