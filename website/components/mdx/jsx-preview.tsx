"use client"

import type { BoxProps, HTMLProps, StackProps } from "@yamada-ui/react"
import {
  Box,
  ButtonGroup,
  createContext,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

const [JsxPreviewContext, useJsxPreviewContext] = createContext<{
  preview: boolean
}>({ name: "JsxPreview" })

export interface JsxPreviewProps extends StackProps {}

export function JsxPreview({ children, ...rest }: JsxPreviewProps) {
  const t = useTranslations("component.codePreview")
  const [preview, { off, on }] = useBoolean(true)
  const context = useMemo(() => ({ preview }), [preview])

  return (
    <JsxPreviewContext value={context}>
      <VStack gap="md" my="lg" {...rest}>
        <ButtonGroup size="sm" aria-orientation="horizontal" role="tablist">
          <JsxPreviewTab
            id="preview"
            aria-controls="previewPanel"
            aria-selected={preview}
            onClick={on}
          >
            {t("preview")}
          </JsxPreviewTab>

          <JsxPreviewTab
            id="code"
            aria-controls="codePanel"
            aria-selected={!preview}
            onClick={off}
          >
            {t("code")}
          </JsxPreviewTab>
        </ButtonGroup>

        {children}
      </VStack>
    </JsxPreviewContext>
  )
}

export interface JsxPreviewTabProps extends HTMLProps<"button"> {}

export function JsxPreviewTab({ ...rest }: JsxPreviewTabProps) {
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

export interface JsxPreviewPanelProps extends BoxProps {}

export function JsxPreviewPanel({ children, ...rest }: JsxPreviewPanelProps) {
  const { preview } = useJsxPreviewContext()

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

export interface JsxCodePanelProps extends BoxProps {}

export function JsxCodePanel({ ...rest }: JsxCodePanelProps) {
  const { preview } = useJsxPreviewContext()

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
