import { a11y } from "#test"
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
})
