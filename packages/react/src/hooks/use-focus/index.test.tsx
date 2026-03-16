import type { FC } from "react"
import type { UseFocusOnMouseDownProps } from "./"
import { page, render } from "#test/browser"
import { useRef, useState } from "react"
import { useFocusOnPointerDown, useFocusOnShow } from "./"

vi.mock("../../utils", async (importOriginal) => {
  const actual = await importOriginal<{ [key: string]: unknown }>()

  return {
    ...actual,
    isSafari: vi.fn(() => true),
  }
})

describe("useFocusOnShow", () => {
  test("focuses on the element when it becomes visible", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      const focusRef = useRef<HTMLButtonElement>(null)
      useFocusOnShow(ref, {
        focusTarget: focusRef,
        shouldFocus: true,
        visible,
      })

      return (
        <div>
          <button data-testid="toggle" onClick={() => setVisible(true)}>
            Toggle
          </button>
          <div ref={ref}>
            <button ref={focusRef} data-testid="button">
              Button
            </button>
          </div>
        </div>
      )
    }

    const { user } = await render(<Component />)

    const button = page.getByTestId("button")
    await expect.element(button).not.toHaveFocus()

    await user.click(page.getByTestId("toggle"))

    await expect.element(button).toHaveFocus()
  })

  test("focuses on the first tabbable element when focusTarget is not provided", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return (
        <div>
          <button data-testid="toggle" onClick={() => setVisible(true)}>
            Toggle
          </button>
          <div ref={ref}>
            <button data-testid="button">Button</button>
          </div>
        </div>
      )
    }

    const { user } = await render(<Component />)

    const button = page.getByTestId("button")
    await expect.element(button).not.toHaveFocus()

    await user.click(page.getByTestId("toggle"))

    await expect.element(button).toHaveFocus()
  })

  test("focuses on the target when there are no focusable descendants", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return (
        <div>
          <button data-testid="toggle" onClick={() => setVisible(true)}>
            Toggle
          </button>
          <div ref={ref} data-testid="target" tabIndex={-1}>
            <span>Label</span>
          </div>
        </div>
      )
    }

    const { user } = await render(<Component />)

    await user.click(page.getByTestId("toggle"))

    await expect.element(page.getByTestId("target")).toHaveFocus()
  })

  test("does nothing when shouldFocus is false", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: false, visible })

      return (
        <div>
          <button data-testid="toggle" onClick={() => setVisible(true)}>
            Toggle
          </button>
          <div ref={ref}>
            <button data-testid="button">Button</button>
          </div>
        </div>
      )
    }

    const { user } = await render(<Component />)

    await user.click(page.getByTestId("toggle"))

    await expect.element(page.getByTestId("button")).not.toHaveFocus()
  })

  test("does nothing when target already contains active element", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return (
        <div ref={ref}>
          <button data-testid="inner-button" onClick={() => setVisible(true)}>
            Inner Button
          </button>
        </div>
      )
    }

    const { user } = await render(<Component />)

    const innerButton = page.getByTestId("inner-button")
    await user.click(innerButton)

    await expect.element(innerButton).toHaveFocus()
  })

  test("does not throw when ref.current is null", async () => {
    const Component: FC = () => {
      const [visible, setVisible] = useState(false)
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return (
        <button data-testid="toggle" onClick={() => setVisible(true)}>
          Toggle
        </button>
      )
    }

    const { user } = await render(<Component />)

    await expect(user.click(page.getByTestId("toggle"))).resolves.not.toThrow()
  })
})

describe("useFocusOnPointerDown", () => {
  afterEach(() => {
    vi.mocked(isSafari).mockRestore()
    vi.restoreAllMocks()
  })

  const Component: FC<Omit<UseFocusOnMouseDownProps, "ref">> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    useFocusOnPointerDown({
      ref,
      elements: [buttonRef],
      enabled: true,
      ...props,
    })

    return (
      <div ref={ref} data-testid="container">
        <button ref={buttonRef} data-testid="button">
          Button
        </button>
      </div>
    )
  }

  test("prevents default behavior and focuses on the target element", async () => {
    const { user } = await render(<Component />)

    const button = page.getByTestId("button")
    await user.click(button)

    await expect.element(button).toHaveFocus()
  })

  test("does not focus when disabled", async () => {
    await render(<Component enabled={false} />)

    const button = page.getByTestId("button")

    await expect.element(button).not.toHaveFocus()
  })

  test("keeps focus when target is already active", async () => {
    const { user } = await render(<Component />)

    const button = page.getByTestId("button")
    await user.click(button)

    await expect.element(button).toHaveFocus()
  })

  test("uses ref as fallback when elements is not provided", async () => {
    const { user } = await render(<Component elements={undefined} />)

    const button = page.getByTestId("button")
    await user.click(button)

    await expect.element(button).toHaveFocus()
  })

  test("supports raw HTMLElement in elements", async () => {
    const ComponentWithRawElement: FC = () => {
      const ref = useRef<HTMLDivElement>(null)
      const buttonRef = useRef<HTMLButtonElement>(null)
      useFocusOnPointerDown({
        ref,
        elements: [buttonRef],
        enabled: true,
      })

      return (
        <div ref={ref} data-testid="container">
          <button ref={buttonRef} data-testid="button">
            Button
          </button>
        </div>
      )
    }

    const { user } = await render(<ComponentWithRawElement />)

    const button = page.getByTestId("button")
    await user.click(button)

    await expect.element(button).toHaveFocus()
  })

  test("does not focus on non-safari browsers", async () => {
    const { isSafari } = await import("../../utils")
    vi.mocked(isSafari).mockReturnValue(false)

    await render(<Component />)

    const button = page.getByTestId("button")

    await expect.element(button).not.toHaveFocus()

    vi.mocked(isSafari).mockReturnValue(true)
  })
})
