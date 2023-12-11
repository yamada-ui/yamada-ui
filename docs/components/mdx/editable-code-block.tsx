import { faker } from "@faker-js/faker"
import {
  faMinus,
  faPlus,
  faPoo,
  faBars,
  faCheck,
  faArrowUpRightFromSquare,
  faEdit,
  faCaretRight,
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faSun,
  faMoon,
  faWaveSquare,
  faPen,
  faXmark,
  faClose,
  faFile,
  faImage,
  faCaretDown,
  faArrowUpFromBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import * as CalendarComponents from "@yamada-ui/calendar"
import * as CarouselComponents from "@yamada-ui/carousel"
import * as DropzoneComponents from "@yamada-ui/dropzone"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import * as MarkdownComponents from "@yamada-ui/markdown"
import {
  Box,
  Text,
  ScrollArea,
  useDisclosure,
  useBoolean,
  Button,
  useUpdateEffect,
  useResizeObserver,
  Skeleton,
} from "@yamada-ui/react"
import * as UIComponents from "@yamada-ui/react"
import * as TableComponents from "@yamada-ui/table"
import type { PrismTheme } from "prism-react-renderer"
import type { FC, PropsWithChildren } from "react"
import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { FaRobot, FaCheckCircle, FaPhone } from "react-icons/fa"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { CopyButton } from "components/forms"
import { useI18n } from "contexts/i18n-context"
import { theme as defaultTheme } from "theme"
import "dayjs/locale/ja"

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

const react = { React, ...React }
const components = {
  ...UIComponents,
  ...CarouselComponents,
  ...TableComponents,
  ...CalendarComponents,
  ...DropzoneComponents,
  ...MarkdownComponents,
  FontAwesomeIcon,
  UIProvider,
}
const fontAwesomeIcons = {
  faMinus,
  faPlus,
  faPoo,
  faBars,
  faCheck,
  faArrowUpRightFromSquare,
  faEdit,
  faCaretRight,
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faSun,
  faMoon,
  faWaveSquare,
  faPen,
  faXmark,
  faClose,
  faFile,
  faImage,
  faCaretDown,
  faArrowUpFromBracket,
  faTrash,
}
const reactIcons = { FaRobot, FaCheckCircle, FaPhone }
const utils = { wait, faker, useForm, Controller }

const scope = {
  ...react,
  ...components,
  ...fontAwesomeIcons,
  ...reactIcons,
  ...utils,
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

export const EditableCodeBlock: FC<EditableCodeBlockProps> = ({
  code,
  functional,
  ...rest
}) => {
  const [isMounted, { on }] = useBoolean()

  useEffect(on, [on])

  code = code.trim().replace("// prettier-ignore", "").trim()

  const { t } = useI18n()
  const [editorCode, setEditorCode] = useState(code)

  const transformCode = (code: string) => {
    if (functional) code = "() => {" + code + "}"

    return code
  }

  const onChange = (code: string) => setEditorCode(code.trim())

  return (
    <LiveProvider
      {...{ code: editorCode, enableTypeScript: true, scope, transformCode }}
      {...rest}
    >
      <Box my="6">
        <Skeleton isLoaded={isMounted} rounded="md" w="full" isFitContent>
          <Box
            as={LivePreview}
            p="md"
            borderWidth="1px"
            rounded="md"
            overflowX="auto"
          />
        </Skeleton>

        <Box rounded="md" overflow="hidden" my="4" position="relative">
          <Box py="2" bg={["neutral.800", "neutral.900"]} w="full">
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

          <Editor>
            <Box
              as={LiveEditor}
              onChange={onChange}
              px="md"
              fontSize="sm"
              overflowX="auto"
              sx={{ "& > pre": { p: "0px !important", bg: "none !important" } }}
            />
          </Editor>

          <CopyButton
            value={code}
            position="absolute"
            top="1.125rem"
            right="4"
          />
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

const Editor: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useI18n()
  const [isMax, { on, off }] = useBoolean()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [ref, rect] = useResizeObserver<HTMLDivElement>()

  useUpdateEffect(() => {
    const { height } = rect

    if (height >= 320) {
      on()
    } else {
      off()
      onClose()
    }
  }, [rect])

  return (
    <>
      <ScrollArea
        ref={ref}
        bg={["neutral.800", "neutral.900"]}
        sx={{ "& > div": { pt: "0", pb: isMax ? "10" : "6" } }}
        maxH={isOpen ? "full" : "sm"}
        type="never"
      >
        {children}
      </ScrollArea>

      {isMax ? (
        <Button
          size="sm"
          position="absolute"
          rounded="full"
          bottom="2"
          left="50%"
          transform="translateX(-50%)"
          onClick={onToggle}
        >
          {t(
            isOpen
              ? "component.editable-code-block.control-button.close"
              : "component.editable-code-block.control-button.open",
          )}
        </Button>
      ) : null}
    </>
  )
}
