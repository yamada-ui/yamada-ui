import type { FC, ThemeProps } from "../../core"
import type { PopoverProps } from "../popover"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { omitThemeProps, useComponentMultiStyle } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { funcAll, useUnmountEffect, useUpdateEffect } from "../../utils"
import { Popover } from "../popover"
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
 * @see https://yamada-ui.com/components/overlay/menu
 */
export const Menu: FC<MenuProps> = (props) => {
  const { styles: contextMenuStyles } = useContextMenu() ?? {}
  const [styles, mergedProps] = useComponentMultiStyle("Menu", props, {
    isProcessSkip: !!contextMenuStyles,
    styles: contextMenuStyles,
  })
  const { relatedRef, onDownstreamCloseMapRef, onUpstreamClose } =
    useUpstreamMenu() ?? {}
  const nested = !!relatedRef
  const {
    closeOnBlur = !nested,
    closeOnSelect = true,
    duration = 0.2,
    initialFocusRef,
    offset = nested ? [-8, 8] : undefined,
    placement = nested ? "right-start" : "bottom-start",
    onClose: onCloseProp,
    onOpen: onOpenProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const { hasDownstreamRef, setDownstreamOpen } = useUpstreamMenuItem() ?? {}
  const descendants = useDescendants()
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
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

    if (!nested) onFocusMenu()
  }, [onOpenProp, nested, onFocusMenu])

  const onCloseInternal = useCallback(() => {
    onCloseProp?.()

    for (const onClose of onCloseMapRef.current.values()) {
      onClose()
    }
  }, [onCloseProp])

  const id = useId()
  const { open, onClose, onOpen } = useDisclosure({
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
    if (setDownstreamOpen) setDownstreamOpen(open)
  }, [setDownstreamOpen, open])

  useEffect(() => {
    if (hasDownstreamRef) hasDownstreamRef.current = true

    return () => {
      if (hasDownstreamRef) hasDownstreamRef.current = false
    }
  })

  useUpdateEffect(() => {
    if (!open) setFocusedIndex(-1)
  }, [open])

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
            buttonRef,
            closeOnSelect,
            focusedIndex,
            menuRef,
            nested,
            open,
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
              trigger: nested ? "hover" : "click",
              ...rest,
              closeOnBlur,
              closeOnButton: false,
              duration,
              initialFocusRef,
              offset,
              open,
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

Menu.__ui__ = "Menu"
