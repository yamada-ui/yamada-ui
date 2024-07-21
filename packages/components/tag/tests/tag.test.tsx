import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { CheckIcon } from "@yamada-ui/icon"
import { render, a11y } from "@yamada-ui/test"
import { Tag } from "../src"

describe("<Tag />", () => {
  test("renders tag correctly", async () => {
    await a11y(<Tag>Tag</Tag>)
  })

  test("Tag with icon renders correctly", () => {
    const { getByTestId } = render(
      <Tag startIcon={<CheckIcon data-testid="icon" />}>Tag</Tag>,
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
      <Tag data-testid="tag" startIcon={<Icon icon={faPlus} />}>
        Gap
      </Tag>,
    )
    expect(getByTestId("tag")).toHaveStyle("gap: var(--ui-spaces-1);")
  })

  test("Is `fontSize` correctly applied to the close button style", async () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" onClose={() => {}}>
        Close
      </Tag>,
    )
    expect(
      getByTestId("tag")
        .querySelector('span[aria-label="Close tag"]')
        ?.querySelector("svg"),
    ).toHaveStyle("font-size: 1.125rem;")
  })
})
