import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import dayjs from "dayjs"
import { useMemo } from "react"
import { BarChart } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"

type Story = StoryFn<typeof BarChart.Root>

const meta: Meta<typeof BarChart.Root> = {
  component: BarChart.Root,
  title: "Components / Chart / BarChart",
}

export default meta

interface Data {
  date: string
  desktop: null | number | number[]
  mobile: null | number | number[]
  tablet: null | number | number[]
}

const randomValue = (min = 1000, max = 5000) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const createData = (length = 6): Data[] =>
  Array.from({ length }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: randomValue(),
    mobile: randomValue(),
    tablet: randomValue(),
  }))

export const Basic: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
    <BarChart.Root data={data}>
      <BarChart.Tooltip
        labelFormatter={(value) => dayjs(value).format("MMM")}
      />
      <BarChart.XAxis
        dataKey="date"
        tickFormatter={(value) => dayjs(value).format("MMM")}
      />
      <BarChart.Bar dataKey="desktop">
        <BarChart.LabelList />
      </BarChart.Bar>
      <BarChart.Bar dataKey="tablet" />
      <BarChart.Bar dataKey="mobile" />
    </BarChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
        <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
        <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "blue", dataKey: "tablet" },
      { color: "green", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const Range: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop", range: true },
      { dataKey: "tablet", range: true },
      { dataKey: "mobile", range: true },
    ],
    [],
  )
  const data = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        date: dayjs().add(index, "month").format("YYYY-MM-DD"),
        desktop: [randomValue(1000, 2000), randomValue(4000, 5000)],
        mobile: [randomValue(1000, 2000), randomValue(4000, 5000)],
        tablet: [randomValue(1000, 2000), randomValue(4000, 5000)],
      })),
    [],
  )

  return (
    <BarChart.Root
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

export const Stacked: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      {
        color: "blue",
        dataKey: "tablet",
        radius: [0, 0, 4, 4],
        stackId: "stack",
      },
      {
        color: "green",
        dataKey: "mobile",
        radius: [4, 4, 0, 0],
        stackId: "stack",
      },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const Percent: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "blue", dataKey: "tablet" },
      { color: "green", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      withYAxis
      barProps={{ radius: 0, stackId: "stack" }}
      chartProps={{ stackOffset: "expand" }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
      yAxisProps={{
        tickFormatter: (value) => `${(Number(value) * 100).toFixed(0)}%`,
      }}
    />
  )
}

export const YAxis: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
        <BarChart.Root
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

export const Name: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { name: "Desktop", color: "red", dataKey: "desktop" },
      { name: "Tablet", color: "blue", dataKey: "tablet" },
      { name: "Mobile", color: "green", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      withLegend
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

export const Grid: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
        <BarChart.Root
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

export const Unit: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      withYAxis
      barProps={{
        label: {
          formatter: (value) => `${(Number(value) / 1000).toFixed(1)}k`,
        },
      }}
      chartProps={{ margin: { right: 16 } }}
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
      <BarChart.Root
        data={data}
        series={series}
        barProps={{ label: true }}
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

      <BarChart.Root
        data={data}
        series={series}
        withTooltip={false}
        withXAxis={false}
        barProps={{
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

export const Vertical: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      withYAxis
      chartProps={{ layout: "vertical" }}
      tooltipProps={{
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        type: "number",
      }}
      yAxisProps={{
        type: "category",
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const Orientation: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
        <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
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
      <BarChart.Root
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

      <BarChart.Root
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

export const Formatter: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
      <BarChart.ReferenceLine label="Reference line" y={3000} />
      <BarChart.ReferenceLine
        label={{ position: "insideTopLeft", value: "Reference line" }}
        x={dayjs().add(3, "month").format("YYYY-MM-DD")}
      />
      <BarChart.ReferenceLine
        label={{ position: "center", value: "Reference line" }}
        segment={[
          { x: dayjs().format("YYYY-MM-DD"), y: 0 },
          { x: dayjs().add(3, "month").format("YYYY-MM-DD"), y: 3000 },
        ]}
      />
    </BarChart.Root>
  )
}

export const AxisTickLine: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const Gap: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      chartProps={{ barCategoryGap: 32, barGap: 8 }}
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

export const Radius: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      {
        color: "red",
        dataKey: "desktop",
        radius: 8,
      },
      {
        color: "blue",
        dataKey: "tablet",
        radius: [0, 0, 8, 8],
        stackId: "stack",
      },
      {
        color: "green",
        dataKey: "mobile",
        radius: [8, 8, 0, 0],
        stackId: "stack",
      },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const TooltipCursor: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      tooltipProps={{ cursor: true }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const DisabledXAxis: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const DisabledTooltip: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const CustomAxis: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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

export const CustomReferenceLine: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
      <BarChart.ReferenceLine
        color={["green", "blue"]}
        label={{
          color: ["green", "blue"],
          position: "insideTopRight",
          value: "Reference line",
        }}
        strokeDasharray="15 15"
        y={3000}
      />
    </BarChart.Root>
  )
}

export const CustomLabelList: Story = () => {
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [{ color: "blue", dataKey: "desktop" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      barProps={{
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
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
  const series = useMemo<BarChart.BarProps<Data>[]>(
    () => [
      { dataKey: "desktop" },
      { dataKey: "tablet" },
      { dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <BarChart.Root
      data={data}
      series={series}
      tooltipProps={{
        cursor: { fill: "red", fillOpacity: 0.2 },
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}
