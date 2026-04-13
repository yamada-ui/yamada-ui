import { a11y, page, render } from "#test/browser"
import { fireEvent } from "@testing-library/react"
import { vi } from "vitest"
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

  test("sets `className` correctly", async () => {
    await render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = page.getByRole("tooltip")
    await expect.element(el).toHaveClass("ui-tooltip__content")
    await expect
      .element(el.element().parentElement!)
      .toHaveClass("ui-tooltip__positioner")
    await expect
      .element(page.getByText("Trigger"))
      .toHaveClass("ui-tooltip__trigger")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = page.getByRole("tooltip")
    expect(el.element().tagName).toBe("DIV")
    expect(el.element().parentElement?.tagName).toBe("DIV")
  })

  test("renders only children when content is not provided", async () => {
    await render(
      <Tooltip>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    await expect.element(page.getByText("Trigger")).toBeInTheDocument()
    expect(page.getByRole("tooltip").query()).toBeNull()
  })

  test("does not render tooltip content when closed", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    expect(page.getByRole("tooltip").query()).toBeNull()
  })

  test("opens tooltip on pointer enter and closes on pointer leave", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" })

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("opens tooltip on focus and closes on blur", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.blur(trigger)

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("closes tooltip on Escape key", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: "Escape" })

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("does not close on Escape when closeOnEsc is false", async () => {
    await render(
      <Tooltip closeOnEsc={false} content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: "Escape" })

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  test("closes tooltip on scroll when closeOnScroll is true", async () => {
    await render(
      <Tooltip closeOnScroll content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.scroll(document)

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("closes tooltip on click when closeOnClick is true", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.click(trigger)

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("does not open tooltip when disabled", async () => {
    await render(
      <Tooltip content="Tooltip Hovered" disabled>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await vi.waitFor(
      () => {
        expect(page.getByRole("tooltip").query()).toBeNull()
      },
      { timeout: 500 },
    )
  })

  test("does not open on touch pointer events", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.pointerEnter(trigger, { pointerType: "touch" })

    await vi.waitFor(
      () => {
        expect(page.getByRole("tooltip").query()).toBeNull()
      },
      { timeout: 500 },
    )
  })

  test("closes tooltip on outside click", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.mouseDown(document.body)
    fireEvent.mouseUp(document.body)

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("closes tooltip on pointer leave from content", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    const content = page.getByRole("tooltip").element()

    fireEvent.pointerLeave(content)

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("handles openDelay and closeDelay", async () => {
    await render(
      <Tooltip closeDelay={100} content="Tooltip Hovered" openDelay={100}>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })

    expect(page.getByRole("tooltip").query()).toBeNull()

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" })

    await vi.waitFor(() => {
      expect(page.getByRole("tooltip").query()).toBeNull()
    })
  })

  test("force closes when re-opening while already open", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger").element()

    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    fireEvent.blur(trigger)
    fireEvent.focus(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })
  })
})
