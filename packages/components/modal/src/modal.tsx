import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { FocusLockProps } from "@yamada-ui/focus-lock"
import type { MotionTransitionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { ModalContentProps } from "./modal-content"
import type { UseModalProps } from "./use-modal"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import { FocusLock } from "@yamada-ui/focus-lock"
import { AnimatePresence, motionForwardRef } from "@yamada-ui/motion"
import { Portal } from "@yamada-ui/portal"
import { useId } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { ModalContent } from "./modal-content"
import { ModalContextProvider } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"
import { useModal } from "./use-modal"

export interface ModalOptions
  extends Pick<
    FocusLockProps,
    | "autoFocus"
    | "finalFocusRef"
    | "initialFocusRef"
    | "lockFocusAcrossFrames"
    | "restoreFocus"
  > {
  /**
   * If `true`, the open will be opened.
   */
  isOpen: boolean
  /**
   * Handle zoom or pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @default false.
   */
  allowPinchZoom?: boolean
  /**
   * The animation of the tooltip.
   *
   * @default 'scale'
   */
  animation?: "bottom" | "left" | "none" | "right" | "scale" | "top"
  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   *
   * @default true
   */
  blockScrollOnMount?: boolean
  /**
   * If `true`, the modal will close when the overlay is clicked.
   *
   * @default true
   */
  closeOnOverlay?: boolean
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * The CSS `padding` property.
   */
  outside?: CSSUIProps["p"]
  /**
   * Where scroll behavior should originate.
   *
   * - `inside`: scroll only occurs within the `ModalBody`.
   * - `outside`: the entire `ModalContent` will scroll within the viewport.
   *
   * @default 'inside'
   */
  scrollBehavior?: "inside" | "outside"
  /**
   * If `true`, display the modal close button.
   *
   * @default true
   */
  withCloseButton?: boolean
  /**
   * If `true`, display the modal overlay.
   *
   * @default true
   */
  withOverlay?: boolean
  /**
   * Props for modal container element.
   */
  containerProps?: HTMLUIProps
  /**
   * Props to be forwarded to the portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Callback function to run side effects after the modal has closed.
   */
  onCloseComplete?: () => void
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick?: () => void
}

export interface ModalProps
  extends ModalContentProps,
    ThemeProps<"Modal">,
    ModalOptions,
    UseModalProps {}

/**
 * `Modal` is a component that is displayed over the main content to focus the user's attention solely on the information.
 *
 * @see Docs https://yamada-ui.com/components/overlay/modal
 */
export const Modal = motionForwardRef<ModalProps, "section">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Modal", {
      size,
      ...props,
    })
    const {
      className,
      allowPinchZoom = false,
      animation = "scale",
      autoFocus,
      blockScrollOnMount = true,
      children,
      closeOnEsc,
      closeOnOverlay = true,
      duration,
      finalFocusRef,
      initialFocusRef,
      isOpen,
      lockFocusAcrossFrames = true,
      outside = "fallback(4, 1rem)",
      placement: _placement,
      restoreFocus,
      scrollBehavior = "inside",
      withCloseButton = true,
      withOverlay = true,
      containerProps,
      portalProps,
      onClose,
      onCloseComplete,
      onEsc,
      onOverlayClick,
      ...rest
    } = omitThemeProps(mergedProps)
    const labelledbyId = useId()
    const describedbyId = useId()

    const {
      cloneChildren,
      customModalOverlay,
      drawerContent,
      placement,
      onKeyDown,
    } = useModal({
      children,
      closeOnEsc,
      placement: _placement,
      onClose,
      onEsc,
    })

    const css: CSSUIObject = {
      alignItems: placement.includes("top")
        ? "flex-start"
        : placement.includes("bottom")
          ? "flex-end"
          : "center",
      display: "flex",
      h: "100dvh",
      justifyContent: placement.includes("left")
        ? "flex-start"
        : placement.includes("right")
          ? "flex-end"
          : "center",
      left: 0,
      p: size !== "full" ? outside : undefined,
      position: "fixed",
      top: 0,
      w: "100vw",
      zIndex: "fallback(jeice, 110)",
    }

    return (
      <ModalContextProvider
        value={{
          animation,
          closeOnOverlay,
          describedbyId,
          duration,
          isOpen,
          labelledbyId,
          scrollBehavior,
          styles,
          withCloseButton,
          onClose,
          onOverlayClick,
        }}
      >
        <AnimatePresence onExitComplete={onCloseComplete}>
          {isOpen ? (
            <Portal {...portalProps}>
              <FocusLock
                autoFocus={autoFocus}
                finalFocusRef={finalFocusRef}
                initialFocusRef={initialFocusRef}
                lockFocusAcrossFrames={lockFocusAcrossFrames}
                restoreFocus={restoreFocus}
              >
                <RemoveScroll
                  allowPinchZoom={allowPinchZoom}
                  enabled={blockScrollOnMount}
                  forwardProps
                >
                  <ui.div __css={css} {...containerProps}>
                    {customModalOverlay ??
                      (withOverlay && size !== "full" ? (
                        <ModalOverlay />
                      ) : null)}

                    {drawerContent ?? (
                      <ModalContent
                        ref={ref}
                        className={className}
                        onKeyDown={onKeyDown}
                        {...rest}
                      >
                        {cloneChildren}
                      </ModalContent>
                    )}
                  </ui.div>
                </RemoveScroll>
              </FocusLock>
            </Portal>
          ) : null}
        </AnimatePresence>
      </ModalContextProvider>
    )
  },
)
