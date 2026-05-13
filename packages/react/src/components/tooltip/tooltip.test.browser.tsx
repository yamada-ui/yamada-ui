import { page, render } from "#test/browser"
import { Tooltip } from "."
import { Text } from "../text"

describe("<Tooltip />", () => {
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
    const { user } = await render(
      <>
        <button type="button">Anchor</button>
        <Tooltip content="Tooltip Hovered">
          <Text as="span">Trigger</Text>
        </Tooltip>
      </>,
    )

    await user.hover(page.getByRole("button", { name: "Anchor" }))

    const trigger = page.getByText("Trigger")

    trigger.element().dispatchEvent(
      new PointerEvent("pointerover", {
        bubbles: true,
        isPrimary: true,
        pointerId: 1,
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
      <Tooltip closeDelay={500} content="Tooltip Hovered" openDelay={500}>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    const trigger = page.getByText("Trigger")

    await user.hover(trigger)

    await expect
      .element(page.getByRole("tooltip").query(), { timeout: 50 })
      .not.toBeInTheDocument()

    await expect
      .element(page.getByRole("tooltip"), { timeout: 5000 })
      .toBeInTheDocument()

    await user.unhover(trigger)

    await expect
      .element(page.getByRole("tooltip"), { timeout: 50 })
      .toBeInTheDocument()

    await expect
      .element(page.getByRole("tooltip").query(), { timeout: 5000 })
      .not.toBeInTheDocument()
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
