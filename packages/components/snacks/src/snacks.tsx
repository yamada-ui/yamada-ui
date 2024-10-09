import type { CSSUIObject, ThemeConfig } from "@yamada-ui/core"
import type { MotionProps, MotionVariants } from "@yamada-ui/motion"
import type { RefObject } from "react"
import type { Snack, UseSnacksOptions, UseSnacksReturn } from "./use-snacks"
import { forwardRef, ui, useTheme } from "@yamada-ui/core"
import {
  AnimatePresence,
  motion,
  motionForwardRef,
  useIsPresent,
} from "@yamada-ui/motion"
import { useTimeout } from "@yamada-ui/use-timeout"
import { calc, cx, noop, runIfFunc, useUpdateEffect } from "@yamada-ui/utils"
import { createRef, memo, useEffect, useMemo, useRef, useState } from "react"

const defaultContainerVariants: MotionVariants = {
  animate: ({ gutter }) => ({
    padding: `${gutter[0]} 0 ${gutter[1]}`,
    transition: { duration: 0.4 },
  }),
  exit: { padding: 0 },
  initial: { padding: 0 },
}

const defaultListVariants: MotionVariants = {
  animate: ({ height }) => ({
    height,
    opacity: 1,
    transition: { duration: 0.4 },
  }),
  exit: { height: 0, opacity: 0 },
  initial: { height: 0, opacity: 1 },
}

interface SnacksOptions {
  snacks: UseSnacksReturn["snacks"]
  /**
   * The variants of the snacks container.
   * Check the docs to see the variants of possible modifiers you can pass.
   *
   * @see Docs https://www.framer.com/motion/animation/#variants
   */
  containerVariants?: MotionVariants
  /**
   * The variants of the snacks list.
   * Check the docs to see the variants of possible modifiers you can pass.
   *
   * @see Docs https://www.framer.com/motion/animation/#variants
   */
  listVariants?: MotionVariants
  /**
   * Props for the snacks list element.
   */
  listProps?: MotionProps<"ul">
}

export interface SnacksProps
  extends Omit<MotionProps, "direction" | "whileHover">,
    SnacksOptions,
    Pick<UseSnacksOptions, "direction" | "startIndex">,
    Pick<
      Required<ThemeConfig>["snacks"],
      "gutter" | "negateMargin" | "variants"
    > {}

export const Snacks = motionForwardRef<SnacksProps, "div">(
  (
    {
      className,
      containerVariants = defaultContainerVariants,
      listVariants = defaultListVariants,
      snacks,
      listProps,
      ...props
    },
    ref,
  ) => {
    const { items, ...computedSnacks } = snacks
    const count = items.length

    const refMap = useRef<Map<number, RefObject<HTMLLIElement>>>(new Map())
    const [height, setHeight] = useState<number>(0)
    const [isExist, setIsExist] = useState<boolean>(!!count)
    const { theme } = useTheme()
    const {
      direction = "top",
      gap = "fallback(4, 1rem)",
      gutter = [0, 0],
      negateMargin = true,
      startIndex = 0,
      variants,
      ...rest
    } = useMemo(
      () => ({ ...computedSnacks, ...theme.__config?.snacks, ...props }),
      [computedSnacks, theme, props],
    )

    const top = "var(--ui-top)"
    const bottom = "var(--ui-bottom)"
    const negatedTop = calc(top).negate().toString()
    const negatedBottom = calc(bottom).negate().toString()
    const isShow = !!count || isExist

    const css: CSSUIObject = {
      margin: negateMargin ? `${negatedTop} 0 ${negatedBottom}` : undefined,
      vars: [
        { name: "gap", token: "spaces", value: gap },
        {
          name: "top",
          token: "spaces",
          value: gutter[0] || "0px",
          __prefix: "ui",
        },
        {
          name: "bottom",
          token: "spaces",
          value: gutter[1] || "0px",
          __prefix: "ui",
        },
      ],
      w: "100%",
    }

    useEffect(() => {
      let height = 0

      if (!count) return

      const refs = [...refMap.current.values()].slice(0, count)

      for (const ref of refs) {
        if (!ref.current) continue

        let { offsetHeight, offsetTop } = ref.current

        offsetHeight += offsetTop

        if (offsetHeight > height) height = offsetHeight
      }

      setHeight(height)
    }, [count, direction])

    useUpdateEffect(() => {
      if (!!count) setIsExist(true)
    }, [count])

    return (
      <AnimatePresence initial={false}>
        {isShow ? (
          <motion.div
            ref={ref}
            className={cx("ui-snacks", className)}
            animate="animate"
            custom={{ gutter: [top, bottom] }}
            exit="exit"
            initial="initial"
            variants={containerVariants}
            __css={css}
            {...rest}
          >
            <motion.ul
              className="ui-snacks__list"
              animate="animate"
              custom={{ height }}
              exit="exit"
              initial="initial"
              variants={listVariants}
              __css={{
                position: "relative",
                w: "100%",
              }}
              {...listProps}
            >
              <AnimatePresence
                onExitComplete={() => {
                  if (!count) setIsExist(false)
                }}
              >
                {items.map((props, index) => {
                  const ref = createRef<HTMLLIElement>()

                  refMap.current.set(index, ref)

                  return (
                    <SnackComponent
                      key={props.id}
                      ref={ref}
                      direction={direction}
                      index={index}
                      lastIndex={count - index - 1}
                      startIndex={startIndex}
                      variants={variants}
                      {...props}
                    />
                  )
                })}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    )
  },
)

const defaultItemVariants: MotionVariants = {
  animate: ({ index }) => ({
    opacity: 1,
    transition: {
      delay: !index ? 0.4 : 0,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
    y: 0,
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
  initial: ({ direction, index }) => ({
    opacity: 0,
    ...(index ? { y: (direction === "top" ? -1 : 1) * 16 } : {}),
  }),
}

interface SnackComponentOptions {
  index: number
  lastIndex: number
}

type SnackComponentProps = Pick<
  Required<SnacksProps>,
  "direction" | "startIndex"
> &
  Pick<SnacksProps, "variants"> &
  Snack &
  SnackComponentOptions

const SnackComponent = memo(
  forwardRef<SnackComponentProps, "li">(
    (
      {
        style,
        direction,
        duration = null,
        index,
        lastIndex,
        message,
        startIndex,
        variants = defaultItemVariants,
        onClose: onCloseProp,
        onCloseComplete,
      },
      ref,
    ) => {
      const [delay, setDelay] = useState(duration)
      const isPresent = useIsPresent()

      const onClose = isPresent ? onCloseProp : noop
      const onMouseEnter = () => setDelay(null)
      const onMouseLeave = () => setDelay(duration)

      const zIndex = startIndex + index
      const gap = `calc($gap * ${direction === "top" ? lastIndex : index})`

      const css: CSSUIObject = {
        left: 0,
        maxW: "100%",
        position: "absolute",
        right: 0,
        top: gap,
        w: "100%",
        zIndex,
        ...style,
      }

      useUpdateEffect(() => {
        if (!isPresent) onCloseComplete?.()
      }, [isPresent])

      useUpdateEffect(() => {
        setDelay(duration)
      }, [duration])

      useTimeout(onClose, delay)

      return (
        <ui.li ref={ref} className="ui-snacks__item" __css={css}>
          <motion.div
            className="ui-snacks__item-inner"
            animate="animate"
            custom={{ direction, index, lastIndex }}
            exit="exit"
            initial="initial"
            layout
            variants={variants}
            onHoverEnd={onMouseLeave}
            onHoverStart={onMouseEnter}
          >
            {runIfFunc(message, { index, onClose })}
          </motion.div>
        </ui.li>
      )
    },
  ),
)

SnackComponent.displayName = "SnackComponent"
