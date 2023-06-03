import { ui, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import {
  MotionReorder,
  HTMLMotionProps,
  useMotionValue,
  useDragControls,
  DragControls,
} from '@yamada-ui/motion'
import { createContext, cx, dataAttr } from '@yamada-ui/utils'
import { forwardRef, useCallback, useEffect, useState } from 'react'
import { useReorderContext } from './reorder'

type ReorderItemContext = {
  register: (node: HTMLElement | null) => void
  isDrag: boolean
  dragControls: DragControls
}

export const [ReorderItemProvider, useReorderItemContext] = createContext<ReorderItemContext>({
  name: 'ReorderContext',
  errorMessage: `useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`,
})

type ReorderItemOptions = {
  label: string | number
}

export type ReorderItemProps = Omit<HTMLUIProps<'li'>, 'as'> &
  Omit<HTMLMotionProps<'li'>, 'as' | 'layout'> &
  ReorderItemOptions

export const ReorderItem = forwardRef<HTMLLIElement, ReorderItemProps>(
  ({ className, label, ...rest }, ref) => {
    const { orientation, styles } = useReorderContext()

    const dragControls = useDragControls()

    const [hasTrigger, setHasTrigger] = useState<boolean>(false)
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const register = useCallback((node: HTMLElement | null) => setHasTrigger(!!node), [])

    useEffect(() => {
      x.onChange((subscription) => {
        if (orientation === 'horizontal') setIsDrag(subscription !== 0)
      })
      y.onChange((subscription) => {
        if (orientation === 'vertical') setIsDrag(subscription !== 0)
      })

      return () => {
        x.destroy()
        y.destroy()
      }
    }, [orientation, x, y])

    const css: CSSUIObject = {
      ...(!hasTrigger ? { cursor: 'grab' } : { userSelect: 'none' }),
      ...styles.item,
      ...(!hasTrigger
        ? { _selected: { ...(styles.item as any)?._selected, cursor: 'grabbing' } }
        : {}),
    }

    return (
      <ReorderItemProvider value={{ register, isDrag, dragControls }}>
        <ui.li
          ref={ref}
          as={MotionReorder.Item}
          className={cx('ui-reorder-item', className)}
          value={label}
          __css={css}
          {...rest}
          dragListener={!hasTrigger}
          dragControls={dragControls}
          data-selected={dataAttr(isDrag)}
          style={{ ...rest.style, x, y }}
        />
      </ReorderItemProvider>
    )
  },
)

ReorderItem.displayName = 'ReorderItem'
