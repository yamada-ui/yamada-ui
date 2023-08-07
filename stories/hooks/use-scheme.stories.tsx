import { Meta } from '@storybook/react'
import { Box, useColorMode, useColorModeValue } from '@yamada-ui/react'

const meta: Meta = {
  title: 'Hooks / useColorMode',
}

export default meta

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
