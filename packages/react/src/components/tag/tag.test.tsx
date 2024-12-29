import { a11y, render } from "../../../test"
import { noop } from "../../utils"
import { CheckIcon } from "../icon"
import { Tag } from "./"

describe("<Tag />", () => {
  test("renders tag correctly", async () => {
    await a11y(<Tag.Root>Tag</Tag.Root>)
  })

  test("Tag with icon renders correctly", () => {
    const { getByTestId } = render(
      <Tag.Root startIcon={<CheckIcon data-testid="icon" />}>Tag</Tag.Root>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })

  test("Tag with close button renders correctly", () => {
    const { getByTestId } = render(
      <Tag.Root data-testid="tag" onClose={noop}>
        Tag
      </Tag.Root>,
    )

    expect(getByTestId("tag").lastChild).toBeInTheDocument()

    expect(getByTestId("tag").lastChild).toHaveAttribute("aria-label")
  })
})
