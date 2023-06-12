import { Input, Kbd, Text, useWindowEvent } from '@yamada-ui/react'
import { useRef } from 'react'

export default {
  title: 'Hooks / useWindowEvent',
}

export const basic = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useWindowEvent('keydown', (ev) => {
    if (ev.code === 'KeyK' && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault()
      inputRef.current?.focus()
    }
  })

  return (
    <>
      <Text>
        Focus: <Kbd>Ctrl + K</Kbd>
      </Text>
      <Input ref={inputRef} />
    </>
  )
}
