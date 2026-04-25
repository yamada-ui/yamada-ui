import { a11y, page, render } from "#test/browser"
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
    await expect
      .element(page.getByRole("tooltip").query())
      .not.toBeInTheDocument()
  })

  test("does not render tooltip content when closed", async () => {
    await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    await expect
      .element(page.getByRole("tooltip").query())
      .not.toBeInTheDocument()
  })

  test("opens tooltip on pointer enter and closes on pointer leave", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.unhover(trigger)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("opens tooltip on focus and closes on blur", async () => {
    const { user } = await render(
      <>
        <Tooltip closeOnClick={false} content="Tooltip Hovered">
          <button type="button">Trigger</button>
        </Tooltip>
        <button type="button">Outside</button>
      </>,
    )

    const trigger = page.getByRole("button", { name: "Trigger" })
    const outside = page.getByRole("button", { name: "Outside" })

    await user.click(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.click(outside)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("closes tooltip on Escape key", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.keyboard("{Escape}")

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("does not close on Escape when closeOnEsc is false", async () => {
    const { user } = await render(
      <Tooltip closeOnEsc={false} content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.keyboard("{Escape}")

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  test("closes tooltip on scroll when closeOnScroll is true", async () => {
    const { user } = await render(
      <Tooltip closeOnScroll content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    document.dispatchEvent(new Event("scroll"))

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("closes tooltip on click when closeOnClick is true", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.click(trigger)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("does not open tooltip when disabled", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered" disabled>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(
      async () => {
        await expect
          .element(page.getByRole("tooltip").query())
          .not.toBeInTheDocument()
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

    const trigger = page.getByText("Trigger")

    trigger.element().dispatchEvent(
      new PointerEvent("pointerenter", {
        bubbles: true,
        pointerType: "touch",
      }),
    )

    await vi.waitFor(
      async () => {
        await expect
          .element(page.getByRole("tooltip").query())
          .not.toBeInTheDocument()
      },
      { timeout: 500 },
    )
  })

  test("closes tooltip on outside click", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    document.body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    document.body.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("closes tooltip on pointer leave from content", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    const content = page.getByRole("tooltip")

    content.element().dispatchEvent(
      new PointerEvent("pointerout", {
        bubbles: true,
        pointerType: "mouse",
      }),
    )

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("handles openDelay and closeDelay", async () => {
    const { user } = await render(
      <Tooltip closeDelay={100} content="Tooltip Hovered" openDelay={100}>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await expect
      .element(page.getByRole("tooltip").query())
      .not.toBeInTheDocument()

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    await user.unhover(trigger)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("tooltip").query())
        .not.toBeInTheDocument()
    })
  })

  test("force closes when re-opening while already open", async () => {
    const { user } = await render(
      <Tooltip content="Tooltip Hovered">
        <button type="button">Trigger</button>
      </Tooltip>,
    )

    const trigger = page.getByRole("button", { name: "Trigger" })

    await user.hover(trigger)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })

    trigger.element().dispatchEvent(
      new PointerEvent("pointerover", {
        bubbles: true,
        pointerType: "mouse",
      }),
    )

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("tooltip")).toBeInTheDocument()
    })
  })
})
