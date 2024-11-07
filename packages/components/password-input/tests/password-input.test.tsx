import { a11y } from "@yamada-ui/test"
import { PasswordInput } from "../src"

describe("<PasswordInput />", () => {
  test("PasswordInput renders correctly", async () => {
    await a11y(<PasswordInput />)
  })
})
