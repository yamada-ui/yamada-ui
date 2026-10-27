import type { MarqueeRootProps } from "./"
import { useRef, useState } from "react"
import { page, render } from "#test/browser"
import { styled } from "../../core"
import { Marquee } from "./"

function TestComponent(props: MarqueeRootProps) {
  return (
    <Marquee.Root
      aria-label="Brands"
      gap="20px"
      h="100px"
      pauseOnHover={false}
      w="300px"
      {...props}
    >
      <Marquee.Content data-testid="content">
        <Marquee.Item h="40px" w="100px">
          First
        </Marquee.Item>
        <Marquee.Item h="40px" w="100px">
          Second
        </Marquee.Item>
      </Marquee.Content>
    </Marquee.Root>
  )
}

function ImplicitContentTestComponent(props: MarqueeRootProps) {
  const contentProps = { "data-testid": "content", ...props.contentProps }

  return (
    <Marquee.Root
      aria-label="Brands"
      gap="20px"
      h="120px"
      pauseOnFocus={false}
      pauseOnHover={false}
      w="300px"
      {...props}
      contentProps={contentProps}
    >
      <Marquee.Item h="40px" w="100px">
        First
      </Marquee.Item>
      <Marquee.Item h="40px" w="100px">
        Second
      </Marquee.Item>
    </Marquee.Root>
  )
}

describe("<Marquee />", () => {
  test("calculates duration from content size, gaps, and speed", async () => {
    await render(<TestComponent />)

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "4.8s" })
    await expect
      .poll(() =>
        getComputedStyle(
          page.getByRole("region", { name: "Brands" }).element(),
        ).getPropertyValue("--distance"),
      )
      .toBe("240px")
  })

  test("uses duration instead of speed when supplied", async () => {
    await render(<TestComponent duration={12} speed={100} />)

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "12s" })
  })

  test.each(["horizontal", "vertical"] as const)(
    "loops seamlessly in %s orientation",
    async (orientation) => {
      await render(
        <TestComponent duration={10} orientation={orientation} paused />,
      )

      const content = page.getByTestId("content")
      const vertical = orientation === "vertical"
      const distance = vertical ? 120 : 240

      await expect.element(content).toHaveStyle({ animationDuration: "10s" })

      const animation = content.element().getAnimations()[0]!

      animation.currentTime = 9999

      await expect
        .poll(() => {
          const transform = new DOMMatrix(
            getComputedStyle(content.element()).transform,
          )

          return vertical ? transform.m42 : transform.m41
        })
        .toBeCloseTo(-distance * 0.9999)

      animation.currentTime = 10000

      await expect
        .poll(() => {
          const transform = new DOMMatrix(
            getComputedStyle(content.element()).transform,
          )

          return vertical ? transform.m42 : transform.m41
        })
        .toBeCloseTo(0)

      const [original, copy] = page.getByText("First", { exact: true }).all()
      const axis = vertical ? "top" : "left"

      await expect
        .poll(
          () =>
            copy!.element().getBoundingClientRect()[axis] -
            original!.element().getBoundingClientRect()[axis],
        )
        .toBeCloseTo(distance)
    },
  )

  test.each([
    ["horizontal", "start", false, "normal"],
    ["horizontal", "end", false, "reverse"],
    ["vertical", "start", false, "normal"],
    ["vertical", "end", false, "reverse"],
    ["horizontal", "start", true, "reverse"],
    ["horizontal", "end", true, "normal"],
    ["vertical", "start", true, "reverse"],
    ["vertical", "end", true, "normal"],
  ] as const)(
    "scrolls %s towards %s with reverse=%s",
    async (orientation, direction, reverse, animationDirection) => {
      await render(
        <TestComponent
          direction={direction}
          orientation={orientation}
          reverse={reverse}
        />,
      )

      const content = page.getByTestId("content")

      await expect.element(content).toHaveStyle({ animationDirection })
      await expect
        .element(content)
        .toHaveAttribute("data-orientation", orientation)
    },
  )

  test("includes vertical gaps in the scrolling distance", async () => {
    await render(<TestComponent orientation="vertical" />)

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "2.4s" })
    await expect
      .poll(() =>
        getComputedStyle(
          page.getByRole("region", { name: "Brands" }).element(),
        ).getPropertyValue("--distance"),
      )
      .toBe("120px")
  })

  test("keeps intrinsic vertical height independent of copies", async () => {
    await render(
      <Marquee.Root aria-label="Brands" gap="20px" orientation="vertical">
        <Marquee.Content data-testid="content">
          <Marquee.Item h="40px">Yamada UI</Marquee.Item>
        </Marquee.Content>
      </Marquee.Root>,
    )

    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveStyle({ height: "60px" })
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "1.2s" })
    await expect
      .poll(() => page.getByText("Yamada UI", { exact: true }).all().length)
      .toBe(2)
  })

  test("fills a viewport wider than the original content", async () => {
    await render(<TestComponent w="800px" />)

    await expect
      .poll(() => page.getByText("First", { exact: true }).all().length)
      .toBe(5)
  })

  test("recalculates copies and duration when layout changes", async () => {
    function Component() {
      const [expanded, setExpanded] = useState(false)

      return (
        <>
          <button onClick={() => setExpanded(true)}>Expand</button>
          <TestComponent
            gap={expanded ? "40px" : "20px"}
            w={expanded ? "1000px" : "300px"}
          />
        </>
      )
    }

    const { user } = await render(<Component />)

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "4.8s" })
    await user.click(page.getByRole("button", { name: "Expand" }))
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "5.6s" })
    await expect
      .poll(() => page.getByText("First", { exact: true }).all().length)
      .toBe(5)
  })

  test("measures transformed content and updates trailing spacing", async () => {
    function Component() {
      const [gap, setGap] = useState("20px")

      return (
        <>
          <button onClick={() => setGap("40px")}>Increase spacing</button>
          <Marquee.Root gap={gap} transform="scale(0.5)" w="300px">
            <Marquee.Content data-testid="content">
              <Marquee.Item w="100px">Yamada UI</Marquee.Item>
            </Marquee.Content>
          </Marquee.Root>
        </>
      )
    }

    const { user } = await render(<Component />)
    const content = page.getByTestId("content")

    await expect.element(content).toHaveStyle({ animationDuration: "2.4s" })
    await user.click(page.getByRole("button", { name: "Increase spacing" }))
    await expect.element(content).toHaveStyle({ animationDuration: "2.8s" })
  })

  test.each([true, false])("pauseOnHover=%s", async (pauseOnHover) => {
    const { user } = await render(<TestComponent pauseOnHover={pauseOnHover} />)
    const content = page.getByTestId("content")

    await user.hover(page.getByRole("region", { name: "Brands" }))
    await expect.element(content).toHaveStyle({
      animationPlayState: pauseOnHover ? "paused" : "running",
    })
    await user.unhover(page.getByRole("region", { name: "Brands" }))
    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
  })

  test("allows pausing and resuming externally", async () => {
    function Component() {
      const [paused, setPaused] = useState(false)

      return (
        <>
          <button onClick={() => setPaused((prev) => !prev)}>Toggle</button>
          <TestComponent paused={paused} />
        </>
      )
    }

    const { user } = await render(<Component />)
    const content = page.getByTestId("content")

    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
    await user.click(page.getByRole("button", { name: "Toggle" }))
    await expect.element(content).toHaveStyle({ animationPlayState: "paused" })
    await user.click(page.getByRole("button", { name: "Toggle" }))
    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
  })

  test("keeps original links focusable and skips all copies", async () => {
    const { user } = await render(
      <>
        <Marquee.Root
          aria-label="Brands"
          pauseOnFocus
          pauseOnHover={false}
          tabIndex={-1}
          w="300px"
        >
          <Marquee.Content data-testid="content">
            <Marquee.Item>
              <a href="#first" tabIndex={0}>
                First link
              </a>
            </Marquee.Item>
            <Marquee.Item>
              <a href="#second" tabIndex={0}>
                Second link
              </a>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Root>
        <button>After marquee</button>
      </>,
    )

    await user.tab()
    await expect
      .element(page.getByRole("link", { name: "First link" }))
      .toHaveFocus()
    await expect.element(page.getByTestId("content")).toHaveStyle({
      animationPlayState: "paused",
      transform: "none",
    })
    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveStyle({ overflow: "auto" })
    await user.tab()
    await expect
      .element(page.getByRole("link", { name: "Second link" }))
      .toHaveFocus()
    await user.tab()
    await expect
      .element(page.getByRole("button", { name: "After marquee" }))
      .toHaveFocus()
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationPlayState: "running" })
  })

  test("does not pause on hover or focus by default", async () => {
    const { user } = await render(
      <Marquee.Root aria-label="Brands" tabIndex={-1}>
        <Marquee.Content data-testid="content">
          <a href="#first" tabIndex={0}>
            First link
          </a>
        </Marquee.Content>
      </Marquee.Root>,
    )

    await user.hover(page.getByRole("region", { name: "Brands" }))
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationPlayState: "running" })
    await user.tab()
    await expect
      .element(page.getByRole("link", { name: "First link" }))
      .toHaveFocus()
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationPlayState: "running" })
  })

  test("restores the scroll position after keyboard focus leaves", async () => {
    const { user } = await render(
      <>
        <Marquee.Root
          aria-label="Brands"
          pauseOnFocus
          pauseOnHover={false}
          tabIndex={-1}
          w="200px"
        >
          <Marquee.Content>
            <Marquee.Item w="400px">
              <a href="#first" tabIndex={0}>
                First link
              </a>
            </Marquee.Item>
            <Marquee.Item w="400px">
              <a href="#second" tabIndex={0}>
                Second link
              </a>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Root>
        <button>After marquee</button>
      </>,
    )

    await user.tab()
    await user.tab()
    await expect
      .element(page.getByRole("link", { name: "Second link" }))
      .toHaveFocus()
    await expect
      .poll(
        () => page.getByRole("region", { name: "Brands" }).element().scrollLeft,
      )
      .toBeGreaterThan(0)
    await user.tab()
    await expect
      .element(page.getByRole("button", { name: "After marquee" }))
      .toHaveFocus()
    await expect
      .poll(
        () => page.getByRole("region", { name: "Brands" }).element().scrollLeft,
      )
      .toBe(0)
  })

  test.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    "stops safely for invalid speed %s",
    async (speed) => {
      await render(<TestComponent speed={speed} />)

      await expect.element(page.getByTestId("content")).toHaveStyle({
        animationDuration: "0s",
        animationPlayState: "paused",
      })
    },
  )

  test("scrolls towards the logical start in RTL", async () => {
    await render(<TestComponent dir="rtl" direction="start" />)

    await expect.element(page.getByTestId("content")).toHaveStyle({
      animationDirection: "normal",
    })
    await expect
      .poll(() =>
        getComputedStyle(
          page.getByRole("region", { name: "Brands" }).element(),
        ).getPropertyValue("--translate-x"),
      )
      .toBe("240px")
  })

  test("applies the delay before moving the content", async () => {
    await render(<ImplicitContentTestComponent delay={5} duration={1} paused />)

    const content = page.getByTestId("content")

    await expect.element(content).toHaveStyle({
      animationDelay: "5s",
      animationDuration: "1s",
    })

    const animation = content.element().getAnimations()[0]!

    animation.currentTime = 4000
    await expect
      .poll(
        () => new DOMMatrix(getComputedStyle(content.element()).transform).m41,
      )
      .toBe(0)
    animation.currentTime = 5500
    await expect
      .poll(
        () => new DOMMatrix(getComputedStyle(content.element()).transform).m41,
      )
      .toBeCloseTo(-120)
  })

  test("fires iteration and completion callbacks for finite loops", async () => {
    const onLoopComplete = vi.fn()
    const onComplete = vi.fn()

    await render(
      <ImplicitContentTestComponent
        duration={0.08}
        loopCount={3}
        onComplete={onComplete}
        onLoopComplete={onLoopComplete}
      />,
    )

    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveAttribute("data-complete")
    expect(onLoopComplete).toHaveBeenCalledTimes(2)
    expect(onComplete).toHaveBeenCalledTimes(1)
    await expect.element(page.getByTestId("content")).toHaveStyle({
      animationIterationCount: "3",
      animationPlayState: "paused",
      transform: "none",
    })
  })

  test("keeps the default animation infinite", async () => {
    const onComplete = vi.fn()
    const onLoopComplete = vi.fn()

    await render(
      <ImplicitContentTestComponent
        duration={0.08}
        onComplete={onComplete}
        onLoopComplete={onLoopComplete}
      />,
    )

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationIterationCount: "infinite" })
    await expect.poll(() => onLoopComplete.mock.calls.length).toBeGreaterThan(0)
    expect(onComplete).not.toHaveBeenCalled()
  })

  test("supports an initial pause and reports control changes", async () => {
    const onPauseChange = vi.fn()
    const readPaused = vi.fn()

    function Component() {
      const controlRef = useRef<Marquee.Control>(null)

      return (
        <>
          <button onClick={() => readPaused(controlRef.current?.paused)}>
            Read state
          </button>
          <button onClick={() => controlRef.current?.resume()}>Resume</button>
          <ImplicitContentTestComponent
            controlRef={controlRef}
            defaultPaused
            onPauseChange={onPauseChange}
          />
        </>
      )
    }

    const { user } = await render(<Component />)

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationPlayState: "paused" })
    await user.click(page.getByRole("button", { name: "Read state" }))
    expect(readPaused).toHaveBeenLastCalledWith(true)
    await user.click(page.getByRole("button", { name: "Resume", exact: true }))
    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationPlayState: "running" })
    expect(onPauseChange).toHaveBeenCalledExactlyOnceWith(false)
    await user.click(page.getByRole("button", { name: "Read state" }))
    expect(readPaused).toHaveBeenLastCalledWith(false)
  })

  test("aligns copies with padded content", async () => {
    await render(
      <ImplicitContentTestComponent
        paused
        contentProps={{ px: "20px", py: "10px" }}
      />,
    )

    await expect
      .element(page.getByTestId("content"))
      .toHaveStyle({ animationDuration: "4.8s" })

    const [original, copy] = page.getByText("First", { exact: true }).all()

    await expect
      .poll(
        () =>
          copy!.element().getBoundingClientRect().top -
          original!.element().getBoundingClientRect().top,
      )
      .toBeCloseTo(0)
    await expect
      .poll(
        () =>
          copy!.element().getBoundingClientRect().left -
          original!.element().getBoundingClientRect().left,
      )
      .toBeCloseTo(240)
  })

  test("does not count descendant animations as marquee loops", async () => {
    const onLoopComplete = vi.fn()
    const onComplete = vi.fn()

    await render(
      <Marquee.Root
        aria-label="Brands"
        duration={0.3}
        loopCount={1}
        pauseOnFocus={false}
        pauseOnHover={false}
        onComplete={onComplete}
        onLoopComplete={onLoopComplete}
      >
        <Marquee.Item>
          <styled.span
            animationDuration="0.04s"
            animationIterationCount={2}
            _keyframes={{ to: { opacity: 0.5 } }}
          >
            Yamada UI
          </styled.span>
        </Marquee.Item>
      </Marquee.Root>,
    )

    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveAttribute("data-complete")
    expect(onLoopComplete).not.toHaveBeenCalled()
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  test("exposes pause, resume, toggle, and restart through controlRef", async () => {
    function Component() {
      const controlRef = useRef<Marquee.Control>(null)

      return (
        <>
          <button onClick={() => controlRef.current?.pause()}>Pause</button>
          <button onClick={() => controlRef.current?.resume()}>Resume</button>
          <button onClick={() => controlRef.current?.togglePause()}>
            Toggle
          </button>
          <button onClick={() => controlRef.current?.restart()}>Restart</button>
          <ImplicitContentTestComponent controlRef={controlRef} duration={10} />
        </>
      )
    }

    const { user } = await render(<Component />)
    const content = page.getByTestId("content")

    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
    await user.click(page.getByRole("button", { name: "Pause", exact: true }))
    await expect.element(content).toHaveStyle({ animationPlayState: "paused" })
    await user.click(page.getByRole("button", { name: "Resume", exact: true }))
    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
    await user.click(page.getByRole("button", { name: "Toggle" }))
    await expect.element(content).toHaveStyle({ animationPlayState: "paused" })

    const animation = content.element().getAnimations()[0]!

    animation.currentTime = 5000
    await expect
      .poll(
        () => new DOMMatrix(getComputedStyle(content.element()).transform).m41,
      )
      .toBeCloseTo(-120)
    await user.click(page.getByRole("button", { name: "Restart" }))
    await expect.element(content).toHaveStyle({ animationPlayState: "paused" })
    await expect
      .poll(
        () => new DOMMatrix(getComputedStyle(content.element()).transform).m41,
      )
      .toBeCloseTo(0)
  })

  test("restarts a completed finite animation", async () => {
    const onComplete = vi.fn()

    function Component() {
      const controlRef = useRef<Marquee.Control>(null)

      return (
        <>
          <button onClick={() => controlRef.current?.restart()}>Restart</button>
          <ImplicitContentTestComponent
            controlRef={controlRef}
            duration={0.1}
            loopCount={1}
            onComplete={onComplete}
          />
        </>
      )
    }

    const { user } = await render(<Component />)

    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveAttribute("data-complete")
    expect(onComplete).toHaveBeenCalledTimes(1)
    await user.click(page.getByRole("button", { name: "Restart" }))
    await expect.poll(() => onComplete.mock.calls.length).toBe(2)
    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveAttribute("data-complete")
  })

  test("persists a keyboard pause after focus leaves the root", async () => {
    const { user } = await render(
      <>
        <ImplicitContentTestComponent />
        <button>After marquee</button>
      </>,
    )
    const root = page.getByRole("region", { name: "Brands" })

    await user.tab()
    await expect.element(root).toHaveFocus()
    await expect.element(root).toHaveAttribute("aria-keyshortcuts", "Space")
    await user.keyboard(" ")
    await expect.element(root).toHaveAttribute("data-paused")
    await user.tab()
    await expect
      .element(page.getByRole("button", { name: "After marquee" }))
      .toHaveFocus()
    await expect.element(root).toHaveAttribute("data-paused")
    await user.tab({ shift: true })
    await user.keyboard(" ")
    await expect.element(root).not.toHaveAttribute("data-paused")
  })

  test("preserves the animation timeline while keyboard focus pauses it", async () => {
    const { user } = await render(
      <>
        <ImplicitContentTestComponent
          duration={10}
          loopCount={2}
          pauseOnFocus
        />
        <button>After marquee</button>
      </>,
    )
    const content = page.getByTestId("content")

    await expect.element(content).toHaveStyle({ animationDuration: "10s" })

    const animation = content.element().getAnimations()[0]!

    animation.currentTime = 5000
    await user.tab()
    await expect.element(content).toHaveStyle({
      animationPlayState: "paused",
      transform: "none",
    })
    expect(content.element().getAnimations()[0]).toBe(animation)

    const pausedTime = Number(animation.currentTime)

    await user.tab()
    await expect.element(content).toHaveStyle({ animationPlayState: "running" })
    expect(content.element().getAnimations()[0]).toBe(animation)
    await expect
      .poll(() => Number(animation.currentTime))
      .toBeGreaterThan(pausedTime)
  })

  test("does not intercept Space on child buttons", async () => {
    const onClick = vi.fn()
    const { user } = await render(
      <Marquee.Root
        aria-label="Brands"
        pauseOnFocus={false}
        pauseOnHover={false}
      >
        <Marquee.Item>Yamada UI</Marquee.Item>
        <button onClick={onClick}>Custom control</button>
      </Marquee.Root>,
    )

    await user.tab()
    await user.tab()
    await expect
      .element(page.getByRole("button", { name: "Custom control" }))
      .toHaveFocus()
    await user.keyboard(" ")
    expect(onClick).toHaveBeenCalledTimes(1)
    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .not.toHaveAttribute("data-paused")
  })
})
