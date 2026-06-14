import type { FC } from "react"
import type { UseFocusOnMouseDownProps } from "./"
import { useRef } from "react"
import { page, render } from "#test/browser"
import { useFocusOnPointerDown } from "./"

describe("useFocusOnPointerDown", () => {
  const Component: FC<
    Omit<UseFocusOnMouseDownProps, "ref"> & { preventNativeFocus?: boolean }
  > = ({ preventNativeFocus = true, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)
    useFocusOnPointerDown({
      ref,
      elements: [targetRef],
      enabled: true,
      ...props,
    })

    return (
      <div ref={ref} data-testid="container">
        <div
          ref={targetRef}
          data-testid="target"
          tabIndex={-1}
          onPointerDown={
            preventNativeFocus ? (ev) => ev.preventDefault() : undefined
          }
        >
          Target
        </div>
      </div>
    )
  }
  const platformDescriptor = Object.getOwnPropertyDescriptor(
    navigator,
    "platform",
  )
  const vendorDescriptor = Object.getOwnPropertyDescriptor(navigator, "vendor")

  beforeEach(() => {
    Object.defineProperty(navigator, "platform", {
      configurable: true,
      value: "MacIntel",
    })
    Object.defineProperty(navigator, "vendor", {
      configurable: true,
      value: "Apple Computer, Inc.",
    })
  })

  afterEach(() => {
    if (platformDescriptor) {
      Object.defineProperty(navigator, "platform", platformDescriptor)
    } else {
      delete (navigator as any).platform
    }

    if (vendorDescriptor) {
      Object.defineProperty(navigator, "vendor", vendorDescriptor)
    } else {
      delete (navigator as any).vendor
    }
  })

  test("prevents default behavior and focuses on the target element", async () => {
    const { user } = await render(<Component />)
    const target = page.getByTestId("target")

    await user.click(target)

    await expect.element(target).toHaveFocus()
  })

  test("does not focus when disabled", async () => {
    const { user } = await render(<Component enabled={false} />)
    const target = page.getByTestId("target")

    await user.click(target)

    await expect.element(target).not.toHaveFocus()
  })

  test("does not move focus when target is already active", async () => {
    const { user } = await render(<Component />)
    const target = page.getByTestId("target")
    const targetElement = target.element() as HTMLElement

    targetElement.focus()
    await user.click(target)

    await expect.element(target).toHaveFocus()
  })

  test("uses ref as fallback when elements is not provided", async () => {
    const { user } = await render(<Component elements={undefined} />)
    const target = page.getByTestId("target")

    await user.click(target)

    await expect.element(target).toHaveFocus()
  })

  test("supports raw HTMLElement in elements and ignores null entries", async () => {
    const { rerender, user } = await render(<Component />)
    const target = page.getByTestId("target")
    const targetElement = target.element() as HTMLElement

    rerender(<Component elements={[targetElement]} />)
    await user.click(target)

    await expect.element(target).toHaveFocus()

    targetElement.blur()
    rerender(<Component elements={[null]} />)
    await user.click(target)

    await expect.element(target).not.toHaveFocus()
  })
})
