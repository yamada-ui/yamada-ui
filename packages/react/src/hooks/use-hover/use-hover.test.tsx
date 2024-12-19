import { render, screen } from "../../../test"
import { useHover } from "./"

describe("useHover", () => {
  test("should work correctly (not-hovered => hovered => not-hovered))", async () => {
    const hoveredText = "Hovered"
    const notHoveredText = "Not hovered"

    const Text = () => {
      const { ref, hovered } = useHover()

      return <span ref={ref}>{hovered ? hoveredText : notHoveredText}</span>
    }

    const { user } = render(<Text />)

    const initialTextComponent = await screen.findByText(notHoveredText)
    expect(initialTextComponent).toBeInTheDocument()
    expect(screen.queryByText(hoveredText)).toBeNull()

    await user.hover(initialTextComponent)
    const hoveredTextComponent = await screen.findByText(hoveredText)
    expect(hoveredTextComponent).toBeInTheDocument()
    expect(screen.queryByText(notHoveredText)).toBeNull()

    await user.unhover(hoveredTextComponent)
    const unHoveredTextComponent = await screen.findByText(notHoveredText)
    expect(unHoveredTextComponent).toBeInTheDocument()
    expect(screen.queryByText(hoveredText)).toBeNull()
  })
})
