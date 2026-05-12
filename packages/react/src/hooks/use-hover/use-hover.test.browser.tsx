import { page, render } from "#test/browser"
import { useHover } from "./"

describe("useHover", () => {
  test("should work correctly (not-hovered => hovered => not-hovered)", async () => {
    const hoveredText = /^Hovered$/
    const notHoveredText = /^Not hovered$/

    const Text = () => {
      const { ref, hovered } = useHover()

      return <span ref={ref}>{hovered ? "Hovered" : "Not hovered"}</span>
    }

    const { user } = await render(<Text />)

    const text = page.getByText(notHoveredText)

    await expect.element(text).toBeInTheDocument()
    await expect
      .element(page.getByText(hoveredText).query())
      .not.toBeInTheDocument()

    await user.hover(text)

    await expect.element(page.getByText(hoveredText)).toBeInTheDocument()
    await expect
      .element(page.getByText(notHoveredText).query())
      .not.toBeInTheDocument()

    await user.unhover(text)

    await expect.element(page.getByText(notHoveredText)).toBeInTheDocument()
    await expect
      .element(page.getByText(hoveredText).query())
      .not.toBeInTheDocument()
  })
})
