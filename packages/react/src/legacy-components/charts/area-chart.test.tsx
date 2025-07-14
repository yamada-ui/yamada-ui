import type { AreaProps } from "./"
import { a11y, fireEvent, render, screen, waitFor } from "@/test"
import { AreaChart } from "./"

describe("<AreaChart />", () => {
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

  const rangeData = [
    {
      name: "Page A",
      amt: [1400, 2400],
      pv: [1400, 2400],
      uv: [2000, 4000],
    },
    {
      name: "Page B",
      amt: [1210, 2210],
      pv: [398, 1398],
      uv: [2000, 3000],
    },
    {
      name: "Page C",
      amt: [1290, 2290],
      pv: [8800, 9800],
      uv: [1000, 2000],
    },
    {
      name: "Page D",
      amt: [1000, 2000],
      pv: [2908, 3908],
      uv: [1780, 2780],
    },
    {
      name: "Page E",
      amt: [1181, 2181],
      pv: [3800, 4800],
      uv: [890, 1890],
    },
    {
      name: "Page F",
      amt: [1500, 2500],
      pv: [2800, 3800],
      uv: [1390, 2390],
    },
    {
      name: "Page G",
      amt: [1400, 2400],
      pv: [3300, 4300],
      uv: [2490, 3490],
    },
  ]

  const series: AreaProps[] = [
    { color: "primary.500", dataKey: "uv" },
    { color: "secondary.500", dataKey: "pv" },
    { color: "warning.500", dataKey: "amt" },
  ]

  test("should pass a11y test", async () => {
    await a11y(
      <AreaChart
        data={data}
        dataKey="name"
        series={series}
        containerProps={{ height: "80%", width: 400 }}
      />,
    )
  })

  test("3 area should be rendered", async () => {
    const { container } = render(
      <AreaChart
        data={data}
        dataKey="name"
        series={series}
        containerProps={{ height: "80%", width: 400 }}
      />,
    )

    await waitFor(() =>
      expect(container.querySelectorAll(".ui-area-chart__area")).toHaveLength(
        3,
      ),
    )
  })

  describe("dot", () => {
    test("dots should be rendered according to withDots", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withDots={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__dot"),
        ).not.toBeInTheDocument(),
      )

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withDots
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__dot"),
        ).toBeInTheDocument(),
      )
    })

    test("activeDots should be rendered according to withActiveDots", async () => {
      const { container, rerender } = render(
        <AreaChart
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
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelectorAll(".ui-area-chart__active-dot").length,
      ).toBeGreaterThan(0)

      rerender(
        <AreaChart
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
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelectorAll(".ui-area-chart__active-dot"),
      ).toHaveLength(0)
    })
  })

  describe("axis", () => {
    test("x axis should be rendered according to withXAxis", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withXAxis
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__x-axis"),
        ).toBeInTheDocument(),
      )

      for (let { name } of data) {
        expect(screen.getByText(name)).toBeInTheDocument()
      }

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withXAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__x-axis"),
        ).not.toBeInTheDocument(),
      )

      for (let { name } of data) {
        expect(screen.queryByText(name)).not.toBeInTheDocument()
      }
    })

    test("y axis should be rendered according to withYAxis", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withYAxis
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__y-axis"),
        ).toBeInTheDocument(),
      )

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withYAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__y-axis"),
        ).not.toBeInTheDocument(),
      )
    })

    test("should be rendered axis label", async () => {
      render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          xAxisLabel="x-axis-label"
          yAxisLabel="y-axis-label"
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(screen.getByText("x-axis-label")).toBeVisible(),
      )
      expect(screen.getByText("y-axis-label")).toBeVisible()
    })
  })

  describe("tooltip", () => {
    test("tooltip should be rendered according to withTooltip", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip
          withXAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(container.querySelector(".ui-chart__tooltip")).toBeInTheDocument()

      const textElement = await screen.findAllByText(/Page\s+/i)
      expect(textElement).toHaveLength(1)

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip={false}
          withXAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-area-chart__chart")
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
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(container.querySelector(".ui-chart__cursor")).toBeInTheDocument()

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      expect(
        container.querySelector(".ui-chart__cursor"),
      ).not.toBeInTheDocument()
    })

    test("values are displayed correctly in tooltip even for range data", async () => {
      const { container } = render(
        <AreaChart
          data={rangeData}
          dataKey="name"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      await waitFor(() =>
        expect(screen.getAllByText(/\d+ - \d+/i)).toHaveLength(series.length),
      )
    })
  })

  test("legend should be rendered according to withLegend", async () => {
    const { container, rerender } = render(
      <AreaChart
        data={data}
        dataKey="name"
        series={series}
        withLegend
        containerProps={{ height: "80%", width: 400 }}
      />,
    )

    await waitFor(() =>
      expect(container.querySelector(".ui-chart__legend")).toBeInTheDocument(),
    )

    for (let { dataKey } of series) {
      expect(screen.getByText(dataKey)).toBeInTheDocument()
    }

    rerender(
      <AreaChart
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

  describe("tickLine & gridAxis", () => {
    test("tickLine should be rendered according to tickLine prop", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          gridAxis="xy"
          series={series}
          tickLine="xy"
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".recharts-cartesian-axis-tick-line"),
        ).toBeInTheDocument(),
      )

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          gridAxis="xy"
          series={series}
          tickLine="none"
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".recharts-cartesian-axis-tick-line"),
        ).not.toBeInTheDocument(),
      )
    })

    test("if gridAxis is none, tickLine should not be rendered", async () => {
      const { container } = render(
        <AreaChart
          data={data}
          dataKey="name"
          gridAxis="none"
          series={series}
          tickLine="xy"
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".recharts-cartesian-axis-tick-line"),
        ).not.toBeInTheDocument(),
      )
    })

    test("grid should be rendered according to gridAxis", async () => {
      const { container, rerender } = render(
        <AreaChart
          data={data}
          dataKey="name"
          gridAxis="xy"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__grid"),
        ).toBeInTheDocument(),
      )

      rerender(
        <AreaChart
          data={data}
          dataKey="name"
          gridAxis="none"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__grid"),
        ).not.toBeInTheDocument(),
      )
    })
  })

  test("unit should be rendered according to unit prop", async () => {
    render(
      <AreaChart
        data={data}
        dataKey="name"
        series={series}
        unit="views"
        containerProps={{ height: "80%", width: 400 }}
      />,
    )

    const unitElements = await screen.findAllByText(/\d+views/i)

    expect(unitElements.length).toBeGreaterThan(0)
  })

  describe("linearGradient", () => {
    test("linearGradient should be rendered according to withGradient false", async () => {
      const { container } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withGradient={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(container.querySelector("linearGradient")).toBeInTheDocument(),
      )

      const gradientElement = container.querySelector("linearGradient")
      expect(
        (gradientElement?.children[0] as SVGElement).getAttribute("offset"),
      ).toBeNull()
    })

    test("linearGradient default splitOffset should be rendered according to type=split", async () => {
      const { container } = render(
        <AreaChart
          type="split"
          data={data}
          dataKey="name"
          series={series}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(container.querySelector("linearGradient")).toBeInTheDocument(),
      )

      const gradientElement = container.querySelector("linearGradient")
      expect(
        (gradientElement?.children[0] as SVGElement).getAttribute("offset"),
      ).toBe("0.5")
    })

    test("linearGradient calculated splitOffset should be rendered according to type=split", async () => {
      const dataForSplitCalculated = [
        {
          name: "Page A",
          uv: -6000,
        },
        {
          name: "Page B",
          uv: 3000,
        },
        {
          name: "Page C",
          uv: 1000,
        },
      ]

      const seriesForSplitCalculated: AreaProps[] = [
        { color: "primary.500", dataKey: "uv" },
      ]

      const { container } = render(
        <AreaChart
          type="split"
          data={dataForSplitCalculated}
          dataKey="name"
          series={seriesForSplitCalculated}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(container.querySelector("linearGradient")).toBeInTheDocument(),
      )

      const gradientElement = container.querySelector("linearGradient")
      expect(
        (gradientElement?.children[0] as SVGElement).getAttribute("offset"),
      ).toBe("0.3333333333333333")
    })

    test("linearGradient should be rendered according to type=split and splitOffset", async () => {
      const { container } = render(
        <AreaChart
          type="split"
          data={data}
          dataKey="name"
          series={series}
          splitOffset={0.3}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(container.querySelector("linearGradient")).toBeInTheDocument(),
      )

      const gradientElement = container.querySelector("linearGradient")
      expect(
        (gradientElement?.children[0] as SVGElement).getAttribute("offset"),
      ).toBe("0.3")
    })
  })

  test("should be rendered reference line", async () => {
    const { container } = render(
      <AreaChart
        data={data}
        dataKey="name"
        series={series}
        containerProps={{ height: "80%", width: 400 }}
        referenceLineProps={[
          {
            color: "red.500",
            label: "x line",
            y: 1000,
          },
        ]}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-area-chart__reference-line"),
      ).toBeInTheDocument(),
    )

    await expect(screen.findByText(/x line/i)).resolves.toBeInTheDocument()
  })

  describe("valueFormatter", () => {
    test("should be rendered xAxisTickFormatter in x axis", async () => {
      render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip={false}
          xAxisTickFormatter={(value) => value.replace("Page", "Page:")}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/page:\s[a-g]/i)
      expect(formattedElements.length).toBeGreaterThan(1)
    })

    test("should be rendered yAxisTickFormatter in y axis", async () => {
      render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          withTooltip={false}
          yAxisTickFormatter={(value) => `${value} views`}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/\b\d{4}\b views/i)
      expect(formattedElements.length).toBeGreaterThan(1)
    })

    test("should be rendered valueFormatter in tooltip", async () => {
      const { container } = render(
        <AreaChart
          data={data}
          dataKey="name"
          series={series}
          valueFormatter={(value) => `${value} views`}
          withTooltip
          withXAxis={false}
          withYAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      await waitFor(() =>
        expect(screen.getAllByText(/\b\d{4}\b views/i)).toHaveLength(
          series.length,
        ),
      )
    })

    test("should be rendered labelFormatter in tooltip", async () => {
      const { container } = render(
        <AreaChart
          data={data}
          dataKey="name"
          labelFormatter={(value) => value.replace("Page", "Page:")}
          series={series}
          withTooltip
          withXAxis={false}
          withYAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      await waitFor(() =>
        expect(screen.getAllByText(/page:\s[a-g]/i)).toHaveLength(1),
      )
    })

    test("should be rendered valueFormatter in tooltip with rangeData", async () => {
      const { container } = render(
        <AreaChart
          data={rangeData}
          dataKey="name"
          series={series}
          valueFormatter={(value) => `${value} views`}
          withTooltip
          withYAxis={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-area-chart__chart"),
        ).toBeInTheDocument(),
      )

      let chartElement = container.querySelector(".ui-area-chart__chart")
      assert(chartElement !== null)

      fireEvent.mouseOver(chartElement, {
        clientX: 200,
        clientY: 200,
      })

      await waitFor(() =>
        expect(
          screen.getAllByText(/\b\d{4}\b views - \b\d{4}\b views/i),
        ).toHaveLength(series.length),
      )
    })
  })
})
