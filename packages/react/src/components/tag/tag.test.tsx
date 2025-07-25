import { a11y, render, screen } from "#test"
import { noop } from "../../utils"
import { CheckIcon } from "../icon"
import { Tag } from "./"

describe("<Tag />", () => {
  test("renders component correctly", async () => {
    await a11y(<Tag>Tag</Tag>)
  })

  test("sets `displayName` correctly", () => {
    expect(Tag.displayName).toBe("TagRoot")
  })

  test("sets `className` correctly", () => {
    render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const el = screen.getByTestId("tag")
    expect(el).toHaveClass("ui-tag__root")
    expect(el.children[0]).toHaveClass("ui-tag__icon")
    expect(el.children[0]).toHaveClass("ui-tag__icon--start")
    expect(el.children[1]).toHaveClass("ui-tag__content")
    expect(el.children[2]).toHaveClass("ui-tag__icon")
    expect(el.children[2]).toHaveClass("ui-tag__icon--end")
    render(
      <Tag data-testid="tagWithCloseButton" onClose={noop}>
        Tag
      </Tag>,
    )
    const ElWithCloseButton = screen.getByTestId("tagWithCloseButton")
    expect(ElWithCloseButton.lastElementChild).toHaveClass("ui-tag__icon")
    expect(ElWithCloseButton.lastElementChild).toHaveClass(
      "ui-tag__icon--close-button",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const el = screen.getByTestId("tag")
    expect(el.tagName).toBe("SPAN")
    expect(el.children[0]?.tagName).toBe("SPAN")
    expect(el.children[1]?.tagName).toBe("SPAN")
    expect(el.children[2]?.tagName).toBe("SPAN")
    render(
      <Tag data-testid="tagWithCloseButton" onClose={noop}>
        Tag
      </Tag>,
    )
    const ElWithCloseButton = screen.getByTestId("tagWithCloseButton")
    expect(ElWithCloseButton.lastElementChild?.tagName).toBe("SPAN")
  })

  test("Tag with icon renders correctly", () => {
    render(<Tag startIcon={<CheckIcon data-testid="startIcon" />}>Tag</Tag>)
    expect(screen.getByTestId("startIcon")).toBeInTheDocument()
    render(<Tag endIcon={<CheckIcon data-testid="endIcon" />}>Tag</Tag>)
    expect(screen.getByTestId("endIcon")).toBeInTheDocument()
  })

  test("should be disabled", () => {
    render(
      <Tag
        data-testid="tag"
        disabled
        endIcon={<CheckIcon />}
        startIcon={<CheckIcon />}
      >
        Tag
      </Tag>,
    )
    const el = screen.getByTestId("tag")
    expect(el).toHaveAttribute("data-disabled")
    expect(el.children[0]).toHaveAttribute("data-disabled")
    expect(el.children[1]).toHaveAttribute("data-disabled")
    expect(el.children[2]).toHaveAttribute("data-disabled")
    render(
      <Tag data-testid="tagWithCloseButton" disabled onClose={noop}>
        Tag
      </Tag>,
    )
    const ElWithCloseButton = screen.getByTestId("tagWithCloseButton")
    expect(ElWithCloseButton.lastElementChild).toHaveAttribute("data-disabled")
  })
})
