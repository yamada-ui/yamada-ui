import { Box, useHover } from '@yamada-ui/react'

export default {
  title: 'Hooks / useHover',
}

export const basic = () => {
  const { hovered, ref } = useHover()

  return (
    <Box ref={ref} w='full' bg='red.500' p='md' rounded='md' color='white'>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </Box>
  )
}
