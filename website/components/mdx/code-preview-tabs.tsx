"use client"

import type {
  BoxProps,
  CSSProps,
  HTMLProps,
  StackProps,
} from "@yamada-ui/react"
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
            color={!preview ? "fg.muted" : undefined}
            _selected={{
              layerStyle: "subtle",
            }}
            onClick={on}
          >
            {t("preview")}
          </CodePreviewTab>

          <CodePreviewTab
            id="code"
            aria-controls="codePanel"
            aria-selected={!preview}
            color={preview ? "fg.muted" : undefined}
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

export interface CodePreviewTabProps extends HTMLProps<"button">, CSSProps {}

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
      _selected={{
        layerStyle: "subtle",
      }}
      {...rest}
    />
  )
}

export interface PreviewPanelProps extends BoxProps {}

export function PreviewPanel({ ...rest }: PreviewPanelProps) {
  const { preview } = useCodePreviewTabsContext()

  return (
    <Box
      id="previewPanel"
      aria-labelledby="preview"
      hidden={!preview}
      role="tabpanel"
      {...rest}
    />
  )
}

export interface CodePanelProps extends PreProps {}

export function CodePanel({ ...rest }: CodePanelProps) {
  const { preview } = useCodePreviewTabsContext()

  return (
    <Box
      id="codePanel"
      aria-labelledby="code"
      hidden={preview}
      role="tabpanel"
      {...rest}
    />
  )
}
