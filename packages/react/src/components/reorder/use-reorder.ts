"use client"

import type { HTMLMotionProps, Reorder } from "motion/react"
import type { PropsWithChildren, ReactElement, ReactNode } from "react"
import type { Orientation, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useDragControls, useMotionValue } from "motion/react"
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  createContext,
  dataAttr,
  handlerAll,
  isArray,
  isObject,
  mergeRefs,
  useUpdateEffect,
  useValidChildren,
} from "../../utils"

const getAlternativeValue = ({ children, label }: Dict = {}) =>
  serializeValue(children ?? label)

const serializeValue = (value: any) =>
  isObject(value) || isArray(value) ? JSON.stringify(value) : value

type ReorderGroupProps<Y = string> = Merge<
  HTMLMotionProps<"ul">,
  Pick<Parameters<typeof Reorder.Group<Y>>[0], "axis" | "onReorder" | "values">
>
type ReorderItemProps<Y = string> = Merge<
  HTMLMotionProps<"li">,
  Partial<Pick<Parameters<typeof Reorder.Item<Y>>[0], "layout" | "value">>
>

interface ReorderContext extends Pick<UseReorderProps, "orientation"> {}

const [ReorderContext, useReorderContext] = createContext<ReorderContext>({
  name: "ReorderContext",
})

export { ReorderContext, useReorderContext }

interface ReorderItemContext {
  getTriggerProps: PropGetter
}

const [ReorderItemContext, useReorderItemContext] =
  createContext<ReorderItemContext>({
    name: "ReorderItemContext",
  })

export { ReorderItemContext, useReorderItemContext }

export interface UseReorderProps<Y = string>
  extends
    Partial<Omit<ReorderGroupProps<Y>, "children" | "onChange" | "values">>,
    PropsWithChildren {
  /**
   * The component to be used for the item.
   */
  item?: ReactElement<any>
  /**
   * If provided, generate reorder items based on items.
   *
   */
  items?: UseReorderItemProps<Y>[]
  /**
   * The orientation of the reorder.
   *
   * @default 'vertical'
   */
  orientation?: Orientation
  /**
   * The callback invoked when reorder items are moved.
   */
  onChange?: (values: Y[]) => void
  /**
   * The callback invoked when the movement of reorder items is completed.
   */
  onCompleteChange?: (values: Y[]) => void
}

export const useReorder = <Y = string>({
  ref,
  children,
  item,
  items = [],
  orientation = "vertical",
  onChange,
  onCompleteChange,
  ...rest
}: UseReorderProps<Y> = {}) => {
  const axis = orientation === "vertical" ? "y" : "x"
  const validChildren = useValidChildren(children)
  const hasChildren = !!validChildren.length
  const defaultValues = useMemo(() => {
    const values = hasChildren
      ? validChildren.map(
          ({ props }) => props.value ?? getAlternativeValue(props),
        )
      : items.map((props) => props.value ?? getAlternativeValue(props))

    const duplicatedValues = values.filter(
      (value, index, self) =>
        self.indexOf(value) === index && index !== self.lastIndexOf(value),
    )

    if (duplicatedValues.length)
      console.warn(
        `Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${duplicatedValues.join(
          `', '`,
        )}' `,
      )

    return Array.from(new Set(values))
  }, [hasChildren, validChildren, items])
  const childMap = useMemo(() => {
    return Object.fromEntries(
      validChildren.map((child) => [
        serializeValue(child.props.value) ??
          serializeValue(getAlternativeValue(child.props)),
        child,
      ]),
    )
  }, [validChildren])
  const itemMap = useMemo(() => {
    return Object.fromEntries(
      items.map((props) => [
        serializeValue(props.value) ??
          serializeValue(getAlternativeValue(props)),
        props,
      ]),
    )
  }, [items])
  const prevDefaultValues = useRef<Y[]>(defaultValues)
  const [values, setValues] = useState<Y[]>(defaultValues)
  const prevValues = useRef<Y[]>(defaultValues)
  const cloneChildren = useMemo(
    () =>
      values.map((value) => {
        if (hasChildren) {
          return childMap[serializeValue(value)]
        } else {
          const props = itemMap[serializeValue(value)]

          return props && item
            ? cloneElement(item, { key: serializeValue(props.value), ...props })
            : null
        }
      }),
    [values, hasChildren, childMap, itemMap, item],
  )

  const onReorder = useCallback(
    (newValues: Y[]) => {
      setValues(newValues)

      onChange?.(newValues)
    },
    [onChange],
  )

  const onCompleteReorder = useCallback(() => {
    const equal = JSON.stringify(prevValues.current) === JSON.stringify(values)

    if (equal) return

    prevValues.current = values

    onCompleteChange?.(values)
  }, [onCompleteChange, values])

  useUpdateEffect(() => {
    const equal =
      JSON.stringify(defaultValues) ===
      JSON.stringify(prevDefaultValues.current)

    if (equal) return

    prevValues.current = defaultValues
    prevDefaultValues.current = defaultValues

    setValues(defaultValues)
  }, [defaultValues])

  const getRootProps: PropGetter<
    Partial<Omit<ReorderGroupProps<Y>, "values">>,
    undefined,
    ReorderGroupProps<Y>
  > = useCallback(
    (props = {}) => ({
      axis,
      values,
      ...rest,
      ...props,
      ref: mergeRefs(props.ref, ref),
      onMouseUp: handlerAll(props.onMouseUp, rest.onMouseUp, onCompleteReorder),
      onReorder: handlerAll(props.onReorder, rest.onReorder, onReorder),
      onTouchEnd: handlerAll(
        props.onTouchEnd,
        rest.onTouchEnd,
        onCompleteReorder,
      ),
    }),
    [rest, ref, onCompleteReorder, onReorder, axis, values],
  )

  return { children: cloneChildren, orientation, values, getRootProps }
}

export type UseReorderReturn<Y = string> = ReturnType<typeof useReorder<Y>>

export interface UseReorderItemProps<Y = string> extends ReorderItemProps<Y> {
  /**
   * The label of the reorder item.
   */
  label?: ReactNode
  /**
   * The value of the reorder item.
   */
  value?: Y
}

export const useReorderItem = <Y = string>({
  ref,
  label,
  value,
  ...rest
}: UseReorderItemProps<Y>) => {
  const { orientation } = useReorderContext()
  const dragControls = useDragControls()
  const [hasTrigger, setHasTrigger] = useState<boolean>(false)
  const [drag, setDrag] = useState<boolean>(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const register = useCallback(
    (node: HTMLElement | null) => setHasTrigger(!!node),
    [],
  )

  useEffect(() => {
    const unsubscribeX = x.on("change", (x) => {
      if (orientation === "horizontal") setDrag(x !== 0)
    })
    const unsubscribeY = y.on("change", (y) => {
      if (orientation === "vertical") setDrag(y !== 0)
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [orientation, x, y])

  const getItemProps: PropGetter<
    Omit<HTMLMotionProps<"li">, "layout" | "value"> &
      Pick<ReorderItemProps<Y>, "layout">,
    undefined,
    ReorderItemProps<Y>
  > = useCallback(
    (props = {}) => {
      const children = props.children ?? rest.children ?? label

      return {
        "data-has-trigger": dataAttr(hasTrigger),
        "data-selected": dataAttr(drag),
        dragControls,
        dragListener: !hasTrigger,
        value: value ?? getAlternativeValue({ children }),
        ...props,
        ...rest,
        ref: mergeRefs(props.ref, ref),
        style: { x, y, ...props.style, ...rest.style },
        children,
      }
    },
    [ref, rest, dragControls, hasTrigger, value, x, y, drag, label],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      ref: mergeRefs(register, props.ref),
      "data-selected": dataAttr(drag),
      onPointerDown: handlerAll(props.onPointerDown, (ev) =>
        dragControls.start(ev),
      ),
    }),
    [drag, dragControls, register],
  )

  return { getItemProps, getTriggerProps }
}

export type UseReorderItemReturn<Y = string> = ReturnType<
  typeof useReorderItem<Y>
>
