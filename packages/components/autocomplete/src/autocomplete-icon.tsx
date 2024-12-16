import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { HTMLAttributes } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { ChevronIcon, CloseIcon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import { cloneElement, useRef } from "react"
import { useAutocompleteContext } from "./autocomplete-context"

export interface AutocompleteIconProps extends HTMLUIProps {}

export const AutocompleteIcon = forwardRef<AutocompleteIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      pointerEvents: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
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

AutocompleteIcon.displayName = "AutocompleteIcon"
AutocompleteIcon.__ui__ = "AutocompleteIcon"

export interface AutocompleteClearIconProps extends AutocompleteIconProps {
  disabled?: boolean
}

export const AutocompleteClearIcon: FC<AutocompleteClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { styles } = useAutocompleteContext()

  const rest = useClickable({
    ref,
    ...(props as HTMLAttributes<HTMLElement>),
  })

  return (
    <AutocompleteIcon
      className={cx("ui-autocomplete__icon--clear", className)}
      aria-label="Clear value"
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <CloseIcon h="0.5em" w="0.5em" />}
    </AutocompleteIcon>
  )
}

AutocompleteClearIcon.displayName = "AutocompleteClearIcon"
AutocompleteClearIcon.__ui__ = "AutocompleteClearIcon"

export interface AutocompleteItemIconProps extends HTMLUIProps<"span"> {}

export const AutocompleteItemIcon = forwardRef<
  AutocompleteItemIconProps,
  "span"
>(({ className, ...rest }, ref) => {
  const { styles } = useAutocompleteContext()

  const css: CSSUIObject = {
    alignItems: "center",
    display: "inline-flex",
    flexShrink: 0,
    fontSize: "0.85em",
    justifyContent: "center",
    ...styles.itemIcon,
  }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-autocomplete__item__icon", className)}
      __css={css}
      {...rest}
    />
  )
})

AutocompleteItemIcon.displayName = "AutocompleteItemIcon"
AutocompleteItemIcon.__ui__ = "AutocompleteItemIcon"
