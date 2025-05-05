import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { NativeTableStyle } from "./native-table.style"
import { createSlotComponent, styled } from "../../core"
import { nativeTableStyle } from "./native-table.style"

export interface NativeTableRootProps
  extends HTMLStyledProps<"table">,
    ThemeProps<NativeTableStyle> {
  /**
   * The CSS `table-layout` property.
   */
  layout?: CSSProps["tableLayout"]
  /**
   * Whether to enable the scroll area.
   *
   * @default false
   */
  withScrollArea?: boolean
  /**
   * The props for the scroll area.
   */
  scrollAreaProps?: NativeTableAreaProps
}

export const {
  PropsContext: NativeTablePropsContext,
  usePropsContext: useNativeTablePropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
  useSlotComponentProps,
} = createSlotComponent<NativeTableRootProps, NativeTableStyle>(
  "native-table",
  nativeTableStyle,
)

/**
 * `NativeTable` is a component for efficiently organizing and displaying data.
 *
 * @see https://yamada-ui.com/components/native-table
 */
export const NativeTableRoot = withProvider(
  ({ withScrollArea, scrollAreaProps, ...rest }) => {
    if (withScrollArea) {
      return (
        <NativeTableScrollArea {...scrollAreaProps}>
          <styled.table {...rest} />
        </NativeTableScrollArea>
      )
    } else {
      return <styled.table {...rest} />
    }
  },
  "root",
)(undefined, ({ layout: tableLayout, ...rest }) => ({
  tableLayout,
  ...rest,
}))

interface NativeTableAreaProps
  extends HTMLStyledProps,
    ThemeProps<NativeTableStyle> {}

const NativeTableScrollArea = withContext<"div", NativeTableAreaProps>(
  "div",
  "scrollArea",
)()

export interface CaptionProps extends HTMLStyledProps<"caption"> {
  /**
   * The placement of the table caption.
   *
   * @default 'bottom'
   */
  placement?: "bottom" | "top"
}

export const Caption = withContext<"caption", CaptionProps>(
  "caption",
  "caption",
)(undefined, ({ placement: captionSide = "bottom", ...rest }) => ({
  "data-placement": captionSide,
  captionSide,
  ...rest,
}))

export interface TheadProps extends HTMLStyledProps<"thead"> {}

export const Thead = withContext<"thead", TheadProps>("thead", "thead")()

export interface TbodyProps extends HTMLStyledProps<"tbody"> {}

export const Tbody = withContext<"tbody", TbodyProps>("tbody", "tbody")()

export interface TfootProps extends HTMLStyledProps<"tfoot"> {}

export const Tfoot = withContext<"tfoot", TfootProps>("tfoot", "tfoot")()

export interface ColgroupProps extends HTMLStyledProps<"colgroup"> {}

export const Colgroup = withContext<"colgroup", ColgroupProps>(
  "colgroup",
  "colgroup",
)()

export interface ColProps extends HTMLStyledProps<"col"> {}

export const Col = withContext<"col", ColProps>("col", "col")()

export interface ThProps extends HTMLStyledProps<"th"> {
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
    "data-numeric": numeric,
    ...rest,
  }),
)

export interface TrProps extends HTMLStyledProps<"tr"> {}

export const Tr = withContext<"tr", TrProps>("tr", "tr")()

export interface TdProps extends HTMLStyledProps<"td"> {
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
    "data-numeric": numeric,
    ...rest,
  }),
)
