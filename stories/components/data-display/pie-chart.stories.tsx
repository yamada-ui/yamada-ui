import type { Meta, StoryFn } from "@storybook/react"
import type {
  CellProps,
  ChartTooltip,
  PieChartProps,
  TooltipDataSourceType,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { PieChart } from "@yamada-ui/charts"
import { Card, CardBody, HStack, Text, VStack, Wrap } from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof PieChart>

const meta: Meta<typeof PieChart> = {
  component: PieChart,
  title: "Components / Data Display / PieChart",
}

export default meta

export const basic: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <PieChart data={data} />
}

export const custom: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  const [props, setProps] = useState<PieChartProps>({
    data: data,
    endAngle: -270,
    fillOpacity: 1,
    outerRadius: 80,
    paddingAngle: 0,
    startAngle: 90,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    tooltipDataSource: "all",
    withLegend: false,
    withTooltip: true,
  })
  const { outerRadius, ...rest } = props

  return (
    <VStack>
      <PieChart outerRadius={`${outerRadius}%`} {...rest} />

      <Wrap alignItems="flex-start" gap="md">
        <PropControl
          component="Slider"
          items={[
            {
              label: "Padding angle",
              max: 30,
              min: 0,
              step: 1,
              value: props.paddingAngle,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, paddingAngle: value }))
              },
            },
            {
              label: "Stroke width",
              max: 5,
              min: 0.5,
              step: 0.5,
              value: props.strokeWidth,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, strokeWidth: value }))
              },
            },
            {
              label: "Start angle",
              max: 180,
              min: 0,
              step: 1,
              value: props.startAngle,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, startAngle: value }))
              },
            },
            {
              label: "End angle",
              max: 360,
              min: 180,
              step: 1,
              value: props.endAngle,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, endAngle: value }))
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
        />

        <VStack w="auto">
          <PropControl
            component="Slider"
            items={[
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
                label: "Label Offset",
                max: 100,
                min: 0,
                value: props.labelOffset as number,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    labelOffset: value,
                  }))
                },
              },
            ]}
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

          <PropControl
            component="Switch"
            items={[
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
              {
                isChecked: props.withLabels,
                label: "label",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withLabels: !prev.withLabels,
                  })),
              },
              {
                isChecked: props.withLabelLines,
                label: "label line",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withLabelLines: !prev.withLabelLines,
                  })),
              },
              {
                isChecked: props.percent,
                label: "percent",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    percent: !prev.percent,
                  })),
              },
            ]}
          />
        </VStack>
      </Wrap>
    </VStack>
  )
}

export const withSize: Story = () => {
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
      <PieChart size="sm" data={data} />
      <PieChart size="md" data={data} />
      <PieChart size="lg" data={data} />
    </>
  )
}

export const withLegend: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <PieChart data={data} withLegend />
}

export const withValueFormatter: Story = () => {
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
    <PieChart data={data} valueFormatter={(value) => value.toLocaleString()} />
  )
}

export const withLabelFormatter: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 4000 },
      { name: "India", color: "orange.500", value: 3000 },
      { name: "Japan", color: "blue.500", value: 1000 },
      { name: "Other", color: "gray.500", value: 2000 },
    ],
    [],
  )

  return (
    <PieChart
      size="lg"
      data={data}
      labelFormatter={(value) => value.toLocaleString()}
      withLabels
    />
  )
}

export const withFillOpacity: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", color: "red.500", value: 400 },
      { name: "India", color: "orange.500", value: 300 },
      { name: "Japan", color: "blue.500", value: 100 },
      { name: "Other", color: "gray.500", value: 200 },
    ],
    [],
  )

  return <PieChart data={data} fillOpacity={[0.8, 0.7]} />
}

export const customActiveShape: Story = () => {
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
    <PieChart
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

export const customTooltip: Story = () => {
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
    <PieChart
      data={data}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const customLegend: Story = () => {
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
    <PieChart
      data={data}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
