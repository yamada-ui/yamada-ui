import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "../button"
import { ShoppingCartIcon } from "../icon"
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateTitle,
} from "./"

type Story = StoryFn<typeof EmptyState>

const meta: Meta<typeof EmptyState> = {
  component: EmptyState,
  title: "Components / EmptyState",
}

export default meta

export const Basic: Story = () => {
  return (
    <EmptyState
      description="Explore our products and add items to your cart"
      indicator={<ShoppingCartIcon />}
      title="Your cart is empty"
    />
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <EmptyState
        size="sm"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
      <EmptyState
        size="md"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
      <EmptyState
        size="lg"
        description="Explore our products and add items to your cart"
        indicator={<ShoppingCartIcon />}
        title="Your cart is empty"
      />
    </>
  )
}

export const WithChildren: Story = () => {
  return (
    <EmptyState
      description="Explore our products and add items to your cart"
      indicator={<ShoppingCartIcon />}
      title="Your cart is empty"
    >
      <Button>Back to home</Button>
    </EmptyState>
  )
}

export const Custom: Story = () => {
  return (
    <EmptyState>
      <EmptyStateIndicator>
        <ShoppingCartIcon />
      </EmptyStateIndicator>

      <EmptyStateTitle>Your cart is empty</EmptyStateTitle>

      <EmptyStateDescription>
        Explore our products and add items to your cart
      </EmptyStateDescription>
    </EmptyState>
  )
}
