import type { Meta, StoryFn } from "@storybook/react"
import type { RadarChartProps, RadarProps } from "@yamada-ui/charts"
import { RadarChart } from "@yamada-ui/charts"
import { Wrap } from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof RadarChart>

const meta: Meta<typeof RadarChart> = {
  title: "Components / Feedback / RadarChart",
  component: RadarChart,
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const basic: Story = () => {
  const data = useMemo(() => {
    const fruit = [
      "Apples",
      "Oranges",
      "Tomatoes",
      "Grapes",
      "Bananas",
      "Lemons",
    ]
    return fruit.map((fruit) => ({
      fruit,
      salse_january: randomValue(),
      salse_february: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { dataKey: "salse_january", color: ["primary.500", "primary.400"] },
      { dataKey: "salse_february", color: ["secondary.500", "secondary.400"] },
    ],
    [],
  )

  return <RadarChart data={data} series={series} dataKey="fruit" />
}

export const custom: Story = () => {
  const data = useMemo(() => {
    const fruit = [
      "Apples",
      "Oranges",
      "Tomatoes",
      "Grapes",
      "Bananas",
      "Lemons",
    ]
    return fruit.map((fruit) => ({
      fruit,
      salse: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [{ dataKey: "salse", color: ["primary.500", "primary.400"] }],
    [],
  )

  const [props, setProps] = useState<RadarChartProps>({
    data: data,
    series: series,
    dataKey: "fruit",
    withTooltip: true,
    withPolarGrid: true,
    withPolarAngleAxis: true,
    withPolarRadiusAxis: false,
  })

  return (
    <Wrap gap="md" alignItems="flex-start">
      <RadarChart {...props} />

      <Wrap gap="md">
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
              label: "polar grid",
              isChecked: props.withPolarGrid,
              onChange: () =>
                setProps((prev) => ({
                  ...prev,
                  withPolarGrid: !prev.withPolarGrid,
                })),
            },
            {
              label: "polar angle axis",
              isChecked: props.withPolarAngleAxis,
              onChange: () =>
                setProps((prev) => ({
                  ...prev,
                  withPolarAngleAxis: !prev.withPolarAngleAxis,
                })),
            },
            {
              label: "polar radius axis",
              isChecked: props.withPolarRadiusAxis,
              onChange: () =>
                setProps((prev) => ({
                  ...prev,
                  withPolarRadiusAxis: !prev.withPolarRadiusAxis,
                })),
            },
          ]}
        />
      </Wrap>
    </Wrap>
  )
}

export const withValueFormatter: Story = () => {
  const data = useMemo(() => {
    const fruit = [
      "Apples",
      "Oranges",
      "Tomatoes",
      "Grapes",
      "Bananas",
      "Lemons",
    ]
    return fruit.map((fruit) => ({
      fruit,
      salse_january: randomValue(),
      salse_february: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { dataKey: "salse_january", color: ["primary.500", "primary.400"] },
      { dataKey: "salse_february", color: ["secondary.500", "secondary.400"] },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      series={series}
      dataKey="fruit"
      withPolarRadiusAxis
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}
