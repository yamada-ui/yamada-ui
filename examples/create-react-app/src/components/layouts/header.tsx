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
import { forwardRef, useCallback } from 'react'
import { useApp } from 'contexts'

export type HeaderProps = {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({}, ref) => {
  const { isSystemColorMode, changeSystemColorMode } = useApp()
  const { colorMode, changeColorMode } = useColorMode()

  const onChangeColorMode = useCallback((value: string) => {
    changeSystemColorMode(value === 'system')
    changeColorMode(value as ColorMode)
  }, [])

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
            value={isSystemColorMode ? 'system' : colorMode}
            onChange={onChangeColorMode}
          >
            <SegmentedControlButton value='system'>System</SegmentedControlButton>
            <SegmentedControlButton value='light'>Light</SegmentedControlButton>
            <SegmentedControlButton value='dark'>Dark</SegmentedControlButton>
          </SegmentedControl>
        </HStack>
      </HStack>
    </Flex>
  )
})
