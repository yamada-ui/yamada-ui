import { Meta, StoryFn } from '@storybook/react'
import { Box } from '@yamada-ui/react'

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  title: 'Components / Layouts / Box',
  component: Box,
}

export default meta

export const basic: Story = () => {
  return (
    <Box p='md' rounded='md' bg='primary' color='white'>
      Box
    </Box>
  )
}
