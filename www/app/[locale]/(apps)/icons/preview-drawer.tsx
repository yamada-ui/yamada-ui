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
  icons,
  LinkIcon,
  Separator,
  Tooltip,
  useClipboard,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { Fragment, memo, useState } from "react"
import { CodePreview } from "@/components"
import data from "@/data/icons.json"
import { useRouter } from "@/i18n"

export interface PreviewDrawerProps extends Drawer.RootProps {
  onOpenRef: RefObject<(data: Data) => void>
}

export const PreviewDrawer = memo(function PreviewDrawer({
  onOpenRef,
  ...rest
}: PreviewDrawerProps) {
  const searchParams = useSearchParams()
  const defaultName = searchParams.get("name")
  const [item, setItem] = useState<Data | null>(() => {
    if (!defaultName || !(defaultName in icons)) return null

    return {
      name: defaultName,
      Icon: icons[defaultName as keyof typeof icons],
      ...data[defaultName as keyof typeof data],
    }
  })
  const { name, Icon: PreviewIcon = Fragment, related } = item ?? {}
  const router = useRouter()
  const t = useTranslations("icons")
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen: !!item,
    onClose: () => {
      setItem(null)
      router.replace({ pathname: "/icons" }, { scroll: false })
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
          gap={{ base: "sm", md: "0" }}
          justifyContent="space-between"
          minW="0"
          w="full"
        >
          <Flex flex="1" minW="0">
            <Heading as="h3" lineClamp={1}>
              {name}
            </Heading>
          </Flex>

          <CopyButton value={name} />
          <CopyUrlButton />

          <Drawer.CloseTrigger>
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            code={`import { ${name} } from "@yamada-ui/react"`}
            tabIndex={-1}
          />

          <CodePreview lang="tsx" code={`<${name} />`} tabIndex={-1} />
        </VStack>

        {related ? (
          <>
            <Separator gridColumn={{ base: "1 / 3", lg: "1 / 2" }} />
            <Grid
              gap="md"
              gridColumn={{ base: "1 / 3", lg: "1 / 2" }}
              maxH={{ base: "auto", sm: "6rem" }}
              overflowY="auto"
              templateColumns="repeat(auto-fill, minmax(3.5rem, 1fr))"
            >
              {related.map((name, index) => {
                const Icon = icons[name as keyof typeof icons]
                const rest = data[name as keyof typeof data]

                return (
                  <Tooltip key={index} content={name}>
                    <IconButton
                      size="2xl"
                      variant="subtle"
                      aria-label={t("openPreview", { name })}
                      bg={{
                        base: "bg.panel",
                        _hover: ["bg.subtle", "bg.muted"],
                      }}
                      icon={<Icon fontSize="2xl" />}
                      onClick={() => {
                        setItem({ name, Icon, ...rest })
                        router.replace(
                          { pathname: "/icons", query: { name } },
                          { scroll: false },
                        )
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
    <Tooltip content={copied ? t("copied") : t("copy")} placement="start">
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
    <Tooltip content={copied ? t("copied") : t("copy")} placement="start">
      <IconButton
        size="sm"
        variant="ghost"
        icon={copied ? <CheckIcon fontSize="xl" /> : <LinkIcon fontSize="xl" />}
        onClick={() => onCopy(window.location.href)}
      />
    </Tooltip>
  )
}
