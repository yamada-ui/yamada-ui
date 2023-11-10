import { Meta, StoryFn } from "@storybook/react"
import { Box, Center, Motion, useDragControls } from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  title: "Components / Motion / Drag",
  component: Motion,
}

export default meta

export const basic: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        drag
        onDrag={(_, info) => console.log("Drag", info)}
        onDragStart={(_, info) => console.log("Drag starts", info)}
        onDragEnd={(_, info) => console.log("Drag ends", info)}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}

export const withConstraints: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion
        drag="x"
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
      />

      <Motion
        drag
        dragConstraints={{ top: -100, left: -100, bottom: 100, right: 100 }}
        w="2xs"
        h="2xs"
        bg="secondary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Motion
        drag
        dragConstraints={constraintsRef}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Motion
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Motion
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Motion
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
    >
      <Motion
        ref={itemRef}
        drag
        dragConstraints={containerRef}
        w="2xs"
        h="2xs"
        p="md"
        bg="primary"
        rounded="3xl"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
      >
        <Motion
          drag
          dragConstraints={itemRef}
          dragPropagation
          w="4xs"
          h="4xs"
          bg="secondary"
          rounded="3xl"
          cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Box
        w="2xs"
        h="2xs"
        bg="secondary"
        rounded="3xl"
        cursor="pointer"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
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
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      gap="md"
    >
      <Box
        w="2xs"
        h="2xs"
        bg="secondary"
        rounded="3xl"
        cursor="pointer"
        onPointerDown={(ev) => dragControls.start(ev, { snapToCursor: true })}
      />

      <Motion
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        dragListener={false}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
      />
    </Center>
  )
}
