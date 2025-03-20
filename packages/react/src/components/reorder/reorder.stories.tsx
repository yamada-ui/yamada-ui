import type { Meta, StoryFn } from "@storybook/react"
import type { ReorderGenerateItem } from "."
import { useMemo } from "react"
import { ReorderItem, ReorderRoot, ReorderTrigger } from "."
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
    <ReorderRoot>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>
  )
}

export const WithItems: Story = () => {
  const items = useMemo<ReorderGenerateItem[]>(
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

export const WithOrientation: Story = () => {
  return (
    <>
      <ReorderRoot orientation="vertical">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot orientation="horizontal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>
    </>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <ReorderRoot size="sm">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot size="md">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot size="normal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot size="lg">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <ReorderRoot variant="outline">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot variant="elevated">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>

      <Separator />

      <ReorderRoot variant="unstyled">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </ReorderRoot>
    </>
  )
}

export const WithTrigger: Story = () => {
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

export const WithOnChange: Story = () => {
  return (
    <ReorderRoot
      onChange={(labels) => console.log(`changed '${labels.join(`', '`)}'`)}
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>
  )
}

export const WithOnCompleteChange: Story = () => {
  return (
    <ReorderRoot
      onCompleteChange={(labels) =>
        console.log(`completed '${labels.join(`', '`)}'`)
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

export const UseContainerScroll: Story = () => {
  return (
    <ReorderRoot
      borderWidth="1px"
      h="xs"
      layoutScroll
      outline="0"
      overflowY="scroll"
      p="md"
      rounded="md"
      tabIndex={0}
      _focusVisible={{ boxShadow: "outline" }}
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>
  )
}
