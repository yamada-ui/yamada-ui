import type { KeyboardEvent, MouseEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { Descendant } from "../../hooks/use-descendants"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback, useId, useRef } from "react"
import { createDescendants } from "../../hooks/use-descendants"
import { useDisclosure } from "../../hooks/use-disclosure"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  mergeRefs,
  runKeyAction,
} from "../../utils"

export interface ComboboxDescendantProps {
  id: string
}
export type ComboboxDescendant = Descendant<
  HTMLDivElement,
  ComboboxDescendantProps
>

const {
  DescendantsContext: ComboboxDescendantsContext,
  useDescendant: useComboboxDescendant,
  useDescendantRegister: useComboboxDescendantRegister,
  useDescendants: useComboboxDescendants,
} = createDescendants<HTMLDivElement, ComboboxDescendantProps>()

export {
  ComboboxDescendantsContext,
  useComboboxDescendant,
  useComboboxDescendantRegister,
  useComboboxDescendants,
}

interface ComboboxContext
  extends Pick<
      UseComboboxReturn,
      "descendants" | "onActiveDescendant" | "onClose"
    >,
    Pick<UseComboboxItemProps, "role"> {}

const [ComboboxContext, useComboboxContext] = createContext<ComboboxContext>({
  name: "ComboboxContext",
})

interface ComboboxGroupContext
  extends Pick<UseComboboxGroupReturn, "getLabelProps"> {}

const [ComboboxGroupContext, useComboboxGroupContext] =
  createContext<ComboboxGroupContext>({
    name: "ComboboxGroupContext",
  })

export {
  ComboboxContext,
  ComboboxGroupContext,
  useComboboxContext,
  useComboboxGroupContext,
}

export interface UseComboboxProps
  extends HTMLProps,
    Omit<UseDisclosureProps, "timing"> {
  /**
   * Assign the active descendant to the content or trigger.
   *
   * @default 'trigger'
   */
  activedescendant?: "content" | "trigger"
  /**
   * If `true`, the combobox will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the combobox will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The role of the combobox popup.
   */
  role?: "dialog" | "grid" | "listbox" | "menu" | "tree"
}

export const useCombobox = ({
  "aria-labelledby": ariaLabelledbyProp,
  activedescendant = "trigger",
  defaultOpen,
  disabled,
  open: openProp,
  readOnly,
  role = "listbox",
  onClose: onCloseProp,
  onOpen: onOpenProp,
  ...rest
}: UseComboboxProps = {}) => {
  const interactive = !(readOnly || disabled)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentId = useId()
  const descendants = useComboboxDescendants()
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      ev.preventDefault()

      if (!open) {
        onOpen()
      } else {
        onClose()
      }
    },
    [disabled, onClose, onOpen, open],
  )

  const onActiveDescendant = useCallback(
    (descendant?: ComboboxDescendant) => {
      const target =
        activedescendant === "trigger" ? triggerRef.current : contentRef.current

      if (!target || !descendant || disabled) return

      target.setAttribute("aria-activedescendant", descendant.id)

      descendants.focus(descendant.node)
    },
    [activedescendant, descendants, disabled],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return

      runKeyAction(ev, {
        ArrowDown: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
        ArrowUp: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledLastValue()

            onActiveDescendant(descendant)
          })
        },
        Enter: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
        Space: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
      })
    },
    [descendants, disabled, onActiveDescendant, onOpen],
  )

  const getTriggerProps: PropGetter = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      "aria-controls": contentId,
      "aria-disabled": ariaAttr(!interactive),
      "aria-expanded": open,
      "aria-haspopup": role,
      "aria-labelledby": cx(ariaLabelledby, ariaLabelledbyProp),
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "combobox",
      tabIndex: interactive ? 0 : -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, triggerRef),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
    }),
    [
      contentId,
      interactive,
      open,
      role,
      ariaLabelledbyProp,
      disabled,
      readOnly,
      rest,
      onClick,
      onKeyDown,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: contentId,
      "aria-labelledby": cx(ariaLabelledby, ariaLabelledbyProp),
      role,
      ...props,
      ref: mergeRefs(ref, contentRef),
    }),
    [ariaLabelledbyProp, contentId, role],
  )

  const getSeparatorProps: PropGetter = useCallback(
    (props) => ({ role: "separator", ...props }),
    [],
  )

  return {
    descendants,
    open,
    role,
    getContentProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onOpen,
  }
}

export type UseComboboxReturn = ReturnType<typeof useCombobox>

export interface UseComboboxGroupProps extends HTMLProps {}

export const useComboboxGroup = ({
  "aria-labelledby": ariaLabelledbyProp,
  ...rest
}: UseComboboxGroupProps = {}) => {
  const labelId = useId()

  const getGroupProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      "aria-labelledby": cx(ariaLabelledbyProp, ariaLabelledby, labelId),
      role: "group",
      ...rest,
      ...props,
    }),
    [ariaLabelledbyProp, labelId, rest],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props) => ({ id: labelId, role: "presentation", ...props }),
    [labelId],
  )

  return { getGroupProps, getLabelProps }
}

export type UseComboboxGroupReturn = ReturnType<typeof useComboboxGroup>

export interface UseComboboxItemProps extends HTMLProps {
  /**
   * If `true`, the descendant will be disabled.
   *
   * @default false
   */
  descendantDisabled?: boolean
  /**
   * If `true`, the item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the item will be selected.
   *
   * @default false
   */
  selected?: boolean
}

export const useComboboxItem = ({
  id,
  "aria-disabled": ariaDisabled,
  "data-disabled": dataDisabled,
  disabled = false,
  descendantDisabled = disabled,
  selected,
  ...rest
}: UseComboboxItemProps = {}) => {
  const uuid = useId()
  const itemRef = useRef<HTMLDivElement>(null)
  const {
    role: rootRole = "listbox",
    onActiveDescendant,
    onClose,
  } = useComboboxContext()
  const role = rootRole === "menu" ? "menuitem" : "option"

  id ??= uuid

  const { descendants, register } = useComboboxDescendant({
    id,
    disabled: descendantDisabled,
  })

  const onActive = useCallback(() => {
    if (disabled) return

    const index = descendants.indexOf(itemRef.current)
    const current = descendants.value(index)

    onActiveDescendant(current)
  }, [descendants, disabled, onActiveDescendant])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => {
          const index = descendants.indexOf(itemRef.current)
          const next = descendants.enabledNextValue(index)

          onActiveDescendant(next)
        },
        ArrowUp: () => {
          const index = descendants.indexOf(itemRef.current)
          const prev = descendants.enabledPrevValue(index)

          onActiveDescendant(prev)
        },
        End: () => {
          const last = descendants.enabledLastValue()

          onActiveDescendant(last)
        },
        Home: () => {
          const first = descendants.enabledFirstValue()

          onActiveDescendant(first)
        },
      })
    },
    [descendants, onActiveDescendant],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      "aria-disabled": ariaDisabled ?? ariaAttr(disabled),
      "aria-selected": selected,
      "data-disabled": dataDisabled ?? dataAttr(disabled),
      "data-selected": dataAttr(selected),
      role,
      tabIndex: -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, itemRef, register),
      onFocus: handlerAll(props.onFocus, rest.onFocus, onActive),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      onMouseMove: handlerAll(props.onMouseMove, rest.onMouseMove, onActive),
    }),
    [
      id,
      ariaDisabled,
      disabled,
      selected,
      dataDisabled,
      role,
      rest,
      register,
      onActive,
      onKeyDown,
    ],
  )

  const getIndicatorProps: PropGetter = useCallback(
    ({ style, ...props } = {}) => ({
      style: { opacity: selected ? 1 : 0, ...style },
      ...props,
    }),
    [selected],
  )

  return {
    descendants,
    disabled,
    selected,
    getIndicatorProps,
    getItemProps,
    onActiveDescendant,
    onClose,
  }
}
