import { render, screen } from "../../../test"
import { Separator } from "./separator"

describe("<Separator />", () => {
  test("renders separator correctly", () => {
    render(<Separator />)
  })

  test("overrides the theming props", () => {
    render(<Separator variant="dashed" />)

    expect(screen.getByRole("separator")).toHaveStyle({ borderStyle: "dashed" })
  })

  test("renders vertically correctly", () => {
    render(<Separator orientation="vertical" />)

    expect(screen.getByRole("separator")).toHaveStyle({
      borderLeftWidth: "1px",
      height: "100%",
    })
  })
})
