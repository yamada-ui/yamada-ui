import type {
  Dispatch,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
} from "react"
import type { CSSUIObject } from "../../core"
import type { MenuOptions } from "./menu"
import { createDescendant } from "../../hooks/use-descendant"
import { createContext } from "../../utils"

export const {
  DescendantsContextProvider,
  useDescendant: useMenuDescendant,
  useDescendants,
  useDescendantsContext: useMenuDescendantsContext,
} = createDescendant()

interface MenuContext extends MenuOptions {
  buttonRef: RefObject<HTMLButtonElement | null>
  focusedIndex: number
  menuRef: RefObject<HTMLDivElement | null>
  nested: boolean
  open: boolean
  requestAnimationFrameId: RefObject<null | number>
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
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
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [ContextMenuProvider, useContextMenu] =
  createContext<ContextMenuContext>({
    name: "ContextMenuContext",
    strict: false,
  })

interface UpstreamMenuContext {
  relatedRef: RefObject<HTMLElement | null>
  onDownstreamCloseMapRef: RefObject<Map<string, () => void>>
  onUpstreamClose: () => void
}

export const [UpstreamMenuProvider, useUpstreamMenu] =
  createContext<UpstreamMenuContext>({
    name: "UpstreamMenuContext",
    strict: false,
  })

interface UpstreamMenuItemContext {
  hasDownstreamRef: RefObject<boolean>
  setDownstreamOpen: Dispatch<SetStateAction<boolean>>
  onKeyDownRef: RefObject<KeyboardEventHandler<HTMLDivElement>>
  onUpstreamRestoreFocus: () => void
}

export const [UpstreamMenuItemProvider, useUpstreamMenuItem] =
  createContext<UpstreamMenuItemContext>({
    name: "UpstreamMenuItemContext",
    strict: false,
  })
