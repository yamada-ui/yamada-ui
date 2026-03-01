import type { Meta, StoryFn } from "@storybook/react-vite"
import { useCallback, useMemo, useRef } from "react"
import { GripVerticalIcon } from "../icon"
import { Resizable } from "./"

type Story = StoryFn<typeof Resizable.Root>

import { PropsTable } from "#storybook"
import { useLocalStorage } from "../../hooks/use-local-storage"
import { Button } from "../button"
import { Wrap } from "../wrap"
const meta: Meta<typeof Resizable.Root> = {
  component: Resizable.Root,
  title: "Components / Resizable",
}

export default meta

export const Basic: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["border", "spacer", "plain"]}>
      {(_, row, key) => (
        <Resizable.Root
          key={key}
          variant={row}
          borderWidth={row === "border" ? "1px" : undefined}
          h="md"
          rounded={row === "border" ? "l2" : undefined}
        >
          <Resizable.Item
            borderWidth={row === "spacer" ? "1px" : undefined}
            display="center"
            rounded={row === "spacer" ? "l2" : undefined}
          >
            One
          </Resizable.Item>

          <Resizable.Trigger />

          <Resizable.Item
            borderWidth={row === "spacer" ? "1px" : undefined}
            display="center"
            rounded={row === "spacer" ? "l2" : undefined}
          >
            Two
          </Resizable.Item>
        </Resizable.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <>
      <Resizable.Root colorScheme="primary" variant="spacer" h="md">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root colorScheme="red" variant="spacer" h="md">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const Orientation: Story = () => {
  return (
    <>
      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="horizontal"
        rounded="l2"
      >
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="l2"
      >
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const DefaultSize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const MinMaxSize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Collapsible: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item
          collapsedSize="15%"
          collapsible
          defaultSize="30%"
          display="center"
          maxSize="50%"
          minSize="30%"
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="l2"
      >
        <Resizable.Item
          collapsedSize="15%"
          collapsible
          defaultSize="30%"
          display="center"
          maxSize="50%"
          minSize="30%"
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const Refs: Story = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <Resizable.Root ref={rootRef} borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item ref={itemRef} display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger ref={triggerRef} />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Icon: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="spacer" h="md" orientation="vertical">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const NestedResizable: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">Left</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root orientation="vertical">
            <Resizable.Item display="center">Top</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item display="center">Bottom</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="l2"
      >
        <Resizable.Item display="center">Top</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root>
            <Resizable.Item display="center">Left</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item display="center">Right</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" disabled h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Three</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger disabled />

        <Resizable.Item display="center">Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Three</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const onLayoutChange: Story = () => {
  return (
    <Resizable.Root
      borderWidth="1px"
      h="md"
      rounded="l2"
      onLayoutChange={(layout) => {
        console.log("layout change", layout)
      }}
      onLayoutChanged={(layout) => {
        console.log("layout changed", layout)
      }}
    >
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>
  )
}

export const OnResize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item
        display="center"
        onResize={(panelSize, id, prevPanelSize) => {
          console.log("resize", panelSize, id, prevPanelSize)
        }}
      >
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const LocaleStorage: Story = () => {
  const { defaultLayout, onLayoutChanged } = Resizable.useLayout({
    id: "persistence",
    storage: localStorage,
  })

  return (
    <Resizable.Root
      borderWidth="1px"
      defaultLayout={defaultLayout}
      h="md"
      rounded="l2"
      onLayoutChanged={onLayoutChanged}
    >
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>
  )
}

export const ConditionalLocaleStorage: Story = () => {
  const [showLeft, showLeftControls] = useLocalStorage({
    key: "showLeft",
    defaultValue: true,
    deserialize: (value) => value === "true",
    serialize: (value) => value.toString(),
  })
  const [showRight, showRightControls] = useLocalStorage({
    key: "showRight",
    defaultValue: true,
    deserialize: (value) => value === "true",
    serialize: (value) => value.toString(),
  })
  const getPanelIds = useCallback(() => {
    const panelIds: string[] = []

    if (showLeft) panelIds.push("left")

    panelIds.push("middle")

    if (showRight) panelIds.push("right")

    return panelIds
  }, [showLeft, showRight])

  const { defaultLayout, onLayoutChanged } = Resizable.useLayout({
    id: "conditional",
    panelIds: getPanelIds(),
    storage: localStorage,
  })

  return (
    <>
      <Wrap gap="md">
        <Button onClick={() => showLeftControls(!showLeft)}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={() => showRightControls(!showRight)}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable.Root
        borderWidth="1px"
        defaultLayout={defaultLayout}
        h="md"
        rounded="l2"
        onLayoutChanged={onLayoutChanged}
      >
        {showLeft ? (
          <>
            <Resizable.Item id="left" display="center" minSize="10%">
              Left
            </Resizable.Item>

            <Resizable.Trigger />
          </>
        ) : null}

        <Resizable.Item id="middle" display="center" minSize="10%">
          Middle
        </Resizable.Item>

        {showRight ? (
          <>
            <Resizable.Trigger />

            <Resizable.Item id="right" display="center" minSize="10%">
              Right
            </Resizable.Item>
          </>
        ) : null}
      </Resizable.Root>
    </>
  )
}

export const CookieStorage: Story = () => {
  const storage: Resizable.Storage = useMemo(
    () => ({
      getItem: (key) => {
        const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

        return match ? (match[2] ?? null) : null
      },
      setItem: (key, value) => {
        document.cookie = `${key}=${value}; max-age=31536000; path=/`
      },
    }),
    [],
  )
  const { defaultLayout, onLayoutChanged } = Resizable.useLayout({
    id: "persistence",
    storage,
  })

  return (
    <Resizable.Root
      borderWidth="1px"
      defaultLayout={defaultLayout}
      h="md"
      rounded="l2"
      onLayoutChanged={onLayoutChanged}
    >
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>
  )
}

export const CustomControl: Story = () => {
  const controlRef = useRef<Resizable.ItemControl>(null)

  return (
    <>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.collapse()}>
          Collapse "one"
        </Button>

        <Button onClick={() => controlRef.current?.expand()}>
          Expand "one"
        </Button>
        <Button onClick={() => controlRef.current?.resize("30%")}>
          Resize "one" to 30
        </Button>

        <Button onClick={() => controlRef.current?.resize("50%")}>
          Resize "one" to 50
        </Button>
      </Wrap>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item
          collapsedSize="15%"
          collapsible
          controlRef={controlRef}
          display="center"
          maxSize="50%"
          minSize="30%"
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}
