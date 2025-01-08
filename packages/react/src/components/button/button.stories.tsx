import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Wrap } from "../flex"
import { ArrowRightIcon, CheckIcon, MailIcon, PlusIcon } from "../icon"
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

export const Disabled: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" disabled>
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline" disabled>
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost" disabled>
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link" disabled>
        Link
      </Button>

      <Button variant="unstyled" disabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const Icon: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" startIcon={<PlusIcon />}>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        endIcon={<ArrowRightIcon />}
      >
        Button
      </Button>

      <Button colorScheme="warning" variant="ghost" startIcon={<MailIcon />}>
        Button
      </Button>

      <Button colorScheme="danger" variant="link" startIcon={<CheckIcon />}>
        Button
      </Button>
    </Wrap>
  )
}

export const Loading: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" loading>
        Button
      </Button>

      <Button colorScheme="secondary" loading loadingIcon="dots">
        Button
      </Button>

      <Button colorScheme="warning" variant="outline" loading>
        Button
      </Button>

      <Button colorScheme="danger" variant="ghost" loading>
        Button
      </Button>

      <Button colorScheme="primary" loading loadingMessage="Loading...">
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
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
