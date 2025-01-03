import type { HTMLMotionProps } from "motion/react"
import type {
  ForwardedRef,
  PropsWithChildren,
  ReactElement,
  RefAttributes,
} from "react"
import type {
  ComponentArgs,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { ReorderItemProps } from "./reorder-item"
import { Reorder as OriginalReorder } from "motion/react"
import { forwardRef, useCallback, useMemo, useRef, useState } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx, getValidChildren, handlerAll, useUpdateEffect } from "../../utils"
import { ReorderProvider } from "./reorder-context"
import { ReorderItem } from "./reorder-item"

export type ReorderGenerateItem<Y = string> = ReorderItemProps<Y>

type DuplicatedFunc = <Y = string>(values: Y[]) => Y[]

const omitDuplicated: DuplicatedFunc = (values) => Array.from(new Set(values))

const pickDuplicated: DuplicatedFunc = (values) =>
  values.filter(
    (value, index, self) =>
      self.indexOf(value) === index && index !== self.lastIndexOf(value),
  )

interface ReorderOptions<Y = string> {
  /**
   * If provided, generate reorder items based on items.
   *
   */
  items?: ReorderGenerateItem[]
  /**
   * The orientation of the reorder.
   *
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * The callback invoked when reorder items are moved.
   */
  onChange?: (values: Y[]) => void
  /**
   * The callback invoked when the movement of reorder items is completed.
   */
  onCompleteChange?: (values: Y[]) => void
}

export interface ReorderProps<Y = string>
  extends Omit<
      Merge<HTMLUIProps<"ul">, HTMLMotionProps<"ul">>,
      "children" | "onChange" | "transition"
    >,
    PropsWithChildren,
    ThemeProps<"Reorder">,
    ReorderOptions<Y> {}

/**
 * `Reorder` is a component that allows you to change the order of items using drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/data-display/reorder
 */
export const Reorder = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>(
    props: ReorderProps<Y>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const [styles, mergedProps] = useComponentMultiStyle("Reorder", props)
    const {
      className,
      children,
      gap = "fallback(4, 1rem)",
      items = [],
      orientation = "vertical",
      onChange,
      onCompleteChange,
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

    return (
      <ReorderProvider value={{ orientation, styles }}>
        <ui.ul
          ref={ref}
          as={OriginalReorder.Group<Y>}
          className={cx("ui-reorder", className)}
          axis={axis}
          values={values}
          onReorder={onReorder}
          __css={{
            flexDirection: orientation === "vertical" ? "column" : "row",
            gap,
            ...styles.container,
          }}
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
  <Y = string>(
    props: RefAttributes<HTMLUListElement> & ReorderProps<Y>,
  ): ReactElement
} & ComponentArgs

Reorder.displayName = "Reorder"
Reorder.__ui__ = "Reorder"
