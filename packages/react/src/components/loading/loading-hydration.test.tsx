import { hasSuppressHydrationWarning, render } from "#test"
import { Loading } from "./"

describe("<Loading /> suppressHydrationWarning propagation", () => {
  describe("Audio", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Audio suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner rect shapes", () => {
      const { container } = render(<Loading.Audio suppressHydrationWarning />)

      const rects = container.querySelectorAll("rect")
      expect(rects.length).toBeTruthy()
      rects.forEach((rect) => {
        expect(hasSuppressHydrationWarning(rect)).toBeFalsy()
      })
    })
  })

  describe("Circles", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Circles suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Circles suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Dots", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Dots suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Dots suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Grid", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Grid suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Grid suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Oval", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Oval suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle and path shapes", () => {
      const { container } = render(<Loading.Oval suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      const paths = container.querySelectorAll("path")
      expect(circles.length).toBeTruthy()
      expect(paths.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
      paths.forEach((path) => {
        expect(hasSuppressHydrationWarning(path)).toBeFalsy()
      })
    })
  })

  describe("Puff", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Puff suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Puff suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Rings", () => {
    test("forwards `suppressHydrationWarning` to the root svg element", () => {
      const { container } = render(<Loading.Rings suppressHydrationWarning />)

      const svg = container.querySelector("svg")
      expect(svg).toBeTruthy()
      expect(hasSuppressHydrationWarning(svg)).toBeTruthy()
    })

    test("does not set `suppressHydrationWarning` on inner circle shapes", () => {
      const { container } = render(<Loading.Rings suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })
})
