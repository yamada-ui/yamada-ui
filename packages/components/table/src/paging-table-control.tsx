import type { HTMLUIProps } from "@yamada-ui/core"
import type { PagingTableProps } from "./paging-table"
import { forwardRef } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { useTableStyles } from "@yamada-ui/native-table"
import { Pagination } from "@yamada-ui/pagination"
import { Select } from "@yamada-ui/select"
import { useValue } from "@yamada-ui/use-value"
import { cx, transformSize } from "@yamada-ui/utils"
import { useTableContext } from "./table-context"

const defaultFormatPageSizeLabel = (pageSize: number) => String(pageSize)

export interface PagingTableControlProps
  extends HTMLUIProps,
    Pick<
      PagingTableProps,
      | "colorScheme"
      | "formatPageSizeLabel"
      | "paginationProps"
      | "selectProps"
      | "size"
    > {}

export const PagingTableControl = forwardRef<PagingTableControlProps, "div">(
  (
    {
      className,
      colorScheme,
      size: _size,
      formatPageSizeLabel = defaultFormatPageSizeLabel,
      paginationProps,
      selectProps,
      ...rest
    },
    ref,
  ) => {
    const styles = useTableStyles()
    const { pageSizeList, setPageIndex, setPageSize, state, totalPage } =
      useTableContext()
    let size = useValue(_size)

    size = transformSize(size, -1)

    return (
      <ui.div
        ref={ref}
        className={cx("ui-paging-table__control", className)}
        __css={{ display: "grid", ...styles.pagingControl }}
        {...rest}
      >
        <Pagination
          colorScheme={colorScheme}
          size={size}
          gridColumnEnd={3}
          gridColumnStart={2}
          justifyContent="center"
          page={state.pagination.pageIndex + 1}
          total={totalPage}
          withEdges
          onChange={(page) => setPageIndex(page - 1)}
          {...paginationProps}
        />

        <Select
          size={size}
          gridColumnEnd={4}
          gridColumnStart={3}
          items={pageSizeList.map((pageSize) => ({
            label: formatPageSizeLabel(pageSize),
            value: String(pageSize),
          }))}
          justifySelf="flex-end"
          maxW="3xs"
          value={String(state.pagination.pageSize)}
          onChange={(pageSize) => setPageSize(Number(pageSize))}
          {...selectProps}
        />
      </ui.div>
    )
  },
)

PagingTableControl.displayName = "PagingTableControl"
