import type { PropGetter} from "../../core";
import type {
  PaginationControlProps,
  PaginationItemProps} from "./pagination";
import { useCallback } from "react"
import { mergeProps } from "../../core"
import { handlerAll } from "../../utils"
import {
  usePaginationContext,
  usePaginationPropsContext
} from "./pagination"

export const usePaginationItem = () => {
  const {
    disabled: _disabled,
    total,
    controlNextProps = {},
    controlPrevProps = {},
    controlProps = {},
    edgeFirstProps = {},
    edgeLastProps = {},
    edgeProps = {},
    itemProps = {},
  } = usePaginationPropsContext() ?? {}
  const { component, currentPage, onChange, onFirst, onLast, onNext, onPrev } =
    usePaginationContext()

  const getItemPrevProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to previous page",
      disabled: disabled || currentPage === 1,
      page: "prev",
      ...mergeProps(props, itemProps, controlProps, controlPrevProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        controlProps.onClick,
        controlPrevProps.onClick,
        onClick,
        onPrev,
      ),
    }),
    [_disabled, itemProps, controlProps, controlPrevProps, onPrev, currentPage],
  )

  const getItemLastProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to last page",
      disabled: disabled || currentPage === total,
      page: "last",
      ...mergeProps(props, itemProps, edgeProps, edgeLastProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        edgeProps.onClick,
        edgeLastProps.onClick,
        onClick,
        onLast,
      ),
    }),
    [
      _disabled,
      itemProps,
      edgeProps,
      edgeLastProps,
      onLast,
      currentPage,
      total,
    ],
  )
  const getItemFirstProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to first page",
      disabled: disabled || currentPage === 1,
      page: "first",
      ...mergeProps(props, itemProps, edgeProps, edgeFirstProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        edgeProps.onClick,
        edgeFirstProps.onClick,
        onClick,
        onFirst,
      ),
    }),
    [_disabled, itemProps, edgeProps, edgeFirstProps, onFirst, currentPage],
  )

  const getItemNextProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to next page",
      disabled: disabled || currentPage === total,
      page: "next",
      ...mergeProps(props, itemProps, controlProps, controlNextProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        controlProps.onClick,
        controlNextProps.onClick,
        onClick,
        onNext,
      ),
    }),
    [
      _disabled,
      itemProps,
      controlProps,
      controlNextProps,
      onNext,
      currentPage,
      total,
    ],
  )

  const getItemNumberProps = useCallback<
    PropGetter<"button", Omit<PaginationItemProps, "page">, { page: number }>
  >(
    ({
      // @ts-expect-error TODO: Fix this type error
      disabled = _disabled,
      // @ts-expect-error TODO: Fix this type error
      page,
      // @ts-expect-error TODO: Fix this type error
      onClick,
      ...props
    }) => ({
      "aria-label": `Go to page ${page}`,
      active: currentPage === page,
      disabled: disabled,
      page,
      ...mergeProps(props, itemProps)(),
      onClick: handlerAll(itemProps.onClick, onClick, () => onChange(page)),
    }),
    [_disabled, itemProps, currentPage, onChange],
  )

  const getItemEllipsisProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    (props = {}) => ({
      "aria-label": "Ellipsis",
      disabled: true,
      page: "ellipsis",
      ...mergeProps(props, itemProps)(),
    }),
    [itemProps],
  )

  return {
    Component: component,
    getItemEllipsisProps,
    getItemFirstProps,
    getItemLastProps,
    getItemNextProps,
    getItemNumberProps,
    getItemPrevProps,
  }
}
