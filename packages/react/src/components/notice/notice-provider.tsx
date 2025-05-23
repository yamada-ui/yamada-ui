import type { ReactNode } from "react"
import type {
  CSSObject,
  HTMLStyledProps,
  ThemeConfig,
  ThemeProps,
} from "../../core"
import type { MotionStyledComponent } from "../motion"
import type { NoticeStyle } from "./notice.style"
import type { NoticeOptions } from "./types"
import { AnimatePresence } from "motion/react"
import { useMemo, useSyncExternalStore } from "react"
import { createSlotComponent, styled } from "../../core"
import { convertFromNoticePlacement, runIfFn } from "../../utils"
import { motion } from "../motion"
import { Portal } from "../portal"
import { noticeStore } from "./notice"
import { noticeStyle } from "./notice.style"
import { useNoticeState } from "./use-notice-state"

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
        itemProps,
        listProps,
      }),
      [
        appendToParentPortal,
        containerRef,
        gap,
        itemProps,
        listProps,
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
          const convertedPlacement = convertFromNoticePlacement(placement)

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
              itemProps={itemProps}
              listProps={listProps}
            />
          )
        }),
      [state, gap, itemProps, listProps, css],
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

export interface NoticeComponentProps
  extends Omit<MotionStyledComponent<"li">, "children" | keyof NoticeOptions>,
    NoticeOptions,
    Pick<NoticeProviderProps, "itemProps"> {
  convertedPlacement: string
}

const NoticeComponent = withContext<"li", NoticeComponentProps>((props) => {
  const {
    id,
    closable,
    closeOnDrag,
    convertedPlacement,
    duration = 5000,
    isDelete = false,
    message,
    title,
    itemProps,
    onCloseComplete,
    onDelete,
    ...rest
  } = props

  // Use the new composable hook
  const noticeState = useNoticeState({
    id,
    closable,
    closeOnDrag,
    duration,
    isDelete,
    message,
    title,
    itemProps,
    onCloseComplete,
    onDelete,
  })

  return (
    <motion.li
      id={id.toString()}
      {...noticeState.getListItemProps(convertedPlacement, rest)}
    >
      <NoticeListInnerItemComponent
        {...noticeState.getNoticeListInnerItemProps(convertedPlacement)}
      >
        {runIfFn(message, { id, onClose: noticeState.onClose })}
      </NoticeListInnerItemComponent>
    </motion.li>
  )
}, "listItem")()

interface NoticeListInnerItemProps extends HTMLStyledProps {}

const NoticeListInnerItemComponent = withContext<
  "div",
  NoticeListInnerItemProps
>(({ children, ...props }) => {
  return <styled.div {...props}>{children}</styled.div>
}, "noticeWrapper")()

interface NoticeListProps
  extends Omit<HTMLStyledProps<"ul">, "children" | "gap">,
    Pick<NoticeProviderProps, "itemProps" | "listProps"> {
  convertedPlacement: string
  notices: NoticeOptions[]
}

const NoticeListComponent = withContext<"ul", NoticeListProps>(
  ({ convertedPlacement, notices, itemProps, listProps, ...props }) => {
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
              // data-placement-bottom={convertedPlacement.includes("bottom")}
              // data-placement-center={convertedPlacement.includes("center")}
              // data-placement-left={convertedPlacement.includes("left")}
              // data-placement-right={convertedPlacement.includes("right")}
              // data-placement-top={convertedPlacement.includes("top")}
              convertedPlacement={convertedPlacement}
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
