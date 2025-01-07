import type { Meta, StoryFn } from "@storybook/react"
import { noop } from "../../utils"
import { Box } from "../box"
import { CloseButton } from "../close-button"
import { Alert } from "./"

type Story = StoryFn<typeof Alert.Root>

const meta: Meta<typeof Alert.Root> = {
  component: Alert.Root,
  title: "Components / Alert",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Alert.Root status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const Subtle: Story = () => {
  return (
    <>
      <Alert.Root variant="subtle" status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="subtle" status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="subtle" status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="subtle" status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const Surface: Story = () => {
  return (
    <>
      <Alert.Root variant="surface" status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="surface" status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="surface" status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="surface" status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const Solid: Story = () => {
  return (
    <>
      <Alert.Root variant="solid" status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="solid" status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="solid" status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="solid" status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const IslandAccent: Story = () => {
  return (
    <>
      <Alert.Root variant="island" status="info">
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="island" status="success">
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="island" status="warning">
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="island" status="error">
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const WithColorMode: Story = () => {
  return (
    <>
      <Alert.Root colorScheme="green" status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root colorScheme="purple" status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root colorScheme="gray" status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root colorScheme="pink" status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}

export const UseCustomLayout: Story = () => {
  return (
    <>
      <Alert.Root
        alignItems="center"
        flexDirection="column"
        h="2xs"
        justifyContent="center"
        status="success"
        textAlign="center"
      >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title fontSize="lg" mb={1} mr={0} mt={4}>
          セル
        </Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="success">
        <Box>
          <Alert.Title>セル</Alert.Title>
          <Alert.Description>
            か…完全体に………完全体になれさえすれば………！！！
          </Alert.Description>
        </Box>
        <CloseButton position="absolute" right={2} top={2} onClick={noop} />
      </Alert.Root>
    </>
  )
}

export const WithLoading: Story = () => {
  return (
    <>
      <Alert.Root variant="basic" status="info">
        <Alert.Loading />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="subtle" status="success">
        <Alert.Loading loadingScheme="grid" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="solid" status="warning">
        <Alert.Loading loadingScheme="puff" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="surface" status="error">
        <Alert.Loading loadingScheme="dots" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>
  )
}
