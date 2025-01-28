import type { ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { DataListStyle } from "./data-list.style"
import { useMemo, useState } from "react"
import { createSlotComponent, mergeVars, ui } from "../../core"
import {
  dataAttr,
  getValidChildren,
  isArray,
  isEmpty,
  isNumber,
  omitChildren,
  pickChildren,
  useUpdateEffect,
} from "../../utils"
import { dataListStyle } from "./data-list.style"

export type DataListOrientation = "horizontal" | "vertical"

export interface DataListRootProps
  extends HTMLUIProps<"dl">,
    ThemeProps<DataListStyle> {
  /**
   * The number of columns.
   * If `orientation` is `"horizontal"` and `items` is not set, please set this.
   */
  col?: number
  /**
   * If provided, generate elements based on items.
   */
  items?: DataListItemProps[]
  /**
   * The orientation of the data list.
   *
   * @default 'horizontal'
   */
  orientation?: DataListOrientation
  /**
   * The props for the data list description component.
   */
  descriptionProps?: DataListDescriptionProps
  /**
   * The props for the data list term component.
   */
  termProps?: DataListTermProps
}

interface DataListContext {
  grid: boolean
  orientation: DataListOrientation
  descriptionProps?: DataListDescriptionProps
  termProps?: DataListTermProps
}

export const {
  ComponentContext: DataListContext,
  useComponentContext: useDataListContext,
  withContext,
  withProvider,
} = createSlotComponent<DataListRootProps, DataListStyle, DataListContext>(
  "data-list",
  dataListStyle,
)

/**
 * `DataList` is used to display a list of data items.
 *
 * @see Docs https://yamada-ui.com/components/data-display/data-list
 */
export const DataListRoot = withProvider(
  ({
    variant,
    children,
    col: colProp,
    items = [],
    orientation = "horizontal",
    vars,
    descriptionProps,
    termProps,
    ...rest
  }) => {
    const [col, setCol] = useState(() => {
      if (isNumber(colProp)) return colProp

      let col = 0

      items.forEach(({ description, term }) => {
        const termCount = !term ? 0 : isArray(term) ? term.length : 1
        const descriptionCount = !description
          ? 0
          : isArray(description)
            ? description.length
            : 1

        col = Math.max(col, termCount + descriptionCount)
      })

      return col
    })
    const grid = variant === "grid"

    const computedChildren = useMemo(
      () =>
        items.map((props, index) => <DataListItem key={index} {...props} />),
      [items],
    )

    useUpdateEffect(() => {
      if (isNumber(colProp)) return

      let col = 0

      items.forEach(({ description, term }) => {
        const termCount = !term ? 0 : isArray(term) ? term.length : 1
        const descriptionCount = !description
          ? 0
          : isArray(description)
            ? description.length
            : 1

        col = Math.max(col, termCount + descriptionCount)
      })

      setCol(col)
    }, [items, colProp])

    return (
      <DataListContext
        value={{ grid, orientation, descriptionProps, termProps }}
      >
        <ui.dl
          data-grid={dataAttr(grid)}
          data-orientation={orientation}
          vars={mergeVars(vars, [{ name: "col", value: col }])}
          {...rest}
        >
          {children ?? computedChildren}
        </ui.dl>
      </DataListContext>
    )
  },
  "root",
  { transferProps: ["variant"] },
)()

export interface DataListItemProps extends HTMLUIProps {
  /**
   * The data list description to use.
   */
  description?: ReactNode | ReactNode[]
  /**
   * The data list term to use.
   */
  term?: ReactNode | ReactNode[]
  /**
   * The props for the data list description component.
   */
  descriptionProps?: DataListDescriptionProps
  /**
   * The props for the data list term component.
   */
  termProps?: DataListTermProps
}

export const DataListItem = withContext<"div", DataListItemProps>(
  ({
    children,
    description,
    term,
    descriptionProps: customDescriptionProps,
    termProps: customTermProps,
    ...rest
  }) => {
    const { grid, orientation, descriptionProps, termProps } =
      useDataListContext()

    const validChildren = getValidChildren(children)
    const customTerms = pickChildren(validChildren, DataListTerm)
    const customDescriptions = pickChildren(validChildren, DataListDescription)
    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, DataListTerm, DataListDescription)
      : children

    return (
      <ui.div
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        {...rest}
      >
        {!isEmpty(customTerms) ? (
          customTerms
        ) : isArray(term) ? (
          term.map((item, index) => (
            <DataListTerm key={index} {...termProps} {...customTermProps}>
              {item}
            </DataListTerm>
          ))
        ) : (
          <DataListTerm {...termProps} {...customTermProps}>
            {term}
          </DataListTerm>
        )}
        {!isEmpty(customDescriptions) ? (
          customDescriptions
        ) : isArray(description) ? (
          description.map((item, index) => (
            <DataListDescription
              key={index}
              {...descriptionProps}
              {...customDescriptionProps}
            >
              {item}
            </DataListDescription>
          ))
        ) : (
          <DataListDescription
            {...descriptionProps}
            {...customDescriptionProps}
          >
            {description}
          </DataListDescription>
        )}
        {computedChildren}
      </ui.div>
    )
  },
  "item",
)()

export interface DataListTermProps extends HTMLUIProps<"dt"> {}

export const DataListTerm = withContext<"dt", DataListTermProps>((props) => {
  const { grid, orientation } = useDataListContext()

  return (
    <ui.dt
      data-grid={dataAttr(grid)}
      data-orientation={orientation}
      {...props}
    />
  )
}, "term")()

export interface DataListDescriptionProps extends HTMLUIProps<"dd"> {}

export const DataListDescription = withContext<"dd", DataListDescriptionProps>(
  (props) => {
    const { grid, orientation } = useDataListContext()

    return (
      <ui.dd
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        {...props}
      />
    )
  },
  "description",
)()
