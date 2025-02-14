import type { ComponentMultiStyle } from "../../core"

export const Progress: ComponentMultiStyle<"Progress"> = {
  baseStyle: {
    filledTrack: ({
      colorScheme: c = "primary",
      filledTrackColor,
      hasStripe,
      isAnimation,
    }) => {
      hasStripe = !isAnimation && hasStripe

      return {
        bgImage: hasStripe
          ? `linear-gradient(
            45deg,
            $color 25%,
            transparent 25%,
            transparent 50%,
            $color 50%,
            $color 75%,
            transparent 75%,
            transparent
          )`
          : isAnimation
            ? `linear-gradient(
            to right,
            transparent 0%,
            $filledTrackColor 50%,
            transparent 100%
          )`
            : undefined,
        transitionDuration: "slow",
        transitionProperty: "common",
        vars: [
          {
            name: "color",
            token: "colors",
            value: ["rgba(255, 255, 255, 0.15)", "rgba(0,0,0,0.1)"],
          },
          {
            name: "filledTrackColor",
            token: "colors",
            value: filledTrackColor
              ? filledTrackColor
              : [`${c}.500`, `${c}.600`],
          },
        ],
        ...(hasStripe ? { bgSize: "1rem 1rem" } : {}),
        ...(!isAnimation ? { bgColor: "$filledTrackColor" } : {}),
      }
    },
    track: {
      bg: "border",
      overflow: "hidden",
      pos: "relative",
      w: "100%",
    },
  },

  sizes: {
    xs: {
      track: {
        h: "1",
      },
    },
    sm: {
      track: {
        h: "2",
      },
    },
    md: {
      track: {
        h: "3",
      },
    },
    lg: {
      track: {
        h: "4",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
