import type { CellProps } from "./"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { PieChart } from "./"

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
      color: "red.500",
      value: 4000,
    },
    {
      name: "Page B",
      color: "blue.500",
      value: 3000,
    },
    {
      name: "Page C",
      color: "green.500",
      value: 2000,
    },
    {
      name: "Page D",
      color: "gray.500",
      value: 2780,
    },
    {
      name: "Page E",
      color: "orange.500",
      value: 1890,
    },
    {
      name: "Page F",
      color: "cyan.500",
      value: 2390,
    },
    {
      name: "Page G",
      color: "yellow.500",
      value: 3490,
    },
  ]

  describe("render", () => {
    test("should pass a11y test", async () => {
      await a11y(
        <PieChart data={data} containerProps={{ height: "80%", width: 400 }} />,
      )
    })

    test("cells should be rendered", async () => {
      const { container } = render(
        <PieChart data={data} containerProps={{ height: "80%", width: 400 }} />,
      )

      await waitFor(() =>
        expect(container.querySelectorAll(".ui-pie-chart__cell")).toHaveLength(
          data.length,
        ),
      )
    })
  })

  describe("label", () => {
    test("labels should be rendered according to withLabels", async () => {
      const { rerender } = render(
        <PieChart
          data={data}
          withLabels
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      for (const { value } of data) {
        await waitFor(() => expect(screen.getByText(value)).toBeVisible())
      }

      rerender(
        <PieChart
          data={data}
          withLabels={false}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      for (const { value } of data) {
        await waitFor(() =>
          expect(screen.queryByText(value)).not.toBeInTheDocument(),
        )
      }
    })

    test("labelLines should be rendered according to withLabelLines", async () => {
      const { container, rerender } = render(
        <PieChart
          data={data}
          withLabelLines
          withLabels
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelectorAll(".ui-chart__label-line"),
        ).toHaveLength(data.length),
      )

      rerender(
        <PieChart
          data={data}
          withLabelLines={false}
          withLabels
          containerProps={{ height: "80%", width: 400 }}
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
          data={data}
          withLabelLines
          withLabels={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-pie-chart__label-line"),
        ).not.toBeInTheDocument(),
      )
    })

    test("percent should work correctly", async () => {
      render(
        <PieChart
          data={data}
          percent
          withLabels
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/\d+%/i)
      expect(formattedElements).toHaveLength(data.length)
    })
  })

  describe("tooltip & legend", () => {
    test("should be rendered according to withTooltip", async () => {
      const { container, rerender } = render(
        <PieChart
          data={data}
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
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
          data={data}
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
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
          data={data}
          h="md"
          outerRadius="100%"
          tooltipDataSource="segment"
          w="full"
          withTooltip
          containerProps={{ height: "80%", width: 400 }}
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
      const { container, rerender } = render(
        <PieChart
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
        <PieChart
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
        <PieChart
          data={data}
          valueFormatter={(value) => `${value} views`}
          containerProps={{ height: "80%", width: 400 }}
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

      const formattedElements = await screen.findAllByText(/\d{4} views/i)
      expect(formattedElements).toHaveLength(data.length)
    })

    test("labelFormatter should function properly in label", async () => {
      render(
        <PieChart
          data={data}
          labelFormatter={(value) => `${value} views`}
          withLabels
          withTooltip={false}
          containerProps={{ height: "80%", width: 400 }}
        />,
      )

      const formattedElements = await screen.findAllByText(/\d{4} views/i)
      expect(formattedElements).toHaveLength(data.length)
    })
  })
})
