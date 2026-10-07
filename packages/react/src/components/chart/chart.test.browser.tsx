import { a11y, page, render } from "#test/browser"
import { AreaChart, ComposedChart, LineChart, RadarChart } from "."

const data = [
  { name: "January", value: 100 },
  { name: "February", value: 200 },
  { name: "March", value: 150 },
]

const responsiveContainerProps = { height: 400, width: 400 } as NonNullable<
  LineChart.RootProps["responsiveContainerProps"]
>

const charts = [
  ["area", AreaChart.Root, AreaChart.Area],
  ["composed", ComposedChart.Root, ComposedChart.Line],
  ["line", LineChart.Root, LineChart.Line],
  ["radar", RadarChart.Root, RadarChart.Radar],
] as const

describe.each(charts)("%s chart dots", (_name, Root, Series) => {
  test("passes a11y checks", async () => {
    await a11y(
      <Root data={data} responsiveContainerProps={responsiveContainerProps}>
        <Series dataKey="value" isAnimationActive={false} />
      </Root>,
    )
  })

  test.each([
    [undefined, "4px"],
    ["6", "6px"],
    ["10px", "10px"],
    [{ base: "12" }, "12px"],
  ] as const)("renders dots with radius %j", async (radius, expected) => {
    const { user } = await render(
      <Root
        activeDotRadius={radius}
        data={data}
        dotRadius={radius}
        responsiveContainerProps={responsiveContainerProps}
      >
        <Series
          activeDot={{ "data-testid": "active-dot" }}
          dataKey="value"
          dot={{ "data-testid": "dot" }}
          isAnimationActive={false}
        />
      </Root>,
    )

    const dot = page.getByTestId("dot").nth(1)

    expect(getComputedStyle(dot.element()).r).toBe(expected)
    await expect.element(dot).toBeVisible()
    const chart = page.getByRole("application")
    const chartRect = chart.element().getBoundingClientRect()
    const dotRect = dot.element().getBoundingClientRect()

    await user.hover(chart, {
      position: {
        x: dotRect.x + dotRect.width / 2 - chartRect.x,
        y: dotRect.y + dotRect.height / 2 - chartRect.y,
      },
    })

    await expect.element(page.getByTestId("active-dot")).toBeInTheDocument()
    expect(getComputedStyle(page.getByTestId("active-dot").element()).r).toBe(
      expected,
    )
    await expect.element(page.getByTestId("active-dot")).toBeVisible()
  })
})
