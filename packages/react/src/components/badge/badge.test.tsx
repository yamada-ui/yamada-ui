import { a11y } from "#test"
import { Badge } from "./"

describe("<Badge />", () => {
  test("renders component correctly", async () => {
    await a11y(<Badge>Badge</Badge>)
  })
})
