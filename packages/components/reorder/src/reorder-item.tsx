import type { ComponentArgs, CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { HTMLMotionProps } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import type {
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from "react"
import { ui } from "@yamada-ui/core"
import {
  MotionReorder,
  useDragControls,
  useMotionValue,
} from "@yamada-ui/motion"
import { cx, dataAttr } from "@yamada-ui/utils"
import { forwardRef, useCallback, useEffect, useState } from "react"
import { ReorderItemProvider, useReorderContext } from "./reorder-context"

interface ReorderItemOptions<Y extends any = string> {
  /**
   * The value of the reorder item.
   */
  value: Y
  /**
   * The label of the reorder item.
   */
  label?: ReactNode
}

export interface ReorderItemProps<Y extends any = string>
  extends Omit<
      Merge<HTMLUIProps<"li">, HTMLMotionProps<"li">>,
      "children" | "transition" | "value"
    >,
    PropsWithChildren,
    ReorderItemOptions<Y> {}

export const ReorderItem = forwardRef(
  <Y extends any = string>(
    { className, children, label, value, ...rest }: ReorderItemProps<Y>,
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
      <ReorderItemProvider value={{ dragControls, isDrag, register }}>
        <ui.li
          ref={ref}
          as={MotionReorder.Item}
          className={cx("ui-reorder__item", className)}
          value={value}
          __css={css}
          {...rest}
          style={{ ...rest.style, x, y }}
          dragControls={dragControls}
          dragListener={!hasTrigger}
          data-selected={dataAttr(isDrag)}
        >
          {children ?? label}
        </ui.li>
      </ReorderItemProvider>
    )
  },
) as {
  <Y = string>(
    props: RefAttributes<HTMLLIElement> & ReorderItemProps<Y>,
  ): JSX.Element
} & ComponentArgs

ReorderItem.displayName = "ReorderItem"
