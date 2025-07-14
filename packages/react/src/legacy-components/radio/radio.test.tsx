import { a11y, fireEvent, render, screen } from "@/test"
import { FormControl } from "../form-control"
import { Radio, RadioGroup } from "./"

describe("<Radio />", () => {
  test("should pass a11y test", async () => {
    await a11y(<Radio>Radio button</Radio>)
  })

  test("should render correctly", async () => {
    render(<Radio>Radio button</Radio>)

    const radio = await screen.findByRole("radio", { name: "Radio button" })
    expect(radio).toBeInTheDocument()
  })

  test("should be defaultChecked", async () => {
    render(<Radio defaultChecked>Radio defaultChecked</Radio>)

    const radio = await screen.findByRole("radio", {
      name: "Radio defaultChecked",
    })
    expect(radio).toBeChecked()
  })

  test("should be readonly", async () => {
    render(<Radio readOnly>Radio readonly</Radio>)

    const radio = await screen.findByRole("radio", { name: "Radio readonly" })
    expect(radio).toHaveAttribute("readonly")
  })

  test("should be contain invalid attribute", async () => {
    render(<Radio invalid>Radio invalid</Radio>)

    const radio = await screen.findByRole("radio", { name: "Radio invalid" })
    expect(radio).not.toBeValid()
  })

  test("should be checked when click on element", async () => {
    render(<Radio>Radio button</Radio>)

    const radio = await screen.findByRole("radio", { name: "Radio button" })

    // Due to a bug in the nwsapi library, which jsdom depends on,
    // writing `await user.click(radio2)` here causes an error to be thrown.
    fireEvent.click(radio)

    expect(radio).toBeChecked()
  })

  test("should use the specified id when provided", async () => {
    const customId = "custom-radio-id"
    render(<Radio id={customId}>Radio Button</Radio>)

    const radio = await screen.findByRole("radio", { name: "Radio Button" })

    expect(radio).toHaveAttribute("id", customId)
  })

  test("should have a unique id for each input element", async () => {
    render(
      <>
        <Radio>First Radio Button</Radio>
        <Radio>Second Radio Button</Radio>
      </>,
    )

    const firstRadioButton = await screen.findByRole("radio", {
      name: "First Radio Button",
    })
    const secondRadioButton = await screen.findByRole("radio", {
      name: "Second Radio Button",
    })

    expect(firstRadioButton.id).not.toBe(secondRadioButton.id)
  })

  test("should have a unique id for each input element when using FormControl and RadioGroup", async () => {
    render(
      <FormControl>
        <RadioGroup>
          <Radio>First Radio Button</Radio>
          <Radio>Second Radio Button</Radio>
        </RadioGroup>
      </FormControl>,
    )

    const firstRadioButton = await screen.findByRole("radio", {
      name: "First Radio Button",
    })
    const secondRadioButton = await screen.findByRole("radio", {
      name: "Second Radio Button",
    })

    expect(firstRadioButton.id).not.toBe(secondRadioButton.id)
  })

  test("should add data-active attribute on Space key press", () => {
    render(<Radio>Radio button</Radio>)
    const radio = screen.getByRole("radio", { name: "Radio button" })

    fireEvent.keyDown(radio, { key: " " })

    const iconElement = document.querySelector(".ui-radio__icon")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute("data-active")
  })

  test("should remove data-active attribute on Space key release", () => {
    render(<Radio>Radio button</Radio>)
    const radio = screen.getByRole("radio", { name: "Radio button" })

    fireEvent.keyUp(radio, { key: " " })

    const iconElement = document.querySelector(".ui-radio__icon")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).not.toHaveAttribute("data-active")
  })
})
