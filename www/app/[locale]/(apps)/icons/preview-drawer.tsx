"use client"

import type { ElementType, RefObject } from "react"
import {
  assignRef,
  Center,
  CloseButton,
  Drawer,
  Flex,
  Heading,
  HStack,
  Icon,
  useClipboard,
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
  const { Icon: PreviewIcon = Fragment, title } = data.current ?? {}
  const { onCopy } = useClipboard(title)
  const { open, onClose, onOpen } = useDisclosure({
    onClose: () => {
      data.current = null
    },
  })

  assignRef(onOpenRef, (title, Icon) => {
    data.current = { Icon, title }
    onOpen()
  })

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
        bg={["bg", "bg.ghost"]}
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

        <HStack
          alignItems="flex-start"
          justifyContent="space-between"
          minW="0"
          w="full"
        >
          <Flex as="button" lineClamp={1} rounded="l2" onClick={onCopy}>
            <Heading as="h3">{title}</Heading>
          </Flex>

          <Drawer.CloseTrigger>
            <CloseButton />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            code={`import { ${title} } from "@yamada-ui/react"`}
            tabIndex={-1}
          />

          <CodePreview lang="tsx" code={`<${title} />`} tabIndex={-1} />
        </VStack>
      </Drawer.Content>
    </Drawer.Root>
  )
})
