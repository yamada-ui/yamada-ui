import { Center, VStack } from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'
import { StarBanner, Footer, Header } from 'components'

export const TopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StarBanner />

      <Header />

      <Center as='main'>
        <VStack
          w='full'
          maxW='9xl'
          gap='0'
          py={{ base: 'lg', md: 'normal' }}
          px={{ base: 'lg', md: 'md' }}
        >
          {children}
        </VStack>
      </Center>

      <Footer />
    </>
  )
}
