import { Center, VStack } from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'
import { StarBanner, Footer, Header } from 'components'

export const TopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StarBanner />

      <Header />

      <Center as='main'>
        <VStack w='full' maxW='9xl' gap='0' py='lg' px='lg'>
          {children}
        </VStack>
      </Center>

      <Footer />
    </>
  )
}
