"use client"

import type { ReactNode, RefObject } from "react"
import { Children, useCallback, useId, useRef, useState } from "react"
import { type HTMLProps, type PropGetter, useEnvironment } from "../../core"
import { useAsyncCallback } from "../../hooks/use-async-callback"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import {
  useDisclosure,
  type UseDisclosureProps,
} from "../../hooks/use-disclosure"
import { useWindowEvent } from "../../hooks/use-window-event"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  assignRef,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  mergeRefs,
  setAttribute,
  useIds,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"

export interface SidebarControl {
  collapse: () => void
  expand: () => void
}

interface SidebarDescendantProps {
  expanded: boolean
  group: boolean
  id: string
  value: string
}

const {
  DescendantsContext: SidebarDescendantsContext,
  useDescendant: useSidebarDescendant,
  useDescendants: useSidebarDescendants,
} = createDescendants<HTMLElement, SidebarDescendantProps>()

export {
  SidebarDescendantsContext,
  useSidebarDescendant,
  useSidebarDescendants,
}

interface SidebarContext extends Pick<
  UseSidebarReturn,
  | "expandedValue"
  | "mobile"
  | "onClose"
  | "onExpandedChange"
  | "onOpen"
  | "onSelectedChange"
  | "onToggle"
  | "open"
  | "selectedValue"
> {}

const [SidebarContext, useSidebarContext] = createContext<SidebarContext>({
  name: "SidebarContext",
})

export { SidebarContext, useSidebarContext }

interface SidebarItemContext extends Pick<
  UseSidebarItemReturn,
  "branchOpen" | "groupOpen"
> {}

const [SidebarItemContext, useSidebarItemContext] =
  createContext<SidebarItemContext>({
    name: "SidebarItemContext",
    strict: false,
  })

export { SidebarItemContext, useSidebarItemContext }

export interface UseSidebarProps extends HTMLProps<"div"> {
  /**
   * Ref of the sidebar callbacks.
   */
  controlRef?: RefObject<null | SidebarControl>
  /**
   * The initial expanded value of the sidebar.
   */
  defaultExpandedValue?: string[]
  /**
   * The initial selected value of the sidebar.
   */
  defaultSelectedValue?: string
  /**
   * The disclosure props for the desktop and mobile.
   */
  disclosure?: {
    desktop?: Omit<UseDisclosureProps, "timing">
    mobile?: Omit<UseDisclosureProps, "timing">
  }
  /**
   * The expanded value of the sidebar.
   */
  expandedValue?: string[]
  /**
   * If `true`, the trigger click event will be switched to mobile.
   *
   * @default false
   */
  mobile?: boolean
  /**
   * The selected value of the sidebar.
   */
  selectedValue?: string
  /**
   * The callback invoked when expanded value changes.
   */
  onExpandedChange?: (value: string[]) => void
  /**
   * The callback invoked when selected value changes.
   */
  onSelectedChange?: (value: string) => void
}

export const useSidebar = ({
  controlRef,
  defaultExpandedValue = [],
  defaultSelectedValue,
  disclosure,
  expandedValue: expandedValueProp,
  mobile = false,
  selectedValue: selectedValueProp,
  onExpandedChange: onExpandedChangeProp,
  onSelectedChange: onSelectedChangeProp,
  ...rest
}: UseSidebarProps = {}) => {
  const { t } = useI18n("sidebar")
  const desktopDisclosure = useDisclosure({
    defaultOpen: disclosure?.desktop?.defaultOpen ?? true,
    open: disclosure?.desktop?.open,
    onClose: disclosure?.desktop?.onClose,
    onOpen: disclosure?.desktop?.onOpen,
  })
  const mobileDisclosure = useDisclosure({
    defaultOpen: disclosure?.mobile?.defaultOpen ?? false,
    open: disclosure?.mobile?.open,
    onClose: disclosure?.mobile?.onClose,
    onOpen: disclosure?.mobile?.onOpen,
  })
  const [selectedValue, setSelectedValue] = useControllableState({
    defaultValue: defaultSelectedValue,
    value: selectedValueProp,
    onChange: onSelectedChangeProp,
  })
  const [expandedValue, setExpandedValue] = useControllableState({
    defaultValue: defaultExpandedValue,
    value: expandedValueProp,
    onChange: onExpandedChangeProp,
  })
  const descendants = useSidebarDescendants()
  const open = mobile ? mobileDisclosure.open : desktopDisclosure.open
  const onOpen = mobile ? mobileDisclosure.onOpen : desktopDisclosure.onOpen
  const onClose = mobile ? mobileDisclosure.onClose : desktopDisclosure.onClose
  const onToggle = mobile
    ? mobileDisclosure.onToggle
    : desktopDisclosure.onToggle

  const onSelectedChange = useCallback(
    (value: string) => {
      setSelectedValue(value)
    },
    [setSelectedValue],
  )

  const onExpandAll = useCallback(() => {
    const values = descendants.enabledValues()
    const group = values.filter(({ group }) => group)
    const value = group.map(({ value }) => value)

    setExpandedValue(value)
  }, [descendants, setExpandedValue])

  const onCollapseAll = useCallback(() => {
    setExpandedValue([])
  }, [setExpandedValue])

  const onExpandedChange = useCallback(
    (value: string) => {
      setExpandedValue((prev) => {
        if (prev.includes(value)) {
          return prev.filter((prevValue) => prevValue !== value)
        } else {
          return [...prev, value]
        }
      })
    },
    [setExpandedValue],
  )

  assignRef(controlRef, { collapse: onCollapseAll, expand: onExpandAll })

  useWindowEvent("keydown", (ev) => {
    if (ev.key !== "b") return
    if (!ev.metaKey && !ev.ctrlKey) return

    ev.preventDefault()

    desktopDisclosure.onToggle()
  })

  const getRootProps: PropGetter<"div"> = useCallback(
    (props = {}) => ({
      "data-expanded": dataAttr(open),
      ...rest,
      ...props,
    }),
    [open, rest],
  )

  const getTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-expanded": open,
      "aria-label": t(open ? "Close sidebar" : "Open sidebar"),
      ...props,
      onClick: handlerAll(props.onClick, onToggle),
    }),
    [open, t, onToggle],
  )

  const getSidePanelProps: PropGetter<"aside"> = useCallback(
    (props = {}) => ({ "data-expanded": dataAttr(open), ...props }),
    [open],
  )

  const getHeaderProps: PropGetter<"header"> = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  const getFooterProps: PropGetter<"footer"> = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  const getContentProps: PropGetter<"ul"> = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  return {
    descendants,
    expandedValue,
    mobile,
    open,
    selectedValue,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getRootProps,
    getSidePanelProps,
    getTriggerProps,
    onClose,
    onExpandedChange,
    onOpen,
    onSelectedChange,
    onToggle,
  }
}

export type UseSidebarReturn = ReturnType<typeof useSidebar>

export interface UseSidebarGroupProps extends HTMLProps<"li"> {}

export const useSidebarGroup = ({ ...rest }: UseSidebarGroupProps = {}) => {
  const { getDocument } = useEnvironment()
  const rootRef = useRef<HTMLLIElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const labelId = useId()

  useSafeLayoutEffect(() => {
    const el = getDocument()?.getElementById(labelId)

    if (!el) return

    if (rootRef.current)
      setAttribute(rootRef.current, "aria-labelledby", labelId)
    if (contentRef.current)
      setAttribute(contentRef.current, "aria-labelledby", labelId)
  }, [])

  const getRootProps: PropGetter<"li"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, rootRef),
      ...rest,
      ...props,
    }),
    [rest],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({ id: labelId, ...props }),
    [labelId],
  )

  const getContentProps: PropGetter<"div"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, contentRef),
      ...props,
    }),
    [],
  )

  return { getContentProps, getLabelProps, getRootProps }
}

export type UseSidebarGroupReturn = ReturnType<typeof useSidebarGroup>

export interface UseSidebarItemProps
  extends HTMLProps<"li">, Omit<UseDisclosureProps, "timing"> {
  /**
   * The value of the item.
   */
  value: string
  /**
   * If `true`, the tree item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  external?: boolean
  /**
   * If provided, the sidebar item will be rendered as an async sidebar item.
   */
  asyncChildren?: () => Promise<ReactNode>
}

export const useSidebarItem = ({
  asyncChildren,
  children: childrenProp,
  defaultOpen,
  disabled = false,
  external,
  open: openProp,
  value,
  onClose: onCloseProp,
  onOpen: onOpenProp,
  ...rest
}: UseSidebarItemProps) => {
  const context = useSidebarItemContext()
  const {
    expandedValue,
    open,
    selectedValue,
    onExpandedChange,
    onSelectedChange,
  } = useSidebarContext()
  const [children, setChildren] = useState<ReactNode>(childrenProp)
  const [itemId, labelId, contentId] = useIds()
  const initialAsyncRef = useRef(false)
  const async = !!asyncChildren
  const group = async || Children.count(children) > 0
  const nested = !!context
  const selected = !!value && selectedValue === value
  const defaultExpanded = !!value && expandedValue.includes(value)
  const {
    open: groupOpen,
    onClose,
    onOpen,
  } = useDisclosure({
    defaultOpen: defaultOpen ?? defaultExpanded,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const branchOpen: boolean[] = nested
    ? [...context.branchOpen, groupOpen]
    : [groupOpen]
  const expanded = branchOpen.slice(0, -1).every(Boolean)
  const { register } = useSidebarDescendant({
    id: itemId!,
    disabled,
    expanded,
    group,
    value,
  })

  const [groupLoading, onGroupChildren] = useAsyncCallback(async () => {
    const children = await asyncChildren?.()

    setChildren(children)
  }, [asyncChildren])

  const onGroupOpen = useCallback(() => {
    if (disabled || !group || !value || groupLoading) return

    if (async && !initialAsyncRef.current) {
      initialAsyncRef.current = true

      onGroupChildren().then(() => {
        onOpen()
        onExpandedChange(value)
      })
    } else {
      onOpen()
      onExpandedChange(value)
    }
  }, [
    disabled,
    group,
    value,
    groupLoading,
    async,
    onGroupChildren,
    onOpen,
    onExpandedChange,
  ])

  const onGroupClose = useCallback(() => {
    if (disabled || !group || !value) return

    onClose()
    onExpandedChange(value)
  }, [disabled, group, value, onClose, onExpandedChange])

  const onGroupToggle = useCallback(() => {
    if (groupOpen) {
      onGroupClose()
    } else {
      onGroupOpen()
    }
  }, [groupOpen, onGroupClose, onGroupOpen])

  useUpdateEffect(() => {
    if (defaultExpanded) {
      if (async && !initialAsyncRef.current) {
        initialAsyncRef.current = true

        onGroupChildren().then(() => {
          onOpen()
        })
      } else {
        onOpen()
      }
    } else {
      onClose()
    }
  }, [defaultExpanded])

  const getItemProps: PropGetter<"li"> = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: itemId,
      ref: mergeRefs(ref, register),
      "aria-current": selected ? "page" : undefined,
      "aria-disabled": ariaAttr(disabled),
      "aria-labelledby": cx(ariaLabelledby, labelId),
      "data-disabled": dataAttr(disabled),
      "data-selected": dataAttr(selected),
      ...rest,
      ...props,
      onClick: handlerAll(
        props.onClick,
        !group ? () => onSelectedChange(value) : undefined,
      ),
    }),
    [
      itemId,
      register,
      selected,
      disabled,
      labelId,
      rest,
      group,
      onSelectedChange,
      value,
    ],
  )

  const getIndicatorProps: PropGetter<"svg"> = useCallback(
    (props) => ({
      "aria-disabled": ariaAttr(disabled),
      "aria-expanded": groupOpen,
      "aria-hidden": true,
      "data-disabled": dataAttr(disabled),
      "data-loading": dataAttr(groupLoading),
      "data-selected": dataAttr(selected),
      role: "presentation",
      ...props,
    }),
    [disabled, groupOpen, groupLoading, selected],
  )

  const getTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": contentId,
      "aria-disabled": ariaAttr(disabled),
      "data-disabled": dataAttr(disabled),
      "data-expanded": dataAttr(groupOpen),
      "data-selected": dataAttr(selected),
      tabIndex: open && expanded ? 0 : -1,
      ...props,
      onClick: handlerAll(props.onClick, onGroupToggle),
    }),
    [contentId, disabled, groupOpen, selected, open, expanded, onGroupToggle],
  )

  const getLinkProps: PropGetter<"a"> = useCallback(
    (props = {}) => ({
      href: value,
      rel: external ? "noopener" : undefined,
      target: external ? "_blank" : undefined,
      "data-disabled": dataAttr(disabled),
      "data-selected": dataAttr(selected),
      tabIndex: open && expanded ? 0 : -1,
      ...props,
      onClick: handlerAll(props.onClick, (ev) => {
        if (!disabled) return

        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [disabled, expanded, external, open, selected, value],
  )

  const getContentProps: PropGetter<"ul"> = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: contentId,
      "aria-busy": ariaAttr(groupLoading),
      "aria-labelledby": cx(ariaLabelledby, labelId),
      "data-disabled": dataAttr(disabled),
      ...props,
    }),
    [contentId, labelId, disabled, groupLoading],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({ id: labelId, ...props }),
    [labelId],
  )

  return {
    branchOpen,
    children,
    disabled,
    expanded,
    expandedValue,
    group,
    groupLoading,
    groupOpen,
    open,
    selected,
    selectedValue,
    value,
    getContentProps,
    getIndicatorProps,
    getItemProps,
    getLabelProps,
    getLinkProps,
    getTriggerProps,
    onExpandedChange,
    onGroupClose,
    onGroupOpen,
    onGroupToggle,
    onSelectedChange,
  }
}

export type UseSidebarItemReturn = ReturnType<typeof useSidebarItem>
