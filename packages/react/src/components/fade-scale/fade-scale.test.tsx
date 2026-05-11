import { a11y } from "#test"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  test("renders component correctly", async () => {
    await a11y(<FadeScale />)
  })
})
