import { forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { PopoverContent } from '@yamada-ui/overlay'
import { cx, handlerAll, mergeRefs } from '@yamada-ui/utils'
import { KeyboardEvent, KeyboardEventHandler, useCallback } from 'react'
import { useSelect, useSelectDescendantsContext } from './'

export type SelectListProps = HTMLUIProps<'ul'>

export const SelectList = forwardRef<SelectListProps, 'ul'>(({ className, ...rest }, ref) => {
  const { listRef, focusedIndex, setFocusedIndex, onClose, styles } = useSelect()

  const descendants = useSelectDescendantsContext()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: Record<string, KeyboardEventHandler> = {
        Tab: (ev) => ev.preventDefault(),
        Escape: onClose,
        ArrowDown: () => {
          const next = descendants.enabledNextValue(focusedIndex)

          if (next) setFocusedIndex(next.index)
        },
        ArrowUp: () => {
          const prev = descendants.enabledPrevValue(focusedIndex)

          if (prev) setFocusedIndex(prev.index)
        },
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [descendants, focusedIndex, onClose, setFocusedIndex],
  )

  const css: CSSUIObject = { ...styles.list }

  return (
    <PopoverContent
      as='ul'
      ref={mergeRefs(listRef, ref)}
      className={cx('ui-select-list', className)}
      role='select'
      tabIndex={-1}
      __css={css}
      {...rest}
      onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
    />
  )
})
