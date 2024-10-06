import type { ThemeProps } from "@yamada-ui/core"
import type { PopoverProps } from "@yamada-ui/popover"
import type { FC } from "react"
import { omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import { Popover } from "@yamada-ui/popover"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { funcAll, useUnmountEffect, useUpdateEffect } from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  DescendantsContextProvider,
  MenuProvider,
  UpstreamMenuProvider,
  useContextMenu,
  useDescendants,
  useUpstreamMenu,
  useUpstreamMenuItem,
} from "./menu-context"

export interface MenuOptions {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export interface MenuProps
  extends ThemeProps<"Menu">,
    Omit<PopoverProps, "closeOnButton" | "relatedRef">,
    MenuOptions {}

/**
 * `Menu` is a component that displays a common dropdown menu.
 *
 * @see Docs https://yamada-ui.com/components/overlay/menu
 */
export const Menu: FC<MenuProps> = (props) => {
  const { styles: contextMenuStyles } = useContextMenu() ?? {}
  const [styles, mergedProps] = useComponentMultiStyle("Menu", props, {
    isProcessSkip: !!contextMenuStyles,
    styles: contextMenuStyles,
  })
  let {
    closeOnBlur,
    closeOnSelect = true,
    duration = 0.2,
    initialFocusRef,
    offset,
    placement,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const { relatedRef, onDownstreamCloseMapRef, onUpstreamClose } =
    useUpstreamMenu() ?? {}
  const { hasDownstreamRef, setDownstreamOpen } = useUpstreamMenuItem() ?? {}
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
  const requestAnimationFrameId = useRef<null | number>(null)
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
  const { isOpen, onClose, onOpen } = useDisclosure({
    ...props,
    onClose: onCloseInternal,
    onOpen: onOpenInternal,
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
            closeOnSelect,
            focusedIndex,
            isNested,
            isOpen,
            menuRef,
            requestAnimationFrameId,
            setFocusedIndex,
            styles,
            onClose,
            onFocusFirstItem,
            onFocusLastItem,
            onOpen,
            onUpstreamClose,
          }}
        >
          <Popover
            {...{
              trigger: isNested ? "hover" : "click",
              ...rest,
              closeOnBlur,
              closeOnButton: false,
              duration,
              initialFocusRef,
              isOpen,
              offset,
              placement,
              relatedRef,
              onClose,
              onOpen,
            }}
          />
        </MenuProvider>
      </UpstreamMenuProvider>
    </DescendantsContextProvider>
  )
}
