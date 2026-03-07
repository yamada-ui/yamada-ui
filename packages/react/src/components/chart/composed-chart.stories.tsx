import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import dayjs from "dayjs"
import { useMemo } from "react"
import { ComposedChart } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"

type Story = StoryFn<typeof ComposedChart.Root>

const meta: Meta<typeof ComposedChart.Root> = {
  component: ComposedChart.Root,
  title: "Components / Chart / ComposedChart",
}

export default meta

interface Data {
  date: string
  desktop: null | number | number[]
  mobile: null | number
  tablet: null | number
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
    <ComposedChart.Root data={data}>
      <ComposedChart.Legend />
      <ComposedChart.Tooltip
        labelFormatter={(value) => dayjs(value).format("MMM")}
      />
      <ComposedChart.XAxis
        dataKey="date"
        tickFormatter={(value) => dayjs(value).format("MMM")}
      />
      <ComposedChart.Bar color="blue" dataKey="desktop" />
      <ComposedChart.Area color="green" dataKey="tablet" dot />
      <ComposedChart.Line color="red" dataKey="mobile" dot>
        <ComposedChart.LabelList />
      </ComposedChart.Line>
    </ComposedChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <ComposedChart.Root
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
        <ComposedChart.Root
          key={key}
          colorScheme={row}
          data={data}
          series={ComposedChart.mergeSeries<Data>(
            [
              [
                "bar",
                { dataKey: "desktop" },
              ] satisfies ComposedChart.ComposedProps<Data>,
              [
                "area",
                { dataKey: "tablet" },
              ] satisfies ComposedChart.ComposedProps<Data>,
              [
                "line",
                { dataKey: "mobile" },
              ] satisfies ComposedChart.ComposedProps<Data>,
            ],
            row,
          )}
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
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(
    () => [
      [
        "bar",
        { color: "blue", dataKey: "desktop" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "area",
        { color: "green", dataKey: "tablet" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "line",
        { color: "red", dataKey: "mobile" },
      ] satisfies ComposedChart.ComposedProps<Data>,
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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

export const YAxis: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(
    () => [
      [
        "bar",
        { color: "blue", dataKey: "desktop" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "area",
        { color: "green", dataKey: "tablet" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "line",
        { color: "red", dataKey: "mobile" },
      ] satisfies ComposedChart.ComposedProps<Data>,
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
        <ComposedChart.Root
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
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(
    () => [
      [
        "bar",
        { name: "Desktop", color: "blue", dataKey: "desktop" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "area",
        { name: "Tablet", color: "green", dataKey: "tablet" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "line",
        { name: "Mobile", color: "red", dataKey: "mobile" },
      ] satisfies ComposedChart.ComposedProps<Data>,
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => (
        <ComposedChart.Root
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

export const LineType: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
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
        <ComposedChart.Root
          key={key}
          data={data}
          series={series}
          areaProps={{ type }}
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

export const LineDot: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ dot: true }}
      lineProps={{ dot: true }}
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

export const LineConnectNull: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(
    () =>
      createData().map(({ date, desktop, mobile, tablet }, index) => ({
        date,
        desktop,
        mobile: index === 3 ? null : mobile,
        tablet: index === 3 ? null : tablet,
      })),
    [],
  )

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ connectNulls: true, dot: true }}
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

export const BarRange: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        date: dayjs().add(index, "month").format("YYYY-MM-DD"),
        desktop: [randomValue(1000, 2000), randomValue(4000, 5000)],
        mobile: randomValue(),
        tablet: randomValue(),
      })),
    [],
  )

  return (
    <ComposedChart.Root
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

export const BarStacked: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop", radius: [0, 0, 4, 4] },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "bar",
          { dataKey: "tablet", radius: [4, 4, 0, 0] },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      barProps={{ stackId: "stack" }}
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

export const BarSize: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      barProps={{ barSize: 50 }}
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

export const BarRadius: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      barProps={{ radius: 8 }}
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

export const BarGap: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "bar",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      chartProps={{ barGap: 16 }}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <ComposedChart.Root
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

      <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => (
        <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <ComposedChart.Root
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

      <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
      <ComposedChart.ReferenceLine label="Reference line" y={3000} />
      <ComposedChart.ReferenceLine
        label={{ position: "insideTopLeft", value: "Reference line" }}
        x={dayjs().add(3, "month").format("YYYY-MM-DD")}
      />
      <ComposedChart.ReferenceLine
        label={{ position: "center", value: "Reference line" }}
        segment={[
          { x: dayjs().format("YYYY-MM-DD"), y: 0 },
          { x: dayjs().add(3, "month").format("YYYY-MM-DD"), y: 3000 },
        ]}
      />
    </ComposedChart.Root>
  )
}

export const AxisTickLine: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      withXAxis={false}
      chartProps={{ margin: { left: 0, right: 0 } }}
      tooltipProps={{ labelFormatter: () => null }}
    />
  )
}

export const DisabledLineActiveDot: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: false }}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(
    () => [
      [
        "bar",
        { dataKey: "desktop" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "area",
        { color: ["green", "orange"], dataKey: "tablet" },
      ] satisfies ComposedChart.ComposedProps<Data>,
      [
        "line",
        { color: ["red", "blue"], dataKey: "mobile" },
      ] satisfies ComposedChart.ComposedProps<Data>,
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ strokeDasharray: "15 15" }}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
      <ComposedChart.ReferenceLine
        color={["green", "blue"]}
        label={{
          color: ["green", "blue"],
          position: "insideTopRight",
          value: "Reference line",
        }}
        strokeDasharray="15 15"
        y={3000}
      />
    </ComposedChart.Root>
  )
}

export const CustomDot: Story = () => {
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet", dot: { fill: "blue!" } },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          {
            dataKey: "mobile",
            dot: { fill: ["white!", "black!"], stroke: "red!", strokeWidth: 1 },
          },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: false }}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
      areaProps={{ activeDot: { fill: ["red", "blue"] } }}
      lineProps={{ activeDot: { fill: ["green", "orange"] } }}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
      data={data}
      series={series}
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
  const series = useMemo(
    () =>
      ComposedChart.mergeSeries<Data>([
        [
          "bar",
          { dataKey: "desktop" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "area",
          { dataKey: "tablet" },
        ] satisfies ComposedChart.ComposedProps<Data>,
        [
          "line",
          { dataKey: "mobile" },
        ] satisfies ComposedChart.ComposedProps<Data>,
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <ComposedChart.Root
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
