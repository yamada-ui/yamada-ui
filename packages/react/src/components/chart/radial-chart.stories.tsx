import type { Meta, StoryFn } from "@storybook/react-vite"
import type { CSSProps } from "../../core"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { RadialChart } from "."
import { styled } from "../../core"
import { isString, toTitleCase } from "../../utils"

type Story = StoryFn<typeof RadialChart.Root>

const meta: Meta<typeof RadialChart.Root> = {
  component: RadialChart.Root,
  title: "Components / Chart / RadialChart",
}

export default meta

interface Data {
  browser: string
  visits: number
  fill?: CSSProps["fill"]
}

const randomValue = (min = 1000, max = 5000) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const createData = (): Data[] => [
  { browser: "chrome", visits: randomValue() },
  { browser: "edge", visits: randomValue() },
  { browser: "firefox", visits: randomValue() },
  { browser: "opera", visits: randomValue() },
  { browser: "safari", visits: randomValue() },
]

export const Basic: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} series={series} />
}

export const Composition: Story = () => {
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return (
    <RadialChart.Root data={data}>
      <RadialChart.Radial dataKey="visits" nameKey="browser">
        <RadialChart.LabelList
          dataKey="browser"
          offset={4}
          position="insideStart"
        />
      </RadialChart.Radial>
      <RadialChart.Tooltip />
      <RadialChart.Legend />
    </RadialChart.Root>
  )
}

export const Size: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <RadialChart.Root key={key} size={row} data={data} series={series} />
      )}
    </PropsTable>
  )
}

export const Gradients: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), [])

  return <RadialChart.Root data={data} series={series} />
}

export const SectorColors: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      { browser: "chrome", fill: "cyan", visits: randomValue() },
      { browser: "edge", fill: "green", visits: randomValue() },
      { browser: "firefox", fill: "orange", visits: randomValue() },
      { browser: "opera", fill: "red", visits: randomValue() },
      { browser: "safari", fill: "blue", visits: randomValue() },
    ],
    [],
  )

  return <RadialChart.Root data={data} series={series} />
}

export const Legend: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo<Data[]>(
    () => [
      { browser: "chrome", fill: "cyan", visits: randomValue() },
      { browser: "edge", fill: "green", visits: randomValue() },
      { browser: "firefox", fill: "orange", visits: randomValue() },
      { browser: "opera", fill: "red", visits: randomValue() },
      { browser: "safari", fill: "blue", visits: randomValue() },
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
        <RadialChart.Root
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

export const Label: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), [])

  return (
    <RadialChart.Root
      data={data}
      series={series}
      radialProps={{ label: true }}
    />
  )
}

export const LabelList: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return (
    <RadialChart.Root
      data={data}
      series={series}
      radialProps={{ labelList: true }}
    />
  )
}

export const CenterLabel: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(
    () =>
      RadialChart.mergeData([
        { browser: "chrome", visits: randomValue() },
        { browser: "edge", visits: randomValue() },
        { browser: "safari", visits: randomValue() },
      ]),
    [],
  )
  const total = useMemo(
    () => data.reduce((acc, { visits }) => acc + visits, 0),
    [data],
  )

  return (
    <>
      <RadialChart.Root data={data} innerRadius="60%" series={series}>
        <RadialChart.Label fontSize="5xl" fontWeight="bold" position="center">
          Visitors
        </RadialChart.Label>
      </RadialChart.Root>

      <RadialChart.Root data={data} innerRadius="60%" series={series}>
        <RadialChart.Label
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
      </RadialChart.Root>
    </>
  )
}

export const StartAngle: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} series={series} startAngle={0} />
}

export const EndAngle: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} endAngle={-180} series={series} />
}

export const InnerRadius: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} innerRadius="40%" series={series} />
}

export const OuterRadius: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} outerRadius="70%" series={series} />
}

export const CornerRadius: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ cornerRadius: 9999, dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} outerRadius="70%" series={series} />
}

export const Gap: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return (
    <RadialChart.Root
      barCategoryGap="20%"
      data={data}
      outerRadius="70%"
      series={series}
    />
  )
}

export const Stacked: Story = () => {
  const series = useMemo<
    RadialChart.RadialProps<{
      browser: string
      desktop: number
      mobile: number
    }>[]
  >(
    () => [
      {
        color: "blue.500",
        dataKey: "desktop",
        nameKey: "browser",
        stackId: "stack",
      },
      {
        color: "blue.300",
        dataKey: "mobile",
        nameKey: "browser",
        stackId: "stack",
      },
    ],
    [],
  )
  const data = useMemo(
    () => [
      {
        browser: "chrome",
        desktop: randomValue(2000, 3000),
        mobile: randomValue(4000, 5000),
      },
    ],
    [],
  )
  const total = useMemo(
    () => data.reduce((acc, { desktop, mobile }) => acc + desktop + mobile, 0),
    [data],
  )

  return (
    <RadialChart.Root
      data={data}
      endAngle={180}
      innerRadius="70%"
      series={series}
      startAngle={0}
      tooltipProps={{
        formatter: (value, _, data) => [
          Number(value).toLocaleString(),
          toTitleCase(isString(data.dataKey) ? data.dataKey : ""),
        ],
      }}
    >
      <RadialChart.Label
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
                <tspan x={viewBox.cx} y={viewBox.cy - 40}>
                  {total.toLocaleString()}
                </tspan>
              </styled.tspan>

              <styled.tspan asChild color="fg.muted" fontSize="xl">
                <tspan x={viewBox.cx} y={viewBox.cy}>
                  Visitors
                </tspan>
              </styled.tspan>
            </text>
          )
        }}
      />
    </RadialChart.Root>
  )
}

export const Synced: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return (
    <>
      <RadialChart.Root data={data} series={series} syncId="chart" />
      <RadialChart.Root data={data} series={series} syncId="chart" />
    </>
  )
}

export const Formatter: Story = () => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), [])

  return (
    <RadialChart.Root
      data={data}
      series={series}
      radialProps={{
        label: {
          formatter: (value) => Number(value).toLocaleString(),
        },
        labelList: {
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
  const series = useMemo<RadialChart.RadialProps<Data>[]>(
    () => [{ dataKey: "visits", nameKey: "browser" }],
    [],
  )
  const data = useMemo(() => RadialChart.mergeData(createData()), [])

  return <RadialChart.Root data={data} series={series} withTooltip={false} />
}
