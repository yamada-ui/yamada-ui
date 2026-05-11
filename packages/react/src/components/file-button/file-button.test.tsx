import { a11y } from "#test"
import { FileButton } from "./file-button"

describe("<FileButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })
})
