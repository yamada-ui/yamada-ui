import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import type { PropGetter } from "@yamada-ui/utils"
import { createContext } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import { useCallback, useEffect, useId } from "react"
import {
  getPanelElement,
  getPanelGroupElement,
  getResizeHandleElement,
} from "react-resizable-panels"
import type {
  PanelResizeHandleProps,
  PanelGroupProps,
  PanelProps,
  PanelGroupOnLayout,
  PanelGroupStorage,
  PanelOnCollapse,
  PanelOnExpand,
  PanelOnResize,
} from "react-resizable-panels"

type GroupPropGetter = (props?: Partial<PanelGroupProps>) => PanelGroupProps
type ItemPropGetter = (props?: PanelProps) => PanelProps
type TriggerPropGetter = (
  props?: PanelResizeHandleProps,
) => PanelResizeHandleProps

type As = { as?: keyof HTMLElementTagNameMap }

type ResizableGroupProps = Omit<
  PanelGroupProps,
  "id" | "tagName" | "children"
> &
  As

type ResizableItemProps = Omit<PanelProps, "id" | "tagName" | "children"> & As

type ResizableTriggerProps = Omit<
  PanelResizeHandleProps,
  "id" | "tagName" | "children"
> &
  As

type ResizableContext = { styles: Record<string, CSSUIObject> }

export const [ResizableProvider, useResizableContext] =
  createContext<ResizableContext>({
    name: "ResizableContext",
    errorMessage: `useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`,
  })

export type UseResizableProps = {
  /**
   *
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   *
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical"
  /**
   *
   */
  autoSaveId?: string
  /**
   *
   */
  keyboardResizeBy?: number
  /**
   *
   */
  onLayout?: PanelGroupOnLayout
  /**
   *
   */
  storage?: PanelGroupStorage
  /**
   *
   */
  groupProps?: ResizableGroupProps
}

export const useResizable = ({
  direction = "horizontal",
  autoSaveId,
  keyboardResizeBy,
  onLayout,
  storage,
  ref,
  groupProps,
  ...rest
}: UseResizableProps) => {
  const id = useId()

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({ ...props, ref, ...rest }),
    [rest],
  )

  const getGroupProps: GroupPropGetter = useCallback(
    (props = {}) => {
      const { as, ...rest } = groupProps ?? {}

      return {
        ...props,
        id,
        direction,
        tagName: as,
        autoSaveId,
        keyboardResizeBy,
        onLayout,
        storage,
        ...rest,
      }
    },
    [
      id,
      direction,
      groupProps,
      autoSaveId,
      keyboardResizeBy,
      onLayout,
      storage,
    ],
  )

  useEffect(() => {
    const el = getPanelGroupElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    getContainerProps,
    getGroupProps,
  }
}

export type UseResizableReturn = ReturnType<typeof useResizable>

type UseResizableItemOptions = {
  /**
   *
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   *
   */
  collapsedSize?: number | undefined
  /**
   *
   */
  collapsible?: boolean | undefined
  /**
   *
   */
  defaultSize?: number | undefined
  /**
   *
   */
  maxSize?: number | undefined
  /**
   *
   */
  minSize?: number | undefined
  /**
   *
   */
  onCollapse?: PanelOnCollapse
  /**
   *
   */
  onExpand?: PanelOnExpand
  /**
   *
   */
  onResize?: PanelOnResize
  /**
   *
   */
  order?: number
  /**
   *
   */
  itemProps?: ResizableItemProps
}

export type UseResizableItemProps = HTMLUIProps<"div"> & UseResizableItemOptions

export const useResizableItem = ({
  ref,
  collapsedSize,
  collapsible,
  defaultSize,
  maxSize,
  minSize,
  onCollapse,
  onExpand,
  onResize,
  order,
  itemProps,
  ...innerProps
}: UseResizableItemProps) => {
  const id = useId()

  const getContainerProps: ItemPropGetter = useCallback(
    (props = {}) => {
      const { as, ...rest } = itemProps ?? {}

      return {
        ...props,
        tagName: as,
        collapsedSize,
        collapsible,
        defaultSize,
        maxSize,
        minSize,
        onCollapse,
        onExpand,
        onResize,
        order,
        ...rest,
      }
    },
    [
      itemProps,
      collapsedSize,
      collapsible,
      defaultSize,
      maxSize,
      minSize,
      onCollapse,
      onExpand,
      onResize,
      order,
    ],
  )

  const getItemProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({ ...props, ref, ...innerProps }),
    [innerProps],
  )

  useEffect(() => {
    const el = getPanelElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    getContainerProps,
    getItemProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

type UseResizableTriggerOptions = {
  /**
   *
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   *
   * @default false
   */
  isDisabled?: boolean
}

export type UseResizableTriggerProps = HTMLUIProps<"div"> &
  ResizableTriggerProps &
  UseResizableTriggerOptions

export const useResizableTrigger = ({
  ref,
  as,
  disabled,
  isDisabled,
  ...rest
}: UseResizableTriggerProps) => {
  const id = useId()
  const trulyDisabled = disabled || isDisabled

  const getTriggerProps: TriggerPropGetter = useCallback(
    (props = {}) => ({
      ...props,
      disabled: trulyDisabled,
      ...rest,
      tagName: as,
    }),
    [rest, trulyDisabled, as],
  )

  useEffect(() => {
    const el = getResizeHandleElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    getTriggerProps,
  }
}

export type UseResizableTriggerReturn = ReturnType<typeof useResizableTrigger>
