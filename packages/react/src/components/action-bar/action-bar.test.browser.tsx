import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { ActionBar } from "."
import { Button } from "../button"
import { CloseButton } from "../close-button"

const TestComponent: FC<ActionBar.RootProps> = (props) => {
  return (
    <ActionBar.Root data-testid="root" {...props}>
      <ActionBar.OpenTrigger>
        <Button data-testid="openTrigger">Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content data-testid="content">
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator data-testid="separator" />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" data-testid="closeTrigger" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

describe("<ActionBar />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("opens action bar when open trigger is clicked", async () => {
    const { user } = await render(<TestComponent />)

    await expect
      .element(page.getByTestId("content").query())
      .not.toBeInTheDocument()

    await user.click(page.getByTestId("openTrigger"))
    await expect.element(page.getByTestId("content")).toBeVisible()
  })

  test("closes action bar when close trigger is clicked", async () => {
    const { user } = await render(<TestComponent defaultOpen />)

    await expect.element(page.getByTestId("content")).toBeVisible()

    await user.click(page.getByTestId("closeTrigger"))

    await expect
      .element(page.getByTestId("content").query())
      .not.toBeInTheDocument()
  })

  test("closes action bar when Escape key is pressed", async () => {
    const onClose = vi.fn()
    const { user } = await render(<TestComponent open onClose={onClose} />)

    await user.keyboard("{Escape}")

    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close action bar when Escape is pressed and `closeOnEsc` is false", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <TestComponent closeOnEsc={false} open onClose={onClose} />,
    )

    await user.keyboard("{Escape}")

    expect(onClose).not.toHaveBeenCalled()
  })

  test("does not close action bar when a non-Escape key is pressed", async () => {
    const onClose = vi.fn()
    const { user } = await render(<TestComponent open onClose={onClose} />)

    await user.keyboard("{Enter}")

    expect(onClose).not.toHaveBeenCalled()
  })

  test("calls onCloseComplete after exit animation", async () => {
    const onCloseComplete = vi.fn()
    const { rerender } = await render(
      <TestComponent open onCloseComplete={onCloseComplete} />,
    )

    rerender(<TestComponent open={false} onCloseComplete={onCloseComplete} />)

    await vi.waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalledOnce()
    })
  })
})
