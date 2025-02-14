import type { Meta, StoryFn } from "@storybook/react"
import type { Dict } from "../../utils"
import type { BarProps, ChartTooltip } from "./"
import { useMemo } from "react"
import { Card, CardBody, CardHeader } from "../card"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { BarChart } from "./"

type Story = StoryFn<typeof BarChart>

const meta: Meta<typeof BarChart> = {
  component: BarChart,
  title: "Components / BarChart",
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const Basic: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const WithSize: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <>
      <BarChart size="sm" data={data} dataKey="month" series={series} />
      <BarChart size="md" data={data} dataKey="month" series={series} />
      <BarChart size="lg" data={data} dataKey="month" series={series} />
      <BarChart size="full" data={data} dataKey="month" series={series} />
    </>
  )
}

export const WithSync: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]

    return [
      months.map((month) => ({
        month,
        Smartphones: randomValue(),
      })),
      months.map((month) => ({
        Laptops: randomValue(),
        month,
      })),
    ]
  }, [])

  const series: BarProps[][] = useMemo(
    () => [
      [{ color: ["primary.500", "primary.400"], dataKey: "Smartphones" }],
      [{ color: ["secondary.500", "secondary.400"], dataKey: "Laptops" }],
    ],
    [],
  )

  return (
    <VStack>
      <BarChart
        data={data[0]!}
        dataKey="month"
        series={series[0]!}
        syncId="syncId"
      />
      <BarChart
        data={data[1]!}
        dataKey="month"
        series={series[1]!}
        syncId="syncId"
      />
    </VStack>
  )
}

export const WithReferenceLine: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      referenceLineProps={[
        { color: "red.500", label: "x line", y: 3000 },
        { label: "y line", x: "Page F" },
      ]}
    />
  )
}

export const WithLegend: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} withLegend />
}

export const WithValueFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithXAxisTickFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      xAxisTickFormatter={(value) => value.toUpperCase()}
    />
  )
}

export const WithYAxisTickFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      yAxisTickFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const WithLabelFormatter: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      labelFormatter={(value) => value.toLocaleString()}
      series={series}
    />
  )
}

export const WithStrokeDasharray: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      gridAxis="xy"
      series={series}
      strokeDasharray="15 15"
    />
  )
}

export const WithFillOpacity: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      fillOpacity={[0.8, 0.7]}
      series={series}
    />
  )
}

export const WithUnit: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const WithAxisLabel: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      xAxisLabel="date"
      yAxisLabel="view"
    />
  )
}

export const UseMixData: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["secondary.500", "secondary.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const WithGap: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["secondary.500", "secondary.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      chartProps={{
        barCategoryGap: 10,
        barGap: 4,
      }}
    />
  )
}

export const UseRangeData: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      month,
      Smartphones: [randomValue(), randomValue()],
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [{ color: ["primary.500", "primary.400"], dataKey: "Smartphones" }],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const CustomBar: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
        radius: [12, 12, 0, 0],
      },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const CustomBackground: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        background: {
          fill: ["blackAlpha.300", "whiteAlpha.300"],
          radius: 10,
          stroke: ["blackAlpha.500", "whiteAlpha.500"],
          strokeWidth: 1,
        },
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
      },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const CustomAxis: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tickLine="xy"
      xAxisProps={{
        color: ["red.500", "red.500"],
        orientation: "top",
        padding: { left: 30, right: 30 },
        tickMargin: 15,
      }}
      yAxisProps={{ domain: [0, 15000], orientation: "right", tickMargin: 15 }}
    />
  )
}

export const CustomActiveBar: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      month,
      Smartphones: randomValue(),
    }))
  }, [])

  const series: BarProps[] = useMemo(
    () => [
      {
        activeBar: {
          fill: ["secondary.500", "secondary.400"],
          stroke: ["secondary.500", "secondary.400"],
        },
        color: ["primary.500", "primary.400"],
        dataKey: "Smartphones",
      },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const CustomTooltip: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
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
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const CustomCursor: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      tooltipProps={{
        cursor: {
          fill: ["primary.100", "primary.950"],
          stroke: ["secondary.300", "secondary.700"],
          strokeDasharray: "5 5",
          strokeWidth: 1,
        },
      }}
    />
  )
}

export const CustomLegend: Story = () => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue(),
    }))
  }, [])
  const series: BarProps[] = useMemo(
    () => [
      { color: ["primary.500", "primary.400"], dataKey: "Smartphones" },
      { color: ["secondary.500", "secondary.400"], dataKey: "Laptops" },
      { color: ["warning.500", "warning.400"], dataKey: "Tablets" },
    ],
    [],
  )

  return (
    <BarChart
      data={data}
      dataKey="month"
      series={series}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
