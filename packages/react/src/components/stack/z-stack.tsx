import type { RefObject } from "react"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
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
import { ui } from "../../core"
import { cx, getValidChildren, mergeRefs } from "../../utils"

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
export const ZStack: FC<ZStackProps> = ({
  className,
  children,
  direction = "bottom",
  fit = true,
  gap = "fallback(md, 1rem)",
  reverse = false,
  startIndex = 0,
  ...rest
}) => {
  const refMap = useRef<Map<number, RefObject<HTMLDivElement | null>>>(
    new Map(),
  )
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
    const validChildren = getValidChildren(children)

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
        ref: mergeRefs(child.props.ref, ref),
        __css: css,
      }

      const clonedChild = cloneElement(child, props)

      return <Fragment key={key}>{clonedChild}</Fragment>
    })

    return clonedChildren
  }, [children, startIndex, vertical, horizontal])

  useEffect(() => {
    if (!fit) return

    let negativeLeft = direction.includes("left")
    let negativeTop = direction.includes("top")
    let width = 0
    let height = 0

    if (reverse) {
      negativeLeft = !negativeLeft
      negativeTop = !negativeTop
    }

    for (const ref of refMap.current.values()) {
      if (!ref.current) continue

      let { offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth } =
        ref.current

      if (!offsetParent && process.env.NODE_ENV !== "test") continue

      if (negativeLeft) {
        const offsetParentWidth =
          (offsetParent as HTMLDivElement | null)?.offsetWidth ?? 0

        offsetLeft = offsetParentWidth - offsetLeft - offsetWidth
      }

      if (negativeTop) {
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
    <ui.div className={cx("ui-stack--depth", className)} __css={css} {...rest}>
      {cloneChildren}
    </ui.div>
  )
}

ZStack.__ui__ = "ZStack"
