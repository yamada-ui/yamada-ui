import type { Meta, StoryFn } from "@storybook/react-vite"
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
    <LineChart.Root data={data} h="sm" w="3xl">
      <LineChart.Line type="monotone" dataKey="uv" />
      <LineChart.Line type="monotone" dataKey="pv" />
    </LineChart.Root>
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
    <LineChart.Root data={data} h="sm" w="3xl">
      <LineChart.Line type="monotone" dataKey="uv" />
      <LineChart.Line type="monotone" dataKey="pv" />

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

  return (
    <LineChart.Root data={data} h="sm" w="3xl">
      <LineChart.Line
        type="monotone"
        color={["orange.500", "green.500"]}
        dataKey="uv"
        fill={["orange.200", "green.200"]}
        stroke={["orange.500", "green.500"]}
      />
      <LineChart.Line type="monotone" dataKey="pv" stroke="mono" />
    </LineChart.Root>
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
      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />

        <LineChart.Grid gridAxis="xy" stroke="orange.500" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        xAxisProps={{ tickLine: false }}
      >
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />

        <LineChart.Grid gridAxis="x" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        yAxisProps={{ tickLine: false }}
      >
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />

        <LineChart.Grid gridAxis="y" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        xAxisProps={{ tickLine: false }}
        yAxisProps={{ tickLine: false }}
      >
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />

        <LineChart.Grid gridAxis="none" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        gridProps={{ gridAxis: "y", stroke: "orange.500" }}
        yAxisProps={{ tickLine: false }}
      >
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />
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
      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />

        <LineChart.XAxis axisLine stroke={["orange.500", "green.500"]} />
        <LineChart.YAxis axisLine stroke={["orange.500", "green.500"]} />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
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
        <LineChart.Line type="monotone" dataKey="uv" />
        <LineChart.Line type="monotone" dataKey="pv" />
      </LineChart.Root>

      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" yAxisId="left" />
        <LineChart.Line type="monotone" dataKey="pv" yAxisId="right" />

        <LineChart.YAxis yAxisId="left" />
        <LineChart.YAxis orientation="right" yAxisId="right" />
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
    <LineChart.Root data={data} h="sm" w="3xl">
      <LineChart.Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <LineChart.Line type="monotone" dataKey="pv" />
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
    <LineChart.Root data={data} h="sm" w="3xl" withTooltip={false}>
      <LineChart.Line type="monotone" dataKey="uv" />
      <LineChart.Line type="monotone" dataKey="pv" />
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
    <LineChart.Root data={data} h="sm" w="3xl" withLegend>
      <LineChart.Line type="monotone" dataKey="uv" />
      <LineChart.Line type="monotone" dataKey="pv" />
    </LineChart.Root>
  )
}
