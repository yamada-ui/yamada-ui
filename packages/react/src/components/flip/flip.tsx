"use client"

import type { Variants } from "motion/react"
import type { ReactNode } from "react"
import type { KeyframeIdent, Orientation, ThemeProps } from "../../core"
import type { HTMLMotionProps } from "../motion"
import type { FlipStyle } from "./flip.style"
import { useMemo, useRef, useState } from "react"
import { createSlotComponent } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { dataAttr, handlerAll, useSafeLayoutEffect } from "../../utils"
import { motion } from "../motion"
import { flipStyle } from "./flip.style"

const flipVariants: Variants = {
  enter: ({ ident, orientation, visible }) => ({
    [orientation === "horizontal" ? "rotateY" : "rotateX"]:
      ident === "from" ? (visible ? 180 : 0) : visible ? 0 : 180,
  }),
  exit: ({ ident, orientation }) => ({
    [orientation === "horizontal" ? "rotateY" : "rotateX"]:
      ident === "from" ? 0 : 180,
  }),
}

interface Rect {
  height?: number
  width?: number
}

export interface FlipProps
  extends Omit<HTMLMotionProps<"button">, "onChange">,
    ThemeProps<FlipStyle> {
  /**
   * Passing React elements to "from" is required.
   */
  from: ReactNode
  /**
   * Passing React elements to "to" is required.
   */
  to: ReactNode
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: KeyframeIdent
  /**
   *　The animation delay.
   *
   * @default 0
   */
  delay?: number
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The animation duration.
   *
   * @default 0.4
   */
  duration?: number
  /**
   * The orientation of the flip effect. Determines whether the flip occurs horizontally or vertically.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: KeyframeIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: KeyframeIdent) => void
}

export const {
  PropsContext: FlipPropsContext,
  usePropsContext: useFlipPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<FlipProps, FlipStyle>("flip", flipStyle)

/**
 * `Flip` is an animation component that alternates between flipping two elements.
 *
 * @see https://yamada-ui.com/components/flip
 */
export const Flip = withProvider(
  ({
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.4,
    from,
    orientation = "horizontal",
    readOnly,
    to,
    transition = {},
    value: valueProp,
    onChange,
    onClick: onClickProp,
    ...rest
  }) => {
    const [{ height, width }, setRect] = useState<Rect>({})
    const fromRef = useRef<HTMLDivElement | null>(null)
    const toRef = useRef<HTMLDivElement | null>(null)
    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange,
    })
    const visible = value === "to"

    const style = useMemo(
      () => ({
        height: height ? `${height}px` : "auto",
        width: width ? `${width}px` : "auto",
      }),
      [width, height],
    )

    const onClick = () => {
      if (readOnly) return

      setValue((prev) => (prev === "from" ? "to" : "from"))
    }

    useSafeLayoutEffect(() => {
      const from = fromRef.current
      const to = toRef.current

      if (!from || !to) return

      if (
        from.offsetWidth !== to.offsetWidth ||
        from.offsetHeight !== to.offsetHeight
      ) {
        console.warn(
          `Flip: "from" element (width: ${from.offsetWidth}px, height: ${from.offsetHeight}px) does not match "to" element (width: ${to.offsetWidth}px, height: ${to.offsetHeight}px). Please ensure both elements have the same dimensions.`,
        )
      }

      setRect({ height: from.offsetHeight, width: from.offsetWidth })
    }, [fromRef, toRef])

    return (
      <motion.button
        type="button"
        style={style}
        data-disabled={dataAttr(disabled)}
        data-orientation={orientation}
        data-readonly={dataAttr(readOnly)}
        data-value={value}
        disabled={disabled}
        onClick={handlerAll(onClickProp, onClick)}
        {...rest}
      >
        <FlipFrom
          ref={fromRef}
          custom={{ orientation, visible }}
          transition={{ delay, duration, ...transition }}
        >
          {from}
        </FlipFrom>

        <FlipTo
          ref={toRef}
          custom={{ orientation, visible }}
          transition={{ delay, duration, ...transition }}
        >
          {to}
        </FlipTo>
      </motion.button>
    )
  },
  "root",
)()

interface FlipFromProps extends HTMLMotionProps<"span"> {}

const FlipFrom = withContext<"span", FlipFromProps>(
  ({ custom, ...rest }) => {
    return (
      <motion.span
        animate="enter"
        custom={{ ident: "from", ...custom }}
        initial="exit"
        variants={flipVariants}
        {...rest}
      />
    )
  },
  ["item", "from"],
)()

interface FlipToProps extends HTMLMotionProps<"span"> {}

const FlipTo = withContext<"span", FlipToProps>(
  ({ custom, ...rest }) => {
    return (
      <motion.span
        animate="enter"
        custom={{ ident: "to", ...custom }}
        initial="exit"
        variants={flipVariants}
        {...rest}
      />
    )
  },
  ["item", "to"],
)()
