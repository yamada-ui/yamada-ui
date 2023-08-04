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
import { toBoolean } from 'utils'

const EditableCodeBlock = dynamic(() => import('./editable-code-block'))

type Children = {
  props: {
    className?: string
    title?: string
    live?: string | boolean
    noInline?: string | boolean
    children?: string
    highlight?: string
  }
}

export type CodeBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const [isMounted, { on }] = useBoolean()

  useEffect(on, [on])

  const children = props.children as Children
  let { className, title, live = true, noInline, children: raw, highlight } = children.props

  live = toBoolean(live)
  noInline = toBoolean(noInline)

  const language = className?.replace(/language-/, '')
  const code = raw.trim()
  const theme = themes.nightOwl
  const isJSXorTSX = language === 'jsx' || language === 'tsx'

  if (isMounted && isJSXorTSX && live) {
    return <EditableCodeBlock {...{ code, language, theme, noInline }} />
  }

  return (
    <Box position='relative'>
      <Box
        rounded='md'
        my='6'
        bg={['black', 'blackAlpha.400']}
        sx={{ '& > div': { py: 'normal' } }}
        overflow='hidden'
      >
        {title ? (
          <Text
            display='block'
            py='sm'
            px='md'
            borderBottomWidth='1px'
            bg='whiteAlpha.100'
            fontSize='xs'
            color='whiteAlpha.700'
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
          <Box as='pre' className={className} style={{ ...style, backgroundColor: 'none' }}>
            {tokens.map((line, index) => (
              <Box
                key={index}
                minW='0'
                px='md'
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
