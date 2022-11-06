import { Box, useColorScheme, useColorSchemetValue } from '@yamada-ui/react'

export default {
  title: 'System / Styles / Color Scheme',
}

export const basic = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Box
      bg={['blackAlpha.800', 'whiteAlpha.800']}
      p='md'
      rounded='md'
      color={['whiteAlpha.800', 'blackAlpha.800']}
      transitionProperty='all'
      transitionDuration='normal'
    >
      The current colorScheme is "{colorScheme}"
    </Box>
  )
}

export const useHook = () => {
  const { colorScheme } = useColorScheme()
  const bg = useColorSchemetValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useColorSchemetValue('whiteAlpha.800', 'blackAlpha.800')

  return (
    <Box
      bg={bg}
      p='md'
      rounded='md'
      color={color}
      transitionProperty='all'
      transitionDuration='normal'
    >
      The current colorScheme is "{colorScheme}"
    </Box>
  )
}
