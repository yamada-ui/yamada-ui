import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import type { SlideProps } from "@yamada-ui/transitions"
import type { ModalProps } from "./modal"
import { omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import { findChildren, getValidChildren } from "@yamada-ui/utils"
import { DrawerContent } from "./drawer-content"
import { DrawerOverlay } from "./drawer-overlay"
import { Modal } from "./modal"
import { DrawerProvider } from "./modal-context"

interface DrawerOptions {
  /**
   * If `true`, then the drawer will close on drag.
   *
   * @default false
   */
  closeOnDrag?: boolean
  /**
   * Applies constraints on the permitted draggable area.
   *
   * @default 0
   */
  dragConstraints?: number
  /**
   * The degree of movement allowed outside constraints. 0 = no movement, 1 = full movement.
   *
   * @default 0.1
   */
  dragElastic?: number
  /**
   * Offset from being dragged to closing.
   *
   * @default 80
   */
  dragOffset?: number
  /**
   * Velocity of the drag that triggers close.
   *
   * @default 100
   */
  dragVelocity?: number
  /**
   * If `true` and drawer's placement is `top` or `bottom`, the drawer will occupy the viewport height (100dvh).
   */
  fullHeight?: boolean
  /**
   * If `true` and drawer's placement is `top` or `bottom`, the drawer will occupy the viewport height (100dvh).
   *
   * @deprecated Use `fullHeight` instead.
   */
  isFullHeight?: boolean
  /**
   * The placement of the drawer.
   *
   * @default 'right'
   */
  placement?: SlideProps["placement"]
  /**
   * If `true`, display the drag bar when `closeOnDrag` is `true`.
   *
   * @default true
   */
  withDragBar?: boolean
  /**
   * Props for the blank area when `closeOnDrag` is `true`.
   */
  blankForDragProps?: CSSUIObject
}

export interface DrawerProps
  extends Omit<
      ModalProps,
      | "animation"
      | "dragConstraints"
      | "dragElastic"
      | "outside"
      | "placement"
      | "scrollBehavior"
      | keyof ThemeProps
    >,
    ThemeProps<"Drawer">,
    DrawerOptions {}

/**
 * `Drawer` is a component for a panel that appears from the edge of the screen.
 *
 * @see Docs https://yamada-ui.com/components/overlay/drawer
 */
export const Drawer = motionForwardRef<DrawerProps, "div">(
  (
    {
      size,
      closeOnDrag = false,
      isFullHeight,
      fullHeight = isFullHeight,
      placement = "right",
      ...props
    },
    ref,
  ) => {
    const [styles, mergedProps] = useComponentMultiStyle("Drawer", {
      size,
      closeOnDrag,
      fullHeight,
      placement,
      ...props,
    })
    const {
      allowPinchZoom,
      autoFocus,
      blockScrollOnMount,
      children,
      closeOnEsc,
      closeOnOverlay,
      dragConstraints = 0,
      dragElastic = 0.1,
      dragOffset = 80,
      dragVelocity = 100,
      duration = { enter: 0.4, exit: 0.3 },
      finalFocusRef,
      initialFocusRef,
      isOpen,
      lockFocusAcrossFrames,
      open = isOpen,
      restoreFocus,
      withCloseButton = !closeOnDrag,
      withDragBar = true,
      withOverlay = true,
      blankForDragProps,
      containerProps,
      portalProps,
      onClose,
      onCloseComplete,
      onEsc,
      onOverlayClick,
      ...rest
    } = omitThemeProps(mergedProps, ["fullHeight"])
    const validChildren = getValidChildren(children)
    const [customDrawerOverlay, ...cloneChildren] = findChildren(
      validChildren,
      DrawerOverlay,
    )

    return (
      <DrawerProvider value={styles}>
        <Modal
          ref={ref}
          {...{
            allowPinchZoom,
            autoFocus,
            blockScrollOnMount,
            closeOnEsc,
            closeOnOverlay,
            duration,
            finalFocusRef,
            initialFocusRef,
            isOpen,
            lockFocusAcrossFrames,
            open,
            restoreFocus,
            withCloseButton: false,
            withOverlay: false,
            containerProps,
            portalProps,
            onClose,
            onCloseComplete,
            onEsc,
            onOverlayClick,
          }}
        >
          {customDrawerOverlay ?? (withOverlay ? <DrawerOverlay /> : null)}

          <DrawerContent
            {...{
              dragConstraints,
              dragElastic,
              dragOffset,
              dragVelocity,
              withCloseButton,
              withDragBar,
              blankForDragProps,
              ...rest,
              closeOnDrag,
              placement,
            }}
          >
            {cloneChildren}
          </DrawerContent>
        </Modal>
      </DrawerProvider>
    )
  },
)

Drawer.displayName = "Drawer"
Drawer.__ui__ = "Drawer"
