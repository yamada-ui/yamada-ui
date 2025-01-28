import type {
  ForwardedRef,
  MouseEvent,
  MouseEventHandler,
  RefObject,
} from "react"
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
  CSSUIObject,
  HTMLUIProps,
  HTMLUIPropsWithoutAs,
  PropGetter,
} from "../../core"
import type { Merge } from "../../utils"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  getPanelElement,
  getPanelGroupElement,
  getResizeHandleElement,
} from "react-resizable-panels"
import {
  createContext,
  dataAttr,
  handlerAll,
  isRefObject,
  mergeRefs,
} from "../../utils"

type ResizableOrientation = "horizontal" | "vertical"

export type As = keyof HTMLElementTagNameMap

interface ResizableGroupProps
  extends Omit<Partial<PanelGroupProps>, "children" | "id" | "tagName"> {
  as?: As
}
interface ResizableItemProps
  extends Omit<PanelProps, "children" | "id" | "tagName"> {
  as?: As
}
interface ResizableTriggerProps
  extends Omit<PanelResizeHandleProps, "children" | "id" | "tagName"> {
  as?: As
}

export interface ResizableStorage extends PanelGroupStorage {}
export interface ResizableGroupControl extends ImperativePanelGroupHandle {}
export interface ResizableItemControl extends ImperativePanelHandle {}

interface ResizableContext {
  controlRef: RefObject<null | ResizableGroupControl>
  disabled: boolean
  orientation: ResizableOrientation
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [ResizableProvider, useResizableContext] =
  createContext<ResizableContext>({
    name: "ResizableContext",
    errorMessage: `useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`,
  })

export interface UseResizableProps {
  /**
   * id assigned to resizable element.
   */
  id?: string
  /**
   * Ref for resizable element.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<ResizableGroupControl>
  /**
   * The direction of the resizable.
   *
   * @default "horizontal"
   *
   * @deprecated Use `orientation` instead.
   */
  direction?: ResizableOrientation
  /**
   * If `true`, the resizable trigger will be disabled.
   */
  disabled?: boolean
  /**
   * If `true`, the resizable trigger will be disabled.
   *
   * @deprecated Use `Disabled` instead.
   */
  isDisabled?: boolean
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
  orientation?: ResizableOrientation
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
  direction = "horizontal",
  isDisabled = false,
  disabled = isDisabled,
  keyboardStep,
  orientation = direction,
  storage,
  storageKey,
  groupProps,
  onLayout,
  ...rest
}: UseResizableProps) => {
  const controlRef = useRef<ResizableGroupControl>(null)
  const uuid = useId()

  id ??= uuid

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({ ...props, ref, ...rest }),
    [rest],
  )

  const getGroupProps = useCallback(
    (props: Partial<PanelGroupProps> = {}) => {
      const { as, ...rest } = groupProps ?? {}

      return {
        ...props,
        id,
        ref: mergeRefs(controlRefProp, controlRef),
        autoSaveId: storageKey,
        direction: orientation,
        keyboardResizeBy: keyboardStep,
        storage,
        tagName: as,
        onLayout,
        ...rest,
      }
    },
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

  useEffect(() => {
    if (!id) return

    const el = getPanelGroupElement(id)

    if (isRefObject(ref)) ref.current = el
  }, [ref, id])

  return {
    controlRef,
    disabled,
    orientation,
    getContainerProps,
    getGroupProps,
  }
}

export type UseResizableReturn = ReturnType<typeof useResizable>

interface UseResizableItemOptions {
  /**
   * id assigned to resizable item element.
   */
  id?: string
  /**
   * Ref for resizable item element.
   */
  ref?: ForwardedRef<HTMLElement>
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
   * Props for resizable item container element.
   */
  containerProps?: Omit<HTMLUIProps, "as"> & ResizableItemProps
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

export interface UseResizableItemProps
  extends Omit<HTMLUIProps, keyof UseResizableItemOptions>,
    UseResizableItemOptions {}

export const useResizableItem = ({
  id,
  ref,
  collapsedSize,
  collapsible,
  controlRef,
  defaultSize,
  maxSize,
  minSize,
  order,
  containerProps,
  onCollapse,
  onExpand,
  onResize,
  ...innerProps
}: UseResizableItemProps) => {
  const uuid = useId()

  id ??= uuid

  const getPanelProps: PropGetter<
    Merge<HTMLUIProps, PanelProps>,
    PanelProps
  > = useCallback(
    (props = {}) => {
      const { as, ...rest } = containerProps ?? {}

      return {
        ...props,
        id,
        ref: controlRef,
        collapsedSize,
        collapsible,
        defaultSize,
        maxSize,
        minSize,
        order,
        tagName: as,
        onCollapse,
        onExpand,
        onResize,
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

  const getItemProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({ ...props, ref, ...innerProps }),
    [innerProps],
  )

  useEffect(() => {
    if (!id) return

    const el = getPanelElement(id)

    if (isRefObject(ref)) ref.current = el
  }, [ref, id])

  return {
    getItemProps,
    getPanelProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

interface UseResizableTriggerOptions {
  /**
   * id assigned to resizable trigger element.
   */
  id?: string
  /**
   * Ref for resizable trigger element.
   */
  ref?: RefObject<HTMLElement | null>
  /**
   * If `true`, the resizable trigger will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the resizable trigger will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * The callback invoked when resizable trigger are dragged.
   */
  onDragging?: (isDragging: boolean) => void
}

export interface UseResizableTriggerProps
  extends Merge<
      ResizableTriggerProps,
      Omit<HTMLUIPropsWithoutAs, "id" | "onBlur" | "onFocus" | "ref">
    >,
    UseResizableTriggerOptions {}

export const useResizableTrigger = ({
  id,
  ref,
  as,
  isDisabled,
  disabled = isDisabled,
  ...rest
}: UseResizableTriggerProps) => {
  const uuid = useId()
  const {
    controlRef,
    disabled: groupDisabled,
    orientation,
  } = useResizableContext()

  id ??= uuid

  const [active, setActive] = useState<boolean>(false)

  const trulyDisabled = disabled || groupDisabled

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
    PanelResizeHandleProps,
    PanelResizeHandleProps
  > = useCallback(
    (props = {}) =>
      ({
        ...props,
        id,
        "aria-orientation": orientation,
        disabled: trulyDisabled,
        tagName: as,
        ...rest,
        style: {
          ...props.style,
          ...rest.style,
          ...(trulyDisabled ? { cursor: "default" } : {}),
        },
        "data-active": dataAttr(active),
        onDoubleClick: handlerAll(
          rest.onDoubleClick as MouseEventHandler<keyof typeof as>,
          onDoubleClick,
        ),
        onDragging: handlerAll(rest.onDragging, (active) => setActive(active)),
      }) as PanelResizeHandleProps,
    [id, as, orientation, trulyDisabled, rest, onDoubleClick, active],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      "data-active": dataAttr(active),
    }),
    [active],
  )

  useEffect(() => {
    if (!id) return

    const el = getResizeHandleElement(id)

    if (isRefObject(ref)) ref.current = el
  }, [ref, id])

  return {
    getIconProps,
    getTriggerProps,
  }
}

export type UseResizableTriggerReturn = ReturnType<typeof useResizableTrigger>
