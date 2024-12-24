import type { ReactNode } from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { useMemo, useState } from "react"
import {
  mergeVars,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import {
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  isArray,
  isEmpty,
  isNumber,
  omitChildren,
  pickChildren,
  useUpdateEffect,
} from "../../utils"

export type DataListOrientation = "horizontal" | "vertical"

interface DataListContext {
  grid: boolean
  orientation: DataListOrientation
  styles: { [key: string]: CSSUIObject | undefined }
  descriptionProps?: DataListDescriptionProps
  termProps?: DataListTermProps
}

const [DataListContext, useDataListContext] = createContext<DataListContext>({
  name: "DataListContext",
  errorMessage: `useDataListContext returned is 'undefined'. Seems you forgot to wrap the components in "<DataList />"`,
})

interface DataListOptions {
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

export interface DataListProps
  extends HTMLUIProps<"dl">,
    ThemeProps<"DataList">,
    DataListOptions {}

/**
 * `DataList` is used to display a list of data items.
 *
 * @see Docs https://yamada-ui.com/components/data-display/data-list
 */
export const DataList: FC<DataListProps> = (props) => {
  const [styles, { variant, ...mergedProps }] = useComponentMultiStyle(
    "DataList",
    props,
  )
  const {
    className,
    children,
    col: colProp,
    items = [],
    orientation = "horizontal",
    vars: varsProp,
    descriptionProps,
    termProps,
    ...rest
  } = omitThemeProps(mergedProps)
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
    () => items.map((props, index) => <DataListItem key={index} {...props} />),
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
      value={{ grid, orientation, styles, descriptionProps, termProps }}
    >
      <ui.dl
        className={cx("ui-data-list", className)}
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        __css={{
          ...styles.container,
          vars: mergeVars(varsProp, styles.container?.vars, [
            { name: "col", value: col },
          ]),
        }}
        {...rest}
      >
        {children ?? computedChildren}
      </ui.dl>
    </DataListContext>
  )
}

DataList.__ui__ = "DataList"

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

export const DataListItem: FC<DataListItemProps> = ({
  className,
  children,
  description,
  term,
  descriptionProps: customDescriptionProps,
  termProps: customTermProps,
  ...rest
}) => {
  const { grid, orientation, styles, descriptionProps, termProps } =
    useDataListContext()

  const validChildren = getValidChildren(children)
  const customTerms = pickChildren(validChildren, DataListTerm)
  const customDescriptions = pickChildren(validChildren, DataListDescription)
  const computedChildren = !isEmpty(validChildren)
    ? omitChildren(validChildren, DataListTerm, DataListDescription)
    : children

  return (
    <ui.div
      className={cx("ui-data-list__item", className)}
      data-grid={dataAttr(grid)}
      data-orientation={orientation}
      __css={styles.item}
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
        <DataListDescription {...descriptionProps} {...customDescriptionProps}>
          {description}
        </DataListDescription>
      )}
      {computedChildren}
    </ui.div>
  )
}

DataListItem.__ui__ = "DataListItem"

export interface DataListTermProps extends HTMLUIProps<"dt"> {}

export const DataListTerm: FC<DataListTermProps> = ({ className, ...rest }) => {
  const { grid, orientation, styles } = useDataListContext()

  return (
    <ui.dt
      className={cx("ui-data-list__term", className)}
      data-grid={dataAttr(grid)}
      data-orientation={orientation}
      __css={styles.term}
      {...rest}
    />
  )
}

DataListTerm.__ui__ = "DataListTerm"

export interface DataListDescriptionProps extends HTMLUIProps<"dd"> {}

export const DataListDescription: FC<DataListDescriptionProps> = ({
  className,
  ...rest
}) => {
  const { grid, orientation, styles } = useDataListContext()

  return (
    <ui.dd
      className={cx("ui-data-list__description", className)}
      data-grid={dataAttr(grid)}
      data-orientation={orientation}
      __css={styles.description}
      {...rest}
    />
  )
}

DataListDescription.__ui__ = "DataListDescription"
