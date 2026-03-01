import type { Meta, StoryFn } from "@storybook/react-vite"
import type { CSSProps } from "../../core"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { PieChart } from "."
import { isString, toTitleCase } from "../../utils"

type Story = StoryFn<typeof PieChart.Root>

const meta: Meta<typeof PieChart.Root> = {
  component: PieChart.Root,
  title: "Components / Chart / PieChart",
}

export default meta

interface Data {
  browser: string
  downloads: number
  visits: number
  fill?: CSSProps["fill"]
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
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return <PieChart.Root data={data} series={series} />
}

export const Composition: Story = () => {
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root>
      <PieChart.Pie data={data} dataKey="visits" nameKey="browser">
        <PieChart.LabelList color="white" dataKey="browser" />
      </PieChart.Pie>
      <PieChart.Tooltip />
      <PieChart.Legend />
    </PieChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <PieChart.Root key={key} size={row} data={data} series={series} />
      )}
    </PropsTable>
  )
}

export const Gradients: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData(), "blue"), [])

  return <PieChart.Root data={data} series={series} />
}

export const SectorColors: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return <PieChart.Root data={data} series={series} />
}

export const SectorStroke: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return <PieChart.Root data={data} sectorStroke="none" series={series} />
}

export const Legend: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

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
        <PieChart.Root
          key={key}
          data={data}
          series={series}
          withLegend
          legendProps={{ placement }}
        />
      )}
    </PropsTable>
  )
}

export const Stacked: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [
      {
        dataKey: "visits",
        innerRadius: "80%",
        nameKey: "browser",
      },
      {
        dataKey: "downloads",
        nameKey: "browser",
        outerRadius: "70%",
      },
    ],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return <PieChart.Root data={data} series={series} />
}

export const Label: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root data={data} series={series} pieProps={{ label: true }} />
  )
}

export const LabelLine: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ label: true, labelLine: true }}
    />
  )
}

export const LabelOffset: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ label: { offset: 12 } }}
    />
  )
}

export const LabelList: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ labelList: { color: "white" } }}
    />
  )
}

export const PaddingAngle: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ paddingAngle: 15 }}
    />
  )
}

export const StartAngle: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root data={data} series={series} pieProps={{ startAngle: 0 }} />
  )
}

export const EndAngle: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root data={data} series={series} pieProps={{ endAngle: -180 }} />
  )
}

export const InnerRadius: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ innerRadius: "70%" }}
    />
  )
}

export const OuterRadius: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{ outerRadius: "90%" }}
    />
  )
}

export const ActiveSector: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [
      {
        activeIndex: 0,
        dataKey: "visits",
        nameKey: "browser",
      },
    ],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{
        innerRadius: "70%",
        sectorProps: ({ isActive, outerRadius }) => ({
          outerRadius: isActive ? outerRadius + 15 : outerRadius,
        }),
      }}
    />
  )
}

export const Synced: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return (
    <>
      <PieChart.Root data={data} series={series} syncId="chart" />
      <PieChart.Root data={data} series={series} syncId="chart" />
    </>
  )
}

export const Formatter: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      {
        browser: "chrome",
        downloads: randomValue(),
        fill: "cyan",
        visits: randomValue(),
      },
      {
        browser: "edge",
        downloads: randomValue(),
        fill: "green",
        visits: randomValue(),
      },
      {
        browser: "firefox",
        downloads: randomValue(),
        fill: "orange",
        visits: randomValue(),
      },
      {
        browser: "opera",
        downloads: randomValue(),
        fill: "red",
        visits: randomValue(),
      },
      {
        browser: "safari",
        downloads: randomValue(),
        fill: "blue",
        visits: randomValue(),
      },
      {
        browser: "other",
        downloads: randomValue(),
        fill: "gray",
        visits: randomValue(),
      },
    ],
    [],
  )

  return (
    <PieChart.Root
      data={data}
      series={series}
      pieProps={{
        label: {
          formatter: (_, percent) => `${(percent * 100).toFixed(0)}%`,
        },
        labelLine: true,
        labelList: {
          color: "white",
          formatter: (value) => (isString(value) ? toTitleCase(value) : value),
        },
      }}
      tooltipProps={{
        formatter: (value, name = "") => [
          Number(value).toLocaleString(),
          toTitleCase(name),
        ],
      }}
    />
  )
}

export const DisabledTooltip: Story = () => {
  const series = useMemo<PieChart.PieProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => PieChart.mergeData(createData()), [])

  return <PieChart.Root data={data} series={series} withTooltip={false} />
}
