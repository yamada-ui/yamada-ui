import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import type { SlideProps } from "@yamada-ui/transitions"
import { getValidChildren, findChildren } from "@yamada-ui/utils"
import { DrawerContent } from "./drawer-content"
import { DrawerOverlay } from "./drawer-overlay"
import { Modal } from "./modal"
import type { ModalProps } from "./modal"
import { DrawerProvider } from "./modal-context"

interface DrawerOptions {
  /**
   * The placement of the drawer.
   *
   * @default 'right'
   */
  placement?: SlideProps["placement"]
  /**
   * If `true` and drawer's placement is `top` or `bottom`, the drawer will occupy the viewport height (100dvh).
   */
  isFullHeight?: boolean
  /**
   * If `true`, then the drawer will close on drag.
   *
   * @default false
   */
  closeOnDrag?: boolean
  /**
   * If `true`, display the drag bar when `closeOnDrag` is `true`.
   *
   * @default true
   */
  withDragBar?: boolean
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
   * Props for the blank area when `closeOnDrag` is `true`.
   */
  blankForDragProps?: CSSUIObject
}

export interface DrawerProps
  extends Omit<
      ModalProps,
      | "scrollBehavior"
      | "animation"
      | "outside"
      | "placement"
      | "dragConstraints"
      | "dragElastic"
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
  ({ size, placement = "right", closeOnDrag = false, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Drawer", {
      size,
      placement,
      closeOnDrag,
      ...props,
    })
    const {
      children,
      isOpen,
      onClose,
      onOverlayClick,
      onEsc,
      onCloseComplete,
      withCloseButton = !closeOnDrag,
      withOverlay = true,
      withDragBar = true,
      allowPinchZoom,
      autoFocus,
      restoreFocus,
      initialFocusRef,
      finalFocusRef,
      blockScrollOnMount,
      closeOnOverlay,
      closeOnEsc,
      lockFocusAcrossFrames,
      duration = { enter: 0.4, exit: 0.3 },
      dragConstraints = 0,
      dragElastic = 0.1,
      dragOffset = 80,
      dragVelocity = 100,
      blankForDragProps,
      portalProps,
      containerProps,
      ...rest
    } = omitThemeProps(mergedProps, ["isFullHeight"])

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
            isOpen,
            onClose,
            onOverlayClick,
            onEsc,
            onCloseComplete,
            withCloseButton: false,
            withOverlay: false,
            allowPinchZoom,
            autoFocus,
            restoreFocus,
            initialFocusRef,
            finalFocusRef,
            blockScrollOnMount,
            closeOnOverlay,
            closeOnEsc,
            lockFocusAcrossFrames,
            duration,
            portalProps,
            containerProps,
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
              placement,
              closeOnDrag,
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
