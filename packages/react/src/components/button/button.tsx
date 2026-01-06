"use client"

import type { ElementType, PropsWithChildren, ReactNode } from "react"
import type {
  CSSObject,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { Loading } from "../loading"
import type { ButtonStyle } from "./button.style"
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
} from "react"
import { createComponent, getClassName, mergeCSS, styled } from "../../core"
import { bem, dataAttr, mergeRefs } from "../../utils"
import { getLoadingComponent, isLoadingScheme } from "../loading"
import { Ripple, useRipple } from "../ripple"
import { buttonStyle } from "./button.style"

interface ComponentContext
  extends Pick<
    ButtonProps,
    "endIcon" | "iconProps" | "loadingIcon" | "loadingMessage" | "startIcon"
  > {}

const useButtonType = (value?: ElementType) => {
  const buttonRef = useRef(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) buttonRef.current = node.tagName === "BUTTON"
  }, [])

  const type = buttonRef.current ? "button" : undefined

  return { ref, type } as const
}

export interface ButtonProps
  extends HTMLStyledProps<"button">,
    ThemeProps<ButtonStyle> {
  /**
   * The type of button. Accepts `button`, `reset`, or `submit`.
   *
   * @default 'button'
   */
  type?: HTMLProps<"button">["type"]
  /**
   * If `true`, the button is represented as active.
   *
   * @default false
   */
  active?: boolean
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * The icon to display at the end side of the button.
   */
  endIcon?: ReactNode
  /**
   * If `true`, the loading state of the button is represented.
   *
   * @default false
   */
  loading?: boolean
  /**
   * The icon to display when the button is loading.
   *
   * @default 'oval'
   */
  loadingIcon?: Loading.Scheme | ReactNode
  /**
   * The message to display when the button is loading.
   */
  loadingMessage?: ReactNode
  /**
   * The placement of the loading indicator. Accepts `start` or `end`.
   *
   * @default 'start'
   */
  loadingPlacement?: "end" | "start"
  /**
   * The icon to display at the start side of the button.
   */
  startIcon?: ReactNode
  /**
   * The props of the icon element.
   */
  iconProps?: ButtonIconProps
  /**
   * The props of the loading icon element.
   */
  loadingProps?: ButtonLoadingProps
}

const {
  component,
  ComponentContext,
  PropsContext: ButtonPropsContext,
  useComponentContext,
  usePropsContext: useButtonPropsContext,
  withContext,
} = createComponent<ButtonProps, ButtonStyle, ComponentContext>(
  "button",
  buttonStyle,
)

export { ButtonPropsContext, useButtonPropsContext }

/**
 * `Button` is an interactive component that allows users to perform actions such as submitting forms and toggling modals.
 *
 * @see https://yamada-ui.com/docs/components/button
 */
export const Button = withContext<"button", ButtonProps>(
  ({
    ref,
    as,
    active,
    children,
    disabled,
    disableRipple,
    endIcon = null,
    loading,
    loadingIcon = "oval",
    loadingMessage,
    loadingPlacement = "start",
    startIcon = null,
    iconProps,
    loadingProps,
    ...rest
  }) => {
    const trulyDisabled = disabled || loading
    const { ref: buttonRef, type } = useButtonType(as)
    const { onClick, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || trulyDisabled,
    })
    const startLoading = loading && loadingPlacement === "start"
    const endLoading = loading && loadingPlacement === "end"

    const context = useMemo(
      () => ({ endIcon, loadingIcon, loadingMessage, startIcon, iconProps }),
      [loadingIcon, loadingMessage, startIcon, endIcon, iconProps],
    )

    return (
      <ComponentContext value={context}>
        <styled.button
          ref={mergeRefs(ref, buttonRef)}
          as={as}
          type={type}
          data-active={dataAttr(active)}
          data-loading={dataAttr(loading)}
          disabled={trulyDisabled}
          {...rest}
          onClick={onClick}
        >
          {startLoading ? <ButtonStartLoading {...loadingProps} /> : null}

          {loading ? (
            loadingMessage || (
              <styled.span opacity={0}>
                <ButtonContent>{children}</ButtonContent>
              </styled.span>
            )
          ) : (
            <ButtonContent>{children}</ButtonContent>
          )}

          {endLoading ? <ButtonEndLoading {...loadingProps} /> : null}

          <Ripple {...rippleProps} />
        </styled.button>
      </ComponentContext>
    )
  },
)()

const ButtonContent = component<"fragment", PropsWithChildren>(
  ({ children }) => {
    const { endIcon, startIcon, iconProps } = useComponentContext()

    return (
      <>
        {startIcon ? (
          <ButtonStartIcon {...iconProps}>{startIcon}</ButtonStartIcon>
        ) : null}
        {children}
        {endIcon ? (
          <ButtonEndIcon {...iconProps}>{endIcon}</ButtonEndIcon>
        ) : null}
      </>
    )
  },
  { name: "ButtonContent", className: getClassName(bem("button", "content")) },
)()

interface ButtonLoadingProps extends HTMLStyledProps<"svg"> {}

const ButtonLoading = component<"svg", ButtonLoadingProps>(
  (props) => {
    const { loadingIcon, loadingMessage } = useComponentContext()

    const css = useMemo<CSSObject>(
      () => ({
        position: loadingMessage ? "relative" : "absolute",
      }),
      [loadingMessage],
    )

    if (isLoadingScheme(loadingIcon)) {
      const Component = getLoadingComponent(loadingIcon)

      return (
        <Component
          color="currentColor"
          {...props}
          css={mergeCSS(css, props.css)}
        />
      )
    }

    if (isValidElement<HTMLStyledProps<"svg">>(loadingIcon))
      return cloneElement(loadingIcon, {
        ...props,
        ...loadingIcon.props,
        css: mergeCSS(css, props.css, loadingIcon.props.css),
      })

    return null
  },
  { name: "ButtonLoading", className: getClassName(bem("button", "loading")) },
)()

const ButtonStartLoading = component<"svg", ButtonLoadingProps>(ButtonLoading, {
  name: "ButtonStartLoading",
  className: getClassName(bem("button", "loading", "start")),
})()

const ButtonEndLoading = component<"svg", ButtonLoadingProps>(ButtonLoading, {
  name: "ButtonEndLoading",
  className: getClassName(bem("button", "loading", "end")),
})()

interface ButtonIconProps extends HTMLStyledProps<"svg"> {}

const ButtonIcon = component<"svg", ButtonIconProps>(
  ({ children, ...rest }) => {
    if (isValidElement<HTMLProps<"svg">>(children))
      return cloneElement(children, {
        "aria-hidden": true,
        role: "img",
        ...rest,
        ...children.props,
      })

    return Children.count(children) > 1 ? Children.only(null) : null
  },
  { name: "ButtonIcon", className: getClassName(bem("button", "icon")) },
)()

const ButtonStartIcon = component<"svg", ButtonIconProps>(ButtonIcon, {
  name: "ButtonStartIcon",
  className: getClassName(bem("button", "icon", "start")),
})()

const ButtonEndIcon = component<"svg", ButtonIconProps>(ButtonIcon, {
  name: "ButtonEndIcon",
  className: getClassName(bem("button", "icon", "end")),
})()
