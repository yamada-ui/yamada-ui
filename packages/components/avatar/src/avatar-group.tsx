import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import {
  cx,
  getValidChildren,
  isUndefined,
  filterUndefined,
} from "@yamada-ui/utils"
import { cloneElement } from "react"

type AvatarGroupOptions = {
  /**
   * The maximum number of visible avatars.
   */
  max?: number
}

export type AvatarGroupProps = HTMLUIProps<"div"> &
  ThemeProps<"Avatar"> &
  AvatarGroupOptions

export const AvatarGroup = forwardRef<AvatarGroupProps, "div">((props, ref) => {
  const [styles] = useMultiComponentStyle("Avatar", props)
  const {
    className,
    max,
    borderColor,
    gap = "fallback(-2, -0.5rem)",
    borderRadius = "fallback(full, 9999px)",
    rounded = "fallback(full, 9999px)",
    children,
    ...rest
  } = omitThemeProps(props)

  let validChildren = getValidChildren(children)

  const excess = !isUndefined(max) ? validChildren.length - max : 0

  validChildren = !isUndefined(max)
    ? validChildren.slice(0, max)
    : validChildren

  validChildren = validChildren.reverse()

  const cloneChildren = validChildren.map((child, i) =>
    cloneElement(
      child,
      filterUndefined({
        marginEnd: !i ? 0 : gap,
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        borderWidth: "2px",
      }),
    ),
  )

  return (
    <ui.div
      ref={ref}
      className={cx("ui-avatar-group", className)}
      __css={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        alignItems: "center",
        ...styles.group,
      }}
      {...rest}
    >
      {excess > 0 ? (
        <ui.span
          className="ui-avatar__excess"
          borderRadius={borderRadius}
          rounded={rounded}
          ms={gap}
          __css={{
            position: "relative",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "medium",
            borderWidth: "2px",
            ...styles.excess,
          }}
        >
          {`+${excess}`}
        </ui.span>
      ) : null}
      {cloneChildren}
    </ui.div>
  )
})
