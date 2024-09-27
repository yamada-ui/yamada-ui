import type { Meta, StoryFn } from "@storybook/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"
import { LineChart } from "@yamada-ui/charts"
import type {
  ChartAxisType,
  ChartTooltip,
  ChartCurveType,
  ChartLayoutType,
  LineChartProps,
  LineProps,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import {
  Text,
  Card,
  HStack,
  VStack,
  Wrap,
  CardHeader,
  CardBody,
} from "@yamada-ui/react"

type Story = StoryFn<typeof LineChart>

const meta: Meta<typeof LineChart> = {
  title: "Components / Data Display / LineChart",
  component: LineChart,
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const basic: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return <LineChart data={data} series={series} dataKey="name" />
}

export const custom: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  const [props, setProps] = useState<LineChartProps>({
    data: data,
    series: series,
    dataKey: "name",
    chartProps: {
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      },
    },
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
  })

  return (
    <Wrap gap="md" alignItems="flex-start">
      <LineChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl
            component="Select"
            items={[
              {
                label: "Curve Type",
                defaultValue: "monotone",
                items: [
                  { label: "monotone", value: "monotone" },
                  { label: "bump", value: "bump" },
                  { label: "linear", value: "linear" },
                  { label: "natural", value: "natural" },
                  { label: "step", value: "step" },
                  { label: "stepBefore", value: "stepBefore" },
                  { label: "stepAfter", value: "stepAfter" },
                ],
                value: props.curveType,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    curveType: value as ChartCurveType,
                  }))
                },
              },
              {
                label: "Layout Type",
                defaultValue: "horizontal",
                items: [
                  { label: "horizontal", value: "horizontal" },
                  { label: "vertical", value: "vertical" },
                ],
                value: props.layoutType,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    layoutType: value as ChartLayoutType,
                  }))
                },
              },
            ]}
          />

          <PropControl
            component="SegmentedControl"
            items={[
              {
                label: "Tick Line",
                items: [
                  { label: "x", value: "x" },
                  { label: "y", value: "y" },
                  { label: "xy", value: "xy" },
                  { label: "none", value: "none" },
                ],
                value: props.tickLine,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    tickLine: value as ChartAxisType,
                  }))
                },
              },
              {
                label: "Grid Axis",
                items: [
                  { label: "x", value: "x" },
                  { label: "y", value: "y" },
                  { label: "xy", value: "xy" },
                  { label: "none", value: "none" },
                ],
                value: props.gridAxis,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    gridAxis: value as ChartAxisType,
                  }))
                },
              },
            ]}
          />
        </VStack>

        <VStack w="auto">
          <PropControl
            component="Slider"
            items={[
              {
                label: "Fill opacity",
                value: props.fillOpacity as number,
                min: 0,
                max: 1,
                step: 0.1,
                onChange: (value) => {
                  setProps((prev) => ({ ...prev, fillOpacity: value }))
                },
              },
              {
                label: "Stroke width",
                value: props.strokeWidth,
                min: 0.5,
                max: 5,
                step: 0.5,
                onChange: (value) => {
                  setProps((prev) => ({ ...prev, strokeWidth: value }))
                },
              },
              {
                label: "Tooltip animation duration",
                value: props.tooltipAnimationDuration,
                min: 0,
                max: 2000,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    tooltipAnimationDuration: value,
                  }))
                },
              },
            ]}
          />

          <Wrap gap="md" alignItems="flex-start">
            <PropControl
              component="Switch"
              items={[
                {
                  label: "x axis",
                  isChecked: props.withXAxis,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withXAxis: !prev.withXAxis,
                    })),
                },
                {
                  label: "y axis",
                  isChecked: props.withYAxis,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withYAxis: !prev.withYAxis,
                    })),
                },
                {
                  label: "legend",
                  isChecked: props.withLegend,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withLegend: !prev.withLegend,
                    })),
                },
                {
                  label: "tooltip",
                  isChecked: props.withTooltip,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withTooltip: !prev.withTooltip,
                    })),
                },
              ]}
            />

            <PropControl
              component="Switch"
              items={[
                {
                  label: "dots",
                  isChecked: props.withDots,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withDots: !prev.withDots,
                    })),
                },
                {
                  label: "active dots",
                  isChecked: props.withActiveDots,
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withActiveDots: !prev.withActiveDots,
                    })),
                },
              ]}
            />
          </Wrap>
        </VStack>
      </Wrap>
    </Wrap>
  )
}

export const withSize: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <>
      <LineChart data={data} series={series} dataKey="name" size="sm" />
      <LineChart data={data} series={series} dataKey="name" size="md" />
      <LineChart data={data} series={series} dataKey="name" size="lg" />
      <LineChart data={data} series={series} dataKey="name" size="full" />
    </>
  )
}

export const withDash: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      {
        dataKey: "uv",
        color: ["primary.500", "primary.400"],
        strokeDasharray: "5 5",
      },
    ],
    [],
  )

  return <LineChart data={data} series={series} dataKey="name" />
}

export const withConnectNulls: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: index !== 4 ? randomValue() : null,
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [{ dataKey: "uv", color: ["primary.500", "primary.400"] }],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      type="default"
      connectNulls={false}
    />
  )
}

export const withSync: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <VStack>
      <LineChart data={data} series={series} dataKey="name" syncId="syncId" />
      <LineChart data={data} series={series} dataKey="name" syncId="syncId" />
    </VStack>
  )
}

export const withReferenceLine: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      referenceLineProps={[
        { y: 3000, label: "x line", color: "red.500" },
        { x: "Page F", label: "y line" },
      ]}
    />
  )
}

export const withLegend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return <LineChart data={data} series={series} dataKey="name" withLegend />
}

export const withValueFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const withXAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      xAxisTickFormatter={(value) => value.replace("Page", "Page:")}
    />
  )
}

export const withYAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      yAxisTickFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const withLabelFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      labelFormatter={(value) => value.replace("Page", "Page:")}
    />
  )
}

export const withStrokeDasharray: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

export const withUnit: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

export const withAxisLabel: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      xAxisLabel="page"
      yAxisLabel="view"
    />
  )
}

export const customAxis: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

export const customTooltip: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  const CustomTooltip: ChartTooltip = (props: {
    label?: string
    payload?: Dict[]
  }) => {
    const { label, payload } = props
    if (!payload) return null

    return (
      <Card variant="subtle" colorScheme="gray">
        <CardHeader>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </CardHeader>

        <CardBody gap="sm">
          {payload.map((value, index) => (
            <HStack
              key={`payload-${index}`}
              w="full"
              justifyContent="space-between"
            >
              <Text>{value?.name}</Text>
              <Text color={value?.color}>{value?.value}</Text>
            </HStack>
          ))}
        </CardBody>
      </Card>
    )
  }

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const customDots: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      {
        dataKey: "uv",
        color: ["primary.500", "primary.400"],
        dot: { fill: ["black", "white"] },
      },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )
  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      lineProps={{
        dot: { r: 8 },
        activeDot: {
          r: 7,
          strokeWidth: 1,
          fill: ["white", "black"],
        },
      }}
    />
  )
}

export const customLegend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
          pv: randomValue(),
          amt: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      series={series}
      dataKey="name"
      withLegend
      legendProps={{ verticalAlign: "bottom", mb: "0", mt: "4" }}
    />
  )
}
