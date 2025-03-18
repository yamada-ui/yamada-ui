import { fireEvent, render, screen } from "@yamada-ui/test"
import { ColorPicker } from "../src"
import { mockEyeDropper, resetEyeDropperMock } from "./utils/mock-eye-dropper"

describe("<ColorPicker />", () => {
  test("ColorPicker renders correctly", () => {
    render(<ColorPicker data-testid="colorPicker" />)

    const colorPicker = screen.getByTestId("colorPicker")

    expect(colorPicker).toBeInTheDocument()
  })

  test("ColorPicker changes color on selecting a new color", () => {
    render(<ColorPicker data-testid="colorPicker" />)

    const colorPicker = screen.getByTestId("colorPicker")
    const value = "#ff0000"

    fireEvent.change(colorPicker, { target: { value } })

    expect(colorPicker).toHaveValue(value)
  })

  test("ColorPicker renders with the correct initial value", () => {
    render(<ColorPicker data-testid="colorPicker" defaultValue="#00ff00" />)

    const colorPicker = screen.getByTestId("colorPicker")

    expect(colorPicker).toHaveValue("#00ff00")
  })

  test("ColorPicker renders with eye dropper", () => {
    mockEyeDropper()

    render(
      <ColorPicker
        data-testid="colorPicker"
        defaultValue="#00ff00"
        withEyeDropper
      />,
    )

    const colorPicker = screen.getByTestId("colorPicker")

    expect(colorPicker).toHaveValue("#00ff00")

    resetEyeDropperMock()
  })

  test("ColorPicker renders as disabled", () => {
    render(<ColorPicker disabled />)

    const colorPicker = screen.getByRole("combobox").querySelector("input")

    expect(colorPicker).toBeDisabled()
  })

  test("ColorSelector renders initially when open is specified for ColorPicker", () => {
    const { container } = render(<ColorPicker open />)

    const popover = container.querySelectorAll(".ui-popover")

    expect(popover[0]).toBeVisible()
  })

  test("ColorSelector does not render initially when open is not specified for ColorPicker", () => {
    const { container } = render(<ColorPicker />)

    const popover = container.querySelectorAll(".ui-popover")

    expect(popover[0]).not.toBeVisible()
  })

  test("ColorPickerEyeDropper clones children correctly", () => {
    render(
      <ColorPicker
        withEyeDropper
        eyeDropperProps={{
          children: <span data-testid="eyeDropperIcon" />,
        }}
      />,
    )

    const eyeDropper = screen.getByTestId("eyeDropperIcon")

    expect(eyeDropper).toBeInTheDocument()

    expect(eyeDropper).toHaveStyle("max-width: 1em")
    expect(eyeDropper).toHaveStyle("max-height: 1em")
  })
})
