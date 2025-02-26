import type { Meta, StoryFn } from "@storybook/react"
import type { ResizableItemControl, ResizableStorage } from "./"
import { useEffect, useMemo, useRef } from "react"
import { GripVerticalIcon, MoveHorizontalIcon } from "../icon"
import { Resizable, ResizableItem, ResizableTrigger } from "./"

type Story = StoryFn<typeof Resizable>

import { useBoolean } from "../../hooks/use-boolean"
import { Button } from "../button"
import { Center } from "../center"
import { Wrap } from "../flex"
const meta: Meta<typeof Resizable> = {
  component: Resizable,
  title: "Components / Resizable",
}

export default meta

export const Basic: Story = () => {
  return (
    <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable variant="unstyled" h="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Resizable colorScheme="primary" variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable colorScheme="red" variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>
  )
}

export const WithDirection: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" direction="horizontal" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const WithDefaultSize: Story = () => {
  return (
    <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const WithMinMaxSize: Story = () => {
  return (
    <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const WithKeyboardStep: Story = () => {
  return (
    <Resizable borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const WithCollapsible: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem
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
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem
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
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const WithRefs: Story = () => {
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
    <Resizable
      ref={groupRef}
      borderWidth="1px"
      containerRef={containerRef}
      h="md"
      rounded="md"
    >
      <ResizableItem ref={itemRef} as={Center} innerRef={innerRef}>
        One
      </ResizableItem>

      <ResizableTrigger ref={triggerRef} />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const WithIcon: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" direction="vertical" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const NestedResizable: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>Left</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>
          <Resizable direction="vertical">
            <ResizableItem as={Center}>Top</ResizableItem>

            <ResizableTrigger />

            <ResizableItem as={Center}>Bottom</ResizableItem>
          </Resizable>
        </ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>Top</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>
          <Resizable>
            <ResizableItem as={Center}>Left</ResizableItem>

            <ResizableTrigger />

            <ResizableItem as={Center}>Right</ResizableItem>
          </Resizable>
        </ResizableItem>
      </Resizable>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Resizable borderWidth="1px" disabled h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger disabled />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>
    </>
  )
}

export const UseOnResize: Story = () => {
  return (
    <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem
        as={Center}
        onResize={(size, prevSize) => {
          console.log("resized", size, prevSize)
        }}
      >
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const UseLocaleStorage: Story = () => {
  const [showLeft, showLeftControls] = useBoolean(true)
  const [showRight, showRightControls] = useBoolean(true)

  return (
    <>
      <Resizable borderWidth="1px" h="md" rounded="md" storageKey="persistence">
        <ResizableItem id="one" as={Center}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem id="two" as={Center}>
          Two
        </ResizableItem>
      </Resizable>

      <Wrap gap="md">
        <Button onClick={showLeftControls.toggle}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={showRightControls.toggle}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable borderWidth="1px" h="md" rounded="md" storageKey="conditional">
        {showLeft ? (
          <>
            <ResizableItem id="left" as={Center} minSize={10} order={1}>
              Left
            </ResizableItem>

            <ResizableTrigger />
          </>
        ) : null}

        <ResizableItem id="middle" as={Center} minSize={10} order={2}>
          Middle
        </ResizableItem>

        {showRight ? (
          <>
            <ResizableTrigger />

            <ResizableItem id="right" as={Center} minSize={10} order={3}>
              Right
            </ResizableItem>
          </>
        ) : null}
      </Resizable>
    </>
  )
}

export const UseCookieStorage: Story = () => {
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
    <Resizable
      borderWidth="1px"
      h="md"
      rounded="md"
      storage={storage}
      storageKey="persistence"
    >
      <ResizableItem id="one" as={Center}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem id="two" as={Center}>
        Two
      </ResizableItem>
    </Resizable>
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

      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem
          as={Center}
          collapsedSize={15}
          collapsible
          controlRef={controlRef}
          maxSize={50}
          minSize={30}
        >
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}
