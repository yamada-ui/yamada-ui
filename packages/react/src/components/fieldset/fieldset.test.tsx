import { a11y } from "../../../test"
import { Fieldset } from "./"

describe("<Fieldset />", () => {
  test("Fieldset renders correctly", async () => {
    await a11y(
      <Fieldset.Root
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      />,
    )
  })
})
