import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { createContext, cx, omitObject } from '@yamada-ui/utils'

type TableStyleContext = Record<string, CSSUIObject>

export const [TableStyleProvider, useTableStyles] = createContext<TableStyleContext>({
  name: 'TableStyleContext',
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" or "<NativeTable />" or "<PagingTable />"`,
})

type NativeTableOptions = {
  layout?: CSSUIObject['tableLayout']
  highlightOnHover?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
}

export type NativeTableProps = HTMLUIProps<'table'> & ThemeProps<'Table'> & NativeTableOptions

export const NativeTable = forwardRef<NativeTableProps, 'table'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Table', props)
  const { className, layout, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = { tableLayout: layout, ...styles.table }

  return (
    <TableStyleProvider value={styles}>
      <ui.table
        ref={ref}
        className={cx('ui-native-table', className)}
        __css={css}
        {...omitObject(rest, ['withColumnBorders'])}
      />
    </TableStyleProvider>
  )
})
