import type { Meta, StoryFn } from "@storybook/react"
import type { Dict } from "../../utils"
import type { AreaProps, ChartTooltip } from "./"
import { useMemo } from "react"
import { Card } from "../card"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { AreaChart } from "./"

type Story = StoryFn<typeof AreaChart>

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  title: "Components / AreaChart",
}

export default meta

const randomValue = () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

export const Basic: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return <AreaChart data={data} dataKey="name" series={series} />
}

// export const custom: Story = () => {
//   const data = useMemo(
//     () =>
//       Array(7)
//         .fill(0)
//         .map((_, index) => ({
//           name: `Page ${index}`,
//           amt: randomValue(),
//           pv: randomValue(),
//           uv: randomValue(),
//         })),
//     [],
//   )

//   const series: AreaProps[] = useMemo(
//     () => [
//       { color: ["blue.500", "blue.400"], dataKey: "uv" },
//       { color: ["violet.500", "violet.400"], dataKey: "pv" },
//       { color: ["orange.500", "orange.400"], dataKey: "amt" },
//     ],
//     [],
//   )

//   const [props, setProps] = useState<AreaChartProps>({
//     type: "default",
//     connectNulls: true,
//     curveType: "monotone",
//     data: data,
//     dataKey: "name",
//     fillOpacity: 0.4,
//     gridAxis: "x",
//     layoutType: "horizontal",
//     series: series,
//     splitColors: ["#28412c", "#ff0000"],
//     strokeDasharray: "5 5",
//     strokeWidth: 2,
//     tickLine: "y",
//     tooltipAnimationDuration: 0,
//     withActiveDots: true,
//     withDots: true,
//     withLegend: false,
//     withTooltip: true,
//     withXAxis: true,
//     withYAxis: true,
//     chartProps: {
//       margin: {
//         bottom: 5,
//         left: 20,
//         right: 30,
//         top: 20,
//       },
//     },
//   })

//   return (
//     <Wrap alignItems="flex-start" gap="md">
//       <AreaChart {...props} />

//       <Wrap gap="md">
//         <VStack w="auto">
//           <PropControl
//             component="Select"
//             items={[
//               {
//                 defaultValue: "default",
//                 items: [
//                   { label: "default", value: "default" },
//                   { label: "split", value: "split" },
//                   { label: "stacked", value: "stacked" },
//                   { label: "percent", value: "percent" },
//                 ],
//                 label: "Chart type",
//                 value: props.type,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     type: value as AreaChartType,
//                   }))
//                 },
//               },
//               {
//                 defaultValue: "monotone",
//                 items: [
//                   { label: "monotone", value: "monotone" },
//                   { label: "bump", value: "bump" },
//                   { label: "linear", value: "linear" },
//                   { label: "natural", value: "natural" },
//                   { label: "step", value: "step" },
//                   { label: "stepBefore", value: "stepBefore" },
//                   { label: "stepAfter", value: "stepAfter" },
//                 ],
//                 label: "Curve type",
//                 value: props.curveType,
//                 onChange: (value) => {
//                   setProps((prev) => ({
//                     ...prev,
//                     curveType: value as ChartCurveType,
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
//                 label: "Stroke width",
//                 max: 5,
//                 min: 0.5,
//                 step: 0.5,
//                 value: props.strokeWidth,
//                 onChange: (value) => {
//                   setProps((prev) => ({ ...prev, strokeWidth: value }))
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

//             <PropControl
//               component="Switch"
//               items={[
//                 {
//                   isChecked: props.withDots,
//                   label: "dots",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withDots: !prev.withDots,
//                     })),
//                 },
//                 {
//                   isChecked: props.withActiveDots,
//                   label: "active dots",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withActiveDots: !prev.withActiveDots,
//                     })),
//                 },
//                 {
//                   isChecked:
//                     typeof props.withGradient === "boolean"
//                       ? props.withGradient
//                       : props.type === "default",
//                   label: "gradient",
//                   onChange: () =>
//                     setProps((prev) => ({
//                       ...prev,
//                       withGradient: !prev.withGradient,
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
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <>
      <AreaChart size="sm" data={data} dataKey="name" series={series} />
      <AreaChart size="md" data={data} dataKey="name" series={series} />
      <AreaChart size="lg" data={data} dataKey="name" series={series} />
      <AreaChart size="full" data={data} dataKey="name" series={series} />
    </>
  )
}

export const Dash: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      {
        color: ["blue.500", "blue.400"],
        dataKey: "uv",
        strokeDasharray: "5 5",
      },
    ],
    [],
  )

  return <AreaChart data={data} dataKey="name" series={series} />
}

// export const Split: Story = () => {
//   const data = useMemo(
//     () =>
//       Array(7)
//         .fill(0)
//         .map((_, index) => ({
//           name: `Page ${index}`,
//           uv: Math.floor(Math.random() * (5000 - -5000 + 1)) + -5000,
//         })),
//     [],
//   )

//   const series: AreaProps[] = useMemo(
//     () => [{ color: ["blue.500", "blue.400"], dataKey: "uv" }],
//     [],
//   )

//   const [splitOffset, setSplitOffset] = useState<number | undefined>()
//   const [open, { off, on }] = useBoolean()

//   return (
//     <VStack>
//       <FormControl label="Split offset" w="xs">
//         <Slider
//           max={100}
//           min={0}
//           value={splitOffset !== undefined ? splitOffset * 100 : 0}
//           onChange={(value) => {
//             setSplitOffset(value / 100)
//           }}
//           onMouseEnter={on}
//           onMouseLeave={off}
//         >
//           <Tooltip label={splitOffset} open={open} placement="top">
//             <SliderThumb />
//           </Tooltip>
//         </Slider>
//       </FormControl>

//       <AreaChart
//         type="split"
//         data={data}
//         dataKey="name"
//         height="sm"
//         series={series}
//         splitColors={["red.400", "green.400"]}
//         splitOffset={splitOffset}
//       />
//     </VStack>
//   )
// }

export const ConnectNulls: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: index !== 4 ? randomValue() : null,
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [{ color: ["blue.500", "blue.400"], dataKey: "uv" }],
    [],
  )

  return (
    <AreaChart
      type="default"
      connectNulls={false}
      data={data}
      dataKey="name"
      series={series}
    />
  )
}

export const Sync: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <VStack>
      <AreaChart data={data} dataKey="name" series={series} syncId="syncId" />
      <AreaChart data={data} dataKey="name" series={series} syncId="syncId" />
    </VStack>
  )
}

export const ReferenceLine: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      referenceLineProps={[
        { color: "red.500", label: "x line", y: 3000 },
        { label: "y line", x: "Page F" },
      ]}
    />
  )
}

export const Legend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return <AreaChart data={data} dataKey="name" series={series} withLegend />
}

export const ValueFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      valueFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const XAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      xAxisTickFormatter={(value) => value.replace("Page", "Page:")}
    />
  )
}

export const YAxisTickFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      yAxisTickFormatter={(value) => value.toLocaleString()}
    />
  )
}

export const LabelFormatter: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      labelFormatter={(value) => value.replace("Page", "Page:")}
      series={series}
    />
  )
}

export const StrokeDasharray: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      gridAxis="xy"
      series={series}
      strokeDasharray="15 15"
    />
  )
}

export const FillOpacity: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      fillOpacity={[0.8, 0.7]}
      series={series}
    />
  )
}

export const Unit: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      unit="views"
      yAxisProps={{ width: 75 }}
    />
  )
}

export const AxisLabel: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      xAxisLabel="page"
      yAxisLabel="view"
    />
  )
}

export const RangeData: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          uv: [randomValue(), randomValue()],
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [{ color: ["blue.500", "blue.400"], dataKey: "uv" }],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      withDots={false}
      withGradient={false}
      yAxisProps={{ width: 75 }}
    />
  )
}

export const CustomAxis: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
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

export const CustomDots: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      {
        color: ["blue.500", "blue.400"],
        dataKey: "uv",
        dot: { fill: ["black", "white"] },
      },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )
  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      areaProps={{
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
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
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
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      tooltipProps={{
        content: CustomTooltip,
      }}
    />
  )
}

export const CustomLegend: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  const series: AreaProps[] = useMemo(
    () => [
      { color: ["blue.500", "blue.400"], dataKey: "uv" },
      { color: ["violet.500", "violet.400"], dataKey: "pv" },
      { color: ["orange.500", "orange.400"], dataKey: "amt" },
    ],
    [],
  )

  return (
    <AreaChart
      data={data}
      dataKey="name"
      series={series}
      withLegend
      legendProps={{ mb: "0", mt: "4", verticalAlign: "bottom" }}
    />
  )
}
