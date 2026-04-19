import { a11y, page, render } from "#test/browser"
import { FormatByte } from "./format-byte"

describe("<FormatByte />", () => {
  test("renders component correctly", async () => {
    await a11y(<FormatByte value={1024} />)
  })

  test("sets `displayName` correctly", () => {
    expect(FormatByte.displayName).toBe("FormatByte")
  })

  test("sets `className` correctly", async () => {
    await render(<FormatByte data-testid="format" value={1024} />)
    await expect
      .element(page.getByTestId("format"))
      .toHaveClass("ui-format-byte")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FormatByte data-testid="format" value={1024} />)
    expect(page.getByTestId("format").element().tagName).toBe("SPAN")
  })

  test("FormatByte renders correctly", async () => {
    await render(<FormatByte locale="en-US" value={1024} />)
    await expect.element(page.getByText("1.02 kB")).toBeInTheDocument()
  })

  test("Sizes renders correctly", async () => {
    await render(
      <>
        <FormatByte value={50} />
        <FormatByte value={5000} />
        <FormatByte value={5000000} />
        <FormatByte value={5000000000} />
      </>,
    )
    await expect.element(page.getByText("50 byte")).toBeInTheDocument()
    await expect.element(page.getByText("5 kB")).toBeInTheDocument()
    await expect.element(page.getByText("5 MB")).toBeInTheDocument()
    await expect.element(page.getByText("5 GB")).toBeInTheDocument()
  })

  test("Locale renders correctly", async () => {
    await render(<FormatByte locale="de-DE" value={1450} />)
    await expect.element(page.getByText("1,45 kB")).toBeInTheDocument()
  })

  test("UnitDisplay renders correctly", async () => {
    await render(
      <>
        <FormatByte locale="en-US" unitDisplay="short" value={50300} />
        <FormatByte locale="en-US" unitDisplay="long" value={50300} />
        <FormatByte locale="en-US" unitDisplay="narrow" value={50300} />
      </>,
    )
    await expect.element(page.getByText("50.3 kB")).toBeInTheDocument()
    await expect.element(page.getByText("50.3 kilobytes")).toBeInTheDocument()
    await expect.element(page.getByText("50.3kB")).toBeInTheDocument()
  })
})
