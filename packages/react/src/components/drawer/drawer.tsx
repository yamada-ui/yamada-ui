import type { PropsWithChildren } from "react"
import type { HTMLProps, HTMLUIProps, ThemeProps } from "../../core"
import type { CloseButtonProps } from "../button"
import type { FocusLockProps } from "../focus-lock"
import type { MotionProps, MotionTransitionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { SlideProps } from "../slide"
import type { DrawerStyle } from "./drawer.style"
import type { UseDrawerProps, UseDrawerReturn } from "./use-drawer"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { createSlotComponent, ui } from "../../core"
import { findChildren, getValidChildren } from "../../utils"
import { CloseButton } from "../button"
import { fadeVariants } from "../fade"
import { FocusLock } from "../focus-lock"
import { Motion } from "../motion"
import { Portal } from "../portal"
import { Slide } from "../slide"
import { Slot } from "../slot"
import { drawerStyle } from "./drawer.style"
import { useDrawer } from "./use-drawer"

interface DrawerContext
  extends Omit<UseDrawerReturn, "getRootProps">,
    Pick<
      DrawerRootProps,
      "duration" | "placement" | "withCloseButton" | "withDragBar"
    > {}

export interface DrawerRootProps
  extends ThemeProps<DrawerStyle>,
    UseDrawerProps,
    Pick<
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
   * If `true`, scrolling will be disabled on the `body` when the drawer opens.
   *
   * @default true
   */
  blockScrollOnMount?: boolean
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * If `true`, display the drawer close button.
   *
   * @default true
   */
  withCloseButton?: boolean
  /**
   * If `true`, display the drag bar when `closeOnDrag` is `true`.
   *
   * @default true
   */
  withDragBar?: boolean
  /**
   * If `true`, display the drawer overlay.
   *
   * @default true
   */
  withOverlay?: boolean
  /**
   * Props to be forwarded to the portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Callback function to run side effects after the drawer has closed.
   */
  onCloseComplete?: () => void
}

export const {
  component,
  ComponentContext: DrawerContext,
  PropsContext: DrawerPropsContext,
  useComponentContext: useDrawerContext,
  usePropsContext: useDrawerPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DrawerRootProps, DrawerStyle, DrawerContext>(
  "drawer",
  drawerStyle,
)

/**
 * `Drawer` is a component for a panel that appears from the edge of the screen.
 *
 * @see Docs https://yamada-ui.com/components/drawer
 */
export const DrawerRoot = withProvider(
  ({
    allowPinchZoom = false,
    autoFocus,
    blockScrollOnMount = true,
    children,
    closeOnDrag,
    dragConstraints,
    dragElastic,
    dragOffset,
    dragVelocity,
    duration = { enter: 0.4, exit: 0.3 },
    finalFocusRef,
    initialFocusRef,
    lockFocusAcrossFrames = true,
    placement,
    restoreFocus,
    withCloseButton = !closeOnDrag,
    withDragBar = true,
    withOverlay = true,
    portalProps,
    onCloseComplete,
    ...props
  }) => {
    const validChildren = getValidChildren(children)
    const [openTrigger, ...omittedChildren] = findChildren(
      validChildren,
      DrawerOpenTrigger,
    )
    const [customOverlay, ...cloneChildren] = findChildren(
      omittedChildren,
      DrawerOverlay,
    )
    const { open, getRootProps, ...rest } = useDrawer({
      closeOnDrag,
      dragConstraints,
      dragElastic,
      dragOffset,
      dragVelocity,
      placement,
      ...props,
    })

    const context = useMemo(
      () => ({
        duration,
        open,
        placement,
        withCloseButton,
        withDragBar,
        ...rest,
      }),
      [duration, open, withDragBar, placement, withCloseButton, rest],
    )

    return (
      <DrawerContext value={context}>
        {openTrigger}

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
                  <ui.div {...getRootProps()}>
                    {customOverlay ?? (withOverlay ? <DrawerOverlay /> : null)}

                    {cloneChildren}
                  </ui.div>
                </RemoveScroll>
              </FocusLock>
            </Portal>
          ) : null}
        </AnimatePresence>
      </DrawerContext>
    )
  },
  "root",
  { transferProps: ["placement"] },
)()

export interface DrawerOpenTriggerProps extends PropsWithChildren {}

export const DrawerOpenTrigger = component<"fragment", DrawerOpenTriggerProps>(
  (props) => {
    const { getOpenTriggerProps } = useDrawerContext()

    return <Slot {...getOpenTriggerProps(props)} />
  },
  "openTrigger",
)()

export interface DrawerCloseTriggerProps extends PropsWithChildren {}

export const DrawerCloseTrigger = component<
  "fragment",
  DrawerCloseTriggerProps
>((props) => {
  const { getCloseTriggerProps } = useDrawerContext()

  return <Slot {...getCloseTriggerProps(props)} />
}, "closeTrigger")()

export interface DrawerCloseButtonProps extends CloseButtonProps {}

export const DrawerCloseButton = withContext<"button", DrawerCloseButtonProps>(
  CloseButton,
  "closeButton",
)(undefined, (props) => {
  const { getCloseButtonProps } = useDrawerContext()

  return { ...getCloseButtonProps(props) }
})

export interface DrawerOverlayProps extends MotionProps {}

export const DrawerOverlay = withContext<"div", DrawerOverlayProps>((props) => {
  const { duration, getOverlayProps } = useDrawerContext()

  return (
    <Motion
      animate="enter"
      custom={{ duration }}
      exit="exit"
      initial="exit"
      variants={fadeVariants}
      {...(getOverlayProps(props as HTMLProps) as MotionProps)}
    />
  )
}, "overlay")()

export interface DrawerContentProps
  extends Omit<MotionProps<"section">, "children">,
    PropsWithChildren {}

export const DrawerContent = withContext<"div", DrawerContentProps>(
  ({ children, ...rest }) => {
    const {
      closeOnDrag,
      duration,
      open,
      placement,
      withCloseButton,
      withDragBar,
      getContentProps,
    } = useDrawerContext()
    const validChildren = getValidChildren(children)
    const [customCloseButton, ...omittedChildren] = findChildren(
      validChildren,
      DrawerCloseButton,
    )
    const [customDragBar, ...cloneChildren] = findChildren(
      omittedChildren,
      DrawerDragBar,
    )

    return (
      <Slide
        as="section"
        duration={duration}
        open={open}
        placement={placement}
        {...(getContentProps(rest) as SlideProps)}
      >
        {customCloseButton ?? (withCloseButton ? <DrawerCloseButton /> : null)}
        {customDragBar ??
          (withDragBar && closeOnDrag ? <DrawerDragBar /> : null)}

        {cloneChildren}
      </Slide>
    )
  },
  "content",
)()

export interface DrawerDragBarProps extends HTMLUIProps {}

export const DrawerDragBar = withContext<"div", DrawerDragBarProps>(
  "div",
  "dragBar",
)(undefined, (props) => {
  const { getDragBarProps } = useDrawerContext()

  return { ...getDragBarProps(props) }
})

export interface DrawerHeaderProps extends HTMLUIProps<"header"> {}

export const DrawerHeader = withContext<"header", DrawerHeaderProps>(
  "header",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useDrawerContext()

  return { ...getHeaderProps(props) }
})

export interface DrawerTitleProps extends HTMLUIProps<"h2"> {}

export const DrawerTitle = withContext<"h2", DrawerTitleProps>("h2", "title")(
  undefined,
  (props) => {
    const { getTitleProps } = useDrawerContext()

    return { ...getTitleProps(props) }
  },
)

export interface DrawerBodyProps extends HTMLUIProps {}

export const DrawerBody = withContext<"div", DrawerBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { getBodyProps } = useDrawerContext()

    return { ...getBodyProps(props) }
  },
)

export interface DrawerFooterProps extends HTMLUIProps<"footer"> {}

export const DrawerFooter = withContext<"footer", DrawerFooterProps>(
  "footer",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useDrawerContext()

  return { ...getFooterProps(props) }
})
