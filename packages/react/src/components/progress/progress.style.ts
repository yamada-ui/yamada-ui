import { defineComponentSlotStyle } from "../../core"

export const progressStyle = defineComponentSlotStyle({
  base: {
    filledTrack: {
      bgColor: "{filledTrackColor}",
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
          value: "colorScheme.solid",
        },
      ],
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

  props: {
    /**
     * If `true`, the progress bar will show stripe.
     *
     * @default false
     */
    hasStripe: {
      true: {
        filledTrack: {
          bgImage: `linear-gradient(
            45deg,
            {color} 25%,
            transparent 25%,
            transparent 50%,
            {color} 50%,
            {color} 75%,
            transparent 75%,
            transparent
          )`,
          bgSize: "1rem 1rem",
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    hasStripe: false,
  },
})

export type ProgressStyle = typeof progressStyle
