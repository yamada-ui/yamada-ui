import type { KeyboardEvent } from "react"
import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "../../core"
import type { FocusLockProps } from "../focus-lock"
import type { MotionTransitionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { ModalContentProps } from "./modal-content"
import { AnimatePresence } from "motion/react"
import { cloneElement, useCallback, useRef } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { useValue } from "../../hooks/use-value"
import { findChild, findChildren, getValidChildren } from "../../utils"
import { FocusLock } from "../focus-lock"
import { Portal } from "../portal"
import { DialogOverlay } from "./dialog-overlay"
import { DrawerContent } from "./drawer-content"
import { DrawerOverlay } from "./drawer-overlay"
import { ModalContent } from "./modal-content"
import { ModalProvider } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"

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
   * If `true`, the modal will close when the `Esc` key is pressed.
   *
   * @default true
   */
  closeOnEsc?: boolean
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
   * If `true`, the open will be opened.
   */
  open?: boolean
  /**
   * The CSS `padding` property.
   */
  outside?: CSSUIProps["p"]
  /**
   * The placement of the modal.
   *
   * @default 'center'
   */
  placement?: Token<
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "left"
    | "right"
    | "top"
    | "top-left"
    | "top-right"
  >
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
   * Callback invoked to close the modal.
   */
  onClose?: () => void
  /**
   * Callback function to run side effects after the modal has closed.
   */
  onCloseComplete?: () => void
  /**
   * Callback fired when the escape key is pressed and focus is within modal.
   */
  onEsc?(): void
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick?: () => void
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
export const Modal: FC<ModalProps> = ({ size, ...props }) => {
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
    closeOnEsc = true,
    closeOnOverlay = true,
    duration,
    finalFocusRef,
    initialFocusRef,
    lockFocusAcrossFrames = true,
    open,
    outside = "fallback(4, 1rem)",
    placement: _placement = "center",
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
  const headerRef = useRef<HTMLElement>(null)
  const bodyRef = useRef<HTMLElement>(null)
  const placement = useValue(_placement)
  const validChildren = getValidChildren(children)
  const [customModalOverlay, ...cloneChildren] = findChildren(
    validChildren,
    ModalOverlay,
    DialogOverlay,
    DrawerOverlay,
  )
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

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      ev.stopPropagation()

      if (closeOnEsc) onClose?.()

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

  let drawerContent = findChild(validChildren, DrawerContent)

  if (drawerContent)
    drawerContent = cloneElement<any>(drawerContent, { onKeyDown })

  return (
    <ModalProvider
      value={{
        animation,
        bodyRef,
        closeOnOverlay,
        duration,
        headerRef,
        open,
        scrollBehavior,
        styles,
        withCloseButton,
        onClose,
        onOverlayClick,
      }}
    >
      <AnimatePresence onExitComplete={onCloseComplete}>
        {open ? (
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
                    (withOverlay && size !== "full" ? <ModalOverlay /> : null)}

                  {drawerContent ?? (
                    <ModalContent
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
}
