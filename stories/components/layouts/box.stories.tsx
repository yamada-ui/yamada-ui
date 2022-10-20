import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@yamada-ui/react'

export default {
  title: 'Components / Layout / Box',
  component: Box,
} as ComponentMeta<typeof Box>

export const basic: ComponentStory<typeof Box> = () => {
  return (
    <Box p='md' rounded='md' bg='primary' color='white'>
      Box
    </Box>
  )
}
