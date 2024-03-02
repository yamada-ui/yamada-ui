import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, act, render, screen } from "@yamada-ui/test"
import {
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "../src"
import type { PopoverProps } from "../src"

describe("<Popover />", () => {
  const PopoverExample = (props: PopoverProps) => {
    return (
      <Popover {...props}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
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
    const { findByRole, findByText, findByLabelText, user } = render(
      <PopoverExample />,
    )
    const triggerButton = await findByRole("button", { name: "Open Popover" })
    expect(triggerButton).toBeVisible()

    await act(async () => {
      await user.click(triggerButton)
    })

    expect(await findByLabelText("Close")).toBeVisible()
    expect(await findByText("Popover Header")).toBeVisible()
    expect(await findByText("Popover Body")).toBeVisible()
    expect(await findByText("Popover Footer")).toBeVisible()
  })

  test("should render correctly with anchor text", async () => {
    const PopoverWithAnchor = () => {
      return (
        <Popover>
          <PopoverAnchor>
            <span>anchor text</span>
          </PopoverAnchor>

          <PopoverTrigger>
            <Button>Open Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>Popover Header</PopoverHeader>
            <PopoverBody>Popover Body</PopoverBody>
            <PopoverFooter>Popover Footer</PopoverFooter>
          </PopoverContent>
        </Popover>
      )
    }

    const { findByRole, findByText, findByLabelText, user } = render(
      <PopoverWithAnchor />,
    )
    const triggerButton = await findByRole("button", { name: "Open Popover" })
    expect(triggerButton).toBeVisible()

    await act(async () => {
      await user.click(triggerButton)
    })

    expect(await findByText("Popover Header")).toBeVisible()
    expect(await findByText("anchor text")).toBeVisible()
    expect(await findByLabelText("Close")).toBeVisible()
    expect(await findByText("Popover Body")).toBeVisible()
    expect(await findByText("Popover Footer")).toBeVisible()
  })

  test("should hover props work", async () => {
    const { findByText, findByLabelText, user } = render(
      <PopoverExample trigger="hover" />,
    )

    await act(async () => {
      await user.tab()
    })

    expect(await findByText("Popover Header")).toBeVisible()
    expect(await findByLabelText("Close")).toBeVisible()
    expect(await findByText("Popover Body")).toBeVisible()
    expect(await findByText("Popover Footer")).toBeVisible()
  })

  test("can popover control", async () => {
    const ControlPopover = () => {
      const { isOpen, onClose, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>Open Popover</Button>

          <Popover isOpen={isOpen} onClose={onClose} closeOnBlur={false}>
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

    const { findByRole, findByText, findByLabelText, user } = render(
      <ControlPopover />,
    )

    const triggerButton = await findByRole("button", { name: "Open Popover" })
    await act(async () => {
      await user.click(triggerButton)
    })

    const closeButton = await findByLabelText("Close")
    expect(await findByText("Popover Header")).toBeVisible()
    expect(closeButton).toBeVisible()
    expect(await findByText("Popover Body")).toBeVisible()

    await act(async () => {
      await user.click(closeButton)
    })

    expect(await findByText("Popover Header")).not.toBeVisible()
    expect(closeButton).not.toBeVisible()
    expect(await findByText("Popover Body")).not.toBeVisible()
  })
})
