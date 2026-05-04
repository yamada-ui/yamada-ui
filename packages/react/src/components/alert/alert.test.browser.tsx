import type React from "react"

import { a11y, page, render } from "#test/browser"
import { Alert } from "./"

describe("<Alert />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Alert.Root>
        <Alert.Icon />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Alert.Root.displayName).toBe("AlertRoot")
    expect(Alert.Icon.displayName).toBe("AlertIcon")
    expect(Alert.Title.displayName).toBe("AlertTitle")
    expect(Alert.Description.displayName).toBe("AlertDescription")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Alert.Root data-testid="alert">
        <Alert.Icon data-testid="icon" />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    await expect
      .element(page.getByTestId("alert"))
      .toHaveClass("ui-alert__root")
    await expect.element(page.getByTestId("icon")).toHaveClass("ui-alert__icon")
    await expect
      .element(page.getByText("Alert title"))
      .toHaveClass("ui-alert__title")
    await expect
      .element(page.getByText("Alert description"))
      .toHaveClass("ui-alert__description")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Alert.Root data-testid="alert">
        <Alert.Icon data-testid="icon" />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    expect(page.getByTestId("alert").element().tagName).toBe("DIV")
    expect(page.getByTestId("icon").element().tagName).toBe("svg")
    expect(page.getByText("Alert title").element().tagName).toBe("P")
    expect(page.getByText("Alert description").element().tagName).toBe("SPAN")
  })

  test("should have role='alert'", async () => {
    await render(
      <Alert.Root>
        <Alert.Icon />
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
      </Alert.Root>,
    )

    await expect.element(page.getByRole("alert")).toBeInTheDocument()
  })

  test("renders Alert.Loading with default loadingScheme", async () => {
    await render(
      <Alert.Root status="info">
        <Alert.Loading data-testid="loading" />
      </Alert.Root>,
    )

    await expect.element(page.getByTestId("loading")).toBeInTheDocument()
  })

  test("renders Alert.Loading with custom loadingScheme", async () => {
    await render(
      <Alert.Root status="info">
        <Alert.Loading data-testid="loading" loadingScheme="dots" />
      </Alert.Root>,
    )

    await expect.element(page.getByTestId("loading")).toBeInTheDocument()
  })

  test("uses status as default colorScheme when colorScheme is not provided", async () => {
    await render(<Alert.Root data-testid="alert" status="error" />)

    await expect.element(page.getByTestId("alert")).toBeInTheDocument()
    await expect.element(page.getByRole("alert")).toBeInTheDocument()
  })

  test("Alert.Icon respects `as` prop (custom icon)", async () => {
    const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="custom-icon" {...props} />
    )

    await render(
      <Alert.Root status="success">
        <Alert.Icon as={CustomIcon} />
      </Alert.Root>,
    )

    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
