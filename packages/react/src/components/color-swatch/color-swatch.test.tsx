import { a11y, page, render } from "#test/browser"
import { vi } from "vitest"
import { ColorSwatch, ColorSwatchGroup } from "."

describe("<ColorSwatchGroup />", () => {
  test("renders empty swatch when no items are provided", async () => {
    await render(<ColorSwatchGroup />)

    await expect
      .element(page.getByLabelText("Color swatch group"))
      .toBeInTheDocument()
  })

  test("renders empty swatch when items is an empty array", async () => {
    await render(<ColorSwatchGroup items={[]} />)

    await expect
      .element(page.getByLabelText("Color swatch group"))
      .toBeInTheDocument()
  })

  test("renders color swatches for provided items", async () => {
    await render(<ColorSwatchGroup items={["#ff0000", "#00ff00"]} />)

    await expect
      .element(page.getByLabelText("Color swatch group"))
      .toBeInTheDocument()
  })

  test("warns when more than 4 items are provided", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())

    await render(
      <ColorSwatchGroup
        items={["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]}
      />,
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "ColorSwatchGroup: doesn't support more than 4 items",
    )

    warnSpy.mockRestore()
  })

  test("renders correctly with 3 items", async () => {
    await render(<ColorSwatchGroup items={["#ff0000", "#00ff00", "#0000ff"]} />)

    await expect
      .element(page.getByLabelText("Color swatch group"))
      .toBeInTheDocument()
  })
})

describe("<ColorSwatch />", () => {
  test("renders correctly", async () => {
    await a11y(<ColorSwatch color="#ff0000" />)
  })
})
