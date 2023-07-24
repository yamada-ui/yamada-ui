import { Center, VStack } from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'
import { AdBanner, Footer, Header } from '@/components'

export const TopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdBanner />

      <Header />

      <Center as='main'>
        <VStack w='full' maxW='9xl' gap='0' px='md'>
          {children}
        </VStack>
      </Center>

      <Footer />
    </>
  )
}
