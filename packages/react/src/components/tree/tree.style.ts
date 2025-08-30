import { defineComponentSlotStyle } from "../../core"

export const treeStyle = defineComponentSlotStyle({
  base: {
    branch: {
      listStyle: "none",
    },
    branchCheckbox: {
      mr: "0.5rem",
    },
    branchContent: {
      "--indent-size": "1.5rem",
      ml: "{indent-size}",
      pl: "0.25rem",
    },
    branchControl: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      focusVisibleRing: "inside",
      gap: "0.5rem",
      p: "0.25rem",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
    },
    branchIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "0.75rem",
      justifyContent: "center",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "1rem",
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
      gap: "0.5rem",
      p: "0.25rem",
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
      mr: "0.5rem",
    },
    itemIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "0.75rem",
      justifyContent: "center",
      w: "1rem",
    },
    itemText: {
      flex: 1,
      fontSize: "sm",
      lineHeight: "1.5",
    },
    label: {
      fontSize: "sm",
      fontWeight: "medium",
      mb: "0.5rem",
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
      branchControl: {
        minH: "6",
        p: "0.125rem 0.25rem",
      },
      item: {
        minH: "6",
        p: "0.125rem 0.25rem",
      },
      root: {
        fontSize: "sm",
      },
    },
    md: {
      branchControl: {
        minH: "8",
        p: "0.25rem",
      },
      item: {
        minH: "8",
        p: "0.25rem",
      },
      root: {
        fontSize: "md",
      },
    },
    lg: {
      branchControl: {
        minH: "10",
        p: "0.375rem 0.5rem",
      },
      item: {
        minH: "10",
        p: "0.375rem 0.5rem",
      },
      root: {
        fontSize: "lg",
      },
    },
  },

  variants: {
    ghost: {
      branchControl: {
        _hover: {
          bg: "gray.100",
          _dark: {
            bg: "whiteAlpha.100",
          },
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.6,
          _hover: {
            bg: "transparent",
          },
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
        _hover: {
          bg: "gray.100",
          _dark: {
            bg: "whiteAlpha.100",
          },
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.6,
          _hover: {
            bg: "transparent",
          },
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
        _hover: {
          bg: "gray.100",
          _dark: {
            bg: "whiteAlpha.100",
          },
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.6,
          _hover: {
            bg: "transparent",
          },
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
        _hover: {
          bg: "gray.100",
          _dark: {
            bg: "whiteAlpha.100",
          },
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.6,
          _hover: {
            bg: "transparent",
          },
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
        _hover: {
          bg: "gray.100",
          _dark: {
            bg: "whiteAlpha.100",
          },
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.6,
          _hover: {
            bg: "transparent",
          },
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
