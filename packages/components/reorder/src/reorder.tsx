import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { ui, useMultiComponentStyle, omitThemeProps } from "@yamada-ui/core"
import type { HTMLMotionProps } from "@yamada-ui/motion"
import { MotionReorder } from "@yamada-ui/motion"
import {
  createContext,
  cx,
  getValidChildren,
  handlerAll,
  useUpdateEffect,
} from "@yamada-ui/utils"
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

export type ReorderGenerateItem = ReorderItemProps

type ReorderOptions = {
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
  onChange?: (labels: (string | number)[]) => void
  /**
   * The callback invoked when the movement of reorder items is completed.
   */
  onCompleteChange?: (labels: (string | number)[]) => void
}

export type ReorderProps = Omit<HTMLUIProps<"ul">, "as" | "onChange"> &
  Omit<HTMLMotionProps<"ul">, "as" | "onChange"> &
  ThemeProps<"Reorder"> &
  ReorderOptions

const omitDuplicated = (values: (string | number)[]): (string | number)[] =>
  Array.from(new Set(values))

const pickDuplicated = (values: (string | number)[]): (string | number)[] =>
  values.filter(
    (value, index, self) =>
      self.indexOf(value) === index && index !== self.lastIndexOf(value),
  )

/**
 * `Reorder` is a component that allows you to change the order of items using drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/data-display/reorder
 */
export const Reorder = forwardRef<HTMLUListElement, ReorderProps>(
  (props, ref) => {
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
        ? validChildren.map(({ props }) => props.label)
        : items.map(({ label }) => label)

      const duplicatedValues = pickDuplicated(values)

      if (duplicatedValues.length)
        console.warn(
          `Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${duplicatedValues.join(
            `', '`,
          )}' `,
        )

      return omitDuplicated(values)
    }, [hasChildren, validChildren, items])
    const prevDefaultValues = useRef<(string | number)[]>(defaultValues)

    const [values, setValues] = useState<(string | number)[]>(defaultValues)
    const prevValues = useRef<(string | number)[]>(defaultValues)

    const onReorder = useCallback(
      (newValues: (string | number)[]) => {
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
            return validChildren.find(({ props }) => props.label === value)
          } else {
            const props = items.find(({ label }) => label === value)

            return props ? <ReorderItem key={props.label} {...props} /> : null
          }
        }),
      [values, hasChildren, validChildren, items],
    )

    const css: CSSUIObject = {
      flexDirection: orientation === "vertical" ? "column" : "row",
      gap,
      ...styles.container,
    }

    return (
      <ReorderProvider value={{ orientation, styles }}>
        <ui.ul
          ref={ref}
          as={MotionReorder.Group}
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
)

Reorder.displayName = "Reorder"
