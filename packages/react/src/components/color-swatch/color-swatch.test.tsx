import { vi } from "vitest"
import { a11y, render, screen } from "#test"
import { ColorSwatch, ColorSwatchGroup } from "./"

describe("<ColorSwatchGroup />", () => {
  test("passes a11y checks", async () => {
    await a11y(<ColorSwatchGroup items={["#ff0000", "#00ff00", "#0000ff"]} />)
  })

  test("renders empty swatch when no items are provided", () => {
    render(<ColorSwatchGroup />)

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
})

describe("<ColorSwatch />", () => {
  test("passes a11y checks", async () => {
    await a11y(<ColorSwatch color="#ff0000" />)
  })
})
