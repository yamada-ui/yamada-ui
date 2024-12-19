import type { ReactElement } from "react"
import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import { cloneElement, Fragment, useMemo } from "react"
import { ui } from "../../core"
import { cx, getValidChildren, replaceObject } from "../../utils"

interface StackOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps["alignItems"]
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * If `true`, each stack item will show a divider.
   *
   * @deprecated Use `separator` instead.
   */
  divider?: ReactElement
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps["justifyContent"]
  /**
   * If `true`, each stack item will show a separator.
   */
  separator?: ReactElement
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIProps["flexWrap"]
}

export interface StackProps
  extends Omit<HTMLUIProps, "direction">,
    StackOptions {}

/**
 * `Stack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const Stack: FC<StackProps> = ({
  className,
  align: alignItems,
  children,
  direction: flexDirection = "column",
  divider,
  gap = "fallback(md, 1rem)",
  justify: justifyContent,
  separator = divider,
  wrap: flexWrap,
  ...rest
}) => {
  const isColumn = (value: any) =>
    value === "column" || value === "column-reverse"

  const separatorCSS = useMemo(
    () => ({
      borderBottomWidth: replaceObject(flexDirection, (value) =>
        isColumn(value) ? "1px" : 0,
      ),
      borderLeftWidth: replaceObject(flexDirection, (value) =>
        isColumn(value) ? 0 : "1px",
      ),
      h: replaceObject(flexDirection, (value) =>
        isColumn(value) ? "fit-content" : "100%",
      ),
      w: replaceObject(flexDirection, (value) =>
        isColumn(value) ? "100%" : "fit-content",
      ),
    }),
    [flexDirection],
  )

  const validChildren = getValidChildren(children)

  const cloneChildren = separator
    ? validChildren.map((child, index) => {
        const key = typeof child.key !== "undefined" ? child.key : index

        const cloneSeparator = cloneElement<any>(separator, {
          __css: separatorCSS,
        })

        return (
          <Fragment key={key}>
            {!!index ? cloneSeparator : null}
            {child}
          </Fragment>
        )
      })
    : validChildren

  const css: CSSUIObject = useMemo(
    () => ({
      alignItems,
      display: "flex",
      flexDirection,
      flexWrap,
      gap,
      justifyContent,
    }),
    [alignItems, flexDirection, flexWrap, gap, justifyContent],
  )

  return (
    <ui.div className={cx("ui-stack", className)} __css={css} {...rest}>
      {cloneChildren}
    </ui.div>
  )
}

Stack.__ui__ = "Stack"
