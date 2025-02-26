import type { ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { EmptyState } from "./empty-state.style"
import { createSlotComponent, ui } from "../../core"
import { findChild, getValidChildren, isEmpty, omitChildren } from "../../utils"
import { emptyState } from "./empty-state.style"

export interface EmptyStateRootProps
  extends Omit<HTMLUIProps, "title">,
    ThemeProps<EmptyState> {
  /**
   * The empty state description to use.
   */
  description?: ReactNode
  /**
   * The empty state indicator to use.
   */
  indicator?: ReactNode
  /**
   * The empty state title to use.
   */
  title?: ReactNode
  /**
   * The props for the empty state content component.
   */
  contentProps?: EmptyStateContentProps
  /**
   * The props for the empty state description component.
   */
  descriptionProps?: EmptyStateDescriptionProps
  /**
   * The props for the empty state indicator component.
   */
  indicatorProps?: EmptyStateIndicatorProps
  /**
   * The props for the empty state title component.
   */
  titleProps?: EmptyStateTitleProps
}

export const {
  PropsContext: EmptyStatePropsContext,
  usePropsContext: useEmptyStatePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<EmptyStateRootProps, EmptyState>(
  "empty-state",
  emptyState,
)

/**
 * `EmptyState` is used to display when a resource is empty or not available.
 *
 * @see Docs https://yamada-ui.com/components/empty-state
 */
export const EmptyStateRoot = withProvider<"div", EmptyStateRootProps>(
  ({
    children,
    description,
    indicator,
    title,
    contentProps,
    descriptionProps,
    indicatorProps,
    titleProps,
    ...rest
  }) => {
    const validChildren = getValidChildren(children)
    const customIndicator = findChild(validChildren, EmptyStateIndicator)
    const customContent = findChild(validChildren, EmptyStateContent)
    const customTitle = findChild(validChildren, EmptyStateTitle)
    const customDescription = findChild(validChildren, EmptyStateDescription)

    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          EmptyStateIndicator,
          EmptyStateTitle,
          EmptyStateContent,
          EmptyStateDescription,
        )
      : children

    return (
      <ui.div {...rest}>
        {customIndicator ?? (
          <EmptyStateIndicator {...indicatorProps}>
            {indicator}
          </EmptyStateIndicator>
        )}

        {customContent ?? (
          <EmptyStateContent {...contentProps}>
            {customTitle ?? (
              <EmptyStateTitle {...titleProps}>{title}</EmptyStateTitle>
            )}

            {customDescription ?? (
              <EmptyStateDescription {...descriptionProps}>
                {description}
              </EmptyStateDescription>
            )}
          </EmptyStateContent>
        )}

        {computedChildren}
      </ui.div>
    )
  },
  "root",
)()

export interface EmptyStateIndicatorProps extends HTMLUIProps {}

export const EmptyStateIndicator = withContext<"div", EmptyStateIndicatorProps>(
  "div",
  "indicator",
)()

export interface EmptyStateContentProps extends HTMLUIProps {}

export const EmptyStateContent = withContext<"div", EmptyStateContentProps>(
  "div",
  "content",
)()

export interface EmptyStateTitleProps extends HTMLUIProps<"h3"> {}

export const EmptyStateTitle = withContext<"h3", EmptyStateTitleProps>(
  "h3",
  "title",
)()

export interface EmptyStateDescriptionProps extends HTMLUIProps<"p"> {}

export const EmptyStateDescription = withContext<
  "p",
  EmptyStateDescriptionProps
>("p", "description")()
