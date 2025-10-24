import { defineComponentSlotStyle } from "../../core"

export const sliderStyle = defineComponentSlotStyle({
  base: {
    mark: {
      "&[data-indicator]": {
        _before: {
          bg: "{indicator-fill}",
          boxSize: "{track-size}",
          position: "absolute",
          rounded: "{indicator-rounded}",
        },
        _between: {
          "--indicator-fill": "colorScheme.contrast",
        },
      },
      color: "fg.muted",
      fontSize: "xs",
      pointerEvents: "none",
      position: "absolute",
      textAlign: "center",
      whiteSpace: "nowrap",
      zIndex: 1,
    },
    range: {
      bg: "{range-fill}",
      position: "absolute",
      rounded: "{track-rounded}",
    },
    root: {
      "--indicator-rounded": "radii.full",
      "--track-rounded": "radii.full",
      alignItems: "center",
      display: "inline-flex",
      isolation: "isolate",
      position: "relative",
      touchAction: "none",
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
    thumb: {
      alignItems: "center",
      bg: "{thumb-fill}",
      borderColor: "{thumb-stroke}",
      borderWidth: "2px",
      boxSize: "{thumb-size}",
      color: "{thumb-stroke}",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      rounded: "{thumb-rounded}",
      zIndex: 2,
    },
    track: {
      bg: "{track-fill}",
      cursor: {
        base: "pointer",
        _readOnly: "default",
        _disabled: "not-allowed",
      },
      flex: "1",
      position: "relative",
      rounded: "{track-rounded}",
    },
  },

  props: {
    /**
     * The orientation of the slider.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        mark: {
          left: "{mark-position}",
          pt: "calc({track-size} + {spaces.2})",
          top: "0",
          translate: "-50% 0",
          _before: {
            left: "50%",
            top: "0",
            translate: "-50% 0",
          },
        },
        range: {
          h: "full",
          left: "{range-start}",
          top: "50%",
          translate: "0 -50%",
          w: "calc({range-end} - {range-start} + ({track-size} / 2))",
          _range: {
            left: "calc({range-start} - ({track-size} / 2))",
            w: "calc({range-end} - {range-start} + {track-size})",
          },
        },
        root: {
          flexDirection: "row",
          minW: "{thumb-size}",
          w: "full",
        },
        thumb: {
          top: "50%",
          translate: "-50% -50%",
          _end: { left: "{range-end}" },
          _start: { left: "{range-start}" },
        },
        track: {
          h: "{track-size}",
        },
      },
      vertical: {
        mark: {
          bottom: "{mark-position}",
          left: "0",
          lineHeight: "2",
          ps: "calc({track-size} + {spaces.3})",
          translate: "0 50%",
          _before: {
            left: "0",
            top: "50%",
            translate: "0 -50%",
          },
        },
        range: {
          bottom: "{range-start}",
          h: "calc({range-end} - {range-start} + ({track-size} / 2))",
          left: "50%",
          translate: "-50% 0",
          w: "full",
          _range: {
            bottom: "calc({range-start} - ({track-size} / 2))",
            h: "calc({range-end} - {range-start} + {track-size})",
          },
        },
        root: {
          flexDirection: "column",
          h: "full",
          minH: "{thumb-size}",
        },
        thumb: {
          left: "50%",
          translate: "-50% 50%",
          _end: { bottom: "{range-end}" },
          _start: { bottom: "{range-start}" },
        },
        track: {
          w: "{track-size}",
        },
      },
    },
    /**
     * The shape of the thumb.
     *
     * @default 'circle'
     */
    shape: {
      circle: {
        root: { "--thumb-rounded": "radii.full" },
      },
      rounded: {
        root: { "--thumb-rounded": "radii.l2" },
      },
      square: {
        root: { "--thumb-rounded": "0" },
      },
    },
  },

  variants: {
    base: {
      root: {
        _container: [
          {
            css: { "--track-fill": "colors.bg" },
            style: '--form-group-variant: "panel"',
          },
          {
            css: { "--track-fill": "colors.bg" },
            style: '--fieldset-root-variant: "panel"',
          },
          {
            css: { "--track-fill": "colors.bg" },
            style: '--form-group-variant: "elevated"',
          },
          {
            css: { "--track-fill": "colors.bg" },
            style: '--fieldset-root-variant: "elevated"',
          },
        ],
      },
    },
    outline: {
      root: {
        "--indicator-fill": "colorScheme.solid",
        "--range-fill": "colorScheme.solid",
        "--thumb-fill": "colors.bg",
        "--thumb-stroke": "colorScheme.solid",
        "--track-fill": "colors.bg.muted",
      },
    },
    solid: {
      root: {
        "--indicator-fill": "colorScheme.solid",
        "--range-fill": "colorScheme.solid",
        "--thumb-fill": "colorScheme.solid",
        "--thumb-stroke": "colorScheme.solid",
        "--track-fill": "colors.bg.muted",
      },
    },
  },

  sizes: {
    xs: {
      root: {
        "--thumb-size": "sizes.3",
        "--track-size": "sizes.1",
      },
    },
    sm: {
      root: {
        "--thumb-size": "sizes.4",
        "--track-size": "sizes.1.5",
      },
    },
    md: {
      root: {
        "--thumb-size": "sizes.5",
        "--track-size": "sizes.2",
      },
    },
    lg: {
      root: {
        "--thumb-size": "sizes.6",
        "--track-size": "sizes.2.5",
      },
    },
    xl: {
      root: {
        "--thumb-size": "sizes.7",
        "--track-size": "sizes.3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
    orientation: "horizontal",
    shape: "circle",
  },
})

export type SliderStyle = typeof sliderStyle
