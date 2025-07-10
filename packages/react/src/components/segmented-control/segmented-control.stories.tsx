import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import { PropsTable } from "../../../storybook/components"
import { SegmentedControl } from "./"

type Story = StoryFn<typeof SegmentedControl.Root>

const meta: Meta<typeof SegmentedControl.Root> = {
  component: SegmentedControl.Root,
  title: "Components / SegmentedControl",
}

export default meta

export const Basic: Story = () => {
  return (
    <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return <SegmentedControl.Root defaultValue="ハチワレ" items={items} />
}

export const Size: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <SegmentedControl.Root
          key={key}
          size={row}
          defaultValue="ハチワレ"
          items={items}
        />
      )}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => (
        <SegmentedControl.Root
          key={key}
          defaultValue="ハチワレ"
          items={items}
          orientation={row}
        />
      )}
    </PropsTable>
  )
}

export const FullRounded: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <SegmentedControl.Root defaultValue="ハチワレ" fullRounded items={items} />
  )
}

export const Disabled: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <>
      <SegmentedControl.Root defaultValue="ハチワレ" disabled items={items} />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item disabled value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <>
      <SegmentedControl.Root defaultValue="ハチワレ" items={items} readOnly />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item readOnly value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState("ハチワレ")
  const items = useMemo<SegmentedControl.RootProps["items"]>(
    () => [
      { label: "ハチワレ", value: "ハチワレ" },
      { label: "うさぎ", value: "うさぎ" },
      { label: "モモンガ", value: "モモンガ" },
    ],
    [],
  )

  return (
    <SegmentedControl.Root items={items} value={value} onChange={setValue} />
  )
}
