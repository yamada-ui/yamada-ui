import { page, render } from "#test/browser"
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
  test("sets `displayName` correctly", () => {
    expect(BarChart.Root.displayName).toBe("BarChart")
  })

  test("renders generated bars from `series`", async () => {
    await render(
      <BarChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-bar-chart")
    await expect.poll(() => root.element().tagName).toBe("DIV")
    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__bar").length,
      )
      .toBe(8)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <BarChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      >
        <BarChart.Bar dataKey="tablet" />
      </BarChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__bar").length,
      )
      .toBe(4)
  })
})
