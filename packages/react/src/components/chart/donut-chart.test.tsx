import { page, render } from "#test/browser"
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
  test("sets `displayName` correctly", () => {
    expect(DonutChart.Root.displayName).toBe("DonutChart")
  })

  test("renders generated donuts from `series`", async () => {
    await render(
      <DonutChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-donut-chart")
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__donut").length,
      )
      .toBe(3)
    await expect.element(page.getByText("chrome")).toBeInTheDocument()
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <DonutChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
      >
        <DonutChart.Donut
          data={childData}
          dataKey="downloads"
          nameKey="browser"
        />
      </DonutChart.Root>,
    )

    await expect.element(page.getByText("safari")).toBeInTheDocument()
    await expect.element(page.getByText("opera")).toBeInTheDocument()
  })
})
