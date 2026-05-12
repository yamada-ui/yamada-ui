import type { FC } from "react"
import { page, render, renderHook } from "#test/browser"
import { useAsyncCallback } from "."
import { wait } from "../../utils"

describe("useAsyncCallback", () => {
  test("should handle callback correctly", async () => {
    const mockCallback = vi.fn((value: number) => value * 2)
    const { result } = await renderHook(() =>
      useAsyncCallback(mockCallback, []),
    )

    expect(result.current[0]).toBeFalsy()

    const value = await result.current[1](5)

    expect(value).toBe(10)
    expect(mockCallback).toHaveBeenLastCalledWith(5)
  })

  test("should handle callback with processing", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = await renderHook(() =>
      useAsyncCallback(mockCallback, []),
    )
    const Component: FC = () => {
      return (
        <button
          disabled={result.current[0]}
          onClick={async () => result.current[1]()}
        >
          Button
        </button>
      )
    }
    const { rerender, user } = await render(<Component />)
    const button = page.getByRole("button", { name: "Button" })

    expect(result.current[0]).toBeFalsy()
    await expect.element(button).not.toBeDisabled()

    await user.click(button)
    rerender(<Component />)

    expect(result.current[0]).toBeTruthy()
    await expect.element(button).toBeDisabled()

    await wait(100)
    rerender(<Component />)

    expect(result.current[0]).toBeFalsy()
    await expect.element(button).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })

  test("should handle callback without processing", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = await renderHook(() =>
      useAsyncCallback(mockCallback, [], { processing: false }),
    )
    const Component: FC = () => {
      return (
        <button
          disabled={result.current[0]}
          onClick={async () => result.current[1]()}
        >
          Button
        </button>
      )
    }
    const { rerender, user } = await render(<Component />)
    const button = page.getByRole("button", { name: "Button" })

    expect(result.current[0]).toBeFalsy()
    await expect.element(button).not.toBeDisabled()

    await user.click(button)
    rerender(<Component />)

    expect(result.current[0]).toBeFalsy()
    await expect.element(button).not.toBeDisabled()

    await wait(100)
    rerender(<Component />)

    expect(result.current[0]).toBeFalsy()
    await expect.element(button).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })

  test("should return stable callback reference when inline function is passed with empty deps", async () => {
    const { rerender, result } = await renderHook(() =>
      useAsyncCallback(() => "result", []),
    )
    const first = result.current[1]

    await rerender()

    expect(result.current[1]).toBe(first)
  })

  test("should update callback reference when deps change", async () => {
    let dep = 1
    const { rerender, result } = await renderHook(() =>
      useAsyncCallback(() => dep, [dep]),
    )
    const first = result.current[1]

    dep = 2
    await rerender()

    expect(result.current[1]).not.toBe(first)
  })

  test("should call the latest callback even when reference is stable", async () => {
    let value = 1
    const { rerender, result } = await renderHook(() =>
      useAsyncCallback(() => value, []),
    )
    const stableCallback = result.current[1]

    value = 42
    await rerender()

    const returned = await stableCallback()

    expect(returned).toBe(42)
  })

  test.todo("should handle callback with loading", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = await renderHook(() =>
      useAsyncCallback(mockCallback, [], { loading: "page" }),
    )
    const Component: FC = () => {
      return (
        <button
          disabled={result.current[0]}
          onClick={async () => result.current[1]()}
        >
          Button
        </button>
      )
    }
    const { rerender, user } = await render(<Component />)
    const button = page.getByRole("button", { name: "Button" })

    expect(result.current[0]).toBeFalsy()
    expect(document.querySelector("[data-loading]")).not.toBeInTheDocument()
    await expect.element(button).not.toBeDisabled()

    await user.click(button)
    rerender(<Component />)

    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector("[data-loading]")).toBeInTheDocument()
    await expect.element(button).toBeDisabled()

    await wait(500)
    rerender(<Component />)

    expect(result.current[0]).toBeFalsy()
    expect(document.querySelector("[data-loading]")).not.toBeInTheDocument()
    await expect.element(button).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })
})
