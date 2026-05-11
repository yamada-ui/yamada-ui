import { render, screen } from "#test"
import { LineChart } from "."

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
  Parameters<typeof LineChart.Root>[0]["responsiveContainerProps"]
>

describe("<LineChart />", () => {
  test("renders generated lines from `series`", () => {
    render(
      <LineChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={responsiveContainerProps}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-line-chart")
    expect(root.tagName).toBe("DIV")
    expect(root.querySelectorAll(".ui-cartesian-chart__line")).toHaveLength(2)
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <LineChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={responsiveContainerProps}
        xAxisProps={{ dataKey: "date" }}
      >
        <LineChart.Line dataKey="tablet" />
      </LineChart.Root>,
    )

    const root = screen.getByTestId("root")

    expect(root.querySelectorAll(".ui-cartesian-chart__line")).toHaveLength(1)
  })
})
