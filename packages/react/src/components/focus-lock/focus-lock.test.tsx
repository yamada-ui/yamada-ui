import { a11y } from "#test"
import { FocusLock } from "./focus-lock"

describe("<FocusLock />", () => {
  test("sets `displayName` correctly", () => {
    expect(FocusLock.name).toBe("FocusLock")
  })

  test("passes a11y checks", async () => {
    await a11y(
      <FocusLock>
        <button>Focused Button</button>
      </FocusLock>,
    )
  })
})
