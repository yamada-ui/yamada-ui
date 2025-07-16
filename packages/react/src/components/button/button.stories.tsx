import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { For } from "../for"
import { ArrowRightIcon, CheckIcon, MailIcon, PlusIcon, XIcon } from "../icon"
import { Loading } from "../loading"
import { Wrap } from "../wrap"
import { Button } from "./button"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components / Button",
}

export default meta

export const Basic: Story = () => {
  return <Button>Button</Button>
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline", "ghost"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Button key={key} colorScheme={row} variant={column}>
            Button
          </Button>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Button key={key} colorScheme={row} size={column}>
            Button
          </Button>
        )
      }}
    </PropsTable>
  )
}

export const FullRounded: Story = () => {
  return (
    <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => (
          <Button key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const Disabled: Story = () => {
  return (
    <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => (
          <Button key={index} variant={variant} disabled>
            {toTitleCase(variant)}
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const Icon: Story = () => {
  return (
    <Wrap gap="md">
      <Button
        colorScheme="primary"
        size="xs"
        variant="solid"
        startIcon={<PlusIcon />}
      >
        Button
      </Button>

      <Button
        colorScheme="secondary"
        size="sm"
        variant="subtle"
        endIcon={<ArrowRightIcon />}
      >
        Button
      </Button>

      <Button
        colorScheme="info"
        size="md"
        variant="surface"
        startIcon={<MailIcon />}
      >
        Button
      </Button>

      <Button
        colorScheme="warning"
        size="lg"
        variant="outline"
        startIcon={<CheckIcon />}
      >
        Button
      </Button>

      <Button
        colorScheme="danger"
        size="xl"
        variant="ghost"
        startIcon={<XIcon />}
      >
        Button
      </Button>
    </Wrap>
  )
}

export const LoadingIcon: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" loading>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="subtle"
        loading
        loadingIcon="dots"
      >
        Button
      </Button>

      <Button
        colorScheme="info"
        variant="surface"
        loading
        loadingIcon={<Loading.Puff />}
      >
        Button
      </Button>

      <Button
        colorScheme="warning"
        variant="outline"
        loading
        loadingMessage="Loading..."
      >
        Button
      </Button>

      <Button
        colorScheme="danger"
        variant="ghost"
        loading
        loadingIcon="grid"
        loadingMessage="Loading..."
        loadingPlacement="end"
      >
        Button
      </Button>
    </Wrap>
  )
}
