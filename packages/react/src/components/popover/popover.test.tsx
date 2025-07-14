import { a11y, render, screen, waitFor } from "@/test"
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

  const ComponentWithAnchor = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Anchor>
          <Button>Popover Anchor</Button>
        </Popover.Anchor>

        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>Popover Footer</Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  test("renders tag correctly", async () => {
    await a11y(<Component defaultOpen />)
  })

  test("sets `displayName` correctly", () => {
    expect(Popover.Root.name).toBe("PopoverRoot")
    expect(Popover.Trigger.displayName).toBe("PopoverTrigger")
    expect(Popover.Anchor.displayName).toBe("PopoverAnchor")
    expect(Popover.Content.displayName).toBe("PopoverContent")
    expect(Popover.Header.displayName).toBe("PopoverHeader")
    expect(Popover.Body.displayName).toBe("PopoverBody")
    expect(Popover.Footer.displayName).toBe("PopoverFooter")
  })

  test("sets `className` correctly", () => {
    render(<ComponentWithAnchor defaultOpen />)
    const trigger = screen.getByText("Popover Trigger")
    const anchor = screen.getByText("Popover Anchor")
    const header = screen.getByText("Popover Header")
    const body = screen.getByText("Popover Body")
    const footer = screen.getByText("Popover Footer")
    const content = header.parentElement
    const positioner = content?.parentElement
    expect(trigger).toHaveClass("ui-popover__trigger")
    expect(anchor).toHaveClass("ui-popover__anchor")
    expect(header).toHaveClass("ui-popover__header")
    expect(body).toHaveClass("ui-popover__body")
    expect(footer).toHaveClass("ui-popover__footer")
    expect(content).toHaveClass("ui-popover__content")
    expect(positioner).toHaveClass("ui-popover__positioner")
  })

  test("renders HTML tag correctly", () => {
    render(<ComponentWithAnchor defaultOpen />)
    const header = screen.getByText("Popover Header")
    const body = screen.getByText("Popover Body")
    const footer = screen.getByText("Popover Footer")
    const content = header.parentElement
    const positioner = content?.parentElement
    expect(header.tagName).toBe("DIV")
    expect(body.tagName).toBe("DIV")
    expect(footer.tagName).toBe("DIV")
    expect(content?.tagName).toBe("DIV")
    expect(positioner?.tagName).toBe("DIV")
  })

  test("should close with escape key", async () => {
    const { user } = render(<Component />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.tab()
    await user.keyboard("{escape}")

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("can close on blur", async () => {
    const { user } = render(<Component />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.click(document.body)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })
})
