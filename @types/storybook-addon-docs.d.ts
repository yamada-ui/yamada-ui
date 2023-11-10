import { DocsContextProps, AnyFramework } from "@storybook/addon-docs"
import { ReactNode } from "react"

declare module "@storybook/addon-docs" {
  export interface DocsContainerProps<TFramework extends AnyFramework> {
    context: DocsContextProps<TFramework>
    children?: ReactNode
  }
}
