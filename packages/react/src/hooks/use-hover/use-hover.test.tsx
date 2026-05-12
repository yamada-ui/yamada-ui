import { render, screen } from "#test"
import { useHover } from "./"

describe("useHover", () => {
  test("renders initial non-hover state in jsdom", async () => {
    const Text = () => {
      const { ref, hovered } = useHover()

      return <span ref={ref}>{hovered ? "Hovered" : "Not hovered"}</span>
    }

    render(<Text />)

    await expect(screen.findByText("Not hovered")).resolves.toBeInTheDocument()
    expect(screen.queryByText("Hovered")).toBeNull()
  })
})
