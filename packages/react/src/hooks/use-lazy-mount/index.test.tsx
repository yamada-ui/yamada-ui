import type { FC } from "react"
import type { UseLazyMountProps } from "./"
import { page, render } from "#test/browser"
import { useState } from "react"
import { useLazyMount } from "./"

const Component: FC<UseLazyMountProps> = (props) => {
  const content = useLazyMount(props)

  return <div data-testid="container">{content}</div>
}

const ToggleComponent: FC<Omit<UseLazyMountProps, "mounted">> = (props) => {
  const [mounted, setMounted] = useState(false)
  const content = useLazyMount({ ...props, mounted })

  return (
    <div>
      <button data-testid="toggle" onClick={() => setMounted((v) => !v)}>
        toggle
      </button>
      <div data-testid="container">{content}</div>
    </div>
  )
}

describe("useLazyMount", () => {
  test("renders children when lazy is false", async () => {
    await render(
      <Component lazy={false} mounted={false}>
        <span>content</span>
      </Component>,
    )

    await expect
      .element(page.getByTestId("container"))
      .toHaveTextContent("content")
  })

  test("renders children when mounted is true", async () => {
    await render(
      <Component lazy mounted>
        <span>content</span>
      </Component>,
    )

    await expect
      .element(page.getByTestId("container"))
      .toHaveTextContent("content")
  })

  test("returns null when lazy is true and mounted is false", async () => {
    await render(
      <Component lazy mounted={false}>
        <span>content</span>
      </Component>,
    )

    await expect.element(page.getByTestId("container")).toBeEmptyDOMElement()
  })

  test("keeps mounted content with keepMounted behavior", async () => {
    const { user } = await render(
      <ToggleComponent lazy lazyBehavior="keepMounted">
        <span>content</span>
      </ToggleComponent>,
    )

    await expect.element(page.getByTestId("container")).toBeEmptyDOMElement()

    await user.click(page.getByTestId("toggle"))

    await expect
      .element(page.getByTestId("container"))
      .toHaveTextContent("content")

    await user.click(page.getByTestId("toggle"))

    await expect
      .element(page.getByTestId("container"))
      .toHaveTextContent("content")
  })

  test("unmounts content with unmount behavior", async () => {
    const { user } = await render(
      <ToggleComponent lazy lazyBehavior="unmount">
        <span>content</span>
      </ToggleComponent>,
    )

    await expect.element(page.getByTestId("container")).toBeEmptyDOMElement()

    await user.click(page.getByTestId("toggle"))

    await expect
      .element(page.getByTestId("container"))
      .toHaveTextContent("content")

    await user.click(page.getByTestId("toggle"))

    await expect.element(page.getByTestId("container")).toBeEmptyDOMElement()
  })
})
