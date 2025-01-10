import { ElementType, useCallback, useMemo, useRef } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import { createComponent, ui } from "../../core"
import { createContext, cx, mergeRefs } from "../../utils"
import { XIcon } from "../icon"
import { Ripple, useRipple } from "../ripple"
import type { CloseButtonStyle } from "./close-button.style"
import { closeButtonStyle } from "./close-button.style"

interface CloseButtonContext extends Pick<CloseButtonOptions, "isRounded"> {}

const [CloseButtonContext] = createContext<CloseButtonContext>({
  name: "CloseButtonContext",
})

const useCloseButtonType = (value?: ElementType) => {
  const buttonRef = useRef(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) buttonRef.current = node.tagName === "BUTTON"
  }, [])

  const type = buttonRef.current ? "button" : undefined

  return { ref, type } as const
}

interface CloseButtonOptions {
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
   * If true, the button is full rounded.
   *
   * @default false
   */
  isRounded?: boolean
}

export interface CloseButtonProps
  extends HTMLUIProps<"button">,
    ThemeProps<CloseButtonStyle>,
    CloseButtonOptions {}

export const {
  component,
  PropsContext: CloseButtonPropsContext,
  usePropsContext: useCloseButtonPropsContext,
  withContext,
} = createComponent<CloseButtonProps, CloseButtonStyle>(
  "close-button",
  closeButtonStyle,
)

/**
 * `CloseButton` is a component used primarily to trigger the close functionality of a component.
 *
 * @see Docs https://yamada-ui.com/components/other/close-button
 */

export const CloseButton = withContext(
  ({
    ref,
    as,
    className,
    children,
    disabled,
    disableRipple,
    isRounded,
    ...rest
  }) => {
    const { ref: closeButtonRef, type } = useCloseButtonType(as)
    const { onClick, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || disabled,
    })

    const context = useMemo(() => ({ isRounded }), [isRounded])

    return (
      <CloseButtonContext.Provider value={context}>
        <ui.button
          ref={mergeRefs(ref, closeButtonRef)}
          as={as}
          type={type}
          className={cx("ui-close-button", className)}
          aria-label="Close"
          disabled={disabled}
          {...rest}
          onClick={onClick}
        >
          {children || <XIcon boxSize="2em" />}

          <Ripple {...rippleProps} />
        </ui.button>
      </CloseButtonContext.Provider>
    )
  },
)()

CloseButton.__ui__ = "CloseButton"
