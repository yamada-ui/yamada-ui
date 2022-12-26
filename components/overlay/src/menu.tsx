import { useMultiComponentStyle, omitThemeProps, CSSUIObject, ThemeProps } from '@yamada-ui/core'
import { createDescendant, useDisclosure } from '@yamada-ui/hooks'
import { createContext, useUnmountEffect, useUpdateEffect } from '@yamada-ui/utils'
import { Dispatch, FC, RefObject, SetStateAction, useCallback, useRef, useState } from 'react'
import { Popover, PopoverProps } from './'

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
  autoSelect?: boolean
  closeOnSelect?: boolean
}

export type MenuProps = ThemeProps<'Menu'> & Omit<PopoverProps, 'closeOnButton'> & MenuOptions

export const Menu: FC<MenuProps> = (props) => {
  const styles = useMultiComponentStyle('Menu', props)
  const {
    initialFocusRef,
    autoSelect = true,
    closeOnSelect = true,
    placement = 'bottom-start',
    duration = 0.2,
    ...rest
  } = omitThemeProps(props)

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const onFocusMenu = useCallback(() => {
    requestAnimationFrame(() => menuRef.current?.focus({ preventScroll: false }))
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) {
        initialFocusRef.current?.focus()
      } else {
        const first = descendants.enabledfirstValue()

        if (first) setFocusedIndex(first.index)
      }
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onOpenInternal = useCallback(() => {
    rest.onOpen?.()

    if (autoSelect) {
      onFocusFirstItem()
    } else {
      onFocusMenu()
    }
  }, [autoSelect, onFocusFirstItem, onFocusMenu, rest])

  const [isOpen, onOpen, onClose] = useDisclosure({ ...props, onOpen: onOpenInternal })

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
          autoSelect,
          closeOnSelect,
          focusedIndex,
          setFocusedIndex,
          menuRef,
          styles,
        }}
      >
        <Popover
          {...{ ...rest, isOpen, onOpen, onClose, placement, duration, closeOnButton: false }}
        />
      </MenuProvider>
    </DescendantsContextProvider>
  )
}
