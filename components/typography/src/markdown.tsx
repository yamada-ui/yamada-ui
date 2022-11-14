import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx, filterUndefined } from '@yamada-ui/utils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownOptions = {
  doc?: string
  children?: string
}

export type MarkdownProps = HTMLUIProps<'div'> & ThemeProps<'div'> & MarkdownOptions

export const Markdown = forwardRef<MarkdownProps, 'div'>((props, ref) => {
  // const css = useComponentStyle('Markdown', props)
  const css = {
    h1: {
      color: 'red',
    },
    h2: {
      color: 'blue',
    },
  }
  const { className, ...rest } = omitThemeProps(props)

  const markdownProps = filterUndefined({})

  // ここをうまいこといじってきれいなマークダウンが欲しい
  let doc: string = props.children ?? ''

  if (props.doc) {
    doc = props.doc
  }

  if (!doc) {
    return null
  }

  return (
    <ui.div
      ref={ref}
      className={cx('ui-markdown', className)}
      __css={css}
      {...markdownProps}
      {...rest}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[]}>
        {doc}
      </ReactMarkdown>
    </ui.div>
  )
})
