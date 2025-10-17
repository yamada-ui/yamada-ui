import type { FC } from "react"
import { render, renderHook, screen, waitFor } from "#test"
import { vi } from "vitest"
import { useAsyncCallback } from "."

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

describe("useAsyncCallback", () => {
  test("should handle callback correctly", async () => {
    const mockCallback = vi.fn((value: number) => value * 2)
    const { result } = renderHook(() => useAsyncCallback(mockCallback, []))
    expect(result.current[0]).toBeFalsy()
    const value = await result.current[1](5)
    expect(value).toBe(10)
    expect(mockCallback).toHaveBeenLastCalledWith(5)
  })

  test("should handle callback with processing", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = renderHook(() => useAsyncCallback(mockCallback, []))
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
    const { rerender, user } = render(<Component />)
    const el = screen.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(el).toBeDisabled()
    await wait(100)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })

  test("should handle callback without processing", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = renderHook(() =>
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
    const { rerender, user } = render(<Component />)
    const el = screen.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    expect(el).not.toBeDisabled()
    await wait(100)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })

  test.todo("should handle callback with loading", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const { result } = renderHook(() =>
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
    const { rerender, user } = render(<Component />)
    const el = screen.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    expect(document.querySelector("[data-loading]")).not.toBeInTheDocument()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector("[data-loading]")).toBeInTheDocument()
    expect(el).toBeDisabled()
    await wait(500)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await waitFor(() => {
      expect(document.querySelector("[data-loading]")).not.toBeInTheDocument()
    })
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })
})
