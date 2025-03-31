import { a11y, render, screen } from "../../../test"
import { Fieldset } from "./"

describe("<Fieldset />", () => {
  test("Fieldset renders correctly", async () => {
    await a11y(
      <Fieldset.Root
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      />,
    )
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Fieldset.Root.displayName).toBe("FieldsetRoot")
    expect(Fieldset.Root.__styled__).toBe("FieldsetRoot")

    expect(Fieldset.Legend.displayName).toBe("FieldsetLegend")
    expect(Fieldset.Legend.__styled__).toBe("FieldsetLegend")

    expect(Fieldset.Content.displayName).toBe("FieldsetContent")
    expect(Fieldset.Content.__styled__).toBe("FieldsetContent")

    expect(Fieldset.ErrorMessage.displayName).toBe("FieldsetErrorMessage")
    expect(Fieldset.ErrorMessage.__styled__).toBe("FieldsetErrorMessage")

    expect(Fieldset.Header.displayName).toBe("FieldsetHeader")
    expect(Fieldset.Header.__styled__).toBe("FieldsetHeader")

    expect(Fieldset.HelperMessage.displayName).toBe("FieldsetHelperMessage")
    expect(Fieldset.HelperMessage.__styled__).toBe("FieldsetHelperMessage")
  })

  test("sets `className` correctly", () => {
    const { rerender } = render(
      <Fieldset.Root data-testid="root">
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-fieldset__root")
    expect(screen.getByText("Legend")).toHaveClass("ui-fieldset__legend")
    expect(screen.getByText("Content")).toHaveClass("ui-fieldset__content")
    expect(screen.getByTestId("header")).toHaveClass("ui-fieldset__header")
    expect(screen.getByText("Helper")).toHaveClass(
      "ui-fieldset__helper-message",
    )

    rerender(
      <Fieldset.Root data-testid="root" invalid>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    expect(screen.getByText("Error")).toHaveClass("ui-fieldset__error-message")
  })

  test("renders HTML tag correctly", () => {
    const { rerender } = render(
      <Fieldset.Root data-testid="root">
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("FIELDSET")
    expect(screen.getByText("Legend").tagName).toBe("LEGEND")
    expect(screen.getByText("Content").tagName).toBe("DIV")
    expect(screen.getByTestId("header").tagName).toBe("DIV")
    expect(screen.getByText("Helper").tagName).toBe("SPAN")

    rerender(
      <Fieldset.Root data-testid="root" invalid>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )
    expect(screen.getByText("Error").tagName).toBe("SPAN")
  })
})
