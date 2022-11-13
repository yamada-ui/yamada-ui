import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Button, Collapse, useBoolean, VStack } from '@yamada-ui/react'

export default {
  title: 'Components / Transitions / Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>

export const basic: ComponentStory<typeof Collapse> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const withDuration: ComponentStory<typeof Collapse> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} duration={0.7}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const exitUnmount: ComponentStory<typeof Collapse> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} unmountOnExit>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white' mt='md'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const disabledOpacity: ComponentStory<typeof Collapse> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} animationOpacity={false}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white' mt='md'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const startingHeight: ComponentStory<typeof Collapse> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} startingHeight={20}>
        <Box color='purple.500'>
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>
  )
}
