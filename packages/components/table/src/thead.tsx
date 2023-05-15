import { CSSUIObject } from '@yamada-ui/core'
import {
  Thead as NativeThead,
  TableHeadProps as NativeTableHeadProps,
  Tr,
  Th,
  TrProps,
  ThProps,
} from '@yamada-ui/native-table'
import { CSSProperties } from 'react'
import { HeaderGroup, UseSortByColumnProps } from 'react-table'
import { useTableContext } from './use-table'

type Header<Y extends object = {}> = HeaderGroup<Y> &
  UseSortByColumnProps<Y> & {
    className?: string
    style?: CSSProperties
    sx?: CSSUIObject
    css?: CSSUIObject
  }

export type TableHeadProps = NativeTableHeadProps & {
  headerGroupProps?: Omit<TrProps, 'key'>
  headerProps?: Omit<ThProps, 'key'>
}

export const Thead = ({ headerGroupProps, headerProps, ...rest }: TableHeadProps) => {
  const { headerGroups } = useTableContext()

  return (
    <NativeThead {...rest}>
      {headerGroups.map(({ headers, getHeaderGroupProps }) => {
        const { key, ...props } = getHeaderGroupProps(headerGroupProps)

        return (
          <Tr key={key} {...props}>
            {(headers as Header[]).map(
              ({
                getHeaderProps,
                getSortByToggleProps,
                isSorted,
                isSortedDesc,
                render,
                className,
                style,
                css,
                sx,
              }) => {
                const { key, ...props } = getHeaderProps({
                  ...headerProps,
                  className,
                  ...getSortByToggleProps(),
                })

                return (
                  <Th key={key} {...props} sx={sx} style={{ ...props.style, ...style }} __css={css}>
                    {render('Header')}
                    <span>{isSorted ? (isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </Th>
                )
              },
            )}
          </Tr>
        )
      })}
    </NativeThead>
  )
}
