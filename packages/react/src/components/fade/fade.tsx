import type { Variants } from "motion/react"
import type { ThemeProps } from "../../core"
import type {
  HTMLMotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import type { FadeStyle } from "./fade.style"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createComponent } from "../../core"
import { createTransition, Motion } from "../motion"
import { fadeStyle } from "./fade.style"

export const fadeVariants: Variants = {
  enter: ({ delay, duration, enter, transition, transitionEnd } = {}) => ({
    opacity: 1,
    transition: createTransition.enter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ delay, duration, exit, transition, transitionEnd } = {}) => ({
    opacity: 0,
    transition: createTransition.exit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export interface FadeProps
  extends WithTransitionProps<HTMLMotionProps>,
    ThemeProps<FadeStyle> {}

export const {
  PropsContext: FadePropsContext,
  usePropsContext: useFadePropsContext,
  withContext,
} = createComponent<FadeProps, FadeStyle>("fade", fadeStyle)

/**
 * `Fade` is a component that gradually shows or hides an element.
 *
 * @see Docs https://yamada-ui.com/components/fade
 */
export const Fade = withContext(
  ({
    delay,
    duration,
    open: openProp,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const animate = openProp || unmountOnExit ? "enter" : "exit"
    const open = unmountOnExit ? openProp && unmountOnExit : true

    const custom = useMemo(
      () => ({
        delay,
        duration,
        transition,
        transitionEnd,
      }),
      [delay, duration, transition, transitionEnd],
    )

    return (
      <AnimatePresence custom={custom}>
        {open ? (
          <Motion
            animate={animate}
            custom={custom}
            exit="exit"
            initial="exit"
            variants={fadeVariants}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)()
