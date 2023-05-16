import {
  Tfoot as NativeTfoot,
  TableFootProps as NativeTableFootProps,
  Tr,
  Th,
  TrProps,
  ThProps,
} from '@yamada-ui/native-table'
import { runIfFunc } from '@yamada-ui/utils'
import { HeaderGroup } from './thead'
import { useTableContext } from './use-table'

export type TableFootProps<Y extends object = {}> = NativeTableFootProps & {
  footerGroupProps?:
    | Omit<TrProps, 'key'>
    | ((headers: HeaderGroup<Y>[]) => Omit<TrProps, 'key'> | void)
  footerProps?: Omit<ThProps, 'key'> | ((header: HeaderGroup<Y>) => Omit<ThProps, 'key'> | void)
}

export const Tfoot = <Y extends object = {}>({
  footerGroupProps,
  footerProps,
  ...rest
}: TableFootProps<Y>) => {
  const { footerGroups } = useTableContext()

  return (
    <NativeTfoot {...rest}>
      {footerGroups.map(({ getFooterGroupProps, headers }) => {
        const computedFooterGroupProps =
          runIfFunc(footerGroupProps, headers as unknown as HeaderGroup<Y>[]) ?? {}

        const { key, ...props } = getFooterGroupProps(computedFooterGroupProps)

        return (
          <Tr key={key} {...props}>
            {(headers as unknown as HeaderGroup<Y>[]).map((header) => {
              const { getFooterProps, render } = header
              const computedFooterProps = runIfFunc(footerProps, header) ?? {}
              const { key, ...props } = getFooterProps(computedFooterProps)

              return (
                <Th key={key} {...props}>
                  {render('Footer')}
                </Th>
              )
            })}
          </Tr>
        )
      })}
    </NativeTfoot>
  )
}
