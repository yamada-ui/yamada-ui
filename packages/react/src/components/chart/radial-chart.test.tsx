import { page, render } from "#test/browser"
import { RadialChart } from "."

interface Data {
  browser: string
  downloads: number
  visits: number
}

const rootData: Data[] = [
  { browser: "chrome", downloads: 1200, visits: 2200 },
  { browser: "edge", downloads: 900, visits: 1800 },
]

describe("<RadialChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(RadialChart.Root.displayName).toBe("RadialChart")
  })

  test("renders generated radials from `series`", async () => {
    await render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-radial-chart")
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radial").length,
      )
      .toBe(1)
    await expect.element(page.getByText("chrome")).toBeInTheDocument()
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
      >
        <RadialChart.Radial dataKey="downloads" nameKey="browser" />
      </RadialChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radial").length,
      )
      .toBe(1)
  })
})
