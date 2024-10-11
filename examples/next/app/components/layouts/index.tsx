'use client'

import type { StackProps } from '@yamada-ui/react'
import type { FC } from 'react'
import { Center, VStack } from '@yamada-ui/react'
import { Header } from './header'

export interface LayoutProps extends StackProps {}

export const Layout: FC<LayoutProps> = ({ ...rest }) => {
  return (
    <>
      <Header />

      <Center as='main' w='full'>
        <VStack
          alignItems='flex-start'
          gap={{ base: 'lg', md: 'md' }}
          maxW='9xl'
          px={{ base: 'lg', md: 'md' }}
          py='lg'
          w='full'
          {...rest}
        />
      </Center>
    </>
  )
}
