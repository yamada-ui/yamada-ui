import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, Kbd } from '@yamada-ui/react'

export default {
  title: 'Components / DataDisplay / Kbd',
  component: Kbd,
} as ComponentMeta<typeof Kbd>

export const basic: ComponentStory<typeof Kbd> = () => {
  return (
    <Text>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </Text>
  )
}
