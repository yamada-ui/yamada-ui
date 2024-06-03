import type { CSSUIObject, ThemeConfig } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { MotionVariants, MotionStyle } from "@yamada-ui/motion"
import { AnimatePresence, motion, useIsPresent } from "@yamada-ui/motion"
import { Portal } from "@yamada-ui/portal"
import { useTimeout } from "@yamada-ui/use-timeout"
import { cx, runIfFunc, useUpdateEffect } from "@yamada-ui/utils"
import type { FC } from "react"
import { memo, useEffect, useState, useSyncExternalStore } from "react"
import type { NoticeOptions } from "./notice"
import { noticeStore } from "./notice"

export type NoticeProviderProps = Omit<
  Required<ThemeConfig>["notice"],
  "options"
>

export const NoticeProvider: FC<NoticeProviderProps> = ({
  variants,
  gap = "fallback(4, 1rem)",
  appendToParentPortal,
  containerRef,
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
      position: "fixed",
      zIndex: "fallback(zarbon, 160)",
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      margin: gap,
      gap,
      top,
      bottom,
      right,
      left,
    }

    return (
      <ui.ul
        key={placement}
        className={cx("ui-notice__list", `ui-notice__list--${placement}`)}
        __css={css}
      >
        <AnimatePresence initial={false}>
          {notices.map((notice) => (
            <NoticeComponent key={notice.id} variants={variants} {...notice} />
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

const defaultVariants: MotionVariants = {
  initial: ({ placement }) => ({
    opacity: 0,
    [["top", "bottom"].includes(placement) ? "y" : "x"]:
      (placement === "bottom" ? 1 : placement.includes("right") ? 1 : -1) * 24,
  }),
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
}

type NoticeComponentProps = NoticeOptions &
  Pick<NoticeProviderProps, "variants">

const NoticeComponent = memo(
  ({
    variants = defaultVariants,
    placement,
    duration = 5000,
    message,
    onCloseComplete,
    isDelete = false,
    onDelete,
    style,
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

    const css: CSSUIObject = {
      pointerEvents: "auto",
      maxW: "36rem",
      minW: "20rem",
      ...style,
    }

    return (
      <motion.li
        layout
        className="ui-notice__item"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        onHoverStart={onMouseEnter}
        onHoverEnd={onMouseLeave}
        custom={{ placement }}
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
      >
        <ui.div className="ui-notice__item-inner" __css={css}>
          {runIfFunc(message, { onClose })}
        </ui.div>
      </motion.li>
    )
  },
)

NoticeComponent.displayName = "NoticeComponent"
