import { Box, BoxProps, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'

export type DocsLayoutProps = BoxProps & {}

export const DocsLayout = memo(
  forwardRef<DocsLayoutProps, 'div'>(({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest}>
        {children}
      </Box>
    )
  }),
)
