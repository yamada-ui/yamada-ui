import type { Meta, StoryFn } from "@storybook/react"
import { useMemo } from "react"
import { PropsTable } from "../../../storybook/components"
import { Separator } from "../separator"
import { VStack } from "../stack"
import { DataList } from "./"

type Story = StoryFn<typeof DataList.Root>

const meta: Meta<typeof DataList.Root> = {
  component: DataList.Root,
  title: "Components / DataList",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return <DataList.Root items={items} />
}

export const Children: Story = () => {
  return (
    <DataList.Root col={2}>
      <DataList.Item>
        <DataList.Term>白石うらら</DataList.Term>
        <DataList.Description>入れ替わりの魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>小田切寧々</DataList.Term>
        <DataList.Description>虜の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>大塚芽子</DataList.Term>
        <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>猿島マリア</DataList.Term>
        <DataList.Description>未来視の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>滝川ノア</DataList.Term>
        <DataList.Description>過去視の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>飛鳥美琴</DataList.Term>
        <DataList.Description>透明の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>西園寺リカ</DataList.Term>
        <DataList.Description>記憶操作の魔女</DataList.Description>
      </DataList.Item>
    </DataList.Root>
  )
}

export const Variant: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["subtle", "bold", "grid"]}
      rows={["horizontal", "vertical"]}
    >
      {(column, row, key) => {
        return (
          <DataList.Root
            key={key}
            variant={column}
            items={items}
            orientation={row}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["sm", "md", "lg"]}
      rows={["horizontal", "vertical"]}
    >
      {(column, row, key) => {
        return (
          <DataList.Root
            key={key}
            size={column}
            items={items}
            orientation={row}
          />
        )
      }}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <DataList.Root items={items} orientation="horizontal" />
      <DataList.Root items={items} orientation="vertical" />
    </VStack>
  )
}

export const MultipleTerms: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      { description: "入れ替わりの魔女", term: ["白石うらら", "清集院桃子"] },
      { description: "虜の魔女", term: ["小田切寧々", "紺野つばさ"] },
      {
        description: "思念（テレパシー）の魔女",
        term: ["大塚芽子", "萌黄ことり"],
      },
      { description: "未来視の魔女", term: ["猿島マリア", "筑紫愛子"] },
      { description: "過去視の魔女", term: ["滝川ノア", "姫川そら"] },
      { description: "透明の魔女", term: ["飛鳥美琴", "菊池アカネ"] },
      { description: "記憶操作の魔女", term: ["西園寺リカ", "虹野晴子"] },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <DataList.Root items={items} />

      <DataList.Root orientation="vertical">
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Term>清集院桃子</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Term>紺野つばさ</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Term>萌黄ことり</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Term>筑紫愛子</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Term>姫川そら</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Term>菊池アカネ</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Term>虹野晴子</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>
  )
}

export const MultipleDescriptions: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      {
        description: ["入れ替わりの魔女", "絶望的味覚音痴"],
        term: "白石うらら",
      },
      { description: ["虜の魔女", "得意教科は自称全教科"], term: "小田切寧々" },
      {
        description: ["思念（テレパシー）の魔女", "若干腐女子の気がある"],
        term: "大塚芽子",
      },
      {
        description: ["未来視の魔女", "服のセンスが独特な弟がいる"],
        term: "猿島マリア",
      },
      {
        description: ["過去視の魔女", "数々の問題を起こしている"],
        term: "滝川ノア",
      },
      { description: ["透明の魔女", "サディストの気がある"], term: "飛鳥美琴" },
      {
        description: ["記憶操作の魔女", "学校でもノーパンで過ごしている"],
        term: "西園寺リカ",
      },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <DataList.Root items={items} />

      <DataList.Root orientation="vertical">
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
          <DataList.Description>絶望的味覚音痴</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
          <DataList.Description>得意教科は自称全教科</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
          <DataList.Description>若干腐女子の気がある</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
          <DataList.Description>
            服のセンスが独特な弟がいる
          </DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
          <DataList.Description>数々の問題を起こしている</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
          <DataList.Description>サディストの気がある</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
          <DataList.Description>
            学校でもノーパンで過ごしている
          </DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>
  )
}

export const CustomTerm: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      {
        description: "入れ替わりの魔女",
        term: "白石うらら",
        termProps: { color: "blue" },
      },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <DataList.Root
        items={items}
        termProps={{ textDecoration: "line-through" }}
      />

      <DataList.Root col={2}>
        <DataList.Item>
          <DataList.Term color="blue">白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>
  )
}

export const CustomDescription: Story = () => {
  const items = useMemo<DataList.RootProps["items"]>(
    () => [
      {
        description: "入れ替わりの魔女",
        term: "白石うらら",
        descriptionProps: { color: "blue" },
      },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <DataList.Root
        items={items}
        descriptionProps={{ textDecoration: "line-through" }}
      />

      <DataList.Root col={2}>
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description color="blue">
            入れ替わりの魔女
          </DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>
  )
}
