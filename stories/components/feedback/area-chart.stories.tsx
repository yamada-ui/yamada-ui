import type { Meta, StoryFn } from "@storybook/react"
import type {
  CurveType,
  AreaChartType,
  LayoutType,
  AreaChartSeries,
  AxisType,
  AreaChartProps,
  ChartTooltipType,
} from "@yamada-ui/charts"
import { AreaChart } from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import {
  FormControl,
  HStack,
  Slider,
  VStack,
  useBoolean,
  Tooltip,
  SliderThumb,
  Card,
  Text,
  Wrap,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof AreaChart>

const meta: Meta<typeof AreaChart> = {
  title: "Components / Feedback / AreaChart",
  component: AreaChart,
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return <AreaChart data={data} series={series} dataKey="name" />
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  const [props, setProps] = useState<AreaChartProps>({
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
    layoutType: "horizontal",
  })

  return (
    <Wrap gap="md" alignItems="flex-start">
      <AreaChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl
            component="Select"
            items={[
              {
                label: "Chart type",
                defaultValue: "default",
                items: [
                  { label: "default", value: "default" },
                  { label: "split", value: "split" },
                  { label: "stacked", value: "stacked" },
                  { label: "percent", value: "percent" },
                ],
                value: props.type,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    type: value as AreaChartType,
                  }))
                },
              },
              {
                label: "Curve type",
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
                    curveType: value as CurveType,
                  }))
                },
              },
              {
                label: "Layout type",
                defaultValue: "horizontal",
                items: [
                  { label: "horizontal", value: "horizontal" },
                  { label: "vertical", value: "vertical" },
                ],
                value: props.layoutType,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    layoutType: value as LayoutType,
                  }))
                },
              },
            ]}
          />

          <PropControl
            component="SegmentedControl"
            items={[
              {
                label: "Tick line",
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
                    tickLine: value as AxisType,
                  }))
                },
              },
              {
                label: "Grid axis",
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
                    gridAxis: value as AxisType,
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
                value: props.fillOpacity,
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
                {
                  label: "active dots",
                  isChecked:
                    typeof props.withGradient === "boolean"
                      ? props.withGradient
                      : props.type === "default",
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withGradient: !prev.withGradient,
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

export const withVariant: Story = () => {
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <VStack>
      <AreaChart
        data={data}
        series={series}
        dataKey="name"
        variant="subtle"
        withLegend
      />
      <AreaChart data={data} series={series} dataKey="name" withLegend />
    </VStack>
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <VStack>
      <AreaChart data={data} series={series} dataKey="name" size="sm" />
      <AreaChart data={data} series={series} dataKey="name" size="md" />
      <AreaChart data={data} series={series} dataKey="name" size="lg" />
    </VStack>
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      {
        dataKey: "uv",
        color: ["primary.500", "primary.400"],
        strokeDasharray: "5 5",
      },
    ],
    [],
  )

  return <AreaChart data={data} series={series} dataKey="name" />
}

export const withSplit: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: Math.floor(Math.random() * (5000 - -5000 + 1)) + -5000,
        })),
    [],
  )

  const series: AreaChartSeries[] = useMemo(
    () => [{ dataKey: "uv", color: ["primary.500", "primary.400"] }],
    [],
  )

  const [splitOffset, setSplitOffset] = useState<number | undefined>()
  const [isOpen, { on, off }] = useBoolean()

  return (
    <VStack>
      <FormControl label="Split offset" w="xs">
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

      <AreaChart
        height="sm"
        data={data}
        series={series}
        dataKey="name"
        type="split"
        splitColors={["red.400", "green.400"]}
        splitOffset={splitOffset}
      />
    </VStack>
  )
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

  const series: AreaChartSeries[] = useMemo(
    () => [{ dataKey: "uv", color: ["primary.500", "primary.400"] }],
    [],
  )

  return (
    <AreaChart
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <AreaChart
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return <AreaChart data={data} series={series} dataKey="name" withLegend />
}

export const withAxisProps: Story = () => {
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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
        color: ["red.500", "red.500"],
      }}
    />
  )
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      valueFormatter={(value) => value.toLocaleString()}
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  const CustomTooltip: ChartTooltipType = (props: {
    label?: string
    payload?: Dict[]
  }) => {
    const { label, payload } = props
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )
  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      dotProps={{ r: 8 }}
      // TODO: 型更新。`stroke`なども見る。
      // @ts-ignore
      activeDotProps={{ r: 7, strokeWidth: 1, fill: ["white", "black"] }}
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

  const series: AreaChartSeries[] = useMemo(
    () => [
      { dataKey: "uv", color: ["primary.500", "primary.400"] },
      { dataKey: "pv", color: ["secondary.500", "secondary.400"] },
      { dataKey: "amt", color: ["warning.500", "warning.400"] },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      series={series}
      dataKey="name"
      withLegend
      legendProps={{ verticalAlign: "bottom" }}
    />
  )
}
