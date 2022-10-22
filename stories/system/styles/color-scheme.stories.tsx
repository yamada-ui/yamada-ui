import { Box, useScheme, useSchemetValue } from '@yamada-ui/react'

export default {
  title: 'System / Styles / Scheme',
}

export const basic = () => {
  const { scheme } = useScheme()

  return (
    <Box
      bg={['blackAlpha.800', 'whiteAlpha.800']}
      p='md'
      rounded='md'
      color={['whiteAlpha.800', 'blackAlpha.800']}
    >
      The current scheme is "{scheme}"
    </Box>
  )
}

export const useHook = () => {
  const { scheme } = useScheme()
  const bg = useSchemetValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useSchemetValue('whiteAlpha.800', 'blackAlpha.800')

  return (
    <Box bg={bg} p='md' rounded='md' color={color}>
      The current scheme is "{scheme}"
    </Box>
  )
}
