import type { FC } from "react"
import type { ThemeConfig } from "../../core"
import { vi } from "vitest"
import { useAsyncCallback } from "."
import { render, renderHook, screen, waitFor } from "../../../test"

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
    expect(mockCallback).toHaveBeenCalledWith(5)
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
    expect(mockCallback).toHaveBeenCalledWith()
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
    expect(mockCallback).toHaveBeenCalledWith()
  })

  test("should handle callback with loading", async () => {
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
    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector(".ui-loading-page")).toBeInTheDocument()
    expect(el).toBeDisabled()
    await wait(500)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await waitFor(() => {
      expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    })
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenCalledWith()
  })

  test("should handle callback with loading config", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const config: ThemeConfig = { loading: { defaultComponent: "page" } }
    const { result } = renderHook(() => useAsyncCallback(mockCallback, []), {
      providerProps: { config },
    })
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
    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector(".ui-loading-page")).toBeInTheDocument()
    expect(el).toBeDisabled()
    await wait(500)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await waitFor(() => {
      expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    })
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenCalledWith()
  })

  test("should handle callback with override loading", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const config: ThemeConfig = { loading: { defaultComponent: "page" } }
    const { result } = renderHook(
      () => useAsyncCallback(mockCallback, [], { loading: "background" }),
      {
        providerProps: { config },
      },
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
    expect(
      document.querySelector(".ui-loading-background"),
    ).not.toBeInTheDocument()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector(".ui-loading-background")).toBeInTheDocument()
    expect(el).toBeDisabled()
    await wait(500)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await waitFor(() => {
      expect(
        document.querySelector(".ui-loading-background"),
      ).not.toBeInTheDocument()
    })
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenCalledWith()
  })

  test("should handle callback without loading", async () => {
    const mockCallback = vi.fn(async () => {
      await wait(100)
    })
    const config: ThemeConfig = { loading: { defaultComponent: "page" } }
    const { result } = renderHook(
      () => useAsyncCallback(mockCallback, [], { loading: false }),
      {
        providerProps: { config },
      },
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
    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    expect(el).not.toBeDisabled()
    await user.click(el)
    rerender(<Component />)
    expect(result.current[0]).toBeTruthy()
    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    expect(el).toBeDisabled()
    await wait(500)
    rerender(<Component />)
    expect(result.current[0]).toBeFalsy()
    await waitFor(() => {
      expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
    })
    expect(el).not.toBeDisabled()
    expect(mockCallback).toHaveBeenCalledWith()
  })
})
