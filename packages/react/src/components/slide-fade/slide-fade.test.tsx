import { a11y } from "#test"
import { SlideFade } from "./slide-fade"

describe("<SlideFade />", () => {
  test("passes a11y check", async () => {
    await a11y(<SlideFade />)
  })
})
