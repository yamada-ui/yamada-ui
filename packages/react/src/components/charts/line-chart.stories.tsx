import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { LineChart } from "."
import { VStack } from "../stack"

type Story = StoryFn<typeof LineChart.Root>

const meta: Meta<typeof LineChart.Root> = {
  component: LineChart.Root,
  title: "Components / Line Chart",
}

export default meta

const randomValue = (max = 5000) =>
  Math.floor(Math.random() * (max - 1000 + 1)) + 1000

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

  return (
    <LineChart.Root data={data}>
      <LineChart.Line dataKey="uv" />
      <LineChart.Line dataKey="pv" />
    </LineChart.Root>
  )
}

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

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg", "full"] as const}>
      {(_, size, index) => (
        <LineChart.Root key={index} size={size} data={data}>
          <LineChart.Line dataKey="uv" />
          <LineChart.Line dataKey="pv" />
        </LineChart.Root>
      )}
    </PropsTable>
  )
}

export const CustomComponents: Story = () => {
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

  return (
    <LineChart.Root data={data}>
      <LineChart.Line dataKey="uv" />
      <LineChart.Line dataKey="pv" />

      <LineChart.Grid strokeDasharray="15 15" />
      <LineChart.XAxis dataKey="name" />
      <LineChart.YAxis />
      <LineChart.Tooltip />
      <LineChart.Legend />
    </LineChart.Root>
  )
}

export const CustomLine: Story = () => {
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

  const CustomizedDot = ({ cx, cy, value }: LineChart.DotProps) => {
    if (value > 2500) {
      return (
        <svg
          fill="red"
          height={20}
          viewBox="0 0 1024 1024"
          width={20}
          x={cx - 10}
          y={cy - 10}
        >
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      )
    }

    return (
      <svg
        fill="green"
        height={20}
        viewBox="0 0 1024 1024"
        width={20}
        x={cx - 10}
        y={cy - 10}
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    )
  }

  return (
    <VStack>
      <LineChart.Root data={data}>
        <LineChart.Line
          activeDot={{ fill: ["orange.500", "green.500"] }}
          dataKey="uv"
          dot={{ fill: ["green.200", "orange.200"] }}
          stroke={["orange.500", "green.500"]}
        />
        <LineChart.Line
          activeDot={{ fill: ["green.500", "orange.500"] }}
          dataKey="pv"
          dot={{ fill: ["green.200", "orange.200"] }}
          stroke={["green.500", "orange.500"]}
        />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line activeDot={{ r: 8 }} dataKey="uv" dot={{ r: 5 }} />
        <LineChart.Line activeDot={false} dataKey="pv" dot={CustomizedDot} />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        lineProps={{ activeDot: false, dot: false, strokeWidth: "2" }}
      >
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" strokeDasharray="5 5" />
      </LineChart.Root>
    </VStack>
  )
}

export const CustomGrid: Story = () => {
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

  return (
    <VStack>
      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.Grid gridAxis="xy" stroke="orange.500" />
      </LineChart.Root>

      <LineChart.Root data={data} xAxisProps={{ tickLine: false }}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.Grid gridAxis="x" />
      </LineChart.Root>

      <LineChart.Root data={data} yAxisProps={{ tickLine: false }}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.Grid gridAxis="y" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        xAxisProps={{ tickLine: false }}
        yAxisProps={{ tickLine: false }}
      >
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.Grid gridAxis="none" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        gridProps={{ gridAxis: "y", stroke: "orange.500" }}
        yAxisProps={{ tickLine: false }}
      >
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />
      </LineChart.Root>
    </VStack>
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
          pv: randomValue(10000),
          uv: randomValue(),
        })),
    [],
  )

  return (
    <VStack>
      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.XAxis axisLine stroke={["orange.500", "green.500"]} />
        <LineChart.YAxis axisLine stroke={["orange.500", "green.500"]} />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        xAxisProps={{
          axisLine: true,
          color: ["orange.700", "green.300"],
          stroke: ["orange.500", "green.500"],
        }}
        yAxisProps={{
          axisLine: true,
          color: ["orange.700", "green.300"],
          stroke: ["orange.500", "green.500"],
        }}
      >
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" yAxisId="left" />
        <LineChart.Line dataKey="pv" yAxisId="right" />

        <LineChart.YAxis yAxisId="left" />
        <LineChart.YAxis orientation="right" yAxisId="right" />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.YAxis unit="p" />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.XAxis
          tickFormatter={(value: string) => value.toUpperCase()}
        />
        <LineChart.YAxis
          tickFormatter={(value: number) => value.toLocaleString()}
        />
      </LineChart.Root>
    </VStack>
  )
}

export const DisableAnimation: Story = () => {
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

  return (
    <LineChart.Root data={data}>
      <LineChart.Line dataKey="uv" isAnimationActive={false} />
      <LineChart.Line dataKey="pv" />
    </LineChart.Root>
  )
}

export const HideTooltip: Story = () => {
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

  return (
    <LineChart.Root data={data} withTooltip={false}>
      <LineChart.Line dataKey="uv" />
      <LineChart.Line dataKey="pv" />
    </LineChart.Root>
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

  return (
    <LineChart.Root data={data} withLegend>
      <LineChart.Line
        activeDot={{ fill: ["orange.700", "green.300"] }}
        dataKey="uv"
        dot={{ fill: ["orange.500", "green.500"] }}
        stroke={["orange.500", "green.500"]}
      />
      <LineChart.Line
        activeDot={{ fill: ["green.700", "orange.300"] }}
        dataKey="pv"
        dot={{ fill: ["green.500", "orange.500"] }}
        stroke={["green.500", "orange.500"]}
      />
    </LineChart.Root>
  )
}

export const ConnectNull: Story = () => {
  const data = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, index) => ({
          name: `Page ${index}`,
          amt: randomValue(),
          pv: index == 4 ? null : randomValue(),
          uv: randomValue(),
        })),
    [],
  )

  return (
    <VStack>
      <LineChart.Root data={data}>
        <LineChart.Line dataKey="pv" />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line connectNulls dataKey="pv" />
      </LineChart.Root>
    </VStack>
  )
}

export const Synced: Story = () => {
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

  return (
    <VStack>
      <LineChart.Root data={data} syncId="chart1">
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />
      </LineChart.Root>

      <LineChart.Root data={data} syncId="chart1">
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />
      </LineChart.Root>
    </VStack>
  )
}

export const CurveType: Story = () => {
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

  return (
    <VStack>
      <PropsTable
        variant="stack"
        rows={
          [
            "basis",
            "basisClosed",
            "basisOpen",
            "bumpX",
            "bumpY",
            "bump",
            "linear",
            "linearClosed",
            "natural",
            "monotoneX",
            "monotoneY",
            "monotone",
            "step",
            "stepBefore",
            "stepAfter",
          ] as const
        }
      >
        {(_, type, index) => (
          <LineChart.Root key={index} data={data}>
            <LineChart.Line type={type} dataKey="uv" />
            <LineChart.Line type={type} dataKey="pv" />
          </LineChart.Root>
        )}
      </PropsTable>
    </VStack>
  )
}

export const Orientation: Story = () => {
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

  return (
    <VStack>
      <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
        {(_, layout, index) => (
          <LineChart.Root key={index} data={data} layout={layout}>
            <LineChart.Line dataKey="uv" />
            <LineChart.Line dataKey="pv" />
          </LineChart.Root>
        )}
      </PropsTable>
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

  return (
    <VStack>
      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.ReferenceLine label="reference line" x="Page 2" />
        <LineChart.ReferenceLine
          label="reference line"
          strokeDasharray="5 5"
          y={5000}
        />
        <LineChart.ReferenceLine
          label="reference line"
          segment={[
            { x: "Page 0", y: 0 },
            { x: "Page 2", y: 5000 },
          ]}
          stroke="green.500"
          strokeDasharray="5 5"
        />
      </LineChart.Root>

      <LineChart.Root data={data}>
        <LineChart.Line dataKey="uv" />
        <LineChart.Line dataKey="pv" />

        <LineChart.ReferenceLine
          label={{
            position: "insideBottomLeft",
            stroke: ["blue.500", "green.500"],
            value: "reference line",
          }}
          y={4000}
        />
      </LineChart.Root>
    </VStack>
  )
}
