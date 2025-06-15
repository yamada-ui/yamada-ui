import type { PropGetter } from "../../core"
import type { PaginationControlProps, PaginationItemProps } from "./pagination"
import { useCallback } from "react"
import { useI18n } from "../../providers/i18n-provider"
import { handlerAll } from "../../utils"
import { usePaginationContext } from "./pagination"

export const usePaginationItem = () => {
  const {
    component,
    currentPage,
    disabled: _disabled,
    total,
    onChange,
    onFirst,
    onLast,
    onNext,
    onPrev,
  } = usePaginationContext()
  const { t } = useI18n("pagination")

  const getItemPrevProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to previous page"),
      disabled: disabled || currentPage === 1,
      page: "prev",
      ...props,
      onClick: handlerAll(onClick, onPrev),
    }),
    [_disabled, onPrev, currentPage, t],
  )

  const getItemNextProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to next page"),
      disabled: disabled || currentPage === total,
      page: "next",
      ...props,
      onClick: handlerAll(onClick, onNext),
    }),
    [_disabled, onNext, currentPage, total, t],
  )

  const getItemFirstProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to first page"),
      disabled: disabled || currentPage === 1,
      page: "first",
      ...props,
      onClick: handlerAll(onClick, onFirst),
    }),
    [_disabled, onFirst, currentPage, t],
  )

  const getItemLastProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": t("Go to last page"),
      disabled: disabled || currentPage === total,
      page: "last",
      ...props,
      onClick: handlerAll(onClick, onLast),
    }),
    [_disabled, onLast, currentPage, total, t],
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
