import type { MouseEvent, MouseEventHandler, RefObject } from "react"
import type {
  ImperativePanelGroupHandle,
  ImperativePanelHandle,
  PanelGroupOnLayout,
  PanelGroupProps,
  PanelGroupStorage,
  PanelProps,
  PanelResizeHandleProps,
} from "react-resizable-panels"
import type {
  HTMLProps,
  HTMLRefAttributes,
  Orientation,
  PropGetter,
} from "../../core"
import { useCallback, useId, useLayoutEffect, useRef, useState } from "react"
import {
  getPanelElement,
  getPanelGroupElement,
  getResizeHandleElement,
} from "react-resizable-panels"
import {
  assignRef,
  createContext,
  dataAttr,
  fnAll,
  handlerAll,
  mergeRefs,
} from "../../utils"

interface ResizableContext
  extends Omit<UseResizableReturn, "getGroupProps" | "getRootProps"> {}

export const [ResizableContext, useResizableContext] =
  createContext<ResizableContext>({
    name: "ResizableContext",
  })

export interface ResizableStorage extends PanelGroupStorage {}
export interface ResizableGroupControl extends ImperativePanelGroupHandle {}
export interface ResizableItemControl extends ImperativePanelHandle {}

interface ResizableGroupProps
  extends Omit<Partial<PanelGroupProps>, "tagName"> {
  ref?: RefObject<ResizableGroupControl>
  /**
   * The HTML element to render.
   */
  as?: keyof HTMLElementTagNameMap
}
interface ResizableItemProps extends Omit<PanelProps, "tagName"> {
  ref?: RefObject<ResizableItemControl>
  /**
   * The HTML element to render.
   */
  as?: keyof HTMLElementTagNameMap
}
interface ResizableTriggerProps
  extends Omit<PanelResizeHandleProps, "tagName">,
    HTMLRefAttributes {
  /**
   * The HTML element to render.
   */
  as?: keyof HTMLElementTagNameMap
}

export interface UseResizableProps extends HTMLProps {
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<null | ResizableGroupControl>
  /**
   * If `true`, the resizable trigger will be disabled.
   */
  disabled?: boolean
  /**
   * Unit to resize by keyboard operation.
   *
   * @default 10
   */
  keyboardStep?: number
  /**
   * The orientation of the resizable.
   *
   * @default "horizontal"
   */
  orientation?: Orientation
  /**
   * A callback that gets and sets a value in custom storage.
   */
  storage?: PanelGroupStorage
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
  /**
   * Props for resizable component.
   */
  groupProps?: ResizableGroupProps
  /**
   * The callback invoked when resizable items are resized.
   */
  onLayout?: PanelGroupOnLayout
}

export const useResizable = ({
  id,
  ref,

  controlRef: controlRefProp,
  disabled,
  keyboardStep,
  orientation = "horizontal",
  storage,
  storageKey,
  groupProps = {},
  onLayout,
  ...rest
}: UseResizableProps) => {
  const controlRef = useRef<ResizableGroupControl>(null)
  const uuid = useId()

  id ??= uuid

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({ ...rest, ...props }),
    [rest],
  )

  const getGroupProps: PropGetter<
    ResizableGroupProps,
    undefined,
    PanelGroupProps
  > = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      autoSaveId: storageKey,
      direction: orientation,
      keyboardResizeBy: keyboardStep,
      storage,
      ...groupProps,
      ...props,
      ref: mergeRefs(ref, controlRefProp, controlRef),
      tagName: props.as ?? groupProps.as,
      onLayout: fnAll(props.onLayout, groupProps.onLayout, onLayout),
    }),
    [
      id,
      orientation,
      groupProps,
      controlRefProp,
      storageKey,
      keyboardStep,
      onLayout,
      storage,
    ],
  )

  useLayoutEffect(() => {
    const el = getPanelGroupElement(id) as HTMLDivElement | null

    assignRef(ref, el)
  }, [ref, id])

  return {
    controlRef,
    disabled,
    orientation,
    getGroupProps,
    getRootProps,
  }
}

export type UseResizableReturn = ReturnType<typeof useResizable>

export interface UseResizableItemProps
  extends HTMLProps,
    Pick<ResizableItemProps, "as"> {
  /**
   * The collapsed size of the resizable item.
   */
  collapsedSize?: number
  /**
   * If `true`, the resizable item can be collapsed.
   *
   * @default false
   */
  collapsible?: boolean
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<null | ResizableItemControl>
  /**
   * The initial size of the resizable item.
   */
  defaultSize?: number
  /**
   * The maximum allowed value of the resizable item.
   */
  maxSize?: number
  /**
   * The minimum allowed value of the resizable item.
   */
  minSize?: number
  /**
   * Order for the resizable item.
   */
  order?: number
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
}

export const useResizableItem = ({
  id,
  ref,
  as,
  controlRef,
  onCollapse,
  onExpand,
  onResize,
  ...rest
}: UseResizableItemProps) => {
  const uuid = useId()

  id ??= uuid

  const getItemProps: PropGetter<ResizableItemProps, undefined, PanelProps> =
    useCallback(
      ({ ref, ...props } = {}) => ({
        id,
        ref: mergeRefs(ref, controlRef),
        tagName: props.as ?? as,
        ...props,
        ...rest,
        onCollapse: fnAll(props.onCollapse, onCollapse),
        onExpand: fnAll(props.onExpand, onExpand),
        onResize: fnAll(props.onResize, onResize),
      }),
      [as, controlRef, id, onCollapse, onExpand, onResize, rest],
    )

  useLayoutEffect(() => {
    const el = getPanelElement(id) as HTMLDivElement | null

    assignRef(ref, el)
  }, [ref, id])

  return {
    getItemProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

export interface UseResizableTriggerProps
  extends HTMLProps,
    Pick<ResizableTriggerProps, "as"> {
  /**
   * If `true`, the resizable trigger will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The callback invoked when resizable trigger are dragged.
   */
  onDragging?: (dragging: boolean) => void
}

export const useResizableTrigger = ({
  id,
  ref,
  as,
  disabled,
  onDragging,
  ...rest
}: UseResizableTriggerProps) => {
  const uuid = useId()
  const {
    controlRef,
    disabled: groupDisabled,
    orientation,
  } = useResizableContext()
  const [active, setActive] = useState<boolean>(false)
  const trulyDisabled = disabled || groupDisabled

  id ??= uuid

  const onDoubleClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.preventDefault()

      const layout = controlRef.current?.getLayout()

      if (!layout) return

      const count = layout.length
      const size = 100 / count
      const nextLayout = layout.map(() => size)

      controlRef.current?.setLayout(nextLayout)
    },
    [controlRef],
  )

  const getTriggerProps: PropGetter<
    ResizableTriggerProps,
    undefined,
    PanelResizeHandleProps
  > = useCallback(
    (props = {}) =>
      ({
        id,
        "aria-orientation": orientation,
        "data-active": dataAttr(active),
        disabled: trulyDisabled,
        tagName: props.as ?? as,
        ...rest,
        ...props,
        onDoubleClick: handlerAll(
          props.onDoubleClick as MouseEventHandler<HTMLDivElement> | undefined,
          rest.onDoubleClick,
          onDoubleClick,
        ),
        onDragging: fnAll(props.onDragging, onDragging, setActive),
      }) as unknown as PanelResizeHandleProps,
    [
      id,
      as,
      orientation,
      trulyDisabled,
      rest,
      onDoubleClick,
      onDragging,
      active,
    ],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-active": dataAttr(active),
      "data-icon": "",
      ...props,
    }),
    [active],
  )

  useLayoutEffect(() => {
    const el = getResizeHandleElement(id) as HTMLDivElement | null

    assignRef(ref, el)
  }, [ref, id])

  return {
    getIconProps,
    getTriggerProps,
  }
}

export type UseResizableTriggerReturn = ReturnType<typeof useResizableTrigger>
