import type { Meta, StoryFn } from "@storybook/react"
import { useEffect, useMemo, useRef } from "react"
import { GripVertical, MoveHorizontal } from "@yamada-ui/lucide"
import type { ResizableItemControl, ResizableStorage } from "@yamada-ui/react"
import {
  Button,
  Center,
  Resizable,
  ResizableItem,
  ResizableTrigger,
  Wrap,
  useBoolean,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Resizable>

const meta: Meta<typeof Resizable> = {
  title: "Components / Data Display / Resizable",
  component: Resizable,
}

export default meta

export const basic: Story = () => {
  return (
    <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
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

export const withColorScheme: Story = () => {
  return (
    <>
      <Resizable variant="spacer" colorScheme="primary" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable variant="spacer" colorScheme="red" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>
    </>
  )
}

export const withDirection: Story = () => {
  return (
    <>
      <Resizable direction="horizontal" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const withDefaultSize: Story = () => {
  return (
    <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const withMinMaxSize: Story = () => {
  return (
    <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const withKeyboardStep: Story = () => {
  return (
    <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const withCollapsible: Story = () => {
  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem
          as={Center}
          collapsedSize={5}
          collapsible
          defaultSize={15}
          minSize={15}
          maxSize={20}
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

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem
          as={Center}
          collapsedSize={10}
          collapsible
          defaultSize={25}
          minSize={25}
          maxSize={30}
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

export const withRefs: Story = () => {
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
      containerRef={containerRef}
      h="md"
      rounded="md"
      borderWidth="1px"
    >
      <ResizableItem as={Center} ref={itemRef} innerRef={innerRef}>
        One
      </ResizableItem>

      <ResizableTrigger ref={triggerRef} />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>
  )
}

export const withIcon: Story = () => {
  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" variant="spacer" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>
    </>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}

export const nestedResizable: Story = () => {
  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px">
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

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
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

export const isDisabled: Story = () => {
  return (
    <>
      <Resizable isDisabled h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>

      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger isDisabled />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>
    </>
  )
}

export const useOnResize: Story = () => {
  return (
    <Resizable h="md" rounded="md" borderWidth="1px">
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

export const useLocaleStorage: Story = () => {
  const [showLeft, showLeftControls] = useBoolean(true)
  const [showRight, showRightControls] = useBoolean(true)

  return (
    <>
      <Resizable h="md" rounded="md" borderWidth="1px" storageKey="persistence">
        <ResizableItem as={Center} id="one">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} id="two">
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

      <Resizable h="md" rounded="md" borderWidth="1px" storageKey="conditional">
        {showLeft ? (
          <>
            <ResizableItem as={Center} id="left" minSize={10} order={1}>
              Left
            </ResizableItem>

            <ResizableTrigger />
          </>
        ) : null}

        <ResizableItem as={Center} id="middle" minSize={10} order={2}>
          Middle
        </ResizableItem>

        {showRight ? (
          <>
            <ResizableTrigger />

            <ResizableItem as={Center} id="right" minSize={10} order={3}>
              Right
            </ResizableItem>
          </>
        ) : null}
      </Resizable>
    </>
  )
}

export const useCookieStorage: Story = () => {
  const storage: ResizableStorage = useMemo(
    () => ({
      getItem: (key) => {
        const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

        return match ? match[2] : null
      },
      setItem: (key, value) => {
        document.cookie = `${key}=${value}; max-age=31536000; path=/`
      },
    }),
    [],
  )

  return (
    <Resizable
      h="md"
      rounded="md"
      borderWidth="1px"
      storageKey="persistence"
      storage={storage}
    >
      <ResizableItem as={Center} id="one">
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center} id="two">
        Two
      </ResizableItem>
    </Resizable>
  )
}

export const customControls: Story = () => {
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

      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem
          as={Center}
          controlRef={controlRef}
          collapsible
          collapsedSize={15}
          minSize={30}
          maxSize={50}
        >
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>
  )
}
