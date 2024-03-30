import type { Meta, StoryFn } from "@storybook/react"
import type {
  CellProps,
  DonutChartProps,
  TooltipDataSourceType,
} from "@yamada-ui/charts"
import { DonutChart } from "@yamada-ui/charts"
import { VStack, Wrap } from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof DonutChart>

const meta: Meta<typeof DonutChart> = {
  title: "Components / Feedback / DonutChart",
  component: DonutChart,
}

export default meta

export const basic: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", value: 400, color: "red.500" },
      { name: "India", value: 300, color: "orange.500" },
      { name: "Japan", value: 100, color: "blue.500" },
      { name: "Other", value: 200, color: "gray.500" },
    ],
    [],
  )

  return <DonutChart data={data} />
}

export const custom: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", value: 400, color: "red.500" },
      { name: "India", value: 300, color: "orange.500" },
      { name: "Japan", value: 100, color: "blue.500" },
      { name: "Other", value: 200, color: "gray.500" },
    ],
    [],
  )

  const [props, setProps] = useState<DonutChartProps>({
    data: data,
    withTooltip: true,
    fillOpacity: 1,
    paddingAngle: 0,
    startAngle: 0,
    endAngle: 360,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    innerRadius: 60,
    outerRadius: 80,
    tooltipDataSource: "all",
  })

  return (
    <Wrap gap="md" alignItems="flex-start">
      <DonutChart {...props} />

      <Wrap gap="md" alignItems="flex-start">
        <PropControl
          component="Slider"
          items={[
            {
              label: "Padding angle",
              value: props.paddingAngle,
              min: 0,
              max: 30,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, paddingAngle: value }))
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
              label: "Start angle",
              value: props.startAngle,
              min: 0,
              max: 180,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, startAngle: value }))
              },
            },
            {
              label: "End angle",
              value: props.endAngle,
              min: 180,
              max: 360,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, endAngle: value }))
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
            component="Slider"
            items={[
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
                min: 80,
                max: 180,
                onChange: (value) => {
                  setProps((prev) => ({
                    ...prev,
                    outerRadius: value,
                  }))
                },
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

          <PropControl
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
                label: "label",
                isChecked: props.withLabel,
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withLabel: !prev.withLabel,
                  })),
              },
              {
                label: "label line",
                isChecked: props.withLabelsLine,
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withLabelsLine: !prev.withLabelsLine,
                  })),
              },
            ]}
          />
        </VStack>
      </Wrap>
    </Wrap>
  )
}

export const withSize: Story = () => {
  const data: CellProps[] = useMemo(
    () => [
      { name: "USA", value: 400, color: "red.500" },
      { name: "India", value: 300, color: "orange.500" },
      { name: "Japan", value: 100, color: "blue.500" },
      { name: "Other", value: 200, color: "gray.500" },
    ],
    [],
  )

  return (
    <>
      <DonutChart data={data} size="sm" />
      <DonutChart data={data} size="md" />
      <DonutChart data={data} size="lg" />
      <DonutChart data={data} size="full" />
    </>
  )
}
