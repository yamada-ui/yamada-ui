import { FC, ReactNode } from 'react'
import { DocsContainer as _DocsContainer, DocsContainerProps } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

const DocsContainer = _DocsContainer as unknown as FC<
  DocsContainerProps & {
    children: ReactNode
  }
>

export const Docs: FC<DocsContainerProps & { children: ReactNode }> = ({ children, context }) => {
  const dark = useDarkMode()

  return (
    <DocsContainer
      context={{
        ...context,
        storyById: (id: any) => {
          const storyContext = context.storyById(id)

          if (storyContext?.parameters?.docs) {
            storyContext.parameters.docs = {
              ...storyContext.parameters.docs,
              theme: dark ? themes.dark : themes.light,
            }
          }
          return storyContext
        },
      }}
    >
      {children}
    </DocsContainer>
  )
}
