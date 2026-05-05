import { a11y } from "#test"
import { Group } from "./group"

describe("<Group />", () => {
  test("renders component correctly", async () => {
    await a11y(<Group>Group</Group>)
  })
})
