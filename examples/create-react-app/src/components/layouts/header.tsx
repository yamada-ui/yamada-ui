import {
  Flex,
  HStack,
  Image,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  useColorMode,
  ColorMode,
} from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'

export type HeaderProps = PropsWithChildren

export const Header: FC<HeaderProps> = ({}) => {
  const { internalColorMode, changeColorMode } = useColorMode()

  return (
    <Flex
      w='full'
      px='md'
      justifyContent='center'
      position='sticky'
      top={0}
      boxShadow={['sm', 'md']}
    >
      <HStack w='full' maxW='1440px' py='md'>
        <Image src='/logo-colored@2x.png' w='2xs' />

        <Spacer />

        <HStack>
          <SegmentedControl
            size='sm'
            value={internalColorMode}
            onChange={(value) => changeColorMode(value as ColorMode | 'system')}
          >
            <SegmentedControlButton value='light'>Light</SegmentedControlButton>
            <SegmentedControlButton value='dark'>Dark</SegmentedControlButton>
            <SegmentedControlButton value='system'>
              System
            </SegmentedControlButton>
          </SegmentedControl>
        </HStack>
      </HStack>
    </Flex>
  )
}
