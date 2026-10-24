import type { ReactNode } from "react"
import { createRef, Suspense } from "react"
import { a11y, act, render, screen } from "#test"
import { AspectRatio } from "./aspect-ratio"

describe("<AspectRatio />", () => {
  test("renders a lazy-wrapped child with its props and ref", () => {
    const ref = createRef<HTMLImageElement>()
    const child = {
      $$typeof: Symbol.for("react.lazy"),
      _init: (payload: ReactNode) => payload,
      _payload: <img ref={ref} src="/image.png" alt="Landscape" />,
    } as unknown as ReactNode

    render(<AspectRatio ratio={16 / 9}>{child}</AspectRatio>)

    const image = screen.getByRole("img", { name: "Landscape" })
    expect(image).toHaveAttribute("src", "/image.png")
    expect(ref.current).toBe(image)
  })

  test.each([
    { name: "null", value: null },
    { name: "text", value: "Text" },
    { name: "single-element array", value: [<span key="one" />] },
    {
      name: "multiple elements",
      value: [<span key="one" />, <span key="two" />],
    },
  ])("rejects a lazy wrapper resolving to $name", ({ value }) => {
    const child = {
      $$typeof: Symbol.for("react.lazy"),
      _init: () => value,
      _payload: { status: "fulfilled", value },
    }
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined)

    try {
      expect(() =>
        render(<AspectRatio>{child as unknown as ReactNode}</AspectRatio>),
      ).toThrow(/React.Children.only/)
    } finally {
      spy.mockRestore()
    }
  })

  test("renders a pending lazy child after Suspense resolves", async () => {
    const { promise, resolve } = Promise.withResolvers<void>()
    let ready = false
    const child = {
      $$typeof: Symbol.for("react.lazy"),
      _init: () => {
        if (!ready) throw promise

        return <img src="/image.png" alt="Landscape" />
      },
      _payload: { status: "pending" },
    } as unknown as ReactNode

    render(
      <Suspense fallback={<span>Loading</span>}>
        <AspectRatio>{child}</AspectRatio>
      </Suspense>,
    )

    expect(screen.getByText("Loading")).toBeInTheDocument()

    await act(async () => {
      ready = true
      resolve()
      await promise
    })

    expect(screen.getByRole("img", { name: "Landscape" })).toBeInTheDocument()
    expect(screen.queryByText("Loading")).not.toBeInTheDocument()
  })

  test("renders component correctly", async () => {
    await a11y(
      <AspectRatio>
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
  })
})
