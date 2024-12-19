import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { LoadingProps } from "@yamada-ui/loading"
import type { ElementType, ReactElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { Loading as LoadingIcon } from "@yamada-ui/loading"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx, dataAttr, merge, mergeRefs } from "@yamada-ui/utils"
import { useCallback, useMemo, useRef } from "react"
import { useButtonGroup } from "./button-group"

interface ButtonOptions {
  /**
   * The type of button. Accepts `button`, `reset`, or `submit`.
   *
   * @default 'button'
   */
  type?: "button" | "reset" | "submit"
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
  endIcon?: ReactElement
  /**
   * If `true`, the button is full rounded. Else, it'll be slightly round.
   *
   * @default false
   */
  fullRounded?: boolean
  /**
   * If `true`, the button is represented as active.
   *
   * @default false
   *
   * @deprecated Use `active` instead.
   */
  isActive?: boolean
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the loading state of the button is represented.
   *
   * @default false
   *
   * @deprecated Use `loading` instead.
   */
  isLoading?: boolean
  /**
   * If `true`, the button is full rounded. Else, it'll be slightly round.
   *
   * @default false
   *
   * @deprecated Use `fullRounded` instead.
   */
  isRounded?: boolean
  /**
   * The icon to display at the left side of the button.
   *
   * @deprecated Use `startIcon` instead.
   */
  leftIcon?: ReactElement
  /**
   * If `true`, the loading state of the button is represented.
   *
   * @default false
   */
  loading?: boolean
  /**
   * The icon to display when the button is loading.
   */
  loadingIcon?: LoadingProps["variant"] | ReactElement
  /**
   * The placement of the loading indicator. Accepts `start` or `end`.
   *
   * @default 'start'
   */
  loadingPlacement?: "end" | "start"
  /**
   * The text to display when the button is loading.
   */
  loadingText?: string
  /**
   * The icon to display at the right side of the button.
   *
   * @deprecated Use `endIcon` instead.
   */
  rightIcon?: ReactElement
  /**
   * The icon to display at the start side of the button.
   */
  startIcon?: ReactElement
}

export interface ButtonProps
  extends HTMLUIProps<"button">,
    ThemeProps<"Button">,
    ButtonOptions {}

/**
 * `Button` is an interactive component that allows users to perform actions such as submitting forms and toggling modals.
 *
 * @see Docs https://yamada-ui.com/components/forms/button
 */
export const Button = forwardRef<ButtonProps, "button">(
  ({ children, __isProcessSkip, __styles, ...props }, ref) => {
    const group = useButtonGroup()
    const [styles, mergedProps] = useComponentStyle(
      "Button",
      {
        ...group,
        ...props,
      },
      { isProcessSkip: __isProcessSkip, styles: __styles },
    )
    const {
      as,
      type,
      className,
      isActive,
      active = isActive,
      isDisabled = group?.disabled,
      disabled = isDisabled,
      disableRipple,
      rightIcon,
      endIcon = rightIcon,
      isRounded,
      fullRounded = isRounded,
      isLoading,
      leftIcon,
      loading = isLoading,
      loadingIcon,
      loadingPlacement = "start",
      loadingText,
      startIcon = leftIcon,
      __css,
      ...rest
    } = omitThemeProps(mergedProps)
    const trulyDisabled = disabled || loading
    const { ref: buttonRef, type: defaultType } = useButtonType(as)
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || trulyDisabled,
    })
    const css: CSSUIObject = useMemo(() => {
      const _focus =
        "_focus" in styles
          ? merge(styles._focus ?? {}, { zIndex: "fallback(yamcha, 1)" })
          : {}

      return {
        alignItems: "center",
        appearance: "none",
        display: "inline-flex",
        gap: "fallback(2, 0.5rem)",
        justifyContent: "center",
        outline: "none",
        overflow: "hidden",
        position: "relative",
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        ...styles,
        ...__css,
        ...(!!group ? { _focus } : {}),
        ...(fullRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
      }
    }, [styles, __css, group, fullRounded])
    const contentProps = {
      children,
      endIcon,
      startIcon,
    }
    const loadingProps = {
      loadingIcon,
      loadingText,
    }

    return (
      <ui.button
        ref={mergeRefs(ref, buttonRef)}
        as={as}
        type={type ?? defaultType}
        className={cx("ui-button", className)}
        data-active={dataAttr(active)}
        data-loading={dataAttr(loading)}
        disabled={trulyDisabled}
        __css={css}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {loading && loadingPlacement === "start" ? (
          <ButtonLoading
            className="ui-button__loading--start"
            {...loadingProps}
          />
        ) : null}

        {loading ? (
          loadingText || (
            <ui.span opacity={0}>
              <ButtonContent {...contentProps} />
            </ui.span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {loading && loadingPlacement === "end" ? (
          <ButtonLoading
            className="ui-button__loading--end"
            {...loadingProps}
          />
        ) : null}

        <Ripple {...rippleProps} />
      </ui.button>
    )
  },
)

Button.displayName = "Button"
Button.__ui__ = "Button"

interface ButtonLoadingProps
  extends Pick<ButtonProps, "className" | "loadingIcon" | "loadingText"> {}

const ButtonLoading: FC<ButtonLoadingProps> = ({
  className,
  loadingIcon,
  loadingText,
}) => {
  const css = useMemo(
    (): CSSUIObject => ({
      alignItems: "center",
      display: "flex",
      fontSize: "1em",
      lineHeight: "normal",
      position: loadingText ? "relative" : "absolute",
    }),
    [loadingText],
  )

  const element = useMemo(() => {
    if (typeof loadingIcon === "string") {
      return <LoadingIcon variant={loadingIcon} color="current" />
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

ButtonLoading.displayName = "ButtonLoading"
ButtonLoading.__ui__ = "ButtonLoading"

interface ButtonContentProps
  extends Pick<ButtonProps, "children" | "endIcon" | "startIcon"> {}

const ButtonContent: FC<ButtonContentProps> = ({
  children,
  endIcon,
  startIcon,
}) => {
  return (
    <>
      {startIcon ? <ButtonIcon>{startIcon}</ButtonIcon> : null}
      {children}
      {endIcon ? <ButtonIcon>{endIcon}</ButtonIcon> : null}
    </>
  )
}

ButtonContent.displayName = "ButtonContent"
ButtonContent.__ui__ = "ButtonContent"

interface ButtonIconProps extends HTMLUIProps<"span"> {}

const ButtonIcon: FC<ButtonIconProps> = ({ className, children, ...rest }) => {
  return (
    <ui.span
      className={cx("ui-button__icon", className)}
      aria-hidden
      alignSelf="center"
      display="inline-flex"
      flexShrink={0}
      {...rest}
    >
      {children}
    </ui.span>
  )
}

ButtonIcon.displayName = "ButtonIcon"
ButtonIcon.__ui__ = "ButtonIcon"

export const useButtonType = (value?: ElementType) => {
  const buttonRef = useRef(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) buttonRef.current = node.tagName === "BUTTON"
  }, [])

  const type = buttonRef.current ? "button" : undefined

  return { ref, type } as const
}
