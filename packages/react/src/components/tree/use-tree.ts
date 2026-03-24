"use client"

import type {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { Descendant, Descendants } from "../../hooks/use-descendants"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import type { UseCheckboxProps } from "../checkbox"
import { Children, useCallback, useRef, useState } from "react"
import { useAsyncCallback } from "../../hooks/use-async-callback"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import { useDisclosure } from "../../hooks/use-disclosure"
import {
  ariaAttr,
  assignRef,
  createContext,
  cx,
  dataAttr,
  filterEmpty,
  handlerAll,
  isArray,
  isInputElement,
  isUndefined,
  match,
  mergeRefs,
  runKeyAction,
  setAttribute,
  useIds,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"

export interface TreeControl {
  collapse: () => void
  expand: () => void
}

interface TreeDescendantProps {
  expanded: boolean
  group: boolean
  id: string
  value: string
}

const {
  DescendantsContext: TreeDescendantsContext,
  useDescendant: useTreeDescendant,
  useDescendants: useTreeDescendants,
} = createDescendants<HTMLElement, TreeDescendantProps>()

export { TreeDescendantsContext, useTreeDescendant, useTreeDescendants }

interface TreeContext extends Omit<
  UseTreeReturn,
  "descendants" | "getRootProps"
> {}

const [TreeContext, useTreeContext] = createContext<TreeContext>({
  name: "TreeContext",
})

export { TreeContext, useTreeContext }

interface TreeItemContext extends Pick<
  UseTreeItemReturn,
  | "branchOpen"
  | "groupOpen"
  | "level"
  | "onGroupClose"
  | "onGroupOpen"
  | "onGroupToggle"
  | "value"
> {}

const [TreeItemContext, useTreeItemContext] = createContext<TreeItemContext>({
  name: "TreeItemContext",
  strict: false,
})

export { TreeItemContext, useTreeItemContext }

export interface UseTreeProps<
  Multiple extends boolean = false,
> extends HTMLProps<"ul"> {
  /**
   * If `true`, the tree will allow checkable items.
   *
   * @default false
   */
  checkable?: boolean
  /**
   * The checked value of the tree.
   */
  checkedValue?: string[]
  /**
   * Ref of the tree callbacks.
   */
  controlRef?: RefObject<null | TreeControl>
  /**
   * The initial checked value of the tree.
   */
  defaultCheckedValue?: string[]
  /**
   * The initial expanded value of the tree.
   */
  defaultExpandedValue?: string[]
  /**
   * The initial selected value of the tree.
   */
  defaultSelectedValue?: Multiple extends true ? string[] : string
  /**
   * The expanded value of the tree.
   */
  expandedValue?: string[]
  /**
   * If `true`, the tree will allow multiple selection.
   *
   * @default false
   */
  multiple?: Multiple
  /**
   * The selected value of the tree.
   */
  selectedValue?: Multiple extends true ? string[] : string
  /**
   * The callback invoked when checked value changes.
   */
  onCheckedChange?: (value: string[]) => void
  /**
   * The callback invoked when expanded value changes.
   */
  onExpandedChange?: (value: string[]) => void
  /**
   * The callback invoked when selected value changes.
   */
  onSelectedChange?: (value: Multiple extends true ? string[] : string) => void
}

export const useTree = <Multiple extends boolean = false>({
  checkable = false,
  checkedValue: checkedValueProp,
  children,
  controlRef,
  defaultCheckedValue = [],
  defaultExpandedValue = [],
  defaultSelectedValue,
  expandedValue: expandedValueProp,
  multiple,
  selectedValue: selectedValueProp,
  onCheckedChange: onCheckedChangeProp,
  onExpandedChange: onExpandedChangeProp,
  onSelectedChange: onSelectedChangeProp,
  ...rest
}: UseTreeProps<Multiple> = {}) => {
  type MaybeSelectedValue = Multiple extends true ? string[] : string

  const [selectedValue, setSelectedValue] = useControllableState({
    defaultValue:
      defaultSelectedValue ?? ((multiple ? [] : "") as MaybeSelectedValue),
    value: selectedValueProp,
    onChange: onSelectedChangeProp,
  })
  const [checkedValue, onCheckedChange] = useControllableState({
    defaultValue: defaultCheckedValue,
    value: checkedValueProp,
    onChange: onCheckedChangeProp,
  })
  const [expandedValue, setExpandedValue] = useControllableState({
    defaultValue: defaultExpandedValue,
    value: expandedValueProp,
    onChange: onExpandedChangeProp,
  })
  const descendants = useTreeDescendants()
  const activeDescendant = useRef<Descendant<
    HTMLElement,
    TreeDescendantProps
  > | null>(null)
  const searchRef = useRef<{ value: string; omitValue?: string }>({
    omitValue: undefined,
    value: "",
  })
  const timeoutRef = useRef<any>(null)
  const rootRef = useRef<HTMLUListElement>(null)

  const onExpandAll = useCallback(() => {
    const values = descendants.enabledValues()
    const group = values.filter(({ group }) => group)
    const value = group.map(({ value }) => value)

    setExpandedValue(value)
  }, [descendants, setExpandedValue])

  const onCollapseAll = useCallback(() => {
    setExpandedValue([])
  }, [setExpandedValue])

  const onActiveDescendant = useCallback(
    (
      descendant?: Descendant<HTMLElement, TreeDescendantProps>,
      shouldFocus = true,
    ) => {
      if (!rootRef.current || !descendant) return

      rootRef.current.setAttribute("aria-activedescendant", descendant.id)

      descendants.values().forEach(({ node }) => {
        node.tabIndex = -1
      })

      activeDescendant.current = descendant
      descendant.node.tabIndex = 0

      if (shouldFocus) descendant.node.focus()
    },
    [descendants],
  )

  const onSearch = useCallback(
    (value: string, omitValue: string) => {
      clearTimeout(timeoutRef.current)

      searchRef.current.value += value

      if (!searchRef.current.omitValue) searchRef.current.omitValue = omitValue

      timeoutRef.current = setTimeout(() => {
        searchRef.current = { omitValue: undefined, value: "" }
      }, 400)

      const values = descendants
        .enabledValues({ expanded: true })
        .filter(
          (descendant) =>
            !isUndefined(descendant.value) &&
            descendant.value !== searchRef.current.omitValue,
        )
      const descendant = values.find(({ value }) =>
        match(value, searchRef.current.value, "startsWith"),
      )

      if (descendant) onActiveDescendant(descendant)
    },
    [descendants, onActiveDescendant],
  )

  const onSelectedChange = useCallback(
    (value: SetStateAction<string | string[]>) => {
      setSelectedValue(value as SetStateAction<MaybeSelectedValue>)
    },
    [setSelectedValue],
  )

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

  useSafeLayoutEffect(() => {
    const value = isArray(selectedValue) ? selectedValue.at(0) : selectedValue
    const expandedDescendants = descendants.enabledValues({ expanded: true })

    if (value) {
      const descendant = expandedDescendants.find(
        (descendant) => value === descendant.value,
      )

      if (descendant) {
        onActiveDescendant(descendant, false)
      } else {
        onActiveDescendant(expandedDescendants.at(0), false)
      }
    } else {
      onActiveDescendant(expandedDescendants.at(0), false)
    }
  }, [children])

  assignRef(controlRef, { collapse: onCollapseAll, expand: onExpandAll })

  const getRootProps: PropGetter<"ul"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, rootRef),
      "aria-multiselectable": ariaAttr(multiple || checkable),
      children,
      role: "tree",
      ...rest,
      ...props,
    }),
    [multiple, checkable, rest, children],
  )

  return {
    activeDescendant,
    checkable,
    checkedValue,
    descendants,
    expandedValue,
    multiple,
    selectedValue,
    getRootProps,
    onActiveDescendant,
    onCheckedChange,
    onCollapseAll,
    onExpandAll,
    onExpandedChange,
    onSearch,
    onSelectedChange,
  }
}

export type UseTreeReturn = ReturnType<typeof useTree>

const getRootDescendant =
  (descendants: Descendants<HTMLElement, TreeDescendantProps>) =>
  (value: string) => {
    const segments = value.split("/")

    if (segments.length <= 1) return

    const rootValue = segments.at(0)

    return descendants.enabledValues().find(({ value }) => value === rootValue)
  }

const getParentDescendant =
  (descendants: Descendants<HTMLElement, TreeDescendantProps>) =>
  (value: string) => {
    const segments = value.split("/")

    if (segments.length <= 1) return

    const parentValue = segments.slice(0, -1).join("/")

    return descendants
      .enabledValues()
      .find(({ value }) => value === parentValue)
  }

const getChildDescendants =
  (descendants: Descendants<HTMLElement, TreeDescendantProps>) =>
  (value: string) => {
    const children = descendants
      .enabledValues()
      .filter((descendant) => descendant.value.startsWith(value + "/"))
    const values = children
      .map(({ value }) => value)
      .filter((value) => !isUndefined(value))

    return { children, values }
  }

const getParentValues = (value: string) => {
  const segments = value.split("/")

  return segments
    .reduce<string[]>((prev, current) => {
      const prevValue = prev.at(-1)
      return prevValue ? [...prev, [prevValue, current].join("/")] : [current]
    }, [])
    .toReversed()
}

const getCheckbox = (node?: HTMLElement) => {
  const el = node?.querySelector("input[type='checkbox']")

  return isInputElement(el) ? el : null
}

const getAllChecked = (
  descendants: Descendant<HTMLElement, TreeDescendantProps>[],
  trulyValues?: string[],
  falsyValues?: string[],
) => {
  const checked = descendants.map(({ node, value }) => {
    if (value && trulyValues?.includes(value)) return true
    if (value && falsyValues?.includes(value)) return false

    const checkbox = getCheckbox(node)

    return !!checkbox?.checked
  })

  const allChecked = !!checked.length && checked.every(Boolean)
  const indeterminate = checked.some(Boolean) && !allChecked

  return { allChecked, checked, indeterminate }
}

const getRangeValues =
  (descendants: Descendants<HTMLElement, TreeDescendantProps>) =>
  (start: string, end: string) => {
    const values = descendants.enabledValues()
    const [startIndex, endIndex] = [
      values.findIndex((descendant) => descendant.value === start),
      values.findIndex((descendant) => descendant.value === end),
    ].sort((a, b) => a - b)

    return values
      .slice(startIndex, endIndex! + 1)
      .map(({ value }) => value)
      .filter((value) => !isUndefined(value))
      .sort((a, b) => {
        if (a === start && b !== start) return -1
        if (a !== start && b === start) return 1

        return 0
      })
  }

export interface UseTreeItemProps
  extends HTMLProps<"li">, Omit<UseDisclosureProps, "timing"> {
  /**
   * If `true`, the tree item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The value of the item.
   */
  value?: string
  /**
   * If provided, the tree item will be rendered as an async tree item.
   */
  asyncChildren?: () => Promise<ReactNode>
}

export const useTreeItem = ({
  asyncChildren,
  children: childrenProp,
  defaultOpen,
  disabled = false,
  open: openProp,
  value: valueProp,
  onClose: onCloseProp,
  onOpen: onOpenProp,
  ...rest
}: UseTreeItemProps = {}) => {
  const context = useTreeItemContext()
  const {
    activeDescendant,
    checkable,
    checkedValue,
    expandedValue,
    multiple,
    selectedValue,
    onActiveDescendant,
    onCheckedChange,
    onCollapseAll,
    onExpandAll,
    onExpandedChange,
    onSearch,
    onSelectedChange,
  } = useTreeContext()
  const [children, setChildren] = useState<ReactNode>(childrenProp)
  const [indeterminate, setIndeterminate] = useState(false)
  const [itemId, labelId, groupId, checkboxId] = useIds()
  const initialAsyncRef = useRef(false)
  const async = !!asyncChildren
  const group = async || Children.count(children) > 0
  const level: number = (context?.level ?? 0) + 1
  const value: string = filterEmpty([context?.value, valueProp]).join("/")
  const nested = !!context?.value
  const selected = isArray(selectedValue)
    ? !!value && selectedValue.includes(value)
    : selectedValue === value
  const checked = !!value && checkedValue.includes(value)
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
  const { descendants, register } = useTreeDescendant({
    id: itemId!,
    disabled,
    expanded: branchOpen.slice(0, -1).every(Boolean),
    group,
    value,
  })

  const [groupLoading, onGroupChildren] = useAsyncCallback(async () => {
    const children = await asyncChildren?.()

    setChildren(children)
  }, [asyncChildren])

  const onSelect = useCallback(
    (
      ev: (
        | Partial<KeyboardEvent<HTMLElement>>
        | Partial<MouseEvent<HTMLElement>>
      ) & { value?: string } = {},
    ) => {
      const selectedValue = ev.value ?? value

      if (disabled || !selectedValue) return

      if (multiple) {
        onSelectedChange((prev) => {
          if (!isArray(prev)) return prev

          if (ev.ctrlKey || ev.metaKey) {
            if (prev.includes(selectedValue)) {
              return prev.filter((prevValue) => prevValue !== selectedValue)
            } else {
              return [...prev, selectedValue]
            }
          } else if (ev.shiftKey && prev[0]) {
            if (prev[0] === selectedValue) return prev

            return getRangeValues(descendants)(prev[0], selectedValue)
          } else {
            return [selectedValue]
          }
        })
      } else {
        onSelectedChange(selectedValue)
      }
    },
    [descendants, disabled, multiple, onSelectedChange, value],
  )

  const onGroupOpen = useCallback(() => {
    if (disabled || !value) return

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
  }, [disabled, async, onGroupChildren, onOpen, onExpandedChange, value])

  const onGroupClose = useCallback(() => {
    if (disabled || !value) return

    onClose()
    onExpandedChange(value)
  }, [disabled, onClose, onExpandedChange, value])

  const onGroupToggle = useCallback(() => {
    if (groupOpen) {
      onGroupClose()
    } else {
      onGroupOpen()
    }
  }, [groupOpen, onGroupClose, onGroupOpen])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      if (disabled || !value) return

      runKeyAction(ev, {
        a: () => {
          if (!multiple || !(ev.ctrlKey || ev.metaKey)) return

          const values = descendants
            .enabledValues()
            .map(({ value }) => value)
            .filter((value) => !isUndefined(value))

          onSelectedChange(values)
        },
        ArrowDown: () => {
          if ((ev.ctrlKey || ev.metaKey) && ev.shiftKey) {
            onExpandAll()
          } else {
            const descendant = descendants.enabledNextValue(
              activeDescendant.current,
              false,
              { expanded: true },
            )

            onActiveDescendant(descendant)

            if (ev.shiftKey && multiple)
              onSelect({ ctrlKey: true, value: descendant?.value })
          }
        },
        ArrowLeft: () => {
          if (group && groupOpen) {
            onGroupClose()
          } else if (nested) {
            const descendant = getParentDescendant(descendants)(value)

            onActiveDescendant(descendant)
          }
        },
        ArrowRight: () => {
          if (!group) return

          if (groupOpen) {
            const descendant = descendants.enabledNextValue(
              activeDescendant.current,
              false,
              { expanded: true },
            )

            onActiveDescendant(descendant)
          } else {
            if (!groupLoading) onGroupOpen()
          }
        },
        ArrowUp: () => {
          if ((ev.ctrlKey || ev.metaKey) && ev.shiftKey) {
            onCollapseAll()

            if (!nested) return

            const descendant = getRootDescendant(descendants)(value)

            onActiveDescendant(descendant)
          } else {
            const descendant = descendants.enabledPrevValue(
              activeDescendant.current,
              false,
              { expanded: true },
            )

            onActiveDescendant(descendant)

            if (ev.shiftKey && multiple)
              onSelect({ ctrlKey: true, value: descendant?.value })
          }
        },
        End: () => {
          const descendant = descendants
            .enabledValues({ expanded: true })
            .at(-1)

          onActiveDescendant(descendant)
        },
        Enter: () => {
          if (group) onGroupToggle()

          onSelect(ev)
        },
        Home: () => {
          const descendant = descendants.enabledValues({ expanded: true }).at(0)

          onActiveDescendant(descendant)
        },
        Space: () => {
          if (group) onGroupToggle()

          onSelect(ev)
        },
      })

      if (ev.key.length !== 1) return
      if (ev.ctrlKey || ev.metaKey || ev.altKey) return

      ev.preventDefault()

      onSearch(ev.key, value)
    },
    [
      activeDescendant,
      descendants,
      disabled,
      group,
      groupLoading,
      groupOpen,
      multiple,
      nested,
      onActiveDescendant,
      onCollapseAll,
      onExpandAll,
      onGroupClose,
      onGroupOpen,
      onGroupToggle,
      onSearch,
      onSelect,
      onSelectedChange,
      value,
    ],
  )

  const onItemClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      if (disabled || group || !value) return

      onSelect(ev)
    },
    [disabled, group, onSelect, value],
  )

  const onTriggerClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled || !group || !value || groupLoading) return

      if (!ev.ctrlKey && !ev.metaKey && !ev.shiftKey) onGroupToggle()

      onSelect(ev)
    },
    [disabled, group, value, groupLoading, onGroupToggle, onSelect],
  )

  const onCheckboxChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (disabled || !value) return

      ev.stopPropagation()

      if (group) setIndeterminate(false)

      onCheckedChange((prev) => {
        const target = [value]

        if (group) {
          const { values } = getChildDescendants(descendants)(value)

          target.push(...values)
        }

        if (nested) {
          const parentValues = getParentValues(context.value)
          const parentTarget: string[] = []

          parentValues.forEach((parentValue) => {
            const { children } = getChildDescendants(descendants)(parentValue)
            const { allChecked } = getAllChecked(
              children,
              [...parentTarget, ...(ev.target.checked ? target : [])],
              !ev.target.checked ? target : [],
            )

            if (allChecked) parentTarget.push(parentValue)
          })

          if (!ev.target.checked) parentTarget.push(...parentValues)

          target.push(...parentTarget)
        }

        if (ev.target.checked) {
          return [...new Set([...prev, ...target])]
        } else {
          return prev.filter((prevValue) => !target.includes(prevValue))
        }
      })
    },
    [disabled, group, onCheckedChange, value, nested, descendants, context],
  )

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

  useSafeLayoutEffect(() => {
    if (!group || !checkable) return

    const { children } = getChildDescendants(descendants)(value)
    const { indeterminate } = getAllChecked(children)

    setIndeterminate(indeterminate)
  }, [checkedValue])

  useSafeLayoutEffect(() => {
    if (!checkable) return

    const { node } = getParentDescendant(descendants)(value) ?? {}
    const checkbox = getCheckbox(node)

    if (!checkbox) return

    const cleanup = setAttribute(checkbox, "aria-controls", checkboxId)

    return cleanup
  }, [checkable, descendants])

  const getItemProps: PropGetter<"li"> = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: itemId,
      ref: mergeRefs(props.ref, rest.ref, !group ? register : undefined),
      "aria-disabled": ariaAttr(disabled),
      "aria-labelledby": cx(ariaLabelledby, labelId),
      "aria-level": level,
      "aria-selected": ariaAttr(selected),
      "data-disabled": dataAttr(disabled),
      role: "treeitem",
      tabIndex: -1,
      ...rest,
      ...props,
      onClick: handlerAll(props.onClick, rest.onClick, onItemClick),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
    }),
    [
      itemId,
      rest,
      group,
      register,
      disabled,
      labelId,
      level,
      selected,
      onItemClick,
      onKeyDown,
    ],
  )

  const getGroupItemProps: PropGetter<"li"> = useCallback(
    (props = {}) => getItemProps({ "aria-expanded": groupOpen, ...props }),
    [getItemProps, groupOpen],
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
    [disabled, groupOpen, selected, groupLoading],
  )

  const getCheckboxProps: PropGetter<UseCheckboxProps> = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: checkboxId,
      "aria-labelledby": cx(ariaLabelledby, labelId),
      "data-selected": dataAttr(selected),
      checked,
      indeterminate,
      tabIndex: -1,
      ...props,
      onChange: handlerAll(props.onChange, onCheckboxChange),
    }),
    [checkboxId, labelId, selected, checked, indeterminate, onCheckboxChange],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}) => ({
      ref: mergeRefs(props.ref, group ? register : undefined),
      "aria-controls": groupId,
      "aria-disabled": ariaAttr(disabled),
      "data-disabled": dataAttr(disabled),
      "data-expanded": dataAttr(groupOpen),
      "data-selected": dataAttr(selected),
      tabIndex: -1,
      ...props,
      onClick: handlerAll(props.onClick, onTriggerClick),
    }),
    [group, register, groupId, disabled, groupOpen, selected, onTriggerClick],
  )

  const getGroupProps: PropGetter<"ul"> = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: groupId,
      "aria-busy": ariaAttr(groupLoading),
      "aria-labelledby": cx(ariaLabelledby, labelId),
      "data-disabled": dataAttr(disabled),
      role: "group",
      ...props,
    }),
    [groupId, labelId, disabled, groupLoading],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({ id: labelId, ...props }),
    [labelId],
  )

  return {
    branchOpen,
    checked,
    children,
    disabled,
    group,
    groupLoading,
    groupOpen,
    indeterminate,
    level,
    selected,
    value,
    getCheckboxProps,
    getGroupItemProps,
    getGroupProps,
    getIndicatorProps,
    getItemProps,
    getLabelProps,
    getTriggerProps,
    onGroupClose,
    onGroupOpen,
    onGroupToggle,
  }
}

export type UseTreeItemReturn = ReturnType<typeof useTreeItem>
