import {
  Tfoot as NativeTfoot,
  TableFootProps as NativeTableFootProps,
  Tr,
  Td,
  TrProps,
  TdProps,
} from '@yamada-ui/native-table'
import { useTableContext } from './use-table'

export type TableFootProps = NativeTableFootProps & {
  footerGroupProps?: Omit<TrProps, 'key'>
  footerProps?: Omit<TdProps, 'key'>
}

export const Tfoot = ({ footerGroupProps, footerProps, ...rest }: TableFootProps) => {
  const { footerGroups } = useTableContext()

  return (
    <NativeTfoot {...rest}>
      {footerGroups.map(({ getFooterGroupProps, headers }) => {
        const { key, ...props } = getFooterGroupProps(footerGroupProps)

        return (
          <Tr key={key} {...props}>
            {headers.map(({ getFooterProps, render }) => {
              const { key, ...props } = getFooterProps(footerProps)

              return (
                <Td key={key} {...props}>
                  {render('Footer')}
                </Td>
              )
            })}
          </Tr>
        )
      })}
    </NativeTfoot>
  )
}
