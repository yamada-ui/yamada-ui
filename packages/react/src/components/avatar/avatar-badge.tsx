import type { AnimationStyle, CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { cx } from "../../utils"
import { useAvatarContext } from "./avatar"

const placementStyles: {
  [key in "bottom-end" | "bottom-start" | "top-end" | "top-start"]: CSSUIObject
} = {
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)",
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)",
  },
  "top-end": {
    insetEnd: "0",
    top: "0",
    transform: "translate(25%, -25%)",
  },
  "top-start": {
    insetStart: "0",
    top: "0",
    transform: "translate(-25%, -25%)",
  },
}

interface AvatarBadgeOptions {
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
  pingColor?: HTMLUIProps["backgroundColor"]
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
  /**
   * It is used for the scale of the ping animation.
   *
   * @default 1.8
   */
  pingScale?: number
  /**
   * The placement of the badge.
   *
   * @default 'bottom-end'
   */
  placement?: "bottom-end" | "bottom-start" | "top-end" | "top-start"
}

export interface AvatarBadgeProps extends AvatarBadgeOptions, HTMLUIProps {}

export const AvatarBadge: FC<AvatarBadgeProps> = ({
  className,
  boxSize = "1em",
  children,
  ping,
  pingColor = ["blackAlpha.400", "whiteAlpha.500"],
  pingCount = "infinite",
  pingDuration = "1.4s",
  pingScale = 1.8,
  placement = "bottom-end",
  ...rest
}) => {
  const styles = useAvatarContext()
  const animation = useAnimation({
    duration: pingDuration,
    fillMode: "forwards",
    iterationCount: pingCount,
    keyframes: {
      "75%, 100%": {
        opacity: 0,
        transform: `scale(${pingScale})`,
      },
    },
    timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  })

  return (
    <ui.div
      className={cx("ui-avatar__badge", className)}
      boxSize={boxSize}
      __css={{
        ...placementStyles[placement],
        ...styles.badge,
      }}
      {...rest}
    >
      {children}

      {ping ? (
        <ui.div
          className="ui-avatar__badge__ping"
          animation={animation}
          __css={{
            bg: pingColor,
            boxSize: "100%",
            opacity: 0.75,
            position: "absolute",
            rounded: "fallback(full, 9999px)",
            zIndex: -1,
          }}
        />
      ) : null}
    </ui.div>
  )
}

AvatarBadge.displayName = "AvatarBadge"
AvatarBadge.__ui__ = "AvatarBadge"
