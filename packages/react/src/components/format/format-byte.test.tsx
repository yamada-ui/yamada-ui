import { render, screen } from "../../../test"
import { FormatByte } from "./format-byte"

describe("<FormatByte />", () => {
  test("FormatByte renders correctly", () => {
    render(<FormatByte locale="en-US" value={1024} />)
    expect(screen.getByText("1.02 kB")).toBeInTheDocument()
  })

  test("Sizes renders correctly", () => {
    render(
      <>
        <FormatByte value={50} />
        <FormatByte value={5000} />
        <FormatByte value={5000000} />
        <FormatByte value={5000000000} />
      </>,
    )
    expect(screen.getByText("50 byte")).toBeInTheDocument()
    expect(screen.getByText("5 kB")).toBeInTheDocument()
    expect(screen.getByText("5 MB")).toBeInTheDocument()
    expect(screen.getByText("5 GB")).toBeInTheDocument()
  })

  test("Locale renders correctly", () => {
    render(<FormatByte locale="de-DE" value={1450} />)
    expect(screen.getByText("1,45 kB")).toBeInTheDocument()
  })

  test("UnitDisplay renders correctly", () => {
    render(
      <>
        <FormatByte locale="en-US" unitDisplay="short" value={50300} />
        <FormatByte locale="en-US" unitDisplay="long" value={50300} />
        <FormatByte locale="en-US" unitDisplay="narrow" value={50300} />
      </>,
    )
    expect(screen.getByText("50.3 kB")).toBeInTheDocument()
    expect(screen.getByText("50.3 kilobytes")).toBeInTheDocument()
    expect(screen.getByText("50.3kB")).toBeInTheDocument()
  })
})
