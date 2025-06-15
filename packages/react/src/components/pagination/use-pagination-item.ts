import type { PropGetter } from "../../core"
import type { PaginationControlProps, PaginationItemProps } from "./pagination"
import { useCallback } from "react"
import { mergeProps } from "../../core"
import { useI18n } from "../../providers/i18n-provider"
import { handlerAll } from "../../utils"
import { usePaginationContext, usePaginationPropsContext } from "./pagination"

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
  } = usePaginationPropsContext() ?? {}
  const { component, currentPage, onChange, onFirst, onLast, onNext, onPrev } =
    usePaginationContext()
  const { t } = useI18n("pagination")

  const getItemPrevProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to previous page"),
      disabled: disabled || currentPage === 1,
      page: "prev",
      ...mergeProps(props, controlProps, controlPrevProps)(),
      onClick: handlerAll(
        controlProps.onClick,
        controlPrevProps.onClick,
        onClick,
        onPrev,
      ),
    }),
    [_disabled, controlProps, controlPrevProps, onPrev, currentPage, t],
  )

  const getItemLastProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to last page"),
      disabled: disabled || currentPage === total,
      page: "last",
      ...mergeProps(props, edgeProps, edgeLastProps)(),
      children: edgeLastProps.children,
      onClick: handlerAll(
        edgeProps.onClick,
        edgeLastProps.onClick,
        onClick,
        onLast,
      ),
    }),
    [_disabled, edgeProps, edgeLastProps, onLast, currentPage, total, t],
  )
  const getItemFirstProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to first page"),
      disabled: disabled || currentPage === 1,
      page: "first",
      ...mergeProps(props, edgeProps, edgeFirstProps)(),
      onClick: handlerAll(
        edgeProps.onClick,
        edgeFirstProps.onClick,
        onClick,
        onFirst,
      ),
    }),
    [_disabled, edgeProps, edgeFirstProps, onFirst, currentPage, t],
  )

  const getItemNextProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to next page"),
      disabled: disabled || currentPage === total,
      page: "next",
      ...mergeProps(props, controlProps, controlNextProps)(),
      onClick: handlerAll(
        controlProps.onClick,
        controlNextProps.onClick,
        onClick,
        onNext,
      ),
    }),
    [_disabled, controlProps, controlNextProps, onNext, currentPage, total, t],
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
      "aria-label": t("Go to page {number}", { number: page }),
      active: currentPage === page,
      disabled: disabled,
      page,
      ...props,
      onClick: handlerAll(onClick, () => onChange(page)),
    }),
    [_disabled, currentPage, onChange, t],
  )

  const getItemEllipsisProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    (props = {}) => ({
      disabled: true,
      page: "ellipsis",
      ...props,
    }),
    [],
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
