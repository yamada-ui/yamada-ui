import { useMultiComponentStyle, omitThemeProps, CSSUIObject, ThemeProps } from '@yamada-ui/core'
import { MotionTransitionProperties } from '@yamada-ui/motion'
import { useAnimationObserver } from '@yamada-ui/use-animation'
import { useDisclosure, useLazyDisclosure, LazyMode } from '@yamada-ui/use-disclosure'
import { useFocusOnHide, useFocusOnShow, useFocusOnPointerDown } from '@yamada-ui/use-focus'
import { usePopper, UsePopperProps } from '@yamada-ui/use-popper'
import {
  createContext,
  DOMAttributes,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  PropGetter,
  runIfFunc,
} from '@yamada-ui/utils'
import { FC, PropsWithChildren, RefObject, useCallback, useEffect, useRef } from 'react'

type PopoverOptions = {
  /**
   * If `true`, the popover will be opened.
   */
  isOpen?: boolean
  /**
   * If `true`, the popover will be initially opened.
   */
  defaultIsOpen?: boolean
  /**
   * Callback fired when the popover opens.
   */
  onOpen?: () => void
  /**
   * Callback fired when the popover closes.
   */
  onClose?: () => void
  /**
   * The `ref` of the element that should receive focus when the popover opens.
   */
  initialFocusRef?: RefObject<{ focus(): void }>
  /**
   * If `true`, focus will be returned to the element that triggers the popover when it closes.
   *
   * @default true
   */
  restoreFocus?: boolean
  /**
   * If `true`, focus will be transferred to the first interactive element when the popover opens.
   *
   * @default true
   */
  autoFocus?: boolean
  /**
   * If `true`, the popover will close when you blur out it by clicking outside or tabbing out.
   *
   * @default true
   */
  closeOnBlur?: boolean
  /**
   * If `true`, the popover will close when you hit the `Esc` key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, display the popover close button.
   *
   * @default true
   */
  closeOnButton?: boolean
  /**
   * The interaction that triggers the popover.
   *
   * - `hover`: means the popover will open when you hover with mouse or focus with keyboard on the popover trigger.
   * - `click`: means the popover will open on click or press `Enter` to `Space` on keyboard.
   *
   * @default 'click'
   */
  trigger?: 'click' | 'hover' | 'never'
  /**
   * The number of delay time to open.
   *
   * @default 200
   */
  openDelay?: number
  /**
   * The number of delay time to close.
   *
   * @default 200
   */
  closeDelay?: number
  /**
   * If `true`, the PopoverContent rendering will be deferred until the popover is open.
   *
   * @default false
   */
  isLazy?: boolean
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
   * The animation of the popover.
   *
   * @default 'scale'
   */
  animation?: 'scale' | 'top' | 'right' | 'left' | 'bottom' | 'none'
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProperties['duration']
}

export type PopoverProps = ThemeProps<'Popover'> &
  Omit<UsePopperProps, 'enabled'> &
  PropsWithChildren<PopoverOptions>

type PopoverContext = Pick<
  PopoverOptions,
  'isOpen' | 'onClose' | 'closeOnButton' | 'animation' | 'duration'
> & {
  onAnimationComplete: () => void
  forceUpdate: () => void | undefined
  getTriggerProps: PropGetter
  getAnchorProps: PropGetter
  getPopperProps: PropGetter
  getPopoverProps: PropGetter
  styles: Record<string, CSSUIObject>
}

const [PopoverProvider, usePopover] = createContext<PopoverContext>({
  strict: false,
  name: 'PopoverContext',
})

export { usePopover }

export const Popover: FC<PopoverProps> = (props) => {
  const [styles, mergedProps] = useMultiComponentStyle('Popover', props)
  const {
    children,
    initialFocusRef,
    restoreFocus = true,
    autoFocus = true,
    closeOnBlur = true,
    closeOnEsc = true,
    closeOnButton = true,
    trigger = 'click',
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = 'unmount',
    animation = 'scale',
    duration,
    ...rest
  } = omitThemeProps(mergedProps)

  const [isOpen, onOpen, onClose, onToggle] = useDisclosure(mergedProps)

  const anchorRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const popoverRef = useRef<HTMLElement>(null)

  const { present, onAnimationComplete } = useAnimationObserver({ isOpen, ref: popoverRef })

  const openTimeout = useRef<number | undefined>(undefined)
  const closeTimeout = useRef<number | undefined>(undefined)

  const isHoveringRef = useRef(false)

  const hasBeenOpened = useRef(false)

  if (isOpen) hasBeenOpened.current = true

  const { referenceRef, getPopperProps, forceUpdate, transformOrigin } = usePopper({
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
    enabled: isOpen,
    ref: triggerRef,
  })

  useFocusOnHide(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: restoreFocus && trigger === 'click',
  })

  useFocusOnShow(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger === 'click',
  })

  const shouldRenderChildren = useLazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: present,
  })

  const getPopoverProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const popoverProps: DOMAttributes = {
        ...props,
        style: {
          ...props.style,
          transformOrigin,
        },
        ref: mergeRefs(popoverRef, ref),
        children: shouldRenderChildren ? props.children : null,
        tabIndex: -1,
        onKeyDown: handlerAll(props.onKeyDown, (event) => {
          if (closeOnEsc && event.key === 'Escape') onClose()
        }),
        onBlur: handlerAll(props.onBlur, (event) => {
          const relatedTarget = getEventRelatedTarget(event)
          const targetIsPopover = isContains(popoverRef.current, relatedTarget)
          const targetIsTrigger = isContains(triggerRef.current, relatedTarget)

          const isValidBlur = !targetIsPopover && !targetIsTrigger

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        }),
      }

      if (trigger === 'hover') {
        popoverProps.onMouseEnter = handlerAll(props.onMouseEnter, () => {
          isHoveringRef.current = true
        })

        popoverProps.onMouseLeave = handlerAll(props.onMouseLeave, (event) => {
          if (event.nativeEvent.relatedTarget === null) return

          isHoveringRef.current = false
          setTimeout(onClose, closeDelay)
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
      const triggerProps: DOMAttributes = {
        ...props,
        ref: mergeRefs(triggerRef, ref, maybeReferenceRef),
      }

      if (trigger === 'click') triggerProps.onClick = handlerAll(props.onClick, onToggle)

      if (trigger === 'hover') {
        triggerProps.onFocus = handlerAll(props.onFocus, () => {
          if (openTimeout.current === undefined) onOpen()
        })

        triggerProps.onBlur = handlerAll(props.onBlur, (event) => {
          const relatedTarget = getEventRelatedTarget(event)
          const isValidBlur = !isContains(popoverRef.current, relatedTarget)

          if (isOpen && closeOnBlur && isValidBlur) onClose()
        })

        triggerProps.onKeyDown = handlerAll(props.onKeyDown, (event) => {
          if (event.key === 'Escape') onClose()
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
            if (isHoveringRef.current === false) onClose()
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
        isOpen,
        onClose,
        closeOnButton,
        onAnimationComplete,
        forceUpdate,
        getTriggerProps,
        getAnchorProps,
        getPopperProps,
        getPopoverProps,
        animation,
        duration,
        styles,
      }}
    >
      {runIfFunc(children, {
        isOpen,
        onClose,
        forceUpdate,
      })}
    </PopoverProvider>
  )
}
