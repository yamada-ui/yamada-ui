import { hasSuppressHydrationWarning, render } from "#test"
import { Loading } from "./"

describe("<Loading /> suppressHydrationWarning propagation", () => {
  describe("Audio", () => {
    test("propagates `suppressHydrationWarning` to every rect shape child", () => {
      const { container } = render(<Loading.Audio suppressHydrationWarning />)

      const rects = container.querySelectorAll("rect")
      expect(rects.length).toBeTruthy()
      rects.forEach((rect) => {
        expect(hasSuppressHydrationWarning(rect)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Audio />)

      const rects = container.querySelectorAll("rect")
      expect(rects.length).toBeTruthy()
      rects.forEach((rect) => {
        expect(hasSuppressHydrationWarning(rect)).toBeFalsy()
      })
    })
  })

  describe("Circles", () => {
    test("propagates `suppressHydrationWarning` to every circle shape child", () => {
      const { container } = render(<Loading.Circles suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Circles />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Dots", () => {
    test("propagates `suppressHydrationWarning` to every circle shape child", () => {
      const { container } = render(<Loading.Dots suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Dots />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Grid", () => {
    test("propagates `suppressHydrationWarning` to every circle shape child", () => {
      const { container } = render(<Loading.Grid suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Grid />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Oval", () => {
    test("propagates `suppressHydrationWarning` to every circle and path shape child", () => {
      const { container } = render(<Loading.Oval suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      const paths = container.querySelectorAll("path")
      expect(circles.length).toBeTruthy()
      expect(paths.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
      paths.forEach((path) => {
        expect(hasSuppressHydrationWarning(path)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Oval />)

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
    test("propagates `suppressHydrationWarning` to every circle shape child", () => {
      const { container } = render(<Loading.Puff suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Puff />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })

  describe("Rings", () => {
    test("propagates `suppressHydrationWarning` to every circle shape child", () => {
      const { container } = render(<Loading.Rings suppressHydrationWarning />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeTruthy()
      })
    })

    test("does not set `suppressHydrationWarning` when the root omits it", () => {
      const { container } = render(<Loading.Rings />)

      const circles = container.querySelectorAll("circle")
      expect(circles.length).toBeTruthy()
      circles.forEach((circle) => {
        expect(hasSuppressHydrationWarning(circle)).toBeFalsy()
      })
    })
  })
})
