import { createRef } from "react"
import { a11y, render, screen, waitFor } from "#test"
import { DynamicIcon, iconNames } from "."
import { IconPropsContext } from "../icon"

describe("<DynamicIcon />", () => {
  test("loads an icon by name", async () => {
    render(<DynamicIcon name="camera" data-testid="icon" />)

    const icon = await screen.findByTestId("icon")

    expect(icon).toHaveClass("lucide-camera", "ui-icon")
    expect(icon).toHaveAttribute("aria-hidden", "true")
    expect(icon.querySelector("circle")).toBeInTheDocument()
  })

  test("loads a new icon when the name changes", async () => {
    const { rerender } = render(
      <DynamicIcon name="camera" data-testid="icon" />,
    )

    await expect(screen.findByTestId("icon")).resolves.toHaveClass(
      "lucide-camera",
    )

    rerender(<DynamicIcon name="heart" data-testid="icon" />)

    await waitFor(() => {
      expect(screen.getByTestId("icon")).toHaveClass("lucide-heart")
      expect(screen.getByTestId("icon")).not.toHaveClass("lucide-camera")
    })
  })

  test("forwards SVG props and the ref to the loaded icon", async () => {
    const ref = createRef<SVGSVGElement>()

    render(
      <DynamicIcon
        ref={ref}
        name="camera"
        aria-hidden={false}
        aria-label="Camera"
        viewBox="0 0 48 48"
      />,
    )

    const icon = await screen.findByRole("img", { name: "Camera" })

    expect(ref.current).toBe(icon)
    expect(icon).toHaveAttribute("viewBox", "0 0 48 48")
    expect(icon).toHaveAttribute("aria-hidden", "false")
  })

  test("inherits icon context props", async () => {
    render(
      <IconPropsContext value={{ "aria-label": "Camera" }}>
        <DynamicIcon name="camera" data-testid="icon" />
      </IconPropsContext>,
    )

    await expect(screen.findByTestId("icon")).resolves.toHaveAttribute(
      "aria-label",
      "Camera",
    )
  })

  test("renders the fallback until the icon has loaded", async () => {
    render(
      <DynamicIcon
        name="camera"
        data-testid="icon"
        fallback={() => <span>Loading icon</span>}
      />,
    )

    expect(screen.getByText("Loading icon")).toBeInTheDocument()
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument()

    await expect(screen.findByTestId("icon")).resolves.toHaveClass(
      "lucide-camera",
    )
    expect(screen.queryByText("Loading icon")).not.toBeInTheDocument()
  })

  test("passes a11y checks after the icon has loaded", async () => {
    const { container } = render(
      <DynamicIcon name="camera" aria-hidden={false} aria-label="Camera" />,
    )

    await screen.findByRole("img", { name: "Camera" })

    await a11y(container)
  })

  test("exports the available icon names", () => {
    expect(iconNames).toContain("camera")
    expect(iconNames).toContain("heart")
  })
})
