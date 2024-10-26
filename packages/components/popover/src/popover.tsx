import type {
  CSSUIObject,
  FC,
  HTMLUIPropsWithRef,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import type { LazyMode } from "@yamada-ui/use-disclosure"
import type { UsePopperProps } from "@yamada-ui/use-popper"
import type {
  ComponentProps,
  PropsWithChildren,
  RefAttributes,
  RefObject,
} from "react"
import { omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import { useAnimationObserver } from "@yamada-ui/use-animation"
import { useDisclosure, useLazyDisclosure } from "@yamada-ui/use-disclosure"
import {
  useFocusOnHide,
  useFocusOnPointerDown,
  useFocusOnShow,
} from "@yamada-ui/use-focus"
import { popperProperties, usePopper } from "@yamada-ui/use-popper"
import {
  createContext,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  runIfFunc,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef } from "react"

export type PopoverProperty = (typeof popoverProperties)[number]

export const popoverProperties = [
  ...popperProperties,
  "isOpen",
  "defaultIsOpen",
  "onOpen",
  "onClose",
  "initialFocusRef",
  "restoreFocus",
  "autoFocus",
  "closeOnBlur",
  "closeOnEsc",
  "closeOnButton",
  "trigger",
  "openDelay",
  "closeDelay",
  "isLazy",
  "lazyBehavior",
  "animation",
  "duration",
] as const

export interface ComboBoxProps
  extends Omit<
      PopoverOptions,
      | "autoFocus"
      | "closeOnButton"
      | "initialFocusRef"
      | "relatedRef"
      | "restoreFocus"
      | "trigger"
    >,
    Omit<UsePopperProps, "enabled"> {}

interface PopoverOptions {
  /**
   * The animation of the popover.
   *
   * @default 'scale'
   */
  animation?: "bottom" | "left" | "none" | "right" | "scale" | "top"
  /**
   * If `true`, focus will be transferred to the first interactive element when the popover opens.
   *
   * @default true
   */
  autoFocus?: boolean
  /**
   * The number of delay time to close.
   *
   * @default 200
   */
  closeDelay?: number
  /**
   * If `true`, the popover will close when you blur out it by clicking outside or tabbing out.
   *
   * @default true
   */
  closeOnBlur?: boolean
  /**
   * If `true`, display the popover close button.
   *
   * @default true
   */
  closeOnButton?: boolean
  /**
   * If `true`, the popover will close when you hit the `Esc` key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, the popover will be initially opened.
   */
  defaultIsOpen?: boolean
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * The `ref` of the element that should receive focus when the popover opens.
   */
  initialFocusRef?: RefObject<{ focus(): void }>
  /**
   * If `true`, the PopoverContent rendering will be deferred until the popover is open.
   *
   * @default false
   */
  isLazy?: boolean
  /**
   * If `true`, the popover will be opened.
   */
  isOpen?: boolean
  /**
   * The lazy behavior of popover's content when not visible. Only works when `isLazy={true}`
   *
   * - `unmount`: The popover's content is always unmounted when not open.
   * - `keepMounted`: The popover's content initially unmounted, but stays mounted when popover is open.
   *
   * @default 'unmount'
   */
  lazyBehavior?: LazyMode
  /**
   * The number of delay time to open.
   *
   * @default 200
   */
  openDelay?: number
  /**
   * The `ref` of the element related to the popover.
   * This is used during the `onBlur` event.
   */
  relatedRef?: RefObject<HTMLElement>
  /**
   * If `true`, focus will be returned to the element that triggers the popover when it closes.
   *
   * @default true
   */
  restoreFocus?: boolean
  /**
   * The interaction that triggers the popover.
   *
   * - `hover`: means the popover will open when you hover with mouse or focus with keyboard on the popover trigger.
   * - `click`: means the popover will open on click or press `Enter` to `Space` on keyboard.
   *
   * @default 'click'
   */
  trigger?: "click" | "contextmenu" | "hover" | "never"
  /**
   * Callback fired when the popover closes.
   */
  onClose?: () => void
  /**
   * Callback fired when the popover opens.
   */
  onOpen?: () => void
}

export interface PopoverProps
  extends ThemeProps<"Popover">,
    Omit<UsePopperProps, "enabled">,
    PropsWithChildren<PopoverOptions> {}

interface PopoverContext
  extends Pick<
    PopoverOptions,
    "animation" | "closeOnButton" | "duration" | "isOpen" | "onClose"
  > {
  describedbyId: string
  forceUpdate: () => undefined | void
  labelledbyId: string
  styles: { [key: string]: CSSUIObject | undefined }
  getAnchorProps: PropGetter
  getPopoverProps: PropGetter<MotionProps<"section">, MotionProps<"section">>
  getPopperProps: PropGetter<ComponentProps<"div">>
  getTriggerProps: PropGetter
  onAnimationComplete: () => void
}

const [PopoverProvider, usePopover] = createContext<PopoverContext>({
  name: "PopoverContext",
  errorMessage: `usePopoverContext returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />"`,
})

export { usePopover }

/**
 * `Popover` is a component that floats around an element to display information.
 *
 * @see Docs https://yamada-ui.com/components/overlay/popover
 */
export const Popover: FC<PopoverProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Popover", props)
  const {
    animation = "scale",
    autoFocus = true,
    children,
    closeDelay = 200,
    closeOnBlur = true,
    closeOnButton = true,
    closeOnEsc = true,
    duration,
    initialFocusRef,
    isLazy,
    lazyBehavior = "unmount",
    openDelay = 200,
    relatedRef,
    restoreFocus = true,
    trigger = "click",
    ...rest
  } = omitThemeProps(mergedProps)

  const popoverId = useId()
  const labelledbyId = useId()
  const describedbyId = useId()

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure(mergedProps)

  const anchorRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const popoverRef = useRef<HTMLElement>(null)

  const { present, onAnimationComplete } = useAnimationObserver({
    ref: popoverRef,
    isOpen,
  })

  const openTimeout = useRef<number | undefined>(undefined)
  const closeTimeout = useRef<number | undefined>(undefined)

  const isHoveringRef = useRef(false)

  const hasBeenOpened = useRef(false)

  if (isOpen) hasBeenOpened.current = true

  const { forceUpdate, referenceRef, transformOrigin, getPopperProps } =
    usePopper({
      ...rest,
      enabled: isOpen,
    })

  useEffect(() => {
    return () => {
      if (openTimeout.current) clearTimeout(openTimeout.current)

      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  useFocusOnPointerDown({
    ref: triggerRef,
    enabled: isOpen,
  })

  useFocusOnHide(popoverRef, {
    focusRef: triggerRef,
    shouldFocus:
      restoreFocus && (trigger === "click" || trigger === "contextmenu"),
    visible: isOpen,
  })

  useFocusOnShow(popoverRef, {
    focusRef: initialFocusRef,
    shouldFocus:
      autoFocus && (trigger === "click" || trigger === "contextmenu"),
    visible: isOpen,
  })

  const shouldRenderChildren = useLazyDisclosure({
    enabled: isLazy,
    isSelected: present,
    mode: lazyBehavior,
    wasSelected: hasBeenOpened.current,
  })

  const getPopoverProps: PropGetter<
    MotionProps<"section">,
    MotionProps<"section">
  > = useCallback(
    (props = {}, ref = null) => {
      const popoverProps: MotionProps & RefAttributes<any> = {
        ...props,
        ref: mergeRefs(popoverRef, ref),
        style: {
          ...props.style,
          transformOrigin,
        },
        "aria-controls": popoverId,
        children: shouldRenderChildren ? props.children : null,
        tabIndex: -1,
        onBlur: handlerAll(props.onBlur, (ev) => {
          const relatedTarget = getEventRelatedTarget(ev)
          const targetIsPopover = isContains(popoverRef.current, relatedTarget)
          const targetIsTrigger = isContains(triggerRef.current, relatedTarget)
          const targetIsRelated = relatedRef?.current
            ? isContains(relatedRef.current, relatedTarget)
            : false

          const isValidBlur =
            !targetIsPopover && !targetIsTrigger && !targetIsRelated

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        }),
        onKeyDown: handlerAll(props.onKeyDown, (ev) => {
          if (closeOnEsc && ev.key === "Escape") onClose()
        }),
      }

      if (trigger === "hover") {
        popoverProps.onMouseEnter = handlerAll(props.onMouseEnter, () => {
          isHoveringRef.current = true
        })

        popoverProps.onMouseLeave = handlerAll(props.onMouseLeave, (ev) => {
          if (ev.nativeEvent.relatedTarget === null) return

          isHoveringRef.current = false

          if (closeOnBlur) setTimeout(onClose, closeDelay)
        })
      }

      return popoverProps
    },
    [
      closeDelay,
      closeOnBlur,
      closeOnEsc,
      isOpen,
      onClose,
      shouldRenderChildren,
      transformOrigin,
      trigger,
      relatedRef,
      popoverId,
    ],
  )

  const maybeReferenceRef = useCallback(
    (node: Element) => {
      if (anchorRef.current == null) referenceRef(node)
    },
    [referenceRef],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const triggerProps: HTMLUIPropsWithRef = {
        ...props,
        ref: mergeRefs(triggerRef, ref, maybeReferenceRef),
        "aria-controls": isOpen ? "true" : undefined,
      }

      if (trigger === "click") {
        triggerProps.onClick = handlerAll(props.onClick, onToggle)
        triggerProps.onBlur = handlerAll(props.onBlur, (ev) => {
          const relatedTarget = getEventRelatedTarget(ev)
          const isValidBlur = !isContains(popoverRef.current, relatedTarget)

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        })
      }

      if (trigger === "contextmenu") {
        triggerProps.onContextMenu = handlerAll(props.onContextMenu, (ev) => {
          ev.preventDefault()
          onOpen()
        })
        triggerProps.onBlur = handlerAll(props.onBlur, (ev) => {
          const relatedTarget = getEventRelatedTarget(ev)
          const isValidBlur = !isContains(popoverRef.current, relatedTarget)

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        })
      }

      if (trigger === "hover") {
        triggerProps.onFocus = handlerAll(props.onFocus, () => {
          if (openTimeout.current === undefined) onOpen()
        })

        triggerProps.onBlur = handlerAll(props.onBlur, (ev) => {
          const relatedTarget = getEventRelatedTarget(ev)
          const isValidBlur = !isContains(popoverRef.current, relatedTarget)

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        })

        triggerProps.onKeyDown = handlerAll(props.onKeyDown, (ev) => {
          if (ev.key === "Escape") onClose()
        })

        triggerProps.onMouseEnter = handlerAll(props.onMouseEnter, () => {
          isHoveringRef.current = true
          openTimeout.current = window.setTimeout(onOpen, openDelay)
        })

        triggerProps.onMouseLeave = handlerAll(props.onMouseLeave, () => {
          isHoveringRef.current = false

          if (openTimeout.current) {
            clearTimeout(openTimeout.current)
            openTimeout.current = undefined
          }

          closeTimeout.current = window.setTimeout(() => {
            if (!isHoveringRef.current) onClose()
          }, closeDelay)
        })
      }

      return triggerProps
    },
    [
      closeDelay,
      closeOnBlur,
      isOpen,
      maybeReferenceRef,
      onClose,
      onOpen,
      onToggle,
      openDelay,
      trigger,
    ],
  )

  const getAnchorProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        ...props,
        ref: mergeRefs(ref, anchorRef, referenceRef),
      }
    },
    [anchorRef, referenceRef],
  )

  return (
    <PopoverProvider
      value={{
        animation,
        closeOnButton,
        describedbyId,
        duration,
        forceUpdate,
        isOpen,
        labelledbyId,
        styles,
        getAnchorProps,
        getPopoverProps,
        getPopperProps,
        getTriggerProps,
        onAnimationComplete,
        onClose,
      }}
    >
      {runIfFunc(children, {
        forceUpdate,
        isOpen,
        onClose,
      })}
    </PopoverProvider>
  )
}

Popover.displayName = "Popover"
Popover.__ui__ = "Popover"
