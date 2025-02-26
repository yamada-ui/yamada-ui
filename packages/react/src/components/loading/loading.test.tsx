import { a11y } from "../../../test"
import { Loading } from "./"

describe("<Loading />", () => {
  test("passes a11y test", async () => {
    await a11y(<Loading.Oval />)
  })
})
