import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { RadarChart } from "."
import { COLOR_SCHEMES, isString, toTitleCase } from "../../utils"

type Story = StoryFn<typeof RadarChart.Root>

const meta: Meta<typeof RadarChart.Root> = {
  component: RadarChart.Root,
  title: "Components / Chart / RadarChart",
}

export default meta

interface Data {
  browser: string
  downloads: null | number
  visits: null | number
}

const randomValue = (min = 1000, max = 5000) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const createData = (): Data[] => [
  { browser: "chrome", downloads: randomValue(), visits: randomValue() },
  { browser: "edge", downloads: randomValue(), visits: randomValue() },
  { browser: "firefox", downloads: randomValue(), visits: randomValue() },
  { browser: "opera", downloads: randomValue(), visits: randomValue() },
  { browser: "safari", downloads: randomValue(), visits: randomValue() },
  { browser: "other", downloads: randomValue(), visits: randomValue() },
]

export const Basic: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return <RadarChart.Root data={data} nameKey="browser" series={series} />
}

export const Composition: Story = () => {
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <RadarChart.Root
          key={key}
          size={row}
          data={data}
          nameKey="browser"
          series={series}
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
        <RadarChart.Root
          key={key}
          data={data}
          series={
            RadarChart.mergeSeries(
              [{ dataKey: "visits" }, { dataKey: "downloads" }],
              row,
            ) as RadarChart.RadarProps<Data>[]
          }
        />
      )}
    </PropsTable>
  )
}

export const Gradient: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries(
        [{ dataKey: "visits" }, { dataKey: "downloads" }],
        "blue",
      ),
    [],
  )
  const data = useMemo(() => createData(), [])

  return <RadarChart.Root data={data} nameKey="browser" series={series} />
}

export const Color: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "visits" },
      { color: "green", dataKey: "downloads" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return <RadarChart.Root data={data} nameKey="browser" series={series} />
}

export const RadiusAxis: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries(
        [{ dataKey: "visits" }, { dataKey: "downloads" }],
        "blue",
      ),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      withRadiusAxis
    />
  )
}

export const Legend: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "visits" },
      { color: "green", dataKey: "downloads" },
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
        <RadarChart.Root
          key={key}
          data={data}
          nameKey="browser"
          series={series}
          withLegend
          legendProps={{ placement }}
        />
      )}
    </PropsTable>
  )
}

export const Label: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [{ color: "blue", dataKey: "visits" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ dot: true, label: true }}
    />
  )
}

export const GridType: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["polygon", "circle"]}>
      {(_, gridType, key) => (
        <RadarChart.Root
          key={key}
          data={data}
          nameKey="browser"
          series={series}
          gridProps={{ gridType }}
        />
      )}
    </PropsTable>
  )
}

export const GridFilled: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["polygon", "circle"]}>
      {(_, gridType, key) => (
        <RadarChart.Root
          key={key}
          data={data}
          nameKey="browser"
          series={series}
          gridProps={{ fill: "mono.emphasized", gridType, opacity: 0.2 }}
        />
      )}
    </PropsTable>
  )
}

export const Line: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [
      { color: "red", dataKey: "visits" },
      { color: "green", dataKey: "downloads" },
    ],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ fill: "transparent" }}
    />
  )
}

export const Dot: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ dot: true }}
    />
  )
}

export const Synced: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <RadarChart.Root
        data={data}
        nameKey="browser"
        series={series}
        syncId="chart"
      />
      <RadarChart.Root
        data={data}
        nameKey="browser"
        series={series}
        syncId="chart"
      />
    </>
  )
}

export const Formatter: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [{ color: "blue", dataKey: "visits" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      angleAxisProps={{ tickFormatter: (value) => toTitleCase(value) }}
      radarProps={{
        dot: true,
        label: { formatter: (value) => Number(value).toLocaleString() },
      }}
      tooltipProps={{
        formatter: (value, name = "") => [
          Number(value).toLocaleString(),
          toTitleCase(name),
        ],
        labelFormatter: (value) => toTitleCase(isString(value) ? value : ""),
      }}
    />
  )
}

export const AngleAxisLine: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      angleAxisProps={{ axisLine: true }}
    />
  )
}

export const AngleAxisTickLine: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      angleAxisProps={{ tickLine: true }}
    />
  )
}

export const Domain: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      withRadiusAxis
      radiusAxisProps={{
        axisLine: false,
        domain: [0, 7000],
        tick: false,
        ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000],
      }}
    />
  )
}

export const TooltipCursor: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      tooltipProps={{ cursor: true }}
    />
  )
}

export const DisabledAngleAxis: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <>
      <RadarChart.Root data={data} series={series} />
      <RadarChart.Root
        data={data}
        nameKey="browser"
        series={series}
        withAngleAxis={false}
      />
    </>
  )
}

export const DisabledGrid: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      withGrid={false}
    />
  )
}

export const DisabledActiveDot: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ activeDot: false }}
    />
  )
}

export const DisabledTooltip: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      withTooltip={false}
    />
  )
}

export const CustomRadar: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ strokeDasharray: "10 10" }}
    />
  )
}

export const CustomDot: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([
        { dataKey: "visits", dot: { fill: "blue" } },
        { dataKey: "downloads" },
      ]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ activeDot: false }}
      tooltipProps={{ contentProps: { withSwatch: false } }}
    />
  )
}

export const CustomActiveDot: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{ activeDot: { fill: ["blue", "red"] } }}
      tooltipProps={{ contentProps: { withSwatch: false } }}
    />
  )
}

export const CustomLabel: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () => [{ color: "blue", dataKey: "visits" }],
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      radarProps={{
        activeDot: { fill: "red" },
        dot: { fill: "red" },
        label: { color: "red" },
      }}
      tooltipProps={{ contentProps: { withSwatch: false } }}
    />
  )
}

export const CustomTooltipCursor: Story = () => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(
    () =>
      RadarChart.mergeSeries([{ dataKey: "visits" }, { dataKey: "downloads" }]),
    [],
  )
  const data = useMemo(() => createData(), [])

  return (
    <RadarChart.Root
      data={data}
      nameKey="browser"
      series={series}
      tooltipProps={{ cursor: { stroke: ["red", "blue"] } }}
    />
  )
}
