import type { BoxProps } from "@yamada-ui/react"
import type { HighlightProps as ReactHighlightProps } from "prism-react-renderer"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Box, Text } from "@yamada-ui/react"
import { CopyButton } from "components/forms"
import dynamic from "next/dynamic"
import { Highlight as ReactHighlight, themes } from "prism-react-renderer"
import { toBoolean } from "utils/boolean"

const EditableCodeBlock = dynamic(async () => import("./editable-code-block"))

interface Children {
  props: {
    className?: string
    children?: string
    functional?: boolean | string
    highlight?: string
    iframe?: boolean | string
    live?: boolean | string
    noInline?: boolean | string
    title?: string
  }
}

export interface PreProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {}

export const Pre: FC<PreProps> = ({ children }) => {
  let {
    className,
    children: raw,
    functional = false,
    highlight,
    iframe = false,
    live = true,
    noInline,
    title,
  } = (children as Children).props

  live = toBoolean(live)
  functional = toBoolean(functional)
  iframe = toBoolean(iframe)
  noInline = toBoolean(noInline)

  const language = className?.replace(/language-/, "") ?? "sh"
  const code = raw?.trim() ?? ""
  const theme = themes.oneDark
  const isJSXorTSX = language === "jsx" || language === "tsx"

  if (isJSXorTSX && live) {
    return (
      <EditableCodeBlock
        {...{ code, functional, iframe, language, noInline, theme }}
      />
    )
  }

  return <CodeBlock {...{ code, highlight, language, theme, title }} />
}

export interface CodeBlockProps extends HighlightProps, BoxProps {
  title?: string
  innerProps?: BoxProps
}

export const CodeBlock: FC<CodeBlockProps> = ({
  code,
  highlight,
  language,
  theme,
  title,
  innerProps,
  ...rest
}) => {
  return (
    <Box my="6" position="relative" {...rest}>
      <Box
        sx={{ "& > div": { py: "6" } }}
        bg={["neutral.800", "neutral.900"]}
        h="full"
        overflow="hidden"
        rounded="md"
        {...innerProps}
      >
        {title ? (
          <Text
            bg={["whiteAlpha.200", "whiteAlpha.100"]}
            borderBottomWidth="1px"
            color={["whiteAlpha.700", "whiteAlpha.600"]}
            display="block"
            fontSize="xs"
            isTruncated
            px="md"
            py="sm"
          >
            {title}
          </Text>
        ) : null}

        <Highlight {...{ code, highlight, language, theme }} />
      </Box>

      <CopyButton
        position="absolute"
        right="4"
        top={title ? "3.3rem" : "1.125rem"}
        value={code}
        zIndex="1"
      />
    </Box>
  )
}

const REG = /{([\d,-]+)}/

const computeHighlight = (highlight: string) => {
  if (!REG.test(highlight)) return () => false

  const lines = REG.exec(highlight)?.[1]
    ?.split(`,`)
    .map((str) => str.split(`-`).map((x) => parseInt(x, 10)))

  return (index: number) => {
    const line = index + 1

    return lines?.some(([start = 0, end]) =>
      end ? line >= start && line <= end : line === start,
    )
  }
}

export interface HighlightProps extends Omit<ReactHighlightProps, "children"> {
  highlight?: string
}

export const Highlight: FC<HighlightProps> = ({
  highlight,
  language,
  ...rest
}) => {
  const shouldHighlight = computeHighlight(highlight ?? "")

  return (
    <ReactHighlight language={language} {...rest}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box data-language={language} fontSize="sm" overflowX="auto">
          <Box
            as="pre"
            className={className}
            style={{ ...style, backgroundColor: "inherit" }}
            minW="fit-content"
          >
            {tokens.map((line, index) => (
              <Box
                key={index}
                bg={shouldHighlight(index) ? "whiteAlpha.200" : undefined}
                minW="fit-content"
                pl="4"
                pr="16"
                {...getLineProps({ line })}
              >
                {line.map((token, index) => (
                  <Text key={index} as="span" {...getTokenProps({ token })} />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ReactHighlight>
  )
}
