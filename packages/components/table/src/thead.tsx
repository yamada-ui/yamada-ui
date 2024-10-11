import type { CSSUIObject } from "@yamada-ui/core"
import type { FC } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type {
  TableHeadProps as NativeTableHeadProps,
  ThProps,
} from "@yamada-ui/native-table"
import type { Column, SortDirection } from "./use-table"
import { ChevronIcon, Icon } from "@yamada-ui/icon"
import {
  Thead as NativeThead,
  Th,
  Tr,
  useTableStyles,
} from "@yamada-ui/native-table"
import { cx, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { useMemo } from "react"
import { render, useTableContext } from "./use-table"

export interface TableHeadProps extends NativeTableHeadProps {}

export const Thead: FC = ({ ...rest }: TableHeadProps) => {
  const { headerGroups, headerGroupProps, headerProps, sortIconProps } =
    useTableContext()

  const resolvedHeaderGroups = useMemo(
    () =>
      headerGroups.map((header) => {
        const upperHeaderGroups = headerGroups.filter(
          ({ depth }) => depth < header.depth,
        )
        const lowerHeaderGroups = headerGroups.filter(
          ({ depth }) => depth > header.depth,
        )

        header.headers = header.headers.filter((header) => {
          return upperHeaderGroups.every(({ headers }) =>
            headers.every(({ column }) => column.id !== header.column.id),
          )
        })

        header.headers = header.headers.map((header) => {
          for (const { depth, headers } of [...lowerHeaderGroups].reverse()) {
            const hasLower = !headers.every(
              ({ column }) => column.id !== header.column.id,
            )

            if (hasLower) {
              header.rowSpan = depth + 1

              break
            }
          }

          return header
        })

        return header
      }),
    [headerGroups],
  )

  return (
    <NativeThead {...rest}>
      {resolvedHeaderGroups.map(({ id, headers }) => {
        return (
          <Tr key={id} {...runIfFunc(headerGroupProps, headers)}>
            {headers.map((header) => {
              const { id, colSpan, column, getContext, rowSpan } = header
              const {
                columnDef,
                getCanSort,
                getIsSorted,
                getToggleSortingHandler,
              } = column
              let {
                className,
                css,
                style,
                sx,
                "aria-label": ariaLabel,
                colSpan: customColSpan,
                rowSpan: customRowSpan,
              } = columnDef as Column<unknown>
              const computedHeaderProps = runIfFunc(headerProps, header) ?? {}

              const resolvedColSpan = (customColSpan ?? colSpan) || 1
              const resolvedRowSpan = (customRowSpan ?? rowSpan) || 1

              const isSorted = getIsSorted()

              const props: ThProps = {
                "aria-label": ariaLabel,
                "aria-sort": isSorted
                  ? isSorted === "asc"
                    ? "ascending"
                    : "descending"
                  : "none",
                ...computedHeaderProps,
                colSpan: resolvedColSpan,
                rowSpan: resolvedRowSpan,
                onClick: handlerAll(
                  computedHeaderProps.onClick,
                  getToggleSortingHandler(),
                ),
              }

              return (
                <Th
                  key={id}
                  {...props}
                  className={className}
                  style={{ ...props.style, ...style }}
                  sx={sx}
                  __css={{
                    position: "relative",
                    userSelect: getCanSort() ? "none" : undefined,
                    ...css,
                  }}
                >
                  {render(columnDef.header, getContext())}
                  {getCanSort() ? (
                    <SortIcon {...{ isSorted, ...sortIconProps }} />
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

Thead.displayName = "Thead"
Thead.__ui__ = "Thead"

export interface SortIconProps extends IconProps {
  isSorted: false | SortDirection
}

export const SortIcon: FC<SortIconProps> = ({
  className,
  isSorted,
  ...rest
}) => {
  const styles = useTableStyles()

  const css: CSSUIObject = {
    position: "absolute",
    top: "50%",
    transform:
      isSorted === "desc"
        ? "translateY(-50%) rotate(180deg)"
        : "translateY(-50%)",
    ...styles.sortIcon,
  }

  if (!isSorted) {
    return (
      <Icon
        className={cx("ui-table__sort-icon", className)}
        aria-hidden
        fill="none"
        focusable="false"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        __css={css}
        {...rest}
      >
        <path d="M8 9l4 -4l4 4" />
        <path d="M16 15l-4 4l-4 -4" />
      </Icon>
    )
  }

  if (isSorted === "desc") {
    return <ChevronIcon __css={css} {...rest} />
  } else {
    return <ChevronIcon __css={css} {...rest} />
  }
}
