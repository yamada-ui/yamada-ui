import { render, screen } from "#test"
import { ComposedChart } from "."
import { gradients } from "./chart"

interface Data {
  date: string
  desktop: number
  mobile: number
  tablet: number
}

const data: Data[] = [
  { date: "2026-01-01", desktop: 1200, mobile: 2200, tablet: 1800 },
  { date: "2026-02-01", desktop: 1400, mobile: 2400, tablet: 2000 },
  { date: "2026-03-01", desktop: 1600, mobile: 2600, tablet: 2200 },
]

const responsiveContainerProps = { height: 400, width: 400 } as NonNullable<
  Parameters<typeof ComposedChart.Root>[0]["responsiveContainerProps"]
>

describe("<ComposedChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(ComposedChart.Root.displayName).toBe("ComposedChart")
  })

  test("renders generated chart parts from `series`", () => {
    render(
      <ComposedChart.Root
        data-testid="root"
        data={data}
        series={[
          ["bar", { dataKey: "desktop" }],
          ["area", { dataKey: "tablet" }],
          ["line", { dataKey: "mobile" }],
        ]}
        responsiveContainerProps={responsiveContainerProps}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-composed-chart")
    expect(
      root.querySelectorAll(".ui-cartesian-chart__bar").length,
    ).toBeGreaterThan(0)
    expect(
      root.querySelectorAll(".ui-cartesian-chart__area").length,
    ).toBeGreaterThan(0)
    expect(
      root.querySelectorAll(".ui-cartesian-chart__line").length,
    ).toBeGreaterThan(0)
  })

  test("mergeSeries sets colors for every series entry", () => {
    const series = ComposedChart.mergeSeries<Data>([
      ["bar", { dataKey: "desktop" }],
      ["area", { dataKey: "tablet" }],
      ["line", { dataKey: "mobile" }],
    ])

    expect(series).toHaveLength(3)
    expect(series[0]?.[0]).toBe("bar")
    expect(series[1]?.[0]).toBe("area")
    expect(series[2]?.[0]).toBe("line")
    expect(series.map(([, props]) => props.color)).toStrictEqual(
      gradients(series.length, "mono", "invert"),
    )
  })
})
