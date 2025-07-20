"use client"

import type { RefObject } from "react"
import type {
  CSSObject,
  Direction,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { ZStackStyle } from "./z-stack.style"
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
import {
  createComponent,
  mergeCSS,
  styled,
  useInjectVarsIntoCss,
  useInjectVarsIntoProps,
} from "../../core"
import { getValidChildren, mergeRefs } from "../../utils"
import { zStackStyle } from "./z-stack.style"

export interface ZStackProps
  extends Omit<HTMLStyledProps, "direction">,
    ThemeProps<ZStackStyle> {
  /**
   * Stack in the specified direction.
   *
   * @default "end"
   */
  direction?: Direction
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

const {
  PropsContext: ZStackPropsContext,
  usePropsContext: useZStackPropsContext,
  withContext,
} = createComponent<ZStackProps, ZStackStyle>("stack--depth", zStackStyle)

export { useZStackPropsContext, ZStackPropsContext }

/**
 * `ZStack` is a component that groups elements and provides space between child elements.
 *
 * @see https://yamada-ui.com/components/stack
 */
export const ZStack = withContext(
  ({
    css,
    children,
    direction = "bottom",
    fit = true,
    reverse = false,
    startIndex = 0,
    ...rest
  }) => {
    if (direction === "start-center") direction = "start"
    if (direction === "end-center") direction = "end"

    const refMap = useRef<Map<number, RefObject<HTMLDivElement | null>>>(
      new Map(),
    )
    const [rect, setRect] = useState<{ height: number; width: number }>({
      height: 0,
      width: 0,
    })

    const vertical = useCallback(
      (space: string) => {
        if (direction.startsWith("start")) {
          return { [!reverse ? "bottom" : "top"]: space }
        } else if (direction.startsWith("end")) {
          return { [!reverse ? "top" : "bottom"]: space }
        } else {
          return { [!reverse ? "top" : "bottom"]: 0 }
        }
      },
      [direction, reverse],
    )

    const horizontal = useCallback(
      (space: string) => {
        if (direction.endsWith("-start")) {
          return { [!reverse ? "right" : "left"]: space }
        } else if (direction.endsWith("-end")) {
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
        const space = `calc({space} * ${index})`

        const css: CSSObject = {
          position: "absolute",
          zIndex,
          ...vertical(space),
          ...horizontal(space),
        }

        const props = {
          ...child.props,
          ref: mergeRefs(child.props.ref, ref),
          css: mergeCSS(child.props.css, css),
        }

        const clonedChild = cloneElement(child, props)

        return <Fragment key={key}>{clonedChild}</Fragment>
      })

      return clonedChildren
    }, [children, startIndex, vertical, horizontal])

    useEffect(() => {
      if (!fit) return

      let negativeLeft = direction.endsWith("-start")
      let negativeTop = direction.startsWith("start")
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
      <styled.div
        css={css}
        minHeight={fit ? `${rect.height}px` : undefined}
        minWidth={fit ? `${rect.width}px` : undefined}
        {...rest}
      >
        {cloneChildren}
      </styled.div>
    )
  },
)(undefined, (props) => {
  const css = useInjectVarsIntoCss(props.css, { gap: "space" })
  const rest = useInjectVarsIntoProps(props, { gap: "space" })

  return { ...rest, css }
})
