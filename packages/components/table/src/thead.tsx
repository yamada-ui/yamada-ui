import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { Icon, ChevronIcon, IconProps } from '@yamada-ui/icon'
import {
  Thead as NativeThead,
  TableHeadProps as NativeTableHeadProps,
  Tr,
  Th,
  TrProps,
  ThProps,
  useTableStyles,
} from '@yamada-ui/native-table'
import { runIfFunc, handlerAll } from '@yamada-ui/utils'
import { CSSProperties, FC, useMemo } from 'react'
import {
  HeaderGroup as ReactTableHeaderGroup,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
} from 'react-table'
import { useTableContext } from './use-table'

export type HeaderGroup<Y extends object = {}> = ReactTableHeaderGroup<Y> &
  UseSortByColumnProps<Y> &
  UseResizeColumnsColumnProps<Y> & {
    className?: string
    style?: CSSProperties
    sx?: CSSUIObject
    css?: CSSUIObject
  }

export type TableHeadProps<Y extends object = {}> = NativeTableHeadProps & {
  headerGroupProps?:
    | Omit<TrProps, 'key'>
    | ((headers: HeaderGroup<Y>[]) => Omit<TrProps, 'key'> | void)
  headerProps?: Omit<ThProps, 'key'> | ((header: HeaderGroup<Y>) => Omit<ThProps, 'key'> | void)
  sortIconProps?: IconProps
  resizeSeparatorProps?: HTMLUIProps<'div'> | ((isResizing: boolean) => HTMLUIProps<'div'>)
}

export const Thead = <Y extends object = {}>({
  headerGroupProps,
  headerProps,
  sortIconProps,
  resizeSeparatorProps,
  ...rest
}: TableHeadProps<Y>) => {
  const { headerGroups, enableBlockLayout } = useTableContext()

  return (
    <NativeThead {...rest} {...(enableBlockLayout ? { as: 'div' } : {})}>
      {headerGroups.map(({ headers, getHeaderGroupProps }) => {
        const computedHeaderGroupProps =
          runIfFunc(headerGroupProps, headers as unknown as HeaderGroup<Y>[]) ?? {}
        const { key, ...props } = getHeaderGroupProps(computedHeaderGroupProps)

        return (
          <Tr {...props} {...(enableBlockLayout ? { as: 'div' } : {})} key={key}>
            {(headers as unknown as HeaderGroup<Y>[]).map((header) => {
              const {
                getHeaderProps,
                getSortByToggleProps,
                getResizerProps,
                isSorted,
                isSortedDesc,
                render,
                className,
                style,
                css,
                sx,
                canSort,
                isResizing,
                canResize,
              } = header
              const computedHeaderProps = runIfFunc(headerProps, header) ?? {}
              const { key, ...props } = getHeaderProps({
                className,
                ...computedHeaderProps,
                ...getSortByToggleProps(),
              })

              return (
                <Th
                  {...props}
                  {...(enableBlockLayout ? { as: 'div' } : {})}
                  key={key}
                  sx={sx}
                  style={{ ...props.style, ...style }}
                  __css={{ position: 'relative', ...css }}
                >
                  {render('Header')}
                  {canSort ? <SortIcon {...{ isSorted, isSortedDesc, ...sortIconProps }} /> : null}
                  {canResize ? (
                    <ResizeSeparator
                      {...{ isResizing, resizeSeparatorProps, ...getResizerProps?.() }}
                    />
                  ) : null}
                </Th>
              )
            })}
          </Tr>
        )
      })}
    </NativeThead>
  )
}

export type ResizeSeparatorProps = HTMLUIProps<'div'> & {
  isResizing: boolean
  resizeSeparatorProps?: HTMLUIProps<'div'> | ((isResizing: boolean) => HTMLUIProps<'div'>)
}

const ResizeSeparator: FC<ResizeSeparatorProps> = ({
  isResizing,
  resizeSeparatorProps,
  ...rest
}) => {
  const styles = useTableStyles()

  const css: CSSUIObject = {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateX(50%)',
    zIndex: 1,
    w: 2,
    h: 'full',
    cursor: 'col-resize',
    ...styles.resizeSeparator,
  }

  const props = useMemo(
    () => runIfFunc(resizeSeparatorProps, isResizing) ?? {},
    [isResizing, resizeSeparatorProps],
  )

  return (
    <ui.div
      className='ui-table-resize-control'
      __css={css}
      {...props}
      {...rest}
      style={{ ...rest.style, ...props.style }}
      onClick={handlerAll(props.onClick, rest.onClick, (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
      })}
      onMouseDown={handlerAll(props.onMouseDown, rest.onMouseDown)}
      onMouseUp={handlerAll(props.onMouseUp, rest.onMouseUp)}
    />
  )
}

export type SortIconProps = IconProps & { isSorted: boolean; isSortedDesc?: boolean }

const SortIcon: FC<SortIconProps> = ({ isSorted, isSortedDesc, ...rest }) => {
  const styles = useTableStyles()

  const css: CSSUIObject = {
    position: 'absolute',
    top: '50%',
    transform: isSortedDesc ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
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
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        __css={css}
        {...rest}
      >
        <path d='M8 9l4 -4l4 4'></path>
        <path d='M16 15l-4 4l-4 -4'></path>
      </Icon>
    )
  }

  if (isSortedDesc) {
    return <ChevronIcon __css={css} {...rest} />
  } else {
    return <ChevronIcon __css={css} {...rest} />
  }
}
