import { Box, useIdle } from '@yamada-ui/react'

export default {
  title: 'Hooks / useIdle',
}

export const basic = () => {
  const idle = useIdle(2000)

  return (
    <Box
      bg={idle ? 'blue.500' : 'red.500'}
      p='md'
      rounded='md'
      color='white'
      transitionProperty='all'
      transitionDuration='slower'
    >
      Current state: {idle ? 'idle' : 'not idle'}
    </Box>
  )
}
