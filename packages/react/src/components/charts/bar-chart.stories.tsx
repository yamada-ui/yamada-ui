import type { Meta, StoryFn } from "@storybook/react"
import type { Dict } from "../../utils"
import type { BarProps, ChartTooltip } from "./"
import { useMemo } from "react"
import { Card } from "../card"
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

// export const custom: Story = () => {
//   const data = useMemo(() => {
//     const months = ["January", "February", "March", "April", "May", "June"]
//     return months.map((month) => ({
//       Laptops: randomValue(),
//       month,
//       Smartphones: randomValue(),
//       Tablets: randomValue(),
//     }))
//   }, [])

//   const series: BarProps[] = useMemo(
//     () => [
//       { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
//       { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
//       { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
//     ],
//     [],
//   )
//   const [props, setProps] = useState<BarChartProps>({
//     type: "default",
//     data: data,
//     dataKey: "month",
//     fillOpacity: 1,
//     gridAxis: "x",
//     layoutType: "horizontal",
//     series: series,
//     strokeDasharray: "5 5",
//     strokeWidth: 2,
//     tickLine: "y",
//     tooltipAnimationDuration: 0,
//     withLegend: false,
//     withTooltip: true,
//     withXAxis: true,
//     withYAxis: true,
//   })

//   return (
//     <Wrap alignItems="flex-start" gap="md">
//       <BarChart {...props} />

//       <Wrap gap="md">
//         <VStack w="auto">
//           <PropControl
//             component="Select"
//             items={[
//               {
//                 defaultValue: "default",
//                 items: [
//                   { label: "default", value: "default" },
//                   { label: "stacked", value: "stacked" },
//                   { label: "percent", value: "percent" },
//                 ],
//                 label: "Chart type",
//                 value: props.type,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     type: value as BarChartType,
//                   }))
//                 },
//               },
//               {
//                 defaultValue: "horizontal",
//                 items: [
//                   { label: "horizontal", value: "horizontal" },
//                   { label: "vertical", value: "vertical" },
//                 ],
//                 label: "Layout type",
//                 value: props.layoutType,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     layoutType: value as ChartLayoutType,
//                   }))
//                 },
//               },
//             ]}
//           />

//           <PropControl
//             component="SegmentedControl"
//             items={[
//               {
//                 items: [
//                   { label: "x", value: "x" },
//                   { label: "y", value: "y" },
//                   { label: "xy", value: "xy" },
//                   { label: "none", value: "none" },
//                 ],
//                 label: "Tick line",
//                 value: props.tickLine,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     tickLine: value as ChartAxisType,
//                   }))
//                 },
//               },
//               {
//                 items: [
//                   { label: "x", value: "x" },
//                   { label: "y", value: "y" },
//                   { label: "xy", value: "xy" },
//                   { label: "none", value: "none" },
//                 ],
//                 label: "Grid axis",
//                 value: props.gridAxis,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     gridAxis: value as ChartAxisType,
//                   }))
//                 },
//               },
//             ]}
//           />
//         </VStack>

//         <VStack w="auto">
//           <PropControl
//             component="Slider"
//             items={[
//               {
//                 label: "Fill opacity",
//                 max: 1,
//                 min: 0,
//                 step: 0.1,
//                 value: props.fillOpacity as number,
//                 onChange: (value) => {
//                   setProps((prev) => ({ ...prev, fillOpacity: value }))
//                 },
//               },
//               {
//                 label: "Tooltip animation duration",
//                 max: 2000,
//                 min: 0,
//                 value: props.tooltipAnimationDuration,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     tooltipAnimationDuration: value,
//                   }))
//                 },
//               },
//             ]}
//           />

//           <Wrap alignItems="flex-start" gap="md">
//             <PropControl
//               component="Switch"
//               items={[
//                 {
//                   isChecked: props.withXAxis,
//                   label: "x axis",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withXAxis: !prev.withXAxis,
//                     })),
//                 },
//                 {
//                   isChecked: props.withYAxis,
//                   label: "y axis",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withYAxis: !prev.withYAxis,
//                     })),
//                 },
//                 {
//                   isChecked: props.withLegend,
//                   label: "legend",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withLegend: !prev.withLegend,
//                     })),
//                 },
//                 {
//                   isChecked: props.withTooltip,
//                   label: "tooltip",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withTooltip: !prev.withTooltip,
//                     })),
//                 },
//               ]}
//             />
//           </Wrap>
//         </VStack>
//       </Wrap>
//     </Wrap>
//   )
// }

export const Size: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const Sync: Story = () => {
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
      [{ color: ["blue.500", "blue.400"], dataKey: "Smartphones" }],
      [{ color: ["violet.500", "violet.400"], dataKey: "Laptops" }],
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

export const ReferenceLine: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const Legend: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} withLegend />
}

export const ValueFormatter: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const XAxisTickFormatter: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const YAxisTickFormatter: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const LabelFormatter: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const StrokeDasharray: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const FillOpacity: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const Unit: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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

export const AxisLabel: Story = () => {
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
        color: ["blue.500", "blue.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["violet.500", "violet.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
    ],
    [],
  )
  return <BarChart data={data} dataKey="month" series={series} />
}

export const Gap: Story = () => {
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
        color: ["blue.500", "blue.400"],
        dataKey: "Smartphones",
        stackId: "a",
      },
      {
        color: ["violet.500", "violet.400"],
        dataKey: "Laptops",
        stackId: "a",
      },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
    () => [{ color: ["blue.500", "blue.400"], dataKey: "Smartphones" }],
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
        color: ["blue.500", "blue.400"],
        dataKey: "Smartphones",
        radius: [12, 12, 0, 0],
      },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
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
        color: ["blue.500", "blue.400"],
        dataKey: "Smartphones",
      },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
          fill: ["violet.500", "violet.400"],
          stroke: ["violet.500", "violet.400"],
        },
        color: ["blue.500", "blue.400"],
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
      <Card.Root colorScheme="gray" variant="subtle">
        <Card.Header>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </Card.Header>

        <Card.Body gap="sm">
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
        </Card.Body>
      </Card.Root>
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
          fill: ["blue.100", "blue.950"],
          stroke: ["violet.300", "violet.700"],
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
      { color: ["blue.500", "blue.400"], dataKey: "Smartphones" },
      { color: ["violet.500", "violet.400"], dataKey: "Laptops" },
      { color: ["orange.500", "orange.400"], dataKey: "Tablets" },
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
