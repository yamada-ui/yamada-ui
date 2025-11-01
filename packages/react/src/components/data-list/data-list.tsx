"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { DataListStyle } from "./data-list.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  getValidChildren,
  isArray,
  isEmpty,
  omitChildren,
  pickChildren,
} from "../../utils"
import { dataListStyle } from "./data-list.style"

export interface DataListItem extends DataListItemProps {}

export interface DataListRootProps
  extends HTMLStyledProps<"dl">,
    ThemeProps<DataListStyle> {
  /**
   * If provided, generate elements based on items.
   */
  items?: DataListItem[]
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

const {
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

export { DataListPropsContext, useDataListPropsContext }

/**
 * `DataList` is used to display a list of data items.
 *
 * @see https://yamada-ui.com/docs/components/data-list
 */
export const DataListRoot = withProvider<"dl", DataListRootProps>(
  ({ style, children, items = [], descriptionProps, termProps, ...rest }) => {
    const col = useMemo(() => {
      let col = 0

      if (children) {
        const validChildren = getValidChildren(children)
        const dataListItems = pickChildren(validChildren, DataListItem)

        dataListItems.forEach(({ props }) => {
          const validChildren = getValidChildren(props.children)
          const pickedChildren = pickChildren(
            validChildren,
            DataListTerm,
            DataListDescription,
          )

          col = Math.max(col, pickedChildren.length)
        })
      } else {
        items.forEach(({ description, term }) => {
          const termCount = !term ? 0 : isArray(term) ? term.length : 1
          const descriptionCount = !description
            ? 0
            : isArray(description)
              ? description.length
              : 1

          col = Math.max(col, termCount + descriptionCount)
        })
      }

      return col
    }, [children, items])
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

    const [omittedChildren, customTerms, customDescriptions] = useMemo(() => {
      const validChildren = getValidChildren(children)

      if (isEmpty(validChildren)) return [children]

      const customTerms = pickChildren(validChildren, DataListTerm)
      const customDescriptions = pickChildren(
        validChildren,
        DataListDescription,
      )
      const omittedChildren = omitChildren(
        validChildren,
        DataListTerm,
        DataListDescription,
      )

      return [omittedChildren, customTerms, customDescriptions] as const
    }, [children])

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

        {omittedChildren}
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
