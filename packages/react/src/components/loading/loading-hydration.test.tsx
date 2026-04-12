import { render } from "#test"
import { Loading } from "./"

function getReactProps(el: Element): undefined | { [key: string]: unknown } {
  const key = Object.keys(el).find((k) => k.startsWith("__reactProps$"))
  if (!key) return undefined
  return Reflect.get(el, key) as { [key: string]: unknown }
}

describe("<Loading /> suppressHydrationWarning propagation", () => {
  describe("Audio", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Audio suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner rect shapes", () => {
      const { container } = render(<Loading.Audio suppressHydrationWarning />)

      const rects = container.querySelectorAll("rect")
      expect(rects.length).toBeTruthy()
      rects.forEach((rect) => {
        expect(getReactProps(rect)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Circles", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Circles suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Circles suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Dots", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Dots suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Dots suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Grid", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Grid suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Grid suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Oval", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Oval suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle and path shapes", () => {
      const { container } = render(<Loading.Oval suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      const paths = container.querySelectorAll("path")
      expect(circles.length).toBeTruthy()
      expect(paths.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
      paths.forEach((path) => {
        expect(getReactProps(path)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Puff", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Puff suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Puff suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })

  describe("Rings", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Rings suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(getReactProps(svg!)?.suppressHydrationWarning).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Rings suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(getReactProps(circle)?.suppressHydrationWarning).toBeFalsy()
      })
    })
  })
})
