import type { Meta, StoryFn } from "@storybook/react"
import type { RadialChartProps } from "@yamada-ui/charts"
import { RadialChart } from "@yamada-ui/charts"
import { Wrap } from "@yamada-ui/react"
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
    { visitors: 275, color: "blue.500" },
    { visitors: 200, color: "red.500" },
    { visitors: 187, color: "orange.500" },
    { visitors: 173, color: "violet.500" },
    { visitors: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="visitors"
      chartProps={{
        innerRadius: 30,
      }}
    />
  )
}

export const custom: Story = () => {
  const data = [
    { visitors: 275, color: "blue.500" },
    { visitors: 200, color: "red.500" },
    { visitors: 187, color: "orange.500" },
    { visitors: 173, color: "violet.500" },
    { visitors: 90, color: "green.500" },
  ]

  const [props, setProps] = useState<RadialChartProps>({
    data,
    dataKey: "visitors",
    startAngle: 90,
    endAngle: -270,
    fillOpacity: 1,
    innerRadius: 0,
    outerRadius: 80,
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
              min: -270,
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
          ]}
        />
      </Wrap>
    </Wrap>
  )
}

export const withLabelLists: Story = () => {
  const data = [
    { browser: "chrome", visitors: 275, color: "blue.500" },
    { browser: "safari", visitors: 200, color: "red.500" },
    { browser: "firefox", visitors: 187, color: "orange.500" },
    { browser: "edge", visitors: 173, color: "violet.500" },
    { browser: "other", visitors: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="visitors"
      chartProps={{
        innerRadius: 30,
      }}
      labelListProps={[
        {
          position: "insideStart",
          dataKey: "browser",
        },
      ]}
    />
  )
}

export const withGap: Story = () => {
  const data = [
    { visitors: 275, color: "blue.500" },
    { visitors: 200, color: "red.500" },
    { visitors: 187, color: "orange.500" },
    { visitors: 173, color: "violet.500" },
    { visitors: 90, color: "green.500" },
  ]

  const [barCategoryGap, setBarCategoryGap] = useState<number>(10)

  return (
    <Wrap gap="md" alignItems="flex-start">
      <RadialChart
        data={data}
        dataKey="visitors"
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
