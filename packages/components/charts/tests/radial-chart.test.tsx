import { a11y, render, waitFor, screen, fireEvent } from "@yamada-ui/test"
import { RadialChart } from "../src"

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
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  describe("render", () => {
    test("should pass a11y test", async () => {
      await a11y(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
        />,
      )
    })

    test("radial bars should be rendered", async () => {
      const { container } = render(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelectorAll(".recharts-radial-bar-sector"),
        ).toHaveLength(data.length),
      )
    })

    test("polar-grid should be rendered according to withPolarGrid", async () => {
      const { rerender, container } = render(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withPolarGrid={true}
        />,
      )

      await waitFor(() =>
        expect(
          container.querySelector(".ui-radial-chart__polar-grid"),
        ).toBeInTheDocument(),
      )

      rerender(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withPolarGrid={false}
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
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          labelListProps={[{ dataKey: "name" }]}
          withTooltip={false}
        />,
      )

      for (const { name } of data) {
        await waitFor(() => expect(screen.getByText(name)).toBeVisible())
      }

      rerender(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withTooltip={false}
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
      const { rerender, container } = render(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withTooltip={true}
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
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withTooltip={false}
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
      const { rerender, container } = render(
        <RadialChart
          containerProps={{ width: 400, height: "80%" }}
          data={data}
          withLegend={true}
          withTooltip={false}
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
  })
})
