import type { FC } from "react"
import { page, render, renderHook } from "#test/browser"
import { vi } from "vitest"
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
    const el = page.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    await expect.element(el).not.toBeDisabled()
    await user.click(el)
    await rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    await expect.element(el).toBeDisabled()
    await wait(100)
    await rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await expect.element(el).not.toBeDisabled()
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
    const el = page.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    await expect.element(el).not.toBeDisabled()
    await user.click(el)
    await rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await expect.element(el).not.toBeDisabled()
    await wait(100)
    await rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await expect.element(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
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
    const el = page.getByText("Button")
    expect(result.current[0]).toBeFalsy()
    expect(document.querySelector("[data-loading]")).not.toBeInTheDocument()
    await expect.element(el).not.toBeDisabled()
    await user.click(el)
    await rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector("[data-loading]")).toBeInTheDocument()
    await expect.element(el).toBeDisabled()
    await wait(500)
    await rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await expect.poll(() => document.querySelector("[data-loading]")).toBeNull()
    await expect.element(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenLastCalledWith()
  })
})
