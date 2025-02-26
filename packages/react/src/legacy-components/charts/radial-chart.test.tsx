import { a11y, fireEvent, render, screen, waitFor } from "../../../test"
import { RadialChart } from "./"

describe("<RadialChart />", () => {
  const defaultResizeObserver = global.ResizeObserver

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        setTimeout(() => {
          cb(
            [
              {
                contentRect: {
                  height: 320,
                  width: 400,
                },
              },
            ] as ResizeObserverEntry[],
            this,
          )
        }, 150)
      }
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
  })

  afterAll(() => {
    global.ResizeObserver = defaultResizeObserver
  })

  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  describe("render", () => {
    test("should pass a11y test", async () => {
      await a11y(
        <RadialChart
          data={data}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )
    })

    test("radial bars should be rendered", async () => {
      const { container } = render(
        <RadialChart
          data={data}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelectorAll(".recharts-radial-bar-sector"),
        ).toHaveLength(data.length),
      )
    })

    test("polar-grid should be rendered according to withPolarGrid", async () => {
      const { container, rerender } = render(
        <RadialChart
          data={data}
          withPolarGrid
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__polar-grid"),
        ).toBeInTheDocument(),
      )

      rerender(
        <RadialChart
          data={data}
          withPolarGrid={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__polar-grid"),
        ).not.toBeInTheDocument(),
      )
    })
  })

  describe("label", () => {
    test("labelLists should be rendered", async () => {
      const { rerender } = render(
        <RadialChart
          data={data}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
          labelListProps={[{ dataKey: "name" }]}
        />,
      )

      for (const { name } of data) {
        await waitFor(() => expect(screen.getByText(name)).toBeVisible())
      }

      rerender(
        <RadialChart
          data={data}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      for (const { name } of data) {
        await waitFor(() =>
          expect(screen.queryByText(name)).not.toBeInTheDocument(),
        )
      }
    })
  })

  describe("tooltip & legend", () => {
    test("should be rendered according to withTooltip", async () => {
      const { container, rerender } = render(
        <RadialChart
          data={data}
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radial-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(container.querySelector(".ui-chart__tooltip")).toBeInTheDocument()

      for (const { name } of data) {
        const textElement = await screen.findAllByText(name)
        expect(textElement).toHaveLength(1)
      }

      rerender(
        <RadialChart
          data={data}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-radial-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelector(".ui-chart__tooltip"),
      ).not.toBeInTheDocument()
    })

    test("legend should be rendered according to withLegend", async () => {
      const { container, rerender } = render(
        <RadialChart
          data={data}
          withLegend
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-chart__legend"),
        ).toBeInTheDocument(),
      )

      for (const { name } of data) {
        expect(screen.getByText(name)).toBeInTheDocument()
      }

      rerender(
        <RadialChart
          data={data}
          withLegend={false}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-chart__legend"),
        ).not.toBeInTheDocument(),
      )

      for (const { name } of data) {
        expect(screen.queryByText(name)).not.toBeInTheDocument()
      }
    })
  })

  describe("valueFormatter", () => {
    test("valueFormatter should function properly in tooltip", async () => {
      const { container } = render(
        <RadialChart
          data={data}
          valueFormatter={(value) => `${value} views`}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radial-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      const formattedElements = await screen.findAllByText(/\d views/i)
      expect(formattedElements).toHaveLength(data.length)
    })
  })
})
