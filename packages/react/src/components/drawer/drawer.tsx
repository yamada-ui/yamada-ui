import type { FC, PropsWithChildren, ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ButtonProps } from "../button"
import type { CloseButtonProps } from "../button"
import type { FocusLockProps } from "../focus-lock"
import type { HTMLMotionProps, MotionTransitionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { SlideProps } from "../slide"
import type { DrawerStyle } from "./drawer.style"
import type { UseDrawerProps, UseDrawerReturn } from "./use-drawer"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { createSlotComponent, styled } from "../../core"
import {
  cast,
  findChildren,
  getValidChildren,
  wrapOrPassProps,
} from "../../utils"
import { Button } from "../button"
import { CloseButton } from "../button"
import { fadeVariants } from "../fade"
import { FocusLock } from "../focus-lock"
import { motion } from "../motion"
import { Portal } from "../portal"
import { Slide } from "../slide"
import { Slot } from "../slot"
import { drawerStyle } from "./drawer.style"
import { useDrawer } from "./use-drawer"

interface ComponentContext
  extends Omit<UseDrawerReturn, "getRootProps">,
    Pick<
      DrawerRootProps,
      "duration" | "placement" | "withCloseButton" | "withDragBar"
    > {}

export interface DrawerRootProps
  extends ThemeProps<DrawerStyle>,
    Omit<UseDrawerProps, "title">,
    Pick<
      FocusLockProps,
      | "autoFocus"
      | "finalFocusRef"
      | "initialFocusRef"
      | "lockFocusAcrossFrames"
      | "restoreFocus"
    >,
    ShorthandDrawerContentProps {
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
   * The modal trigger to use.
   */
  trigger?: ReactNode
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
  ComponentContext,
  PropsContext: DrawerPropsContext,
  useComponentContext,
  usePropsContext: useDrawerPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DrawerRootProps, DrawerStyle, ComponentContext>(
  "drawer",
  drawerStyle,
)

/**
 * `Drawer` is a component for a panel that appears from the edge of the screen.
 *
 * @see https://yamada-ui.com/components/drawer
 */
export const DrawerRoot = withProvider(
  ({
    allowPinchZoom = false,
    autoFocus,
    blockScrollOnMount = true,
    body,
    cancel,
    children,
    closeOnDrag,
    dragConstraints,
    dragElastic,
    dragOffset,
    dragVelocity,
    duration = { enter: 0.4, exit: 0.3 },
    finalFocusRef,
    footer,
    header,
    initialFocusRef,
    lockFocusAcrossFrames = true,
    middle,
    placement,
    restoreFocus,
    success,
    title,
    trigger,
    withCloseButton = !closeOnDrag,
    withDragBar = true,
    withOverlay = true,
    portalProps,
    onCancel,
    onCloseComplete,
    onMiddle,
    onSuccess,
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
    const hasChildren = !!cloneChildren.length
    const customOpenTrigger = trigger ? (
      <DrawerOpenTrigger>{trigger}</DrawerOpenTrigger>
    ) : null

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
      <ComponentContext value={context}>
        {openTrigger ?? customOpenTrigger}

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
                  <styled.div {...getRootProps()}>
                    {customOverlay ?? (withOverlay ? <DrawerOverlay /> : null)}

                    {hasChildren ? (
                      cloneChildren
                    ) : (
                      <ShorthandDrawerContent
                        body={body}
                        cancel={cancel}
                        footer={footer}
                        header={header}
                        middle={middle}
                        success={success}
                        title={title}
                        onCancel={onCancel}
                        onMiddle={onMiddle}
                        onSuccess={onSuccess}
                      />
                    )}
                  </styled.div>
                </RemoveScroll>
              </FocusLock>
            </Portal>
          ) : null}
        </AnimatePresence>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["placement"] },
)()

export interface DrawerOpenTriggerProps extends PropsWithChildren {}

export const DrawerOpenTrigger = component<"fragment", DrawerOpenTriggerProps>(
  (props) => {
    const { getOpenTriggerProps } = useComponentContext()

    return <Slot {...getOpenTriggerProps(props)} />
  },
  "openTrigger",
)()

export interface DrawerCloseTriggerProps extends PropsWithChildren {}

export const DrawerCloseTrigger = component<
  "fragment",
  DrawerCloseTriggerProps
>((props) => {
  const { getCloseTriggerProps } = useComponentContext()

  return <Slot {...getCloseTriggerProps(props)} />
}, "closeTrigger")()

export interface DrawerCloseButtonProps extends CloseButtonProps {}

export const DrawerCloseButton = withContext<"button", DrawerCloseButtonProps>(
  CloseButton,
  "closeButton",
)(undefined, (props) => {
  const { getCloseButtonProps } = useComponentContext()

  return { ...getCloseButtonProps(props) }
})

export interface DrawerOverlayProps extends HTMLMotionProps {}

export const DrawerOverlay = withContext<"div", DrawerOverlayProps>((props) => {
  const { duration, getOverlayProps } = useComponentContext()

  return (
    <motion.div
      animate="enter"
      custom={{ duration }}
      exit="exit"
      initial="exit"
      variants={fadeVariants}
      {...cast<HTMLMotionProps>(getOverlayProps(cast<HTMLProps>(props)))}
    />
  )
}, "overlay")()

export interface DrawerContentProps
  extends Omit<HTMLMotionProps<"section">, "children">,
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
    } = useComponentContext()
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

interface ShorthandDrawerContentProps {
  /**
   * The drawer body to use.
   */
  body?: DrawerBodyProps | ReactNode
  /**
   * The drawer cancel button to use.
   */
  cancel?: ButtonProps | ReactNode
  /**
   * The drawer footer to use.
   */
  footer?: DrawerFooterProps | ReactNode
  /**
   * The drawer header to use.
   */
  header?: DrawerHeaderProps | ReactNode
  /**
   * The drawer middle button to use.
   */
  middle?: ButtonProps | ReactNode
  /**
   * The drawer success button to use.
   */
  success?: ButtonProps | ReactNode
  /**
   * The drawer title to use.
   */
  title?: DrawerTitleProps | ReactNode
  /**
   * The callback invoked when cancel button clicked.
   */
  onCancel?: (onClose: () => void) => void
  /**
   * The callback invoked when middle button clicked.
   */
  onMiddle?: (onClose: () => void) => void
  /**
   * The callback invoked when success button clicked.
   */
  onSuccess?: (onClose: () => void) => void
}

export const ShorthandDrawerContent: FC<ShorthandDrawerContentProps> = ({
  body,
  cancel,
  footer,
  header,
  middle,
  success,
  title,
  onCancel,
  onMiddle,
  onSuccess,
}) => {
  const { onClose } = useComponentContext()
  const customHeader = wrapOrPassProps(DrawerHeader, header)
  const customTitle = wrapOrPassProps(DrawerTitle, title)
  const customBody = wrapOrPassProps(DrawerBody, body)
  const customFooter = wrapOrPassProps(DrawerFooter, footer)
  const customCancel = wrapOrPassProps(Button, cancel, {
    variant: "ghost",
    onClick: () => (onCancel ? onCancel(onClose) : onClose()),
  })
  const customMiddle = wrapOrPassProps(Button, middle, {
    colorScheme: "secondary",
    onClick: () => (onMiddle ? onMiddle(onClose) : onClose()),
  })
  const customSuccess = wrapOrPassProps(Button, success, {
    colorScheme: "primary",
    onClick: () => (onSuccess ? onSuccess(onClose) : onClose()),
  })

  return (
    <DrawerContent>
      {customHeader ??
        (customTitle ? <DrawerHeader>{customTitle}</DrawerHeader> : null)}
      {customBody}
      {customFooter ??
        (customCancel || customMiddle || customSuccess ? (
          <DrawerFooter>
            {customCancel}
            {customMiddle}
            {customSuccess}
          </DrawerFooter>
        ) : null)}
    </DrawerContent>
  )
}

export interface DrawerDragBarProps extends HTMLStyledProps {}

export const DrawerDragBar = withContext<"div", DrawerDragBarProps>(
  "div",
  "dragBar",
)(undefined, (props) => {
  const { getDragBarProps } = useComponentContext()

  return { ...getDragBarProps(props) }
})

export interface DrawerHeaderProps extends HTMLStyledProps<"header"> {}

export const DrawerHeader = withContext<"header", DrawerHeaderProps>(
  "header",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useComponentContext()

  return { ...getHeaderProps(props) }
})

export interface DrawerTitleProps extends HTMLStyledProps<"h2"> {}

export const DrawerTitle = withContext<"h2", DrawerTitleProps>("h2", "title")(
  undefined,
  (props) => {
    const { getTitleProps } = useComponentContext()

    return { ...getTitleProps(props) }
  },
)

export interface DrawerBodyProps extends HTMLStyledProps {}

export const DrawerBody = withContext<"div", DrawerBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { getBodyProps } = useComponentContext()

    return { ...getBodyProps(props) }
  },
)

export interface DrawerFooterProps extends HTMLStyledProps<"footer"> {}

export const DrawerFooter = withContext<"footer", DrawerFooterProps>(
  "footer",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useComponentContext()

  return { ...getFooterProps(props) }
})
