import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"
import type { ModalOptions } from "./modal"

interface ModalContext extends ModalOptions {
  styles: { [key: string]: CSSUIObject }
}

export const [ModalProvider, useModal] = createContext<ModalContext>({
  name: `ModalContext`,
  errorMessage: `useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
})

interface DialogContext {
  [key: string]: CSSUIObject
}

export const [DialogProvider, useDialog] = createContext<DialogContext>({
  name: `DialogContext`,
  errorMessage: `useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `,
})

interface DrawerContext {
  [key: string]: CSSUIObject
}

export const [DrawerProvider, useDrawer] = createContext<DrawerContext>({
  name: `DrawerContext`,
  errorMessage: `useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `,
})
