import type { RefObject } from "react"
import type { CSSUIObject } from "../../core"
import type { ModalOptions } from "./modal"
import { createContext } from "../../utils"

interface ModalContext extends ModalOptions {
  bodyRef: RefObject<HTMLElement | null>
  headerRef: RefObject<HTMLElement | null>
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [ModalProvider, useModal] = createContext<ModalContext>({
  name: `ModalContext`,
  errorMessage: `useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
})

interface DialogContext {
  [key: string]: CSSUIObject | undefined
}

export const [DialogProvider, useDialog] = createContext<DialogContext>({
  name: `DialogContext`,
  errorMessage: `useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `,
})

interface DrawerContext {
  [key: string]: CSSUIObject | undefined
}

export const [DrawerProvider, useDrawer] = createContext<DrawerContext>({
  name: `DrawerContext`,
  errorMessage: `useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `,
})
