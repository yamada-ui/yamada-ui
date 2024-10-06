import type { ComponentMultiStyle, UIMultiStyle } from "@yamada-ui/core"
import { isGray, tintColor, transparentizeColor } from "@yamada-ui/utils"

export const NativeTable: ComponentMultiStyle<"NativeTable"> = {
  baseStyle: {
    caption: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontFamily: "heading",
      fontWeight: "medium",
      textAlign: "center",
    },
    container: {
      w: "100%",
    },
    table: {
      borderCollapse: "collapse",
      fontVariantNumeric: "lining-nums tabular-nums",
      h: "100%",
      w: "100%",
    },
    td: {
      textAlign: "start",
    },
    th: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontFamily: "heading",
      fontWeight: "semibold",
      letterSpacing: "wider",
      textAlign: "start",
      textTransform: "uppercase",
    },
    tr: {
      _disabled: {
        _hover: {
          bg: ["initial", "initial"],
        },
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
  },

  sizes: {
    sm: {
      caption: {
        fontSize: "xs",
        mt: 1,
        px: 2,
        py: 1,
      },
      container: {
        gap: 2,
      },
      td: {
        fontSize: "xs",
        lineHeight: 5,
        px: 2,
        py: 1,
      },
      th: {
        fontSize: "xs",
        lineHeight: 5,
        px: 2,
        py: 1,
      },
    },
    md: {
      caption: {
        fontSize: "sm",
        mt: 2,
        px: 3,
        py: 2,
      },
      container: {
        gap: 4,
      },
      td: {
        fontSize: "sm",
        lineHeight: 5,
        px: 3,
        py: 2,
      },
      th: {
        fontSize: "sm",
        lineHeight: 5,
        px: 3,
        py: 2,
      },
    },
    lg: {
      caption: {
        mt: 3,
        px: 4,
        py: 3,
      },
      container: {
        gap: 6,
      },
      td: {
        lineHeight: 6,
        px: 4,
        py: 3,
      },
      th: {
        lineHeight: 6,
        px: 4,
        py: 3,
      },
    },
    xl: {
      caption: {
        fontSize: "lg",
        mt: 4,
        px: 6,
        py: 4,
      },
      container: {
        gap: 8,
      },
      td: {
        fontSize: "lg",
        lineHeight: 6,
        px: 6,
        py: 4,
      },
      th: {
        fontSize: "lg",
        lineHeight: 6,
        px: 6,
        py: 4,
      },
    },
  },

  variants: {
    simple: (({
      colorMode: m,
      colorScheme: c = "gray",
      highlightOnHover,
      highlightOnSelected,
      theme: t,
      withBorder,
      withColumnBorders,
    }) => ({
      table: {
        ...(withBorder ? { borderWidth: "1px" } : {}),
      },
      tbody: {
        tr: {
          ...(highlightOnSelected
            ? {
                _selected: {
                  bg: [
                    isGray(c)
                      ? tintColor(`${c}.50`, 72)(t, m)
                      : tintColor(`${c}.50`, 64)(t, m),
                    transparentizeColor(`${c}.300`, 0.04)(t, m),
                  ],
                },
              }
            : {}),
          ...(highlightOnHover
            ? {
                _hover: {
                  bg: [
                    transparentizeColor(`${c}.400`, 0.08)(t, m),
                    transparentizeColor(`${c}.300`, 0.12)(t, m),
                  ],
                },
                cursor: "pointer",
                transitionDuration: "slow",
                transitionProperty: "common",
              }
            : {}),
        },
      },
      td: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
        ...(withColumnBorders ? { _notLast: { borderRightWidth: "1px" } } : {}),
      },
      tfoot: {
        tr: {
          _last: {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      th: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
        ...(withColumnBorders ? { _notLast: { borderRightWidth: "1px" } } : {}),
      },
    })) as UIMultiStyle,
    striped: (({
      colorMode: m,
      colorScheme: c = "gray",
      highlightOnHover,
      theme: t,
      withBorder,
      withColumnBorders,
    }) => ({
      table: {
        ...(withBorder ? { borderWidth: "1px" } : {}),
      },
      tbody: {
        tr: {
          _odd: {
            bg: [
              isGray(c)
                ? tintColor(`${c}.50`, 72)(t, m)
                : tintColor(`${c}.50`, 64)(t, m),
              transparentizeColor(`${c}.300`, 0.04)(t, m),
            ],
          },
          ...(highlightOnHover
            ? {
                _hover: {
                  bg: [
                    transparentizeColor(`${c}.400`, 0.08)(t, m),
                    transparentizeColor(`${c}.300`, 0.12)(t, m),
                  ],
                },
                cursor: "pointer",
                transitionDuration: "slow",
                transitionProperty: "common",
              }
            : {}),
        },
      },
      td: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
        ...(withColumnBorders ? { _notLast: { borderRightWidth: "1px" } } : {}),
      },
      tfoot: {
        tr: {
          _last: {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      th: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
        ...(withColumnBorders ? { _notLast: { borderRightWidth: "1px" } } : {}),
      },
    })) as UIMultiStyle,
    unstyled: {},
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "simple",
  },
}
