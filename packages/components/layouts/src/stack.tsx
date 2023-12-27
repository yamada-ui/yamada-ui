import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import {
  getValidChildren,
  cx,
  replaceObject,
  mergeRefs,
} from "@yamada-ui/utils"
import type { ReactElement, RefObject } from "react"
import {
  cloneElement,
  createRef,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

type StackOptions = {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIObject["justifyContent"]
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIObject["alignItems"]
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIObject["flexWrap"]
  /**
   * If `true`, each stack item will show a divider.
   */
  divider?: ReactElement
}

export type StackProps = Omit<HTMLUIProps<"div">, "direction"> & StackOptions

/**
 * `Stack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const Stack = forwardRef<StackProps, "div">(
  (
    {
      direction: flexDirection = "column",
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      gap = "md",
      divider,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isColumn = (value: any) =>
      value === "column" || value === "column-reverse"

    const dividerCSS = useMemo(
      () => ({
        w: replaceObject(flexDirection, (value) =>
          isColumn(value) ? "100%" : "fix-content",
        ),
        h: replaceObject(flexDirection, (value) =>
          isColumn(value) ? "fix-content" : "100%",
        ),
        borderLeftWidth: replaceObject(flexDirection, (value) =>
          isColumn(value) ? 0 : "1px",
        ),
        borderBottomWidth: replaceObject(flexDirection, (value) =>
          isColumn(value) ? "1px" : 0,
        ),
      }),
      [flexDirection],
    )

    const validChildren = getValidChildren(children)

    const cloneChildren = divider
      ? validChildren.map((child, index) => {
          const key = typeof child.key !== "undefined" ? child.key : index

          const cloneDivider = cloneElement(
            divider as React.ReactElement<any>,
            {
              __css: dividerCSS,
            },
          )

          return (
            <Fragment key={key}>
              {!!index ? cloneDivider : null}
              {child}
            </Fragment>
          )
        })
      : validChildren

    const css: CSSUIObject = useMemo(
      () => ({
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap,
      }),
      [alignItems, flexDirection, flexWrap, gap, justifyContent],
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-stack", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)

/**
 * `HStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const HStack = forwardRef<StackProps, "div">(
  ({ className, ...rest }, ref) => (
    <Stack
      ref={ref}
      className={cx("ui-stack--horizontal", className)}
      direction="row"
      align="center"
      {...rest}
    />
  ),
)

/**
 * `VStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const VStack = forwardRef<StackProps, "div">(
  ({ className, ...rest }, ref) => (
    <Stack
      ref={ref}
      className={cx("ui-stack--vertical", className)}
      direction="column"
      align="stretch"
      w="100%"
      {...rest}
    />
  ),
)

type ZStackOptions = {
  /**
   * If set the stack will start from the given index.
   *
   * @default 0
   */
  startIndex?: number
  /**
   * Stack in the specified direction.
   *
   * @default "bottom"
   */
  direction?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
  /**
   * If `true`, reverse direction.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * If `true`, calculate the `width` and `height` of the element and assign container.
   *
   * @default true
   */
  fit?: boolean
}

export type ZStackProps = Omit<HTMLUIProps<"div">, "direction"> & ZStackOptions

/**
 * `ZStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const ZStack = forwardRef<ZStackProps, "div">(
  (
    {
      className,
      direction = "bottom",
      startIndex = 0,
      gap = "md",
      reverse = false,
      fit = true,
      children,
      ...rest
    },
    ref,
  ) => {
    const refMap = useRef<Map<number, RefObject<HTMLDivElement>>>(new Map())
    const [rect, setRect] = useState<{ width: number; height: number }>({
      width: 0,
      height: 0,
    })

    const boxSize: CSSUIObject = {
      minWidth: `${rect.width}px`,
      minHeight: `${rect.height}px`,
    }

    const css: CSSUIObject = {
      position: "relative",
      overflow: "hidden",
      var: [{ name: "space", token: "spaces", value: gap }],
      ...(fit ? boxSize : {}),
    }

    const vertical = useCallback(
      (space: string) => {
        if (direction.includes("top")) {
          return { [!reverse ? "bottom" : "top"]: space }
        } else if (direction.includes("bottom")) {
          return { [!reverse ? "top" : "bottom"]: space }
        } else {
          return { [!reverse ? "top" : "bottom"]: 0 }
        }
      },
      [direction, reverse],
    )

    const horizontal = useCallback(
      (space: string) => {
        if (direction.includes("left")) {
          return { [!reverse ? "right" : "left"]: space }
        } else if (direction.includes("right")) {
          return { [!reverse ? "left" : "right"]: space }
        } else {
          return { [!reverse ? "left" : "right"]: 0 }
        }
      },
      [direction, reverse],
    )

    const cloneChildren = useMemo(() => {
      const validChildren = getValidChildren(children) as (ReactElement & {
        ref: RefObject<any>
      })[]

      const clonedChildren = validChildren.map((child, index) => {
        const ref = createRef<HTMLDivElement>()

        refMap.current.set(index, ref)

        const key = child.key ?? index

        const zIndex = startIndex + index
        const space = `calc(var(--ui-space) * ${index})`

        let css: CSSUIObject = {}

        css = {
          ...css,
          position: "absolute",
          zIndex,
        }

        css = { ...css, ...vertical(space) }
        css = { ...css, ...horizontal(space) }

        const props = {
          ...child.props,
          ref: mergeRefs(child.ref, ref),
          __css: css,
        }

        const clonedChild = cloneElement(child, props)

        return <Fragment key={key}>{clonedChild}</Fragment>
      })

      return clonedChildren
    }, [children, startIndex, vertical, horizontal])

    useEffect(() => {
      if (!fit) return

      let isNegativeLeft = direction.includes("left")
      let isNegativeTop = direction.includes("top")
      let width = 0
      let height = 0

      if (reverse) {
        isNegativeLeft = !isNegativeLeft
        isNegativeTop = !isNegativeTop
      }

      for (const ref of refMap.current.values()) {
        if (!ref.current) continue

        let { offsetParent, offsetWidth, offsetHeight, offsetTop, offsetLeft } =
          ref.current

        if (isNegativeLeft) {
          offsetLeft =
            (offsetParent as HTMLDivElement).offsetWidth -
            offsetLeft -
            offsetWidth
        }

        if (isNegativeTop) {
          offsetTop =
            (offsetParent as HTMLDivElement).offsetHeight -
            offsetTop -
            offsetHeight
        }

        offsetWidth += offsetLeft
        offsetHeight += offsetTop

        if (offsetWidth > width) width = offsetWidth
        if (offsetHeight > height) height = offsetHeight
      }

      setRect({ width, height })
    }, [cloneChildren, direction, reverse, fit])

    return (
      <ui.div
        ref={ref}
        className={cx("ui-stack--depth", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)
