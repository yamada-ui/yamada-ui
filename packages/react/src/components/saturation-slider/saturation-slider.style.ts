import { defineComponentSlotStyle } from "../../core"
import { hueSliderStyle } from "../hue-slider"
import { sliderStyle } from "../slider"

export const saturationSliderStyle = defineComponentSlotStyle({
  base: {
    root: {
      aspectRatio: "16 / 9",
      boxShadow: "inner",
      isolation: "isolate",
      maxW: "full",
      p: "calc({thumb-size} / 2)",
      rounded: "{root-rounded}",
      touchAction: "none",
      w: "full",
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
    thumb: {
      ...sliderStyle.base?.thumb,
      ...hueSliderStyle.base?.thumb,
      boxSize: "{thumb-size}",
      left: "{--x, 0%}",
      position: "absolute",
      rounded: "{thumb-rounded}",
      top: "{--y, 0%}",
      transform: "translate(-50%, -50%)",
    },
    track: {
      boxSize: "full",
      cursor: {
        base: "pointer",
        _readOnly: "default",
        _disabled: "not-allowed",
      },
      position: "relative",
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
          "--root-rounded": "radii.l2",
        },
      },
      rounded: {
        root: {
          ...sliderStyle.props?.shape.rounded.root,
          "--root-rounded": "radii.l2",
        },
      },
      square: {
        root: {
          ...sliderStyle.props?.shape.square.root,
          "--root-rounded": "0",
        },
      },
    },
  },

  sizes: {
    sm: {
      root: { "--thumb-size": hueSliderStyle.sizes?.sm.root["--thumb-size"] },
    },
    md: {
      root: { "--thumb-size": hueSliderStyle.sizes?.md.root["--thumb-size"] },
    },
    lg: {
      root: { "--thumb-size": hueSliderStyle.sizes?.lg.root["--thumb-size"] },
    },
  },

  defaultProps: {
    size: "md",
    shape: "circle",
  },
})

export type SaturationSliderStyle = typeof saturationSliderStyle
