import { a11y, render, screen } from "#test"
import { DonutChart } from "."

interface Data {
  browser: string
  downloads: number
  visits: number
}

const rootData: Data[] = [
  { browser: "chrome", downloads: 1200, visits: 2200 },
  { browser: "edge", downloads: 900, visits: 1800 },
]

const childData: Data[] = [
  { browser: "safari", downloads: 1600, visits: 2400 },
  { browser: "opera", downloads: 700, visits: 1300 },
]

describe("<DonutChart />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <DonutChart.Root
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
      />,
    )
  })

  test("renders generated donuts from `series`", () => {
    render(
      <DonutChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-donut-chart")

    for (const { browser } of rootData) {
      expect(screen.getByText(browser)).toBeInTheDocument()
    }
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <DonutChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
      >
        <DonutChart.Donut
          data={childData}
          dataKey="downloads"
          nameKey="browser"
        />
      </DonutChart.Root>,
    )

    expect(screen.getByText("safari")).toBeInTheDocument()
    expect(screen.getByText("opera")).toBeInTheDocument()
    expect(screen.queryByText("chrome")).not.toBeInTheDocument()
    expect(screen.queryByText("edge")).not.toBeInTheDocument()
  })
})
