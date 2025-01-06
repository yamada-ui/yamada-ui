import type { HTMLAttributes } from "react"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { cloneElement, useRef } from "react"
import { ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { cx, getValidChildren, isValidElement } from "../../utils"
import { ChevronDownIcon, XIcon } from "../icon"
import { useAutocompleteContext } from "./autocomplete-context"

export interface AutocompleteIconProps extends HTMLUIProps {}

export const AutocompleteIcon: FC<AutocompleteIconProps> = ({
  className,
  children,
  __css,
  ...rest
}) => {
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
      className={cx("ui-autocomplete__icon", className)}
      __css={css}
      {...rest}
    >
      {isValidElement(children) ? cloneChildren : <ChevronDownIcon />}
    </ui.div>
  )
}

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
      {children ?? <XIcon boxSize="5.5" />}
    </AutocompleteIcon>
  )
}

AutocompleteClearIcon.__ui__ = "AutocompleteClearIcon"

export interface AutocompleteItemIconProps extends HTMLUIProps<"span"> {}

export const AutocompleteItemIcon: FC<AutocompleteItemIconProps> = ({
  className,
  ...rest
}) => {
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
      className={cx("ui-autocomplete__item__icon", className)}
      __css={css}
      {...rest}
    />
  )
}

AutocompleteItemIcon.__ui__ = "AutocompleteItemIcon"
