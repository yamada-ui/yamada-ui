import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { ChevronIcon, CloseIcon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import type { FC, HTMLAttributes } from "react"
import { cloneElement, useRef } from "react"
import { useAutocompleteContext } from "./use-autocomplete"

export type AutocompleteIconProps = HTMLUIProps<"div">

export const AutocompleteIcon = forwardRef<AutocompleteIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      cursor: "pointer",
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        "aria-hidden": true,
        style: {
          maxWidth: "1em",
          maxHeight: "1em",
          color: "currentColor",
        },
      }),
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-autocomplete__icon", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <ChevronIcon />}
      </ui.div>
    )
  },
)

export type AutocompleteClearIconProps = AutocompleteIconProps & {
  disabled?: boolean
}

export const AutocompleteClearIcon: FC<AutocompleteClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { styles } = useAutocompleteContext()

  const isDisabled = props.disabled

  const rest = useClickable({
    ref,
    isDisabled,
    ...(props as HTMLAttributes<HTMLElement>),
  })

  return (
    <AutocompleteIcon
      aria-label="Clear value"
      className={cx("ui-autocomplete__icon--clear", className)}
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <CloseIcon w="0.5em" h="0.5em" />}
    </AutocompleteIcon>
  )
}

export type AutocompleteItemIconProps = HTMLUIProps<"span">

export const AutocompleteItemIcon = forwardRef<
  AutocompleteItemIconProps,
  "span"
>(({ className, ...rest }, ref) => {
  const { styles } = useAutocompleteContext()

  const css: CSSUIObject = {
    flexShrink: 0,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.85em",
    ...styles.itemIcon,
  }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-autocomplete__item-icon", className)}
      __css={css}
      {...rest}
    />
  )
})
