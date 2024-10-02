import type { CSSUIObject } from "@yamada-ui/core"
import type {
  Dispatch,
  KeyboardEventHandler,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react"
import type { MenuOptions } from "./menu"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"

export const {
  DescendantsContextProvider,
  useDescendant: useMenuDescendant,
  useDescendants,
  useDescendantsContext: useMenuDescendantsContext,
} = createDescendant()

interface MenuContext extends MenuOptions {
  focusedIndex: number
  isNested: boolean
  isOpen: boolean
  menuRef: RefObject<HTMLDivElement>
  requestAnimationFrameId: MutableRefObject<null | number>
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject }
  onClose: () => void
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  onOpen: () => void
  onUpstreamClose?: () => void
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
    name: "ContextMenuContext",
    strict: false,
  })

interface UpstreamMenuContext {
  relatedRef: RefObject<HTMLElement>
  onDownstreamCloseMapRef: MutableRefObject<Map<string, () => void>>
  onUpstreamClose: () => void
}

export const [UpstreamMenuProvider, useUpstreamMenu] =
  createContext<UpstreamMenuContext>({
    name: "UpstreamMenuContext",
    strict: false,
  })

interface UpstreamMenuItemContext {
  hasDownstreamRef: MutableRefObject<boolean>
  setDownstreamOpen: Dispatch<SetStateAction<boolean>>
  onKeyDownRef: RefObject<KeyboardEventHandler<HTMLLIElement>>
  onUpstreamRestoreFocus: () => void
}

export const [UpstreamMenuItemProvider, useUpstreamMenuItem] =
  createContext<UpstreamMenuItemContext>({
    name: "UpstreamMenuItemContext",
    strict: false,
  })
