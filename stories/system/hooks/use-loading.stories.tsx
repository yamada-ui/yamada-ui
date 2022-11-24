import { useLoading, Button, Center, Wrap, Text } from '@yamada-ui/react'

export default {
  title: 'System / Hooks / useLoading',
}

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button onClick={() => screen.startLoading()}>Start screen loading</Button>
        <Button onClick={() => page.startLoading()}>Start page loading</Button>
        <Button onClick={() => background.startLoading()}>Start background loading</Button>
      </Wrap>
    </Center>
  )
}

export const withMessage = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button onClick={() => screen.startLoading({ message: 'Loading' })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.startLoading({ message: 'Loading' })}>
          Start page loading
        </Button>
        <Button onClick={() => background.startLoading({ message: 'Loading' })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const withTimeout = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button onClick={() => screen.startLoading({ timeout: 5000 })}>Start screen loading</Button>
        <Button onClick={() => page.startLoading({ timeout: 5000 })}>Start page loading</Button>
        <Button onClick={() => background.startLoading({ timeout: 5000 })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

export const customMessage = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() => screen.startLoading({ message: <Text color='primary'>Loading</Text> })}
        >
          Start screen loading
        </Button>
        <Button
          onClick={() => page.startLoading({ message: <Text color='primary'>Loading</Text> })}
        >
          Start page loading
        </Button>
        <Button
          onClick={() => background.startLoading({ message: <Text color='primary'>Loading</Text> })}
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
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            screen.startLoading({ message: 'Loading', timeout: 10000 })

            setTimeout(() => {
              screen.update({ message: 'Please wait' })
            }, 5000)
          }}
        >
          Start screen loading
        </Button>

        <Button
          onClick={() => {
            page.startLoading({ message: 'Loading', timeout: 10000 })

            setTimeout(() => {
              page.update({ message: 'Please wait' })
            }, 5000)
          }}
        >
          Start page loading
        </Button>

        <Button
          onClick={() => {
            background.startLoading({ message: 'Loading', timeout: 10000 })

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
    page.startLoading({ message: 'Get Data 1/3' })

    await wait(3000)

    page.update({ message: 'Please wait 2/3' })

    await wait(3000)

    page.update({ message: 'Almost done 3/3' })

    await wait(3000)

    page.finishLoading()
  }

  return (
    <Center w='100vw' h='100vh'>
      <Button onClick={getData}>Start page loading</Button>
    </Center>
  )
}
