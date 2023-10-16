import { Center, StackProps, VStack } from '@yamada-ui/react'
import { FC } from 'react'
import { Header } from './header'

export type LayoutProps = StackProps

export const Layout: FC<LayoutProps> = ({ ...rest }) => {
  return (
    <>
      <Header />

      <Center as='main' w='full'>
        <VStack
          alignItems='flex-start'
          w='full'
          maxW='9xl'
          gap='0'
          py='lg'
          px={{ base: 'lg', md: 'md' }}
          {...rest}
        />
      </Center>
    </>
  )
}
