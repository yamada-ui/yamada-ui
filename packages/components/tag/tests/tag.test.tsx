import { CheckIcon } from "@yamada-ui/icon"
import { a11y, render } from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import { Tag } from "../src"

describe("<Tag />", () => {
  test("renders tag correctly", async () => {
    await a11y(<Tag>Tag</Tag>)
  })

  test("Tag with icon renders correctly", () => {
    const { getByTestId } = render(
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      <Tag startIcon={<CheckIcon data-testid="icon" />}>Tag</Tag>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })

  test("Tag with close button renders correctly", () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" onClose={noop}>
        Tag
      </Tag>,
    )

    expect(getByTestId("tag").lastChild).toBeInTheDocument()

    expect(getByTestId("tag").lastChild).toHaveAttribute("aria-label")
  })
})
