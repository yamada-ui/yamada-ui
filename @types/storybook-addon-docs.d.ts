import { ReactNode } from 'react'
import { DocsContextProps, AnyFramework } from '@storybook/addon-docs'

declare module '@storybook/addon-docs' {
  export interface DocsContainerProps<TFramework extends AnyFramework> {
    context: DocsContextProps<TFramework>
    children?: ReactNode
  }
}
