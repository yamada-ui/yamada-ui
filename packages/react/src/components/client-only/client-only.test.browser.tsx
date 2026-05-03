import { page, render } from "#test/browser"
import { ClientOnly } from "."

describe("<ClientOnly />", () => {
  test("renders children after mount", async () => {
    await render(<ClientOnly>Hello</ClientOnly>)

    await expect.element(page.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when provided", async () => {
    await render(
      <ClientOnly fallback={<span>Loading...</span>}>Hello</ClientOnly>,
    )

    await expect.element(page.getByText("Hello")).toBeInTheDocument()
  })

  test("supports function children", async () => {
    await render(<ClientOnly>{() => "Hello from function"}</ClientOnly>)

    await expect
      .element(page.getByText("Hello from function"))
      .toBeInTheDocument()
  })
})
