import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrap, Box } from '@yamada-ui/react'

export default {
  title: 'Components / Layout / Wrap',
  component: Wrap,
} as ComponentMeta<typeof Wrap>

export const basic: ComponentStory<typeof Wrap> = () => {
  return (
    <Wrap gap='md'>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>
      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
    </Wrap>
  )
}
