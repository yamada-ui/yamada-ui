import { a11y, render, screen } from "../../../test"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./alert"

describe("<Alert />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <Alert>
        <AlertIcon />
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>,
    )
  })

  test("should have role='alert'", () => {
    render(
      <Alert>
        <AlertIcon />
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>,
    )

    expect(screen.getByRole("alert")).toBeInTheDocument()
  })
})
