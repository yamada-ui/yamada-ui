import { Meta } from '@storybook/react'
import { Button, Text, useBoolean } from '@yamada-ui/react'

const meta: Meta = {
  title: 'Hooks / useBoolean',
}

export default meta

export const basic = () => {
  const [flg, { toggle }] = useBoolean()

  return (
    <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>
  )
}

export const useOnOff = () => {
  const [flg, { on, off }] = useBoolean()

  return (
    <Text w='full' onMouseEnter={on} onMouseLeave={off}>
      {flg ? 'I am hovered' : 'Put mouse over me please'}
    </Text>
  )
}
