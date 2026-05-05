import { a11y, render, screen } from "#test"
import { BarChart } from "."

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

describe("<BarChart />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <BarChart.Root
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
        xAxisProps={{ dataKey: "date" }}
      />,
    )
  })

  test("renders generated bars from `series`", () => {
    render(
      <BarChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-bar-chart")
    expect(root.tagName).toBe("DIV")
    expect(root.querySelectorAll(".recharts-bar")).toHaveLength(2)
    expect(root.querySelectorAll(".recharts-bar-rectangle")).toHaveLength(
      data.length * 2,
    )
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <BarChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
        xAxisProps={{ dataKey: "date" }}
      >
        <BarChart.Bar dataKey="tablet" />
      </BarChart.Root>,
    )

    const root = screen.getByTestId("root")

    expect(root.querySelectorAll(".recharts-bar")).toHaveLength(1)
    expect(root.querySelectorAll(".recharts-bar-rectangle")).toHaveLength(
      data.length,
    )
  })
})
