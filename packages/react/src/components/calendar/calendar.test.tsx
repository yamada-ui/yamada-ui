import { a11y } from "#test"
import { Calendar } from "./"

describe("<Calendar />", () => {
  test("renders component correctly", async () => {
    await a11y(<Calendar.Root />)
  })
})
