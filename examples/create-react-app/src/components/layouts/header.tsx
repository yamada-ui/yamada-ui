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
import { forwardRef } from 'react'

export type HeaderProps = {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({}, ref) => {
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
      <HStack ref={ref} w='full' maxW='1440px' py='md'>
        <Image src={`${process.env.PUBLIC_URL}/logo-colored@2x.png`} w='2xs' />

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
})
