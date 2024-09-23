import type {
  ThemeProps,
  CSSUIObject,
  CSSUIProps,
  Token,
  HTMLUIProps,
} from "@yamada-ui/core"
import { ui, omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import type { FocusLockProps } from "@yamada-ui/focus-lock"
import { FocusLock } from "@yamada-ui/focus-lock"
import type { MotionTransitionProps } from "@yamada-ui/motion"
import { AnimatePresence, motionForwardRef } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { useValue } from "@yamada-ui/use-value"
import { getValidChildren, findChildren } from "@yamada-ui/utils"
import type { KeyboardEvent } from "react"
import { cloneElement, useCallback } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { DialogOverlay } from "./dialog-overlay"
import { DrawerContent } from "./drawer-content"
import { DrawerOverlay } from "./drawer-overlay"
import type { ModalContentProps } from "./modal-content"
import { ModalContent } from "./modal-content"
import { ModalProvider } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"

export interface ModalOptions
  extends Pick<
    FocusLockProps,
    | "autoFocus"
    | "initialFocusRef"
    | "finalFocusRef"
    | "restoreFocus"
    | "lockFocusAcrossFrames"
  > {
  /**
   * If `true`, the open will be opened.
   */
  isOpen: boolean
  /**
   * Callback invoked to close the modal.
   */
  onClose?: () => void
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick?: () => void
  /**
   * Callback fired when the escape key is pressed and focus is within modal.
   */
  onEsc?(): void
  /**
   * Callback function to run side effects after the modal has closed.
   */
  onCloseComplete?: () => void
  /**
   * The placement of the modal.
   *
   * @default 'center'
   */
  placement?: Token<
    | "center"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
  >
  /**
   * The CSS `padding` property.
   */
  outside?: CSSUIProps["p"]
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
   * Handle zoom or pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @default false.
   */
  allowPinchZoom?: boolean
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
   * If `true`, the modal will close when the `Esc` key is pressed.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * The animation of the tooltip.
   *
   * @default 'scale'
   */
  animation?: "scale" | "top" | "right" | "left" | "bottom" | "none"
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * Props to be forwarded to the portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Props for modal container element.
   */
  containerProps?: HTMLUIProps
}

export interface ModalProps
  extends ModalContentProps,
    ThemeProps<"Modal">,
    ModalOptions {}

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
      children,
      isOpen,
      onClose,
      onOverlayClick,
      onEsc,
      onCloseComplete,
      placement: _placement = "center",
      outside = "fallback(4, 1rem)",
      withCloseButton = true,
      withOverlay = true,
      allowPinchZoom = false,
      scrollBehavior = "inside",
      autoFocus,
      restoreFocus,
      initialFocusRef,
      finalFocusRef,
      blockScrollOnMount = true,
      closeOnOverlay = true,
      closeOnEsc = true,
      lockFocusAcrossFrames = true,
      animation = "scale",
      duration,
      portalProps,
      containerProps,
      ...rest
    } = omitThemeProps(mergedProps)

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        if (ev.key !== "Escape") return

        ev.stopPropagation()

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

    if (drawerContent)
      drawerContent = cloneElement(drawerContent, { onKeyDown })

    const placement = useValue(_placement)

    const css: CSSUIObject = {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: "fallback(jeice, 110)",
      w: "100vw",
      h: "100dvh",
      p: size !== "full" ? outside : undefined,
      display: "flex",
      justifyContent: placement.includes("left")
        ? "flex-start"
        : placement.includes("right")
          ? "flex-end"
          : "center",
      alignItems: placement.includes("top")
        ? "flex-start"
        : placement.includes("bottom")
          ? "flex-end"
          : "center",
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
            <Portal {...portalProps}>
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
      </ModalProvider>
    )
  },
)
