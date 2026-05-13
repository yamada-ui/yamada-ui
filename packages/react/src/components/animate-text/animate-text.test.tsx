import { a11y, act, render, screen } from "#test"
import { AnimateText, splitText } from "./"

describe("splitText", () => {
  test.each([
    ["Hello", "char", ["H", "e", "l", "l", "o"]],
    [
      "Hello World",
      "char",
      ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"],
    ],
    ["Hello World", "word", ["Hello", " ", "World"]],
    ["A B  C", "word", ["A", " ", "B", "  ", "C"]],
    ["", "char", []],
    ["", "word", []],
  ] as const)("splits %p by %p into %p", (input, splitBy, expected) => {
    expect(splitText(input, splitBy)).toStrictEqual(expected)
  })

  test("splits surrogate pairs as single units when splitting by char", () => {
    expect(splitText("a🎉b", "char")).toStrictEqual(["a", "🎉", "b"])
  })
})

describe("<AnimateText.FadeIn />", () => {
  test("renders component correctly", async () => {
    await a11y(<AnimateText.FadeIn>Hello</AnimateText.FadeIn>)
  })

  test("splits children into character spans with aria-hidden", () => {
    render(<AnimateText.FadeIn>Hi</AnimateText.FadeIn>)

    const root = screen.getByText("Hi").parentElement!
    const chars = root.querySelectorAll("[aria-hidden='true']")
    expect(chars).toHaveLength(2)
    expect(chars[0]).toHaveTextContent("H")
    expect(chars[1]).toHaveTextContent("i")
  })

  test("splits by word when splitBy='word'", () => {
    render(<AnimateText.FadeIn splitBy="word">Hello World</AnimateText.FadeIn>)

    const root = screen.getByText("Hello World").parentElement!
    const chars = root.querySelectorAll("[aria-hidden='true']")
    expect(chars).toHaveLength(3)
    expect(chars[0]).toHaveTextContent("Hello")
    expect(chars[1]?.textContent).toBe(" ")
    expect(chars[2]).toHaveTextContent("World")
  })

  test("exposes the full text for screen readers via VisuallyHidden", () => {
    render(<AnimateText.FadeIn>Accessible Text</AnimateText.FadeIn>)
    expect(screen.getByText("Accessible Text")).toBeInTheDocument()
  })
})

describe("<AnimateText.Typewriter />", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("renders component correctly", async () => {
    vi.useRealTimers()
    await a11y(<AnimateText.Typewriter>Hello</AnimateText.Typewriter>)
  })

  test("reveals characters incrementally over time", async () => {
    render(<AnimateText.Typewriter duration={0.1}>Hi</AnimateText.Typewriter>)

    const root = screen.getByText("Hi").parentElement!
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(0)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(100)
    })
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(1)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(100)
    })
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(2)
  })

  test("calls onAnimationComplete after all characters are revealed", async () => {
    const onComplete = vi.fn()
    render(
      <AnimateText.Typewriter duration={0.1} onAnimationComplete={onComplete}>
        Hi
      </AnimateText.Typewriter>,
    )

    await act(async () => {
      await vi.advanceTimersByTimeAsync(200)
    })
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  test("restarts the animation when loop is true", async () => {
    render(
      <AnimateText.Typewriter duration={0.1} loop repeatDelay={500}>
        Hi
      </AnimateText.Typewriter>,
    )

    const root = screen.getByText("Hi").parentElement!

    await act(async () => {
      await vi.advanceTimersByTimeAsync(200)
    })
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(2)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(500)
    })
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(0)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(100)
    })
    expect(root.querySelectorAll("[aria-hidden='true']")).toHaveLength(1)
  })

  test("does not restart when loop is false", async () => {
    const onComplete = vi.fn()
    render(
      <AnimateText.Typewriter
        duration={0.1}
        loop={false}
        onAnimationComplete={onComplete}
      >
        Hi
      </AnimateText.Typewriter>,
    )

    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000)
    })
    expect(onComplete).toHaveBeenCalledTimes(1)
  })
})
