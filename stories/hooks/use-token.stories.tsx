import { Box, useToken } from '@yamada-ui/react'

export default {
  title: 'Hooks / useToken',
}

export const basic = () => {
  const bg = useToken('colors', 'primary')

  return (
    <Box bg={bg} p='md' rounded='md' color='white'>
      Primary for color tokens is "{bg}"
    </Box>
  )
}
