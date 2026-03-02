import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import dayjs from "dayjs"
import { useMemo } from "react"
import { AreaChart } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"

type Story = StoryFn<typeof AreaChart.Root>

const meta: Meta<typeof AreaChart.Root> = {
  component: AreaChart.Root,
  title: "Components / Chart / AreaChart",
}

export default meta

interface Data {
  date: string
  desktop: null | number
  mobile: null | number
  tablet: null | number
}

const randomValue = (min = 1000, max = 5000) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const createData = (length = 6): Data[] =>
  Array.from({ length }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: randomValue(1000, 2000),
    mobile: randomValue(3000, 4000),
    tablet: randomValue(2000, 3000),
  }))

export const Basic: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
    <AreaChart.Root data={data}>
      <AreaChart.Tooltip
        labelFormatter={(value) => dayjs(value).format("MMM")}
      />
      <AreaChart.XAxis
        dataKey="date"
        tickFormatter={(value) => dayjs(value).format("MMM")}
      />
      <AreaChart.Area color="mono.900" dataKey="desktop" dot>
        <AreaChart.LabelList />
      </AreaChart.Area>
      <AreaChart.Area color="mono.600" dataKey="tablet" />
      <AreaChart.Area color="mono.300" dataKey="mobile" />
    </AreaChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <AreaChart.Root
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
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => (
        <AreaChart.Root
          key={key}
          data={data}
          series={
            AreaChart.mergeSeries(
              [
                { dataKey: "desktop" },
                { dataKey: "tablet" },
                { dataKey: "mobile" },
              ],
              row,
            ) as AreaChart.AreaProps<Data>[]
          }
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

export const Gradient: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries(
        [{ dataKey: "desktop" }, { dataKey: "tablet" }, { dataKey: "mobile" }],
        "blue",
      ),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ withGradient: true }}
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

export const Color: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "green", dataKey: "tablet" },
      { color: "blue", dataKey: "mobile" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ stackId: "stack" }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
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
        <AreaChart.Root
          key={key}
          data={data}
          series={series}
          areaProps={{ type }}
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

export const Stacked: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <AreaChart.Root
        data={data}
        series={series}
        syncId="chart"
        areaProps={{ stackId: "stack" }}
        tooltipProps={{
          labelFormatter: (value) => dayjs(value).format("MMM"),
        }}
        xAxisProps={{
          dataKey: "date",
          tickFormatter: (value) => dayjs(value).format("MMM"),
        }}
      />

      <AreaChart.Root data={data} series={series}>
        <AreaChart.Tooltip
          labelFormatter={(value) => dayjs(value).format("MMM")}
        />
        <AreaChart.XAxis
          dataKey="date"
          tickFormatter={(value) => dayjs(value).format("MMM")}
        />
        <AreaChart.Area dataKey="desktop" stackId={1} />
        <AreaChart.Area dataKey="tablet" stackId={1} />
        <AreaChart.Area dataKey="mobile" />
      </AreaChart.Root>
    </>
  )
}

export const StackedExpanded: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      withYAxis
      areaProps={{ stackId: "stack" }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => [
      { color: "red", dataKey: "desktop" },
      { color: "green", dataKey: "tablet" },
      { color: "blue", dataKey: "mobile" },
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
        <AreaChart.Root
          key={key}
          data={data}
          series={series}
          withLegend
          areaProps={{ stackId: "stack" }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries(
        [
          { name: "Desktop", dataKey: "desktop" },
          { name: "Tablet", dataKey: "tablet" },
          { name: "Mobile", dataKey: "mobile" },
        ],
        "blue",
      ),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => (
        <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => AreaChart.mergeSeries([{ dataKey: "desktop" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ dot: true, label: true }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => AreaChart.mergeSeries([{ dataKey: "desktop" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      withYAxis
      areaProps={{
        dot: true,
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => AreaChart.mergeSeries([{ dataKey: "desktop" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <AreaChart.Root
        data={data}
        series={series}
        areaProps={{ dot: true, label: true }}
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

      <AreaChart.Root
        data={data}
        series={series}
        withTooltip={false}
        withXAxis={false}
        areaProps={{
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => (
        <AreaChart.Root
          key={key}
          data={data}
          series={series}
          withYAxis
          chartProps={{
            margin: {
              left: orientation === "end" ? 16 : 0,
              right: orientation === "start" ? 16 : 0,
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <AreaChart.Root
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

      <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
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
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ connectNulls: true, dot: true }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
      <AreaChart.ReferenceLine label="Reference line" y={3000} />
      <AreaChart.ReferenceLine
        label={{ position: "insideTopLeft", value: "Reference line" }}
        x={dayjs().add(3, "month").format("YYYY-MM-DD")}
      />
      <AreaChart.ReferenceLine
        label={{ position: "center", value: "Reference line" }}
        segment={[
          { x: dayjs().format("YYYY-MM-DD"), y: 0 },
          { x: dayjs().add(3, "month").format("YYYY-MM-DD"), y: 3000 },
        ]}
      />
    </AreaChart.Root>
  )
}

export const AxisTickLine: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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

export const TooltipCursor: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      tooltipProps={{
        cursor: true,
        labelFormatter: (value) => dayjs(value).format("MMM"),
      }}
      xAxisProps={{
        dataKey: "date",
        tickFormatter: (value) => dayjs(value).format("MMM"),
      }}
    />
  )
}

export const DisabledXAxis: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      withXAxis={false}
      chartProps={{ margin: { left: 0, right: 0 } }}
      tooltipProps={{ labelFormatter: () => null }}
    />
  )
}

export const DisabledActiveDot: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: false }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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

export const CustomArea: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ strokeDasharray: "15 15" }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
      <AreaChart.ReferenceLine
        color={["green", "blue"]}
        label={{
          color: ["green", "blue"],
          position: "insideTopRight",
          value: "Reference line",
        }}
        strokeDasharray="15 15"
        y={3000}
      />
    </AreaChart.Root>
  )
}

export const CustomDot: Story = () => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet", dot: { fill: "blue" } },
        {
          dataKey: "mobile",
          dot: { fill: ["white", "black"], stroke: "red", strokeWidth: 1 },
        },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: false }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: { fill: ["blue", "red"] } }}
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () => [{ color: "blue", dataKey: "desktop" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
      data={data}
      series={series}
      areaProps={{
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
  const series = useMemo<AreaChart.AreaProps<Data>[]>(
    () =>
      AreaChart.mergeSeries([
        { dataKey: "desktop" },
        { dataKey: "tablet" },
        { dataKey: "mobile" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <AreaChart.Root
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
