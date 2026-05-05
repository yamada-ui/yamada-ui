import { a11y, render, screen } from "#test"
import { AreaChart } from "."

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

describe("<AreaChart />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <AreaChart.Root
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      />,
    )
  })

  test("renders generated areas from `series`", () => {
    render(
      <AreaChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        responsiveContainerProps={{ children: null, height: 400, width: 400 }}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-area-chart")
    expect(root.tagName).toBe("DIV")
    expect(root.querySelectorAll(".ui-cartesian-chart__area")).toHaveLength(2)
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <>
        <AreaChart.Root
          data-testid="root"
          data={data}
          series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
          responsiveContainerProps={{ children: null, height: 400, width: 400 }}
          xAxisProps={{ dataKey: "date" }}
        >
          <AreaChart.Area dataKey="tablet" />
        </AreaChart.Root>

        <AreaChart.Root
          data-testid="tablet-only"
          data={data}
          series={[{ dataKey: "tablet" }]}
          responsiveContainerProps={{ children: null, height: 400, width: 400 }}
          xAxisProps={{ dataKey: "date" }}
        />

        <AreaChart.Root
          data-testid="desktop-only"
          data={data}
          series={[{ dataKey: "desktop" }]}
          responsiveContainerProps={{ children: null, height: 400, width: 400 }}
          xAxisProps={{ dataKey: "date" }}
        />
      </>,
    )

    const root = screen.getByTestId("root")
    const tabletOnly = screen.getByTestId("tablet-only")
    const desktopOnly = screen.getByTestId("desktop-only")
    const getAreaPath = (target: HTMLElement) =>
      target.querySelector(".ui-cartesian-chart__area path")?.getAttribute("d")

    expect(root.querySelectorAll(".ui-cartesian-chart__area")).toHaveLength(1)
    expect(getAreaPath(root)).toBeTruthy()
    expect(getAreaPath(tabletOnly)).toBeTruthy()
    expect(getAreaPath(desktopOnly)).toBeTruthy()
    expect(getAreaPath(root)).toBe(getAreaPath(tabletOnly))
    expect(getAreaPath(root)).not.toBe(getAreaPath(desktopOnly))
  })
})
