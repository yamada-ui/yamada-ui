import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { NativeTableStyle } from "./native-table.style"
import { createSlotComponent } from "../../core"
import { nativeTableStyle } from "./native-table.style"

export interface NativeTableRootProps
  extends HTMLUIProps<"table">,
    ThemeProps<NativeTableStyle> {
  /**
   * The CSS `table-layout` property.
   */
  layout?: CSSProps["tableLayout"]
}

export const {
  component,
  PropsContext: NativeTablePropsContext,
  usePropsContext: useNativeTablePropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<NativeTableRootProps, NativeTableStyle>(
  "nativeTable",
  nativeTableStyle,
)

/**
 * `NativeTable` is a component for efficiently organizing and displaying data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/native-table
 */
export const NativeTableRoot = withProvider("table", "root")(
  undefined,
  ({ layout: tableLayout, ...rest }) => ({ tableLayout, ...rest }),
)

export interface TableContainerProps
  extends HTMLUIProps,
    ThemeProps<NativeTableStyle> {}

export const TableContainer = component<"div", TableContainerProps>(
  "div",
  "container",
)(({ overflow, overflowX, ...rest }) => ({
  overflowX: overflow ?? overflowX ?? "auto",
  ...rest,
}))

export interface TableCaptionProps extends HTMLUIProps<"caption"> {
  /**
   * The placement of the table caption.
   *
   * @default 'bottom'
   */
  placement?: "bottom" | "top"
}

export const TableCaption = withContext<"caption", TableCaptionProps>(
  "caption",
  "caption",
)(undefined, ({ placement: captionSide, ...rest }) => ({
  captionSide,
  ...rest,
}))

export interface TableHeadProps extends HTMLUIProps<"thead"> {}

export const Thead = withContext<"thead", TableHeadProps>("thead", "thead")()

export interface TableBodyProps extends HTMLUIProps<"tbody"> {}

export const Tbody = withContext<"tbody", TableBodyProps>("tbody", "tbody")()

export interface TableFootProps extends HTMLUIProps<"tfoot"> {}

export const Tfoot = withContext<"tfoot", TableFootProps>("tfoot", "tfoot")()

export interface ThProps extends HTMLUIProps<"th"> {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  numeric?: boolean
}

export const Th = withContext<"th", ThProps>("th", "th")(
  undefined,
  ({ numeric, ...rest }) => ({
    "data-is-numeric": numeric,
    ...rest,
  }),
)

export interface TrProps extends HTMLUIProps<"tr"> {}

export const Tr = withContext<"tr", TrProps>("tr", "tr")()

export interface TdProps extends HTMLUIProps<"td"> {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  numeric?: boolean
}

export const Td = withContext<"td", TdProps>("td", "td")(
  undefined,
  ({ numeric, ...rest }) => ({
    "data-is-numeric": numeric,
    ...rest,
  }),
)
