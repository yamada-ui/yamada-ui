import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { Tooltip } from "."
import { Text } from "../text"

describe("<Tooltip />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Tooltip.name).toBe("Tooltip")
  })

  test("sets `className` correctly", () => {
    render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = screen.getByRole("tooltip")
    expect(el).toHaveClass("ui-tooltip__content")
    expect(el.parentElement).toHaveClass("ui-tooltip__positioner")
    expect(screen.getByText("Trigger")).toHaveClass("ui-tooltip__trigger")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = screen.getByRole("tooltip")
    expect(el.tagName).toBe("DIV")
    expect(el.parentElement?.tagName).toBe("DIV")
  })

  test("renders only children when content is not provided", () => {
    render(
      <Tooltip>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    expect(screen.getByText("Trigger")).toBeInTheDocument()
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  test("does not render tooltip content when closed", () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  test("opens tooltip on pointer enter and closes on pointer leave", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("opens tooltip on focus and closes on blur", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.blur(trigger)

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("closes tooltip on Escape key", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: "Escape" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("does not close on Escape when closeOnEsc is false", async () => {
    render(
      <Tooltip closeOnEsc={false} content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: "Escape" })

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  test("closes tooltip on scroll when closeOnScroll is true", async () => {
    render(
      <Tooltip closeOnScroll content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.scroll(document)

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("closes tooltip on click when closeOnClick is true", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("does not open tooltip when disabled", async () => {
    render(
      <Tooltip content="Tooltip Hovered" disabled>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("does not open on touch pointer events", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.pointerEnter(trigger, { pointerType: "touch" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("closes tooltip on outside click", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.mouseDown(document.body)
    fireEvent.mouseUp(document.body)

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("closes tooltip on pointer leave from content", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    const content = screen.getByRole("tooltip")

    fireEvent.pointerLeave(content)

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("handles openDelay and closeDelay", async () => {
    render(
      <Tooltip closeDelay={100} content="Tooltip Hovered" openDelay={100}>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  test("force closes when re-opening while already open", async () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = screen.getByText("Trigger")

    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.blur(trigger)
    fireEvent.focus(trigger)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })
})
