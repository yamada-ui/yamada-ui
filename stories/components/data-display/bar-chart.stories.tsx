import type { Meta, StoryFn } from "@storybook/react"
import type {
  BarChartProps,
  BarChartType,
  BarProps,
  ChartAxisType,
  ChartLayoutType,
  ChartTooltip,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { BarChart } from "@yamada-ui/charts"
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof BarChart>

const meta: Meta<typeof BarChart> = {
  component: BarChart,
  title: "Components / Data Display / BarChart",
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const basic: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const custom: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  const [props, setProps] = useState<BarChartProps>({
    type: "default",
    data: data,
    dataKey: "month",
    fillOpacity: 1,
    gridAxis: "x",
    layoutType: "horizontal",
    series: series,
    strokeDasharray: "5 5",
    strokeWidth: 2,
    tickLine: "y",
    tooltipAnimationDuration: 0,
    withLegend: false,
    withTooltip: true,
    withXAxis: true,
    withYAxis: true,
  })

  return (
    <Wrap alignItems="flex-start" gap="md">
      <BarChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl
            component="Select"
            items={[
              {
                defaultValue: "default",
                items: [
                  { label: "default", value: "default" },
                  { label: "stacked", value: "stacked" },
                  { label: "percent", value: "percent" },
                ],
                label: "Chart type",
                value: props.type,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    type: value as BarChartType,
                  }))
                },
              },
              {
                defaultValue: "horizontal",
                items: [
                  { label: "horizontal", value: "horizontal" },
                  { label: "vertical", value: "vertical" },
                ],
                label: "Layout type",
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
                items: [
                  { label: "x", value: "x" },
                  { label: "y", value: "y" },
                  { label: "xy", value: "xy" },
                  { label: "none", value: "none" },
                ],
                label: "Tick line",
                value: props.tickLine,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    tickLine: value as ChartAxisType,
                  }))
                },
              },
              {
                items: [
                  { label: "x", value: "x" },
                  { label: "y", value: "y" },
                  { label: "xy", value: "xy" },
                  { label: "none", value: "none" },
                ],
                label: "Grid axis",
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
                max: 1,
                min: 0,
                step: 0.1,
                value: props.fillOpacity as number,
                onChange: (value) => {
                  setProps((prev) => ({ ...prev, fillOpacity: value }))
                },
              },
              {
                label: "Tooltip animation duration",
                max: 2000,
                min: 0,
                value: props.tooltipAnimationDuration,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    tooltipAnimationDuration: value,
                  }))
                },
              },
            ]}
          />

          <Wrap alignItems="flex-start" gap="md">
            <PropControl
              component="Switch"
              items={[
                {
                  isChecked: props.withXAxis,
                  label: "x axis",
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withXAxis: !prev.withXAxis,
                    })),
                },
                {
                  isChecked: props.withYAxis,
                  label: "y axis",
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withYAxis: !prev.withYAxis,
                    })),
                },
                {
                  isChecked: props.withLegend,
                  label: "legend",
                  onChange: () =>
                    setProps((prev) => ({
                      ...prev,
                      withLegend: !prev.withLegend,
                    })),
                },
                {
                  isChecked: props.withTooltip,
                  label: "tooltip",
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
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <>
      <BarChart data={data} dataKey="month" series={series} size="sm" />
      <BarChart data={data} dataKey="month" series={series} size="md" />
      <BarChart data={data} dataKey="month" series={series} size="lg" />
      <BarChart data={data} dataKey="month" series={series} size="full" />
    </>
  )
}

export const withSync: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]

    return [
      months.map((month) => ({
        month,
        Smartphones: randomValue(),
      })),
      months.map((month) => ({
        Laptops: randomValue(),
        month,
      })),
    ]
  }, [])

  const series: BarProps[][] = useMemo(
    () => [
      [{ color: ["primary.500", "primary.400"], dataKey: "Smartphones" }],
      [{ color: ["secondary.500", "secondary.400"], dataKey: "Laptops" }],
    ],
    [],
  )

  return (
    <VStack>
      <BarChart
        data={data[0]}
        dataKey="month"
        series={series[0]}
        syncId="syncId"
      />
      <BarChart
        data={data[1]}
        dataKey="month"
        series={series[1]}
        syncId="syncId"
      />
    </VStack>
  )
}

export const withReferenceLine: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      referenceLineProps={[
        { color: "red.500", label: "x line", y: 3000 },
        { label: "y line", x: "Page F" },
      ]}
    />
  )
}

export const withLegend: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} withLegend />
}

export const withValueFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const withXAxisTickFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      xAxisTickFormatter={(value) => value.toUpperCase()}
    />
  )
}

export const withYAxisTickFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      yAxisTickFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const withLabelFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      labelFormatter={(value) => value.toLocaleString()}
      series={series}
    />
  )
}

export const withStrokeDasharray: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      gridAxis="xy"
      series={series}
      strokeDasharray="15 15"
    />
  )
}

export const withFillOpacity: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      fillOpacity={[0.8, 0.7]}
      series={series}
    />
  )
}

export const withUnit: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const withAxisLabel: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      xAxisLabel="date"
      yAxisLabel="view"
    />
  )
}

export const useMixData: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["secondary.500", "secondary.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const withGap: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["secondary.500", "secondary.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  const [props, setProps] = useState({
    barCategoryGap: 10,
    barGap: 4,
  })

  return (
    <Wrap alignItems="flex-start" gap="md">
      <BarChart
        data={data}
        dataKey="month"
        series={series}
        chartProps={props}
      />

      <Wrap w="auto">
        <PropControl
          component="Slider"
          items={[
            {
              label: "Bar Gap",
              max: 50,
              min: 0,
              step: 1,
              value: props.barGap,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, barGap: value }))
              },
            },
            {
              label: "Bar Category Gap",
              max: 50,
              min: 0,
              step: 1,
              value: props.barCategoryGap,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, barCategoryGap: value }))
              },
            },
          ]}
        />
      </Wrap>
    </Wrap>
  )
}

export const useRangeData: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      month,
      Smartphones: [randomValue(), randomValue()],
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [{ color: ["primary.500", "primary.400"], dataKey: "Smartphones" }],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const customBar: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        radius: [12, 12, 0, 0],
      },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const customBackground: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        background: {
          fill: ["blackAlpha.300", "whiteAlpha.300"],
          radius: 10,
          stroke: ["blackAlpha.500", "whiteAlpha.500"],
          strokeWidth: 1,
        },
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
      },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const customAxis: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tickLine="xy"
      xAxisProps={{
        color: ["red.500", "red.500"],
        orientation: "top",
        padding: { left: 30, right: 30 },
        tickMargin: 15,
      }}
      yAxisProps={{ domain: [0, 15000], orientation: "right", tickMargin: 15 }}
    />
  )
}

export const customActiveBar: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        activeBar: {
          fill: ["secondary.500", "secondary.400"],
          stroke: ["secondary.500", "secondary.400"],
        },
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
      },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const customTooltip: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
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
      <Card colorScheme="gray" variant="subtle">
        <CardHeader>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </CardHeader>

        <CardBody gap="sm">
          {payload.map((value, index) => (
            <HStack
              key={`payload-${index}`}
              justifyContent="space-between"
              w="full"
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
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const customCursor: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tooltipProps={{
        cursor: {
          fill: ["primary.100", "primary.950"],
          stroke: ["secondary.300", "secondary.700"],
          strokeDasharray: "5 5",
          strokeWidth: 1,
        },
      }}
    />
  )
}

export const customLegend: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
