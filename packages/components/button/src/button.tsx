import type { HTMLUIProps, ThemeProps, CSSUIObject, FC } from "@yamada-ui/core"
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
import type { ElementType, ReactElement } from "react"
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
   * The icon to display at the left side of the button.
   */
  leftIcon?: ReactElement
  /**
   * The icon to display at the right side of the button.
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
      className,
      as,
      type,
      isRounded,
      isLoading,
      isActive,
      isDisabled = group?.isDisabled,
      leftIcon,
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
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "fallback(2, 0.5rem)",
        appearance: "none",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        overflow: "hidden",
        outline: "none",
        ...styles,
        ...__css,
        ...(!!group ? { _focus } : {}),
        ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
      }
    }, [styles, __css, group, isRounded])

    const contentProps = {
      leftIcon,
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
          <ButtonLoading
            className="ui-button__loading--start"
            {...loadingProps}
          />
        ) : null}

        {isLoading ? (
          loadingText || (
            <ui.span opacity={0}>
              <ButtonContent {...contentProps} />
            </ui.span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && loadingPlacement === "end" ? (
          <ButtonLoading
            className="ui-button__loading--end"
            {...loadingProps}
          />
        ) : null}

        <Ripple isDisabled={disableRipple || trulyDisabled} {...rippleProps} />
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

ButtonLoading.displayName = "ButtonLoading"
ButtonLoading.__ui__ = "ButtonLoading"

interface ButtonContentProps
  extends Pick<ButtonProps, "leftIcon" | "rightIcon" | "children"> {}

const ButtonContent: FC<ButtonContentProps> = ({
  leftIcon,
  rightIcon,
  children,
}) => {
  return (
    <>
      {leftIcon ? <ButtonIcon>{leftIcon}</ButtonIcon> : null}
      {children}
      {rightIcon ? <ButtonIcon>{rightIcon}</ButtonIcon> : null}
    </>
  )
}

ButtonContent.displayName = "ButtonContent"
ButtonContent.__ui__ = "ButtonContent"

interface ButtonIconProps extends HTMLUIProps<"span"> {}

const ButtonIcon: FC<ButtonIconProps> = ({ children, className, ...rest }) => {
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

ButtonIcon.displayName = "ButtonIcon"
ButtonIcon.__ui__ = "ButtonIcon"

export const useButtonType = (value?: ElementType) => {
  const isButton = useRef(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) isButton.current = node.tagName === "BUTTON"
  }, [])

  const type = isButton.current ? "button" : undefined

  return { ref, type } as const
}
