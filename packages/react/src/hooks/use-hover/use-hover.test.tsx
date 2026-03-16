import { page, render } from "#test/browser"
import { useHover } from "./"

describe("useHover", () => {
  test("should work correctly (not-hovered => hovered => not-hovered))", async () => {
    const hoveredText = "Hovered"
    const notHoveredText = "Not hovered"

    const Text = () => {
      const { ref, hovered } = useHover()

      return <span ref={ref}>{hovered ? hoveredText : notHoveredText}</span>
    }

    const { user } = await render(<Text />)

    await expect.element(page.getByText(notHoveredText)).toBeInTheDocument()
    await expect
      .element(page.getByText(/^Hovered$/).query())
      .not.toBeInTheDocument()

    await user.hover(page.getByText(notHoveredText))
    await expect.element(page.getByText(/^Hovered$/)).toBeInTheDocument()
    await expect
      .element(page.getByText(/^Not hovered$/).query())
      .not.toBeInTheDocument()

    await user.unhover(page.getByText(/^Hovered$/))
    await expect.element(page.getByText(notHoveredText)).toBeInTheDocument()
    await expect
      .element(page.getByText(/^Hovered$/).query())
      .not.toBeInTheDocument()
  })
})
