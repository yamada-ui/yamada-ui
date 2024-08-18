import type { Meta, StoryFn } from "@storybook/react"
import type {
  ChartTooltip,
  RadialChartProps,
  TooltipDataSourceType,
} from "@yamada-ui/charts"
import { RadialChart } from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { Card, CardBody, HStack, VStack, Wrap, Text } from "@yamada-ui/react"
import { useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof RadialChart>

const meta: Meta<typeof RadialChart> = {
  title: "Components / Data Display / RadialChart",
  component: RadialChart,
}

export default meta

export const basic: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
    />
  )
}

export const custom: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  const [props, setProps] = useState<RadialChartProps>({
    data,
    dataKey: "value",
    startAngle: 180,
    endAngle: 0,
    fillOpacity: 1,
    innerRadius: 0,
    outerRadius: 80,
    tooltipAnimationDuration: 0,
    withTooltip: true,
    withLegend: false,
    tooltipDataSource: "all",
  })
  const { innerRadius, outerRadius, ...rest } = props

  return (
    <Wrap gap="md" alignItems="flex-start">
      <RadialChart
        innerRadius={`${innerRadius}%`}
        outerRadius={`${outerRadius}%`}
        {...rest}
      />

      <Wrap gap="md">
        <PropControl
          minW="xs"
          component="Slider"
          items={[
            {
              label: "Start angle",
              value: props.startAngle,
              min: -180,
              max: 180,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, startAngle: value }))
              },
            },
            {
              label: "End angle",
              value: props.endAngle,
              min: 0,
              max: 360,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, endAngle: value }))
              },
            },
            {
              label: "Inner Radius",
              value: props.innerRadius as number,
              min: 0,
              max: 100,
              onChange: (value) => {
                setProps((prev) => ({
                  ...prev,
                  innerRadius: value,
                }))
              },
            },
            {
              label: "Outer Radius",
              value: props.outerRadius as number,
              min: 0,
              max: 100,
              onChange: (value) => {
                setProps((prev) => ({
                  ...prev,
                  outerRadius: value,
                }))
              },
            },
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

        <VStack w="auto">
          <PropControl
            minW="xs"
            component="Switch"
            items={[
              {
                label: "tooltip",
                isChecked: props.withTooltip,
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withTooltip: !prev.withTooltip,
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
            ]}
          />

          <PropControl
            component="Select"
            items={[
              {
                label: "Tooltip data source",
                defaultValue: "all",
                items: [
                  { label: "all", value: "all" },
                  { label: "segment", value: "segment" },
                ],
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
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
      labelListProps={[
        {
          position: "insideStart",
          dataKey: "name",
        },
      ]}
    />
  )
}

export const withGap: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  const [barCategoryGap, setBarCategoryGap] = useState<number>(10)

  return (
    <Wrap gap="md" alignItems="flex-start">
      <RadialChart
        data={data}
        dataKey="value"
        chartProps={{
          innerRadius: 30,
          barCategoryGap: `${barCategoryGap}%`,
        }}
      />

      <PropControl
        minW="xs"
        component="Slider"
        items={[
          {
            label: "Bar Category Gap",
            value: barCategoryGap,
            min: 0,
            max: 100,
            step: 1,
            onChange: (value) => {
              setBarCategoryGap(value)
            },
          },
        ]}
      />
    </Wrap>
  )
}

export const withFillOpacity: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
      fillOpacity={[0.8, 0.7]}
    />
  )
}

export const customBackground: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
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
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  const CustomTooltip: ChartTooltip = (props: { payload?: Dict[] }) => {
    const { payload } = props
    if (!payload) return null

    return (
      <Card variant="subtle" colorScheme="gray">
        <CardBody gap="sm">
          {payload.map((value, index) => (
            <HStack
              key={`payload-${index}`}
              w="full"
              justifyContent="space-between"
            >
              <Text>{value?.payload.name}</Text>
              <Text color={value?.payload?.color}>{value?.value}</Text>
            </HStack>
          ))}
        </CardBody>
      </Card>
    )
  }

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const customLegend: Story = () => {
  const data = [
    { name: "chrome", value: 275, color: "blue.500" },
    { name: "safari", value: 200, color: "red.500" },
    { name: "firefox", value: 187, color: "orange.500" },
    { name: "edge", value: 173, color: "violet.500" },
    { name: "other", value: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="value"
      chartProps={{
        innerRadius: 30,
      }}
      withLegend
      legendProps={{ verticalAlign: "bottom", mb: "0", mt: "4" }}
    />
  )
}
