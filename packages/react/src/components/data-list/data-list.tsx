import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { DataListStyle } from "./data-list.style"
import { useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  getValidChildren,
  isArray,
  isEmpty,
  isNumber,
  omitChildren,
  pickChildren,
  useUpdateEffect,
} from "../../utils"
import { dataListStyle } from "./data-list.style"

const getComputeCol = (items: DataListItemProps[]) => {
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
}

export interface DataListRootProps
  extends HTMLStyledProps<"dl">,
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
   * The props for the data list description component.
   */
  descriptionProps?: DataListDescriptionProps
  /**
   * The props for the data list term component.
   */
  termProps?: DataListTermProps
}

interface ComponentContext
  extends Pick<DataListRootProps, "descriptionProps" | "termProps"> {}

export const {
  ComponentContext,
  PropsContext: DataListPropsContext,
  useComponentContext,
  usePropsContext: useDataListPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DataListRootProps, DataListStyle, ComponentContext>(
  "data-list",
  dataListStyle,
)

/**
 * `DataList` is used to display a list of data items.
 *
 * @see https://yamada-ui.com/components/data-list
 */
export const DataListRoot = withProvider(
  ({
    style,
    children,
    col: colProp,
    items = [],
    descriptionProps,
    termProps,
    ...rest
  }) => {
    const [col, setCol] = useState(() => {
      if (isNumber(colProp)) return colProp

      return getComputeCol(items)
    })
    const computedChildren = useMemo(
      () =>
        items.map((props, index) => <DataListItem key={index} {...props} />),
      [items],
    )
    const context = useMemo(
      () => ({
        descriptionProps,
        termProps,
      }),
      [descriptionProps, termProps],
    )

    useUpdateEffect(() => {
      if (isNumber(colProp)) {
        setCol(colProp)

        return
      }

      setCol(getComputeCol(items))
    }, [items, colProp])

    return (
      <ComponentContext value={context}>
        <styled.dl style={{ "--col": col, ...style }} {...rest}>
          {children ?? computedChildren}
        </styled.dl>
      </ComponentContext>
    )
  },
  "root",
)()

export interface DataListItemProps extends HTMLStyledProps {
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
    const { descriptionProps, termProps } = useComponentContext()

    const validChildren = getValidChildren(children)
    const customTerms = pickChildren(validChildren, DataListTerm)
    const customDescriptions = pickChildren(validChildren, DataListDescription)
    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, DataListTerm, DataListDescription)
      : children

    return (
      <styled.div {...rest}>
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
      </styled.div>
    )
  },
  "item",
)()

export interface DataListTermProps extends HTMLStyledProps<"dt"> {}

export const DataListTerm = withContext<"dt", DataListTermProps>("dt", "term")()

export interface DataListDescriptionProps extends HTMLStyledProps<"dd"> {}

export const DataListDescription = withContext<"dd", DataListDescriptionProps>(
  "dd",
  "description",
)()
