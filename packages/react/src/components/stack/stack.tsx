import type { ReactElement } from "react"
import type { CSSProps, HTMLUIProps } from "../../core"
import type { StackStyle } from "./stack.style"
import { cloneElement, Fragment, useMemo } from "react"
import { createComponent, ui } from "../../core"
import { getValidChildren, replaceObject } from "../../utils"
import { stackStyle } from "./stack.style"

interface StackOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSProps["alignItems"]
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSProps["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSProps["justifyContent"]
  /**
   * If `true`, each stack item will show a separator.
   */
  separator?: ReactElement
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSProps["flexWrap"]
}

export interface StackProps
  extends Omit<HTMLUIProps, "direction">,
    StackOptions {}

export const {
  PropsContext: StackPropsContext,
  usePropsContext: useStackPropsContext,
  withContext,
} = createComponent<StackProps, StackStyle>("stack", stackStyle)

/**
 * `Stack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const Stack = withContext(
  ({
    align: alignItems,
    children,
    direction: flexDirection = "column",
    justify: justifyContent,
    separator,
    wrap: flexWrap,
    ...rest
  }) => {
    const isColumn = (value: any) =>
      value === "column" || value === "column-reverse"

    const validChildren = getValidChildren(children)

    const cloneChildren = useMemo(
      () =>
        separator
          ? validChildren.map((child, index) => {
              const key = typeof child.key !== "undefined" ? child.key : index

              const cloneSeparator = cloneElement<any>(separator, {
                borderWidth: replaceObject(flexDirection, (value) =>
                  isColumn(value) ? "0 0 1px 0" : "0 0 0 1px",
                ),
                h: replaceObject(flexDirection, (value) =>
                  isColumn(value) ? "fit-content" : "100%",
                ),
                w: replaceObject(flexDirection, (value) =>
                  isColumn(value) ? "100%" : "fit-content",
                ),
              })

              return (
                <Fragment key={key}>
                  {!!index ? cloneSeparator : null}
                  {child}
                </Fragment>
              )
            })
          : validChildren,
      [separator, flexDirection, validChildren],
    )

    return (
      <ui.div
        alignItems={alignItems}
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)()
