import { a11y } from "@yamada-ui/test"
import { EmptyState } from "../src"

describe("<EmptyState />", () => {
  test("EmptyState renders correctly", async () => {
    await a11y(
      <EmptyState
        description="Explore our products and add items to your cart"
        title="Your cart is empty"
      />,
    )
  })
})
