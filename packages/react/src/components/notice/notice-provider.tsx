import type { MotionStyle, PanInfo, Variants } from "motion/react"
import type { FC } from "react"
import type { CSSUIObject, ThemeConfig } from "../../core"
import type { NoticeOptions } from "./notice"
import { AnimatePresence, useIsPresent } from "motion/react"
import { useEffect, useState, useSyncExternalStore } from "react"
import { memo, ui } from "../../core"
import { useTimeout } from "../../hooks/use-timeout"
import { cx, runIfFunc, useUpdateEffect } from "../../utils"
import { motion } from "../motion"
import { Portal } from "../portal"
import { noticeStore } from "./notice"

export interface NoticeProviderProps
  extends Omit<Required<ThemeConfig>["notice"], "options"> {}

export const NoticeProvider: FC<NoticeProviderProps> = ({
  appendToParentPortal,
  containerRef,
  gap = "fallback(4, 1rem)",
  variants,
  itemProps,
  listProps,
}) => {
  const state = useSyncExternalStore(
    noticeStore.subscribe,
    noticeStore.getSnapshot,
    noticeStore.getSnapshot,
  )

  const components = Object.entries(state).map(([placement, notices]) => {
    const top = placement.includes("top")
      ? "env(safe-area-inset-top, 0px)"
      : undefined
    const bottom = placement.includes("bottom")
      ? "env(safe-area-inset-bottom, 0px)"
      : undefined
    const right = !placement.includes("left")
      ? "env(safe-area-inset-right, 0px)"
      : undefined
    const left = !placement.includes("right")
      ? "env(safe-area-inset-left, 0px)"
      : undefined

    const css: CSSUIObject = {
      bottom,
      display: "flex",
      flexDirection: "column",
      gap,
      left,
      margin: gap,
      pointerEvents: "none",
      position: "fixed",
      right,
      top,
      zIndex: "fallback(zarbon, 160)",
    }

    return (
      <ui.ul
        key={placement}
        className={cx("ui-notice__list", `ui-notice__list--${placement}`)}
        __css={css}
        {...listProps}
      >
        <AnimatePresence initial={false}>
          {notices.map((notice) => (
            <NoticeComponent
              key={notice.id}
              variants={variants}
              itemProps={itemProps}
              {...notice}
            />
          ))}
        </AnimatePresence>
      </ui.ul>
    )
  })

  return (
    <Portal
      appendToParentPortal={appendToParentPortal}
      containerRef={containerRef}
    >
      {components}
    </Portal>
  )
}

const defaultVariants: Variants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
    x: 0,
    y: 0,
  },
  exit: ({ placement }) => {
    const distance = 200
    if (placement.includes("left")) {
      return {
        opacity: 0,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
        x: -distance,
      }
    }
    if (placement.includes("right")) {
      return {
        opacity: 0,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
        x: distance,
      }
    }
    if (placement.includes("top")) {
      return {
        opacity: 0,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
        y: -distance,
      }
    }
    return {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
      y: distance,
    }
  },
  initial: ({ placement }) => ({
    [["bottom", "top"].includes(placement) ? "y" : "x"]:
      (placement === "bottom" ? 1 : placement.includes("right") ? 1 : -1) * 24,
    opacity: 0,
  }),
}

interface NoticeComponentProps
  extends NoticeOptions,
    Pick<NoticeProviderProps, "itemProps" | "variants"> {}

const NoticeComponent = memo(
  ({
    style,
    closeStrategy,
    duration = 5000,
    isClosable,
    isDelete = false,
    message,
    placement,
    variants = defaultVariants,
    itemProps,
    onCloseComplete,
    onDelete,
  }: NoticeComponentProps) => {
    const [delay, setDelay] = useState(duration)
    const isPresent = useIsPresent()

    useUpdateEffect(() => {
      if (!isPresent) onCloseComplete?.()
    }, [isPresent])

    useUpdateEffect(() => {
      setDelay(duration)
    }, [duration])

    const onMouseEnter = () => setDelay(null)
    const onMouseLeave = () => setDelay(duration)

    const onClose = () => {
      if (isPresent) onDelete()
    }

    useEffect(() => {
      if (isPresent && isDelete) onDelete()
    }, [isPresent, isDelete, onDelete])

    useTimeout(onClose, delay)

    const getDragDirection = (placement: string) => {
      if (placement.includes("left") || placement.includes("right")) return "x"
      return "y"
    }

    const getDragConstraints = (placement: string) => {
      if (placement.includes("left")) return { right: 0 }
      if (placement.includes("right")) return { left: 0 }
      if (placement.includes("top")) return { bottom: 0 }
      return { top: 0 }
    }

    const isCloseByDragInfo = (info: PanInfo, placement: string) => {
      const dragVelocity = 100
      const dragOffset = 80

      if (placement.includes("left")) {
        return (
          info.velocity.x <= dragVelocity * -1 ||
          info.offset.x <= dragOffset * -1
        )
      }
      if (placement.includes("right")) {
        return info.velocity.x >= dragVelocity || info.offset.x >= dragOffset
      }
      if (placement.includes("top")) {
        return (
          info.velocity.y <= dragVelocity * -1 ||
          info.offset.y <= dragOffset * -1
        )
      }
      return info.velocity.y >= dragVelocity || info.offset.y >= dragOffset
    }

    const css: CSSUIObject = {
      maxW: "36rem",
      minW: "20rem",
      pointerEvents: "auto",
      ...style,
    }

    return (
      <motion.li
        className="ui-notice__list__item"
        style={
          {
            display: "flex",
            justifyContent: placement.includes("left")
              ? "flex-start"
              : placement.includes("right")
                ? "flex-end"
                : "center",
          } as MotionStyle
        }
        animate="animate"
        custom={{ placement }}
        drag={
          isClosable && closeStrategy === "element"
            ? getDragDirection(placement)
            : null
        }
        dragConstraints={getDragConstraints(placement)}
        dragElastic={0.1}
        dragMomentum={false}
        dragSnapToOrigin
        exit="exit"
        initial="initial"
        layout
        variants={variants}
        onDragEnd={(_, info) => {
          if (isCloseByDragInfo(info, placement)) onClose()
        }}
        onHoverEnd={onMouseLeave}
        onHoverStart={onMouseEnter}
        {...itemProps}
      >
        <ui.div className="ui-notice__list__item__inner" __css={css}>
          {runIfFunc(message, { closeStrategy, isClosable, onClose })}
        </ui.div>
      </motion.li>
    )
  },
)

NoticeComponent.__ui__ = "NoticeComponent"
