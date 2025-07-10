import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Dict } from "../../utils"
import type { ChartTooltip, RadarProps } from "./"
import { useMemo } from "react"
import { Card, CardBody, CardHeader } from "../card"
import { HStack } from "../stack"
import { Text } from "../text"
import { RadarChart } from "./"

type Story = StoryFn<typeof RadarChart>

const meta: Meta<typeof RadarChart> = {
  component: RadarChart,
  title: "Components / RadarChart",
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const Basic: Story = () => {
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

export const WithSize: Story = () => {
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

export const WithDash: Story = () => {
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

export const WithLegend: Story = () => {
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

export const WithValueFormatter: Story = () => {
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

export const WithPolarAngleAxisTickFormatter: Story = () => {
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

export const WithPolarRadiusAxisTickFormatter: Story = () => {
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

export const WithStrokeDasharray: Story = () => {
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

export const WithFillOpacity: Story = () => {
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

export const UseCircleGrid: Story = () => {
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

export const CustomDots: Story = () => {
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

export const CustomTooltip: Story = () => {
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

export const CustomLegend: Story = () => {
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

export const CustomPolarRadiusAxis: Story = () => {
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
