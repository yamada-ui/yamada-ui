import { defineComponentSlotStyle } from "../../core"
import { sliderStyle } from "../slider"

export const hueSliderStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      position: "absolute",
      rounded: "{track-rounded}",
      top: "0",
      _horizontal: {
        h: "full",
        left: "calc({thumb-size} / 2 * -1)",
        w: "calc(full + {thumb-size})",
      },
      _vertical: {
        h: "calc(full + {thumb-size})",
        top: "calc({thumb-size} / 2 * -1)",
        w: "full",
      },
    },
    root: {},
    thumb: {
      "--thumb-stroke": "colors.white",
      borderWidth: "3px",
      boxShadow: "md",
    },
    track: {
      flex: "inherit",
      _horizontal: {
        ms: "calc({thumb-size} / 2)",
        w: "calc(full - {thumb-size})",
      },
      _vertical: {
        h: "calc(full - {thumb-size})",
        mt: "calc({thumb-size} / 2)",
      },
    },
  },

  props: {
    /**
     * The shape of the thumb.
     *
     * @default 'circle'
     */
    shape: {
      circle: {
        root: {
          ...sliderStyle.props?.shape.circle.root,
          "--track-rounded": "{thumb-rounded}",
        },
      },
      rounded: {
        root: {
          ...sliderStyle.props?.shape.rounded.root,
          "--track-rounded": "{thumb-rounded}",
        },
      },
      square: {
        root: {
          ...sliderStyle.props?.shape.square.root,
          "--track-rounded": "{thumb-rounded}",
        },
      },
    },
  },

  sizes: {
    xs: {
      root: {
        "--thumb-size": sliderStyle.sizes?.sm.root["--thumb-size"],
        "--track-size": sliderStyle.sizes?.sm.root["--thumb-size"],
      },
    },
    sm: {
      root: {
        "--thumb-size": sliderStyle.sizes?.sm.root["--thumb-size"],
        "--track-size": sliderStyle.sizes?.sm.root["--thumb-size"],
      },
    },
    md: {
      root: {
        "--thumb-size": sliderStyle.sizes?.md.root["--thumb-size"],
        "--track-size": sliderStyle.sizes?.md.root["--thumb-size"],
      },
    },
    lg: {
      root: {
        "--thumb-size": sliderStyle.sizes?.lg.root["--thumb-size"],
        "--track-size": sliderStyle.sizes?.lg.root["--thumb-size"],
      },
    },
    xl: {
      root: {
        "--thumb-size": sliderStyle.sizes?.lg.root["--thumb-size"],
        "--track-size": sliderStyle.sizes?.lg.root["--thumb-size"],
      },
    },
  },

  defaultProps: {
    size: "md",
    shape: "circle",
  },
})

export type HueSliderStyle = typeof hueSliderStyle
