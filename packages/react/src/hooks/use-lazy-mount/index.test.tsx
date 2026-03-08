import type { FC } from "react"
import type { UseLazyMountProps } from "./"
import { render } from "#test"
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
  test("renders children when lazy is false", () => {
    const { getByTestId } = render(
      <Component lazy={false} mounted={false}>
        <span>content</span>
      </Component>,
    )

    expect(getByTestId("container")).toHaveTextContent("content")
  })

  test("renders children when mounted is true", () => {
    const { getByTestId } = render(
      <Component lazy mounted>
        <span>content</span>
      </Component>,
    )

    expect(getByTestId("container")).toHaveTextContent("content")
  })

  test("returns null when lazy is true and mounted is false", () => {
    const { getByTestId } = render(
      <Component lazy mounted={false}>
        <span>content</span>
      </Component>,
    )

    expect(getByTestId("container")).toBeEmptyDOMElement()
  })

  test("keeps mounted content with keepMounted behavior", async () => {
    const { getByTestId, user } = render(
      <ToggleComponent lazy lazyBehavior="keepMounted">
        <span>content</span>
      </ToggleComponent>,
    )

    expect(getByTestId("container")).toBeEmptyDOMElement()

    await user.click(getByTestId("toggle"))

    expect(getByTestId("container")).toHaveTextContent("content")

    await user.click(getByTestId("toggle"))

    expect(getByTestId("container")).toHaveTextContent("content")
  })

  test("unmounts content with unmount behavior", async () => {
    const { getByTestId, user } = render(
      <ToggleComponent lazy lazyBehavior="unmount">
        <span>content</span>
      </ToggleComponent>,
    )

    expect(getByTestId("container")).toBeEmptyDOMElement()

    await user.click(getByTestId("toggle"))

    expect(getByTestId("container")).toHaveTextContent("content")

    await user.click(getByTestId("toggle"))

    expect(getByTestId("container")).toBeEmptyDOMElement()
  })
})
