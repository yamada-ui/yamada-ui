import { a11y } from "#test"
import { QrCode } from "."

describe("<QrCode />", () => {
  test("renders component correctly", async () => {
    await a11y(<QrCode.Root value="https://yamada-ui.com" />)
  })
})
