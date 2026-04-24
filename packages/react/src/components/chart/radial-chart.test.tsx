import { page, render } from "#test/browser"
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

describe("<RadialChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(RadialChart.Root.displayName).toBe("RadialChart")
  })

  test("renders generated radials from multiple `series` entries", async () => {
    await render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[
          { dataKey: "visits", nameKey: "browser" },
          { dataKey: "downloads", nameKey: "browser" },
        ]}
      >
        <RadialChart.Tooltip active defaultIndex={0} />
      </RadialChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect.element(root).toHaveClass("ui-radial-chart")
    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radial").length,
      )
      .toBe(2)
    await expect
      .poll(
        () =>
          root
            .element()
            .ownerDocument.querySelectorAll(".ui-chart__tooltip-item").length,
      )
      .toBe(2)
    await expect
      .poll(
        () =>
          root
            .element()
            .ownerDocument.querySelectorAll(".ui-chart__tooltip-label").length,
      )
      .toBe(0)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <RadialChart.Root
        data-testid="root"
        data={rootData}
        series={[
          { dataKey: "visits", nameKey: "browser" },
          { dataKey: "downloads", nameKey: "browser" },
        ]}
      >
        <RadialChart.Radial dataKey="downloads" nameKey="browser" />
      </RadialChart.Root>,
    )

    const root = page.getByTestId("root")

    await expect
      .poll(
        () => root.element().querySelectorAll(".ui-polar-chart__radial").length,
      )
      .toBe(1)
  })
})
