import type { PanInfo } from "motion/react"
import type { CSSUIObject, FC, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { DrawerProps } from "./drawer"
import { useCallback, useMemo } from "react"
import { ui } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx, findChildren, getValidChildren, isArray } from "../../utils"
import { Slide } from "../transitions"
import { DrawerCloseButton } from "./drawer-close-button"
import { DrawerDragBar } from "./drawer-drag-bar"
import { useDrawer, useModal } from "./modal-context"

export interface DrawerContentProps
  extends Merge<
    Omit<DrawerProps, "open" | "placement" | keyof ThemeProps>,
    Required<
      Pick<
        DrawerProps,
        | "dragConstraints"
        | "dragElastic"
        | "dragOffset"
        | "dragVelocity"
        | "placement"
        | "placement"
      >
    >
  > {}

export const DrawerContent: FC<DrawerContentProps> = ({
  className,
  children,
  closeOnDrag,
  dragConstraints,
  dragElastic,
  dragOffset,
  dragVelocity,
  placement: _placement,
  withCloseButton,
  withDragBar,
  blankForDragProps,
  ...rest
}) => {
  const { bodyRef, duration, headerRef, open, onClose } = useModal()
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
        position = { left: 0, right: 0, top: "calc(-100dvh + 1px)" }
        break

      case "bottom":
        position = { bottom: "calc(-100dvh + 1px)", left: 0, right: 0 }
        break

      case "left":
        position = { bottom: 0, left: "calc(-100% + 1px)", top: 0 }
        break

      case "right":
        position = { bottom: 0, right: "calc(-100% + 1px)", top: 0 }
        break
    }
    const [lightBg, darkBg] = blankForDragBg

    return {
      _after: {
        bg: lightBg,
        content: '""',
        display: "block",
        h: "100dvh",
        position: "absolute",
        w: "100%",
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
    (info: PanInfo) => {
      switch (placement) {
        case "top":
          return (
            info.velocity.y <= dragVelocity * -1 ||
            info.offset.y <= dragOffset * -1
          )
        case "bottom":
          return info.velocity.y >= dragVelocity || info.offset.y >= dragOffset
        case "left":
          return (
            info.velocity.x <= dragVelocity * -1 ||
            info.offset.x <= dragOffset * -1
          )
        case "right":
          return info.velocity.x >= dragVelocity || info.offset.x >= dragOffset
      }
    },
    [placement, dragVelocity, dragOffset],
  )

  return (
    <Slide
      className={cx("ui-drawer", className)}
      aria-describedby={bodyRef.current?.id}
      aria-labelledby={headerRef.current?.id}
      aria-modal="true"
      drag={closeOnDrag ? getDragDirection() : false}
      dragConstraints={getDragDirectionRestriction(dragConstraints)}
      dragElastic={getDragDirectionRestriction(dragElastic)}
      dragMomentum={false}
      dragSnapToOrigin
      duration={duration}
      open={open}
      placement={placement}
      role="dialog"
      tabIndex={-1}
      onDragEnd={(_, info) => {
        if (isCloseByDragInfo(info)) onClose?.()
      }}
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
}

DrawerContent.__ui__ = "DrawerContent"
