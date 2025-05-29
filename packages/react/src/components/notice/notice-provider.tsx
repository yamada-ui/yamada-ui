import type { Variants } from "motion/react"
import type { ReactNode } from "react"
import type {
  CSSObject,
  HTMLStyledProps,
  ThemeConfig,
  ThemeProps,
} from "../../core"
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
import { useTimeout } from "../../hooks/use-timeout"
import { runIfFn, toDirectionalPlacement, useUpdateEffect } from "../../utils"
import { Portal } from "../portal"
import { SlideFade } from "../slide"
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
    css,
    appendToParentPortal,
    children,
    closeOnDrag,
    closeStrategy,
    containerRef,
    gap = "0",
    variants,
    itemProps,
    listProps,
  }) => {
    const context = useMemo(
      () => ({
        appendToParentPortal,
        closeOnDrag,
        closeStrategy,
        containerRef,
        gap,
        variants,
        itemProps,
        listProps,
      }),
      [
        appendToParentPortal,
        containerRef,
        gap,
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

          const customCSS: CSSObject = {
            css,
            gap,
            margin: gap,
          }

          return (
            <NoticeListComponent
              key={placement}
              css={customCSS}
              data-placement={placement}
              convertedPlacement={convertedPlacement}
              notices={notices}
              variants={variants}
              itemProps={itemProps}
              listProps={listProps}
            />
          )
        }),
      [state, gap, variants, itemProps, listProps, css],
    )

    return (
      <NoticeContext value={context}>
        {children}
        <Portal
          appendToParentPortal={appendToParentPortal}
          containerRef={containerRef}
        >
          {components}
        </Portal>
      </NoticeContext>
    )
  },
)()

const getPlacementInitialValues = (placement: string) => {
  const convertedPlacement = toDirectionalPlacement(placement)

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
      console.warn(`Unexpected placement value: ${convertedPlacement}`)
      return { x: 0, y: -100 }
  }
}

const getPlacementExitValues = (closeOnDrag: boolean, placement: string) => {
  const convertedPlacement = toDirectionalPlacement(placement)

  // If closeOnDrag is enabled, simulate a "swipe away" exit animation
  // with more pronounced movement in the natural drag direction
  if (closeOnDrag) {
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

  // If closeOnDrag is not enabled, use more subtle exit animations
  // that still respect the natural direction based on placement
  switch (convertedPlacement) {
    case "top-left":
      return { x: -40, y: -10 }
    case "top-center":
      return { x: 0, y: -40 }
    case "top-right":
      return { x: 40, y: -10 }
    case "bottom-left":
      return { x: -40, y: 10 }
    case "bottom-center":
      return { x: 0, y: 40 }
    case "bottom-right":
      return { x: 40, y: 10 }
    default:
      return { x: 0, y: -40 }
  }
}

const _: Variants = {
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
  exit: ({ closeOnDrag, placement }) => ({
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
    ...getPlacementExitValues(closeOnDrag, placement),
  }),
  initial: ({ placement }) => ({
    opacity: 0,
    ...getPlacementInitialValues(placement),
  }),
}

export interface NoticeComponentProps
  extends Omit<MotionStyledComponent<"li">, "children" | keyof NoticeOptions>,
    NoticeOptions,
    Pick<NoticeProviderProps, "itemProps" | "variants"> {
  convertedPlacement: string
}

const NoticeComponent = withContext<"li", NoticeComponentProps>(
  ({
    id,
    closable,
    closeOnDrag,
    convertedPlacement,
    duration = 5000,
    isDelete = false,
    message,
    // placement = "start-center",
    title,
    // variants = defaultVariants,
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

    const offsetX = useMemo(() => {
      switch (convertedPlacement) {
        case "top-left":
        case "bottom-left":
          return -100
        case "top-right":
        case "bottom-right":
          return 100
        default:
          return 0
      }
    }, [convertedPlacement])

    const offsetY = useMemo(() => {
      switch (convertedPlacement) {
        case "top-center":
          return -100
        case "bottom-center":
          return 100
        default:
          return 0
      }
    }, [convertedPlacement])

    return (
      <SlideFade
        id={id.toString()}
        drag={drag}
        dragConstraints={getDragRestriction(dragConstraints)}
        dragElastic={getDragRestriction(dragElastic)}
        dragMomentum={false}
        dragSnapToOrigin={dragClosable}
        layout
        offsetX={offsetX}
        offsetY={offsetY}
        open
        title={title?.toString()}
        onDragEnd={handleDragEnd}
        onHoverEnd={onMouseLeave}
        onHoverStart={onMouseEnter}
        {...rest}
        {...props}
      >
        <NoticeListInnerItemComponent
          data-placement-bottom={convertedPlacement.includes("bottom")}
          data-placement-center={convertedPlacement.includes("center")}
          data-placement-left={convertedPlacement.includes("left")}
          data-placement-right={convertedPlacement.includes("right")}
          data-placement-top={convertedPlacement.includes("top")}
        >
          {runIfFn(message, { id, onClose })}
        </NoticeListInnerItemComponent>
      </SlideFade>
    )

    // return (
    //   <motion.li
    //     id={id.toString()}
    //     animate="animate"
    //     custom={{ closeOnDrag, convertedPlacement, placement }}
    //     drag={drag}
    //     dragConstraints={getDragRestriction(dragConstraints)}
    //     dragElastic={getDragRestriction(dragElastic)}
    //     dragMomentum={false}
    //     dragSnapToOrigin={dragClosable}
    //     exit="exit"
    //     initial="initial"
    //     layout
    //     title={title?.toString()}
    //     variants={variants}
    //     onDragEnd={handleDragEnd}
    //     onHoverEnd={onMouseLeave}
    //     onHoverStart={onMouseEnter}
    //     {...rest}
    //     {...props}
    //   >
    //     <NoticeListInnerItemComponent
    //       data-placement-bottom={convertedPlacement.includes("bottom")}
    //       data-placement-center={convertedPlacement.includes("center")}
    //       data-placement-left={convertedPlacement.includes("left")}
    //       data-placement-right={convertedPlacement.includes("right")}
    //       data-placement-top={convertedPlacement.includes("top")}
    //     >
    //       {runIfFn(message, { id, onClose })}
    //     </NoticeListInnerItemComponent>
    //   </motion.li>
    // )
  },
  "listItem",
)()

interface NoticeListInnerItemProps extends HTMLStyledProps {}

const NoticeListInnerItemComponent = withContext<
  "div",
  NoticeListInnerItemProps
>(({ children, ...props }) => {
  return <styled.div {...props}>{children}</styled.div>
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
    const sortedNotices = useMemo(() => {
      return notices.sort((a, b) => {
        const idA = Number.isNaN(Number(a.id)) ? Number(a.id) : Number(a.id)
        const idB = Number.isNaN(Number(b.id)) ? Number(b.id) : Number(b.id)
        return idB - idA
      })
    }, [notices])
    return (
      <styled.ul
        style={{
          "--length": sortedNotices.length,
        }}
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
              style={{
                "--index": index,
              }}
              data-placement-bottom={convertedPlacement.includes("bottom")}
              data-placement-center={convertedPlacement.includes("center")}
              data-placement-left={convertedPlacement.includes("left")}
              data-placement-right={convertedPlacement.includes("right")}
              data-placement-top={convertedPlacement.includes("top")}
              convertedPlacement={convertedPlacement}
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
