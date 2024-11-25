import type { Meta, StoryFn } from "@storybook/react"
import { ShoppingCartIcon } from "@yamada-ui/lucide"
import {
  Button,
  EmptyState,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateTitle,
} from "@yamada-ui/react"

type Story = StoryFn<typeof EmptyState>

const meta: Meta<typeof EmptyState> = {
  component: EmptyState,
  title: "Components / Other / EmptyState",
}

export default meta

export const basic: Story = () => {
  return (
    <EmptyState
      description="Explore our products and add items to your cart"
      indicator={<ShoppingCartIcon />}
      title="Your cart is empty"
    />
  )
}

export const withSize: Story = () => {
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

export const withChildren: Story = () => {
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

export const custom: Story = () => {
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
