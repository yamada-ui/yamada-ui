import type { PopoverProps } from "./"
import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import {
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "./"

describe("<Popover />", () => {
  const PopoverExample = (props: PopoverProps) => {
    return (
      <Popover {...props}>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>Popover Header</PopoverHeader>
          <PopoverBody>Popover Body</PopoverBody>
          <PopoverFooter>Popover Footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }

  test("passes a11y test", async () => {
    const { container } = render(<PopoverExample />)
    await a11y(container)
  })

  test("should render popover", async () => {
    const { user } = render(<PopoverExample />)
    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })
    expect(triggerButton).toBeVisible()

    await user.click(triggerButton)

    const closeButton = await screen.findByLabelText("Close popover")
    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())
    await waitFor(() => expect(footer).toBeVisible())
  })

  test("should render correctly with anchor text", async () => {
    const PopoverWithAnchor = () => {
      return (
        <Popover>
          <PopoverAnchor>
            <span>anchor text</span>
          </PopoverAnchor>

          <PopoverTrigger>
            <button>Open Popover</button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>Popover Header</PopoverHeader>
            <PopoverBody>Popover Body</PopoverBody>
            <PopoverFooter>Popover Footer</PopoverFooter>
          </PopoverContent>
        </Popover>
      )
    }

    const { user } = render(<PopoverWithAnchor />)
    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })
    expect(triggerButton).toBeVisible()

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const anchor = await screen.findByText("anchor text")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(anchor).toBeVisible())
    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())
    await waitFor(() => expect(footer).toBeVisible())
  })

  test("should hover props work", async () => {
    const { user } = render(<PopoverExample trigger="hover" />)

    await user.tab()

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())
    await waitFor(() => expect(footer).toBeVisible())
  })

  test("should contextmenu props work", async () => {
    const { user } = render(<PopoverExample trigger="contextmenu" />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.pointer({ target: triggerButton, keys: "[MouseRight]" })

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())
    await waitFor(() => expect(footer).toBeVisible())
  })

  test("should close with escape key", async () => {
    const { user } = render(<PopoverExample />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.tab()
    await user.keyboard("{escape}")

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(closeButton).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("can close on blur", async () => {
    const { user } = render(<PopoverExample />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.click(document.body)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(closeButton).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("can close on blur with contextmenu props", async () => {
    const { user } = render(<PopoverExample trigger="contextmenu" />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.pointer({ target: triggerButton, keys: "[MouseRight]" })

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())
    await waitFor(() => expect(footer).toBeVisible())

    await user.click(document.body)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(closeButton).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("can close when unhover", async () => {
    const { user } = render(<PopoverExample trigger="hover" />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.hover(triggerButton)

    const header = await screen.findByText("Popover Header")
    const closeButton = await screen.findByLabelText("Close popover")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.unhover(triggerButton)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(closeButton).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("can popover control", async () => {
    const ControlPopover = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>Open Popover</button>

          <Popover
            closeOnBlur={false}
            open={open}
            onClose={() => setOpen(false)}
          >
            <PopoverTrigger>
              <span>Popover Target</span>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverHeader>Popover Header</PopoverHeader>
              <PopoverBody>Popover Body</PopoverBody>
            </PopoverContent>
          </Popover>
        </>
      )
    }

    const { user } = render(<ControlPopover />)

    const triggerButton = await screen.findByRole("button", {
      name: "Open Popover",
    })

    await user.click(triggerButton)

    const closeButton = await screen.findByLabelText("Close popover")
    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")

    await waitFor(() => expect(header).toBeVisible())
    await waitFor(() => expect(closeButton).toBeVisible())
    await waitFor(() => expect(body).toBeVisible())

    await user.click(closeButton)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(closeButton).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
  })

  test.each<{
    animation: "bottom" | "left" | "right" | "scale" | "top"
    transform: string
  }>([
    {
      animation: "scale",
      transform: "scale(0.95)",
    },
    {
      animation: "top",
      transform: "translateY(-16px)",
    },
    {
      animation: "left",
      transform: "translateX(-16px)",
    },
    {
      animation: "bottom",
      transform: "translateY(16px)",
    },
    {
      animation: "right",
      transform: "translateX(16px)",
    },
  ])(
    "when animation is %s, the popover should be displayed",
    async ({ animation, transform }) => {
      const { container, user } = render(
        <PopoverExample animation={animation} />,
      )

      const popoverContent = container.querySelector(".ui-popover__content")
      expect(popoverContent).toHaveStyle({
        transform,
        visibility: "hidden",
      })

      const triggerButton = await screen.findByRole("button", {
        name: "Open Popover",
      })
      await user.click(triggerButton)

      await waitFor(() => expect(popoverContent).toBeVisible())
    },
  )
})
