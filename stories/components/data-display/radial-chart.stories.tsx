import type { Meta, StoryFn } from "@storybook/react"
import type {
  ChartTooltip,
  RadialChartProps,
  TooltipDataSourceType,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { RadialChart } from "@yamada-ui/charts"
import { Card, CardBody, HStack, Text, VStack, Wrap } from "@yamada-ui/react"
import { useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof RadialChart>

const meta: Meta<typeof RadialChart> = {
  component: RadialChart,
  title: "Components / Data Display / RadialChart",
}

export default meta

export const basic: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} />
}

export const withSize: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return (
    <>
      <RadialChart data={data} size="sm" />
      <RadialChart data={data} size="md" />
      <RadialChart data={data} size="lg" />
      <RadialChart data={data} size="full" />
    </>
  )
}

export const withLegend: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} withLegend />
}

export const withValueFormatter: Story = () => {
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

export const custom: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  const [props, setProps] = useState<RadialChartProps>({
    data,
    dataKey: "value",
    endAngle: -180,
    fillOpacity: 1,
    innerRadius: 10,
    outerRadius: 80,
    startAngle: 90,
    tooltipAnimationDuration: 0,
    tooltipDataSource: "all",
    withLegend: false,
    withPolarGrid: false,
    withTooltip: true,
  })
  const { innerRadius, outerRadius, ...rest } = props

  return (
    <Wrap alignItems="flex-start" gap="md">
      <RadialChart
        innerRadius={`${innerRadius}%`}
        outerRadius={`${outerRadius}%`}
        {...rest}
      />

      <Wrap gap="md">
        <PropControl
          component="Slider"
          items={[
            {
              label: "Start angle",
              max: 180,
              min: -180,
              step: 1,
              value: props.startAngle,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, startAngle: value }))
              },
            },
            {
              label: "End angle",
              max: 360,
              min: -360,
              step: 1,
              value: props.endAngle,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, endAngle: value }))
              },
            },
            {
              label: "Inner Radius",
              max: 100,
              min: 0,
              value: props.innerRadius as number,
              onChange: (value) => {
                setProps((prev) => ({
                  ...prev,
                  innerRadius: value,
                }))
              },
            },
            {
              label: "Outer Radius",
              max: 100,
              min: 0,
              value: props.outerRadius as number,
              onChange: (value) => {
                setProps((prev) => ({
                  ...prev,
                  outerRadius: value,
                }))
              },
            },
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
          minW="xs"
        />

        <VStack w="auto">
          <PropControl
            component="Switch"
            items={[
              {
                isChecked: props.withPolarGrid,
                label: "polar grid",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withPolarGrid: !prev.withPolarGrid,
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
              {
                isChecked: props.withLegend,
                label: "legend",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withLegend: !prev.withLegend,
                  })),
              },
            ]}
            minW="xs"
          />

          <PropControl
            component="Select"
            items={[
              {
                defaultValue: "all",
                items: [
                  { label: "all", value: "all" },
                  { label: "segment", value: "segment" },
                ],
                label: "Tooltip data source",
                value: props.tooltipDataSource,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    tooltipDataSource: value as TooltipDataSourceType,
                  }))
                },
              },
            ]}
          />
        </VStack>
      </Wrap>
    </Wrap>
  )
}

export const withLabelLists: Story = () => {
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

export const withGap: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  const [barCategoryGap, setBarCategoryGap] = useState<number>(10)

  return (
    <Wrap alignItems="flex-start" gap="md">
      <RadialChart
        data={data}
        chartProps={{
          barCategoryGap: `${barCategoryGap}%`,
          innerRadius: 30,
        }}
      />

      <PropControl
        component="Slider"
        items={[
          {
            label: "Bar Category Gap",
            max: 100,
            min: 0,
            step: 1,
            value: barCategoryGap,
            onChange: (value) => {
              setBarCategoryGap(value)
            },
          },
        ]}
        minW="xs"
      />
    </Wrap>
  )
}

export const withFillOpacity: Story = () => {
  const data = [
    { name: "chrome", color: "blue.500", value: 275 },
    { name: "safari", color: "red.500", value: 200 },
    { name: "firefox", color: "orange.500", value: 187 },
    { name: "edge", color: "violet.500", value: 173 },
    { name: "other", color: "green.500", value: 90 },
  ]

  return <RadialChart data={data} fillOpacity={[0.8, 0.7]} />
}

export const useCircleGrid: Story = () => {
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

export const customBackground: Story = () => {
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

export const customTooltip: Story = () => {
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

export const customLegend: Story = () => {
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
