import {
  Flex,
  HStack,
  Image,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  useColorScheme,
  ColorScheme,
} from '@yamada-ui/react'
import { forwardRef, useCallback } from 'react'
import { useApp } from 'contexts'

export type HeaderProps = {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({}, ref) => {
  const { isSystemColorScheme, changeSystemColorScheme } = useApp()
  const { colorScheme, changeColorScheme } = useColorScheme()

  const onChangeColorScheme = useCallback((value: string) => {
    changeSystemColorScheme(value === 'system')
    changeColorScheme(value as ColorScheme)
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
            value={isSystemColorScheme ? 'system' : colorScheme}
            onChange={onChangeColorScheme}
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
