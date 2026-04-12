import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const tag = page.getByTestId("tag")
    await expect.element(tag).toHaveClass("ui-tag__root")
    const tagEl = tag.element()
    expect(tagEl.children[0]).toHaveClass("ui-tag__icon")
    expect(tagEl.children[0]).toHaveClass("ui-tag__icon--start")
    expect(tagEl.children[1]).toHaveClass("ui-tag__content")
    expect(tagEl.children[2]).toHaveClass("ui-tag__icon")
    expect(tagEl.children[2]).toHaveClass("ui-tag__icon--end")
    await render(
      <Tag data-testid="tagWithCloseButton" onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = page.getByTestId("tagWithCloseButton").element()
    expect(tagWithCloseButton.lastElementChild).toHaveClass("ui-tag__icon")
    expect(tagWithCloseButton.lastElementChild).toHaveClass(
      "ui-tag__icon--close-button",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Tag data-testid="tag" endIcon={<CheckIcon />} startIcon={<CheckIcon />}>
        Tag
      </Tag>,
    )
    const tagEl = page.getByTestId("tag").element()
    expect(tagEl.tagName).toBe("SPAN")
    expect(tagEl.children[0]?.tagName).toBe("SPAN")
    expect(tagEl.children[1]?.tagName).toBe("SPAN")
    expect(tagEl.children[2]?.tagName).toBe("SPAN")
    await render(
      <Tag data-testid="tagWithCloseButton" onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = page.getByTestId("tagWithCloseButton").element()
    expect(tagWithCloseButton.lastElementChild?.tagName).toBe("SPAN")
  })

  test("Tag with icon renders correctly", async () => {
    await render(
      <Tag startIcon={<CheckIcon data-testid="startIcon" />}>Tag</Tag>,
    )
    await expect.element(page.getByTestId("startIcon")).toBeInTheDocument()
    await render(<Tag endIcon={<CheckIcon data-testid="endIcon" />}>Tag</Tag>)
    await expect.element(page.getByTestId("endIcon")).toBeInTheDocument()
  })

  test("should be disabled", async () => {
    await render(
      <Tag
        data-testid="tag"
        disabled
        endIcon={<CheckIcon />}
        startIcon={<CheckIcon />}
      >
        Tag
      </Tag>,
    )
    const tag = page.getByTestId("tag")
    await expect.element(tag).toHaveAttribute("data-disabled")
    const tagEl = tag.element()
    expect(tagEl.children[0]).toHaveAttribute("data-disabled")
    expect(tagEl.children[1]).toHaveAttribute("data-disabled")
    expect(tagEl.children[2]).toHaveAttribute("data-disabled")
    await render(
      <Tag data-testid="tagWithCloseButton" disabled onClose={noop}>
        Tag
      </Tag>,
    )
    const tagWithCloseButton = page.getByTestId("tagWithCloseButton").element()
    expect(tagWithCloseButton.lastElementChild).toHaveAttribute("data-disabled")
  })
})
