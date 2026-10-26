"use client"

import type {
  AnimationEvent,
  FocusEvent,
  KeyboardEvent,
  RefObject,
} from "react"
import type {
  HTMLProps,
  Orientation,
  PropGetter,
  SimpleDirection,
} from "../../core"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { mergeProps } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  assignRef,
  createContext,
  dataAttr,
  mergeRefs,
  useCallbackRef,
} from "../../utils"

export interface MarqueeControl {
  /**
   * Whether the marquee is paused.
   */
  paused: boolean
  /**
   * Pauses the marquee.
   */
  pause: () => void
  /**
   * Restarts the animation, including its delay and loop count.
   */
  restart: () => void
  /**
   * Resumes the marquee.
   */
  resume: () => void
  /**
   * Toggles the pause state.
   */
  togglePause: () => void
}

export interface UseMarqueeProps extends HTMLProps {
  /**
   * Ref of the marquee controls.
   */
  controlRef?: RefObject<MarqueeControl | null>
  /**
   * Whether the marquee is initially paused.
   *
   * @default false
   */
  defaultPaused?: boolean
  /**
   * The delay before the animation starts, in seconds.
   *
   * @default 0
   */
  delay?: number
  /**
   * The direction the content scrolls towards.
   *
   * @default 'start'
   */
  direction?: SimpleDirection
  /**
   * The duration of one loop in seconds. Overrides `speed`.
   */
  duration?: number
  /**
   * The number of animation loops. Set to `0` for infinite loops.
   *
   * @default 0
   */
  loopCount?: number
  /**
   * The orientation of the marquee.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * If `true`, the animation is paused.
   *
   * @default false
   */
  paused?: boolean
  /**
   * If `true`, the animation pauses while an item is focused.
   *
   * @default false
   */
  pauseOnFocus?: boolean
  /**
   * If `true`, the animation pauses on hover.
   *
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * If `true`, the scrolling direction is reversed.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * The scrolling speed in pixels per second.
   *
   * @default 50
   */
  speed?: number
  /**
   * The callback invoked when all finite loops finish.
   */
  onComplete?: () => void
  /**
   * The callback invoked after each animation iteration, except the final one.
   */
  onLoopComplete?: () => void
  /**
   * The callback invoked when the persistent pause state changes.
   */
  onPauseChange?: (paused: boolean) => void
}

interface MarqueeContext extends Pick<
  UseMarqueeReturn,
  "copies" | "getContentProps" | "getEdgeProps" | "getGroupProps"
> {}

const [MarqueeContext, useMarqueeContext] = createContext<MarqueeContext>({
  name: "MarqueeContext",
})

export { MarqueeContext, useMarqueeContext }

export function useMarquee({
  controlRef,
  defaultPaused = false,
  delay = 0,
  dir: dirProp,
  direction = "start",
  duration: durationProp,
  loopCount = 0,
  orientation = "horizontal",
  paused: pausedProp,
  pauseOnFocus = false,
  pauseOnHover = false,
  reverse = false,
  speed = 50,
  onComplete: onCompleteProp,
  onLoopComplete: onLoopCompleteProp,
  onPauseChange,
  ...rest
}: UseMarqueeProps = {}) {
  const { dir: defaultDir } = useI18n()
  const dir = dirProp ?? defaultDir
  const vertical = orientation === "vertical"
  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [paused, setPaused] = useControllableState({
    defaultValue: defaultPaused,
    value: pausedProp,
    onChange: onPauseChange,
  })
  const onComplete = useCallbackRef(onCompleteProp)
  const onLoopComplete = useCallbackRef(onLoopCompleteProp)
  const [size, setSize] = useState({ content: 0, root: 0 })
  const duration = durationProp ?? (speed > 0 ? size.content / speed : 0)
  const ready = size.content > 0 && Number.isFinite(duration) && duration > 0
  const copies = Math.max(
    1,
    size.content > 0 ? Math.ceil(size.root / size.content) : 1,
  )
  const iterations = Number.isFinite(loopCount) && loopCount > 0 ? loopCount : 0
  const animationDirection =
    (direction === "end") !== reverse ? "reverse" : "normal"
  const interactionPaused =
    (pauseOnHover && hovered) || (pauseOnFocus && focused)
  const animationPaused = paused || interactionPaused || completed || !ready

  const pause = useCallback(() => setPaused(true), [setPaused])
  const resume = useCallback(() => setPaused(false), [setPaused])
  const togglePause = useCallback(() => setPaused((prev) => !prev), [setPaused])
  const restart = useCallback(() => {
    trackRef.current?.getAnimations().forEach((animation) => {
      animation.currentTime = 0
    })
    setCompleted(false)
  }, [])
  const control = useMemo<MarqueeControl>(
    () => ({ pause, paused: animationPaused, restart, resume, togglePause }),
    [animationPaused, pause, restart, resume, togglePause],
  )

  assignRef(controlRef, control)

  useEffect(() => {
    const root = rootRef.current
    const content = contentRef.current

    if (!root || !content) return

    const observer = new ResizeObserver((entries) => {
      entries.forEach(({ target, borderBoxSize }) => {
        const box = borderBoxSize[0]

        if (!box) return

        const key = target === root ? "root" : "content"
        const value = vertical ? box.blockSize : box.inlineSize

        setSize((prev) =>
          prev[key] === value ? prev : { ...prev, [key]: value },
        )
      })
    })

    observer.observe(root, { box: "border-box" })
    observer.observe(content, { box: "border-box" })

    return () => observer.disconnect()
  }, [vertical])

  const getRootProps: PropGetter = useCallback(
    (props = {}) =>
      mergeProps(
        {
          style: {
            "--marquee-delay": `${Number.isFinite(delay) ? delay : 0}s`,
            "--marquee-direction": animationDirection,
            "--marquee-distance": `${size.content}px`,
            "--marquee-duration": `${ready ? duration : 0}s`,
            "--marquee-loop-count": iterations || "infinite",
          },
          "aria-keyshortcuts": "Space",
          "aria-live": "off",
          "aria-roledescription": "marquee",
          role: "region",
          tabIndex: 0,
        },
        rest,
        props,
        {
          ref: rootRef,
          "data-complete": dataAttr(completed),
          "data-end": dataAttr(direction === "end"),
          "data-orientation": orientation,
          "data-pause-on-focus": dataAttr(pauseOnFocus),
          "data-pause-on-hover": dataAttr(pauseOnHover),
          "data-paused": dataAttr(animationPaused),
          "data-start": dataAttr(direction === "start"),
          dir,
          onBlurCapture: (ev: FocusEvent<HTMLDivElement>) => {
            if (ev.currentTarget.contains(ev.relatedTarget)) return

            setFocused(false)

            if (!pauseOnFocus) return

            ev.currentTarget.scrollLeft = 0
            ev.currentTarget.scrollTop = 0
          },
          onFocusCapture: () => setFocused(true),
          onKeyDown: (ev: KeyboardEvent<HTMLDivElement>) => {
            if (
              ev.target !== ev.currentTarget ||
              ev.key !== " " ||
              ev.altKey ||
              ev.ctrlKey ||
              ev.metaKey ||
              ev.repeat
            )
              return

            ev.preventDefault()
            togglePause()
          },
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        },
      )(),
    [
      rest,
      direction,
      orientation,
      pauseOnFocus,
      pauseOnHover,
      animationPaused,
      completed,
      ready,
      dir,
      duration,
      animationDirection,
      delay,
      iterations,
      size.content,
      togglePause,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    (props = {}) =>
      mergeProps(props, {
        ref: trackRef,
        "data-marquee-content": "",
        "data-orientation": orientation,
        "data-ready": dataAttr(ready),
        onAnimationEnd: (ev: AnimationEvent<HTMLDivElement>) => {
          if (ev.target !== ev.currentTarget || !iterations) return

          setCompleted(true)
          onComplete()
        },
        onAnimationIteration: (ev: AnimationEvent<HTMLDivElement>) => {
          if (ev.target === ev.currentTarget) onLoopComplete()
        },
      })(),
    [orientation, ready, iterations, onComplete, onLoopComplete],
  )

  const getEdgeProps: PropGetter<"div", { direction?: SimpleDirection }> =
    useCallback(
      ({ direction = "start", ...props } = {}) =>
        mergeProps(props, {
          "aria-hidden": true,
          "data-end": dataAttr(direction === "end"),
          "data-orientation": orientation,
          "data-start": dataAttr(direction === "start"),
          dir,
          inert: true,
        })(),
      [dir, orientation],
    )

  const getGroupProps: PropGetter<"div", { index?: number }> = useCallback(
    ({ id, ref, index = 0, ...props } = {}) =>
      mergeProps({ style: { "--marquee-index": index } }, props, {
        id: index ? undefined : id,
        ref: index ? undefined : mergeRefs(ref, contentRef),
        "aria-hidden": index ? true : undefined,
        "data-clone": dataAttr(!!index),
        "data-orientation": orientation,
        inert: index ? true : undefined,
      })(),
    [orientation],
  )

  return {
    control,
    copies,
    getContentProps,
    getEdgeProps,
    getGroupProps,
    getRootProps,
  }
}

export type UseMarqueeReturn = ReturnType<typeof useMarquee>
