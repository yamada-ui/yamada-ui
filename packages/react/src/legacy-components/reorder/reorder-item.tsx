import type { HTMLMotionProps } from "motion/react"
import type {
  ForwardedRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, HTMLUIProps } from "../../core"
import type { Merge } from "../../utils"
import { Reorder, useDragControls, useMotionValue } from "motion/react"
import { forwardRef, useCallback, useEffect, useState } from "react"
import { ui } from "../../core"
import { cx, dataAttr } from "../../utils"
import { ReorderItemProvider, useReorderContext } from "./reorder-context"

interface ReorderItemOptions<Y = string> {
  /**
   * The value of the reorder item.
   */
  value: Y
  /**
   * The label of the reorder item.
   */
  label?: ReactNode
}

export interface ReorderItemProps<Y = string>
  extends Omit<
      Merge<HTMLUIProps<"li">, HTMLMotionProps<"li">>,
      "children" | "transition" | "value"
    >,
    PropsWithChildren,
    ReorderItemOptions<Y> {}

export const ReorderItem = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>(
    { className, children, label, value, ...rest }: ReorderItemProps<Y>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { orientation, styles } = useReorderContext()

    const dragControls = useDragControls()

    const [hasTrigger, setHasTrigger] = useState<boolean>(false)
    const [drag, setDrag] = useState<boolean>(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const register = useCallback(
      (node: HTMLElement | null) => setHasTrigger(!!node),
      [],
    )

    useEffect(() => {
      const unsubscribeX = x.on("change", (x) => {
        if (orientation === "horizontal") setDrag(x !== 0)
      })
      const unsubscribeY = y.on("change", (y) => {
        if (orientation === "vertical") setDrag(y !== 0)
      })

      return () => {
        unsubscribeX()
        unsubscribeY()
      }
    }, [orientation, x, y])

    return (
      <ReorderItemProvider value={{ drag, dragControls, register }}>
        <ui.li
          ref={ref}
          as={Reorder.Item}
          className={cx("ui-reorder__item", className)}
          value={value}
          __css={{
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
          }}
          {...rest}
          style={{ ...rest.style, x, y }}
          data-selected={dataAttr(drag)}
          dragControls={dragControls}
          dragListener={!hasTrigger}
        >
          {children ?? label}
        </ui.li>
      </ReorderItemProvider>
    )
  },
) as {
  <Y = string>(
    props: RefAttributes<HTMLLIElement> & ReorderItemProps<Y>,
  ): ReactElement
} & ComponentArgs

ReorderItem.displayName = "ReorderItem"
ReorderItem.__ui__ = "ReorderItem"
