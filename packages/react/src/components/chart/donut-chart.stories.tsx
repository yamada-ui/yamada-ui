import type { Meta, StoryFn } from "@storybook/react-vite"
import type { CSSProps } from "../../core"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { DonutChart } from "."
import { styled } from "../../core"
import { isString, toTitleCase } from "../../utils"
import { Text } from "../text"

type Story = StoryFn<typeof DonutChart.Root>

const meta: Meta<typeof DonutChart.Root> = {
  component: DonutChart.Root,
  title: "Components / Chart / DonutChart",
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
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return <DonutChart.Root data={data} series={series} />
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
    <DonutChart.Root>
      <DonutChart.Donut data={data} dataKey="visits" nameKey="browser">
        <DonutChart.LabelList color="white" dataKey="browser" />
        <Text as="span">Donut Chart</Text>
      </DonutChart.Donut>
      <DonutChart.Tooltip />
      <DonutChart.Legend />
    </DonutChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <DonutChart.Root key={key} size={row} data={data} series={series} />
      )}
    </PropsTable>
  )
}

export const Gradients: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData(), "blue"), [])

  return <DonutChart.Root data={data} series={series} />
}

export const SectorColors: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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

  return <DonutChart.Root data={data} series={series} />
}

export const SectorStroke: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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

  return <DonutChart.Root data={data} sectorStroke="none" series={series} />
}

export const Legend: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
        <DonutChart.Root
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
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return <DonutChart.Root data={data} series={series} />
}

export const Label: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
    <DonutChart.Root data={data} series={series} donutProps={{ label: true }} />
  )
}

export const LabelLine: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ label: true, labelLine: true }}
    />
  )
}

export const LabelOffset: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ label: { offset: 12 } }}
    />
  )
}

export const LabelList: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ labelList: { color: "white" } }}
    />
  )
}

export const CenterLabel: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])
  const total = useMemo(
    () => data.reduce((acc, { visits }) => acc + visits, 0),
    [data],
  )

  return (
    <>
      <DonutChart.Root data={data} series={series}>
        <DonutChart.Label fontSize="5xl" fontWeight="bold" position="center">
          Visitors
        </DonutChart.Label>
      </DonutChart.Root>

      <DonutChart.Root data={data}>
        <DonutChart.Donut dataKey="visits" nameKey="browser">
          <DonutChart.Label
            content={({ className, viewBox }) => {
              if (!viewBox) return null
              if (!("cx" in viewBox) || !("cy" in viewBox)) return null

              return (
                <text
                  className={className}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  x={viewBox.cx}
                  y={viewBox.cy}
                >
                  <styled.tspan asChild fontSize="6xl" fontWeight="bold">
                    <tspan x={viewBox.cx} y={viewBox.cy}>
                      {total.toLocaleString()}
                    </tspan>
                  </styled.tspan>

                  <styled.tspan asChild color="fg.muted" fontSize="xl">
                    <tspan x={viewBox.cx} y={viewBox.cy + 36}>
                      Visitors
                    </tspan>
                  </styled.tspan>
                </text>
              )
            }}
          />
        </DonutChart.Donut>
      </DonutChart.Root>
    </>
  )
}

export const PaddingAngle: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ paddingAngle: 15 }}
    />
  )
}

export const StartAngle: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ startAngle: 0 }}
    />
  )
}

export const EndAngle: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ endAngle: -180 }}
    />
  )
}

export const InnerRadius: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ innerRadius: "50%" }}
    />
  )
}

export const OuterRadius: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{ outerRadius: "80%" }}
    />
  )
}

export const ActiveSector: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [
      {
        activeIndex: 0,
        dataKey: "visits",
        nameKey: "browser",
      },
    ],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{
        sectorProps: ({ isActive, outerRadius }) => ({
          outerRadius: isActive ? outerRadius + 15 : outerRadius,
        }),
      }}
    />
  )
}

export const Synced: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return (
    <>
      <DonutChart.Root data={data} series={series} syncId="chart" />
      <DonutChart.Root data={data} series={series} syncId="chart" />
    </>
  )
}

export const Formatter: Story = () => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
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
    <DonutChart.Root
      data={data}
      series={series}
      donutProps={{
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
  const series = useMemo<DonutChart.DonutProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => DonutChart.mergeData(createData()), [])

  return <DonutChart.Root data={data} series={series} withTooltip={false} />
}
