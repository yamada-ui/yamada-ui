import { a11y } from "../../../test"
import { Fieldset } from "../field"

describe("<Fieldset />", () => {
  test("Fieldset renders correctly", async () => {
    await a11y(
      <Fieldset
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      />,
    )
  })
})
