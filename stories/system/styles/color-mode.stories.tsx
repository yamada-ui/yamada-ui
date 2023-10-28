import { Box, useColorMode, useColorModeValue } from '@yamada-ui/react'

export default {
  title: 'System / Styles / Color Mode',
}

export const basic = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={['blackAlpha.800', 'whiteAlpha.800']}
      p='md'
      rounded='md'
      color={['whiteAlpha.800', 'blackAlpha.800']}
      transitionProperty='all'
      transitionDuration='normal'
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}

export const useHook = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useColorModeValue('whiteAlpha.800', 'blackAlpha.800')

  return (
    <Box
      bg={bg}
      p='md'
      rounded='md'
      color={color}
      transitionProperty='all'
      transitionDuration='normal'
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}
