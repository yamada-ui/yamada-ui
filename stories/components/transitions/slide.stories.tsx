import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Slide, Text, useBoolean, VStack } from '@yamada-ui/react'

export default {
  title: 'Components / Transitions / Slide',
  component: Slide,
} as ComponentMeta<typeof Slide>

export const basic: ComponentStory<typeof Slide> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='bottom'>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}

export const withPlacement: ComponentStory<typeof Slide> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='bottom' duration={0.7}>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}

export const withDirection: ComponentStory<typeof Slide> = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='left'>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}
