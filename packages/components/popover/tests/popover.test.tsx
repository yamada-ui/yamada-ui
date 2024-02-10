import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render } from "@yamada-ui/test"
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
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
    const { getByRole, getByText, getByLabelText, user } = render(
      <PopoverExample />,
    )
    const triggerButton = getByRole("button", { name: "Open Popover" })
    expect(triggerButton).toBeVisible()

    await user.click(triggerButton)

    expect(getByLabelText("Close")).toBeVisible()
    expect(getByText("Popover Header")).toBeVisible()
    expect(getByText("Popover Body")).toBeVisible()
    expect(getByText("Popover Footer")).toBeVisible()
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

    const { getByRole, getByText, getByLabelText, user } = render(
      <PopoverWithAnchor />,
    )
    const triggerButton = getByRole("button", { name: "Open Popover" })
    expect(triggerButton).toBeVisible()

    await user.click(triggerButton)

    expect(getByText("Popover Header")).toBeVisible()
    expect(getByText("anchor text")).toBeVisible()
    expect(getByLabelText("Close")).toBeVisible()
    expect(getByText("Popover Body")).toBeVisible()
    expect(getByText("Popover Footer")).toBeVisible()
  })

  test("should hover props work", async () => {
    const { getByText, getByLabelText, user } = render(
      <PopoverExample trigger="hover" />,
    )

    await user.tab()

    expect(getByText("Popover Header")).toBeVisible()
    expect(getByLabelText("Close")).toBeVisible()
    expect(getByText("Popover Body")).toBeVisible()
    expect(getByText("Popover Footer")).toBeVisible()
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

    const { getByRole, getByText, getByLabelText, user } = render(
      <ControlPopover />,
    )

    await user.click(getByRole("button", { name: "Open Popover" }))

    const closeButton = getByLabelText("Close")
    expect(getByText("Popover Header")).toBeVisible()
    expect(closeButton).toBeVisible()
    expect(getByText("Popover Body")).toBeVisible()

    await user.click(closeButton)

    expect(getByText("Popover Header")).not.toBeVisible()
    expect(closeButton).not.toBeVisible()
    expect(getByText("Popover Body")).not.toBeVisible()
  })
})
