import type { CSSUIObject } from "@yamada-ui/core"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"
import type {
  Dispatch,
  KeyboardEventHandler,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react"
import type { MenuOptions } from "./menu"

export const {
  DescendantsContextProvider,
  useDescendantsContext: useMenuDescendantsContext,
  useDescendants,
  useDescendant: useMenuDescendant,
} = createDescendant()

interface MenuContext extends MenuOptions {
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
  styles: { [key: string]: CSSUIObject }
}

export const [MenuProvider, useMenu] = createContext<MenuContext>({
  name: "MenuContext",
  errorMessage: `useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`,
})

interface ContextMenuContext {
  styles: { [key: string]: CSSUIObject }
}

export const [ContextMenuProvider, useContextMenu] =
  createContext<ContextMenuContext>({
    strict: false,
    name: "ContextMenuContext",
  })

interface UpstreamMenuContext {
  relatedRef: RefObject<HTMLElement>
  onDownstreamCloseMapRef: MutableRefObject<Map<string, () => void>>
  onUpstreamClose: () => void
}

export const [UpstreamMenuProvider, useUpstreamMenu] =
  createContext<UpstreamMenuContext>({
    strict: false,
    name: "UpstreamMenuContext",
  })

interface UpstreamMenuItemContext {
  onUpstreamRestoreFocus: () => void
  onKeyDownRef: RefObject<KeyboardEventHandler<HTMLLIElement>>
  setDownstreamOpen: Dispatch<SetStateAction<boolean>>
  hasDownstreamRef: MutableRefObject<boolean>
}

export const [UpstreamMenuItemProvider, useUpstreamMenuItem] =
  createContext<UpstreamMenuItemContext>({
    strict: false,
    name: "UpstreamMenuItemContext",
  })
