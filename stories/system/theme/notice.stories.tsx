import {
  UIProvider,
  extendConfig,
  Center,
  useNotice,
  Button,
} from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Notice',
}

export const basic = () => {
  const config = extendConfig({
    notice: {
      options: {
        placement: 'bottom-right',
        limit: 3,
      },
    },
  })

  return (
    <UIProvider config={config}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  const notice = useNotice()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Button
        onClick={() =>
          notice({
            title: '孫悟空',
            description: 'オッス！オラ悟空！',
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}
