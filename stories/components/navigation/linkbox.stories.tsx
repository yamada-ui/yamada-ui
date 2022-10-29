import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center, LinkBox } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / LinkBox',
  component: LinkBox,
} as ComponentMeta<typeof LinkBox>

export const linkBox: ComponentStory<typeof LinkBox> = () => {
  return (
    <>
      <LinkBox href='/' minW='20' minH='20' rounded='md' bg='gray.500' color='white'>
        <Center>LINK BOX</Center>
      </LinkBox>
    </>
  )
}

export const linkBoxWithIsExternal: ComponentStory<typeof LinkBox> = () => {
  return (
    <>
      <LinkBox isExternal href='/' minW='20' minH='20' rounded='md' bg='gray.500' color='white'>
        <Center>LINK BOX</Center>
      </LinkBox>
    </>
  )
}
