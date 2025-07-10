import type { Variants } from "motion/react"
import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeConfig, ThemeProps } from "../../core"
import type { HTMLMotionProps, MotionStyledComponent } from "../motion"
import type { NoticeStyle } from "./notice.style"
import type { DragEndEventHandler, NoticeOptions } from "./types"
import { AnimatePresence, useIsPresent } from "motion/react"
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react"
import { createSlotComponent, styled } from "../../core"
import { useHover } from "../../hooks/use-hover"
import { useTimeout } from "../../hooks/use-timeout"
import { runIfFn, toDirectionalPlacement, useUpdateEffect } from "../../utils"
import { motion } from "../motion"
import { Portal } from "../portal"
import { noticeStore } from "./notice"
import { noticeStyle } from "./notice.style"

export interface NoticeProviderProps
  extends Omit<HTMLStyledProps, keyof Required<ThemeConfig>["notice"]>,
    Omit<Required<ThemeConfig>["notice"], "options">,
    ThemeProps<NoticeStyle> {}

interface NoticeProviderContext extends NoticeProviderProps {
  children?: ReactNode
}

export const {
  ComponentContext: NoticeContext,
  PropsContext: NoticePropsContext,
  useComponentContext: useNoticeContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  NoticeProviderProps,
  NoticeStyle,
  NoticeProviderContext
>("notice", noticeStyle)

export const NoticeProvider = withProvider<"div", NoticeProviderProps>(
  ({
    children,
    closeOnDrag,
    closeStrategy,
    containerRef,
    variants,
    itemProps,
    listProps,
  }) => {
    const context = useMemo(
      () => ({
        closeOnDrag,
        closeStrategy,
        containerRef,
        variants,
        itemProps,
        listProps,
      }),
      [
        containerRef,
        itemProps,
        listProps,
        variants,
        closeOnDrag,
        closeStrategy,
      ],
    )
    const state = useSyncExternalStore(
      noticeStore.subscribe,
      noticeStore.getSnapshot,
      noticeStore.getSnapshot,
    )

    const components = useMemo(
      () =>
        Object.entries(state).map(([placement, notices]) => {
          const convertedPlacement = toDirectionalPlacement(placement)

          return (
            <NoticeListComponent
              key={placement}
              data-placement={placement}
              convertedPlacement={convertedPlacement}
              notices={notices}
              variants={variants}
              itemProps={itemProps}
              listProps={listProps}
            />
          )
        }),
      [state, variants, itemProps, listProps],
    )

    return (
      <NoticeContext value={context}>
        {children}
        <Portal containerRef={containerRef}>{components}</Portal>
      </NoticeContext>
    )
  },
)()

const getPlacementInitialValues = (
  convertedPlacement:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right",
) => {
  switch (convertedPlacement) {
    case "top-left":
      return { x: -100, y: 0 }
    case "top-center":
      return { x: 0, y: -100 }
    case "top-right":
      return { x: 100, y: 0 }
    case "bottom-left":
      return { x: -100, y: 0 }
    case "bottom-center":
      return { x: 0, y: 100 }
    case "bottom-right":
      return { x: 100, y: 0 }
    default:
      return { x: 0, y: -100 }
  }
}

const getPlacementExitValues = (
  convertedPlacement:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right",
) => {
  switch (convertedPlacement) {
    case "top-left":
      return { x: -200, y: 0 }
    case "top-center":
      return { x: 0, y: -200 }
    case "top-right":
      return { x: 200, y: 0 }
    case "bottom-left":
      return { x: -200, y: 0 }
    case "bottom-center":
      return { x: 0, y: 200 }
    case "bottom-right":
      return { x: 200, y: 0 }
    default:
      return { x: 0, y: -200 }
  }
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
  exit: ({ convertedPlacement }) => ({
    opacity: 0.5,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
    ...getPlacementExitValues(convertedPlacement),
  }),
  initial: ({ convertedPlacement }) => ({
    opacity: 0,
    ...getPlacementInitialValues(convertedPlacement),
  }),
}

export interface NoticeComponentProps
  extends Omit<MotionStyledComponent<"li">, "children" | keyof NoticeOptions>,
    NoticeOptions,
    Pick<NoticeProviderProps, "itemProps" | "variants"> {
  convertedPlacement: string
  hovered: boolean
  index: number
  length: number
}

const NoticeComponent = withContext<"li", NoticeComponentProps>(
  ({
    id,
    closable,
    closeOnDrag,
    convertedPlacement,
    duration = 5000,
    hovered,
    index,
    isDelete = false,
    length,
    message,
    placement = "start-center",
    title,
    variants = defaultVariants,
    itemProps,
    onCloseComplete,
    onDelete,
    ...props
  }) => {
    const [delay, setDelay] = useState(duration)
    const isPresent = useIsPresent()

    const {
      dragConstraints = 0,
      dragElastic = 0.1,
      dragOffset = 80,
      dragVelocity = 100,
      ...rest
    } = itemProps ?? {}

    const context = useNoticeContext()

    const dragClosable = useMemo(() => {
      return (
        (closeOnDrag ?? context.closeOnDrag) && (closable ?? context.closable)
      )
    }, [closeOnDrag, closable, context.closeOnDrag, context.closable])

    useUpdateEffect(() => {
      if (!isPresent) {
        onCloseComplete?.()
      }
    }, [isPresent])

    useUpdateEffect(() => {
      setDelay(duration)
    }, [duration])

    const onMouseEnter = useCallback(() => {
      setDelay(null)
    }, [])
    const onMouseLeave = useCallback(() => {
      setDelay(duration)
    }, [duration])

    const onClose = useCallback(() => {
      if (isPresent) {
        onDelete()
      }
    }, [isPresent, onDelete])

    useEffect(() => {
      if (isPresent && isDelete) {
        onDelete()
      }
    }, [isPresent, isDelete, onDelete])

    useTimeout(onClose, delay)

    const drag = useMemo<HTMLMotionProps["drag"]>(() => {
      if (!dragClosable) {
        return false
      }

      switch (convertedPlacement) {
        case "top-center":
        case "bottom-center": {
          return "y"
        }
        case "top-left":
        case "top-right":
        case "bottom-left":
        case "bottom-right": {
          return "x"
        }
      }
    }, [dragClosable, convertedPlacement])

    const getDragRestriction = useCallback(
      (value: number) => {
        switch (convertedPlacement) {
          case "top-center": {
            return { bottom: value }
          }
          case "bottom-center": {
            return { top: value }
          }
          case "top-left":
          case "bottom-left": {
            return { right: value }
          }
          case "top-right":
          case "bottom-right": {
            return { left: value }
          }
        }
      },
      [convertedPlacement],
    )

    const handleDragEnd: DragEndEventHandler = useCallback(
      (event, info) => {
        switch (convertedPlacement) {
          case "top-center": {
            if (
              info.velocity.y <= dragVelocity * -1 ||
              info.offset.y <= dragOffset * -1
            ) {
              onDelete()
            }
            break
          }

          case "bottom-center": {
            if (
              info.velocity.y >= dragVelocity ||
              info.offset.y >= dragOffset
            ) {
              onDelete()
            }
            break
          }

          case "top-left":
          case "bottom-left": {
            if (
              info.velocity.x <= dragVelocity * -1 ||
              info.offset.x <= dragOffset * -1
            ) {
              onDelete()
            }
            break
          }

          case "top-right":
          case "bottom-right": {
            if (
              info.velocity.x >= dragVelocity ||
              info.offset.x >= dragOffset
            ) {
              onDelete()
            }
            break
          }
        }
        return { event, info }
      },
      [convertedPlacement, dragVelocity, dragOffset, onDelete],
    )

    const isBottom = convertedPlacement.includes("bottom")
    const ySign = isBottom ? 1 : -1

    const y =
      index > 0 && !hovered
        ? `calc(${index * ySign * 100}% + ${index * (isBottom ? -20 : 20)}px)`
        : "0px"
    const scaleX = index > 0 && !hovered ? Math.max(1 - index * 0.1, 0) : 1

    return (
      <motion.li
        id={id.toString()}
        as="li"
        animate="animate"
        custom={{ closeOnDrag, convertedPlacement, placement }}
        drag={drag}
        dragConstraints={getDragRestriction(dragConstraints)}
        dragElastic={getDragRestriction(dragElastic)}
        dragMomentum={false}
        dragSnapToOrigin={dragClosable}
        exit="exit"
        initial="initial"
        layout
        title={title?.toString()}
        variants={variants}
        zIndex={length - index}
        onDragEnd={handleDragEnd}
        onHoverEnd={onMouseLeave}
        onHoverStart={onMouseEnter}
        {...rest}
        {...props}
      >
        <NoticeListInnerItemComponent
          data-expanded={hovered}
          data-placement-bottom={convertedPlacement.includes("bottom")}
          data-placement-top={convertedPlacement.includes("top")}
          animate={{ scaleX, y }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {runIfFn(message, { id, onClose })}
        </NoticeListInnerItemComponent>
      </motion.li>
    )
  },
  "listItem",
)()

interface NoticeListInnerItemProps extends HTMLMotionProps {}

const NoticeListInnerItemComponent = withContext<
  "div",
  NoticeListInnerItemProps
>(({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}, "noticeWrapper")()

interface NoticeListProps
  extends Omit<HTMLStyledProps<"ul">, "children" | "gap">,
    Pick<NoticeProviderProps, "itemProps" | "listProps" | "variants"> {
  convertedPlacement: string
  notices: NoticeOptions[]
}

const NoticeListComponent = withContext<"ul", NoticeListProps>(
  ({
    convertedPlacement,
    notices,
    variants,
    itemProps,
    listProps,
    ...props
  }) => {
    const { ref, hovered } = useHover<HTMLUListElement>()

    const sortedNotices = useMemo(() => {
      return notices.sort((a, b) => {
        const idA = Number.isNaN(Number(a.id)) ? Number(a.id) : Number(a.id)
        const idB = Number.isNaN(Number(b.id)) ? Number(b.id) : Number(b.id)
        return idB - idA
      })
    }, [notices])

    return (
      <styled.ul
        ref={ref}
        data-group=""
        data-placement-bottom={convertedPlacement.includes("bottom")}
        data-placement-center={convertedPlacement.includes("center")}
        data-placement-left={convertedPlacement.includes("left")}
        data-placement-right={convertedPlacement.includes("right")}
        data-placement-top={convertedPlacement.includes("top")}
        {...listProps}
        {...props}
      >
        <AnimatePresence initial={false}>
          {sortedNotices.map((notice, index) => (
            <NoticeComponent
              key={notice.id}
              convertedPlacement={convertedPlacement}
              hovered={hovered}
              index={index}
              length={sortedNotices.length}
              variants={variants}
              itemProps={itemProps}
              {...notice}
            />
          ))}
        </AnimatePresence>
      </styled.ul>
    )
  },
  "list",
)()
