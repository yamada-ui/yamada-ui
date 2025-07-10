import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Dict } from "../../utils"
import type { ChartTooltip } from "./"
import { Card, CardBody } from "../card"
import { HStack } from "../stack"
import { Text } from "../text"
import { RadialChart } from "./"

type Story = StoryFn<typeof RadialChart>

const meta: Meta<typeof RadialChart> = {
  component: RadialChart,
  title: "Components / RadialChart",
}

export default meta

export const Basic: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} />
}

export const WithSize: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <>
      <RadialChart size="sm" data={data} />
      <RadialChart size="md" data={data} />
      <RadialChart size="lg" data={data} />
      <RadialChart size="full" data={data} />
    </>
  )
}

export const WithLegend: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} withLegend />
}

export const WithValueFormatter: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithLabelLists: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      endAngle={-225}
      innerRadius={50}
      labelListProps={[
        {
          dataKey: "name",
          position: "insideStart",
        },
        {
          dataKey: "value",
          position: "insideEnd",
        },
      ]}
    />
  )
}

export const WithGap: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      chartProps={{
        barCategoryGap: "10%",
        innerRadius: 30,
      }}
    />
  )
}

export const WithFillOpacity: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} fillOpacity={[0.8, 0.7]} />
}

export const UseCircleGrid: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      endAngle={-270}
      withPolarGrid
      polarGridProps={{ gridType: "circle" }}
    />
  )
}

export const CustomBackground: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      endAngle={-180}
      radialBarProps={{
        background: {
          fill: ["blackAlpha.200", "whiteAlpha.200"],
        },
      }}
    />
  )
}

export const CustomTooltip: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

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
              <Text>{value.payload.name}</Text>
              <Text color={value.payload.color}>{value.value}</Text>
            </HStack>
          ))}
        </CardBody>
      </Card>
    )
  }

  return (
    <RadialChart
      data={data}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const CustomLegend: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <RadialChart
      data={data}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
