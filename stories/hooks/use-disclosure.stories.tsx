import { Button, Dialog, useDisclosure, Text } from '@yamada-ui/react'

export default {
  title: 'Hooks / useDiclosure',
}

export const basic = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const useToggle = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>
  )
}

export const withChain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: (...args) => {
      console.log('Args:', args)
    },
    onClose: (...args) => {
      console.log('Args:', args)
    },
  })

  return (
    <>
      <Button onClick={() => onOpen('This is arg')}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => onClose('This is arg')}
        header='孫悟空'
        cancel='わけない'
        onCancel={() => onClose('This is arg')}
        success='わける'
        onSuccess={() => onClose('This is arg')}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}
