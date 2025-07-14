import { a11y } from "@/test"
import { Slot, Slottable } from "./slot"

describe("<Slot />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slot>Slot</Slot>)
  })

  test("sets `displayName` correctly", () => {
    expect(Slot.name).toBe("Slot")
    expect(Slottable.name).toBe("Slottable")
  })
})
