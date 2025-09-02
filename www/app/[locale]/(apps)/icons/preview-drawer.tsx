"use client"

import type { ElementType, RefObject } from "react"
import {
  assignRef,
  Center,
  CloseButton,
  Drawer,
  Heading,
  HStack,
  Icon,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { Fragment, memo, useRef } from "react"
import { CodePreview } from "@/components"

export interface PreviewDrawerProps extends Drawer.RootProps {
  onOpenRef: RefObject<(title: string, Icon: ElementType) => void>
}

export const PreviewDrawer = memo(function PreviewDrawer({
  onOpenRef,
  ...rest
}: PreviewDrawerProps) {
  const data = useRef<null | { Icon: ElementType; title: string }>(null)
  const { open, onClose, onOpen } = useDisclosure({
    onClose: () => {
      data.current = null
    },
  })

  assignRef(onOpenRef, (title, Icon) => {
    data.current = { Icon, title }
    onOpen()
  })

  const { Icon: PreviewIcon = Fragment, title } = data.current ?? {}

  return (
    <Drawer.Root
      autoFocus={false}
      closeOnDrag
      open={open}
      placement="block-end"
      withDragBar={false}
      onClose={onClose}
      onOpen={onOpen}
      {...rest}
    >
      <Drawer.Content
        alignItems="stretch"
        display="grid"
        gap="lg"
        gridTemplateColumns={{ base: "auto 1fr", lg: "1fr" }}
        p="{space}"
      >
        <Center
          bg="bg.subtle"
          boxSize={{ base: "auto", md: "xs" }}
          gridRow={{ base: "1 / 3", md: "2 / 3" }}
          mx="auto"
          p="md"
          position="relative"
          rounded="l4"
        >
          <PreviewIcon fontSize="12rem" zIndex="1" />

          <Icon
            boxSize="full"
            fill="none"
            left="0"
            position="absolute"
            stroke={["border.emphasized", "border.muted"]}
            strokeWidth="0.1"
            top="0"
            viewBox="0 0 24 24"
          >
            {Array.from({ length: 23 }).map((_, index) => {
              index += 1

              return (
                <g key={index}>
                  <line x1="0" x2="24" y1={index} y2={index} />
                  <line x1={index} x2={index} y1="0" y2="24" />
                </g>
              )
            })}
          </Icon>
        </Center>

        <HStack alignItems="flex-start" minW="0" w="full">
          <Heading as="h3" flex="1" lineClamp={1}>
            {title}
          </Heading>

          <Drawer.CloseTrigger>
            <CloseButton />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            bg="bg.subtle"
            code={`import { ${title} } from "@yamada-ui/react"`}
          />

          <CodePreview lang="tsx" bg="bg.subtle" code={`<${title} />`} />
        </VStack>
      </Drawer.Content>
    </Drawer.Root>
  )
})
