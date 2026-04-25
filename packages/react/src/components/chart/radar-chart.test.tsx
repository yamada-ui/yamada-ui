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

const RADAR_DOM_NODES_PER_SERIES = 2

describe("<RadarChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(RadarChart.Root.displayName).toBe("RadarChart")
  })

  test("renders generated radars and default grid/angle axis", async () => {
    const series: Array<{ dataKey: "downloads" | "visits" }> = [
      { dataKey: "visits" },
      { dataKey: "downloads" },
    ]

    await render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={series}
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-radar-chart")
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radar").length,
      )
      .toBe(series.length * RADAR_DOM_NODES_PER_SERIES)
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__grid").length,
      )
      .toBeGreaterThan(0)
    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-polar-chart__angle-axis").length,
      )
      .toBeGreaterThan(0)
  })

  test("renders composition components instead of fallback `series`", async () => {
    const fallbackSeries: Array<{ dataKey: "downloads" | "visits" }> = [
      { dataKey: "visits" },
      { dataKey: "downloads" },
    ]
    const composedSeries: Array<{ dataKey: "visits" }> = [{ dataKey: "visits" }]

    await render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={fallbackSeries}
      >
        {composedSeries.map((series) => (
          <RadarChart.Radar key={series.dataKey} dataKey={series.dataKey} />
        ))}
      </RadarChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radar").length,
      )
      .toBe(composedSeries.length * RADAR_DOM_NODES_PER_SERIES)
  })
})
