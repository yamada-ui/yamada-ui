import { a11y, render, screen } from "@/test"
import { Loading } from "./"

const TargetComponent = () => (
  <>
    <Loading.Oval data-testid="oval" />
    <Loading.Audio data-testid="audio" />
    <Loading.Circles data-testid="circles" />
    <Loading.Dots data-testid="dots" />
    <Loading.Grid data-testid="grid" />
    <Loading.Puff data-testid="puff" />
    <Loading.Rings data-testid="rings" />
  </>
)

describe("<Loading />", () => {
  test("passes a11y test", async () => {
    await a11y(<TargetComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Loading.Oval.displayName).toBe("Loading")
    expect(Loading.Audio.displayName).toBe("Loading")
    expect(Loading.Circles.displayName).toBe("Loading")
    expect(Loading.Dots.displayName).toBe("Loading")
    expect(Loading.Grid.displayName).toBe("Loading")
    expect(Loading.Puff.displayName).toBe("Loading")
    expect(Loading.Rings.displayName).toBe("Loading")
  })

  test("sets `className` correctly", () => {
    render(<TargetComponent />)
    expect(screen.getByTestId("oval")).toHaveClass("ui-loading")
    expect(screen.getByTestId("audio")).toHaveClass("ui-loading")
    expect(screen.getByTestId("circles")).toHaveClass("ui-loading")
    expect(screen.getByTestId("dots")).toHaveClass("ui-loading")
    expect(screen.getByTestId("grid")).toHaveClass("ui-loading")
    expect(screen.getByTestId("puff")).toHaveClass("ui-loading")
    expect(screen.getByTestId("rings")).toHaveClass("ui-loading")
  })

  test("renders HTML tag correctly", () => {
    render(<TargetComponent />)
    expect(screen.getByTestId("oval").tagName).toBe("svg")
    expect(screen.getByTestId("audio").tagName).toBe("svg")
    expect(screen.getByTestId("circles").tagName).toBe("svg")
    expect(screen.getByTestId("dots").tagName).toBe("svg")
    expect(screen.getByTestId("grid").tagName).toBe("svg")
    expect(screen.getByTestId("puff").tagName).toBe("svg")
    expect(screen.getByTestId("rings").tagName).toBe("svg")
  })
})
