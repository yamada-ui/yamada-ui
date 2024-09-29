import createEmotionCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import weakMemoize from "@emotion/weak-memoize"
import { faker } from "@faker-js/faker"
import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { burger } from "@lucide/lab"
import * as CalendarComponents from "@yamada-ui/calendar"
import * as CarouselComponents from "@yamada-ui/carousel"
import * as ChartComponents from "@yamada-ui/charts"
import * as DropzoneComponents from "@yamada-ui/dropzone"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Icon as LucideIcon,
  Ghost,
  Check,
  Plus,
  Minus,
  Sun,
  Moon,
  Bold,
  Italic,
  Underline,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronsDown,
  ChevronLeft,
  ChevronRight,
  MenuIcon,
  FilePenLine,
  ExternalLink,
  File,
  X,
  Image as ImageIcon,
  Upload,
  Mail,
  Phone,
  Activity,
  Trash,
  MoveHorizontal,
  Pen,
  Angry,
  Frown,
  Laugh,
  Smile,
  SmilePlus,
  CircleCheck,
} from "@yamada-ui/lucide"
import * as MarkdownComponents from "@yamada-ui/markdown"
import * as UIComponents from "@yamada-ui/react"
import {
  ui,
  Box,
  Text,
  ScrollArea,
  useDisclosure,
  useBoolean,
  Button,
  useUpdateEffect,
  useResizeObserver,
  Skeleton,
  useColorMode,
  useTheme,
  createThemeSchemeManager,
  EnvironmentProvider,
  ThemeProvider,
  LoadingProvider,
  ResetStyle,
  GlobalStyle,
  NoticeProvider,
} from "@yamada-ui/react"
import type {
  SkeletonProps,
  Environment,
  UIProviderProps,
} from "@yamada-ui/react"
import * as TableComponents from "@yamada-ui/table"
import type { PrismTheme } from "prism-react-renderer"
import React, { useEffect, useRef, useState } from "react"
import type { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { useForm, Controller } from "react-hook-form"
import { FaRobot } from "react-icons/fa"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { CopyButton } from "components/forms"
import { useI18n } from "contexts"
import { theme as defaultTheme, config as defaultConfig } from "theme"
import { wait } from "utils/async"
import "dayjs/locale/ja"

const UIProvider: FC<UIProviderProps & { environment?: Environment }> = ({
  theme = defaultTheme,
  config = defaultConfig,
  environment,
  children,
  ...rest
}) => {
  return (
    <EnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme} config={config} {...rest}>
        <LoadingProvider {...config.loading}>
          <ResetStyle />
          <GlobalStyle />

          {children}

          <NoticeProvider {...config.notice} />
        </LoadingProvider>
      </ThemeProvider>
    </EnvironmentProvider>
  )
}

const react = { React, ...React }
const components = {
  ...UIComponents,
  ...CarouselComponents,
  ...ChartComponents,
  ...TableComponents,
  ...CalendarComponents,
  ...DropzoneComponents,
  ...MarkdownComponents,
  LucideIcon,
  FontAwesomeIcon,
  UIProvider,
}
const fontAwesomeIcons = {
  faPoo,
}
const lucideIcons = {
  Ghost,
  Check,
  CircleCheck,
  Plus,
  Minus,
  Sun,
  Moon,
  Bold,
  Italic,
  Underline,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronsDown,
  ChevronLeft,
  ChevronRight,
  MenuIcon,
  FilePenLine,
  ExternalLink,
  File,
  ImageIcon,
  Mail,
  Phone,
  Upload,
  Activity,
  Trash,
  MoveHorizontal,
  Pen,
  X,
  Angry,
  Frown,
  Laugh,
  Smile,
  SmilePlus,
}
const lucideLabIcons = { burger }
const reactIcons = { FaRobot }
const utils = { wait, faker, useForm, Controller }

const scope = {
  ...react,
  ...components,
  ...fontAwesomeIcons,
  ...reactIcons,
  ...lucideIcons,
  ...lucideLabIcons,
  ...utils,
}

export interface EditableCodeBlockProps {
  code: string
  disabled?: boolean
  enableTypeScript?: boolean
  language?: string
  functional?: boolean
  iframe?: boolean
  noInline?: boolean
  theme?: PrismTheme
  transformCode?: (code: string) => void
}

export const EditableCodeBlock: FC<EditableCodeBlockProps> = ({
  code,
  functional,
  iframe,
  ...rest
}) => {
  code = code.trim().replace("// prettier-ignore", "").trim()

  const { t } = useI18n()
  const [editorCode, setEditorCode] = useState(code)

  const transformCode = (code: string) => {
    if (functional) {
      code = "() => {" + code + "}"
    } else {
      code = "<>" + code + "</>"
    }

    return code
  }

  const onChange = (code: string) => setEditorCode(code.trim())

  return (
    <LiveProvider
      {...{ code: editorCode, enableTypeScript: true, scope, transformCode }}
      {...rest}
    >
      <Box my="6">
        <Preview>
          {iframe ? (
            <Iframe>
              <Box as={LivePreview} w="full" h="full" p="md" overflow="auto" />
            </Iframe>
          ) : (
            <Box
              as={LivePreview}
              p="md"
              borderWidth="1px"
              rounded="md"
              overflowX="auto"
            />
          )}
        </Preview>

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

const createCache = weakMemoize((container: Node) =>
  createEmotionCache({
    container,
    key: "iframe-css",
  }),
)

const Iframe: FC<PropsWithChildren> = ({ children }) => {
  const themeSchemeManager = createThemeSchemeManager("cookie")

  const { colorMode } = useColorMode()
  const { themeScheme } = useTheme()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const headRef = useRef<HTMLHeadElement | null>(null)
  const bodyRef = useRef<HTMLElement | null>(null)
  const head = headRef.current
  const body = bodyRef.current
  const [, forceUpdate] = useState({})

  useEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    headRef.current = iframe.contentDocument?.head ?? null
    bodyRef.current = iframe.contentDocument?.body ?? null

    forceUpdate({})
  }, [])

  useEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    if (iframe.contentDocument) {
      iframe.contentDocument.documentElement.dataset.mode = colorMode
      iframe.contentDocument.documentElement.dataset.theme = themeScheme
      iframe.contentDocument.documentElement.style.colorScheme = colorMode
    }
  }, [colorMode, themeScheme])

  const environment: Environment = {
    getDocument: () => iframeRef.current?.contentDocument ?? document,
    getWindow: () => iframeRef.current?.contentDocument?.defaultView ?? window,
  }

  return (
    <ui.iframe
      title="react-live-iframe"
      ref={iframeRef}
      w="full"
      h="xl"
      border="1px solid"
      borderColor="border"
      rounded="md"
    >
      {head && body
        ? createPortal(
            <CacheProvider value={createCache(head)}>
              <UIProvider
                themeSchemeManager={themeSchemeManager}
                environment={environment}
              >
                {children}
              </UIProvider>
            </CacheProvider>,
            body,
          )
        : null}
    </ui.iframe>
  )
}

const Preview: FC<SkeletonProps> = ({ ...rest }) => {
  const [isMounted, { on }] = useBoolean()

  useEffect(on, [on])

  return (
    <Skeleton
      isLoaded={isMounted}
      rounded="md"
      w="full"
      isFitContent
      {...rest}
    />
  )
}

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
        _scrollbarThumb={{
          bg: "whiteAlpha.600",
          bgClip: "padding-box",
          border: "3px solid transparent",
          rounded: "full",
          _nativeHover: {
            bg: "whiteAlpha.800",
            bgClip: "padding-box",
          },
        }}
        tabIndex={-1}
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
