"use client"

import type { FC, PropsWithChildren, ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { UseLazyMountProps } from "../../hooks/use-lazy-mount"
import type { StepsStyle } from "./steps.style"
import type { UseStepsItemProps, UseStepsProps } from "./use-steps"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useLazyMount } from "../../hooks/use-lazy-mount"
import { useValue } from "../../hooks/use-value"
import { isNull, isUndefined } from "../../utils"
import { CheckIcon } from "../icon"
import { stepsStyle } from "./steps.style"
import {
  StepsContext,
  StepsDescendantsContext,
  StepsItemContext,
  useSteps,
  useStepsContext,
  useStepsItem,
  useStepsItemContext,
} from "./use-steps"

interface ComponentContext
  extends Pick<StepsRootProps, "items" | "lazy" | "lazyBehavior"> {}

interface StepsItem
  extends Omit<StepsItemProps, "content" | "index" | "title">,
    Pick<StepsIndicatorProps, "complete" | "current" | "incomplete"> {
  /**
   * The content for step element.
   */
  content?: ReactNode
  /**
   * The description for step element.
   */
  description?: ReactNode
  /**
   * If true, display the step separator.
   *
   * @default true
   */
  hasSeparator?: boolean
  /**
   * The title for step element.
   */
  title?: string
  /**
   * Props for step content element.
   */
  contentProps?: StepsContentProps
  /**
   * Props for step description element.
   */
  descriptionProps?: StepsDescriptionProps
  /**
   * Props for step indicator element.
   */
  indicatorProps?: StepsIndicatorProps
  /**
   * Props for step separator element.
   */
  separatorProps?: StepsSeparatorProps
  /**
   * Props for step title element.
   */
  titleProps?: StepsTitleProps
}

export interface StepsRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    Omit<UseStepsProps, "orientation">,
    Pick<UseLazyMountProps, "lazy" | "lazyBehavior">,
    ThemeProps<StepsStyle> {
  /**
   * If provided, generate step components based on steps.
   */
  items?: StepsItem[]
}

const {
  ComponentContext,
  PropsContext: StepsPropsContext,
  useComponentContext,
  usePropsContext: useStepsPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StepsRootProps, StepsStyle, ComponentContext>(
  "steps",
  stepsStyle,
)

export { StepsPropsContext, useStepsPropsContext }

/**
 * `Steps` is a component that displays the progress of a multi-step process.
 *
 * @see https://yamada-ui.com/components/steps
 */
export const StepsRoot = withProvider(
  ({
    children,
    items,
    lazy,
    lazyBehavior,
    orientation: orientationProp,
    ...rest
  }) => {
    const computedOrientation = useValue(orientationProp)
    const {
      id,
      count,
      descendants,
      getStatus,
      index,
      orientation,
      setIndex,
      getContentProps,
      getListProps,
      getNextTriggerProps,
      getPrevTriggerProps,
      getRootProps,
      onNext,
      onPrev,
    } = useSteps({ ...rest, orientation: computedOrientation })
    const componentContext = useMemo(
      () => ({ items, lazy, lazyBehavior }),
      [items, lazy, lazyBehavior],
    )
    const stepsContext = useMemo(
      () => ({
        id,
        count,
        getStatus,
        index,
        orientation,
        setIndex,
        getContentProps,
        getListProps,
        getNextTriggerProps,
        getPrevTriggerProps,
        onNext,
        onPrev,
      }),
      [
        id,
        count,
        index,
        orientation,
        setIndex,
        getStatus,
        onNext,
        onPrev,
        getListProps,
        getNextTriggerProps,
        getPrevTriggerProps,
        getContentProps,
      ],
    )

    return (
      <StepsDescendantsContext value={descendants}>
        <StepsContext value={stepsContext}>
          <ComponentContext value={componentContext}>
            <styled.div {...getRootProps()}>{children}</styled.div>
          </ComponentContext>
        </StepsContext>
      </StepsDescendantsContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

export interface StepsListProps extends HTMLStyledProps<"ol"> {}

export const StepsList = withContext<"ol", StepsListProps>(
  ({ children, ...rest }) => {
    const { items } = useComponentContext()
    const { getListProps } = useStepsContext()
    const computedChildren = useMemo(() => {
      if (children) {
        return children
      } else {
        return items?.map(
          (
            {
              complete,
              content: _content,
              current,
              description,
              hasSeparator = true,
              incomplete,
              title,
              contentProps: _contentProps,
              descriptionProps,
              indicatorProps,
              separatorProps,
              titleProps,
              ...rest
            },
            index,
          ) => (
            <StepsItem key={index} index={index} title={title} {...rest}>
              <StepsIndicator
                complete={complete}
                current={current}
                incomplete={incomplete}
                {...indicatorProps}
              />

              <styled.div>
                {title ? (
                  <StepsTitle {...titleProps}>{title}</StepsTitle>
                ) : null}
                {description ? (
                  <StepsDescription {...descriptionProps}>
                    {description}
                  </StepsDescription>
                ) : null}
              </styled.div>

              {hasSeparator ? <StepsSeparator {...separatorProps} /> : null}
            </StepsItem>
          ),
        )
      }
    }, [children, items])

    return <styled.ol {...getListProps(rest)}>{computedChildren}</styled.ol>
  },
  "list",
)()

export interface StepsItemProps
  extends HTMLStyledProps<"li">,
    UseStepsItemProps {}

export const StepsItem = withContext<"li", StepsItemProps>((props) => {
  const {
    first,
    index,
    last,
    status,
    getDescriptionProps,
    getIndicatorProps,
    getRootProps,
    getSeparatorProps,
    getTitleProps,
  } = useStepsItem(props)
  const context = useMemo(
    () => ({
      first,
      index,
      last,
      status,
      getDescriptionProps,
      getIndicatorProps,
      getSeparatorProps,
      getTitleProps,
    }),
    [
      first,
      index,
      last,
      status,
      getTitleProps,
      getDescriptionProps,
      getSeparatorProps,
      getIndicatorProps,
    ],
  )

  return (
    <StepsItemContext value={context}>
      <styled.li {...getRootProps()} />
    </StepsItemContext>
  )
}, "item")()

export interface StepsIndicatorProps extends HTMLStyledProps {
  /**
   * The element for the complete indicator.
   *
   * @default '<CheckIcon />'
   */
  complete?: ReactNode
  /**
   * The element for the current indicator.
   *
   * @default '<StepsNumber />'
   */
  current?: ReactNode
  /**
   * The element for the incomplete indicator.
   *
   * @default '<StepsNumber />'
   */
  incomplete?: ReactNode
}

export const StepsIndicator = withContext<"div", StepsIndicatorProps>(
  ({
    complete = <CheckIcon />,
    current = <StepsNumber />,
    incomplete = <StepsNumber />,
    ...rest
  }) => {
    const { status, getIndicatorProps } = useStepsItemContext()
    const components = useMemo(
      () => ({ complete, current, incomplete }),
      [complete, current, incomplete],
    )

    return (
      <styled.div {...getIndicatorProps(rest)}>{components[status]}</styled.div>
    )
  },
  "indicator",
)()

export interface StepsNumberProps extends HTMLStyledProps<"span"> {}

export const StepsNumber = withContext<"span", StepsNumberProps>(
  "span",
  "number",
)(undefined, ({ children, ...rest }) => {
  const { index } = useStepsItemContext()

  return { ...rest, children: children ?? index + 1 }
})

export interface StepsTitleProps extends HTMLStyledProps {}

export const StepsTitle = withContext<"h3", StepsTitleProps>("h3", "title")(
  undefined,
  (props) => {
    const { getTitleProps } = useStepsItemContext()

    return getTitleProps(props)
  },
)

export interface StepsDescriptionProps extends HTMLStyledProps<"p"> {}

export const StepsDescription = withContext<"p", StepsDescriptionProps>(
  "p",
  "description",
)(undefined, (props) => {
  const { getDescriptionProps } = useStepsItemContext()

  return getDescriptionProps(props)
})

export interface StepsSeparatorProps extends HTMLStyledProps {}

export const StepsSeparator = withContext<"div", StepsSeparatorProps>(
  "div",
  "separator",
)(undefined, (props) => {
  const { getSeparatorProps } = useStepsItemContext()

  return getSeparatorProps(props)
})

export interface StepsContentsProps extends PropsWithChildren {}

export const StepsContents: FC<StepsContentsProps> = ({ children }) => {
  const { items } = useComponentContext()

  return useMemo(() => {
    if (children) {
      return children
    } else {
      return items?.map(({ content, contentProps }, index) =>
        isUndefined(content) || isNull(content) ? null : (
          <StepsContent key={index} index={index} {...contentProps}>
            {content}
          </StepsContent>
        ),
      )
    }
  }, [children, items])
}

export interface StepsContentProps extends HTMLStyledProps {
  /**
   * The index of the step content.
   */
  index: number
}

export const StepsContent = withContext<"div", StepsContentProps>(
  "div",
  "content",
)(undefined, ({ index, ...rest }) => {
  const { lazy, lazyBehavior } = useComponentContext()
  const { index: selectedIndex, getContentProps } = useStepsContext()
  const mounted = index === selectedIndex
  const children = useLazyMount({
    lazy,
    lazyBehavior,
    mounted,
    ...rest,
  })

  return { ...getContentProps({ index, ...rest }), children }
})

export interface StepsCompletedContentProps extends HTMLStyledProps {}

export const StepsCompletedContent = withContext<
  "div",
  StepsCompletedContentProps
>("div", { name: "CompletedContent", slot: ["content", "completed"] })(
  undefined,
  (props) => {
    const { lazy, lazyBehavior } = useComponentContext()
    const { count, index: selectedIndex, getContentProps } = useStepsContext()
    const mounted = count !== 0 && count === selectedIndex
    const children = useLazyMount({
      lazy,
      lazyBehavior,
      mounted,
      ...props,
    })

    return { ...getContentProps(props), children }
  },
)

export interface StepsPrevTriggerProps extends HTMLStyledProps<"button"> {}

export const StepsPrevTrigger = withContext<"button", StepsPrevTriggerProps>(
  "button",
  { name: "PrevTrigger", slot: ["trigger", "prev"] },
)((props) => {
  const { getPrevTriggerProps } = useStepsContext()

  return { asChild: true, ...getPrevTriggerProps(props) }
})

export interface StepsNextTriggerProps extends HTMLStyledProps<"button"> {}

export const StepsNextTrigger = withContext<"button", StepsNextTriggerProps>(
  "button",
  { name: "NextTrigger", slot: ["trigger", "next"] },
)((props) => {
  const { getNextTriggerProps } = useStepsContext()

  return { asChild: true, ...getNextTriggerProps(props) }
})
