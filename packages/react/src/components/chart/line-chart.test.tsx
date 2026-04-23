import { page, render } from "#test/browser"
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

describe("<LineChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(LineChart.Root.displayName).toBe("LineChart")
  })

  test("renders generated lines from `series`", async () => {
    await render(
      <LineChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      />,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-line-chart")
    await expect.poll(() => root.element().tagName).toBe("DIV")
    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__line").length,
      )
      .toBe(2)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <LineChart.Root
        data-testid="root"
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      >
        <LineChart.Line dataKey="tablet" />
      </LineChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__line").length,
      )
      .toBe(1)
  })
})
