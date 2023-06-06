import { CSSUIObject } from '@yamada-ui/core'
import { Icon, ChevronIcon, IconProps } from '@yamada-ui/icon'
import {
  Thead as NativeThead,
  TableHeadProps as NativeTableHeadProps,
  Tr,
  Th,
  useTableStyles,
} from '@yamada-ui/native-table'
import { runIfFunc, handlerAll } from '@yamada-ui/utils'
import { FC } from 'react'
import { useTableContext, render, SortDirection, Column } from './use-table'

export type TableHeadProps = NativeTableHeadProps

export const Thead = ({ ...rest }: TableHeadProps) => {
  const { headerGroups, headerGroupProps, headerProps, sortIconProps } = useTableContext()

  return (
    <NativeThead {...rest}>
      {headerGroups.map(({ id, headers }) => {
        return (
          <Tr key={id} {...runIfFunc(headerGroupProps, headers)}>
            {headers.map((header) => {
              const { id, colSpan, isPlaceholder, column, getContext } = header
              const { columnDef, getToggleSortingHandler, getCanSort, getIsSorted } = column
              const { sx, style, css } = columnDef as Column<unknown>
              const computedHeaderProps = runIfFunc(headerProps, header) ?? {}

              const props = {
                ...computedHeaderProps,
                colSpan,
                onClick: handlerAll(computedHeaderProps.onClick, getToggleSortingHandler()),
              }

              return !isPlaceholder ? (
                <Th
                  key={id}
                  {...props}
                  sx={sx}
                  style={{ ...props.style, ...style }}
                  __css={{
                    position: 'relative',
                    userSelect: getCanSort() ? 'none' : undefined,
                    ...css,
                  }}
                >
                  {render(columnDef.header, getContext())}
                  {getCanSort() ? (
                    <SortIcon {...{ isSorted: getIsSorted(), ...sortIconProps }} />
                  ) : null}
                </Th>
              ) : null
            })}
          </Tr>
        )
      })}
    </NativeThead>
  )
}

export type SortIconProps = IconProps & { isSorted: false | SortDirection }

const SortIcon: FC<SortIconProps> = ({ isSorted, ...rest }) => {
  const styles = useTableStyles()

  const css: CSSUIObject = {
    position: 'absolute',
    top: '50%',
    transform: isSorted === 'desc' ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
    ...styles.sortIcon,
  }

  if (!isSorted) {
    return (
      <Icon
        className='ui-table-sort-icon'
        focusable='false'
        aria-hidden
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        __css={css}
        {...rest}
      >
        <path d='M8 9l4 -4l4 4'></path>
        <path d='M16 15l-4 4l-4 -4'></path>
      </Icon>
    )
  }

  if (isSorted === 'desc') {
    return <ChevronIcon __css={css} {...rest} />
  } else {
    return <ChevronIcon __css={css} {...rest} />
  }
}
