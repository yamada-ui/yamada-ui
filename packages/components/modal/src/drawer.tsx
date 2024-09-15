import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { motionForwardRef, type MotionPanInfo } from "@yamada-ui/motion"
import type { SlideProps } from "@yamada-ui/transitions"
import { Slide } from "@yamada-ui/transitions"
import { useValue } from "@yamada-ui/use-value"
import {
  createContext,
  getValidChildren,
  findChildren,
  cx,
  isArray,
} from "@yamada-ui/utils"
import type { FC } from "react"
import { useCallback, useMemo } from "react"
import { useModal } from "./modal"
import type {
  ModalProps,
  ModalOverlayProps,
  ModalCloseButtonProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./"
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./"

type DrawerOptions = {
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

export type DrawerProps = Omit<
  ModalProps,
  | "scrollBehavior"
  | "animation"
  | "outside"
  | "placement"
  | "dragConstraints"
  | "dragElastic"
  | keyof ThemeProps
> &
  ThemeProps<"Drawer"> &
  DrawerOptions

type DrawerContext = Record<string, CSSUIObject>

const [DrawerProvider, useDrawer] = createContext<DrawerContext>({
  name: `DrawerContext`,
  errorMessage: `useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `,
})

/**
 * `Drawer` is a component for a panel that appears from the edge of the screen.
 *
 * @see Docs https://yamada-ui.com/components/overlay/drawer
 */
export const Drawer = motionForwardRef<DrawerProps, "div">(
  ({ size, placement = "right", closeOnDrag = false, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("Drawer", {
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

type DrawerContentProps = Omit<
  DrawerProps,
  "isOpen" | "placement" | keyof ThemeProps
> &
  Required<
    Pick<
      DrawerProps,
      | "placement"
      | "dragConstraints"
      | "dragElastic"
      | "dragOffset"
      | "dragVelocity"
      | "placement"
    >
  >

export const DrawerContent = motionForwardRef<DrawerContentProps, "div">(
  (
    {
      className,
      children,
      placement: _placement,
      withCloseButton,
      withDragBar,
      closeOnDrag,
      dragConstraints,
      dragElastic,
      dragOffset,
      dragVelocity,
      blankForDragProps,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, onClose, duration } = useModal()
    const styles = useDrawer()
    const placement = useValue(_placement)

    const validChildren = getValidChildren(children)

    const [customDrawerCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      DrawerCloseButton,
    )

    const blankForDragBg = useMemo(() => {
      const propBg =
        rest.backgroundColor ?? rest.bgColor ?? rest.background ?? rest.bg
      const styleBg =
        styles.container?.backgroundColor ??
        styles.container?.bgColor ??
        styles.container?.background ??
        styles.container?.bg
      const computedBg = propBg ?? styleBg

      return isArray(computedBg) ? computedBg : [computedBg]
    }, [rest, styles])

    const blankForDrag = useMemo<CSSUIObject>(() => {
      let position: CSSUIObject = {}

      switch (placement) {
        case "top":
          position = { top: "calc(-100dvh + 1px)", left: 0, right: 0 }
          break

        case "bottom":
          position = { bottom: "calc(-100dvh + 1px)", left: 0, right: 0 }
          break

        case "left":
          position = { left: "calc(-100% + 1px)", top: 0, bottom: 0 }
          break

        case "right":
          position = { right: "calc(-100% + 1px)", top: 0, bottom: 0 }
          break
      }

      const [lightBg, darkBg] = blankForDragBg

      return {
        _after: {
          content: '""',
          display: "block",
          w: "100%",
          h: "100dvh",
          bg: lightBg,
          position: "absolute",
          ...position,
          ...blankForDragProps,
        },
        _dark: {
          _after: {
            bg: darkBg,
          },
        },
      }
    }, [placement, blankForDragBg, blankForDragProps])

    const css = useMemo<CSSUIObject>(
      () => ({
        display: "flex",
        flexDirection:
          placement === "top" || placement === "bottom" ? "column" : "row",
        outline: 0,
        ...(closeOnDrag ? blankForDrag : {}),
        ...styles.container,
      }),
      [blankForDrag, closeOnDrag, placement, styles],
    )

    const getDragDirectionRestriction = useCallback(
      (value: number) => {
        switch (placement) {
          case "top":
            return { bottom: value }
          case "bottom":
            return { top: value }
          case "left":
            return { right: value }
          case "right":
            return { left: value }
        }
      },
      [placement],
    )

    const getDragDirection = useCallback(() => {
      switch (placement) {
        case "top":
        case "bottom":
          return "y"
        case "left":
        case "right":
          return "x"
      }
    }, [placement])

    const isCloseByDragInfo = useCallback(
      (info: MotionPanInfo) => {
        switch (placement) {
          case "top":
            return (
              info.velocity.y <= dragVelocity * -1 ||
              info.offset.y <= dragOffset * -1
            )
          case "bottom":
            return (
              info.velocity.y >= dragVelocity || info.offset.y >= dragOffset
            )
          case "left":
            return (
              info.velocity.x <= dragVelocity * -1 ||
              info.offset.x <= dragOffset * -1
            )
          case "right":
            return (
              info.velocity.x >= dragVelocity || info.offset.x >= dragOffset
            )
        }
      },
      [placement, dragVelocity, dragOffset],
    )

    return (
      <Slide
        ref={ref}
        className={cx("ui-drawer", className)}
        isOpen={isOpen}
        placement={placement}
        duration={duration}
        drag={closeOnDrag ? getDragDirection() : false}
        dragConstraints={getDragDirectionRestriction(dragConstraints)}
        dragElastic={getDragDirectionRestriction(dragElastic)}
        dragSnapToOrigin
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (isCloseByDragInfo(info)) onClose?.()
        }}
        tabIndex={-1}
        __css={css}
        {...rest}
      >
        {customDrawerCloseButton ??
          (withCloseButton && onClose ? <DrawerCloseButton /> : null)}

        {withDragBar &&
        closeOnDrag &&
        (placement === "bottom" || placement === "right") ? (
          <DrawerDragBar />
        ) : null}

        <ui.div
          className="ui-drawer__inner"
          __css={{ display: "flex", flexDirection: "column", ...styles.inner }}
        >
          {cloneChildren}
        </ui.div>

        {withDragBar &&
        closeOnDrag &&
        (placement === "top" || placement === "left") ? (
          <DrawerDragBar />
        ) : null}
      </Slide>
    )
  },
)

export type DrawerOverlayProps = ModalOverlayProps

export const DrawerOverlay = motionForwardRef<DrawerOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx("ui-drawer__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerDragBarProps = HTMLUIProps<"div">

export const DrawerDragBar: FC<DrawerDragBarProps> = ({
  className,
  ...rest
}) => {
  const styles = useDrawer()

  const css: CSSUIObject = { ...styles.dragBar }

  return (
    <ui.div
      className={cx("ui-drawer__drag-bar", className)}
      __css={css}
      {...rest}
    />
  )
}

export type DrawerCloseButtonProps = ModalCloseButtonProps

export const DrawerCloseButton = forwardRef<DrawerCloseButtonProps, "button">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx("ui-drawer__close-button", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerHeaderProps = ModalHeaderProps

export const DrawerHeader = forwardRef<DrawerHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader
        ref={ref}
        className={cx("ui-drawer__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerBodyProps = ModalBodyProps

export const DrawerBody = forwardRef<DrawerBodyProps, "main">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.body }

    return (
      <ModalBody
        ref={ref}
        className={cx("ui-drawer__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type DrawerFooterProps = ModalFooterProps

export const DrawerFooter = forwardRef<DrawerFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter
        ref={ref}
        className={cx("ui-drawer__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
