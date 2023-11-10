import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import {
  Divider,
  HStack,
  Reorder,
  ReorderItem,
  ReorderTrigger,
  Text,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Reorder>

const meta: Meta<typeof Reorder> = {
  title: "Components / Data Display / Reorder",
  component: Reorder,
}

export default meta

export const basic: Story = () => {
  return (
    <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>
  )
}

export const withOrientation: Story = () => {
  return (
    <>
      <Reorder orientation="vertical">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation="horizontal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Reorder size="sm">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="md">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="normal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="lg">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Reorder variant="outline">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="elevated">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="unstyled">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withTrigger: Story = () => {
  return (
    <Reorder>
      <ReorderItem label="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem label="ベジータ">
        <HStack>
          <ReorderTrigger>
            <Icon icon={faPoo} />
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
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
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
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>
  )
}

export const useContainerScroll: Story = () => {
  return (
    <Reorder
      h="xs"
      p="md"
      borderWidth="1px"
      rounded="md"
      overflowY="scroll"
      layoutScroll
    >
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>
  )
}
