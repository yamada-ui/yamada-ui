import type { Meta, StoryFn } from "@storybook/react-vite"
import type { FC } from "react"
import { useMemo, useState } from "react"
import { PropsTable } from "../../../storybook/components"
import { useInterval } from "../../hooks/use-interval"
import { uuid } from "../../utils"
import { Button } from "../button"
import { Heading } from "../heading"
import { PlusIcon, XIcon } from "../icon"
import { IconButton } from "../icon-button"
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
      <Tabs.List>
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Tabs.Panel>
      <Tabs.Panel>へっ！きたねぇ花火だ</Tabs.Panel>
      <Tabs.Panel>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Tabs.Panel>
    </Tabs.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Variant: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["horizontal", "vertical"]}
      rows={["line", "outline", "subtle", "plain"]}
    >
      {(column, row, key) => (
        <Tabs.Root key={key} variant={row} items={items} orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["horizontal", "vertical"]}
      rows={["sm", "md", "lg"]}
    >
      {(column, row, key) => (
        <Tabs.Root key={key} size={row} items={items} orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const DefaultIndex: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <Tabs.Root defaultIndex={1} items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Orientation: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
      {(_, row, key) => (
        <Tabs.Root key={key} items={items} orientation={row}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const Align: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["horizontal", "vertical"]}
      rows={["start", "center", "end"]}
    >
      {(column, row, key) => (
        <Tabs.Root
          key={key}
          align={row}
          items={items}
          minH="xs"
          orientation={column}
        >
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const Fitted: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
      {(_, row, key) => (
        <Tabs.Root key={key} fitted items={items} minH="xs" orientation={row}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        disabled: true,
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Manual: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <Tabs.Root items={items} manual>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Link: Story = () => {
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        asChild: true,
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: (
          <Text as="a" href="#孫悟空">
            孫悟空
          </Text>
        ),
      },
      {
        asChild: true,
        panel: "へっ！きたねぇ花火だ",
        tab: (
          <Text as="a" href="#ベジータ">
            ベジータ
          </Text>
        ),
      },
      {
        asChild: true,
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: (
          <Text as="a" href="#フリーザ">
            フリーザ
          </Text>
        ),
      },
    ],
    [],
  )

  return (
    <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Lazy: Story = () => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1)
    useInterval(() => setState((prev) => prev + 1), 1000)

    return <>Panel {state}</>
  }

  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      { panel: <Panel />, tab: "Tab 1" },
      { panel: <Panel />, tab: "Tab 2" },
      { panel: <Panel />, tab: "Tab 3" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      rows={["Not Lazy", "Lazy", "Keep Mounted"] as const}
    >
      {(_, row, key) => (
        <Tabs.Root
          key={key}
          items={items}
          lazy={row === "Lazy" || row === "Keep Mounted"}
          lazyBehavior={row === "Keep Mounted" ? "keepMounted" : "unmount"}
        >
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>
      )}
    </PropsTable>
  )
}

export const LazyBehavior: Story = () => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1)
    useInterval(() => setState((prev) => prev + 1), 1000)

    return <>Panel {state}</>
  }

  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      { panel: <Panel />, tab: "Tab 1" },
      { panel: <Panel />, tab: "Tab 2" },
      { panel: <Panel />, tab: "Tab 3" },
    ],
    [],
  )

  return (
    <Tabs.Root items={items} lazy lazyBehavior="keepMounted">
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

export const Dynamic: Story = () => {
  const [index, setIndex] = useState(0)
  const [items, setItems] = useState<Required<Tabs.RootProps>["items"]>([
    { id: uuid(), panel: "Tab Content", tab: "Tab" },
    { id: uuid(), panel: "Tab Content", tab: "Tab" },
    { id: uuid(), panel: "Tab Content", tab: "Tab" },
  ])

  const onAddTab = () => {
    const nextItems = [
      ...items,
      { id: uuid(), panel: "Tab Content", tab: "Tab" },
    ]
    setItems(nextItems)
    setIndex(nextItems.length - 1)
  }

  const onRemoveTab = (id: string) => {
    const removeIndex = items.findIndex((item) => item.id === id)
    const nextItems = items.filter((item) => item.id !== id)

    setItems(nextItems)

    if (removeIndex < index) {
      setIndex(index - 1)
    } else if (removeIndex === index) {
      setIndex(Math.min(index, nextItems.length - 1))
    }
  }

  return (
    <Tabs.Root index={index} items={items} manual onChange={setIndex}>
      <Tabs.List>
        {items.map(({ id, tab }) => {
          const hasRemove = items.length > 1

          return (
            <Tabs.Tab key={id} transition="none">
              {tab}
              {hasRemove ? (
                <IconButton
                  as="span"
                  size="2xs"
                  variant="ghost"
                  aria-label="Remove Tab"
                  icon={<XIcon />}
                  role="button"
                  onClick={(ev) => {
                    ev.stopPropagation()
                    onRemoveTab(id!)
                  }}
                />
              ) : null}
            </Tabs.Tab>
          )
        })}

        <Button
          size="xs"
          variant="ghost"
          role="tab"
          startIcon={<PlusIcon />}
          onClick={onAddTab}
        >
          Add Tab
        </Button>
      </Tabs.List>

      {items.map(({ id, panel }, index) => (
        <Tabs.Panel key={id}>
          <Heading>
            {panel} {id}
          </Heading>

          <Text>index: {index}</Text>
          <Text>id: {id}</Text>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  )
}

export const CustomControl: Story = () => {
  const [index, setIndex] = useState(0)
  const items = useMemo<Tabs.RootProps["items"]>(
    () => [
      {
        panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
        tab: "孫悟空",
      },
      {
        panel: "へっ！きたねぇ花火だ",
        tab: "ベジータ",
      },
      {
        panel:
          "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
        tab: "フリーザ",
      },
    ],
    [],
  )

  return (
    <Tabs.Root index={index} items={items} onChange={setIndex}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}
