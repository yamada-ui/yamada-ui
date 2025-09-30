import type { Meta } from "@storybook/react-vite"
import { Button } from "../button"
import { Text } from "../text"
import { Wrap } from "../wrap"
import { useLoading } from "./loading-provider"

const meta: Meta = {
  parameters: { layout: "centered" },
  title: "Hooks / useLoading",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const Basic = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button onClick={() => screen.start()}>Start screen loading</Button>
      <Button onClick={() => page.start()}>Start page loading</Button>
      <Button onClick={() => background.start()}>
        Start background loading
      </Button>
    </Wrap>
  )
}

export const Duration = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
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
  )
}

export const Message = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button
        onClick={() => screen.start({ duration: 5000, message: "Loading" })}
      >
        Start screen loading
      </Button>
      <Button
        onClick={() => page.start({ duration: 5000, message: "Loading" })}
      >
        Start page loading
      </Button>
      <Button
        onClick={() => background.start({ duration: 5000, message: "Loading" })}
      >
        Start background loading
      </Button>
    </Wrap>
  )
}

export const LoadingScheme = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button
        onClick={() => screen.start({ duration: 5000, loadingScheme: "grid" })}
      >
        Start screen loading
      </Button>
      <Button
        onClick={() => page.start({ duration: 5000, loadingScheme: "dots" })}
      >
        Start page loading
      </Button>
      <Button
        onClick={() =>
          background.start({ duration: 5000, loadingScheme: "puff" })
        }
      >
        Start background loading
      </Button>
    </Wrap>
  )
}

export const CustomMessage = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button
        onClick={() =>
          screen.start({ message: <Text color="primary">Loading</Text> })
        }
      >
        Start screen loading
      </Button>
      <Button
        onClick={() =>
          page.start({ message: <Text color="primary">Loading</Text> })
        }
      >
        Start page loading
      </Button>
      <Button
        onClick={() =>
          background.start({ message: <Text color="primary">Loading</Text> })
        }
      >
        Start background loading
      </Button>
    </Wrap>
  )
}

export const UpdateMessage = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button
        onClick={() => {
          screen.start({ duration: 10000, message: "Loading" })

          setTimeout(() => {
            screen.update({ message: "Please wait" })
          }, 5000)
        }}
      >
        Start screen loading
      </Button>

      <Button
        onClick={() => {
          page.start({ duration: 10000, message: "Loading" })

          setTimeout(() => {
            page.update({ message: "Please wait" })
          }, 5000)
        }}
      >
        Start page loading
      </Button>

      <Button
        onClick={() => {
          background.start({ duration: 10000, message: "Loading" })

          setTimeout(() => {
            background.update({ message: "Please wait" })
          }, 5000)
        }}
      >
        Start background loading
      </Button>
    </Wrap>
  )
}

export const AsyncFunction = () => {
  const { page } = useLoading()

  const getData = async () => {
    page.start({ message: "Get Data 1/3" })

    await wait(3000)

    page.update({ message: "Please wait 2/3" })

    await wait(3000)

    page.update({ message: "Almost done 3/3" })

    await wait(3000)

    page.finish()
  }

  return <Button onClick={getData}>Start page loading</Button>
}
