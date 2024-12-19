import { a11y } from "../../../test"
import { Em } from "./em"

describe("<Em />", () => {
  test("renders em correctly", async () => {
    await a11y(<Em>Unleash the Power</Em>)
  })
})
