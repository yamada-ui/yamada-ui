import type { Meta, StoryFn } from "@storybook/react"
import type { ResizableItemControl, ResizableStorage } from "./"
import { useEffect, useMemo, useRef } from "react"
import { GripVerticalIcon, MoveHorizontalIcon } from "../icon"
import { Resizable } from "./"

type Story = StoryFn<typeof Resizable.Root>

import { useBoolean } from "../../hooks/use-boolean"
import { Button } from "../button"
import { Center } from "../center"
import { Wrap } from "../wrap"
const meta: Meta<typeof Resizable.Root> = {
  component: Resizable.Root,
  title: "Components / Resizable",
}

export default meta

export const Basic: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="md">
      <Resizable.Item as={Center}>One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Variant: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="spacer" h="md">
        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="unstyled" h="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const ColorScheme: Story = () => {
  return (
    <>
      <Resizable.Root colorScheme="primary" variant="spacer" h="md">
        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root colorScheme="red" variant="spacer" h="md">
        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
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
        rounded="md"
      >
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="md"
      >
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const DefaultSize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="md">
      <Resizable.Item as={Center} defaultSize={30}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const MinMaxSize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="md">
      <Resizable.Item as={Center} maxSize={70} minSize={30}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const KeyboardStep: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <Resizable.Item as={Center}>One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Collapsible: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item
          as={Center}
          collapsedSize={5}
          collapsible
          defaultSize={15}
          maxSize={20}
          minSize={15}
          onCollapse={() => {
            console.log("collapsed item")
          }}
          onExpand={() => {
            console.log("expand item")
          }}
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="md"
      >
        <Resizable.Item
          as={Center}
          collapsedSize={10}
          collapsible
          defaultSize={25}
          maxSize={30}
          minSize={25}
          onCollapse={() => {
            console.log("collapsed item")
          }}
          onExpand={() => {
            console.log("expand item")
          }}
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const Refs: Story = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("Container ref", containerRef)
    console.log("Group ref", groupRef)
    console.log("Item ref", itemRef)
    console.log("Item inner ref", innerRef)
    console.log("Trigger ref", triggerRef)
  }, [])

  return (
    <Resizable.Root
      ref={groupRef}
      borderWidth="1px"
      containerRef={containerRef}
      h="md"
      rounded="md"
    >
      <Resizable.Item ref={itemRef} as={Center} innerRef={innerRef}>
        One
      </Resizable.Item>

      <Resizable.Trigger ref={triggerRef} />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const Icon: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="spacer" h="md" orientation="vertical">
        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          One
        </Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item as={Center} borderWidth="1px" rounded="md">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger icon={<MoveHorizontalIcon />} />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="md"
      >
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger icon={<MoveHorizontalIcon />} />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const NestedResizable: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item as={Center}>Left</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root orientation="vertical">
            <Resizable.Item as={Center}>Top</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item as={Center}>Bottom</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        orientation="vertical"
        rounded="md"
      >
        <Resizable.Item as={Center}>Top</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root>
            <Resizable.Item as={Center}>Left</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item as={Center}>Right</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Resizable.Root borderWidth="1px" disabled h="md" rounded="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Three</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger disabled />

        <Resizable.Item as={Center}>Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Three</Resizable.Item>
      </Resizable.Root>
    </>
  )
}

export const OnResize: Story = () => {
  return (
    <Resizable.Root borderWidth="1px" h="md" rounded="md">
      <Resizable.Item
        as={Center}
        onResize={(size, prevSize) => {
          console.log("resized", size, prevSize)
        }}
      >
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>
  )
}

export const LocaleStorage: Story = () => {
  const [showLeft, showLeftControls] = useBoolean(true)
  const [showRight, showRightControls] = useBoolean(true)

  return (
    <>
      <Resizable.Root
        borderWidth="1px"
        h="md"
        rounded="md"
        storageKey="persistence"
      >
        <Resizable.Item id="one" as={Center}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item id="two" as={Center}>
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Wrap gap="md">
        <Button onClick={showLeftControls.toggle}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={showRightControls.toggle}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable.Root
        borderWidth="1px"
        h="md"
        rounded="md"
        storageKey="conditional"
      >
        {showLeft ? (
          <>
            <Resizable.Item id="left" as={Center} minSize={10} order={1}>
              Left
            </Resizable.Item>

            <Resizable.Trigger />
          </>
        ) : null}

        <Resizable.Item id="middle" as={Center} minSize={10} order={2}>
          Middle
        </Resizable.Item>

        {showRight ? (
          <>
            <Resizable.Trigger />

            <Resizable.Item id="right" as={Center} minSize={10} order={3}>
              Right
            </Resizable.Item>
          </>
        ) : null}
      </Resizable.Root>
    </>
  )
}

export const CookieStorage: Story = () => {
  const storage: ResizableStorage = useMemo(
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

  return (
    <Resizable.Root
      borderWidth="1px"
      h="md"
      rounded="md"
      storage={storage}
      storageKey="persistence"
    >
      <Resizable.Item id="one" as={Center}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" as={Center}>
        Two
      </Resizable.Item>
    </Resizable.Root>
  )
}

export const CustomControls: Story = () => {
  const controlRef = useRef<ResizableItemControl>(null)

  return (
    <>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.collapse()}>
          Collapse "one"
        </Button>

        <Button onClick={() => controlRef.current?.expand()}>
          Expand "one"
        </Button>
        <Button onClick={() => controlRef.current?.resize(30)}>
          Resize "one" to 30
        </Button>

        <Button onClick={() => controlRef.current?.resize(50)}>
          Resize "one" to 50
        </Button>
      </Wrap>

      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item
          as={Center}
          collapsedSize={15}
          collapsible
          controlRef={controlRef}
          maxSize={50}
          minSize={30}
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>
  )
}
