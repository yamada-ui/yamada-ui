import { a11y, render, waitFor, screen, fireEvent } from "@yamada-ui/test"
import type { RadarProps } from "../src"
import { RadarChart } from "../src"

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

  const series: RadarProps[] = [
    { dataKey: "uv", color: "primary.500" },
    { dataKey: "pv", color: "secondary.500" },
    { dataKey: "amt", color: "warning.500" },
  ]

  test("should pass a11y test", async () => {
    await a11y(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
      />,
    )
  })

  test("3 radar should be rendered", async () => {
    const { container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
      />,
    )

    await waitFor(() =>
      expect(container.querySelectorAll(".ui-radar-chart__radar")).toHaveLength(
        series.length * 2,
      ),
    )
  })

  test("dots should be rendered according to withDots", async () => {
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__dot"),
      ).not.toBeInTheDocument(),
    )

    rerender(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withDots={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__dot"),
      ).toBeInTheDocument(),
    )
  })

  test("activeDots should be rendered according to withActiveDots", async () => {
    const { rerender, container } = render(
      <RadarChart
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
      container.querySelectorAll(".ui-radar-chart__dot--active").length,
    ).toBeGreaterThan(0)

    rerender(
      <RadarChart
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
      container.querySelectorAll(".ui-radar-chart__dot--active"),
    ).toHaveLength(0)
  })

  test("polar-angle-axis should be rendered according to withPolarAngleAxis", async () => {
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarAngleAxis={true}
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
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarAngleAxis={false}
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
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarRadiusAxis={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__polar-radius-axis"),
      ).toBeInTheDocument(),
    )

    rerender(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarRadiusAxis={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__polar-radius-axis"),
      ).not.toBeInTheDocument(),
    )
  })

  test("tooltip should be rendered according to withTooltip", async () => {
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={true}
        withPolarAngleAxis={false}
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
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={false}
        withPolarAngleAxis={false}
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

  test("cursor shoud be renderd along with tooltip", async () => {
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={true}
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
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withTooltip={false}
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

    expect(container.querySelector(".ui-chart__cursor")).not.toBeInTheDocument()
  })

  test("legend should be rendered according to withLegend", async () => {
    const { rerender, container } = render(
      <RadarChart
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
      expect(screen.getByText(dataKey)).toBeInTheDocument()
    }

    rerender(
      <RadarChart
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
      expect(screen.queryByText(dataKey)).not.toBeInTheDocument()
    }
  })

  test("polar-grid should be rendered according to withPolarGrid", async () => {
    const { rerender, container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarGrid={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__polar-grid"),
      ).toBeInTheDocument(),
    )

    rerender(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        withPolarGrid={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-radar-chart__polar-grid"),
      ).not.toBeInTheDocument(),
    )
  })

  test("should be rendered valueFormatter", async () => {
    const { container } = render(
      <RadarChart
        containerProps={{ width: 400, height: "80%" }}
        dataKey="name"
        data={data}
        series={series}
        valueFormatter={(value) => value.toLocaleString()}
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

    const formattedElements =
      await screen.findAllByText(/\b\d{1,3}(,\d{3})+\b/i)
    expect(formattedElements.length).toBeGreaterThan(0)
  })
})
