import { Meta, StoryFn } from '@storybook/react'
import { Stack, VStack, HStack, Box, Divider, Center } from '@yamada-ui/react'

type Story = StoryFn<typeof Stack>

const meta: Meta<typeof Stack> = {
  title: 'Components / Layouts / Stack',
  component: Stack,
}

export default meta

export const vertical: Story = () => {
  return (
    <VStack>
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
    </VStack>
  )
}

export const horizontal: Story = () => {
  return (
    <HStack>
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
    </HStack>
  )
}

export const withBorder: Story = () => {
  return (
    <>
      <VStack divider={<Divider />}>
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
      </VStack>

      <HStack divider={<Divider />} h='2xs'>
        <Center p='md' h='full' rounded='4' bg='primary' color='white'>
          Center
        </Center>

        <Center p='md' h='full' rounded='4' bg='secondary' color='white'>
          Center
        </Center>

        <Center p='md' h='full' rounded='4' bg='warning' color='white'>
          Center
        </Center>

        <Center p='md' h='full' rounded='4' bg='danger' color='white'>
          Center
        </Center>
      </HStack>
    </>
  )
}
