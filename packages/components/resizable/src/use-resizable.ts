import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import type { PropGetter } from "@yamada-ui/utils"
import { createContext, dataAttr, handlerAll } from "@yamada-ui/utils"
import type { ForwardedRef, RefObject } from "react"
import { useCallback, useEffect, useId, useState } from "react"
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
  ImperativePanelHandle,
} from "react-resizable-panels"

type GroupPropGetter = (props?: Partial<PanelGroupProps>) => PanelGroupProps
type ItemPropGetter = (props?: HTMLUIProps<"div"> & PanelProps) => PanelProps
type TriggerPropGetter = (
  props?: PanelResizeHandleProps,
) => PanelResizeHandleProps

type As = { as?: keyof HTMLElementTagNameMap }

type ResizableGroupProps = Omit<
  Partial<PanelGroupProps>,
  "id" | "tagName" | "children"
> &
  As
type ResizableItemProps = Omit<PanelProps, "id" | "tagName" | "children"> & As
type ResizableTriggerProps = Omit<
  PanelResizeHandleProps,
  "id" | "tagName" | "children"
> &
  As

export type ResizableStorage = PanelGroupStorage
export type ResizableItemControl = ImperativePanelHandle

type ResizableContext = {
  isDisabled: boolean
  styles: Record<string, CSSUIObject>
}

export const [ResizableProvider, useResizableContext] =
  createContext<ResizableContext>({
    name: "ResizableContext",
    errorMessage: `useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`,
  })

export type UseResizableProps = {
  /**
   * id assigned to resizable element.
   */
  id?: string
  /**
   * Ref for resizable element.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * The direction of the resizable.
   *
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical"
  /**
   * If `true`, the resizable trigger will be disabled.
   */
  isDisabled?: boolean
  /**
   * Unit to resize by keyboard operation.
   *
   * @default 10
   */
  keyboardStep?: number
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
  /**
   * A callback that gets and sets a value in custom storage.
   */
  storage?: PanelGroupStorage
  /**
   * The callback invoked when resizable items are resized.
   */
  onLayout?: PanelGroupOnLayout
  /**
   * Props for resizable component.
   */
  groupProps?: ResizableGroupProps
}

export const useResizable = ({
  id,
  direction = "horizontal",
  storageKey,
  keyboardStep,
  isDisabled = false,
  onLayout,
  storage,
  ref,
  groupProps,
  ...rest
}: UseResizableProps) => {
  id ??= useId()

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
        autoSaveId: storageKey,
        keyboardResizeBy: keyboardStep,
        onLayout,
        storage,
        ...rest,
      }
    },
    [id, direction, groupProps, storageKey, keyboardStep, onLayout, storage],
  )

  useEffect(() => {
    if (!id) return

    const el = getPanelGroupElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    isDisabled,
    getContainerProps,
    getGroupProps,
  }
}

export type UseResizableReturn = ReturnType<typeof useResizable>

type UseResizableItemOptions = {
  /**
   * id assigned to resizable item element.
   */
  id?: string
  /**
   * Ref for resizable item element.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * If `true`, the resizable item can be collapsed.
   *
   * @default false
   */
  collapsible?: boolean
  /**
   * The collapsed size of the resizable item.
   */
  collapsedSize?: number
  /**
   * The initial size of the resizable item.
   */
  defaultSize?: number
  /**
   * The minimum allowed value of the resizable item.
   */
  minSize?: number
  /**
   * The maximum allowed value of the resizable item.
   */
  maxSize?: number
  /**
   * The callback invoked when resizable item are collapsed.
   */
  onCollapse?: () => void
  /**
   * The callback invoked when resizable item are expanded.
   */
  onExpand?: () => void
  /**
   * The callback invoked when resizable item are resized.
   */
  onResize?: (size: number, prevSize: number | undefined) => void
  /**
   * Order for the resizable item.
   */
  order?: number
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<ResizableItemControl>
  /**
   * Props for resizable item container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "as"> & ResizableItemProps
}

export type UseResizableItemProps = Omit<
  HTMLUIProps<"div">,
  keyof UseResizableItemOptions
> &
  UseResizableItemOptions

export const useResizableItem = ({
  id,
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
  controlRef,
  containerProps,
  ...innerProps
}: UseResizableItemProps) => {
  id ??= useId()

  const getPanelProps: ItemPropGetter = useCallback(
    (props = {}) => {
      const { as, ...rest } = containerProps ?? {}

      return {
        ...props,
        ref: controlRef,
        id,
        tagName: as,
        collapsible,
        defaultSize,
        maxSize,
        minSize,
        collapsedSize,
        onCollapse,
        onExpand,
        onResize,
        order,
        ...(collapsible ? { "aria-labelledby": id } : { "aria-label": id }),
        ...rest,
      }
    },
    [
      id,
      controlRef,
      containerProps,
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
    if (!id) return

    const el = getPanelElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    getPanelProps,
    getItemProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

type UseResizableTriggerOptions = {
  /**
   * id assigned to resizable trigger element.
   */
  id?: string
  /**
   * Ref for resizable trigger element.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * If `true`, the resizable trigger will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The callback invoked when resizable trigger are dragged.
   */
  onDragging?: (isDragging: boolean) => void
}

export type UseResizableTriggerProps = HTMLUIProps<"div"> &
  ResizableTriggerProps &
  UseResizableTriggerOptions

export const useResizableTrigger = ({
  id,
  ref,
  as,
  disabled,
  isDisabled,
  onDragging,
  ...rest
}: UseResizableTriggerProps) => {
  id ??= useId()

  const { isDisabled: isGroupDisabled } = useResizableContext()
  const [isActive, setIsActive] = useState<boolean>(false)

  const trulyDisabled = disabled || isDisabled || isGroupDisabled

  const getTriggerProps: TriggerPropGetter = useCallback(
    (props = {}) => ({
      ...props,
      id,
      tagName: as,
      disabled: trulyDisabled,
      onDragging: handlerAll(onDragging, (isActive) => setIsActive(isActive)),
      ...rest,
      "data-active": dataAttr(isActive),
      style: {
        ...props.style,
        ...rest.style,
        ...(trulyDisabled ? { cursor: "default" } : {}),
      },
    }),
    [id, as, trulyDisabled, onDragging, rest, isActive],
  )

  const getIconProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      "data-active": dataAttr(isActive),
    }),
    [isActive],
  )

  useEffect(() => {
    if (!id) return

    const el = getResizeHandleElement(id)

    // @ts-expect-error
    if (ref) ref.current = el
  }, [ref, id])

  return {
    getTriggerProps,
    getIconProps,
  }
}

export type UseResizableTriggerReturn = ReturnType<typeof useResizableTrigger>
