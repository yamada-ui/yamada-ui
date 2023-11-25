import type { Meta, StoryFn } from "@storybook/react"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Alert>

const meta: Meta<typeof Alert> = {
  title: "Components / Feedback / Alert",
  component: Alert,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const subtle: Story = () => {
  return (
    <>
      <Alert status="info" variant="subtle">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" variant="subtle">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" variant="subtle">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" variant="subtle">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const solid: Story = () => {
  return (
    <>
      <Alert status="info" variant="solid">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" variant="solid">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" variant="solid">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" variant="solid">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const islandAccent: Story = () => {
  return (
    <>
      <Alert status="info" variant="island-accent">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" variant="island-accent">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" variant="island-accent">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" variant="island-accent">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const topAccent: Story = () => {
  return (
    <>
      <Alert status="info" variant="top-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" variant="top-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" variant="top-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" variant="top-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const leftAccent: Story = () => {
  return (
    <>
      <Alert status="info" variant="left-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" variant="left-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" variant="left-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" variant="left-accent">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const withColorMode: Story = () => {
  return (
    <>
      <Alert status="info" colorScheme="green">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success" colorScheme="purple">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning" colorScheme="gray">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error" colorScheme="pink">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const useCustomLayout: Story = () => {
  return (
    <>
      <Alert
        status="success"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        h="2xs"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontSize="lg" mt={4} mb={1} mr={0}>
          セル
        </AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <Box>
          <AlertTitle>セル</AlertTitle>
          <AlertDescription>
            か…完全体に………完全体になれさえすれば………！！！
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" top={2} right={2} onClick={() => {}} />
      </Alert>
    </>
  )
}

export const withLoading: Story = () => {
  return (
    <>
      <Alert status="loading" variant="subtle">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="loading" variant="solid">
        <AlertIcon variant="grid" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="loading" variant="subtle">
        <AlertIcon variant="puff" color="blue.500" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="loading" variant="solid">
        <AlertIcon variant="dots" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}
