import { a11y } from "#test"
import { Prose } from "./prose"

describe("<Prose />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Prose>
        <h1>Article</h1>
        <p>
          Read <a href="#details">the details</a> with <code>code</code>.
        </p>
        <h2 id="details">Details</h2>
      </Prose>,
    )
  })
})
