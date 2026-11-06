import { a11y, screen } from "#test"
import { Field } from "../field"
import { FileButton } from "./file-button"

describe("<FileButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })

  test("uses its visible text as the name inside a labeled field", async () => {
    await a11y(
      <Field.Root label="Files">
        <FileButton>Upload</FileButton>
      </Field.Root>,
    )

    expect(screen.getByRole("button", { name: "Upload" })).toBeInTheDocument()
  })
})
