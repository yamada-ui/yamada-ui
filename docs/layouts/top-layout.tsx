import { Box, BoxProps, Center, VStack, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { AdBanner, Header } from '@/components'

export type TopLayoutProps = BoxProps & {}

export const TopLayout = memo(
  forwardRef<TopLayoutProps, 'div'>(({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest}>
        <AdBanner />

        <Header />

        <Center as='main'>
          <VStack w='full' maxW='9xl' gap='0' px='md'>
            {children}
          </VStack>
        </Center>
      </Box>
    )
  }),
)
