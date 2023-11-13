import { ui, HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import {
  MotionReorder,
  HTMLMotionProps,
  useMotionValue,
  useDragControls,
  DragControls,
} from "@yamada-ui/motion"
import { createContext, cx, dataAttr } from "@yamada-ui/utils"
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

type ReorderItemOptions = {
  /**
   * The label of the reorder item.
   */
  label: string | number
}

export type ReorderItemProps = Omit<HTMLUIProps<"li">, "as"> &
  Omit<HTMLMotionProps<"li">, "as" | "layout"> &
  ReorderItemOptions

export const ReorderItem = forwardRef<HTMLLIElement, ReorderItemProps>(
  ({ className, label, ...rest }, ref) => {
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
      ...(!hasTrigger ? { cursor: "grab" } : { userSelect: "none" }),
      ...styles.item,
      ...(!hasTrigger
        ? {
            _selected: {
              ...(styles.item as any)?._selected,
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
          value={label}
          __css={css}
          {...rest}
          // @ts-ignore
          dragListener={!hasTrigger}
          dragControls={dragControls}
          data-selected={dataAttr(isDrag)}
          style={{ ...rest.style, x, y }}
        />
      </ReorderItemProvider>
    )
  },
)

ReorderItem.displayName = "ReorderItem"
