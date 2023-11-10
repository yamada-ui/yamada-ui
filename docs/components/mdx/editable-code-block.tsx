import { faMinus, faPlus, faPoo } from "@fortawesome/free-solid-svg-icons"
import * as CalendarComponents from "@yamada-ui/calendar"
import * as CarouselComponents from "@yamada-ui/carousel"
import * as DropzoneComponents from "@yamada-ui/dropzone"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import { Box, Text } from "@yamada-ui/react"
import * as UIComponents from "@yamada-ui/react"
import * as TableComponents from "@yamada-ui/table"
import { PrismTheme } from "prism-react-renderer"
import React, { FC, useState } from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { CopyButton } from "components/forms"
import { useI18n } from "contexts/i18n-context"
import { theme as defaultTheme } from "theme"

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const UIProvider: FC<UIComponents.UIProviderProps> = ({
  theme = defaultTheme,
  config,
  children,
}) => {
  return (
    <UIComponents.ThemeProvider theme={theme} config={config}>
      <UIComponents.LoadingProvider {...config.loading}>
        <UIComponents.ResetStyle />
        <UIComponents.GlobalStyle />

        {children}

        <UIComponents.NoticeProvider {...config.notice} />
      </UIComponents.LoadingProvider>
    </UIComponents.ThemeProvider>
  )
}

const scope = {
  React,
  ...React,
  ...UIComponents,
  ...CarouselComponents,
  ...DropzoneComponents,
  ...TableComponents,
  ...CalendarComponents,
  UIProvider,
  FontAwesomeIcon,
  // Font Awesome Icons
  faPoo,
  faMinus,
  faPlus,
  wait,
}

export type EditableCodeBlockProps = {
  code: string
  disabled?: boolean
  enableTypeScript?: boolean
  language?: string
  functional?: boolean
  noInline?: boolean
  theme?: PrismTheme
  transformCode?: (code: string) => void
}

export const EditableCodeBlock: FC<EditableCodeBlockProps> = ({ code, functional, ...rest }) => {
  code = code.trim().replace("// prettier-ignore", "").trim()

  const { t } = useI18n()
  const [editorCode, setEditorCode] = useState(code)

  const transformCode = (code: string) => {
    if (functional) code = "() => {" + code + "}"

    return code
  }
  const onChange = (code: string) => setEditorCode(code.trim())

  return (
    <LiveProvider {...{ code: editorCode, enableTypeScript: true, scope, transformCode }} {...rest}>
      <Box my="6">
        <Box as={LivePreview} p="md" borderWidth="1px" rounded="md" overflowX="auto" zIndex="1" />

        <Box position="relative" zIndex="0">
          <Box
            rounded="md"
            my="4"
            bg={["zinc.800", "zinc.900"]}
            sx={{ "& > div": { pt: "8", pb: "6" } }}
          >
            <Box
              as={LiveEditor}
              onChange={onChange}
              px="md"
              fontSize="sm"
              overflowX="auto"
              sx={{ "& > pre": { p: "0px !important", bg: "none !important" } }}
            />
          </Box>

          <Box position="absolute" top="2" left="0" right="0" w="full">
            <Text
              color="whiteAlpha.700"
              fontSize="xs"
              fontWeight="semibold"
              textAlign="center"
              textTransform="uppercase"
              userSelect="none"
              pointerEvents="none"
            >
              {t("component.editable-code-block.label")}
            </Text>
          </Box>

          <CopyButton value={code} position="absolute" top="1.125rem" right="4" />
        </Box>

        <Box
          as={LiveError}
          bg="danger"
          overflowX="auto"
          rounded="md"
          p="md"
          fontSize="sm"
          color="white"
        />
      </Box>
    </LiveProvider>
  )
}

export default EditableCodeBlock
