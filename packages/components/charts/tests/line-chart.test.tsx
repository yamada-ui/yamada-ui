import { a11y, render, waitFor, screen, fireEvent } from "@yamada-ui/test"
import type { LineProps } from "../src"
import { LineChart } from "../src"

describe("<LineChart />", () => {
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
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2400,
    },
  ]

  const series: LineProps[] = [
    { dataKey: "uv", color: "primary.500" },
    { dataKey: "pv", color: "secondary.500" },
    { dataKey: "amt", color: "warning.500" },
  ]

  test("should pass a11y test", async () => {
    await a11y(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
      />,
    )
  })

  test("3 line should be rendered", async () => {
    const { container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
      />,
    )

    await waitFor(() =>
      expect(container.querySelectorAll(".ui-line-chart__line")).toHaveLength(
        3,
      ),
    )
  })

  test("dots should be rendered according to withDots", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__dot"),
      ).not.toBeInTheDocument(),
    )

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__dot"),
      ).toBeInTheDocument(),
    )
  })

  test("activeDots should be rendered according to withActiveDots", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={true}
        withActiveDots={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    let chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(
      container.querySelectorAll(".ui-line-chart__active-dot").length,
    ).toBeGreaterThan(0)

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={true}
        withActiveDots={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(
      container.querySelectorAll(".ui-line-chart__active-dot"),
    ).toHaveLength(0)
  })

  test("x axis should be rendered according to withXAxis", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withXAxis={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__x-axis"),
      ).toBeInTheDocument(),
    )

    for (let { name } of data) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withXAxis={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__x-axis"),
      ).not.toBeInTheDocument(),
    )

    for (let { name } of data) {
      expect(screen.queryByText(name)).not.toBeInTheDocument()
    }
  })

  test("y axis should be rendered according to withYAxis", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withYAxis={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__y-axis"),
      ).toBeInTheDocument(),
    )

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withYAxis={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__y-axis"),
      ).not.toBeInTheDocument(),
    )
  })

  test("tooltip should be rendered according to withTooltip", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={true}
        withXAxis={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    let chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(container.querySelector(".ui-chart__tooltip")).toBeInTheDocument()

    const textElement = await screen.findAllByText(/Page\s+/i)
    expect(textElement).toHaveLength(1)

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={false}
        withXAxis={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(
      container.querySelector(".ui-chart__tooltip"),
    ).not.toBeInTheDocument()
  })

  test("cursor shoud be renderd along with tooltip", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    let chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(container.querySelector(".ui-chart__cursor")).toBeInTheDocument()

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__chart"),
      ).toBeInTheDocument(),
    )

    chartElement = container.querySelector(".ui-line-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(container.querySelector(".ui-chart__cursor")).not.toBeInTheDocument()
  })

  test("legend should be rendered according to withLegend", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withLegend={true}
      />,
    )

    await waitFor(() =>
      expect(container.querySelector(".ui-chart__legend")).toBeInTheDocument(),
    )

    for (let { dataKey } of series) {
      assert(typeof dataKey === "string")
      expect(screen.getByText(dataKey)).toBeInTheDocument()
    }

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withLegend={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-chart__legend"),
      ).not.toBeInTheDocument(),
    )

    for (let { dataKey } of series) {
      assert(typeof dataKey === "string")
      expect(screen.queryByText(dataKey)).not.toBeInTheDocument()
    }
  })

  test("tickLine should be rendered according to tickLine prop", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        tickLine="xy"
        gridAxis="xy"
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".recharts-cartesian-axis-tick-line"),
      ).toBeInTheDocument(),
    )

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        tickLine="none"
        gridAxis="xy"
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
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        tickLine="xy"
        gridAxis="none"
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".recharts-cartesian-axis-tick-line"),
      ).not.toBeInTheDocument(),
    )
  })

  test("grid should be rendered according to gridAxis", async () => {
    const { rerender, container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        gridAxis="xy"
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__grid"),
      ).toBeInTheDocument(),
    )

    rerender(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        gridAxis="none"
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__grid"),
      ).not.toBeInTheDocument(),
    )
  })

  test("unit should be rendered according to unit prop", async () => {
    render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        unit="views"
      />,
    )

    const unitElements = await screen.findAllByText(/\d+views/i)

    expect(unitElements.length).toBeGreaterThan(0)
  })

  test("should be rendered reference line", async () => {
    const { container } = render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        referenceLineProps={[
          {
            y: 1000,
            label: "x line",
            color: "red.500",
          },
        ]}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-line-chart__reference-line"),
      ).toBeInTheDocument(),
    )

    await expect(screen.findByText(/x line/i)).resolves.toBeInTheDocument()
  })

  test("should be rendered valueFormatter", async () => {
    render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        valueFormatter={(value) => value.toLocaleString()}
      />,
    )

    const formattedElements =
      await screen.findAllByText(/\b\d{1,3}(,\d{3})+\b/i)
    expect(formattedElements.length).toBeGreaterThan(0)
  })

  test("should be rendered axis label", async () => {
    render(
      <LineChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        xAxisLabel="x-axis-label"
        yAxisLabel="y-axis-label"
      />,
    )

    await waitFor(() => expect(screen.getByText("x-axis-label")).toBeVisible())
    expect(screen.getByText("y-axis-label")).toBeVisible()
  })
})
