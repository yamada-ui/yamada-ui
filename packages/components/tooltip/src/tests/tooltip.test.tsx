import { a11y, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { Tooltip } from "../tooltip"

describe("<Tooltip/>", () => {
  it("should pass a11y test", async () => {
    await a11y(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )
  })

  it("should render correctly", () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getByText("Hover")).toBeInTheDocument()
  })

  it("should render label text when hover", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getByText("Tooltip hover")).toBeInTheDocument()
    })
  })

  it("should not render label text when pointer leave", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getByText("Tooltip hover")).toBeInTheDocument()
    })

    fireEvent.pointerLeave(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getByText("Tooltip hover").style.visibility).toBe("hidden")
    })
  })

  it("should always display", () => {
    render(
      <Tooltip label="Tooltip hover" isOpen>
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getByText("Tooltip hover")).toBeInTheDocument()
  })

  it("should disable even if hover", async () => {
    render(
      <Tooltip label="Tooltip hover" isDisabled>
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.queryByText("Tooltip hover")).toBeNull()
    })
  })
})
