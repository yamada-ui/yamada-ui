"use client"

import type { MouseEvent, RefObject } from "react"
import type {
  GroupImperativeHandle,
  GroupProps,
  LayoutStorage,
  PanelImperativeHandle,
  PanelProps,
  SeparatorProps,
} from "react-resizable-panels"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useEffect } from "react"
import {
  useGroupRef,
  usePanelRef,
  useDefaultLayout as useResizableLayout,
} from "react-resizable-panels"
import {
  ariaAttr,
  assignRef,
  createContext,
  dataAttr,
  fnAll,
  handlerAll,
  mergeRefs,
} from "../../utils"

interface ResizableContext extends Omit<
  UseResizableReturn,
  "getGroupProps" | "getRootProps"
> {}

const [ResizableContext, useResizableContext] = createContext<ResizableContext>(
  {
    name: "ResizableContext",
  },
)

export { ResizableContext, useResizableContext, useResizableLayout }

export interface ResizableStorage extends LayoutStorage {}
export interface ResizableGroupControl extends GroupImperativeHandle {}
export interface ResizableItemControl extends PanelImperativeHandle {}

export interface UseResizableProps
  extends
    HTMLProps,
    Omit<GroupProps, "color" | "content" | "elementRef" | "groupRef"> {
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<null | ResizableGroupControl>
  /**
   * Props for resizable component.
   */
  groupProps?: GroupProps
}

export const useResizable = ({
  ref,
  controlRef,
  defaultLayout,
  disableCursor,
  disabled,
  orientation = "horizontal",
  resizeTargetMinimumSize,
  groupProps = {},
  onLayoutChange,
  onLayoutChanged,
  ...rest
}: UseResizableProps = {}) => {
  const groupRef = useGroupRef()

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({ ...rest, ...props }),
    [rest],
  )

  const getGroupProps: PropGetter<GroupProps> = useCallback(
    (props = {}) => ({
      defaultLayout,
      disableCursor,
      disabled,
      orientation,
      resizeTargetMinimumSize,
      ...groupProps,
      ...props,
      elementRef: mergeRefs(props.elementRef, ref),
      groupRef: mergeRefs(props.groupRef, groupRef),
      onLayoutChange: fnAll(
        props.onLayoutChange,
        groupProps.onLayoutChange,
        onLayoutChange,
      ),
      onLayoutChanged: fnAll(
        props.onLayoutChanged,
        groupProps.onLayoutChanged,
        onLayoutChanged,
      ),
    }),
    [
      defaultLayout,
      disableCursor,
      disabled,
      orientation,
      resizeTargetMinimumSize,
      groupProps,
      ref,
      groupRef,
      onLayoutChange,
      onLayoutChanged,
    ],
  )

  useEffect(() => {
    assignRef(controlRef, groupRef.current)
  }, [controlRef, groupRef])

  return {
    disabled,
    groupRef,
    orientation,
    getGroupProps,
    getRootProps,
  }
}

export type UseResizableReturn = ReturnType<typeof useResizable>

export interface UseResizableItemProps
  extends
    HTMLProps,
    Omit<PanelProps, "color" | "content" | "elementRef" | "panelRef"> {
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<null | ResizableItemControl>
}

export const useResizableItem = ({
  ref,
  controlRef,
  onResize,
  ...rest
}: UseResizableItemProps) => {
  const panelRef = usePanelRef()

  const getItemProps: PropGetter<PanelProps> = useCallback(
    (props = {}) => ({
      ...rest,
      ...props,
      elementRef: mergeRefs(props.elementRef, ref),
      panelRef: mergeRefs(props.panelRef, panelRef),
      onResize: fnAll(props.onResize, onResize),
    }),
    [onResize, panelRef, ref, rest],
  )

  useEffect(() => {
    assignRef(controlRef, panelRef.current)
  }, [controlRef, panelRef])

  return {
    getItemProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

export interface UseResizableTriggerProps
  extends HTMLProps, Omit<SeparatorProps, "color" | "content" | "elementRef"> {}

export const useResizableTrigger = ({
  ref,
  disabled,
  ...rest
}: UseResizableTriggerProps) => {
  const {
    disabled: groupDisabled,
    groupRef,
    orientation,
  } = useResizableContext()
  const trulyDisabled = disabled || groupDisabled

  const onDoubleClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.preventDefault()

      const layout = groupRef.current?.getLayout()

      if (!layout) return

      const count = Object.keys(layout).length
      const size = 100 / count
      const nextLayout = Object.fromEntries(
        Object.keys(layout).map((key) => [key, size]),
      )

      groupRef.current?.setLayout(nextLayout)
    },
    [groupRef],
  )

  const getTriggerProps: PropGetter<SeparatorProps> = useCallback(
    (props = {}) => ({
      "aria-disabled": ariaAttr(trulyDisabled),
      "aria-orientation": orientation,
      "data-disabled": dataAttr(trulyDisabled),
      disabled: trulyDisabled,
      tabIndex: trulyDisabled ? -1 : 0,
      ...rest,
      ...props,
      elementRef: mergeRefs(props.elementRef, ref),
      onDoubleClick: handlerAll(
        props.onDoubleClick,
        rest.onDoubleClick,
        onDoubleClick,
      ),
    }),
    [orientation, trulyDisabled, rest, ref, onDoubleClick],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-icon": "",
      ...props,
    }),
    [],
  )

  return {
    getIconProps,
    getTriggerProps,
  }
}

export type UseResizableTriggerReturn = ReturnType<typeof useResizableTrigger>
