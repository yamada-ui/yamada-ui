import type { Meta, StoryFn } from "@storybook/react"
import type { ReorderGenerateItem } from "@yamada-ui/react"
import { Ghost } from "@yamada-ui/lucide"
import {
  HStack,
  Reorder,
  ReorderItem,
  ReorderTrigger,
  Separator,
  Text,
} from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof Reorder>

const meta: Meta<typeof Reorder> = {
  component: Reorder,
  title: "Components / Data Display / Reorder",
}

export default meta

export const basic: Story = () => {
  return (
    <Reorder>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>
  )
}

export const withItems: Story = () => {
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

  return <Reorder items={items} />
}

export const withOrientation: Story = () => {
  return (
    <>
      <Reorder orientation="vertical">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder orientation="horizontal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Reorder size="sm">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder size="md">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder size="normal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder size="lg">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Reorder variant="outline">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder variant="elevated">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Separator />

      <Reorder variant="unstyled">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withTrigger: Story = () => {
  return (
    <Reorder>
      <ReorderItem value="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem value="ベジータ">
        <HStack>
          <ReorderTrigger>
            <Ghost />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>
  )
}

export const withOnChange: Story = () => {
  return (
    <Reorder
      onChange={(labels) => console.log(`changed '${labels.join(`', '`)}'`)}
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>
  )
}

export const withOnCompleteChange: Story = () => {
  return (
    <Reorder
      onCompleteChange={(labels) =>
        console.log(`completed '${labels.join(`', '`)}'`)
      }
    >
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>
  )
}

export const useContainerScroll: Story = () => {
  return (
    <Reorder
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
    </Reorder>
  )
}
