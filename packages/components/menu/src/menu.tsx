import type { ThemeProps } from "@yamada-ui/core"
import { useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import type { PopoverProps } from "@yamada-ui/popover"
import { Popover } from "@yamada-ui/popover"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { funcAll, useUnmountEffect, useUpdateEffect } from "@yamada-ui/utils"
import type { FC } from "react"
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
