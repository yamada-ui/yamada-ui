import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES, noop } from "../../utils"
import { CloseButton } from "../close-button"
import { VStack } from "../stack"
import { Alert } from "./"

type Story = StoryFn<typeof Alert.Root>

const meta: Meta<typeof Alert.Root> = {
  component: Alert.Root,
  title: "Components / Alert",
}

export default meta

export const Basic: Story = () => {
  return (
    <Alert.Root>
      <Alert.Icon />
      <Alert.Title>セル</Alert.Title>
      <Alert.Description>
        か…完全体に………完全体になれさえすれば………！！！
      </Alert.Description>
    </Alert.Root>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["plain", "solid", "subtle", "surface", "island"]}
      rows={["info", "success", "warning", "error"]}
    >
      {(column, row, key) => {
        return (
          <Alert.Root key={key} variant={column} status={row}>
            {column !== "island" ? <Alert.Icon /> : null}
            <Alert.Title>セル</Alert.Title>
            <Alert.Description>
              か…完全体に………完全体になれさえすれば………！！！
            </Alert.Description>
          </Alert.Root>
        )
      }}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["plain", "solid", "subtle", "surface", "island"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Alert.Root key={key} colorScheme={row} variant={column}>
            {column !== "island" ? <Alert.Icon /> : null}
            <Alert.Title>セル</Alert.Title>
            <Alert.Description>
              か…完全体に………完全体になれさえすれば………！！！
            </Alert.Description>
          </Alert.Root>
        )
      }}
    </PropsTable>
  )
}

export const Status: Story = () => {
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

export const Loading: Story = () => {
  return (
    <>
      <Alert.Root variant="plain" status="info">
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

export const CustomLayout: Story = () => {
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
        <Alert.Icon />

        <VStack gap="xs">
          <Alert.Title>セル</Alert.Title>
          <Alert.Description>
            か…完全体に………完全体になれさえすれば………！！！
          </Alert.Description>
        </VStack>

        <CloseButton
          colorScheme="mono"
          position="absolute"
          right={2}
          top={2}
          onClick={noop}
        />
      </Alert.Root>
    </>
  )
}
