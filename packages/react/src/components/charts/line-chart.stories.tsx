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
      <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
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
      <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

      <LineChart.Grid strokeDasharray="15 15" />
      <LineChart.XAxis dataKey="name" />
      <LineChart.YAxis />
      <LineChart.Tooltip />
      <LineChart.Legend />
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
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

        <LineChart.Grid gridAxis="xy" stroke="orange.500" />
      </LineChart.Root>

      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

        <LineChart.Grid gridAxis="x" />
      </LineChart.Root>

      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

        <LineChart.Grid gridAxis="y" />
      </LineChart.Root>

      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

        <LineChart.Grid gridAxis="none" />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        gridProps={{ gridAxis: "y", stroke: "orange.500" }}
      >
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
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
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

        <LineChart.XAxis stroke={["orange.500", "green.500"]} />
        <LineChart.YAxis stroke={["orange.500", "green.500"]} />
      </LineChart.Root>

      <LineChart.Root
        data={data}
        h="sm"
        w="3xl"
        xAxisProps={{
          color: ["orange.700", "green.300"],
          stroke: ["orange.500", "green.500"],
        }}
        yAxisProps={{
          color: ["orange.700", "green.300"],
          stroke: ["orange.500", "green.500"],
        }}
      >
        <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart.Root>

      <LineChart.Root data={data} h="sm" w="3xl">
        <LineChart.Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          yAxisId="left"
        />
        <LineChart.Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          yAxisId="right"
        />

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
      <LineChart.Line
        type="monotone"
        dataKey="uv"
        isAnimationActive={false}
        stroke="#82ca9d"
      />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
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
      <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
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
      <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />
    </LineChart.Root>
  )
}
