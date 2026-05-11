import { a11y } from "#test"
import { FocusLock } from "./focus-lock"

describe("<FocusLock />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <FocusLock>
        <button>Focused Button</button>
      </FocusLock>,
    )
  })
})
