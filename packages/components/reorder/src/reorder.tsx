import type {
  CSSUIObject,
  ComponentArgs,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { ui, useMultiComponentStyle, omitThemeProps } from "@yamada-ui/core"
import type { HTMLMotionProps } from "@yamada-ui/motion"
import { MotionReorder } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import {
  createContext,
  cx,
  getValidChildren,
  handlerAll,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type { ForwardedRef, PropsWithChildren } from "react"
import { forwardRef, useCallback, useMemo, useRef, useState } from "react"
import { ReorderItem, type ReorderItemProps } from "./reorder-item"

type ReorderContext = {
  orientation: "vertical" | "horizontal"
  styles: Record<string, CSSUIObject>
}

export const [ReorderProvider, useReorderContext] =
  createContext<ReorderContext>({
    name: "ReorderContext",
    errorMessage: `useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`,
  })

export type ReorderGenerateItem<Y extends any = string> = ReorderItemProps<Y>

type ReorderOptions<Y extends any = string> = {
  /**
   * The orientation of the reorder.
   *
   * @default 'vertical'
   */
  orientation?: "vertical" | "horizontal"
  /**
   * If provided, generate reorder items based on items.
   *
   */
  items?: ReorderGenerateItem[]
  /**
   * The callback invoked when reorder items are moved.
   */
  onChange?: (values: Y[]) => void
  /**
   * The callback invoked when the movement of reorder items is completed.
   */
  onCompleteChange?: (values: Y[]) => void
}

export type ReorderProps<Y extends any = string> = Omit<
  Merge<HTMLUIProps<"ul">, HTMLMotionProps<"ul">>,
  "onChange" | "transition" | "children"
> &
  PropsWithChildren &
  ThemeProps<"Reorder"> &
  ReorderOptions<Y>

const omitDuplicated = <Y extends any = string>(values: Y[]): Y[] =>
  Array.from(new Set(values))

const pickDuplicated = <Y extends any = string>(values: Y[]): Y[] =>
  values.filter(
    (value, index, self) =>
      self.indexOf(value) === index && index !== self.lastIndexOf(value),
  )

/**
 * `Reorder` is a component that allows you to change the order of items using drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/data-display/reorder
 */
export const Reorder = forwardRef(
  <Y extends any = string>(
    props: ReorderProps<Y>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const [styles, mergedProps] = useMultiComponentStyle("Reorder", props)
    const {
      className,
      orientation = "vertical",
      gap = "fallback(4, 1rem)",
      items = [],
      onChange,
      onCompleteChange,
      children,
      ...rest
    } = omitThemeProps(mergedProps)

    const axis = orientation === "vertical" ? "y" : "x"

    const validChildren = getValidChildren(children)
    const hasChildren = !!validChildren.length

    const defaultValues = useMemo(() => {
      const values = hasChildren
        ? validChildren.map(({ props }) => props.value)
        : items.map(({ value }) => value)

      const duplicatedValues = pickDuplicated(values)

      if (duplicatedValues.length)
        console.warn(
          `Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${duplicatedValues.join(
            `', '`,
          )}' `,
        )

      return omitDuplicated(values)
    }, [hasChildren, validChildren, items])
    const prevDefaultValues = useRef<Y[]>(defaultValues)

    const [values, setValues] = useState<Y[]>(defaultValues)
    const prevValues = useRef<Y[]>(defaultValues)

    const onReorder = useCallback(
      (newValues: Y[]) => {
        setValues(newValues)

        onChange?.(newValues)
      },
      [onChange],
    )

    const onCompleteReorder = useCallback(() => {
      const isEqual =
        JSON.stringify(prevValues.current) === JSON.stringify(values)

      if (isEqual) return

      prevValues.current = values

      onCompleteChange?.(values)
    }, [onCompleteChange, values])

    useUpdateEffect(() => {
      const isEqual =
        JSON.stringify(defaultValues) ===
        JSON.stringify(prevDefaultValues.current)

      if (isEqual) return

      prevValues.current = defaultValues
      prevDefaultValues.current = defaultValues

      setValues(defaultValues)
    }, [defaultValues])

    const cloneChildren = useMemo(
      () =>
        values.map((value) => {
          if (hasChildren) {
            return validChildren.find(({ props }) => props.value === value)
          } else {
            const props = items.find((item) => item.value === value)

            return props ? <ReorderItem key={props.value} {...props} /> : null
          }
        }),
      [values, hasChildren, validChildren, items],
    )

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      gap,
      ...styles.container,
    }

    return (
      <ReorderProvider value={{ orientation, styles }}>
        <ui.ul
          ref={ref}
          as={MotionReorder.Group<Y>}
          className={cx("ui-reorder", className)}
          axis={axis}
          values={values}
          onReorder={onReorder}
          __css={css}
          {...rest}
          onMouseUp={handlerAll(rest.onMouseUp, onCompleteReorder)}
          onTouchEnd={handlerAll(rest.onTouchEnd, onCompleteReorder)}
        >
          {cloneChildren}
        </ui.ul>
      </ReorderProvider>
    )
  },
) as {
  <Y extends any = string>(
    props: ReorderProps<Y> & { ref?: ForwardedRef<HTMLUListElement> },
  ): JSX.Element
} & ComponentArgs

Reorder.displayName = "Reorder"
