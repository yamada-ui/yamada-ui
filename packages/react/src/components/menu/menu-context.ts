import type {
  Dispatch,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
} from "react"
import { createDescendant } from "../../hooks/use-descendant"
import { createContext } from "../../utils"

export const {
  DescendantsContext,
  useDescendant: useMenuDescendant,
  useDescendants,
  useDescendantsContext: useMenuDescendantsContext,
} = createDescendant()

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
