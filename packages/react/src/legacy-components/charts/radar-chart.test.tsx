import type { RadarProps } from "./"
import { a11y, fireEvent, render, screen, waitFor } from "../../../test"
import { RadarChart } from "./"

describe("<RadarChart />", () => {
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
    {
      name: "Page A",
      amt: 2400,
      pv: 2400,
      uv: 4000,
    },
    {
      name: "Page B",
      amt: 2210,
      pv: 1398,
      uv: 3000,
    },
    {
      name: "Page C",
      amt: 2290,
      pv: 9800,
      uv: 2000,
    },
    {
      name: "Page D",
      amt: 2000,
      pv: 3908,
      uv: 2780,
    },
    {
      name: "Page E",
      amt: 2181,
      pv: 4800,
      uv: 1890,
    },
    {
      name: "Page F",
      amt: 2500,
      pv: 3800,
      uv: 2390,
    },
    {
      name: "Page G",
      amt: 2400,
      pv: 4300,
      uv: 3490,
    },
  ]

  const series: RadarProps[] = [
    { color: "primary.500", dataKey: "uv" },
    { color: "secondary.500", dataKey: "pv" },
    { color: "warning.500", dataKey: "amt" },
  ]

  describe("render", () => {
    test("should pass a11y test", async () => {
      await a11y(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )
    })

    test("3 radar should be rendered", async () => {
      const { container } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelectorAll(".ui-radar-chart__radar"),
        ).toHaveLength(series.length * 2),
      )
    })

    test("dots should be rendered according to withDots", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withDots={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__dot"),
        ).not.toBeInTheDocument(),
      )

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withDots
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__dot"),
        ).toBeInTheDocument(),
      )
    })

    test("activeDots should be rendered according to withActiveDots", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withActiveDots
          withDots
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelectorAll(".ui-radar-chart__active-dot").length,
      ).toBeGreaterThan(0)

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withActiveDots={false}
          withDots
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelectorAll(".ui-radar-chart__active-dot"),
      ).toHaveLength(0)
    })

    test("polar-angle-axis should be rendered according to withPolarAngleAxis", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarAngleAxis
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-angle-axis"),
        ).toBeInTheDocument(),
      )

      for (let { name } of data) {
        expect(screen.getByText(name)).toBeInTheDocument()
      }

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarAngleAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-angle-axis"),
        ).not.toBeInTheDocument(),
      )

      for (let { name } of data) {
        expect(screen.queryByText(name)).not.toBeInTheDocument()
      }
    })

    test("polar-radius-axis should be rendered according to withPolarRadiusAxis", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarRadiusAxis
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-radius-axis"),
        ).toBeInTheDocument(),
      )

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarRadiusAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-radius-axis"),
        ).not.toBeInTheDocument(),
      )
    })

    test("polar-grid should be rendered according to withPolarGrid", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarGrid
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-grid"),
        ).toBeInTheDocument(),
      )

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarGrid={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__polar-grid"),
        ).not.toBeInTheDocument(),
      )
    })
  })

  describe("tooltip & legend", () => {
    test("tooltip should be rendered according to withTooltip", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarAngleAxis={false}
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(container.querySelector(".ui-chart__tooltip")).toBeInTheDocument()

      for (const { dataKey } of series) {
        const textElement = await screen.findAllByText(dataKey)
        expect(textElement).toHaveLength(1)
      }

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withPolarAngleAxis={false}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelector(".ui-chart__tooltip"),
      ).not.toBeInTheDocument()
    })

    test("cursor should be rendered along with tooltip", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(container.querySelector(".ui-chart__cursor")).toBeInTheDocument()

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelector(".ui-chart__cursor"),
      ).not.toBeInTheDocument()
    })

    test("legend should be rendered according to withLegend", async () => {
      const { container, rerender } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withLegend
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-chart__legend"),
        ).toBeInTheDocument(),
      )

      for (let { dataKey } of series) {
        expect(screen.getByText(dataKey)).toBeInTheDocument()
      }

      rerender(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          withLegend={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-chart__legend"),
        ).not.toBeInTheDocument(),
      )

      for (let { dataKey } of series) {
        expect(screen.queryByText(dataKey)).not.toBeInTheDocument()
      }
    })
  })

  describe("valueFormatter", () => {
    test("valueFormatter should function properly in tooltip", async () => {
      const { container } = render(
        <RadarChart
          data={data}
          dataKey="name"
          series={series}
          valueFormatter={(value) => `${value} views`}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radar-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-radar-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      const formattedElements = await screen.findAllByText(/\d{4} views/i)
      expect(formattedElements).toHaveLength(series.length)
    })

    test("polarAngleAxisTickFormatter should function properly in polarAngleAxis", async () => {
      render(
        <RadarChart
          data={data}
          dataKey="name"
          polarAngleAxisTickFormatter={(value) => String(value).toUpperCase()}
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/PAGE [A-G]/)
      expect(formattedElements).toHaveLength(data.length)
    })

    test("polarRadiusAxisTickFormatter should function properly in polarRadiusAxis", async () => {
      render(
        <RadarChart
          data={data}
          dataKey="name"
          polarRadiusAxisTickFormatter={(value) => `${value} views`}
          series={series}
          withPolarRadiusAxis
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/\d{4} views/i)
      expect(formattedElements.length).toBeGreaterThan(0)
    })
  })
})
