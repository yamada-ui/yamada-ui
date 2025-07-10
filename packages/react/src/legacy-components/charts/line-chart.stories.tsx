import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Dict } from "../../utils"
import type { ChartTooltip, LineProps } from "./"
import { useMemo } from "react"
import { Card, CardBody, CardHeader } from "../card"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { LineChart } from "./"

type Story = StoryFn<typeof LineChart>

const meta: Meta<typeof LineChart> = {
  component: LineChart,
  title: "Components / LineChart",
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const Basic: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return <LineChart data={data} dataKey="name" series={series} />
}

export const WithSize: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <>
      <LineChart size="sm" data={data} dataKey="name" series={series} />
      <LineChart size="md" data={data} dataKey="name" series={series} />
      <LineChart size="lg" data={data} dataKey="name" series={series} />
      <LineChart size="full" data={data} dataKey="name" series={series} />
    </>
  )
}

export const WithDash: Story = () => {
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
        color: ["primary.500", "primary.400"],
        dataKey: "uv",
        strokeDasharray: "5 5",
      },
    ],
    [],
  )

  return <LineChart data={data} dataKey="name" series={series} />
}

export const WithConnectNulls: Story = () => {
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
    () => [{ color: ["primary.500", "primary.400"], dataKey: "uv" }],
    [],
  )

  return (
    <LineChart
      type="default"
      connectNulls={false}
      data={data}
      dataKey="name"
      series={series}
    />
  )
}

export const WithSync: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <VStack>
      <LineChart data={data} dataKey="name" series={series} syncId="syncId" />
      <LineChart data={data} dataKey="name" series={series} syncId="syncId" />
    </VStack>
  )
}

export const WithReferenceLine: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      referenceLineProps={[
        { color: "red.500", label: "x line", y: 3000 },
        { label: "y line", x: "Page F" },
      ]}
    />
  )
}

export const WithLegend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return <LineChart data={data} dataKey="name" series={series} withLegend />
}

export const WithValueFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithXAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      xAxisTickFormatter={(value) => value.replace("Page", "Page:")}
    />
  )
}

export const WithYAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      yAxisTickFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithLabelFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      labelFormatter={(value) => value.replace("Page", "Page:")}
      series={series}
    />
  )
}

export const WithStrokeDasharray: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      gridAxis="xy"
      series={series}
      strokeDasharray="15 15"
    />
  )
}

export const WithUnit: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const WithAxisLabel: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      xAxisLabel="page"
      yAxisLabel="view"
    />
  )
}

export const CustomAxis: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
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

export const CustomTooltip: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
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
              <Text>{value.name}</Text>
              <Text color={value.color}>{value.value}</Text>
            </HStack>
          ))}
        </CardBody>
      </Card>
    )
  }

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const CustomDots: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "uv",
        dot: { fill: ["black", "white"] },
      },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )
  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      lineProps={{
        activeDot: {
          fill: ["white", "black"],
          r: 7,
          strokeWidth: 1,
        },
        dot: { r: 8 },
      }}
    />
  )
}

export const CustomLegend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: LineProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "uv" },
      { color: ["secondary.500", "secondary.400"], dataKey: "pv" },
      { color: ["warning.500", "warning.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <LineChart
      data={data}
      dataKey="name"
      series={series}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
