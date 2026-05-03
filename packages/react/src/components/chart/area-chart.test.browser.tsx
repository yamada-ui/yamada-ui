import { a11y, page, render } from "#test/browser"
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
  test("renders component correctly", async () => {
    await a11y(
      <AreaChart.Root
        data={data}
        series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
        xAxisProps={{ dataKey: "date" }}
      />,
    )
  })

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
    expect(root.element().tagName).toBe("DIV")
    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__area").length,
      )
      .toBe(2)
  })

  test("renders composition components instead of fallback `series`", async () => {
    await render(
      <>
        <AreaChart.Root
          data-testid="root"
          data={data}
          series={[{ dataKey: "desktop" }, { dataKey: "mobile" }]}
          xAxisProps={{ dataKey: "date" }}
        >
          <AreaChart.Area dataKey="tablet" />
        </AreaChart.Root>

        <AreaChart.Root
          data-testid="tablet-only"
          data={data}
          series={[{ dataKey: "tablet" }]}
          xAxisProps={{ dataKey: "date" }}
        />

        <AreaChart.Root
          data-testid="desktop-only"
          data={data}
          series={[{ dataKey: "desktop" }]}
          xAxisProps={{ dataKey: "date" }}
        />
      </>,
    )

    const root = page.getByTestId("root")
    const tabletOnly = page.getByTestId("tablet-only")
    const desktopOnly = page.getByTestId("desktop-only")
    const getAreaPath = (target: ReturnType<typeof page.getByTestId>) =>
      target
        .element()
        .querySelector(".ui-cartesian-chart__area path")
        ?.getAttribute("d")

    await expect
      .poll(
        () =>
          root.element().querySelectorAll(".ui-cartesian-chart__area").length,
      )
      .toBe(1)

    await expect.poll(() => getAreaPath(root)).toBeTruthy()
    await expect.poll(() => getAreaPath(tabletOnly)).toBeTruthy()
    await expect.poll(() => getAreaPath(desktopOnly)).toBeTruthy()

    const compositionPath = getAreaPath(root)
    const tabletPath = getAreaPath(tabletOnly)
    const desktopPath = getAreaPath(desktopOnly)

    expect(compositionPath).toBe(tabletPath)
    expect(compositionPath).not.toBe(desktopPath)
  })
})
