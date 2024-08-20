import type { HTMLUIProps, CSSUIObject, ComponentArgs } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { HTMLMotionProps, DragControls } from "@yamada-ui/motion"
import {
  MotionReorder,
  useMotionValue,
  useDragControls,
} from "@yamada-ui/motion"
import { createContext, cx, dataAttr } from "@yamada-ui/utils"
import type { Merge } from "@yamada-ui/utils"
import type { ForwardedRef, PropsWithChildren, ReactNode } from "react"
import { forwardRef, useCallback, useEffect, useState } from "react"
import { useReorderContext } from "./reorder"

type ReorderItemContext = {
  register: (node: HTMLElement | null) => void
  isDrag: boolean
  dragControls: DragControls
}

export const [ReorderItemProvider, useReorderItemContext] =
  createContext<ReorderItemContext>({
    name: "ReorderContext",
    errorMessage: `useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`,
  })

type ReorderItemOptions<Y extends any = string> = {
  /**
   * The label of the reorder item.
   */
  label?: ReactNode
  /**
   * The value of the reorder item.
   */
  value: Y
}

export type ReorderItemProps<Y extends any = string> = Omit<
  Merge<HTMLUIProps<"li">, HTMLMotionProps<"li">>,
  "value" | "children"
> &
  PropsWithChildren &
  ReorderItemOptions<Y>

export const ReorderItem = forwardRef(
  <Y extends any = string>(
    { className, label, value, children, ...rest }: ReorderItemProps<Y>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { orientation, styles } = useReorderContext()

    const dragControls = useDragControls()

    const [hasTrigger, setHasTrigger] = useState<boolean>(false)
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const register = useCallback(
      (node: HTMLElement | null) => setHasTrigger(!!node),
      [],
    )

    useEffect(() => {
      const unsubscribeX = x.on("change", (x) => {
        if (orientation === "horizontal") setIsDrag(x !== 0)
      })
      const unsubscribeY = y.on("change", (y) => {
        if (orientation === "vertical") setIsDrag(y !== 0)
      })

      return () => {
        unsubscribeX()
        unsubscribeY()
      }
    }, [orientation, x, y])

    const css: CSSUIObject = {
      _selected: {
        cursor: "grabbing",
      },
      ...(!hasTrigger ? { cursor: "grab" } : { userSelect: "none" }),
      ...styles.item,
      ...(!hasTrigger
        ? {
            _selected: {
              ...styles.item?._selected,
              cursor: "grabbing",
            },
          }
        : {}),
    }

    return (
      <ReorderItemProvider value={{ register, isDrag, dragControls }}>
        <ui.li
          ref={ref}
          as={MotionReorder.Item}
          className={cx("ui-reorder__item", className)}
          value={value}
          __css={css}
          {...rest}
          dragListener={!hasTrigger}
          dragControls={dragControls}
          data-selected={dataAttr(isDrag)}
          style={{ ...rest.style, x, y }}
        >
          {children ?? label}
        </ui.li>
      </ReorderItemProvider>
    )
  },
) as {
  <Y extends any = string>(
    props: ReorderItemProps<Y> & { ref?: ForwardedRef<HTMLLIElement> },
  ): JSX.Element
} & ComponentArgs

ReorderItem.displayName = "ReorderItem"
