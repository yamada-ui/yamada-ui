"use client"

import type { BoxProps, HTMLProps, StackProps } from "@yamada-ui/react"
import type { PreProps } from "./pre"
import {
  Box,
  ButtonGroup,
  createContext,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

const [CodePreviewTabsContext, useCodePreviewTabsContext] = createContext<{
  preview: boolean
}>({ name: "CodePreviewTabs" })

export interface CodePreviewTabsProps extends StackProps {}

export function CodePreviewTabs({ children, ...rest }: CodePreviewTabsProps) {
  const t = useTranslations("component.codePreview")
  const [preview, { off, on }] = useBoolean(true)
  const context = useMemo(() => ({ preview }), [preview])

  return (
    <CodePreviewTabsContext value={context}>
      <VStack gap="md" my="lg" {...rest}>
        <ButtonGroup size="sm" aria-orientation="horizontal" role="tablist">
          <CodePreviewTab
            id="preview"
            aria-controls="previewPanel"
            aria-selected={preview}
            onClick={on}
          >
            {t("preview")}
          </CodePreviewTab>

          <CodePreviewTab
            id="code"
            aria-controls="codePanel"
            aria-selected={!preview}
            onClick={off}
          >
            {t("code")}
          </CodePreviewTab>
        </ButtonGroup>

        {children}
      </VStack>
    </CodePreviewTabsContext>
  )
}

export interface CodePreviewTabProps extends HTMLProps<"button"> {}

export function CodePreviewTab({ ...rest }: CodePreviewTabProps) {
  return (
    <Box
      as="button"
      type="button"
      alignItems="center"
      border="1px solid transparent"
      cursor="pointer"
      display="flex"
      fontSize="sm"
      px="3"
      py="1"
      role="tab"
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="common"
      _notSelected={{
        color: "fg.muted",
      }}
      _selected={{
        layerStyle: "subtle",
      }}
      {...rest}
    />
  )
}

export interface PreviewPanelProps extends BoxProps {}

export function PreviewPanel({ children, ...rest }: PreviewPanelProps) {
  const { preview } = useCodePreviewTabsContext()

  return (
    <Box
      id="previewPanel"
      aria-labelledby="preview"
      hidden={!preview}
      role="tabpanel"
      {...rest}
    >
      <Box
        borderColor="border.subtle"
        borderWidth="1px"
        p={{ base: "lg", md: "md" }}
        rounded="l2"
      >
        {children}
      </Box>
    </Box>
  )
}

export interface CodePanelProps extends PreProps {}

export function CodePanel({ ...rest }: CodePanelProps) {
  const { preview } = useCodePreviewTabsContext()

  return (
    <Box
      id="codePanel"
      css={{ "& > *": { m: "0" } }}
      aria-labelledby="code"
      hidden={preview}
      role="tabpanel"
      {...rest}
    />
  )
}
