import type { Meta, StoryFn } from "@storybook/react"
import type {
  ChartTooltip,
  RadarChartProps,
  RadarProps,
} from "@yamada-ui/charts"
import type { Dict } from "@yamada-ui/react"
import { RadarChart } from "@yamada-ui/charts"
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  Wrap,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { PropControl } from "../../components"

type Story = StoryFn<typeof RadarChart>

const meta: Meta<typeof RadarChart> = {
  component: RadarChart,
  title: "Components / Data Display / RadarChart",
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return <RadarChart data={data} dataKey="fruit" series={series} />
}

export const withSize: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <>
      <RadarChart size="sm" data={data} dataKey="fruit" series={series} />
      <RadarChart size="md" data={data} dataKey="fruit" series={series} />
      <RadarChart size="lg" data={data} dataKey="fruit" series={series} />
      <RadarChart size="full" data={data} dataKey="fruit" series={series} />
    </>
  )
}

export const withDash: Story = () => {
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
      sales: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "sales",
        strokeDasharray: "5 5",
      },
    ],
    [],
  )

  return <RadarChart data={data} dataKey="fruit" series={series} />
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  const [props, setProps] = useState<RadarChartProps>({
    data: data,
    dataKey: "fruit",
    fillOpacity: 0.4,
    series: series,
    tooltipAnimationDuration: 0,
    withActiveDots: false,
    withDots: false,
    withLegend: false,
    withPolarAngleAxis: true,
    withPolarGrid: true,
    withPolarRadiusAxis: false,
    withTooltip: true,
  })

  return (
    <Wrap alignItems="flex-start" gap="md">
      <RadarChart {...props} />

      <Wrap alignItems="flex-start" gap="md">
        <PropControl
          component="Slider"
          items={[
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

        <Wrap alignItems="flex-start" gap="md">
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
                isChecked: props.withPolarGrid,
                label: "polar grid",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withPolarGrid: !prev.withPolarGrid,
                  })),
              },
              {
                isChecked: props.withPolarAngleAxis,
                label: "polar angle axis",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withPolarAngleAxis: !prev.withPolarAngleAxis,
                  })),
              },
              {
                isChecked: props.withPolarRadiusAxis,
                label: "polar radius axis",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withPolarRadiusAxis: !prev.withPolarRadiusAxis,
                  })),
              },
            ]}
          />
          <PropControl
            component="Switch"
            items={[
              {
                isChecked: props.withDots,
                label: "dots",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withDots: !prev.withDots,
                  })),
              },
              {
                isChecked: props.withActiveDots,
                label: "active dots",
                onChange: () =>
                  setProps((prev) => ({
                    ...prev,
                    withActiveDots: !prev.withActiveDots,
                  })),
              },
            ]}
          />
        </Wrap>
      </Wrap>
    </Wrap>
  )
}

export const withLegend: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return <RadarChart data={data} dataKey="fruit" series={series} withLegend />
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      valueFormatter={(value) => value.toLocaleString()}
      withPolarRadiusAxis
    />
  )
}

export const withPolarAngleAxisTickFormatter: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      polarAngleAxisTickFormatter={(value) => String(value).toUpperCase()}
      series={series}
      withPolarRadiusAxis
    />
  )
}

export const withPolarRadiusAxisTickFormatter: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      polarRadiusAxisTickFormatter={(value) => value.toLocaleString()}
      series={series}
      withPolarRadiusAxis
    />
  )
}

export const withStrokeDasharray: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      strokeDasharray="15 15"
    />
  )
}

export const withFillOpacity: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      fillOpacity={[0.8, 0.7]}
      series={series}
    />
  )
}

export const useCircleGrid: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      polarGridProps={{ gridType: "circle" }}
    />
  )
}

export const customDots: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      withActiveDots
      withDots
      radarProps={{
        activeDot: {
          fill: ["white", "black"],
          r: 7,
          strokeWidth: 1,
        },
        dot: {
          r: 8,
        },
      }}
    />
  )
}

export const customTooltip: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
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
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const customLegend: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      series={series}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}

export const customPolarRadiusAxis: Story = () => {
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
      sales_february: randomValue(),
      sales_january: randomValue(),
    }))
  }, [])

  const series: RadarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "sales_january" },
      { color: ["secondary.500", "secondary.400"], dataKey: "sales_february" },
    ],
    [],
  )

  return (
    <RadarChart
      data={data}
      dataKey="fruit"
      polarRadiusAxisTickFormatter={(value) => `${value}yen`}
      series={series}
      withPolarRadiusAxis
      polarRadiusAxisProps={{ angle: 30 }}
    />
  )
}
