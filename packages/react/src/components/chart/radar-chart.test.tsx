import { page, render } from "#test/browser"
import { RadarChart } from "."

interface Data {
  browser: string
  downloads: number
  visits: number
}

const data: Data[] = [
  { browser: "chrome", downloads: 1200, visits: 2200 },
  { browser: "edge", downloads: 900, visits: 1800 },
  { browser: "firefox", downloads: 1000, visits: 2100 },
]

describe("<RadarChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(RadarChart.Root.displayName).toBe("RadarChart")
  })

  test("renders generated radars and default grid/angle axis", async () => {
    await render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={[{ dataKey: "visits" }, { dataKey: "downloads" }]}
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-radar-chart")
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radar").length,
      )
      .toBe(4)
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__grid").length,
      )
      .toBeGreaterThan(0)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={[{ dataKey: "visits" }, { dataKey: "downloads" }]}
      >
        <RadarChart.Radar dataKey="visits" />
      </RadarChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radar").length,
      )
      .toBe(2)
  })
})
