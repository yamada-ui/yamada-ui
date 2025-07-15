import type { FC } from "react"
import { render, screen } from "#test"
import { isUndefined } from "@yamada-ui/utils"
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
})
