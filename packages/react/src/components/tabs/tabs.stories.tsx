import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { PropsTable } from "../../../storybook/components"
import { Text } from "../text"
import { Tabs } from "./"

type Story = StoryFn<typeof Tabs.Root>

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  title: "Components / Tabs",
}

export default meta

export const Basic: Story = () => {
  return (
    <Tabs.Root>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const DefaultIndex: Story = () => {
  return (
    <Tabs.Root defaultIndex={1}>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Tabs.Root key={key} size={row}>
          <Tabs.Tab>孫悟空</Tabs.Tab>
          <Tabs.Tab>ベジータ</Tabs.Tab>
          <Tabs.Tab>フリーザ</Tabs.Tab>

          <Tabs.TabPanel>
            <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Text>へっ！きたねぇ花火だ</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Text>
              私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
            </Text>
          </Tabs.TabPanel>
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="column"
      rows={[
        "line",
        "sticky",
        "sticky-subtle",
        "sticky-solid",
        "rounded",
        "rounded-subtle",
        "rounded-solid",
        "unstyled",
      ]}
    >
      {(_, row, key) => (
        <Tabs.Root key={key} variant={row}>
          <Tabs.Tab>孫悟空</Tabs.Tab>
          <Tabs.Tab>ベジータ</Tabs.Tab>
          <Tabs.Tab>フリーザ</Tabs.Tab>

          <Tabs.TabPanel>
            <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Text>へっ！きたねぇ花火だ</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Text>
              私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
            </Text>
          </Tabs.TabPanel>
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <Tabs.Root colorScheme="red" variant="rounded-solid">
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const Align: Story = () => {
  return (
    <>
      <Tabs.Root align="start">
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>

      <Tabs.Root align="center">
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>

      <Tabs.Root align="end">
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>
    </>
  )
}

export const Orientation: Story = () => {
  return (
    <>
      <Tabs.Root orientation="horizontal">
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>

      <Tabs.Root orientation="vertical">
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>
    </>
  )
}

export const Fitted: Story = () => {
  return (
    <>
      <Tabs.Root variant="line" fitted>
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>

      <Tabs.Root variant="sticky" fitted>
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>

        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.Root>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <Tabs.Root>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab disabled>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const Focusable: Story = () => {
  return (
    <Tabs.Root>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab focusable>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const Manual: Story = () => {
  return (
    <Tabs.Root manual>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const Lazy: Story = () => {
  return (
    <Tabs.Root lazy lazyBehavior="unmount">
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const CustomTabList: Story = () => {
  return (
    <Tabs.Root>
      <Tabs.TabList borderWidth={1}>
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}

export const CustomTabPanels: Story = () => {
  return (
    <Tabs.Root variant="sticky">
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanels
        borderBottomWidth={1}
        borderLeftWidth={1}
        borderRightWidth={1}
      >
        <Tabs.TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs.Root>
  )
}

export const CustomControl: Story = () => {
  const [index, onChange] = useState<number>(0)

  return (
    <Tabs.Root index={index} onChange={onChange}>
      <Tabs.Tab>孫悟空</Tabs.Tab>
      <Tabs.Tab>ベジータ</Tabs.Tab>
      <Tabs.Tab>フリーザ</Tabs.Tab>

      <Tabs.TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </Tabs.TabPanel>
    </Tabs.Root>
  )
}
