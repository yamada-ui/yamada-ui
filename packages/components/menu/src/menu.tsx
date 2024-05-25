import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { useMultiComponentStyle, omitThemeProps } from "@yamada-ui/core"
import type { PopoverProps } from "@yamada-ui/popover"
import { Popover } from "@yamada-ui/popover"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import {
  createContext,
  funcAll,
  useUnmountEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type {
  Dispatch,
  FC,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { useContextMenu } from "./context-menu"
import { useUpstreamMenuItem } from "./menu-item"

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
  onUpstreamClose?: () => void
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  menuRef: RefObject<HTMLDivElement>
  requestAnimationFrameId: MutableRefObject<number | null>
  isNested: boolean
  styles: Record<string, CSSUIObject>
}

const [MenuProvider, useMenu] = createContext<MenuContext>({
  name: "MenuContext",
  errorMessage: `useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`,
})

type UpstreamMenuContext = {
  relatedRef: RefObject<HTMLElement>
  onDownstreamCloseMapRef: MutableRefObject<Map<string, () => void>>
  onUpstreamClose: () => void
}

export const [UpstreamMenuProvider, useUpstreamMenu] =
  createContext<UpstreamMenuContext>({
    strict: false,
    name: "UpstreamMenuContext",
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

export type MenuProps = ThemeProps<"Menu"> &
  Omit<PopoverProps, "closeOnButton" | "relatedRef"> &
  MenuOptions

/**
 * `Menu` is a component that displays a common dropdown menu.
 *
 * @see Docs https://yamada-ui.com/components/overlay/menu
 */
export const Menu: FC<MenuProps> = (props) => {
  const { styles: contextMenuStyles } = useContextMenu() ?? {}
  const [styles, mergedProps] = useMultiComponentStyle("Menu", props, {
    isProcessSkip: !!contextMenuStyles,
    styles: contextMenuStyles,
  })
  let {
    initialFocusRef,
    closeOnSelect = true,
    closeOnBlur,
    placement,
    duration = 0.2,
    offset,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const { relatedRef, onUpstreamClose, onDownstreamCloseMapRef } =
    useUpstreamMenu() ?? {}
  const { setDownstreamOpen, hasDownstreamRef } = useUpstreamMenuItem() ?? {}
  const isNested = !!relatedRef

  if (isNested) {
    placement ??= "right-start"
    offset ??= [-8, 8]
    closeOnBlur ??= false
  } else {
    placement ??= "bottom-start"
  }

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))
  const requestAnimationFrameId = useRef<number | null>(null)
  const onCloseMapRef = useRef<Map<string, () => void>>(new Map())

  const onFocusMenu = useCallback(() => {
    requestAnimationFrame(() =>
      menuRef.current?.focus({ preventScroll: false }),
    )
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const first = descendants.enabledFirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const last = descendants.enabledLastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onOpenInternal = useCallback(() => {
    onOpenProp?.()

    if (!isNested) onFocusMenu()
  }, [onOpenProp, isNested, onFocusMenu])

  const onCloseInternal = useCallback(() => {
    onCloseProp?.()

    for (const onClose of onCloseMapRef.current.values()) {
      onClose()
    }
  }, [onCloseProp])

  const id = useId()
  const { isOpen, onOpen, onClose } = useDisclosure({
    ...props,
    onOpen: onOpenInternal,
    onClose: onCloseInternal,
  })

  useEffect(() => {
    const onCloseMap = onDownstreamCloseMapRef?.current

    onCloseMap?.set(id, onClose)

    return () => {
      onCloseMap?.delete(id)
    }
  }, [id, onClose, onDownstreamCloseMapRef])

  useEffect(() => {
    if (setDownstreamOpen) setDownstreamOpen(isOpen)
  }, [setDownstreamOpen, isOpen])

  useEffect(() => {
    if (hasDownstreamRef) hasDownstreamRef.current = true

    return () => {
      if (hasDownstreamRef) hasDownstreamRef.current = false
    }
  })

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  return (
    <DescendantsContextProvider value={descendants}>
      <UpstreamMenuProvider
        value={{
          relatedRef: menuRef,
          onDownstreamCloseMapRef: onCloseMapRef,
          onUpstreamClose: funcAll(onUpstreamClose, onClose),
        }}
      >
        <MenuProvider
          value={{
            isOpen,
            onOpen,
            onClose,
            onUpstreamClose,
            onFocusFirstItem,
            onFocusLastItem,
            closeOnSelect,
            focusedIndex,
            setFocusedIndex,
            menuRef,
            requestAnimationFrameId,
            isNested,
            styles,
          }}
        >
          <Popover
            {...{
              trigger: isNested ? "hover" : "click",
              ...rest,
              isOpen,
              onOpen,
              onClose,
              placement,
              offset,
              duration,
              initialFocusRef,
              relatedRef,
              closeOnButton: false,
              closeOnBlur,
            }}
          />
        </MenuProvider>
      </UpstreamMenuProvider>
    </DescendantsContextProvider>
  )
}
