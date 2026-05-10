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
    const { rerender } = render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const tag = screen.getByTestId("tag")
    expect(tag).toHaveClass("ui-tag__root")
    expect(tag.children[0]).toHaveClass("ui-tag__icon")
    expect(tag.children[0]).toHaveClass("ui-tag__icon--start")
    expect(tag.children[1]).toHaveClass("ui-tag__content")
    expect(tag.children[2]).toHaveClass("ui-tag__icon")
    expect(tag.children[2]).toHaveClass("ui-tag__icon--end")

    rerender(
      <Tag data-testid="tag" onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = screen.getByTestId("tag")
    expect(tagWithCloseButton.lastElementChild).toHaveClass("ui-tag__icon")
    expect(tagWithCloseButton.lastElementChild).toHaveClass(
      "ui-tag__icon--close-button",
    )
  })

  test("renders HTML tag correctly", () => {
    const { rerender } = render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const tag = screen.getByTestId("tag")
    expect(tag.tagName).toBe("SPAN")
    expect(tag.children[0]?.tagName).toBe("SPAN")
    expect(tag.children[1]?.tagName).toBe("SPAN")
    expect(tag.children[2]?.tagName).toBe("SPAN")

    rerender(
      <Tag data-testid="tag" onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = screen.getByTestId("tag")
    expect(tagWithCloseButton.tagName).toBe("SPAN")
    expect(tagWithCloseButton.lastElementChild?.tagName).toBe("SPAN")
  })

  test("renders icons correctly", () => {
    const { rerender } = render(
      <Tag startIcon={<CheckIcon data-testid="startIcon" />}>Tag</Tag>,
    )
    expect(screen.getByTestId("startIcon")).toBeInTheDocument()

    rerender(<Tag endIcon={<CheckIcon data-testid="endIcon" />}>Tag</Tag>)
    expect(screen.getByTestId("endIcon")).toBeInTheDocument()
  })

  test("should be disabled", () => {
    const { rerender } = render(
      <Tag
        data-testid="tag"
        disabled
        endIcon={<CheckIcon />}
        startIcon={<CheckIcon />}
      >
        Tag
      </Tag>,
    )
    const tag = screen.getByTestId("tag")
    expect(tag).toHaveAttribute("data-disabled")
    expect(tag.children[0]).toHaveAttribute("data-disabled")
    expect(tag.children[1]).toHaveAttribute("data-disabled")
    expect(tag.children[2]).toHaveAttribute("data-disabled")

    rerender(
      <Tag data-testid="tag" disabled onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = screen.getByTestId("tag")
    expect(tagWithCloseButton.lastElementChild).toHaveAttribute("data-disabled")
  })
})
