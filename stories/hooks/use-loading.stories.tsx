import { Meta } from '@storybook/react'
import { useLoading, Button, Center, Wrap, Text } from '@yamada-ui/react'

const meta: Meta = {
  title: 'Hooks / useLoading',
}

export default meta

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const withTimeout = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start({ duration: 5000 })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({ duration: 5000 })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({ duration: 5000 })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const withMessage = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button
          onClick={() => screen.start({ message: 'Loading', duration: 5000 })}
        >
          Start screen loading
        </Button>
        <Button
          onClick={() => page.start({ message: 'Loading', duration: 5000 })}
        >
          Start page loading
        </Button>
        <Button
          onClick={() =>
            background.start({ message: 'Loading', duration: 5000 })
          }
        >
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const customMessage = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            screen.start({ message: <Text color='primary'>Loading</Text> })
          }
        >
          Start screen loading
        </Button>
        <Button
          onClick={() =>
            page.start({ message: <Text color='primary'>Loading</Text> })
          }
        >
          Start page loading
        </Button>
        <Button
          onClick={() =>
            background.start({ message: <Text color='primary'>Loading</Text> })
          }
        >
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const updateMessage = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            screen.start({ message: 'Loading', duration: 10000 })

            setTimeout(() => {
              screen.update({ message: 'Please wait' })
            }, 5000)
          }}
        >
          Start screen loading
        </Button>

        <Button
          onClick={() => {
            page.start({ message: 'Loading', duration: 10000 })

            setTimeout(() => {
              page.update({ message: 'Please wait' })
            }, 5000)
          }}
        >
          Start page loading
        </Button>

        <Button
          onClick={() => {
            background.start({ message: 'Loading', duration: 10000 })

            setTimeout(() => {
              background.update({ message: 'Please wait' })
            }, 5000)
          }}
        >
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const asyncFunction = () => {
  const { page } = useLoading()

  const getData = async () => {
    page.start({ message: 'Get Data 1/3' })

    await wait(3000)

    page.update({ message: 'Please wait 2/3' })

    await wait(3000)

    page.update({ message: 'Almost done 3/3' })

    await wait(3000)

    page.finish()
  }

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Button onClick={getData}>Start page loading</Button>
    </Center>
  )
}
