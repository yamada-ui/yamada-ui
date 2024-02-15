import type { Meta, StoryFn } from "@storybook/react"
import type { AreaChartProps } from "@yamada-ui/charts"
import { AreaChart } from "@yamada-ui/charts"
import type {
  AreaChartCurveType,
  AreaChartType,
  ChartSeries,
  LayoutType,
} from "@yamada-ui/charts/src/area-chart"
import type { AxisType } from "@yamada-ui/charts/src/use-area-chart"
import {
  FormControl,
  HStack,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  VStack,
  useBoolean,
  Tooltip,
  SliderThumb,
  Card,
  Text,
} from "@yamada-ui/react"
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

const series: ChartSeries[] = [
  { name: "uv", color: ["indigo.600", "indigo.400"] },
  { name: "pv", color: ["rose.600", "rose.400"] },
  { name: "amt", color: ["emerald.600", "emerald.400"] },
]

export const basic: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      gridProps={{ color: "red" }}
    />
  )
}

export const custom: Story = () => {
  const [props, setProps] = useState({
    data: data,
    series: series,
    dataKey: "name",
    withXAxis: true,
    withYAxis: true,
    withDots: true,
    withActiveDots: true,
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
    splitColors: ["#28412c", "#ff0000"],
    orientation: "horizontal",
  } as AreaChartProps)

  const [fillOpacityIsOpen, { on: fillOpacityOn, off: fillOpacityOff }] =
    useBoolean(false)
  const [strokeWidthIsOpen, { on: strokeWidthOn, off: strokeWidthOff }] =
    useBoolean(false)
  const [
    tooltipAnimationDurationIsOpen,
    { on: tooltipAnimationDurationOn, off: tooltipAnimationDurationOff },
  ] = useBoolean(false)

  return (
    <HStack alignItems="flex-start" w="100%">
      <AreaChart {...props} />
      <VStack gap="sm" w="20%">
        <FormControl label="chart type">
          <Select
            size="sm"
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
            size="sm"
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
        <FormControl label="orientation">
          <Select
            size="sm"
            defaultValue="horizontal"
            items={[
              { label: "horizontal", value: "horizontal" },
              { label: "vertical", value: "vertical" },
            ]}
            value={props.orientation}
            onChange={(value) => {
              setProps((prev) => ({
                ...prev,
                orientation: value as LayoutType,
              }))
            }}
          />
        </FormControl>
        <FormControl label="tick line">
          <SegmentedControl
            size="sm"
            items={[
              { label: "x", value: "x" },
              { label: "y", value: "y" },
              { label: "xy", value: "xy" },
              { label: "none", value: "none" },
            ]}
            value={props.tickLine}
            onChange={(value) => {
              setProps((prev) => ({
                ...prev,
                tickLine: value as AreaChartType,
              }))
            }}
          />
        </FormControl>
        <FormControl label="grid axis">
          <SegmentedControl
            size="sm"
            items={[
              { label: "x", value: "x" },
              { label: "y", value: "y" },
              { label: "xy", value: "xy" },
              { label: "none", value: "none" },
            ]}
            value={props.gridAxis}
            onChange={(value) => {
              setProps((prev) => ({
                ...prev,
                gridAxis: value as AxisType,
              }))
            }}
          />
        </FormControl>
      </VStack>
      <VStack gap="md" w="20%">
        <FormControl label="fill opacity">
          <Slider
            value={props.fillOpacity! * 100}
            min={0}
            max={100}
            onChange={(value) => {
              setProps((prev) => ({ ...prev, fillOpacity: value / 100 }))
            }}
            onMouseEnter={fillOpacityOn}
            onMouseLeave={fillOpacityOff}
          >
            <Tooltip
              placement="top"
              label={props.fillOpacity}
              isOpen={fillOpacityIsOpen}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
        <FormControl label="stroke width">
          <Slider
            value={props.strokeWidth! * 10}
            min={5}
            max={50}
            onChange={(value) => {
              setProps((prev) => ({ ...prev, strokeWidth: value / 10 }))
            }}
            onMouseEnter={strokeWidthOn}
            onMouseLeave={strokeWidthOff}
          >
            <Tooltip
              placement="top"
              label={props.strokeWidth}
              isOpen={strokeWidthIsOpen}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
        <FormControl label="tooltip animation duration">
          <Slider
            value={props.tooltipAnimationDuration}
            min={0}
            max={2000}
            onChange={(value) => {
              setProps((prev) => ({ ...prev, tooltipAnimationDuration: value }))
            }}
            onMouseEnter={tooltipAnimationDurationOn}
            onMouseLeave={tooltipAnimationDurationOff}
          >
            <Tooltip
              placement="top"
              label={props.tooltipAnimationDuration}
              isOpen={tooltipAnimationDurationIsOpen}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
        <HStack alignItems="flex-start">
          <VStack>
            <Switch
              size="sm"
              isChecked={props.withXAxis}
              onChange={() => {
                setProps((prev) => ({ ...prev, withXAxis: !prev.withXAxis }))
              }}
            >
              x axis
            </Switch>
            <Switch
              size="sm"
              isChecked={props.withYAxis}
              onChange={() => {
                setProps((prev) => ({ ...prev, withYAxis: !prev.withYAxis }))
              }}
            >
              y axis
            </Switch>
            <Switch
              size="sm"
              isChecked={props.withLegend}
              onChange={() => {
                setProps((prev) => ({ ...prev, withLegend: !prev.withLegend }))
              }}
            >
              legend
            </Switch>
            <Switch
              size="sm"
              isChecked={props.withTooltip}
              onChange={() => {
                setProps((prev) => ({
                  ...prev,
                  withTooltip: !prev.withTooltip,
                }))
              }}
            >
              tooltip
            </Switch>
          </VStack>
          <VStack>
            <Switch
              size="sm"
              isChecked={props.withDots}
              onChange={() => {
                setProps((prev) => ({ ...prev, withDots: !prev.withDots }))
              }}
            >
              dots
            </Switch>
            <Switch
              size="sm"
              isChecked={props.withActiveDots}
              onChange={() => {
                setProps((prev) => ({
                  ...prev,
                  withActiveDots: !prev.withActiveDots,
                }))
              }}
              whiteSpace="nowrap"
            >
              active dots
            </Switch>
            <Switch
              size="sm"
              isChecked={
                typeof props.withGradient === "boolean"
                  ? props.withGradient
                  : props.type === "default"
              }
              onChange={() => {
                setProps((prev) => ({
                  ...prev,
                  withGradient: !prev.withGradient,
                }))
              }}
            >
              gradient
            </Switch>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  )
}

const dashSeries = [
  { name: "uv", color: "indigo.400" },
  { name: "pv", color: "rose.400" },
  { name: "amt", color: "emerald.400", strokeDasharray: "5 5" },
]

export const dash: Story = () => {
  return <AreaChart data={data} series={dashSeries} dataKey="name" />
}

const splitData = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: -3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: -1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
]
const splitSeries = [{ name: "uv", color: "indigo.400" }]

export const split: Story = () => {
  const [splitOffset, setSplitOffset] = useState<number | undefined>()
  const [isOpen, { on, off }] = useBoolean()

  return (
    <HStack w="100%">
      <AreaChart
        height="sm"
        data={splitData}
        series={splitSeries}
        dataKey="name"
        type="split"
        splitColors={["red.400", "green.400"]}
        splitOffset={splitOffset}
      />
      <FormControl label="split offset" w="20%">
        <Slider
          value={splitOffset !== undefined ? splitOffset * 100 : 0}
          min={0}
          max={100}
          onChange={(value) => {
            setSplitOffset(value / 100)
          }}
          onMouseEnter={on}
          onMouseLeave={off}
        >
          <Tooltip placement="top" label={splitOffset} isOpen={isOpen}>
            <SliderThumb />
          </Tooltip>
        </Slider>
      </FormControl>
    </HStack>
  )
}

const connectNullsData = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
]
const connectNullsSeries = [{ name: "uv", color: "indigo.400" }]

export const connectNulls: Story = () => {
  const [connectNulls, { toggle }] = useBoolean(true)

  return (
    <HStack>
      <AreaChart
        data={connectNullsData}
        series={connectNullsSeries}
        dataKey="name"
        type="default"
        connectNulls={connectNulls}
      />
      <Switch size="sm" isChecked={connectNulls} onChange={toggle}>
        connect nulls
      </Switch>
    </HStack>
  )
}

export const sync: Story = () => {
  return (
    <VStack>
      <AreaChart
        data={data}
        series={series}
        dataKey="name"
        areaChartProps={{ syncId: "syncId" }}
      />
      <AreaChart
        data={data}
        series={series}
        dataKey="name"
        areaChartProps={{ syncId: "syncId" }}
      />
    </VStack>
  )
}

export const referenceLine: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      referenceLines={[
        { y: 5500, label: "x line", color: "red.500" },
        { x: "Page F", label: "y line" },
      ]}
    />
  )
}

export const legendProps: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      withLegend
      legendProps={{ verticalAlign: "bottom", height: 50 }}
    />
  )
}

export const axisProps: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: "right", domain: [0, 15000] }}
      xAxisProps={{
        tickMargin: 15,
        orientation: "top",
        padding: { left: 30, right: 30 },
      }}
    />
  )
}

export const valueFormatter: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      valueFormatter={(value) => new Intl.NumberFormat().format(value)}
    />
  )
}

export const strokeDasharray: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      gridAxis="xy"
      strokeDasharray="15 15"
    />
  )
}

export const units: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const customTooltip: Story = () => {
  type TooltipProps = {
    label: string
    payload: Record<string, any>[] | undefined
  }

  const CustomTooltip = ({ label, payload }: TooltipProps) => {
    if (!payload) return null

    return (
      <Card variant="subtle" colorScheme="gray" p="md">
        <Text>{label}</Text>
        {payload.map((value, index) => (
          <HStack key={`payload-${index}`} justifyContent="space-between">
            <Text>{value?.name}</Text>
            <Text color={value?.color}>{value?.value}</Text>
          </HStack>
        ))}
      </Card>
    )
  }

  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      tooltipProps={{
        content: ({ label, payload }) => (
          <CustomTooltip label={label} payload={payload} />
        ),
      }}
    />
  )
}

export const customDots: Story = () => {
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      dotProps={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: "#fff" }}
    />
  )
}
