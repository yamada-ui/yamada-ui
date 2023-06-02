import { Box, useColorMode, useColorModetValue } from '@yamada-ui/react'

export default {
  title: 'System / Hooks / useColorMode',
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

export const withValue = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModetValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useColorModetValue('whiteAlpha.800', 'blackAlpha.800')

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
