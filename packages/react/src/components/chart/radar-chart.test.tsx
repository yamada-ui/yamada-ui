import { render, screen } from "#test"
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
const responsiveContainerProps = { height: 400, width: 400 } as NonNullable<
  Parameters<typeof RadarChart.Root>[0]["responsiveContainerProps"]
>

describe("<RadarChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(RadarChart.Root.displayName).toBe("RadarChart")
  })

  test("renders generated radars and default grid/angle axis", () => {
    const series: Array<{ dataKey: "downloads" | "visits" }> = [
      { dataKey: "visits" },
      { dataKey: "downloads" },
    ]

    render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={series}
        responsiveContainerProps={responsiveContainerProps}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-radar-chart")
    expect(root.querySelectorAll(".ui-polar-chart__radar")).toHaveLength(
      series.length * RADAR_DOM_NODES_PER_SERIES,
    )
    expect(
      root.querySelectorAll(".ui-polar-chart__grid").length,
    ).toBeGreaterThan(0)
    expect(
      root.querySelectorAll(".ui-polar-chart__angle-axis").length,
    ).toBeGreaterThan(0)
  })

  test("renders composition components instead of fallback `series`", () => {
    const fallbackSeries: Array<{ dataKey: "downloads" | "visits" }> = [
      { dataKey: "visits" },
      { dataKey: "downloads" },
    ]
    const composedSeries: Array<{ dataKey: "visits" }> = [{ dataKey: "visits" }]

    render(
      <RadarChart.Root
        data-testid="root"
        data={data}
        nameKey="browser"
        series={fallbackSeries}
        responsiveContainerProps={responsiveContainerProps}
      >
        {composedSeries.map((series) => (
          <RadarChart.Radar key={series.dataKey} dataKey={series.dataKey} />
        ))}
      </RadarChart.Root>,
    )

    const root = screen.getByTestId("root")

    expect(root.querySelectorAll(".ui-polar-chart__radar")).toHaveLength(
      composedSeries.length * RADAR_DOM_NODES_PER_SERIES,
    )
  })
})
