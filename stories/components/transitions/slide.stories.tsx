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

      <Slide isOpen={isOpen} direction='bottom'>
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

      <Slide isOpen={isOpen} direction='left'>
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
