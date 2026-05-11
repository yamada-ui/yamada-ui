import { a11y } from "#test"
import { CircleProgress } from "./"

describe("<CircleProgress />", () => {
  test("passes a11y checks", async () => {
    await a11y(<CircleProgress.Root value={50} />)
  })
})
