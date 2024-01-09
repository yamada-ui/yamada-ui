import { FormControl } from "@yamada-ui/form-control"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Radio, RadioGroup } from "../src"

describe("<Radio/>", () => {
  it("should pass a11y test", async () => {
    await a11y(<Radio>Radio button</Radio>)
  })

  it("should render correctly", () => {
    render(<Radio>Radio button</Radio>)

    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByText("Radio button")).toBeInTheDocument()
  })

  it("should be defaultChecked", () => {
    render(<Radio defaultIsChecked>Radio defaultChecked</Radio>)

    expect(screen.getByRole("radio")).toBeChecked()
  })

  it("should be readonly", () => {
    render(<Radio isReadOnly>Radio readonly</Radio>)

    expect(screen.getByRole("radio")).toHaveAttribute("readonly")
  })

  it("should be contain invalid attribute", () => {
    render(<Radio isInvalid>Radio invalid</Radio>)

    expect(screen.getByRole("radio").getAttribute("aria-invalid")).toBe("true")
  })

  it("should be checked when click on element", () => {
    render(<Radio>Radio button</Radio>)

    fireEvent.click(screen.getByText("Radio button"))
    expect(screen.getByRole("radio")).toBeChecked()
  })

  it("should use the specified id when provided", () => {
    const customId = "custom-radio-id"
    render(<Radio id={customId}>Radio Button</Radio>)

    expect(screen.getByRole("radio")).toHaveAttribute("id", customId)
  })

  it("should have a unique id for each input element", () => {
    render(
      <>
        <Radio>First Radio Button</Radio>
        <Radio>Second Radio Button</Radio>
      </>,
    )

    const [id1, id2] = screen.getAllByRole("radio").map((radio) => radio.id)
    expect(id1).not.toBe(id2)
  })

  it("should have a unique id for each input element when using FormControl and RadioGroup", () => {
    render(
      <FormControl>
        <RadioGroup>
          <Radio>First Radio Button</Radio>
          <Radio>Second Radio Button</Radio>
        </RadioGroup>
      </FormControl>,
    )

    const [id1, id2] = screen.getAllByRole("radio").map((radio) => radio.id)
    expect(id1).not.toBe(id2)
  })
})
