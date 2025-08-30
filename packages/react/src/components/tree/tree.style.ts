import { defineComponentSlotStyle } from "../../core"

export const treeStyle = defineComponentSlotStyle({
  base: {
    branch: {
      listStyle: "none",
    },
    branchCheckbox: {
      mr: "2",
    },
    branchContent: {
      "--indent-size": "spaces.6",
      ml: "{indent-size}",
      pl: "1",
    },
    branchControl: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      focusVisibleRing: "inside",
      gap: "2",
      p: "1",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",

      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
        _hover: {
          bg: "transparent",
        },
      },
    },
    branchIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "xs",
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
      cursor: "pointer",
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
      cursor: "pointer",
      display: "flex",
      focusVisibleRing: "inside",
      gap: "2",
      p: "1",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _selected: {
        bg: "colorScheme.50",
        color: "colorScheme.600",
        _dark: {
          bg: "colorScheme.900",
          color: "colorScheme.200",
        },
      },
      _hover: {
        bg: "gray.100",
        _dark: {
          bg: "whiteAlpha.100",
        },
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    itemCheckbox: {
      mr: "2",
    },
    itemIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "xs",
      justifyContent: "center",
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
            left: "0",
            ml: "calc({indent-size} / 2 * -1)",
            position: "absolute",
            top: "0",
            w: "1px",
            _dark: {
              borderLeftColor: "border",
            },
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      branchContent: {
        "--indent-size": "spaces.4",
      },
      branchControl: {
        minH: "6",
        p: "0.5 1",
      },
      item: {
        minH: "6",
        p: "0.5 1",
      },
      root: {
        fontSize: "sm",
      },
    },
    md: {
      branchContent: {
        "--indent-size": "spaces.6",
      },
      branchControl: {
        minH: "8",
        p: "1",
      },
      item: {
        minH: "8",
        p: "1",
      },
      root: {
        fontSize: "md",
      },
    },
    lg: {
      branchContent: {
        "--indent-size": "spaces.8",
      },
      branchControl: {
        minH: "10",
        p: "1.5 2",
      },
      item: {
        minH: "10",
        p: "1.5 2",
      },
      root: {
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
      },
      item: {
        _notSelected: {
          layerStyle: "ghost",
          _hover: {
            layerStyle: "ghost.hover",
          },
        },
        _selected: {
          layerStyle: "solid",
        },
      },
    },
    outline: {
      branchControl: {
        layerStyle: "outline",
        _hover: {
          layerStyle: "solid.hover",
        },
      },
      item: {
        _notSelected: {
          layerStyle: "outline",
          _hover: {
            layerStyle: "outline.hover",
          },
        },
        _selected: {
          layerStyle: "solid",
          borderColor: "colorScheme.solid",
          borderWidth: "1px",
        },
      },
    },
    solid: {
      branchControl: {
        layerStyle: "solid",
        _hover: {
          layerStyle: "solid.hover",
        },
      },
      item: {
        _notSelected: {
          layerStyle: "solid",
          _hover: {
            layerStyle: "solid.hover",
          },
        },
        _selected: {
          layerStyle: "subtle",
        },
      },
    },
    subtle: {
      branchControl: {
        layerStyle: "subtle",
        _hover: {
          layerStyle: "subtle.hover",
        },
      },
      item: {
        _notSelected: {
          layerStyle: "subtle",
          _hover: {
            layerStyle: "subtle.hover",
          },
        },
        _selected: {
          layerStyle: "solid",
        },
      },
    },
    surface: {
      branchControl: {
        layerStyle: "surface",
        _hover: {
          layerStyle: "surface.hover",
        },
      },
      item: {
        _notSelected: {
          layerStyle: "surface",
          _hover: {
            layerStyle: "surface.hover",
          },
        },
        _selected: {
          layerStyle: "solid",
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
