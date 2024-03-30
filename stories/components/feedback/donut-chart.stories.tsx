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
    thickness: 20,
    paddingAngle: 0,
    startAngle: 0,
    endAngle: 360,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
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
              label: "Thickness",
              value: props.thickness,
              min: 1,
              max: 50,
              step: 1,
              onChange: (value) => {
                setProps((prev) => ({ ...prev, thickness: value }))
              },
            },
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
            ]}
          />
        </VStack>
      </Wrap>
    </Wrap>
  )
}
