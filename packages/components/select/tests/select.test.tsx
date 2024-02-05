import { a11y, render, screen } from "@yamada-ui/test"
import { Select, Option, OptionGroup } from "../src"

describe("<Select />", () => {
  test("Select renders correctly", async () => {
    const { container } = render(
      <>
        <Select>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>
      </>,
    )
    await a11y(container)
  })

  test("should render select", () => {
    render(
      <Select data-testid="Select" placeholder="Select numbers">
        <Option data-testid="Option" value="one">
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    expect(screen.getByTestId("Select")).toBeInTheDocument()
    expect(screen.getByTestId("Select")).toHaveTextContent("Select numbers")
    expect(screen.getByTestId("Option")).toHaveTextContent("One")
  })

  test("should render select with option group", () => {
    render(
      <Select data-testid="Select">
        <OptionGroup data-testid="OptionGroup" label="Numbers">
          <Option data-testid="Option" value="one">
            One
          </Option>
          <Option value="two">Two</Option>
        </OptionGroup>
      </Select>,
    )
    expect(screen.getByTestId("OptionGroup")).toHaveAttribute(
      "data-label",
      "Numbers",
    )
    expect(screen.getByText("Numbers")).toBeInTheDocument()
  })

  test("should render select with placeholder included in options", () => {
    render(
      <Select
        data-testid="Select"
        placeholder="Numbers"
        placeholderInOptions={true}
      >
        <Option data-testid="Option" value="one">
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    expect(screen.getAllByText("Numbers")).toHaveLength(2)
  })

  test("should disable select", () => {
    render(
      <Select data-testid="Select" placeholder="Numbers" isDisabled>
        <Option data-testid="Option" value="one">
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    expect(screen.getByTestId("Select")).toHaveAttribute("disabled")
  })

  test("should be read only", () => {
    render(
      <Select data-testid="Select" placeholder="Numbers" isReadOnly>
        <Option data-testid="Option" value="one">
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    expect(screen.getByTestId("Select")).toHaveAttribute("readonly")
  })

  test("should disable option", () => {
    render(
      <Select data-testid="Select">
        <Option data-testid="Option" value="one" isDisabled>
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    expect(screen.getByTestId("Option")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })
})
