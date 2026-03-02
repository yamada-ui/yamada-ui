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
import { useCallback } from "react"
import {
  useGroupRef,
  usePanelRef,
  useDefaultLayout as useResizableLayout,
} from "react-resizable-panels"
import {
  ariaAttr,
  createContext,
  dataAttr,
  fnAll,
  handlerAll,
  mergeRefs,
} from "../../utils"

interface ResizableContext extends Omit<UseResizableReturn, "getRootProps"> {}

const [ResizableContext, useResizableContext] = createContext<ResizableContext>(
  {
    name: "ResizableContext",
  },
)

export { ResizableContext, useResizableContext, useResizableLayout }

export interface ResizableStorage extends LayoutStorage {}
export interface ResizableRootControl extends GroupImperativeHandle {}
export interface ResizableItemControl extends PanelImperativeHandle {}

export interface UseResizableProps
  extends
    HTMLProps,
    Omit<GroupProps, "color" | "content" | "elementRef" | "groupRef"> {
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<null | ResizableRootControl>
}

export const useResizable = ({
  controlRef,
  disabled,
  orientation = "horizontal",
  ...rest
}: UseResizableProps = {}) => {
  const groupRef = useGroupRef()

  const getRootProps: PropGetter<GroupProps> = useCallback(
    (props = {}) => ({
      disabled,
      orientation,
      ...rest,
      ...props,
      style: {
        height: undefined,
        width: undefined,
        ...rest.style,
        ...props.style,
      },
      elementRef: mergeRefs(props.elementRef, rest.ref),
      groupRef: mergeRefs(props.groupRef, groupRef, controlRef),
      onLayoutChange: fnAll(props.onLayoutChange, rest.onLayoutChange),
      onLayoutChanged: fnAll(props.onLayoutChanged, rest.onLayoutChanged),
    }),
    [disabled, orientation, groupRef, controlRef, rest],
  )

  return {
    disabled,
    groupRef,
    orientation,
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
  controlRef,
  ...rest
}: UseResizableItemProps) => {
  const panelRef = usePanelRef()

  const getItemProps: PropGetter<PanelProps> = useCallback(
    (props = {}) => ({
      ...rest,
      ...props,
      elementRef: mergeRefs(props.elementRef, rest.ref),
      panelRef: mergeRefs(props.panelRef, panelRef, controlRef),
      onResize: fnAll(props.onResize, rest.onResize),
    }),
    [panelRef, controlRef, rest],
  )

  return {
    panelRef,
    getItemProps,
  }
}

export type UseResizableItemReturn = ReturnType<typeof useResizableItem>

export interface UseResizableTriggerProps
  extends HTMLProps, Omit<SeparatorProps, "color" | "content" | "elementRef"> {}

export const useResizableTrigger = ({
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
      elementRef: mergeRefs(props.elementRef, rest.ref),
      onDoubleClick: handlerAll(
        props.onDoubleClick,
        rest.onDoubleClick,
        onDoubleClick,
      ),
    }),
    [orientation, trulyDisabled, rest, onDoubleClick],
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
