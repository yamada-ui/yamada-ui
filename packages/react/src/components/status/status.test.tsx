import { a11y } from "#test"
import { Status } from "./"

describe("<Status />", () => {
  test("renders component correctly", async () => {
    await a11y(<Status>Info</Status>)
  })
})
