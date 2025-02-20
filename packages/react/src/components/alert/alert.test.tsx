import { a11y, render, screen } from "../../../test"
import { Alert } from "./"

describe("<Alert />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <Alert.Root>
        <Alert.Icon />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Alert.Root.displayName).toBe("AlertRoot")
    expect(Alert.Root.__ui__).toBe("AlertRoot")

    expect(Alert.Icon.displayName).toBe("AlertIcon")
    expect(Alert.Icon.__ui__).toBe("AlertIcon")

    expect(Alert.Title.displayName).toBe("AlertTitle")
    expect(Alert.Title.__ui__).toBe("AlertTitle")

    expect(Alert.Description.displayName).toBe("AlertDescription")
    expect(Alert.Description.__ui__).toBe("AlertDescription")
  })

  test("sets `className` correctly", () => {
    render(
      <Alert.Root data-testid="alert">
        <Alert.Icon data-testid="icon" />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    expect(screen.getByTestId("alert")).toHaveClass("ui-alert__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-alert__icon")
    expect(screen.getByText("Alert title")).toHaveClass("ui-alert__title")
    expect(screen.getByText("Alert description")).toHaveClass(
      "ui-alert__description",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Alert.Root data-testid="alert">
        <Alert.Icon data-testid="icon" />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    expect(screen.getByTestId("alert").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("svg")
    expect(screen.getByText("Alert title").tagName).toBe("P")
    expect(screen.getByText("Alert description").tagName).toBe("SPAN")
  })

  test("should have role='alert'", () => {
    render(
      <Alert.Root>
        <Alert.Icon />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    expect(screen.getByRole("alert")).toBeInTheDocument()
  })
})
