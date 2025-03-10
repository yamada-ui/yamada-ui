import { a11y } from "../../../test"
import { Slot } from "./slot"

describe("<Slot />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slot>Slot</Slot>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Slot.displayName).toBe("Slot")
    expect(Slot.__ui__).toBe("Slot")
  })
})
