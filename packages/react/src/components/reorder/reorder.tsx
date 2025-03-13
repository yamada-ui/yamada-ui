import type { DragControls, HTMLMotionProps } from "motion/react"
import type {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, HTMLUIProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { ReorderStyle } from "./reorder.style"
import {
  Reorder as OriginalReorder,
  useDragControls,
  useMotionValue,
} from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createSlotComponent, mergeCSS, ui } from "../../core"
import { useValue } from "../../hooks/use-value"
import {
  createContext,
  dataAttr,
  getValidChildren,
  handlerAll,
  mergeRefs,
  useUpdateEffect,
} from "../../utils"
import { GripIcon } from "../icon"
import { reorderStyle } from "./reorder.style"

export type ReorderGenerateItem<Y = string> = ReorderItemProps<Y>

type DuplicatedFunc = <Y = string>(values: Y[]) => Y[]

const omitDuplicated: DuplicatedFunc = (values) => Array.from(new Set(values))

const pickDuplicated: DuplicatedFunc = (values) =>
  values.filter(
    (value, index, self) =>
      self.indexOf(value) === index && index !== self.lastIndexOf(value),
  )

interface ReorderItemContext {
  drag: boolean
  dragControls: DragControls
  register: (node: HTMLElement | null) => void
}

export const [ReorderItemProvider, useReorderItemContext] =
  createContext<ReorderItemContext>({
    name: "ReorderContext",
    errorMessage: `useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`,
  })
export interface ReorderRootProps<Y = string>
  extends Omit<
      Merge<HTMLUIProps<"ul">, HTMLMotionProps<"ul">>,
      "children" | "onChange" | "transition"
    >,
    PropsWithChildren,
    ThemeProps<ReorderStyle> {
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

interface ReorderContext {
  orientation?: "horizontal" | "vertical"
}

export const {
  ComponentContext: ReorderContext,
  PropsContext: ReorderPropsContext,
  useComponentContext: useReorderContext,
  usePropsContext: useReorderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ReorderRootProps, ReorderStyle, ReorderContext>(
  "reorder",
  reorderStyle,
)

/**
 * `Reorder` is a component that allows you to change the order of items using drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/reorder
 */
export const ReorderRoot = withProvider<"ul", ReorderRootProps>(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>({
    children,
    gap = "{4, 1rem}",
    items = [],
    onChange,
    onCompleteChange,
    ...rest
  }: ReorderRootProps<Y>) => {
    const orientation = useValue(rest.orientation)

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
      const equal =
        JSON.stringify(prevValues.current) === JSON.stringify(values)

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
      <ReorderContext value={{ orientation }}>
        <ui.ul
          as={OriginalReorder.Group<Y>}
          axis={axis}
          values={values}
          onReorder={onReorder}
          {...rest}
          css={mergeCSS(rest.css, { gap })}
          onMouseUp={handlerAll(rest.onMouseUp, onCompleteReorder)}
          onTouchEnd={handlerAll(rest.onTouchEnd, onCompleteReorder)}
        >
          {cloneChildren}
        </ui.ul>
      </ReorderContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)() as ComponentArgs & {
  <Y = string>(
    props: RefAttributes<HTMLUListElement> & ReorderRootProps<Y>,
  ): ReactElement
}

export interface ReorderItemProps<Y = string>
  extends Omit<
      Merge<HTMLUIProps<"li">, HTMLMotionProps<"li">>,
      "children" | "ref" | "transition" | "value"
    >,
    PropsWithChildren,
    RefAttributes<HTMLLIElement> {
  /**
   * The value of the reorder item.
   */
  value: Y
  /**
   * The label of the reorder item.
   */
  label?: ReactNode
}

export const ReorderItem = withContext<"li", ReorderItemProps>(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Y extends any = string>({
    css: cssProp,
    children,
    label,
    value,
    ...rest
  }: ReorderItemProps<Y>) => {
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

    const css = mergeCSS(cssProp, {
      ...(!hasTrigger
        ? { cursor: "grab", _selected: { cursor: "grabbing" } }
        : { userSelect: "none" }),
    })

    return (
      <ReorderItemProvider value={{ drag, dragControls, register }}>
        <ui.li
          as={OriginalReorder.Item}
          css={css}
          value={value}
          {...rest}
          style={{ ...rest.style, x, y }}
          data-selected={dataAttr(drag)}
          dragControls={dragControls}
          dragListener={!hasTrigger}
        >
          {children ?? label}
        </ui.li>
      </ReorderItemProvider>
    )
  },
  "item",
)() as ComponentArgs & {
  <Y = string>(
    props: RefAttributes<HTMLLIElement> & ReorderItemProps<Y>,
  ): ReactElement
}

export interface ReorderTriggerProps extends HTMLUIProps {}

export const ReorderTrigger = withContext<"div", ReorderTriggerProps>(
  "div",
  "trigger",
)(undefined, ({ ref, children = <GripIcon />, ...rest }) => {
  const { drag, dragControls, register } = useReorderItemContext()
  return {
    ref: mergeRefs(register, ref),
    children,
    ...rest,
    "data-selected": dataAttr(drag),
    onPointerDown: handlerAll(rest.onPointerDown, (ev) =>
      dragControls.start(ev),
    ),
  }
})
