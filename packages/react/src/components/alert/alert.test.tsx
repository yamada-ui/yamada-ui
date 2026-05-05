import type React from "react"

import { a11y, render, screen } from "#test"
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

  test("renders Alert.Loading with default loadingScheme", () => {
    render(
      <Alert.Root status="info">
        <Alert.Loading data-testid="loading" />
      </Alert.Root>,
    )

    expect(screen.getByTestId("loading")).toBeInTheDocument()
  })

  test("renders Alert.Loading with custom loadingScheme", () => {
    render(
      <Alert.Root status="info">
        <Alert.Loading data-testid="loading" loadingScheme="dots" />
      </Alert.Root>,
    )

    expect(screen.getByTestId("loading")).toBeInTheDocument()
  })

  test("uses status as default colorScheme when colorScheme is not provided", () => {
    render(<Alert.Root data-testid="alert" status="error" />)

    expect(screen.getByTestId("alert")).toBeInTheDocument()
    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  test("Alert.Icon respects `as` prop (custom icon)", () => {
    const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="custom-icon" {...props} />
    )

    render(
      <Alert.Root status="success">
        <Alert.Icon as={CustomIcon} />
      </Alert.Root>,
    )

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
