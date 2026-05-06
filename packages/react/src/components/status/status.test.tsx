import { a11y } from "#test"
import { Status } from "./"

describe("<Status />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Status>Info</Status>)
  })
})
