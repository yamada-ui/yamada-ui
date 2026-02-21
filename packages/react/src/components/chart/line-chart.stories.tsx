import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import dayjs from "dayjs"
import { useMemo } from "react"
import { LineChart } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"

type Story = StoryFn<typeof LineChart.Root>

const meta: Meta<typeof LineChart.Root> = {
  component: LineChart.Root,
  title: "Components / Chart / LineChart",
}

export default meta

interface Data {
  date: string
  desktop: null | number
  mobile: null | number
  tablet: null | number
}

const randomValue = (max = 5000) =>
  Math.floor(Math.random() * (max - 1000 + 1)) + 1000

const createData = (length = 6): Data[] =>
  Array.from({ length }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: randomValue(),
    mobile: randomValue(),
    tablet: randomValue(),
  }))

export const Basic: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Composition: Story = () => {
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root data={data}>
      <LineChart.Tooltip
        labelFormatter={(value) => dayjs(value).format("MMM")}
      />
      <LineChart.XAxis
        dataKey="date"
        tickFormatter={(value) => dayjs(value).format("MMM")}
      />
      <LineChart.Line dataKey="desktop" dot>
        <LineChart.LabelList />
      </LineChart.Line>
      <LineChart.Line dataKey="tablet" />
      <LineChart.Line dataKey="mobile" />
    </LineChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <LineChart.Root
          key={key}
          size={row}
          data={data}
          series={series}
          tooltipProps={{
            labelFormatter: (value) => dayjs(value).format("MMM"),
          }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
        />
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => (
        <LineChart.Root
          key={key}
          colorScheme={row}
          data={data}
          series={series}
          tooltipProps={{
            labelFormatter: (value) => dayjs(value).format("MMM"),
          }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
        />
      )}
    </PropsTable>
  )
}

export const Color: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "blue", dataKey: "tablet" },
      { color: "green", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Type: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable
      variant="stack"
      rows={[
        "monotone",
        "bump",
        "linear",
        "natural",
        "step",
        "stepBefore",
        "stepAfter",
      ]}
    >
      {(_, type, key) => (
        <LineChart.Root
          key={key}
          data={data}
          series={series}
          lineProps={{ type }}
          tooltipProps={{
            labelFormatter: (value) => dayjs(value).format("MMM"),
          }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
        />
      )}
    </PropsTable>
  )
}

export const YAxis: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Legend: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "blue", dataKey: "tablet" },
      { color: "green", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable
      variant="stack"
      rows={[
        "start-start",
        "start-center",
        "start-end",
        "center-start",
        "center-end",
        "end-start",
        "end-center",
        "end-end",
      ]}
    >
      {(_, placement, key) => (
        <LineChart.Root
          key={key}
          data={data}
          series={series}
          withLegend
          legendProps={{ placement }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
        />
      )}
    </PropsTable>
  )
}

export const Grid: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => (
        <LineChart.Root
          key={key}
          data={data}
          series={series}
          gridProps={{
            horizontal: row.includes("x"),
            vertical: row.includes("y"),
          }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
        />
      )}
    </PropsTable>
  )
}

export const Dot: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ dot: true, label: true }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Unit: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [{ dataKey: "desktop" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      lineProps={{
        dot: true,
        label: {
          formatter: (value) => `${(Number(value) / 1000).toFixed(1)}k`,
        },
      }}
      tooltipProps={{
        formatter: (value) => `${(Number(value) / 1000).toFixed(1)}k`,
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{
        domain: [0, 10000],
        tickFormatter: (value) => (value / 1000).toFixed(1),
        ticks: [0, 2500, 5000, 7500, 10000],
        unit: "k",
      }}
    />
  )
}

export const LabelList: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [{ dataKey: "desktop" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <LineChart.Root
        data={data}
        series={series}
        lineProps={{ dot: true, label: true }}
        tooltipProps={{
          labelFormatter: (value) => dayjs(value).format("MMM"),
        }}
        xAxisProps={{
          dataKey: "date",
          tickFormatter: (value) => dayjs(value).format("MMM"),
        }}
        yAxisProps={{
          domain: [0, 10000],
          ticks: [0, 2500, 5000, 7500, 10000],
        }}
      />

      <LineChart.Root
        data={data}
        series={series}
        withTooltip={false}
        withXAxis={false}
        lineProps={{
          dot: true,
          label: {
            dataKey: "date",
            formatter: (value) => dayjs(String(value)).format("MMM"),
          },
        }}
        tooltipProps={{
          labelFormatter: (value) => dayjs(value).format("MMM"),
        }}
        yAxisProps={{
          domain: [0, 10000],
          ticks: [0, 2500, 5000, 7500, 10000],
        }}
      />
    </>
  )
}

export const Orientation: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["left", "right"]}>
      {(_, orientation, key) => (
        <LineChart.Root
          key={key}
          data={data}
          series={series}
          withYAxis
          chartProps={{
            margin: {
              left: orientation === "right" ? 16 : 0,
              right: orientation === "left" ? 16 : 0,
            },
          }}
          tooltipProps={{
            labelFormatter: (value) => dayjs(value).format("MMM"),
          }}
          xAxisProps={{
            dataKey: "date",
            tickFormatter: (value) => dayjs(value).format("MMM"),
          }}
          yAxisProps={{ orientation }}
        />
      )}
    </PropsTable>
  )
}

export const Synced: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <LineChart.Root
        data={data}
        series={series}
        syncId="chart"
        tooltipProps={{
          labelFormatter: (value) => dayjs(value).format("MMM"),
        }}
        xAxisProps={{
          dataKey: "date",
          tickFormatter: (value) => dayjs(value).format("MMM"),
        }}
      />

      <LineChart.Root
        data={data}
        series={series}
        syncId="chart"
        tooltipProps={{
          labelFormatter: (value) => dayjs(value).format("MMM"),
        }}
        xAxisProps={{
          dataKey: "date",
          tickFormatter: (value) => dayjs(value).format("MMM"),
        }}
      />
    </>
  )
}

export const ConnectNull: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(
    () =>
      createData().map(({ date, desktop, mobile, tablet }, index) => ({
        date,
        desktop: index === 3 ? null : desktop,
        mobile: index === 3 ? null : mobile,
        tablet: index === 3 ? null : tablet,
      })),
    [],
  )

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ connectNulls: true, dot: true }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Formatter: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        formatter: (value, name = "") => [
          Number(value).toLocaleString(),
          toTitleCase(name),
        ],
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{
        tickFormatter: (value) => value.toLocaleString(),
      }}
    />
  )
}

export const ReferenceLine: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    >
      <LineChart.ReferenceLine label="Reference line" y={4500} />
      <LineChart.ReferenceLine
        label={{ position: "insideTopLeft", value: "Reference line" }}
        x={dayjs().add(3, "month").format("YYYY-MM-DD")}
      />
      <LineChart.ReferenceLine
        label={{ position: "center", value: "Reference line" }}
        segment={[
          { x: dayjs().format("YYYY-MM-DD"), y: 0 },
          { x: dayjs().add(3, "month").format("YYYY-MM-DD"), y: 4500 },
        ]}
      />
    </LineChart.Root>
  )
}

export const AxisTickLine: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
        tickLine: true,
      }}
      yAxisProps={{ tickLine: true }}
    />
  )
}

export const AxisLabel: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        label: "Date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{ label: "Value" }}
    />
  )
}

export const Domain: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{
        domain: [0, 5000],
        ticks: [0, 1000, 2000, 3000, 4000, 5000],
      }}
    />
  )
}

export const DisabledXAxis: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withXAxis={false}
      chartProps={{ margin: { left: 0, right: 0 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const DisabledActiveDot: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ activeDot: false }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const DisabledTooltip: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withTooltip={false}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const DisabledTooltipCursor: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{ cursor: false }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const CustomAxis: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ margin: { right: 16 } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        label: { color: ["red", "blue"] },
        tick: { color: ["red", "blue"] },
        tickFormatter: (value) => dayjs(value).format("MMM"),
        tickLine: { color: ["red", "blue"] },
      }}
      yAxisProps={{
        label: { color: ["red", "blue"] },
        tick: { color: ["red", "blue"] },
        tickLine: { color: ["red", "blue"] },
      }}
    />
  )
}

export const CustomLine: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { color: ["red", "blue"], dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ strokeDasharray: "15 15" }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const CustomReferenceLine: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    >
      <LineChart.ReferenceLine
        color={["green", "blue"]}
        label={{ position: "insideTopRight", value: "Reference line" }}
        strokeDasharray="15 15"
        y={4000}
      />
    </LineChart.Root>
  )
}

export const CustomDot: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet", dot: { fill: "blue" } },
      {
        dataKey: "mobile",
        dot: { fill: ["white", "black"], stroke: "red", strokeWidth: 1 },
      },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ activeDot: false }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
        contentProps: { withSwatch: false },
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const CustomActiveDot: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      lineProps={{ activeDot: { fill: ["red", "blue"] } }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
        contentProps: { withSwatch: false },
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const CustomLabelList: Story = () => {
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={[{ color: "blue", dataKey: "desktop" }]}
      lineProps={{
        activeDot: { fill: "red" },
        dot: { fill: "red" },
        label: { color: "red" },
      }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
        contentProps: { withSwatch: false },
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{
        domain: [0, 10000],
        ticks: [0, 2500, 5000, 7500, 10000],
      }}
    />
  )
}

export const CustomGrid: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      gridProps={{ strokeDasharray: "15 15" }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
        contentProps: { withSwatch: false },
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const CustomTooltipCursor: Story = () => {
  const series = useMemo<LineChart.LineProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <LineChart.Root
      data={data}
      series={series}
      tooltipProps={{
        cursor: { stroke: ["red", "blue"] },
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}
