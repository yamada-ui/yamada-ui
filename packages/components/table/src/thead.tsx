import type { CSSUIObject } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon, ChevronIcon } from "@yamada-ui/icon"
import type { TableHeadProps as NativeTableHeadProps } from "@yamada-ui/native-table"
import {
  Thead as NativeThead,
  Tr,
  Th,
  useTableStyles,
} from "@yamada-ui/native-table"
import { runIfFunc, handlerAll, cx } from "@yamada-ui/utils"
import type { FC } from "react"
import { useMemo } from "react"
import type { SortDirection, Column } from "./use-table"
import { useTableContext, render } from "./use-table"

export type TableHeadProps = NativeTableHeadProps

export const Thead = ({ ...rest }: TableHeadProps) => {
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
              const { id, colSpan, rowSpan, column, getContext } = header
              const {
                columnDef,
                getToggleSortingHandler,
                getCanSort,
                getIsSorted,
              } = column
              let {
                sx,
                style,
                css,
                className,
                colSpan: customColSpan,
                rowSpan: customRowSpan,
              } = columnDef as Column<unknown>
              const computedHeaderProps = runIfFunc(headerProps, header) ?? {}

              const resolvedColSpan = (customColSpan ?? colSpan) || 1
              const resolvedRowSpan = (customRowSpan ?? rowSpan) || 1

              const props = {
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
                  sx={sx}
                  style={{ ...props.style, ...style }}
                  __css={{
                    position: "relative",
                    userSelect: getCanSort() ? "none" : undefined,
                    ...css,
                  }}
                >
                  {render(columnDef.header, getContext())}
                  {getCanSort() ? (
                    <SortIcon
                      {...{ isSorted: getIsSorted(), ...sortIconProps }}
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

export type SortIconProps = IconProps & { isSorted: false | SortDirection }

const SortIcon: FC<SortIconProps> = ({ isSorted, className, ...rest }) => {
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
        focusable="false"
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        __css={css}
        {...rest}
      >
        <path d="M8 9l4 -4l4 4"></path>
        <path d="M16 15l-4 4l-4 -4"></path>
      </Icon>
    )
  }

  if (isSorted === "desc") {
    return <ChevronIcon __css={css} {...rest} />
  } else {
    return <ChevronIcon __css={css} {...rest} />
  }
}
