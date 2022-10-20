import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Box, Spacer } from '@yamada-ui/react'

export default {
  title: 'Components / Layout / Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

export const horizontal: ComponentStory<typeof Flex> = () => {
  return (
    <Flex gap='md'>
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
    </Flex>
  )
}

export const vertical: ComponentStory<typeof Flex> = () => {
  return (
    <Flex direction='column' gap='md'>
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
    </Flex>
  )
}

export const spacer: ComponentStory<typeof Flex> = () => {
  return (
    <Flex w='full' gap='md'>
      <Box p='md' rounded='4' bg='primary' color='white'>
        Box
      </Box>

      <Box p='md' rounded='4' bg='secondary' color='white'>
        Box
      </Box>

      <Spacer />

      <Box p='md' rounded='4' bg='warning' color='white'>
        Box
      </Box>

      <Box p='md' rounded='4' bg='danger' color='white'>
        Box
      </Box>
    </Flex>
  )
}
