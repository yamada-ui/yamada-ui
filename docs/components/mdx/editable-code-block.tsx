import type {
  Environment,
  SkeletonProps,
  UIProviderProps,
} from "@yamada-ui/react"
import type { PrismTheme } from "prism-react-renderer"
import type { FC, PropsWithChildren } from "react"
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
import { FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  ActivityIcon,
  AngryIcon,
  AppleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BoldIcon,
  BoxIcon,
  ChartAreaIcon,
  ChartColumnIcon,
  ChartLineIcon,
  CheckIcon,
  CherryIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsDownIcon,
  CircleCheckIcon,
  ExternalLinkIcon,
  FileIcon,
  FilePenLineIcon,
  FrownIcon,
  GhostIcon,
  ImageIcon,
  ItalicIcon,
  LaughIcon,
  LockIcon,
  LucideIcon,
  MailIcon,
  MenuIcon,
  MinusIcon,
  MoonIcon,
  MoveHorizontalIcon,
  PenIcon,
  PhoneIcon,
  PlusIcon,
  QuoteIcon,
  RabbitIcon,
  ShieldCheckIcon,
  ShieldOffIcon,
  ShoppingCartIcon,
  SmileIcon,
  SmilePlusIcon,
  SnailIcon,
  SquirrelIcon,
  SunIcon,
  TrashIcon,
  UnderlineIcon,
  UploadIcon,
  UserRoundIcon,
  XIcon,
} from "@yamada-ui/lucide"
import * as MarkdownComponents from "@yamada-ui/markdown"
import * as UIComponents from "@yamada-ui/react"
import {
  Box,
  Button,
  createThemeSchemeManager,
  EnvironmentProvider,
  GlobalStyle,
  LoadingProvider,
  NoticeProvider,
  ResetStyle,
  ScrollArea,
  Skeleton,
  Text,
  ThemeProvider,
  ui,
  useBoolean,
  useColorMode,
  useDisclosure,
  useResizeObserver,
  useTheme,
  useUpdateEffect,
} from "@yamada-ui/react"
import * as TableComponents from "@yamada-ui/table"
import { CopyButton } from "components/forms"
import { useI18n } from "contexts"
import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Controller, useForm } from "react-hook-form"
import { FaRobot } from "react-icons/fa"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { config as defaultConfig, theme as defaultTheme } from "theme"
import { wait } from "utils/async"
import "dayjs/locale/ja"

const UIProvider: FC<{ environment?: Environment } & UIProviderProps> = ({
  children,
  config = defaultConfig,
  environment,
  theme = defaultTheme,
  ...rest
}) => {
  return (
    <EnvironmentProvider environment={environment}>
      <ThemeProvider config={config} theme={theme} {...rest}>
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
  FontAwesomeIcon,
  LucideIcon,
  UIProvider,
}
const fontAwesomeIcons = {
  faPoo,
}
const lucideIcons = {
  ActivityIcon,
  AngryIcon,
  AppleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BoldIcon,
  BoxIcon,
  ChartAreaIcon,
  ChartColumnIcon,
  ChartLineIcon,
  CheckIcon,
  CherryIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsDownIcon,
  CircleCheckIcon,
  ExternalLinkIcon,
  FileIcon,
  FilePenLineIcon,
  FrownIcon,
  GhostIcon,
  ImageIcon,
  ItalicIcon,
  LaughIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MinusIcon,
  MoonIcon,
  MoveHorizontalIcon,
  PenIcon,
  PhoneIcon,
  PlusIcon,
  QuoteIcon,
  RabbitIcon,
  ShieldCheckIcon,
  ShieldOffIcon,
  ShoppingCartIcon,
  SmileIcon,
  SmilePlusIcon,
  SnailIcon,
  SquirrelIcon,
  SunIcon,
  TrashIcon,
  UnderlineIcon,
  UploadIcon,
  UserRoundIcon,
  XIcon,
}
const lucideLabIcons = { burger }
const reactIcons = { FaRobot }
const utils = { Controller, faker, useForm, wait }

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
  functional?: boolean
  iframe?: boolean
  language?: string
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
              <Box as={LivePreview} h="full" overflow="auto" p="md" w="full" />
            </Iframe>
          ) : (
            <Box
              as={LivePreview}
              borderWidth="1px"
              overflowX="auto"
              p="md"
              rounded="md"
            />
          )}
        </Preview>

        <Box my="4" overflow="hidden" position="relative" rounded="md">
          <Box bg={["neutral.800", "neutral.900"]} py="2" w="full">
            <Text
              color="whiteAlpha.700"
              fontSize="xs"
              fontWeight="semibold"
              pointerEvents="none"
              textAlign="center"
              textTransform="uppercase"
              userSelect="none"
            >
              {t("component.editable-code-block.label")}
            </Text>
          </Box>

          <Editor>
            <Box
              as={LiveEditor}
              sx={{ "& > pre": { bg: "none !important", p: "0px !important" } }}
              fontSize="sm"
              overflowX="auto"
              px="md"
              onChange={onChange}
            />
          </Editor>

          <CopyButton
            position="absolute"
            right="4"
            top="1.125rem"
            value={code}
          />
        </Box>

        <Box
          as={LiveError}
          bg="danger"
          color="white"
          fontSize="sm"
          overflowX="auto"
          p="md"
          rounded="md"
        />
      </Box>
    </LiveProvider>
  )
}

export default EditableCodeBlock

const createCache = weakMemoize((container: Node) =>
  createEmotionCache({
    key: "iframe-css",
    container,
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
      ref={iframeRef}
      border="1px solid"
      borderColor="border"
      h="xl"
      rounded="md"
      title="react-live-iframe"
      w="full"
    >
      {head && body
        ? createPortal(
            <CacheProvider value={createCache(head)}>
              <UIProvider
                environment={environment}
                themeSchemeManager={themeSchemeManager}
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
      isFitContent
      isLoaded={isMounted}
      rounded="md"
      w="full"
      {...rest}
    />
  )
}

const Editor: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useI18n()
  const [isMax, { off, on }] = useBoolean()
  const { open, onClose, onToggle } = useDisclosure()
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
        sx={{ "& > div": { pb: isMax ? "10" : "6", pt: "0" } }}
        bg={["neutral.800", "neutral.900"]}
        maxH={open ? "full" : "sm"}
        tabIndex={-1}
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
      >
        {children}
      </ScrollArea>

      {isMax ? (
        <Button
          size="sm"
          bottom="2"
          left="50%"
          position="absolute"
          rounded="full"
          transform="translateX(-50%)"
          onClick={onToggle}
        >
          {t(
            open
              ? "component.editable-code-block.control-button.close"
              : "component.editable-code-block.control-button.open",
          )}
        </Button>
      ) : null}
    </>
  )
}
