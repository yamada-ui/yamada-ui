import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PinInput, PinInputField } from '@yamada-ui/react'

export default {
  title: 'Components / Forms / PinInput',
  component: PinInput,
} as ComponentMeta<typeof PinInput>

export const basic: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}
