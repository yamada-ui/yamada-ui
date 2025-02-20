import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "../button"
import { ShoppingCartIcon } from "../icon"
import { EmptyState } from "./"

type Story = StoryFn<typeof EmptyState.Root>

const meta: Meta<typeof EmptyState.Root> = {
  component: EmptyState.Root,
  title: "Components / EmptyState",
}

export default meta

export const Basic: Story = () => {
  return (
    <EmptyState.Root
      description="Explore our products and add items to your cart"
      indicator={<ShoppingCartIcon />}
      title="Your cart is empty"
    />
  )
}

export const Size: Story = () => {
  return (
    <>
      <EmptyState.Root
        size="sm"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
      <EmptyState.Root
        size="md"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
      <EmptyState.Root
        size="lg"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
    </>
  )
}

export const Children: Story = () => {
  return (
    <EmptyState.Root
      description="Explore our products and add items to your cart"
      indicator={<ShoppingCartIcon />}
      title="Your cart is empty"
    >
      <Button>Back to home</Button>
    </EmptyState.Root>
  )
}

export const Custom: Story = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Indicator>
        <ShoppingCartIcon />
      </EmptyState.Indicator>

      <EmptyState.Title>Your cart is empty</EmptyState.Title>

      <EmptyState.Description>
        Explore our products and add items to your cart
      </EmptyState.Description>
    </EmptyState.Root>
  )
}
