"use client"

import type { RefObject } from "react"
import type { Data } from "./list"
import {
  assignRef,
  Center,
  CheckIcon,
  ClipboardIcon,
  CloseButton,
  Drawer,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  LinkIcon,
  Separator,
  Tooltip,
  toPascalCase,
  useClipboard,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { DynamicIcon } from "@yamada-ui/react/components/icon/dynamic"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { memo, useState } from "react"
import { CodePreview } from "@/components"
import data from "@/data/icons.json"

export interface Item extends Omit<Data, "query"> {}

export interface PreviewDrawerProps extends Drawer.RootProps {
  onOpenRef: RefObject<(data: Data) => void>
  replaceQuery: (query?: { name?: string; query?: string }) => void
}

export const PreviewDrawer = memo(function PreviewDrawer({
  replaceQuery,
  onOpenRef,
  ...rest
}: PreviewDrawerProps) {
  const searchParams = useSearchParams()
  const defaultName = searchParams.get("name")
  const defaultOpen = !!defaultName && defaultName in data
  const [item, setItem] = useState<Item | null>(() => {
    if (!defaultOpen) return null

    return {
      name: defaultName,
      ...data[defaultName as keyof typeof data],
    } as Item
  })
  const component = `${toPascalCase(item?.name ?? "")}Icon`
  const t = useTranslations("icons")
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    onClose: () => {
      setItem(null)
      replaceQuery()
    },
  })

  assignRef(onOpenRef, (data) => {
    setItem(data)
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
          bg="bg.panel"
          boxSize={{ base: "auto", md: "xs" }}
          gridRow={{ base: "1 / 3", md: "2 / 3" }}
          mx="auto"
          p="md"
          position="relative"
          rounded="l4"
        >
          {item?.name ? (
            <DynamicIcon name={item.name} fontSize="12rem" zIndex="1" />
          ) : null}

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
          gap={{ base: "sm", md: "0" }}
          justifyContent="space-between"
          minW="0"
          w="full"
        >
          <Flex flex="1" minW="0">
            <Heading as="h3" lineClamp={1}>
              {component}
            </Heading>
          </Flex>

          <CopyButton value={component} />
          <CopyUrlButton />

          <Drawer.CloseTrigger>
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            code={`import { ${component} } from "@yamada-ui/react"`}
            tabIndex={-1}
          />

          <CodePreview lang="tsx" code={`<${component} />`} tabIndex={-1} />
        </VStack>

        {item?.related ? (
          <>
            <Separator gridColumn={{ base: "1 / 3", lg: "1 / 2" }} />
            <Grid
              gap="md"
              gridColumn={{ base: "1 / 3", lg: "1 / 2" }}
              maxH={{ base: "auto", sm: "6rem" }}
              overflowY="auto"
              templateColumns="repeat(auto-fill, minmax(3.5rem, 1fr))"
            >
              {item.related.map((name) => {
                const component = `${toPascalCase(name)}Icon`
                const rest = data[name as keyof typeof data]

                return (
                  <Tooltip key={name} content={component}>
                    <IconButton
                      size="2xl"
                      variant="subtle"
                      aria-label={t("openPreview", { name })}
                      bg={{
                        base: "bg.panel",
                        _hover: "bg.subtle",
                      }}
                      icon={<DynamicIcon name={name} fontSize="2xl" />}
                      onClick={() => {
                        setItem({ name, ...rest } as Item)
                        replaceQuery({ name })
                      }}
                    />
                  </Tooltip>
                )
              })}
            </Grid>
          </>
        ) : null}
      </Drawer.Content>
    </Drawer.Root>
  )
})

interface CopyButtonProps {
  value: string | undefined
}

function CopyButton({ value }: CopyButtonProps) {
  const t = useTranslations("component.copyButton")
  const { copied, onCopy } = useClipboard(value)

  return (
    <Tooltip
      closeOnClick={false}
      content={copied ? t("copied") : t("copy")}
      placement="start"
    >
      <IconButton
        size="sm"
        variant="ghost"
        icon={
          copied ? <CheckIcon fontSize="xl" /> : <ClipboardIcon fontSize="xl" />
        }
        onClick={onCopy}
      />
    </Tooltip>
  )
}

function CopyUrlButton() {
  const t = useTranslations("component.copyUrlButton")
  const { copied, onCopy } = useClipboard()

  return (
    <Tooltip
      closeOnClick={false}
      content={copied ? t("copied") : t("copy")}
      placement="start"
    >
      <IconButton
        size="sm"
        variant="ghost"
        icon={copied ? <CheckIcon fontSize="xl" /> : <LinkIcon fontSize="xl" />}
        onClick={() => onCopy(window.location.href)}
      />
    </Tooltip>
  )
}
