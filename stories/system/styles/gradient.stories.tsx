import { Box, Heading } from '@yamada-ui/react'

export default {
  title: 'Components / Styles / Gradient',
}

export const withToken = () => {
  return (
    <Box w='full' height='xs' bgGradient='linear(to-r, green.200, pink.500)' rounded='lg'></Box>
  )
}

export const withColorCode = () => {
  return (
    <Heading
      w='full'
      size='2xl'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      isTruncated
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}

export const withBreakpoint = () => {
  return (
    <Box
      w='full'
      height='xs'
      bgGradient={{
        base: 'linear(to-tr, teal.300, yellow.400)',
        lg: 'linear(to-t, blue.200, teal.500)',
        md: 'linear(to-b, orange.100, purple.300)',
      }}
      rounded='lg'
    ></Box>
  )
}
