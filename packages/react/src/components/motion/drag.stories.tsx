import type { Meta, StoryFn } from "@storybook/react-vite"
import { useDragControls } from "motion/react"
import { useRef } from "react"
import { App } from "../../../storybook/components"
import { Box } from "../box"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Drag",
}

export default meta

export const Basic: Story = () => {
  return (
    <App>
      <Motion
        bg="mono"
        cursor="grab"
        drag
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
        onDrag={(_, info) => console.log("Drag", info)}
        onDragEnd={(_, info) => console.log("Drag ends", info)}
        onDragStart={(_, info) => console.log("Drag starts", info)}
      />
    </App>
  )
}

export const DragConstraints: Story = () => {
  return (
    <App>
      <Motion
        bg="mono"
        cursor="grab"
        drag="x"
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />

      <Motion
        bg="secondary"
        cursor="grab"
        drag
        dragConstraints={{ bottom: 100, left: -100, right: 100, top: -100 }}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DragConstraintsRef: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <App ref={constraintsRef}>
      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DragElastic: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <App ref={constraintsRef}>
      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DragMomentum: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <App ref={constraintsRef}>
      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DragTransition: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <App ref={constraintsRef}>
      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DragPropagation: Story = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <App ref={containerRef}>
      <Motion
        ref={itemRef}
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={containerRef}
        h="2xs"
        p="md"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      >
        <Motion
          bg="secondary"
          cursor="grab"
          drag
          dragConstraints={itemRef}
          dragPropagation
          h="4xs"
          rounded="l3"
          w="4xs"
          _active={{ cursor: "grabbing" }}
        />
      </Motion>
    </App>
  )
}

export const DragControls: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <App ref={constraintsRef} gap="md">
      <Box
        bg="secondary"
        cursor="pointer"
        h="2xs"
        rounded="l3"
        w="2xs"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}

export const DisabledDragListener: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <App ref={constraintsRef} gap="md">
      <Box
        bg="secondary"
        cursor="pointer"
        h="2xs"
        rounded="l3"
        w="2xs"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        bg="mono"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        dragListener={false}
        h="2xs"
        rounded="l3"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </App>
  )
}
