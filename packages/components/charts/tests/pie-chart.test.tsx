import { a11y, render, waitFor, screen, fireEvent } from "@yamada-ui/test"
import type { CellProps } from "../src"
import { PieChart } from "../src"

describe("<PieChart />", () => {
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

  const data: CellProps[] = [
    {
      name: "Page A",
      value: 4000,
      color: "red.500",
    },
    {
      name: "Page B",
      value: 3000,
      color: "blue.500",
    },
    {
      name: "Page C",
      value: 2000,
      color: "green.500",
    },
    {
      name: "Page D",
      value: 2780,
      color: "gray.500",
    },
    {
      name: "Page E",
      value: 1890,
      color: "orange.500",
    },
    {
      name: "Page F",
      value: 2390,
      color: "cyan.500",
    },
    {
      name: "Page G",
      value: 3490,
      color: "yellow.500",
    },
  ]

  test("should pass a11y test", async () => {
    await a11y(
      <PieChart containerProps={{ width: 400, height: "80%" }} data={data} />,
    )
  })

  test("cells should be rendered", async () => {
    const { container } = render(
      <PieChart containerProps={{ width: 400, height: "80%" }} data={data} />,
    )

    await waitFor(() =>
      expect(container.querySelectorAll(".ui-pie-chart__cell")).toHaveLength(
        data.length,
      ),
    )
  })

  test("labels should be rendered according to withLabels", async () => {
    const { rerender } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels={true}
        withTooltip={false}
      />,
    )

    for (const { value } of data) {
      await waitFor(() => expect(screen.getByText(`${value}`)).toBeVisible())
    }

    rerender(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels={false}
        withTooltip={false}
      />,
    )

    for (const { value } of data) {
      await waitFor(() =>
        expect(screen.queryByText(`${value}`)).not.toBeInTheDocument(),
      )
    }
  })

  test("labelLines should be rendered according to withLabelLines", async () => {
    const { rerender, container } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels={true}
        withLabelLines={true}
      />,
    )

    await waitFor(() =>
      expect(container.querySelectorAll(".ui-chart__label-line")).toHaveLength(
        data.length,
      ),
    )

    rerender(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels={true}
        withLabelLines={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-chart__label-line"),
      ).not.toBeInTheDocument(),
    )
  })

  test("if withLabels is false, labelLines should not be rendered", async () => {
    const { container } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels={false}
        withLabelLines={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-pie-chart__label-line"),
      ).not.toBeInTheDocument(),
    )
  })

  test("tooltip should be rendered according to withTooltip", async () => {
    const { rerender, container } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withTooltip={true}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-pie-chart__chart"),
      ).toBeInTheDocument(),
    )

    let chartElement = container.querySelector(".ui-pie-chart__chart")
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
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withTooltip={false}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-pie-chart__chart"),
      ).toBeInTheDocument(),
    )

    chartElement = container.querySelector(".ui-pie-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    expect(
      container.querySelector(".ui-chart__tooltip"),
    ).not.toBeInTheDocument()
  })

  test("if tooltip data source is segment, the data displayed in the tooltip is segmented", async () => {
    const { container, user } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withTooltip={true}
        tooltipDataSource="segment"
        h="md"
        w="full"
        outerRadius="100%"
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-pie-chart__chart"),
      ).toBeInTheDocument(),
    )

    let cellElement = container.querySelector(".ui-pie-chart__cell")
    assert(cellElement !== null)

    await user.hover(cellElement)

    const textElement = await screen.findByText(/Page\s+/)
    expect(textElement).toBeInTheDocument()
  })

  test("legend should be rendered according to withLegend", async () => {
    const { rerender, container } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLegend={true}
        withTooltip={false}
      />,
    )

    await waitFor(() =>
      expect(container.querySelector(".ui-chart__legend")).toBeInTheDocument(),
    )

    for (const { name } of data) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    rerender(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLegend={false}
        withTooltip={false}
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

  test("valueFormatter should function properly in tooltip", async () => {
    const { container } = render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        valueFormatter={(value) => value.toLocaleString()}
      />,
    )

    await waitFor(() =>
      expect(
        container.querySelector(".ui-pie-chart__chart"),
      ).toBeInTheDocument(),
    )

    let chartElement = container.querySelector(".ui-pie-chart__chart")
    assert(chartElement !== null)

    fireEvent.mouseOver(chartElement, {
      clientX: 200,
      clientY: 200,
    })

    const formattedElements =
      await screen.findAllByText(/\b\d{1,3}(,\d{3})+\b/i)
    expect(formattedElements).toHaveLength(data.length)
  })

  test("valueFormatter should function properly in label", async () => {
    render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels
        withTooltip={false}
        valueFormatter={(value) => value.toLocaleString()}
      />,
    )

    const formattedElements =
      await screen.findAllByText(/\b\d{1,3}(,\d{3})+\b/i)
    expect(formattedElements).toHaveLength(data.length)
  })

  test("isPercent should work correctly", async () => {
    render(
      <PieChart
        containerProps={{ width: 400, height: "80%" }}
        data={data}
        withLabels
        withTooltip={false}
        isPercent
      />,
    )

    const formattedElements = await screen.findAllByText(/\d+%/i)
    expect(formattedElements).toHaveLength(data.length)
  })
})
