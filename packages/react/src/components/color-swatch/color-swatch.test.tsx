import { a11y, render, screen } from "#test"
import { vi } from "vitest"
import { ColorSwatch, ColorSwatchGroup } from "."

describe("<ColorSwatchGroup />", () => {
  test("renders empty swatch when no items are provided", () => {
    render(<ColorSwatchGroup />)

    expect(screen.getByLabelText("Color swatch group")).toBeInTheDocument()
  })

  test("renders empty swatch when items is an empty array", () => {
    render(<ColorSwatchGroup items={[]} />)

    expect(screen.getByLabelText("Color swatch group")).toBeInTheDocument()
  })

  test("renders color swatches for provided items", () => {
    render(<ColorSwatchGroup items={["#ff0000", "#00ff00"]} />)

    expect(screen.getByLabelText("Color swatch group")).toBeInTheDocument()
  })

  test("warns when more than 4 items are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())

    render(
      <ColorSwatchGroup
        items={["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]}
      />,
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "ColorSwatchGroup: doesn't support more than 4 items",
    )

    warnSpy.mockRestore()
  })

  test("renders correctly with 3 items", () => {
    render(<ColorSwatchGroup items={["#ff0000", "#00ff00", "#0000ff"]} />)

    expect(screen.getByLabelText("Color swatch group")).toBeInTheDocument()
  })
})

describe("<ColorSwatch />", () => {
  test("renders correctly", async () => {
    await a11y(<ColorSwatch color="#ff0000" />)
  })
})
