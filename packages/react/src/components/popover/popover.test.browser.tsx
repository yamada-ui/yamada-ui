import { page, render } from "#test/browser"
import { Popover } from "."
import { Button } from "../button"

describe("<Popover />", () => {
  const Component = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content data-testid="popoverContent">
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>Popover Footer</Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  const ComponentWithCloseTrigger = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>
            <Popover.CloseTrigger>
              <Button>Close</Button>
            </Popover.CloseTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  test("should close with escape key", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()
    await expect.element(page.getByText("Popover Body")).toBeVisible()
    await expect.element(page.getByText("Popover Footer")).toBeVisible()

    const popoverContent = page.getByTestId("popoverContent").element()

    popoverContent.focus()
    await expect.poll(() => document.activeElement).toBe(popoverContent)
    await user.keyboard("{Escape}")

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Body").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Footer").query()).toBeNull()
  })

  test("should not close with escape key when `closeOnEsc` is false", async () => {
    const { user } = await render(<Component closeOnEsc={false} />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = page.getByText("Popover Header")
    const popoverContent = page.getByTestId("popoverContent").element()

    popoverContent.focus()
    await expect.poll(() => document.activeElement).toBe(popoverContent)
    await user.keyboard("{Escape}")

    await expect.element(header).toBeVisible()
  })

  test("should return focus to trigger after escape key", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()

    const popoverContent = page.getByTestId("popoverContent").element()

    popoverContent.focus()
    await expect.poll(() => document.activeElement).toBe(popoverContent)
    await user.keyboard("{Escape}")

    await expect
      .poll(() => page.getByTestId("popoverContent").query())
      .toBeNull()
    await expect
      .poll(() => document.activeElement)
      .toBe(triggerButton.element())
  })

  test("can close on blur", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()
    await expect.element(page.getByText("Popover Body")).toBeVisible()
    await expect.element(page.getByText("Popover Footer")).toBeVisible()

    document.body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    document.body.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }))

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Body").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Footer").query()).toBeNull()
  })

  test("should close when close trigger is clicked", async () => {
    const { user } = await render(<ComponentWithCloseTrigger />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = page.getByRole("button", {
      name: "Close",
    })

    await user.click(closeButton)

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
  })

  test("should return focus to trigger after close trigger is clicked", async () => {
    const { user } = await render(<ComponentWithCloseTrigger />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = page.getByRole("button", {
      name: "Close",
    })

    await user.click(closeButton)

    await expect
      .poll(() => document.activeElement)
      .toBe(triggerButton.element())
  })

  test("should apply modal behavior when `modal` is true", async () => {
    const { user } = await render(<Component modal />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect
      .element(page.getByTestId("popoverContent"))
      .toHaveAttribute("aria-modal", "true")
  })

  test("should block scroll when `blockScrollOnMount` is true", async () => {
    const { user } = await render(<Component blockScrollOnMount />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()

    await expect.poll(() => document.body.style.overflow).toBe("hidden")
  })
})
