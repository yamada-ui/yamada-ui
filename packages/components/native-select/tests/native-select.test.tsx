import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { a11y, render, screen } from "@yamada-ui/test"
import { NativeOption, NativeSelect } from "../src"

describe("<NativeSelect />", () => {
  test("NativeSelect renders correctly", async () => {
    const { container } = render(
      <NativeSelect aria-label="select" placeholder="Options">
        <NativeOption value="one">Option 1</NativeOption>
        <NativeOption value="two">Option 2</NativeOption>
      </NativeSelect>,
    )
    await a11y(container)
  })

  test("should render select with props", async () => {
    const { user } = render(
      <NativeSelect
        data-testid="Select"
        focusBorderColor="green.500"
        variant="outline"
        placeholder="Options"
      >
        <NativeOption value="one">Option 1</NativeOption>
        <NativeOption value="two">Option 2</NativeOption>
      </NativeSelect>,
    )
    await user.selectOptions(screen.getByTestId("Select"), ["one"])
    expect(
      (screen.getByRole("option", { name: "Option 1" }) as any).selected,
    ).toBe(true)
    expect(
      (screen.getByRole("option", { name: "Option 2" }) as any).selected,
    ).toBe(false)
  })

  test("should render select without placeholder in options", async () => {
    render(
      <NativeSelect
        data-testid="Select"
        focusBorderColor="green.500"
        variant="outline"
        placeholder="Options"
        placeholderInOptions={false}
      >
        <NativeOption data-testid="option" value="one">
          Option 1
        </NativeOption>
        <NativeOption data-testid="option" value="two">
          Option 2
        </NativeOption>
      </NativeSelect>,
    )
    expect(screen.queryAllByTestId("option").length).toEqual(2)
  })

  test("should disable select", () => {
    render(<NativeSelect isDisabled data-testid="Select" />)
    expect(screen.getByTestId("Select")).toBeDisabled()
  })

  test("should be read only", () => {
    render(<NativeSelect isReadOnly data-testid="Select" />)
    expect(screen.getByTestId("Select")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
  })

  test("should be invalid", () => {
    render(<NativeSelect isInvalid data-testid="Select" />)
    expect(screen.getByTestId("Select")).toHaveAttribute("aria-invalid", "true")
  })

  test("should render select with custom icon", () => {
    render(
      <NativeSelect
        data-testid="Select"
        iconProps={{
          children: <Icon data-testid="Icon" icon={faCaretDown} />,
        }}
      />,
    )
    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })
})
