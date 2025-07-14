import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo } from "react"
import { PropsTable } from "@/storybook"
import { Reorder, ReorderItem, ReorderRoot, ReorderTrigger } from "."
import { GhostIcon } from "../icon"
import { Separator } from "../separator"
import { HStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof ReorderRoot>

const meta: Meta<typeof ReorderRoot> = {
  component: ReorderRoot,
  title: "Components / Reorder",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Reorder.Root>
        <Reorder.Item value="ギニュー">ギニュー</Reorder.Item>
        <Reorder.Item value="リクーム">リクーム</Reorder.Item>
        <Reorder.Item value="バータ">バータ</Reorder.Item>
        <Reorder.Item value="ジース">ジース</Reorder.Item>
        <Reorder.Item value="グルド">グルド</Reorder.Item>
      </Reorder.Root>

      <Separator />

      <Reorder.Root>
        <Reorder.Item>ギニュー</Reorder.Item>
        <Reorder.Item>リクーム</Reorder.Item>
        <Reorder.Item>バータ</Reorder.Item>
        <Reorder.Item>ジース</Reorder.Item>
        <Reorder.Item>グルド</Reorder.Item>
      </Reorder.Root>
    </>
  )
}

export const Items: Story = () => {
  const items = useMemo<Reorder.RootProps["items"]>(
    () => [
      { label: "ギニュー", value: "ギニュー" },
      { label: "リクーム", value: "リクーム" },
      { label: "バータ", value: "バータ" },
      { label: "ジース", value: "ジース" },
      { label: "グルド", value: "グルド" },
    ],
    [],
  )

  return <ReorderRoot items={items} />
}

export const Size: Story = () => {
  const items = useMemo<Reorder.RootProps["items"]>(
    () => [
      { label: "ギニュー", value: "ギニュー" },
      { label: "リクーム", value: "リクーム" },
      { label: "バータ", value: "バータ" },
      { label: "ジース", value: "ジース" },
      { label: "グルド", value: "グルド" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ReorderRoot key={key} size={row} items={items} />}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  const items = useMemo<Reorder.RootProps["items"]>(
    () => [
      { label: "ギニュー", value: "ギニュー" },
      { label: "リクーム", value: "リクーム" },
      { label: "バータ", value: "バータ" },
      { label: "ジース", value: "ジース" },
      { label: "グルド", value: "グルド" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      rows={[
        "panel",
        "outline",
        "solid",
        "subtle",
        "surface",
        "elevated",
        "plain",
      ]}
    >
      {(_, row, key) => <ReorderRoot key={key} variant={row} items={items} />}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  const items = useMemo<Reorder.RootProps["items"]>(
    () => [
      { label: "ギニュー", value: "ギニュー" },
      { label: "リクーム", value: "リクーム" },
      { label: "バータ", value: "バータ" },
      { label: "ジース", value: "ジース" },
      { label: "グルド", value: "グルド" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["vertical", "horizontal"]}>
      {(_, row, key) => (
        <ReorderRoot key={key} items={items} orientation={row} />
      )}
    </PropsTable>
  )
}

export const Trigger: Story = () => {
  return (
    <ReorderRoot>
      <ReorderItem value="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem value="ベジータ">
        <HStack>
          <ReorderTrigger>
            <GhostIcon />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </ReorderRoot>
  )
}

export const OnChange: Story = () => {
  return (
    <ReorderRoot
      onChange={(values) => console.log(`changed '${values.join(`', '`)}'`)}
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>
  )
}

export const OnCompleteChange: Story = () => {
  return (
    <ReorderRoot
      onCompleteChange={(values) =>
        console.log(`completed '${values.join(`', '`)}'`)
      }
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>
  )
}
