// import * as DropzoneComponents from '@yamada-ui/dropzone'
import { Box, Text, useBoolean } from '@yamada-ui/react'
import dynamic from 'next/dynamic'
import {
  Highlight as ReactHighlight,
  HighlightProps as ReactHighlightProps,
  themes,
} from 'prism-react-renderer'
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react'
import { CopyButton } from 'components/forms'
import { toBoolean } from 'utils/assertion'

const EditableCodeBlock = dynamic(() => import('./editable-code-block'))

type Children = {
  props: {
    className?: string
    title?: string
    functional?: string | boolean
    live?: string | boolean
    noInline?: string | boolean
    children?: string
    highlight?: string
  }
}

export type CodeBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

export const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  const [isMounted, { on }] = useBoolean()

  useEffect(on, [on])

  let {
    className,
    title,
    live = true,
    functional = false,
    noInline,
    children: raw,
    highlight,
  } = (children as Children).props

  live = toBoolean(live)
  functional = toBoolean(functional)
  noInline = toBoolean(noInline)

  const language = className?.replace(/language-/, '') ?? 'sh'
  const code = raw?.trim() ?? ''
  const theme = themes.nightOwl
  const isJSXorTSX = language === 'jsx' || language === 'tsx'

  if (isMounted && isJSXorTSX && live) {
    return <EditableCodeBlock {...{ code, language, theme, noInline, functional }} />
  }

  return (
    <Box position='relative' my='6'>
      <Box
        rounded='md'
        bg={['zinc.800', 'zinc.900']}
        sx={{ '& > div': { py: '6' } }}
        overflow='hidden'
      >
        {title ? (
          <Text
            display='block'
            py='sm'
            px='md'
            borderBottomWidth='1px'
            bg={['whiteAlpha.200', 'whiteAlpha.100']}
            fontSize='xs'
            color={['whiteAlpha.700', 'whiteAlpha.600']}
            isTruncated
          >
            {title}
          </Text>
        ) : null}

        <Highlight {...{ code, language, theme, highlight }} />
      </Box>

      <CopyButton value={code} position='absolute' top={title ? '3.3rem' : '1.125rem'} right='4' />
    </Box>
  )
}

const REG = /{([\d,-]+)}/

const computeHighlight = (highlight: string) => {
  if (!REG.test(highlight)) return () => false

  const lines = REG.exec(highlight)[1]
    .split(`,`)
    .map((str) => str.split(`-`).map((x) => parseInt(x, 10)))

  return (index: number) => {
    const line = index + 1

    return lines.some(([start, end]) => (end ? line >= start && line <= end : line === start))
  }
}

export type HighlightProps = Omit<ReactHighlightProps, 'children'> & { highlight?: string }

export const Highlight: FC<HighlightProps> = ({ language, highlight, ...rest }) => {
  const shouldHighlight = computeHighlight(highlight)

  return (
    <ReactHighlight language={language} {...rest}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box fontSize='sm' overflowX='auto' data-language={language}>
          <Box as='pre' className={className} style={{ ...style, backgroundColor: 'inherit' }}>
            {tokens.map((line, index) => (
              <Box
                key={index}
                minW='0'
                px='4'
                bg={shouldHighlight(index) ? 'whiteAlpha.200' : undefined}
                {...getLineProps({ line, key: index })}
              >
                {line.map((token, index) => (
                  <Text key={index} as='span' {...getTokenProps({ token, key: index })} />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ReactHighlight>
  )
}
