import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import type { MotionPanInfo } from "@yamada-ui/motion"
import { Slide } from "@yamada-ui/transitions"
import { useValue } from "@yamada-ui/use-value"
import type { Merge } from "@yamada-ui/utils"
import { getValidChildren, findChildren, cx, isArray } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type { DrawerProps } from "./drawer"
import { DrawerCloseButton } from "./drawer-close-button"
import { DrawerDragBar } from "./drawer-drag-bar"
import { useDrawer, useModal } from "./modal-context"

export interface DrawerContentProps
  extends Merge<
    Omit<DrawerProps, "isOpen" | "placement" | keyof ThemeProps>,
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
  > {}

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
          __css={{
            display: "flex",
            flexDirection: "column",
            w: "100%",
            ...styles.inner,
          }}
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
