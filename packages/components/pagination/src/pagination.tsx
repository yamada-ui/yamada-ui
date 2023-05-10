import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from '@yamada-ui/core'
import { useValue } from '@yamada-ui/use-value'
import { cx, omitObject, dataAttr, handlerAll } from '@yamada-ui/utils'
import { ComponentPropsWithoutRef, FC, useMemo } from 'react'
import { PaginationItem, PaginationItemProps } from './pagination-item'
import { PaginationProvider, usePagination, UsePaginationProps } from './use-pagination'

type PaginationOptions = {
  component?: FC<PaginationItemProps>
  item?: HTMLUIProps<'button'>
  withControls?: Token<boolean>
  controls?: HTMLUIProps<'button'>
  controlPrev?: HTMLUIProps<'button'>
  controlNext?: HTMLUIProps<'button'>
  withEdges?: Token<boolean>
  edges?: HTMLUIProps<'button'>
  edgeFirst?: HTMLUIProps<'button'>
  edgeLast?: HTMLUIProps<'button'>
}

export type PaginationProps = Omit<HTMLUIProps<'div'>, 'onChange' | 'children'> &
  ThemeProps<'Pagination'> &
  UsePaginationProps &
  PaginationOptions

export const Pagination = forwardRef<PaginationProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Pagination', props)
  const {
    className,
    component: Component = PaginationItem,
    item,
    withControls = true,
    withEdges = false,
    controls,
    controlPrev,
    controlNext,
    edges,
    edgeFirst,
    edgeLast,
    ...rest
  } = omitThemeProps(mergedProps)

  const computedWithControls = useValue(withControls)
  const computedWithEdges = useValue(withEdges)

  const { currentPage, total, isDisabled, onFirst, onLast, onPrev, onNext, onChange, range } =
    usePagination(rest)

  const children = useMemo(
    () =>
      range.map((page, key) => (
        <Component
          key={key}
          page={page}
          isActive={currentPage === page}
          isDisabled={isDisabled}
          {...(item as ComponentPropsWithoutRef<'button'>)}
          onClick={handlerAll(item?.onClick, page !== 'dots' ? () => onChange(page) : undefined)}
        />
      )),
    [Component, currentPage, isDisabled, onChange, range, item],
  )

  const css: CSSUIObject = { display: 'flex', alignItems: 'center', ...styles.container }

  return (
    <PaginationProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx('ui-pagination', className)}
        role='navigation'
        __css={css}
        {...omitObject(rest, ['onChange'])}
        data-disabled={dataAttr(isDisabled)}
      >
        {computedWithEdges ? (
          <Component
            page='first'
            className='ui-pagination-item-first'
            isDisabled={isDisabled || currentPage === 1}
            {...(edges as ComponentPropsWithoutRef<'button'>)}
            {...(edgeFirst as ComponentPropsWithoutRef<'button'>)}
            onClick={handlerAll(edges?.onClick, edgeFirst?.onClick, onFirst)}
          />
        ) : null}

        {computedWithControls ? (
          <Component
            page='prev'
            className='ui-pagination-item-prev'
            isDisabled={isDisabled || currentPage === 1}
            {...(controls as ComponentPropsWithoutRef<'button'>)}
            {...(controlPrev as ComponentPropsWithoutRef<'button'>)}
            onClick={handlerAll(controls?.onClick, controlPrev?.onClick, onPrev)}
          />
        ) : null}

        {children}

        {computedWithControls ? (
          <Component
            page='next'
            className='ui-pagination-item-next'
            isDisabled={isDisabled || currentPage === total}
            {...(controls as ComponentPropsWithoutRef<'button'>)}
            {...(controlNext as ComponentPropsWithoutRef<'button'>)}
            onClick={handlerAll(controls?.onClick, controlNext?.onClick, onNext)}
          />
        ) : null}

        {computedWithEdges ? (
          <Component
            page='last'
            className='ui-pagination-item-last'
            isDisabled={isDisabled || currentPage === total}
            {...(edges as ComponentPropsWithoutRef<'button'>)}
            {...(edgeLast as ComponentPropsWithoutRef<'button'>)}
            onClick={handlerAll(edges?.onClick, edgeLast?.onClick, onLast)}
          />
        ) : null}
      </ui.div>
    </PaginationProvider>
  )
})
