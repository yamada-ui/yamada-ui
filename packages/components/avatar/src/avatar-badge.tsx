import type { HTMLUIProps, CSSUIObject, AnimationStyle } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useAnimation } from "@yamada-ui/use-animation"
import { cx } from "@yamada-ui/utils"
import { useAvatarContext } from "./avatar"

type AvatarBadgeOptions = {
  /**
   * The placement of the badge.
   *
   * @default 'bottom-end'
   */
  placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end"
  /**
   * If `true`, make an element scale and fade like a radar ping or ripple of water.
   *
   * @default false
   */
  ping?: boolean
  /**
   * It is used for the color of the ping animation.
   *
   * @default '["blackAlpha.400", "whiteAlpha.500"]'
   */
  pingColor?: HTMLUIProps<"div">["backgroundColor"]
  /**
   * It is used for the scale of the ping animation.
   *
   * @default 1.8
   */
  pingScale?: number
  /**
   * It is used for the count of the ping animation.
   *
   * @default "infinite"
   */
  pingCount?: AnimationStyle["iterationCount"]
  /**
   * It is used for the duration of the ping animation.
   *
   * @default "1.4s"
   */
  pingDuration?: AnimationStyle["direction"]
}

export type AvatarBadgeProps = HTMLUIProps<"div"> & AvatarBadgeOptions

const placementStyles: Record<
  "top-start" | "top-end" | "bottom-start" | "bottom-end",
  CSSUIObject
> = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)",
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)",
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)",
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)",
  },
}

export const AvatarBadge = forwardRef<AvatarBadgeProps, "div">(
  (
    {
      className,
      boxSize = "1em",
      placement = "bottom-end",
      ping,
      pingColor = ["blackAlpha.400", "whiteAlpha.500"],
      pingDuration = "1.4s",
      pingCount = "infinite",
      pingScale = 1.8,
      children,
      ...rest
    },
    ref,
  ) => {
    const styles = useAvatarContext()
    const animation = useAnimation({
      keyframes: {
        "75%, 100%": {
          transform: `scale(${pingScale})`,
          opacity: 0,
        },
      },
      fillMode: "forwards",
      duration: pingDuration,
      timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      iterationCount: pingCount,
    })

    const css: CSSUIObject = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...placementStyles[placement],
      ...styles.badge,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-avatar__badge", className)}
        boxSize={boxSize}
        __css={css}
        {...rest}
      >
        {children}

        {ping ? (
          <ui.div
            className="ui-avatar__ping"
            __css={{
              position: "absolute",
              boxSize: "100%",
              rounded: "fallback(full, 9999px)",
              opacity: 0.75,
              zIndex: -1,
              bg: pingColor,
            }}
            animation={animation}
          />
        ) : null}
      </ui.div>
    )
  },
)
