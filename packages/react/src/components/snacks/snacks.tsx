"use client"

import type { Dispatch, RefObject, SetStateAction } from "react"
import type { CSSProps, HTMLStyledProps, SimpleDirection } from "../../core"
import type { Merge } from "../../utils"
import type { CloseButtonProps } from "../close-button"
import type { HTMLMotionProps } from "../motion"
import type { SnacksStyle } from "./snacks.style"
import type { Snack, UseSnacksReturn } from "./use-snacks"
import { AnimatePresence, useIsPresent } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createSlotComponent, varAttr } from "../../core"
import { useTimeout } from "../../hooks/use-timeout"
import { dataAttr, handlerAll, noop, useUpdateEffect } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { createTransition, motion } from "../motion"
import { snacksStyle } from "./snacks.style"

interface ComponentContext {
  direction: SimpleDirection
  elMapRef: RefObject<Map<number, HTMLDivElement | null>>
  setExist: Dispatch<SetStateAction<boolean>>
  startIndex: number
}

export interface SnacksProps extends HTMLMotionProps {
  /**
   * The CSS `gap` property.
   *
   * @default 'md'
   */
  gap?: CSSProps["gap"]
  /**
   * A property that provides spacing between the top and bottom.
   *
   * @default [0, "lg"]
   */
  gutter?: [CSSProps["paddingTop"], CSSProps["paddingBottom"]]
  /**
   * If `true`, apply gutter value to negative margins
   *
   * @default true
   */
  negativeMargins?: boolean
  /**
   * The snacks created by `useSnacks`.
   */
  snacks: UseSnacksReturn["snacks"]
  /**
   * Props for the snacks list element.
   */
  listProps?: HTMLMotionProps
}

const {
  ComponentContext,
  PropsContext: SnacksPropsContext,
  useComponentContext,
  usePropsContext: useSnacksPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SnacksProps, SnacksStyle, ComponentContext>(
  "snacks",
  snacksStyle,
)

export { SnacksPropsContext, useSnacksPropsContext }

export const Snacks = withProvider<"div", SnacksProps>(
  ({
    snacks: { direction = "start", items, startIndex = 0 },
    listProps,
    ...rest
  }) => {
    const count = items.length
    const elMapRef = useRef<Map<number, HTMLDivElement | null>>(new Map())
    const [height, setHeight] = useState(0)
    const [exist, setExist] = useState(!!count)
    const show = !!count || exist
    const context = useMemo(
      () => ({ direction, elMapRef, setExist, startIndex }),
      [direction, startIndex],
    )

    const onExitComplete = useCallback(() => {
      if (!count) setExist(false)
    }, [count])

    useEffect(() => {
      let height = 0

      if (!count) return

      const els = [...elMapRef.current.values()].slice(0, count)

      for (const el of els) {
        if (!el) continue

        let { offsetHeight, offsetTop } = el

        offsetHeight += offsetTop

        if (offsetHeight > height) height = offsetHeight
      }

      setHeight(height)
    }, [count, direction])

    useUpdateEffect(() => {
      if (!!count) setExist(true)
    }, [count])

    return (
      <ComponentContext value={context}>
        <AnimatePresence initial={false}>
          {show ? (
            <motion.div {...rest}>
              <SnackList custom={{ height }} {...listProps}>
                <AnimatePresence onExitComplete={onExitComplete}>
                  {items.map((props, index) => {
                    return (
                      <Snack
                        key={props.id}
                        index={index}
                        lastIndex={count - index - 1}
                        {...props}
                      />
                    )
                  })}
                </AnimatePresence>
              </SnackList>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </ComponentContext>
    )
  },
  "root",
)(
  {
    animate: "animate",
    exit: "exit",
    initial: "initial",
    variants: {
      animate: {
        padding: "var(--top) 0 var(--bottom)",
        transition: { duration: 0.4 },
      },
      exit: { padding: 0 },
      initial: { padding: 0 },
    },
  },
  ({ gap, gutter = [0, "lg"], negativeMargins = true, ...rest }) => ({
    "data-negative": dataAttr(negativeMargins),
    "--bottom": varAttr(gutter[1], "spaces", "0px"),
    "--gap": varAttr(gap, "spaces"),
    "--top": varAttr(gutter[0], "spaces", "0px"),
    ...rest,
  }),
)

interface SnackListProps extends HTMLMotionProps {}

const SnackList = withContext<"div", SnackListProps>(
  motion.div,
  "list",
)({
  animate: "animate",
  exit: "exit",
  initial: "initial",
  role: "list",
  variants: {
    animate: ({ height }) => ({
      height,
      opacity: 1,
      transition: { duration: 0.4 },
    }),
    exit: { height: 0, opacity: 0 },
    initial: { height: 0, opacity: 1 },
  },
})

interface SnackProps extends Merge<
  HTMLMotionProps,
  Merge<Alert.RootProps, Snack>
> {
  index: number
  lastIndex: number
}

const Snack = withContext<"div", SnackProps>(
  ({
    variant = "plain",
    closable = true,
    description,
    duration: durationProp = null,
    loadingScheme,
    status,
    title,
    withIcon = true,
    closeButtonProps,
    contentProps,
    descriptionProps,
    iconProps,
    loadingProps,
    titleProps,
    onClose: onCloseProp,
    onCloseComplete,
    ...rest
  }) => {
    const [duration, setDuration] = useState(durationProp)
    const present = useIsPresent()
    const onClose = present ? onCloseProp : noop

    const onMouseEnter = useCallback(() => {
      setDuration(null)
    }, [])

    const onMouseLeave = useCallback(() => {
      setDuration(durationProp)
    }, [durationProp])

    useUpdateEffect(() => {
      if (!present) onCloseComplete?.()
    }, [present])

    useUpdateEffect(() => {
      setDuration(durationProp)
    }, [durationProp])

    useTimeout(onClose, duration)

    return (
      <Alert.Root
        as={motion.div}
        variant={variant}
        status={status}
        {...rest}
        onMouseEnter={handlerAll(rest.onMouseEnter, onMouseEnter)}
        onMouseLeave={handlerAll(rest.onMouseLeave, onMouseLeave)}
      >
        {withIcon ? (
          loadingScheme ? (
            <Alert.Loading loadingScheme={loadingScheme} {...loadingProps} />
          ) : (
            <Alert.Icon {...iconProps} />
          )
        ) : null}

        <SnackContent data-close-button={dataAttr(closable)} {...contentProps}>
          {title ? (
            <Alert.Title me="0" {...titleProps}>
              {title}
            </Alert.Title>
          ) : null}

          {description ? (
            <Alert.Description {...descriptionProps}>
              {description}
            </Alert.Description>
          ) : null}
        </SnackContent>

        {closable ? (
          <SnackCloseButton
            data-variant={variant}
            {...closeButtonProps}
            onClick={handlerAll(closeButtonProps?.onClick, onClose)}
          />
        ) : null}
      </Alert.Root>
    )
  },
  "item",
)(
  {
    animate: "animate",
    exit: "exit",
    initial: "initial",
    layout: true,
    role: "listitem",
    variants: {
      animate: ({ index }) => ({
        opacity: 1,
        transition: createTransition.enter()(!index ? 0.2 : 0, 0.4),
        y: 0,
      }),
      exit: {
        opacity: 0,
        transition: createTransition.exit()(undefined, 0.2),
      },
      initial: ({ direction, index }) => ({
        opacity: 0,
        ...(index ? { y: (direction === "start" ? -1 : 1) * 16 } : {}),
      }),
    },
  },
  ({ index, lastIndex, ...rest }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { direction, elMapRef, startIndex } = useComponentContext()

    useEffect(() => {
      const elMap = elMapRef.current

      elMap.set(index, ref.current)

      return () => {
        elMap.delete(index)
      }
    }, [elMapRef, index])

    return {
      ref,
      "--index": direction === "start" ? lastIndex : index,
      "--z-index": startIndex + index,
      custom: { direction, index },
      ...rest,
    }
  },
)

export interface SnackContentProps extends HTMLStyledProps {}

const SnackContent = withContext<"div", SnackContentProps>("div", "content")()

export interface SnackCloseButtonProps extends CloseButtonProps {}

const SnackCloseButton = withContext<"button", SnackCloseButtonProps>(
  CloseButton,
  "closeButton",
)()
