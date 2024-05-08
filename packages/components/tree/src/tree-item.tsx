import type {
  CSS,
  CSSUIObject,
  HTMLUIProps,
  Token,
  UIPropGetter,
} from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import {
  createContext,
  cx,
  findChildren,
  getValidChildren,
  handlerAll,
  isArray,
  isEmpty,
  mergeRefs,
  omitChildren,
} from "@yamada-ui/utils"
import type {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactNode,
} from "react"
import { useCallback } from "react"
import { useTreeContext, useTreeDescendant } from "./tree"
import { TreeButton } from "./tree-button"
import { TreePanel } from "./tree-panel"

type TreeItemContext = Omit<TreeItemOptions, "children"> & {
  isOpen: boolean
  getButtonProps: UIPropGetter<"button">
  getContentProps: UIPropGetter<"ul">
  getPanelProps: UIPropGetter
}

const [TreeItemProvider, useTreeItemContext] = createContext<TreeItemContext>({
  name: "TreeItemContext",
  errorMessage: `useTreeItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<TreeItem />"`,
})

export { useTreeItemContext }

type TreeItemOptions = {
  /**
   * If set to `true`, the tree item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * Specifies the icon for the tree item. Can be a ReactNode or a function that returns a ReactNode.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the left icon for the tree item. Can be a ReactNode or a function that returns a ReactNode.
   */
  leftIcon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * If set to `true`, the tree icon for the tree item will be hidden.
   *
   * @default false
   */
  iconHidden?: boolean
  /**
   * Specifies the children of the tree item. Can be a ReactNode or a function that returns a ReactNode.
   */
  children?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the background color of the selected item. Accepts a color token.
   */
  selectedBg?: Token<CSS.Property.Background, "colors">
  /**
   * Alias for `selectedBg`. Specifies the background color of the selected item. Accepts a color token.
   */
  selectedBackground?: Token<CSS.Property.Background, "colors">
}

export type TreeItemProps = Omit<HTMLUIProps<"li">, "children"> &
  TreeItemOptions

export const TreeItem = forwardRef<TreeItemProps, "li">(
  (
    {
      className,
      isDisabled = false,
      icon,
      leftIcon,
      iconHidden = false,
      children,
      selectedBg,
      selectedBackground,
      ...rest
    },
    ref,
  ) => {
    const {
      index,
      setIndex,
      setFocusedIndex,
      setSelectedIndex,
      styles,
      levels,
      selectMultiple,
      isSelectable,
    } = useTreeContext()

    const {
      index: i,
      register,
      descendants,
    } = useTreeDescendant({ disabled: isDisabled })

    const isOpen =
      i !== -1 ? (isArray(index) ? index.includes(i) : index === i) : false

    if (isOpen && isDisabled)
      console.warn("Tree: Cannot open a disabled tree item")

    const onChange = useCallback(
      (isOpen: boolean) => {
        if (i === -1) return

        if (isArray(index)) {
          setIndex(isOpen ? index.concat(i) : index.filter((v) => v !== i))
        } else if (isOpen) {
          setIndex(i)
        }
      },
      [i, index, setIndex],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(i)
    }, [setFocusedIndex, i])

    const onClick = useCallback(
      (ev: MouseEvent) => {
        if (
          (ev.target as HTMLElement).classList.contains("ui-tree__icon") ||
          !isSelectable
        ) {
          onChange(!isOpen)
        } else {
          if (selectMultiple) {
            setSelectedIndex((prev) =>
              isArray(prev)
                ? prev.includes(i)
                  ? prev.filter((item) => item !== i)
                  : prev.concat(i)
                : [i],
            )
          } else {
            setSelectedIndex(i)
          }
        }
        setFocusedIndex(i)
      },
      [
        isSelectable,
        setFocusedIndex,
        i,
        onChange,
        isOpen,
        selectMultiple,
        setSelectedIndex,
      ],
    )

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, KeyboardEventHandler> = {
          ArrowDown: () => {
            const next = descendants.enabledNextValue(i)

            next?.node.focus()
          },
          ArrowUp: () => {
            const prev = descendants.enabledPrevValue(i)

            prev?.node.focus()
          },
          Home: () => {
            const first = descendants.enabledFirstValue()

            first?.node.focus()
          },
          End: () => {
            const last = descendants.enabledLastValue()

            last?.node.focus()
          },
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [descendants, i],
    )

    const getButtonProps: UIPropGetter<"button"> = useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref: mergeRefs(register, ref),
        type: "button",
        disabled: isDisabled,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
        "aria-label": props["aria-label"] ?? "tree-button",
      }),
      [isDisabled, onClick, onFocus, onKeyDown, register],
    )

    const getContentProps: UIPropGetter<"ul"> = useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref: mergeRefs(register, ref),
        disabled: isDisabled,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
      [isDisabled, onClick, onFocus, onKeyDown, register],
    )

    const getPanelProps: UIPropGetter = useCallback(
      (props = {}, ref = null) => ({ ...props, ref }),
      [],
    )

    const css: CSSUIObject = {
      ...styles.item,
      overflowAnchor: "none",
    }

    if (typeof children === "function")
      children = children({ isExpanded: isOpen, isDisabled })

    const validChildren = getValidChildren(children)

    const subTreeItems = findChildren(validChildren, TreeItem)
    const hasValidChildren = !isEmpty(subTreeItems)

    const hasChildren = !isEmpty(validChildren)

    const cloneChildren = !hasChildren
      ? omitChildren(validChildren, TreeButton, TreePanel)
      : children

    const content = isArray(children) ? children[0] : children

    const level = levels[i]

    return (
      <TreeItemProvider
        value={{
          isOpen,
          isDisabled,
          icon,
          leftIcon,
          iconHidden,
          getContentProps,
          getButtonProps,
          getPanelProps,
          selectedBg,
          selectedBackground,
        }}
      >
        <ui.li
          ref={ref}
          className={cx("ui-tree__item", className)}
          __css={css}
          {...rest}
        >
          {content ? (
            <TreeButton lastLevel={!hasChildren} index={i} level={level}>
              {content}
            </TreeButton>
          ) : null}
          {hasValidChildren && isArray(cloneChildren) ? (
            <TreePanel>
              {cloneChildren.slice(1, cloneChildren.length)}
            </TreePanel>
          ) : null}
        </ui.li>
      </TreeItemProvider>
    )
  },
)
