import { defineComponentSlotStyle } from "../../core"

export const treeStyle = defineComponentSlotStyle({
  base: {
    branch: {
      listStyle: "none",
    },
    branchControl: {
      alignItems: "center",
      display: "flex",
      focusVisibleRing: "inside",
      gap: "2",
      p: "1",
      pl: "calc({depth} * {indent-size})",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    branchIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "xs",
      h: "9xs",
      justifyContent: "center",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "9xs",
    },
    branchText: {
      flex: 1,
      fontSize: "sm",
      fontWeight: "medium",
      lineHeight: "1.5",
    },
    branchTrigger: {
      alignItems: "center",
      appearance: "none",
      bg: "none",
      border: 0,
      color: "inherit",
      display: "flex",
      focusVisibleRing: "inside",
      fontSize: "inherit",
      gap: "2",
      outline: 0,
      p: 0,
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    checkbox: {
      mr: "2",
    },
    collectionName: {
      color: "colorScheme.600",
      flex: 1,
      fontSize: "sm",
      fontWeight: "semibold",
      lineHeight: "1.5",
      _dark: {
        color: "colorScheme.200",
      },
    },
    item: {
      alignItems: "center",
      cursor: "default",
      display: "flex",
      focusVisibleRing: "inside",
      gap: "2",
      p: "1",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        layerStyle: "disabled",
      },
    },

    itemIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "xs",
      h: "9xs",
      justifyContent: "center",
      p: "1",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "9xs",
    },
    itemText: {
      flex: 1,
      fontSize: "sm",
      lineHeight: "1.5",
    },
    label: {
      fontSize: "sm",
      fontWeight: "medium",
      mb: "2",
    },
    root: {
      listStyle: "none",
      m: 0,
      p: 0,
    },
    tree: {
      listStyle: "none",
      m: 0,
      p: 0,
    },
  },

  props: {
    /**
     * Whether to show the indentation guide.
     *
     * @default false
     */
    showIndentGuide: {
      true: {
        branchContent: {
          position: "relative",
          _before: {
            borderLeft: "1px solid",
            borderLeftColor: "border",
            content: '""',
            display: "block",
            h: "100%",
            left: "calc(({depth} * {indent-size}) + {spaces.2})",
            position: "absolute",
            top: "0",
            w: "1px",
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      branchControl: {
        p: "0.5",
        pl: "calc({depth} * {indent-size})",
      },
      item: {
        p: "0.5",
        pl: "max(calc({depth} * {indent-size}), {spaces.0.5})",
      },
      root: {
        "--indent-size": "{spaces.4}",
        fontSize: "sm",
      },
    },
    md: {
      branchControl: {
        p: "1",
        pl: "calc({depth} * {indent-size})",
      },
      item: {
        p: "1",
        pl: "max(calc({depth} * {indent-size}), {spaces.1})",
      },
      root: {
        "--indent-size": "{spaces.6}",
        fontSize: "md",
      },
    },
    lg: {
      branchControl: {
        p: "1.5",
        pl: "calc({depth} * {indent-size})",
      },
      item: {
        p: "1.5",
        pl: "max(calc({depth} * {indent-size}), {spaces.1.5})",
      },
      root: {
        "--indent-size": "{spaces.8}",
        fontSize: "lg",
      },
    },
  },

  variants: {
    ghost: {
      branchControl: {
        layerStyle: "ghost",
        _hover: {
          layerStyle: "ghost.hover",
        },
        _selected: {
          layerStyle: "ghost.hover",
        },
      },
      item: {
        layerStyle: "ghost",
        _hover: {
          layerStyle: "ghost.hover",
        },
        _selected: {
          layerStyle: "ghost.hover",
        },
      },
    },
    item: {
      layerStyle: "subtle",
      _hover: {
        layerStyle: "subtle.hover",
        _selected: {
          layerStyle: "subtle.hover",
        },
      },
    },
    outline: {
      branchControl: {
        layerStyle: "outline",
        _hover: {
          layerStyle: "outline.hover",
        },
        _selected: {
          layerStyle: "outline.hover",
        },
      },
      item: {
        layerStyle: "outline",
        _hover: {
          layerStyle: "outline.hover",
        },
        _selected: {
          layerStyle: "outline.hover",
        },
      },
    },
    solid: {
      branchControl: {
        layerStyle: "solid",
        _hover: {
          layerStyle: "solid.hover",
        },
        _selected: {
          layerStyle: "solid.hover",
        },
      },
      item: {
        layerStyle: "solid",
        _hover: {
          layerStyle: "solid.hover",
        },
        _selected: {
          layerStyle: "solid.hover",
        },
      },
    },
    subtle: {
      branchControl: {
        layerStyle: "subtle",
        _hover: {
          layerStyle: "subtle.hover",
        },
        _selected: {
          layerStyle: "subtle.hover",
        },
      },
    },
    surface: {
      branchControl: {
        layerStyle: "surface",
        _hover: {
          layerStyle: "surface.hover",
        },
        _selected: {
          layerStyle: "surface.hover",
        },
      },
      item: {
        layerStyle: "surface",
        _hover: {
          layerStyle: "surface.hover",
        },
        _selected: {
          layerStyle: "surface.hover",
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "ghost",
  },
})

export type TreeStyle = typeof treeStyle
