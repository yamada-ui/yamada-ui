import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Dict } from "../../utils"
import type { CellProps, ChartTooltip } from "./"
import { useMemo } from "react"
import { Card, CardBody } from "../card"
import { HStack } from "../stack"
import { Text } from "../text"
import { DonutChart } from "./"

type Story = StoryFn<typeof DonutChart>

const meta: Meta<typeof DonutChart> = {
  component: DonutChart,
  title: "Components / DonutChart",
}

export default meta

export const Basic: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <DonutChart data={data} />
}

export const WithSize: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <>
      <DonutChart size="sm" data={data} />
      <DonutChart size="md" data={data} />
      <DonutChart size="lg" data={data} />
    </>
  )
}

export const WithLegend: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <DonutChart data={data} withLegend />
}

export const WithValueFormatter: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <DonutChart
      data={data}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithLabelFormatter: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <DonutChart
      data={data}
      labelFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithFillOpacity: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <DonutChart data={data} fillOpacity={[0.8, 0.7]} />
}

export const CustomActiveShape: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <DonutChart
      data={data}
      pieProps={{
        activeShape: {
          stroke: ["black", "white"],
          strokeWidth: 2,
        },
        inactiveShape: { opacity: 0.5 },
      }}
    />
  )
}

export const CustomTooltip: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  const CustomTooltip: ChartTooltip = (props: { payload?: Dict[] }) => {
    const { payload } = props
    if (!payload) return null

    return (
      <Card colorScheme="gray" variant="subtle">
        <CardBody gap="sm">
          {payload.map((value, index) => (
            <HStack
              key={`payload-${index}`}
              justifyContent="space-between"
              w="full"
            >
              <Text>{value.name}</Text>
              <Text color={value.payload.color}>{value.value}</Text>
            </HStack>
          ))}
        </CardBody>
      </Card>
    )
  }

  return (
    <DonutChart
      data={data}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const CustomLegend: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <DonutChart
      data={data}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}

export const CustomLabel: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return (
    <DonutChart
      data={data}
      labelProps={{
        fill: ["black", "white"],
        fontSize: "md",
        fontWeight: "bold",
        position: "center",
        value: "DonutChart",
      }}
    />
  )
}
