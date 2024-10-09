import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  cx,
  filterUndefined,
  getValidChildren,
  isUndefined,
} from "@yamada-ui/utils"
import { cloneElement } from "react"

interface AvatarGroupOptions {
  /**
   * The maximum number of visible avatars.
   */
  max?: number
}

export interface AvatarGroupProps
  extends AvatarGroupOptions,
    HTMLUIProps,
    ThemeProps<"Avatar"> {}

export const AvatarGroup = forwardRef<AvatarGroupProps, "div">((props, ref) => {
  const [styles] = useComponentMultiStyle("Avatar", props)
  const {
    className,
    borderColor,
    borderRadius = "fallback(full, 9999px)",
    children,
    gap = "fallback(-2, -0.5rem)",
    max,
    rounded = "fallback(full, 9999px)",
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
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        borderWidth: "2px",
        marginEnd: !i ? 0 : gap,
      }),
    ),
  )

  return (
    <ui.div
      ref={ref}
      className={cx("ui-avatar-group", className)}
      role="group"
      __css={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        ...styles.group,
      }}
      {...rest}
    >
      {excess > 0 ? (
        <ui.span
          className="ui-avatar__excess"
          borderRadius={borderRadius}
          ms={gap}
          rounded={rounded}
          __css={{
            alignItems: "center",
            borderWidth: "2px",
            display: "inline-flex",
            flexShrink: 0,
            fontWeight: "medium",
            justifyContent: "center",
            position: "relative",
            textAlign: "center",
            textTransform: "uppercase",
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

AvatarGroup.displayName = "AvatarGroup"
AvatarGroup.__ui__ = "AvatarGroup"
