import { page, render } from "#test/browser"
import { useHover } from "./"

describe("useHover", () => {
  test("should work correctly (not-hovered => hovered => not-hovered))", async () => {
    const hoveredText = /^Hovered$/
    const notHoveredText = /^Not hovered$/

    const Text = () => {
      const { ref, hovered } = useHover()

      return <span ref={ref}>{hovered ? "Hovered" : "Not hovered"}</span>
    }

    const { unmount, user } = await render(
      <>
        <button type="button">anchor</button>
        <Text />
      </>,
    )

    await user.hover(page.getByRole("button", { name: "anchor" }))

    const initialText = page.getByText(notHoveredText)
    await expect.element(initialText).toBeInTheDocument()
    await expect
      .element(page.getByText(hoveredText).query())
      .not.toBeInTheDocument()

    await user.hover(initialText)
    const hovered = page.getByText(hoveredText)
    await expect.element(hovered).toBeInTheDocument()
    await expect
      .element(page.getByText(notHoveredText).query())
      .not.toBeInTheDocument()

    await user.unhover(hovered)
    await expect.element(page.getByText(notHoveredText)).toBeInTheDocument()
    await expect
      .element(page.getByText(hoveredText).query())
      .not.toBeInTheDocument()

    unmount()
  })
})
