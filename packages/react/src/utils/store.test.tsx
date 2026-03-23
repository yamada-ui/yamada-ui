import type { FC } from "react"
import { render, screen } from "#test"
import { isUndefined, noop } from "@yamada-ui/utils"
import { createStore } from "./store"

describe("createStore", () => {
  describe("Store with primitive value", () => {
    const renderTestComponent = () => {
      const renderFn = {
        a: vi.fn(),
        b: vi.fn(),
      }

      const [useCount, methods] = createStore(0, {
        increment:
          ({ ref, update }) =>
          () => {
            ref.current = ref.current + 1

            update()
          },
      })

      const A: FC = () => {
        const count = useCount()

        renderFn.a()

        return <p data-testid="a">{count}</p>
      }

      const B: FC = () => {
        renderFn.b()

        return <button onClick={methods.increment}>Increment</button>
      }

      const rest = render(
        <div>
          <A />
          <B />
        </div>,
      )

      return { methods, renderFn, ...rest }
    }

    test("should re-render the store when the increment button is clicked", async () => {
      const { methods, renderFn, user } = renderTestComponent()

      const incrementButton = screen.getByRole("button", { name: "Increment" })

      await user.click(incrementButton)

      expect(renderFn.a).toHaveBeenCalledTimes(2)
      expect(renderFn.b).toHaveBeenCalledTimes(1)

      const a = screen.getByTestId("a")

      expect(a).toHaveTextContent("1")
      expect(methods.get()).toBe(1)
    })
  })

  describe("Store with array value", () => {
    const renderTestComponent = () => {
      const renderFn = {
        a: vi.fn(),
        b: vi.fn(),
        c: vi.fn(),
      }

      const [useArray, methods] = createStore([0, 0])

      const A: FC = () => {
        const count = useArray(0)

        renderFn.a()

        return <p data-testid="a">{count}</p>
      }

      const B: FC = () => {
        const count = useArray(1)

        renderFn.b()

        return <p data-testid="b">{count}</p>
      }

      const C: FC = () => {
        const array = useArray(undefined, "c")

        renderFn.c()

        return (
          <>
            <p data-testid="c">{JSON.stringify(array)}</p>

            <button
              onClick={() =>
                methods.set((prev) => {
                  if (!isUndefined(prev[0])) prev[0] = prev[0] + 1

                  return prev
                })
              }
            >
              Update A
            </button>

            <button
              onClick={() =>
                methods.set((prev) => prev.map((value) => value + 1), ["c"])
              }
            >
              Update C
            </button>
          </>
        )
      }

      const rest = render(
        <div>
          <A />
          <B />
          <C />
        </div>,
      )

      return { methods, renderFn, ...rest }
    }

    test("should re-render the store when the update A button is clicked", async () => {
      const { renderFn, user } = renderTestComponent()

      const updateButton = screen.getByRole("button", { name: "Update A" })

      await user.click(updateButton)

      expect(renderFn.a).toHaveBeenCalledTimes(2)
      expect(renderFn.b).toHaveBeenCalledTimes(1)
      expect(renderFn.c).toHaveBeenCalledTimes(1)

      const a = screen.getByTestId("a")
      const b = screen.getByTestId("b")
      const c = screen.getByTestId("c")

      expect(a).toHaveTextContent("1")
      expect(b).toHaveTextContent("0")
      expect(c).toHaveTextContent("[0,0]")
    })

    test("should re-render the store when the update C button is clicked", async () => {
      const { renderFn, user } = renderTestComponent()

      const updateButton = screen.getByRole("button", { name: "Update C" })

      await user.click(updateButton)

      expect(renderFn.a).toHaveBeenCalledTimes(2)
      expect(renderFn.b).toHaveBeenCalledTimes(2)
      expect(renderFn.c).toHaveBeenCalledTimes(2)

      const a = screen.getByTestId("a")
      const b = screen.getByTestId("b")
      const c = screen.getByTestId("c")

      expect(a).toHaveTextContent("1")
      expect(b).toHaveTextContent("1")
      expect(c).toHaveTextContent("[1,1]")
    })
  })

  describe("Store with object value", () => {
    const renderTestComponent = () => {
      const renderFn = {
        a: vi.fn(),
        b: vi.fn(),
        c: vi.fn(),
      }

      const [useObject, methods] = createStore({
        name: "Hirotomo Yamada",
        gender: "male",
      })

      const A: FC = () => {
        const name = useObject("name")

        renderFn.a()

        return <p data-testid="a">{name}</p>
      }

      const B: FC = () => {
        const gender = useObject("gender")

        renderFn.b()

        return <p data-testid="b">{gender}</p>
      }

      const C: FC = () => {
        renderFn.c()

        return (
          <button
            onClick={() =>
              methods.set((prev) => ({ ...prev, name: "Yamada Hirotomo" }))
            }
          >
            Update name
          </button>
        )
      }

      const rest = render(
        <div>
          <A />
          <B />
          <C />
        </div>,
      )

      return { methods, renderFn, ...rest }
    }

    test("should re-render the store when the update button is clicked", async () => {
      const { renderFn, user } = renderTestComponent()

      const updateButton = screen.getByRole("button", { name: "Update name" })

      await user.click(updateButton)

      expect(renderFn.a).toHaveBeenCalledTimes(2)
      expect(renderFn.b).toHaveBeenCalledTimes(1)
      expect(renderFn.c).toHaveBeenCalledTimes(1)

      const a = screen.getByTestId("a")
      const b = screen.getByTestId("b")

      expect(a).toHaveTextContent("Yamada Hirotomo")
      expect(b).toHaveTextContent("male")
    })
  })

  describe("Store with custom subscribe", () => {
    const renderTestComponent = () => {
      const renderFn = {
        a: vi.fn(),
        b: vi.fn(),
      }

      const [useCount, methods] = createStore(0, undefined, {
        subscribe:
          ({ ref }) =>
          (listener) => {
            const callback = () => {
              ref.current = 1

              listener()
            }

            window.addEventListener("update", callback)

            return () => {
              window.removeEventListener("update", callback)
            }
          },
      })

      const A: FC = () => {
        const count = useCount()

        renderFn.a()

        return <p data-testid="a">{count}</p>
      }

      const B: FC = () => {
        renderFn.b()

        return (
          <button
            onClick={() => {
              window.dispatchEvent(new Event("update"))
            }}
          >
            Update
          </button>
        )
      }

      const rest = render(
        <div>
          <A />
          <B />
        </div>,
      )

      return { methods, renderFn, ...rest }
    }

    test("should re-render the store when the update button is clicked", async () => {
      const { renderFn, user } = renderTestComponent()

      const updateButton = screen.getByRole("button", { name: "Update" })

      await user.click(updateButton)

      expect(renderFn.a).toHaveBeenCalledTimes(2)
      expect(renderFn.b).toHaveBeenCalledTimes(1)

      const a = screen.getByTestId("a")

      expect(a).toHaveTextContent("1")
    })
  })

  describe("Store warnings", () => {
    test("should warn when updating a key with no subscribers", () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

      const [, methods] = createStore(0)
      methods.update()

      expect(warnSpy).toHaveBeenCalledWith(
        "createStore: default is not subscribed.",
      )
      warnSpy.mockRestore()
    })

    test("should warn when subscribing with a key that is already subscribed", () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

      const [useStore] = createStore(0)

      const A: FC = () => {
        useStore(undefined, "shared-key")
        return null
      }

      const B: FC = () => {
        useStore(undefined, "shared-key")
        return null
      }

      render(
        <div>
          <A />
          <B />
        </div>,
      )

      expect(warnSpy).toHaveBeenCalledWith(
        "createStore: shared-key is already subscribed.",
      )
      warnSpy.mockRestore()
    })

    test("should clean up default listeners on unmount", () => {
      const [useStore, methods] = createStore(0)

      const A: FC = () => {
        useStore()
        return null
      }

      const { unmount } = render(<A />)
      expect(methods.queue.get("default")).toHaveLength(1)

      unmount()
      expect(methods.queue.get("default")).toHaveLength(0)
    })

    test("should delete keyed listener on unmount", () => {
      const [useStore, methods] = createStore(0)

      const A: FC = () => {
        useStore(undefined, "key")
        return null
      }

      const { unmount } = render(<A />)
      expect(methods.queue.has("key")).toBeTruthy()

      unmount()
      expect(methods.queue.has("key")).toBeFalsy()
    })

    test("should not throw on unmount when default queue is cleared", () => {
      const [useStore, methods] = createStore(0)

      const A: FC = () => {
        useStore()
        return null
      }

      const { unmount } = render(<A />)
      methods.queue.delete("default")

      expect(() => unmount()).not.toThrow()
    })

    test("should handle getSnapshot for primitive with path", () => {
      const [useStore] = createStore(42)

      const A: FC = () => {
        const val = useStore(0 as any)
        return <p data-testid="val">{val}</p>
      }

      render(<A />)

      expect(screen.getByTestId("val")).toHaveTextContent("42")
    })
  })
})
