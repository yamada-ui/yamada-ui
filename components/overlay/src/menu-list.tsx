import { forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx, handlerAll, mergeRefs } from '@yamada-ui/utils'
import { KeyboardEvent, KeyboardEventHandler, useCallback } from 'react'
import { PopoverContent, useMenu, useMenuDescendantsContext } from './'

export type MenuListProps = HTMLUIProps<'section'>

export const MenuList = forwardRef<MenuListProps, 'section'>(({ className, ...rest }, ref) => {
  const { menuRef, focusedIndex, setFocusedIndex, onClose, styles } = useMenu()

  const descendants = useMenuDescendantsContext()

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
      ref={mergeRefs(menuRef, ref)}
      className={cx('ui-menu-list', className)}
      role='menu'
      tabIndex={-1}
      __css={css}
      {...rest}
      onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
    />
  )
})
