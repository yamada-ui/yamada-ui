import { a11y, render, screen } from "@yamada-ui/test"
import { Select, Option, OptionGroup, MultiSelect } from "../src"

describe("<Select />", () => {
  test("Select renders correctly", async () => {
    await a11y(
      <Select>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )
  })

  test("should render select", async () => {
    const { user } = render(
      <Select role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("should render select with option group", async () => {
    const { user } = render(
      <Select role="combobox">
        <OptionGroup label="Numbers">
          <Option value="one">One</Option>
        </OptionGroup>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const select = screen.getByRole("select")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent(/numbers/i)
    expect(select).toHaveTextContent(/one/i)
  })

  test("should render select with placeholder", async () => {
    const { user } = render(
      <Select role="combobox" placeholder="Select numbers">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent(/select numbers/i)

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/select numbers/i)
  })

  test("should render correctly with placeholder not included in options", async () => {
    const { user } = render(
      <Select
        role="combobox"
        placeholder="Select numbers"
        placeholderInOptions={false}
      >
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent(/select numbers/i)

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).not.toHaveTextContent(/select numbers/i)
  })

  test("should be disable", () => {
    render(
      <Select role="combobox" isDisabled>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveAttribute("disabled")
    expect(input).toHaveAttribute("aria-disabled", "true")
  })

  test("should be readonly", () => {
    render(
      <Select role="combobox" placeholder="Numbers" isReadOnly>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveAttribute("readonly")
    expect(input).toHaveAttribute("data-readonly")
  })

  test("should be disable option", async () => {
    const { user } = render(
      <Select role="combobox">
        <Option value="one" isDisabled>
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[0]).toHaveAttribute("data-disabled")
    expect(options[0]).toHaveAttribute("aria-disabled", "true")
  })
})

describe("<MultiSelect />", () => {
  test("should pass a11y test", async () => {
    await a11y(
      <MultiSelect>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </MultiSelect>,
    )
  })

  test("MultiSelect renders correctly", async () => {
    const { user } = render(
      <MultiSelect role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </MultiSelect>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when items passed to props, renders correctly", async () => {
    const { user } = render(
      <MultiSelect
        role="combobox"
        items={[
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = screen.getAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when nested items passed to props, renders correctly", async () => {
    const { user } = render(
      <MultiSelect
        role="combobox"
        items={[
          {
            label: "Numbers",
            items: [{ label: "One", value: "one" }],
          },
          {
            label: "Two",
            value: "two",
          },
        ]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const select = screen.getByRole("select")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent(/numbers/i)
    expect(select).toHaveTextContent(/one/i)
  })

  test("when items clicked twice, renders correctly", async () => {
    const { user } = render(
      <MultiSelect role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
        <Option value="three">Three</Option>
      </MultiSelect>,
    )

    const input = screen.getByRole("combobox")

    await user.click(input)

    const option1 = screen.getByText(/one/i)
    await user.click(option1)

    const option2 = screen.getByText(/two/i)
    await user.click(option2)

    expect(input).toHaveTextContent(/one/i)
    expect(input).toHaveTextContent(/two/i)
  })
})
