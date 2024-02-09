import type { Meta, StoryFn } from "@storybook/react"
import { AreaChart, AreaChartProps } from "@yamada-ui/charts"
import {
  AreaChartCurveType,
  AreaChartType,
} from "@yamada-ui/charts/src/area-chart"
import { FormControl, HStack, Select, Switch, VStack } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof AreaChart>

const meta: Meta<typeof AreaChart> = {
  title: "Components / Feedback / AreaChart",
  component: AreaChart,
}

export default meta

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
const series = [
  { name: "uv", color: "#008b8b" },
  { name: "pv", color: "#ff6347" },
  { name: "amt", color: "#4682b4" },
]

export const basic: Story = () => {
  return <AreaChart data={data} series={series} dataKey="testdata" />
}

export const custom: Story = () => {
  const [props, setProps] = useState({
    data: data,
    series: series,
    dataKey: "testdata",
    withXAxis: true,
    withYAxis: true,
    withDots: true,
    withTooltip: true,
    withLegend: false,
    connectNulls: true,
    strokeWidth: 2,
    tooltipAnimationDuration: 0,
    fillOpacity: 0.2,
    tickLine: "y",
    strokeDasharray: "5 5",
    curveType: "monotone",
    gridAxis: "x",
    type: "default",
    splitColors: ["green.7", "red.7"],
    orientation: "horizontal",
  } as AreaChartProps)

  return (
    <HStack>
      <AreaChart {...props} />
      <VStack>
        <FormControl label="chart type">
          <Select
            defaultValue="default"
            items={[
              { label: "default", value: "default" },
              { label: "split", value: "split" },
              { label: "stacked", value: "stacked" },
              { label: "percent", value: "percent" },
            ]}
            value={props.type}
            onChange={(value) => {
              setProps((prev) => ({ ...prev, type: value as AreaChartType }))
            }}
          />
        </FormControl>
        <FormControl label="curve type">
          <Select
            defaultValue="monotone"
            items={[
              { label: "monotone", value: "monotone" },
              { label: "bump", value: "bump" },
              { label: "linear", value: "linear" },
              { label: "natural", value: "natural" },
              { label: "step", value: "step" },
              { label: "stepBefore", value: "stepBefore" },
              { label: "stepAfter", value: "stepAfter" },
            ]}
            value={props.curveType}
            onChange={(value) => {
              setProps((prev) => ({
                ...prev,
                curveType: value as AreaChartCurveType,
              }))
            }}
          />
        </FormControl>
      </VStack>
      <VStack>
        <Switch
          isChecked={props.withXAxis}
          onChange={() => {
            setProps((prev) => ({ ...prev, withXAxis: !prev.withXAxis }))
          }}
        >
          x axis
        </Switch>
        <Switch
          isChecked={props.withYAxis}
          onChange={() => {
            setProps((prev) => ({ ...prev, withYAxis: !prev.withYAxis }))
          }}
        >
          y axis
        </Switch>
        <Switch
          isChecked={props.withDots}
          onChange={() => {
            setProps((prev) => ({ ...prev, withDots: !prev.withDots }))
          }}
        >
          dots
        </Switch>
        <Switch
          isChecked={
            typeof props.withGradient === "boolean"
              ? props.withGradient
              : props.type === "default"
          }
          onChange={() => {
            setProps((prev) => ({ ...prev, withGradient: !prev.withGradient }))
          }}
        >
          gradient
        </Switch>
      </VStack>
    </HStack>
  )
}
