import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { NativeTableStyle } from "./native-table.style"
import { ui } from "../../core"
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
  useSlotComponentProps,
} = createSlotComponent<NativeTableRootProps, NativeTableStyle>(
  "native-table",
  nativeTableStyle,
)

/**
 * `NativeTable` is a component for efficiently organizing and displaying data.
 *
 * @see Docs https://yamada-ui.com/components/native-table
 */
export const NativeTableRoot = withProvider("table", "root")(
  undefined,
  ({ layout: tableLayout, ...rest }) => ({ tableLayout, ...rest }),
)

export interface TableScrollAreaProps
  extends HTMLUIProps,
    ThemeProps<NativeTableStyle> {}

export const TableScrollArea = component<"div", TableScrollAreaProps>(
  (props) => {
    const [, rest] = useRootComponentProps(props, "scrollArea")

    return <ui.div {...rest} />
  },
  "scrollArea",
)()

export interface CaptionProps extends HTMLUIProps<"caption"> {
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

export interface TheadProps extends HTMLUIProps<"thead"> {}

export const Thead = withContext<"thead", TheadProps>("thead", "thead")()

export interface TbodyProps extends HTMLUIProps<"tbody"> {}

export const Tbody = withContext<"tbody", TbodyProps>("tbody", "tbody")()

export interface TfootProps extends HTMLUIProps<"tfoot"> {}

export const Tfoot = withContext<"tfoot", TfootProps>("tfoot", "tfoot")()

export interface ColgroupProps extends HTMLUIProps<"colgroup"> {}

export const Colgroup = withContext<"colgroup", ColgroupProps>(
  "colgroup",
  "colgroup",
)()

export interface ColProps extends HTMLUIProps<"col"> {}

export const Col = withContext<"col", ColProps>("col", "col")()

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
    "data-numeric": numeric,
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
    "data-numeric": numeric,
    ...rest,
  }),
)
