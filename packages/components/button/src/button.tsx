import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { LoadingProps } from "@yamada-ui/loading"
import { Loading as LoadingIcon } from "@yamada-ui/loading"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx, merge, dataAttr, mergeRefs } from "@yamada-ui/utils"
import type { ElementType, FC, ReactElement } from "react"
import { useCallback, useMemo, useRef } from "react"
import { useButtonGroup } from "./button-group"

type ButtonOptions = {
  /**
   * The type of button. Accepts `button`, `reset`, or `submit`.
   *
   * @default 'button'
   */
  type?: "button" | "reset" | "submit"
  /**
   * If true, the button is full rounded. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
  /**
   * If `true`, the loading state of the button is represented.
   *
   * @default false
   */
  isLoading?: boolean
  /**
   * If `true`, the button is represented as active.
   *
   * @default false
   */
  isActive?: boolean
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The icon to display at the start side of the button.
   */
  startIcon?: ReactElement
  /**
   * The icon to display at the left side of the button.
   * If specified at the same time as `startIcon`, `startIcon` takes precedence.
   * @deprecated Use `startIcon` instead.
   */
  leftIcon?: ReactElement
  /**
   * The icon to display at the end side of the button.
   */
  endIcon?: ReactElement
  /**
   * The icon to display at the right side of the button.
   * If specified at the same time as `endIcon`, `endIcon` takes precedence.
   * @deprecated Use `endIcon` instead.
   */
  rightIcon?: ReactElement
  /**
   * The icon to display when the button is loading.
   */
  loadingIcon?: ReactElement | LoadingProps["variant"]
  /**
   * The text to display when the button is loading.
   */
  loadingText?: string
  /**
   * The placement of the loading indicator. Accepts `start` or `end`.
   *
   * @default 'start'
   */
  loadingPlacement?: "start" | "end"
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
}

export type ButtonProps = HTMLUIProps<"button"> &
  ThemeProps<"Button"> &
  ButtonOptions

/**
 * `Button` is an interactive component that allows users to perform actions such as submitting forms and toggling modals.
 *
 * @see Docs https://yamada-ui.com/components/forms/button
 */
export const Button = forwardRef<ButtonProps, "button">(
  ({ children, ...props }, ref) => {
    const group = useButtonGroup()
    const [styles, mergedProps] = useComponentStyle("Button", {
      ...group,
      ...props,
    })
    const {
      className,
      as,
      type,
      isRounded,
      isLoading,
      isActive,
      isDisabled = group?.isDisabled,
      startIcon,
      leftIcon,
      endIcon,
      rightIcon,
      loadingIcon,
      loadingText,
      loadingPlacement = "start",
      disableRipple,
      __css,
      ...rest
    } = omitThemeProps(mergedProps)

    const trulyDisabled = isDisabled || isLoading

    const { ref: buttonRef, type: defaultType } = useButtonType(as)
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      isDisabled: disableRipple || trulyDisabled,
    })

    const css: CSSUIObject = useMemo(() => {
      const _focus =
        "_focus" in styles
          ? merge(styles._focus ?? {}, { zIndex: "fallback(yamcha, 1)" })
          : {}

      return {
        ...styles,
        ...__css,
        ...(!!group ? { _focus } : {}),
        ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
      }
    }, [styles, __css, group, isRounded])

    const contentProps = {
      startIcon,
      leftIcon,
      endIcon,
      rightIcon,
      children,
    }

    const loadingProps = {
      loadingIcon,
      loadingText,
    }

    return (
      <ui.button
        ref={mergeRefs(ref, buttonRef)}
        as={as}
        className={cx("ui-button", className)}
        type={type ?? defaultType}
        disabled={trulyDisabled}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        __css={css}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {isLoading && loadingPlacement === "start" ? (
          <Loading className="ui-button__loading--start" {...loadingProps} />
        ) : null}

        {isLoading ? (
          loadingText || (
            <ui.span opacity={0}>
              <Content {...contentProps} />
            </ui.span>
          )
        ) : (
          <Content {...contentProps} />
        )}

        {isLoading && loadingPlacement === "end" ? (
          <Loading className="ui-button__loading--end" {...loadingProps} />
        ) : null}

        <Ripple isDisabled={disableRipple || trulyDisabled} {...rippleProps} />
      </ui.button>
    )
  },
)

const Loading: FC<
  Pick<ButtonProps, "className" | "loadingIcon" | "loadingText">
> = ({ className, loadingIcon, loadingText }) => {
  const css = useMemo(
    (): CSSUIObject => ({
      display: "flex",
      alignItems: "center",
      position: loadingText ? "relative" : "absolute",
      fontSize: "1em",
      lineHeight: "normal",
    }),
    [loadingText],
  )

  const element = useMemo(() => {
    if (typeof loadingIcon === "string") {
      return <LoadingIcon color="current" variant={loadingIcon} />
    } else {
      return loadingIcon || <LoadingIcon color="current" />
    }
  }, [loadingIcon])

  return (
    <ui.div className={cx("ui-button__loading", className)} __css={css}>
      {element}
    </ui.div>
  )
}

const Content: FC<
  Pick<
    ButtonProps,
    "startIcon" | "leftIcon" | "endIcon" | "rightIcon" | "children"
  >
> = ({
  startIcon: _startIcon,
  leftIcon,
  endIcon: _endIcon,
  rightIcon,
  children,
}) => {
  const startIcon = _startIcon ?? leftIcon
  const endIcon = _endIcon ?? rightIcon
  return (
    <>
      {startIcon ? <Icon>{startIcon}</Icon> : null}
      {children}
      {endIcon ? <Icon>{endIcon}</Icon> : null}
    </>
  )
}

const Icon: FC<HTMLUIProps<"span">> = ({ children, className, ...rest }) => {
  return (
    <ui.span
      className={cx("ui-button__icon", className)}
      display="inline-flex"
      alignSelf="center"
      flexShrink={0}
      aria-hidden={true}
      {...rest}
    >
      {children}
    </ui.span>
  )
}

export const useButtonType = (value?: ElementType) => {
  const isButton = useRef(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) isButton.current = node.tagName === "BUTTON"
  }, [])

  const type = isButton.current ? "button" : undefined

  return { ref, type } as const
}
