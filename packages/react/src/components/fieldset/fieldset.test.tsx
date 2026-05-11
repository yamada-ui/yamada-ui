import { a11y, render, screen } from "#test"
import { Fieldset } from "./"

describe("<Fieldset />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Fieldset.Root
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      />,
    )
  })

  test("sets `className` and renders correct HTML tags", () => {
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

    const root = screen.getByTestId("root")
    expect(root).toHaveClass("ui-fieldset__root")
    expect(root.tagName).toBe("FIELDSET")

    const legend = screen.getByText("Legend")
    expect(legend).toHaveClass("ui-fieldset__legend")
    expect(legend.tagName).toBe("LEGEND")

    const content = screen.getByText("Content")
    expect(content).toHaveClass("ui-fieldset__content")
    expect(content.tagName).toBe("DIV")

    const header = screen.getByTestId("header")
    expect(header).toHaveClass("ui-fieldset__header")
    expect(header.tagName).toBe("DIV")

    const helper = screen.getByText("Helper")
    expect(helper).toHaveClass("ui-fieldset__helper-message")
    expect(helper.tagName).toBe("SPAN")

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

    const error = screen.getByText("Error")
    expect(error).toHaveClass("ui-fieldset__error-message")
    expect(error.tagName).toBe("SPAN")
  })

  test("renders errorMessage via `errorMessage` prop", () => {
    render(
      <Fieldset.Root errorMessage="Error text" invalid legend="Legend">
        Content
      </Fieldset.Root>,
    )

    const error = screen.getByText("Error text")
    expect(error).toHaveClass("ui-fieldset__error-message")
    expect(error.tagName).toBe("SPAN")
  })

  test("renders legend and helperMessage via props", () => {
    render(
      <Fieldset.Root
        data-testid="root"
        helperMessage="Helper text"
        legend="Legend text"
      >
        Content
      </Fieldset.Root>,
    )

    const root = screen.getByTestId("root")
    expect(root).toHaveClass("ui-fieldset__root")
    expect(root.tagName).toBe("FIELDSET")

    const legend = screen.getByText("Legend text")
    expect(legend).toHaveClass("ui-fieldset__legend")
    expect(legend.tagName).toBe("LEGEND")

    const helper = screen.getByText("Helper text")
    expect(helper).toHaveClass("ui-fieldset__helper-message")
    expect(helper.tagName).toBe("SPAN")
  })

  test("does not render error message when invalid and `errorMessage` prop is not provided", () => {
    const { container } = render(
      <Fieldset.Root invalid legend="Legend">
        Content
      </Fieldset.Root>,
    )

    expect(container.querySelector(".ui-fieldset__error-message")).toBeNull()
  })
})
