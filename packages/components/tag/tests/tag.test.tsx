import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { CheckIcon } from "@yamada-ui/icon"
import { render } from "@yamada-ui/test"
import { Tag } from "../src"

describe("<Tag />", () => {
  test("renders tag correctly", () => {
    render(<Tag>Tag</Tag>)
  })

  test("Tag with icon renders correctly", () => {
    const { getByTestId } = render(
      <Tag leftIcon={<CheckIcon data-testid="icon" />}>Tag</Tag>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })

  test("Tag with close button renders correctly", async () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" onClose={() => {}}>
        Tag
      </Tag>,
    )

    expect(getByTestId("tag").lastChild).toBeInTheDocument()

    expect(getByTestId("tag").lastChild).toHaveAttribute("aria-label")
  })

  test("applies styles `gap` correctly", async () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" leftIcon={<Icon icon={faPlus} />}>
        Gap
      </Tag>,
    )
    expect(getByTestId("tag")).toHaveStyle("gap: 0.25rem;")
  })

  test("Is `fontSize` correctly applied to the close button style", async () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" onClose={() => {}}>
        Close
      </Tag>,
    )
    expect(
      getByTestId("tag")
        .querySelector('span[aria-label="close"]')
        ?.querySelector("svg"),
    ).toHaveStyle("font-size: 1.125rem;")
  })
})
