import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { ReactElement, RefObject } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import {
  cx,
  getValidChildren,
  mergeRefs,
  replaceObject,
} from "@yamada-ui/utils"
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

interface StackOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIObject["alignItems"]
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * If `true`, each stack item will show a divider.
   */
  divider?: ReactElement
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIObject["justifyContent"]
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIObject["flexWrap"]
}

export interface StackProps
  extends Omit<HTMLUIProps, "direction">,
    StackOptions {}

/**
 * `Stack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const Stack = forwardRef<StackProps, "div">(
  (
    {
      className,
      align: alignItems,
      children,
      direction: flexDirection = "column",
      divider,
      gap = "fallback(md, 1rem)",
      justify: justifyContent,
      wrap: flexWrap,
      ...rest
    },
    ref,
  ) => {
    const isColumn = (value: any) =>
      value === "column" || value === "column-reverse"

    const dividerCSS = useMemo(
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

    const cloneChildren = divider
      ? validChildren.map((child, index) => {
          const key = typeof child.key !== "undefined" ? child.key : index

          const cloneDivider = cloneElement(divider as ReactElement, {
            __css: dividerCSS,
          })

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
      align="center"
      direction="row"
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
      align="stretch"
      direction="column"
      w="100%"
      {...rest}
    />
  ),
)

interface ZStackOptions {
  /**
   * Stack in the specified direction.
   *
   * @default "bottom"
   */
  direction?:
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "right"
    | "top"
    | "top-left"
    | "top-right"
  /**
   * If `true`, calculate the `width` and `height` of the element and assign container.
   *
   * @default true
   */
  fit?: boolean
  /**
   * If `true`, reverse direction.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * If set the stack will start from the given index.
   *
   * @default 0
   */
  startIndex?: number
}

export interface ZStackProps
  extends Omit<HTMLUIProps, "direction">,
    ZStackOptions {}

/**
 * `ZStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const ZStack = forwardRef<ZStackProps, "div">(
  (
    {
      className,
      children,
      direction = "bottom",
      fit = true,
      gap = "fallback(md, 1rem)",
      reverse = false,
      startIndex = 0,
      ...rest
    },
    ref,
  ) => {
    const refMap = useRef<Map<number, RefObject<HTMLDivElement>>>(new Map())
    const [rect, setRect] = useState<{ height: number; width: number }>({
      height: 0,
      width: 0,
    })

    const boxSize: CSSUIObject = {
      minHeight: `${rect.height}px`,
      minWidth: `${rect.width}px`,
    }

    const css: CSSUIObject = {
      overflow: "hidden",
      position: "relative",
      vars: [{ name: "space", token: "spaces", value: gap }],
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
      const validChildren = getValidChildren(children) as ({
        ref: RefObject<any>
      } & ReactElement)[]

      const clonedChildren = validChildren.map((child, index) => {
        const ref = createRef<HTMLDivElement>()

        refMap.current.set(index, ref)

        const key = child.key ?? index

        const zIndex = startIndex + index
        const space = `calc($space * ${index})`

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

        let { offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth } =
          ref.current

        if (!offsetParent && process.env.NODE_ENV !== "test") continue

        if (isNegativeLeft) {
          const offsetParentWidth =
            (offsetParent as HTMLDivElement | null)?.offsetWidth ?? 0

          offsetLeft = offsetParentWidth - offsetLeft - offsetWidth
        }

        if (isNegativeTop) {
          const offsetParentHeight =
            (offsetParent as HTMLDivElement | null)?.offsetHeight ?? 0

          offsetTop = offsetParentHeight - offsetTop - offsetHeight
        }

        offsetWidth += offsetLeft
        offsetHeight += offsetTop

        if (offsetWidth > width) width = offsetWidth
        if (offsetHeight > height) height = offsetHeight
      }

      setRect({ height, width })
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
