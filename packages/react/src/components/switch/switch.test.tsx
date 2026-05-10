import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
import { Switch } from "./"

describe("<Switch />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Switch>Switch</Switch>)
  })

  test("sets `displayName` correctly", () => {
    expect(Switch.displayName).toBe("SwitchRoot")
  })

  test("sets `className` correctly", () => {
    render(<Switch data-testid="switch">Switch</Switch>)

    const root = screen.getByTestId("switch")

    expect(root).toHaveClass("ui-switch__root")
    expect(root.children[1]).toHaveClass("ui-switch__track")
    expect(root.children[1]?.children[0]).toHaveClass("ui-switch__thumb")
    expect(root.children[2]).toHaveClass("ui-switch__label")
  })

  test("renders HTML tag correctly", () => {
    render(<Switch data-testid="switch">Switch</Switch>)

    const root = screen.getByTestId("switch")

    expect(root.tagName).toBe("LABEL")
    expect(root.children[0]?.tagName).toBe("INPUT")
    expect(root.children[1]?.tagName).toBe("DIV")
    expect(root.children[1]?.children[0]?.tagName).toBe("DIV")
    expect(root.children[2]?.tagName).toBe("SPAN")
  })

  test("is checked when defaultChecked is set", () => {
    render(<Switch defaultChecked>Switch</Switch>)

    expect(screen.getByRole("switch", { name: /Switch/i })).toBeChecked()
  })

  test("renders the icon node", () => {
    render(<Switch icon={<BoxIcon data-testid="icon" />}>Switch</Switch>)

    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  test("merges root and input consumer className and style props", () => {
    render(
      <Switch
        className="custom-root"
        data-testid="switch"
        inputProps={{
          className: "custom-input",
          style: { color: "tomato" },
          "data-testid": "switch-input",
        }}
      >
        Switch
      </Switch>,
    )

    const root = screen.getByTestId("switch")
    const input = screen.getByTestId("switch-input")

    expect(root).toHaveClass("ui-switch__root")
    expect(root).toHaveClass("custom-root")
    expect(input).toHaveClass("custom-input")
    expect(input).toHaveStyle({ color: "rgb(255, 99, 71)", width: "1px" })
  })

  test("composes forwarded ref and inputProps ref on the input element", () => {
    const order: string[] = []
    const forwardedRef = vi.fn((node: HTMLInputElement | null) => {
      if (node) order.push("forwarded")
    })
    const inputPropsRef = vi.fn((node: HTMLInputElement | null) => {
      if (node) order.push("inputProps")
    })

    render(
      <Switch ref={forwardedRef} inputProps={{ ref: inputPropsRef }}>
        Switch
      </Switch>,
    )

    const input = screen.getByRole("switch", { name: /Switch/i })

    expect(inputPropsRef).toHaveBeenCalledWith(input)
    expect(forwardedRef).toHaveBeenCalledWith(input)
    expect(order).toStrictEqual(["inputProps", "forwarded"])
  })

  test("passes labelProps to the label element", () => {
    render(
      <Switch data-testid="switch" labelProps={{ "data-testid": "label" }}>
        Switch
      </Switch>,
    )

    const label = screen.getByTestId("label")

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent("Switch")
  })

  test("does not render the label element when children is not provided", () => {
    render(<Switch data-testid="switch" />)

    expect(
      screen.getByTestId("switch").querySelector(".ui-switch__label"),
    ).toBeNull()
  })
})
