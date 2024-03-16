import type { Meta, StoryFn } from "@storybook/react"
import type {
  ChartTooltip,
  BarChartSeries,
  BarChartProps,
  LayoutType,
  AxisType,
  BarChartType,
} from "@yamada-ui/charts"
import { BarChart } from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { Card, HStack, Text, VStack, Wrap } from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof BarChart>

const meta: Meta<typeof BarChart> = {
  title: "Components / Feedback / BarChart",
  component: BarChart,
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const basic: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return <BarChart data={data} series={series} dataKey="month" />
}

export const custom: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  const [props, setProps] = useState<BarChartProps>({
    data: data,
    series: series,
    dataKey: "month",
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    withLegend: false,
    strokeWidth: 2,
    tooltipAnimationDuration: 0,
    fillOpacity: 1,
    tickLine: "y",
    strokeDasharray: "5 5",
    gridAxis: "x",
    type: "default",
    layoutType: "horizontal",
  })

  return (
    <Wrap gap="md" alignItems="flex-start">
      <BarChart {...props} />

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
                  { label: "stacked", value: "stacked" },
                  { label: "percent", value: "percent" },
                ],
                value: props.type,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    type: value as BarChartType,
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
                value: props.fillOpacity as number,
                min: 0,
                max: 1,
                step: 0.1,
                onChange: (value) => {
                  setProps((prev) => ({ ...prev, fillOpacity: value }))
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
          </Wrap>
        </VStack>
      </Wrap>
    </Wrap>
  )
}

export const withSize: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <>
      <BarChart data={data} series={series} dataKey="month" size="sm" />
      <BarChart data={data} series={series} dataKey="month" size="md" />
      <BarChart data={data} series={series} dataKey="month" size="lg" />
      <BarChart data={data} series={series} dataKey="month" size="full" />
    </>
  )
}

export const withSync: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )

  return (
    <VStack>
      <BarChart
        data={data}
        series={series}
        dataKey="month"
        barChartProps={{ syncId: "syncId" }}
      />
      <BarChart
        data={data}
        series={series}
        dataKey="month"
        barChartProps={{ syncId: "syncId" }}
      />
    </VStack>
  )
}

export const withReferenceLine: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      referenceLineProps={[
        { y: 3000, label: "x line", color: "red.500" },
        { x: "Page F", label: "y line" },
      ]}
    />
  )
}

export const withLegend: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return <BarChart data={data} series={series} dataKey="month" withLegend />
}

export const withAxisProps: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
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
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const withStrokeDasharray: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      gridAxis="xy"
      strokeDasharray="15 15"
    />
  )
}

export const withFillOpacity: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      fillOpacity={[0.8, 0.7]}
    />
  )
}

export const withUnit: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const customTooltip: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
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
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const costomLegend: Story = () => {
  const data = useMemo(() => {
    const monthes = ["January", "February", "March", "April", "May", "June"]
    return monthes.map((month) => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarChartSeries[] = useMemo(
    () => [
      { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
      { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
      { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      series={series}
      dataKey="month"
      withLegend
      legendProps={{ verticalAlign: "bottom" }}
    />
  )
}
