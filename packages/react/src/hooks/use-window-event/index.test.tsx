import { a11y } from "#test"
import { Basic } from "./index.stories"

describe("useWindowEvent", () => {
  test("renders with no a11y violations", async () => {
    await a11y(<Basic />)
  })
})
