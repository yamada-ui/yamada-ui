import { a11y, page, render } from "#test/browser"
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

  test("sets `displayName` correctly", () => {
    expect(Fieldset.Root.displayName).toBe("FieldsetRoot")
    expect(Fieldset.Legend.displayName).toBe("FieldsetLegend")
    expect(Fieldset.Content.displayName).toBe("FieldsetContent")
    expect(Fieldset.ErrorMessage.displayName).toBe("FieldsetErrorMessage")
    expect(Fieldset.Header.displayName).toBe("FieldsetHeader")
    expect(Fieldset.HelperMessage.displayName).toBe("FieldsetHelperMessage")
  })

  test("sets `className` correctly", async () => {
    const { rerender } = await render(
      <Fieldset.Root data-testid="root">
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-fieldset__root")
    await expect
      .element(page.getByText("Legend"))
      .toHaveClass("ui-fieldset__legend")
    await expect
      .element(page.getByText("Content"))
      .toHaveClass("ui-fieldset__content")
    await expect
      .element(page.getByTestId("header"))
      .toHaveClass("ui-fieldset__header")
    await expect
      .element(page.getByText("Helper"))
      .toHaveClass("ui-fieldset__helper-message")

    await rerender(
      <Fieldset.Root data-testid="root" invalid>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    await expect
      .element(page.getByText("Error"))
      .toHaveClass("ui-fieldset__error-message")
  })

  test("renders HTML tag correctly", async () => {
    const { rerender } = await render(
      <Fieldset.Root data-testid="root">
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("FIELDSET")
    expect(page.getByText("Legend").element().tagName).toBe("LEGEND")
    expect(page.getByText("Content").element().tagName).toBe("DIV")
    expect(page.getByTestId("header").element().tagName).toBe("DIV")
    expect(page.getByText("Helper").element().tagName).toBe("SPAN")

    await rerender(
      <Fieldset.Root data-testid="root" invalid>
        <Fieldset.Content>Content</Fieldset.Content>
        <Fieldset.Header data-testid="header">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.HelperMessage>Helper</Fieldset.HelperMessage>
        </Fieldset.Header>
        <Fieldset.ErrorMessage>Error</Fieldset.ErrorMessage>
      </Fieldset.Root>,
    )
    expect(page.getByText("Error").element().tagName).toBe("SPAN")
  })

  test("renders legend via `legend` prop", async () => {
    await render(<Fieldset.Root legend="My Legend">Content</Fieldset.Root>)

    await expect
      .element(page.getByText("My Legend"))
      .toHaveClass("ui-fieldset__legend")
    expect(page.getByText("My Legend").element().tagName).toBe("LEGEND")
  })

  test("renders helperMessage via `helperMessage` prop", async () => {
    await render(
      <Fieldset.Root helperMessage="Help text" legend="Legend">
        Content
      </Fieldset.Root>,
    )

    await expect
      .element(page.getByText("Help text"))
      .toHaveClass("ui-fieldset__helper-message")
    expect(page.getByText("Help text").element().tagName).toBe("SPAN")
  })

  test("renders errorMessage via `errorMessage` prop", async () => {
    await render(
      <Fieldset.Root errorMessage="Error text" invalid legend="Legend">
        Content
      </Fieldset.Root>,
    )

    await expect
      .element(page.getByText("Error text"))
      .toHaveClass("ui-fieldset__error-message")
    expect(page.getByText("Error text").element().tagName).toBe("SPAN")
  })

  test("does not render errorMessage when `errorMessage` prop is not provided", async () => {
    const { container } = await render(
      <Fieldset.Root invalid legend="Legend">
        Content
      </Fieldset.Root>,
    )

    expect(container.querySelector(".ui-fieldset__error-message")).toBeNull()
  })
})
