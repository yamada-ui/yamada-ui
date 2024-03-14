import type { Meta, StoryFn } from "@storybook/react"
import { LineChart } from "@yamada-ui/charts"
import type {
  AxisType,
  CurveType,
  LayoutType,
  LineChartProps,
  LineChartSeries,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import {
  Text,
  Card,
  FormControl,
  HStack,
  SegmentedControl,
  Select,
  Slider,
  SliderThumb,
  Switch,
  Tooltip,
  VStack,
  useBoolean,
} from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof LineChart>

const meta: Meta<typeof LineChart> = {
  title: "Components / Feedback / LineChart",
  component: LineChart,
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

const series: LineChartSeries[] = [
  { dataKey: "uv", color: ["indigo.600", "indigo.400"] },
  { dataKey: "pv", color: ["rose.600", "rose.400"] },
  { dataKey: "amt", color: ["emerald.600", "emerald.400"] },
]

export const basic: Story = () => {
  return <LineChart data={data} series={series} dataKey="name" />
}

export const withVariant: Story = () => {
  return (
    <VStack>
      <LineChart
        data={data}
        series={series}
        dataKey="name"
        variant="subtle"
        withLegend
      />
      <LineChart data={data} series={series} dataKey="name" withLegend />
    </VStack>
  )
}

export const withSize: Story = () => {
  return (
    <VStack>
      <LineChart data={data} series={series} dataKey="name" size="sm" />
      <LineChart data={data} series={series} dataKey="name" size="md" />
      <LineChart data={data} series={series} dataKey="name" size="lg" />
    </VStack>
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
    fillOpacity: 1,
    tickLine: "y",
    strokeDasharray: "5 5",
    curveType: "monotone",
    gridAxis: "x",
    layoutType: "horizontal",
  } as LineChartProps)

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
      <LineChart {...props} />
      <VStack gap="sm" w="20%">
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
                curveType: value as CurveType,
              }))
            }}
          />
        </FormControl>
        <FormControl label="layout type">
          <Select
            size="sm"
            defaultValue="horizontal"
            items={[
              { label: "horizontal", value: "horizontal" },
              { label: "vertical", value: "vertical" },
            ]}
            value={props.layoutType}
            onChange={(value) => {
              setProps((prev) => ({
                ...prev,
                layoutType: value as LayoutType,
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
                tickLine: value as AxisType,
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
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  )
}

const dashSeries: LineChartSeries[] = [
  { dataKey: "uv", color: "indigo.400" },
  { dataKey: "pv", color: "rose.400" },
  { dataKey: "amt", color: "emerald.400", strokeDasharray: "5 5" },
]

export const withDash: Story = () => {
  return <LineChart data={data} series={dashSeries} dataKey="name" />
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

const connectNullsSeries: LineChartSeries[] = [
  { dataKey: "uv", color: "indigo.400" },
]

export const withConnectNulls: Story = () => {
  const [connectNulls, { toggle }] = useBoolean(true)

  return (
    <HStack>
      <LineChart
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

export const withSync: Story = () => {
  return (
    <VStack>
      <LineChart
        data={data}
        series={series}
        dataKey="name"
        lineChartProps={{ syncId: "syncId" }}
      />
      <LineChart
        data={data}
        series={series}
        dataKey="name"
        lineChartProps={{ syncId: "syncId" }}
      />
    </VStack>
  )
}

export const withReferenceLine: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      referenceLineProps={[
        { y: 5500, label: "x line", color: "red.500" },
        { x: "Page F", label: "y line" },
      ]}
    />
  )
}

export const withLegendProps: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      withLegend
      legendProps={{ verticalAlign: "bottom", height: 50 }}
    />
  )
}

export const withAxisProps: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: "right", domain: [0, 15000] }}
      xAxisProps={{
        tickMargin: 15,
        orientation: "top",
        padding: { left: 30, right: 30 },
        color: ["red.500", "red.500"],
      }}
    />
  )
}

export const withValueFormatter: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      valueFormatter={(value) => new Intl.NumberFormat().format(value)}
    />
  )
}

export const withStrokeDasharray: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      gridAxis="xy"
      strokeDasharray="15 15"
    />
  )
}

export const withUnits: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const withCustomTooltip: Story = () => {
  type TooltipProps = {
    label: string
    payload: Dict[] | undefined
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
    <LineChart
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

export const withCustomDots: Story = () => {
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      dotProps={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: "#fff" }}
    />
  )
}
