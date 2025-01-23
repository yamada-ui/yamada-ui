import type { Meta, StoryFn } from "@storybook/react"
import type { DataListProps } from "./"
import { useMemo } from "react"
import { Separator } from "../separator"
import { DataList, DataListDescription, DataListItem, DataListTerm } from "./"

type Story = StoryFn<typeof DataList>

const meta: Meta<typeof DataList> = {
  component: DataList,
  title: "Components / DataList",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList items={items} />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>
  )
}

export const WithSize: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList size="sm" items={items} />

      <Separator />

      <DataList size="md" items={items} />

      <Separator />

      <DataList size="lg" items={items} />

      <Separator />

      <DataList size="sm" items={items} orientation="vertical" />

      <Separator />

      <DataList size="md" items={items} orientation="vertical" />

      <Separator />

      <DataList size="lg" items={items} orientation="vertical" />
    </>
  )
}

export const WithVariant: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList variant="subtle" items={items} />

      <Separator />

      <DataList variant="bold" items={items} />

      <Separator />

      <DataList variant="grid" items={items} />
    </>
  )
}

export const WithOrientation: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList items={items} orientation="horizontal" />

      <Separator />

      <DataList items={items} orientation="vertical" />
    </>
  )
}

export const UseMultipleTerms: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList items={items} />

      <Separator />

      <DataList orientation="vertical">
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListTerm>清集院桃子</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListTerm>紺野つばさ</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListTerm>萌黄ことり</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListTerm>筑紫愛子</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListTerm>姫川そら</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListTerm>菊池アカネ</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListTerm>虹野晴子</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>
  )
}

export const UseMultipleDescriptions: Story = () => {
  const items = useMemo<DataListProps["items"]>(
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
    <>
      <DataList items={items} />

      <Separator />

      <DataList orientation="vertical">
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
          <DataListDescription>絶望的味覚音痴</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
          <DataListDescription>得意教科は自称全教科</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
          <DataListDescription>若干腐女子の気がある</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
          <DataListDescription>服のセンスが独特な弟がいる</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
          <DataListDescription>数々の問題を起こしている</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
          <DataListDescription>サディストの気がある</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
          <DataListDescription>
            学校でもノーパンで過ごしている
          </DataListDescription>
        </DataListItem>
      </DataList>
    </>
  )
}

export const CustomTerm: Story = () => {
  const items = useMemo<DataListProps["items"]>(
    () => [
      {
        description: "入れ替わりの魔女",
        term: "白石うらら",
        termProps: { color: "primary" },
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
    <>
      <DataList items={items} termProps={{ textDecoration: "line-through" }} />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm color="primary">白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>
  )
}

export const CustomDescription: Story = () => {
  const items = useMemo<DataListProps["items"]>(
    () => [
      {
        description: "入れ替わりの魔女",
        term: "白石うらら",
        descriptionProps: { color: "primary" },
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
    <>
      <DataList
        items={items}
        descriptionProps={{ textDecoration: "line-through" }}
      />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription color="primary">
            入れ替わりの魔女
          </DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>
  )
}
