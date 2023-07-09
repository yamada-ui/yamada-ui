import { useMultiComponentStyle, omitThemeProps, CSSUIObject, ThemeProps } from '@yamada-ui/core'
import { Popover, PopoverProps } from '@yamada-ui/popover'
import { createDescendant } from '@yamada-ui/use-descendant'
import { useDisclosure } from '@yamada-ui/use-disclosure'
import { createContext, useUnmountEffect, useUpdateEffect } from '@yamada-ui/utils'
import { Dispatch, FC, RefObject, SetStateAction, useCallback, useRef, useState } from 'react'

const {
  DescendantsContextProvider,
  useDescendantsContext: useMenuDescendantsContext,
  useDescendants,
  useDescendant: useMenuDescendant,
} = createDescendant<HTMLElement>()

export { useMenuDescendantsContext, useMenuDescendant }

type MenuContext = MenuOptions & {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  menuRef: RefObject<HTMLDivElement>
  styles: Record<string, CSSUIObject>
}

const [MenuProvider, useMenu] = createContext<MenuContext>({
  name: 'MenuContext',
  errorMessage: `useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`,
})

export { useMenu }

type MenuOptions = {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export type MenuProps = ThemeProps<'Menu'> & Omit<PopoverProps, 'closeOnButton'> & MenuOptions

export const Menu: FC<MenuProps> = (props) => {
  const [styles, mergedProps] = useMultiComponentStyle('Menu', props)
  const {
    initialFocusRef,
    closeOnSelect = true,
    placement = 'bottom-start',
    duration = 0.2,
    ...rest
  } = omitThemeProps(mergedProps)

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const onFocusMenu = useCallback(() => {
    requestAnimationFrame(() => menuRef.current?.focus({ preventScroll: false }))
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onOpenInternal = useCallback(() => {
    rest.onOpen?.()

    onFocusMenu()
  }, [onFocusMenu, rest])

  const { isOpen, onOpen, onClose } = useDisclosure({ ...props, onOpen: onOpenInternal })

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  return (
    <DescendantsContextProvider value={descendants}>
      <MenuProvider
        value={{
          isOpen,
          onOpen,
          onClose,
          onFocusFirstItem,
          onFocusLastItem,
          closeOnSelect,
          focusedIndex,
          setFocusedIndex,
          menuRef,
          styles,
        }}
      >
        <Popover
          {...{
            ...rest,
            isOpen,
            onOpen,
            onClose,
            placement,
            duration,
            initialFocusRef,
            closeOnButton: false,
          }}
        />
      </MenuProvider>
    </DescendantsContextProvider>
  )
}
