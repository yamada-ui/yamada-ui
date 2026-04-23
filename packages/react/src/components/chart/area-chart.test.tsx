import { page, render } from "#test/browser"
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
  test("sets `displayName` correctly", () => {
    expect(AreaChart.Root.displayName).toBe("AreaChart")
  })

  test("renders generated areas from `series`", async () => {
    await render(
      <AreaChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-area-chart")
    await expect.poll(() => root.element().tagName).toBe("DIV")
    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__area").length,
      )
      .toBe(2)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <AreaChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      >
        <AreaChart.Area dataKey="tablet" />
      </AreaChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__area").length,
      )
      .toBe(1)
  })
})
