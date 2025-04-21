import type { Variants } from "motion/react"
import type { ReactNode } from "react"
import type {
  CSSObject,
  HTMLStyledProps,
  ThemeConfig,
  ThemeProps,
} from "../../core"
import type { HTMLMotionProps, MotionStyledComponent } from "../motion"
import type { NoticeOptions } from "./notice"
import type { NoticeStyle } from "./notice.style"
import type { DragEndEventHandler } from "./types"
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
import {
  convertFromNoticePlacement,
  runIfFn,
  useUpdateEffect,
} from "../../utils"
import { motion } from "../motion"
import { Portal } from "../portal"
import { noticeStore } from "./notice"
import { noticeStyle } from "./notice.style"

export interface NoticeProviderProps
  extends Omit<HTMLStyledProps, keyof Required<ThemeConfig>["notice"]>,
    Omit<Required<ThemeConfig>["notice"], "options">,
    ThemeProps<NoticeStyle> {
  /**
   * The variants of the notice.
   * Check the docs to see the variants of possible modifiers you can pass.
   *
   * @see Docs https://motion.dev/docs/react-animation#variants
   */
  variants?: Variants
  /**
   * Props for notice item element.
   */
  itemProps?: MotionStyledComponent<"li">
  /**
   * Props for notice list element.
   */
  listProps?: HTMLStyledProps<"ul">
}

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
    dragConstraints,
    dragElastic,
    dragOffset,
    dragVelocity,
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
        dragConstraints,
        dragElastic,
        dragOffset,
        dragVelocity,
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
        dragConstraints,
        dragElastic,
        dragOffset,
        dragVelocity,
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
          const convertedPlacement = convertFromNoticePlacement(placement)

          const customCSS: CSSObject = {
            gap,
            margin: gap,
          }

          return (
            <NoticeListComponent
              key={placement}
              css={customCSS}
              data-placement={placement}
              convertedPlacement={convertedPlacement}
              innerCSS={css}
              notices={notices}
              variants={variants}
              itemProps={itemProps}
              listProps={listProps}
            />
          )
        }),
      [state, gap, css, variants, itemProps, listProps],
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

interface PlacementValues {
  x: number
  y: number
}

const getPlacementInitialValues = (placement: string): PlacementValues => {
  const convertedPlacement = convertFromNoticePlacement(placement)

  switch (convertedPlacement) {
    case "top-left":
      return { x: -24, y: 0 }
    case "top-center":
      return { x: 0, y: -24 }
    case "top-right":
      return { x: 24, y: 0 }
    case "bottom-left":
      return { x: -24, y: 0 }
    case "bottom-center":
      return { x: 0, y: 24 }
    case "bottom-right":
      return { x: 24, y: 0 }
    default:
      console.warn(`Unexpected placement value: ${convertedPlacement}`)
      return { x: 0, y: -24 }
  }
}

const getPlacementExitValues = (
  closeOnDrag: boolean,
  placement: string,
): PlacementValues => {
  const convertedPlacement = convertFromNoticePlacement(placement)

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

interface NoticeComponentProps
  extends Omit<MotionStyledComponent<"li">, "children" | keyof NoticeOptions>,
    NoticeOptions,
    Pick<NoticeProviderProps, "itemProps" | "variants"> {
  convertedPlacement: string
  innerCSS: CSSObject | CSSObject[] | undefined
}

const NoticeComponent = withContext<"li", NoticeComponentProps>(
  ({
    id,
    style,
    closable,
    closeOnDrag,
    convertedPlacement,
    dragConstraints = 0,
    dragElastic = 0.1,
    dragOffset = 80,
    dragVelocity = 100,
    duration = 5000,
    innerCSS,
    isDelete = false,
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

    const context = useNoticeContext()

    const dragClosable =
      (closeOnDrag ?? context.closeOnDrag) && (closable ?? context.closable)

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

    const drag = useMemo<HTMLMotionProps["drag"]>(() => {
      if (!dragClosable) return false

      switch (convertedPlacement) {
        case "top-center":
        case "bottom-center":
          return "y"
        case "top-left":
        case "top-right":
        case "bottom-left":
        case "bottom-right":
          return "x"
      }
    }, [dragClosable, convertedPlacement])

    const getDragRestriction = useCallback(
      (value: number) => {
        switch (convertedPlacement) {
          case "top-center":
            return { bottom: value }
          case "bottom-center":
            return { top: value }
          case "top-left":
          case "bottom-left":
            return { right: value }
          case "top-right":
          case "bottom-right":
            return { left: value }
        }
      },
      [convertedPlacement],
    )

    const onDragEnd: DragEndEventHandler = useCallback(
      (_, info) => {
        switch (convertedPlacement) {
          case "top-center":
            if (
              info.velocity.y <= dragVelocity * -1 ||
              info.offset.y <= dragOffset * -1
            )
              onDelete()
            break

          case "bottom-center":
            if (info.velocity.y >= dragVelocity || info.offset.y >= dragOffset)
              onDelete()
            break

          case "top-left":
          case "bottom-left":
            if (
              info.velocity.x <= dragVelocity * -1 ||
              info.offset.x <= dragOffset * -1
            )
              onDelete()
            break

          case "top-right":
          case "bottom-right":
            if (info.velocity.x >= dragVelocity || info.offset.x >= dragOffset)
              onDelete()
            break
        }
      },
      [convertedPlacement, dragVelocity, dragOffset, onDelete],
    )

    return (
      <motion.li
        id={id.toString()}
        style={{
          ...style,
        }}
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
        onDragEnd={onDragEnd}
        onHoverEnd={onMouseLeave}
        onHoverStart={onMouseEnter}
        {...itemProps}
        {...props}
      >
        <NoticeListInnerItemComponent
          css={innerCSS}
          data-placement-bottom={convertedPlacement.includes("bottom")}
          data-placement-center={convertedPlacement.includes("center")}
          data-placement-left={convertedPlacement.includes("left")}
          data-placement-right={convertedPlacement.includes("right")}
          data-placement-top={convertedPlacement.includes("top")}
        >
          {runIfFn(message, { onClose })}
        </NoticeListInnerItemComponent>
      </motion.li>
    )
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
  innerCSS: CSSObject | undefined
  notices: NoticeOptions[]
}

const NoticeListComponent = withContext<"ul", NoticeListProps>(
  ({
    convertedPlacement,
    innerCSS,
    notices,
    variants,
    itemProps,
    listProps,
    ...props
  }) => {
    return (
      <styled.ul
        style={{
          "--length": notices.length,
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
          {notices.map((notice, index) => (
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
              innerCSS={{ ...innerCSS }}
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
