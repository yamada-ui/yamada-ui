import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  createContext,
  cx,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"

interface EmptyStateContext {
  [key: string]: CSSUIObject | undefined
}

const [EmptyStateProvider, useEmptyStateContext] =
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
export const EmptyState = forwardRef<EmptyStateProps, "div">((props, ref) => {
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
    <EmptyStateProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-empty-state", className)}
        __css={css}
        {...rest}
      >
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
    </EmptyStateProvider>
  )
})

EmptyState.displayName = "EmptyState"
EmptyState.__ui__ = "EmptyState"

export interface EmptyStateIndicatorProps extends HTMLUIProps {}

export const EmptyStateIndicator = forwardRef<EmptyStateIndicatorProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useEmptyStateContext()

    const css: CSSUIObject = { ...styles.indicator }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-empty-state__indicator", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

EmptyStateIndicator.displayName = "EmptyStateIndicator"
EmptyStateIndicator.__ui__ = "EmptyStateIndicator"

export interface EmptyStateContentProps extends HTMLUIProps {}

export const EmptyStateContent = forwardRef<EmptyStateContentProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useEmptyStateContext()

    const css: CSSUIObject = { ...styles.content }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-empty-state__content", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

EmptyStateContent.displayName = "EmptyStateContent"
EmptyStateContent.__ui__ = "EmptyStateContent"

export interface EmptyStateTitleProps extends HTMLUIProps<"h3"> {}

export const EmptyStateTitle = forwardRef<EmptyStateTitleProps, "h3">(
  ({ className, ...rest }, ref) => {
    const styles = useEmptyStateContext()

    const css: CSSUIObject = { ...styles.title }

    return (
      <ui.h3
        ref={ref}
        className={cx("ui-empty-state__title", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

EmptyStateTitle.displayName = "EmptyStateTitle"
EmptyStateTitle.__ui__ = "EmptyStateTitle"

export interface EmptyStateDescriptionProps extends HTMLUIProps<"p"> {}

export const EmptyStateDescription = forwardRef<
  EmptyStateDescriptionProps,
  "p"
>(({ className, ...rest }, ref) => {
  const styles = useEmptyStateContext()

  const css: CSSUIObject = { ...styles.description }

  return (
    <ui.p
      ref={ref}
      className={cx("ui-empty-state__description", className)}
      __css={css}
      {...rest}
    />
  )
})

EmptyStateDescription.displayName = "EmptyStateDescription"
EmptyStateDescription.__ui__ = "EmptyStateDescription"
