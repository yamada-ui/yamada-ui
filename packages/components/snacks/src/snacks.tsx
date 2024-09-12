import type { CSSUIObject, ThemeConfig } from "@yamada-ui/core"
import { ui, forwardRef, useTheme } from "@yamada-ui/core"
import type { MotionProps, MotionVariants } from "@yamada-ui/motion"
import {
  AnimatePresence,
  motion,
  motionForwardRef,
  useIsPresent,
} from "@yamada-ui/motion"
import { useTimeout } from "@yamada-ui/use-timeout"
import { useToken } from "@yamada-ui/use-token"
import { useValue } from "@yamada-ui/use-value"
import { calc, cx, noop, runIfFunc, useUpdateEffect } from "@yamada-ui/utils"
import type { RefObject } from "react"
import { createRef, memo, useEffect, useMemo, useRef, useState } from "react"
import type { Snack, UseSnacksOptions, UseSnacksReturn } from "./use-snacks"

const defaultContainerVariants: MotionVariants = {
  initial: { padding: 0 },
  animate: ({ gutter }) => ({
    padding: `${gutter[0]} 0 ${gutter[1]}`,
    transition: { duration: 0.4 },
  }),
  exit: { padding: 0 },
}

const defaultListVariants: MotionVariants = {
  initial: { opacity: 1, height: 0 },
  animate: ({ height }) => ({
    opacity: 1,
    height,
    transition: { duration: 0.4 },
  }),
  exit: { opacity: 0, height: 0 },
}

type SnacksOptions = {
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

export type SnacksProps = Omit<MotionProps<"div">, "direction"> &
  SnacksOptions &
  Pick<UseSnacksOptions, "direction" | "startIndex"> &
  Pick<Required<ThemeConfig>["snacks"], "variants" | "gutter" | "negateMargin">

export const Snacks = motionForwardRef<SnacksProps, "div">(
  (
    {
      className,
      snacks,
      containerVariants = defaultContainerVariants,
      listVariants = defaultListVariants,
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
      variants,
      direction = "top",
      startIndex = 0,
      gutter = [0, 0],
      gap = "fallback(4, 1rem)",
      negateMargin = true,
      ...rest
    } = useMemo(
      () => ({ ...computedSnacks, ...theme.__config?.snacks, ...props }),
      [computedSnacks, theme, props],
    )
    const _top = useValue(gutter[0])
    const _bottom = useValue(gutter[1])
    const top = useToken("spaces", _top) ?? 0
    const bottom = useToken("spaces", _bottom) ?? 0
    const negatedTop = calc(top).negate().toString()
    const negatedBottom = calc(bottom).negate().toString()
    const isShow = !!count || isExist

    const css: CSSUIObject = {
      w: "100%",
      margin: negateMargin ? `${negatedTop} 0 ${negatedBottom}` : undefined,
      vars: [{ name: "space", token: "spaces", value: gap }],
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
            __css={css}
            variants={containerVariants}
            custom={{ gutter: [top, bottom] }}
            initial="initial"
            animate="animate"
            exit="exit"
            {...rest}
          >
            <motion.ul
              className="ui-snacks__list"
              variants={listVariants}
              custom={{ height }}
              initial="initial"
              animate="animate"
              exit="exit"
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
                      index={index}
                      lastIndex={count - index - 1}
                      startIndex={startIndex}
                      variants={variants}
                      direction={direction}
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
  initial: ({ index, direction }) => ({
    opacity: 0,
    ...(index ? { y: (direction === "top" ? -1 : 1) * 16 } : {}),
  }),
  animate: ({ index }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: !index ? 0.4 : 0,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
}

type SnackComponentOptions = {
  index: number
  lastIndex: number
}

type SnackComponentProps = Snack &
  Pick<SnacksProps, "variants"> &
  Pick<Required<SnacksProps>, "direction" | "startIndex"> &
  SnackComponentOptions

const SnackComponent = memo(
  forwardRef<SnackComponentProps, "li">(
    (
      {
        index,
        lastIndex,
        startIndex,
        direction,
        variants = defaultItemVariants,
        duration = null,
        message,
        onClose: onCloseProp,
        onCloseComplete,
        style,
      },
      ref,
    ) => {
      const [delay, setDelay] = useState(duration)
      const isPresent = useIsPresent()

      const onClose = isPresent ? onCloseProp : noop
      const onMouseEnter = () => setDelay(null)
      const onMouseLeave = () => setDelay(duration)

      const zIndex = startIndex + index
      const space = `calc($space * ${direction === "top" ? lastIndex : index})`

      const css: CSSUIObject = {
        position: "absolute",
        top: space,
        left: 0,
        right: 0,
        zIndex,
        w: "100%",
        maxW: "100%",
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
            layout
            variants={variants}
            custom={{ index, lastIndex, direction }}
            initial="initial"
            animate="animate"
            exit="exit"
            onHoverStart={onMouseEnter}
            onHoverEnd={onMouseLeave}
          >
            {runIfFunc(message, { index, onClose })}
          </motion.div>
        </ui.li>
      )
    },
  ),
)

SnackComponent.displayName = "SnackComponent"
