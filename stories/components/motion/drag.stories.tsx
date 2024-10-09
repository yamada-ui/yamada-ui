import type { Meta, StoryFn } from "@storybook/react"
import { Box, Center, Motion, useDragControls } from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Drag",
}

export default meta

export const basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="grab"
        drag
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
        onDrag={(_, info) => console.log("Drag", info)}
        onDragEnd={(_, info) => console.log("Drag ends", info)}
        onDragStart={(_, info) => console.log("Drag starts", info)}
      />
    </Center>
  )
}

export const withConstraints: Story = () => {
  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="grab"
        drag="x"
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />

      <Motion
        bg="secondary"
        cursor="grab"
        drag
        dragConstraints={{ bottom: 100, left: -100, right: 100, top: -100 }}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const withConstraintsRef: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const withElastic: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const withMomentum: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const withTransition: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const usePropagation: Story = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <Center
      ref={containerRef}
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Motion
        ref={itemRef}
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={containerRef}
        h="2xs"
        p="md"
        rounded="3xl"
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
          rounded="3xl"
          w="4xs"
          _active={{ cursor: "grabbing" }}
        />
      </Motion>
    </Center>
  )
}

export const useControls: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Box
        bg="secondary"
        cursor="pointer"
        h="2xs"
        rounded="3xl"
        w="2xs"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const disabledListener: Story = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <Center
      ref={constraintsRef}
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Box
        bg="secondary"
        cursor="pointer"
        h="2xs"
        rounded="3xl"
        w="2xs"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        bg="primary"
        cursor="grab"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        dragListener={false}
        h="2xs"
        rounded="3xl"
        w="2xs"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}
