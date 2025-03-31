import { a11y } from "../../../test"
import { Slot } from "./slot"

describe("<Slot />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slot>Slot</Slot>)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Slot.displayName).toBe("Slot")
    expect(Slot.__styled__).toBe("Slot")
  })
})
