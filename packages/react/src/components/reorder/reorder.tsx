"use client"

import type { PropsWithChildren, ReactElement } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { HTMLMotionProps } from "../motion"
import type { ReorderStyle } from "./reorder.style"
import type { UseReorderItemProps, UseReorderProps } from "./use-reorder"
import { Reorder as OriginalReorder } from "motion/react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { GripVerticalIcon } from "../icon"
import { reorderStyle } from "./reorder.style"
import {
  ReorderContext,
  ReorderItemContext,
  useReorder,
  useReorderItem,
  useReorderItemContext,
} from "./use-reorder"

export interface ReorderRootProps<Y = string>
  extends Merge<
      HTMLMotionProps<"ul">,
      Omit<UseReorderProps<Y>, "item" | "items" | "orientation">
    >,
    ThemeProps<ReorderStyle> {
  /**
   * If provided, generate reorder items based on items.
   *
   */
  items?: ReorderItemProps<Y>[]
}

export const {
  PropsContext: ReorderPropsContext,
  usePropsContext: useReorderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ReorderRootProps, ReorderStyle>("reorder", reorderStyle)

/**
 * `Reorder` is a component that allows you to change the order of items using drag and drop.
 *
 * @see https://yamada-ui.com/components/reorder
 */
export const ReorderRoot = withProvider<"ul", ReorderRootProps>(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>(props: ReorderRootProps<Y>) => {
    const orientation = useValue(props.orientation)
    const { children, getRootProps } = useReorder({
      ...props,
      item: <ReorderItem />,
      orientation,
    })

    return (
      <ReorderContext value={{ orientation }}>
        <styled.ul
          as={OriginalReorder.Group<Y>}
          {...(getRootProps() as HTMLStyledProps<"ul">)}
        >
          {children}
        </styled.ul>
      </ReorderContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)() as GenericsComponent<{
  <Y = string>(props: ReorderRootProps<Y>): ReactElement
}>

export interface ReorderItemProps<Y = string>
  extends Omit<
      Merge<HTMLMotionProps<"li">, UseReorderItemProps<Y>>,
      "children"
    >,
    PropsWithChildren {}

export const ReorderItem = withContext<"li", ReorderItemProps>(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>(props: ReorderItemProps<Y>) => {
    const { getItemProps, getTriggerProps } = useReorderItem(props)

    return (
      <ReorderItemContext value={{ getTriggerProps }}>
        <styled.li
          as={OriginalReorder.Item<Y>}
          {...(getItemProps() as HTMLStyledProps<"li">)}
        />
      </ReorderItemContext>
    )
  },
  "item",
)() as GenericsComponent<{
  <Y = string>(props: ReorderItemProps<Y>): ReactElement
}>

export interface ReorderTriggerProps extends HTMLStyledProps {}

export const ReorderTrigger = withContext<"div", ReorderTriggerProps>(
  "div",
  "trigger",
)(undefined, (props) => {
  const { getTriggerProps } = useReorderItemContext()

  return { children: <GripVerticalIcon />, ...getTriggerProps(props) }
})
