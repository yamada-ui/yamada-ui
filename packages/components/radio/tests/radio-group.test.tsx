import { a11y, render, screen, fireEvent } from "@yamada-ui/test"
import { Radio, RadioGroup } from "../src"

describe("<RadioGroup/>", () => {
  it("should pass a11y test", async () => {
    await a11y(
      <RadioGroup>
        <Radio>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
      </RadioGroup>,
    )
  })

  it("defaultValue should be checked correctly", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1" data-testid="radio-1">
          Radio 1
        </Radio>
        <Radio value="2" data-testid="radio-2">
          Radio 2
        </Radio>
        <Radio value="3" data-testid="radio-3">
          Radio 3
        </Radio>
      </RadioGroup>,
    )

    expect(screen.getByTestId("radio-1").querySelector("input")).toBeChecked()
    expect(
      screen.getByTestId("radio-2").querySelector("input"),
    ).not.toBeChecked()
    expect(
      screen.getByTestId("radio-3").querySelector("input"),
    ).not.toBeChecked()
  })

  it("should be change value when click other radio button", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1" data-testid="radio-1">
          Radio 1
        </Radio>
        <Radio value="2" data-testid="radio-2">
          Radio 2
        </Radio>
        <Radio value="3" data-testid="radio-3">
          Radio 3
        </Radio>
      </RadioGroup>,
    )

    fireEvent.click(screen.getByTestId("radio-2"))

    expect(
      screen.getByTestId("radio-1").querySelector("input"),
    ).not.toBeChecked()
    expect(screen.getByTestId("radio-2").querySelector("input")).toBeChecked()
    expect(
      screen.getByTestId("radio-3").querySelector("input"),
    ).not.toBeChecked()
  })
})
