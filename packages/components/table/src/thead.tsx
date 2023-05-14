import {
  Thead as NativeThead,
  TableHeadProps as NativeTableHeadProps,
  Tr,
  Th,
  TrProps,
  ThProps,
} from '@yamada-ui/native-table'
import { Dict } from '@yamada-ui/utils'
import { HeaderGroup, UseSortByColumnProps } from 'react-table'
import { useTableContext } from './use-table'

type Header<Y extends Dict = Dict> = HeaderGroup<Y> & UseSortByColumnProps<Y>

export type TableHeadProps = NativeTableHeadProps & {
  headerGroupProps?: Omit<TrProps, 'key'>
  headerProps?: Omit<ThProps, 'key'>
}

export const Thead = <Y extends Dict = Dict>({
  headerGroupProps,
  headerProps,
  ...rest
}: TableHeadProps) => {
  const { headerGroups } = useTableContext()

  return (
    <NativeThead {...rest}>
      {headerGroups.map(({ headers, getHeaderGroupProps }) => {
        const { key, ...props } = getHeaderGroupProps(headerGroupProps)

        return (
          <Tr key={key} {...props}>
            {(headers as Header<Y>[]).map(
              ({ getHeaderProps, getSortByToggleProps, isSorted, isSortedDesc, render }) => {
                const { key, ...props } = getHeaderProps({
                  ...headerProps,
                  ...getSortByToggleProps(),
                })

                return (
                  <Th key={key} {...props}>
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
