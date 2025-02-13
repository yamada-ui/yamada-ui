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
