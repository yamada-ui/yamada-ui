import { a11y, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { Tooltip } from "../src/tooltip"

describe("<Tooltip/>", () => {
  test("should pass a11y test", async () => {
    await a11y(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )
  })

  test("should render correctly", () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getByText("Hover")).toBeInTheDocument()
  })

  test("should render label text when hover", async () => {
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

  test("should not render label text when pointer leave", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getAllByText("Tooltip hover")[1]).toBeInTheDocument()
    })

    fireEvent.pointerLeave(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeNull()
    })
  })

  test("should always display", () => {
    render(
      <Tooltip label="Tooltip hover" isOpen>
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getAllByText("Tooltip hover")[1]).toBeInTheDocument()
  })

  test("should disable even if hover", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover" isDisabled>
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = screen.queryByRole("tooltip")
    expect(tooltip).toBeNull()
  })
})
