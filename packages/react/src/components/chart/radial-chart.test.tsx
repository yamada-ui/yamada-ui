import { render, screen } from "#test"
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

const responsiveContainerProps = { height: 400, width: 400 } as NonNullable<
  Parameters<typeof RadialChart.Root>[0]["responsiveContainerProps"]
>

describe("<RadialChart />", () => {
  test("renders generated radials from multiple `series` entries", () => {
    render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[
          { dataKey: "visits", nameKey: "browser" },
          { dataKey: "downloads", nameKey: "browser" },
        ]}
        responsiveContainerProps={responsiveContainerProps}
      >
        <RadialChart.Tooltip active defaultIndex={0} />
      </RadialChart.Root>,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-radial-chart")
    expect(root.querySelectorAll(".ui-polar-chart__radial")).toHaveLength(2)
    expect(
      root.ownerDocument.querySelectorAll(".ui-chart__tooltip-item"),
    ).toHaveLength(2)
    expect(
      root.ownerDocument.querySelectorAll(".ui-chart__tooltip-label"),
    ).toHaveLength(0)
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[
          { dataKey: "visits", nameKey: "browser" },
          { dataKey: "downloads", nameKey: "browser" },
        ]}
        responsiveContainerProps={responsiveContainerProps}
      >
        <RadialChart.Radial dataKey="downloads" nameKey="browser" />
      </RadialChart.Root>,
    )

    const root = screen.getByTestId("root")

    expect(root.querySelectorAll(".ui-polar-chart__radial")).toHaveLength(1)
  })
})
