import type { ReactNode } from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import {
  createContext,
  cx,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"

interface EmptyStateContext {
  [key: string]: CSSUIObject | undefined
}

const [EmptyStateContext, useEmptyStateContext] =
  createContext<EmptyStateContext>({
    name: "EmptyStateContext",
    errorMessage: `useEmptyStateContext returned is 'undefined'. Seems you forgot to wrap the components in "<EmptyState />"`,
  })

interface EmptyStateOptions {
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

export interface EmptyStateProps
  extends Omit<HTMLUIProps, "title">,
    ThemeProps<"EmptyState">,
    EmptyStateOptions {}

/**
 * `EmptyState` is used to display when a resource is empty or not available.
 *
 * @see Docs https://yamada-ui.com/components/other/empty-state
 */
export const EmptyState: FC<EmptyStateProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("EmptyState", props)
  const {
    className,
    children,
    description,
    indicator,
    title,
    contentProps,
    descriptionProps,
    indicatorProps,
    titleProps,
    ...rest
  } = omitThemeProps(mergedProps)

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

  const css: CSSUIObject = {
    ...styles.container,
  }

  return (
    <EmptyStateContext value={styles}>
      <ui.div className={cx("ui-empty-state", className)} __css={css} {...rest}>
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
    </EmptyStateContext>
  )
}

EmptyState.__ui__ = "EmptyState"

export interface EmptyStateIndicatorProps extends HTMLUIProps {}

export const EmptyStateIndicator: FC<EmptyStateIndicatorProps> = ({
  className,
  ...rest
}) => {
  const styles = useEmptyStateContext()

  const css: CSSUIObject = { ...styles.indicator }

  return (
    <ui.div
      className={cx("ui-empty-state__indicator", className)}
      __css={css}
      {...rest}
    />
  )
}

EmptyStateIndicator.__ui__ = "EmptyStateIndicator"

export interface EmptyStateContentProps extends HTMLUIProps {}

export const EmptyStateContent: FC<EmptyStateContentProps> = ({
  className,
  ...rest
}) => {
  const styles = useEmptyStateContext()

  const css: CSSUIObject = { ...styles.content }

  return (
    <ui.div
      className={cx("ui-empty-state__content", className)}
      __css={css}
      {...rest}
    />
  )
}

EmptyStateContent.__ui__ = "EmptyStateContent"

export interface EmptyStateTitleProps extends HTMLUIProps<"h3"> {}

export const EmptyStateTitle: FC<EmptyStateTitleProps> = ({
  className,
  ...rest
}) => {
  const styles = useEmptyStateContext()

  const css: CSSUIObject = { ...styles.title }

  return (
    <ui.h3
      className={cx("ui-empty-state__title", className)}
      __css={css}
      {...rest}
    />
  )
}

EmptyStateTitle.__ui__ = "EmptyStateTitle"

export interface EmptyStateDescriptionProps extends HTMLUIProps<"p"> {}

export const EmptyStateDescription: FC<EmptyStateDescriptionProps> = ({
  className,
  ...rest
}) => {
  const styles = useEmptyStateContext()

  const css: CSSUIObject = { ...styles.description }

  return (
    <ui.p
      className={cx("ui-empty-state__description", className)}
      __css={css}
      {...rest}
    />
  )
}

EmptyStateDescription.__ui__ = "EmptyStateDescription"
