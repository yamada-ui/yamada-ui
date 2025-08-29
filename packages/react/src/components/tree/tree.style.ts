import { defineComponentSlotStyle } from "../../core"

export const treeStyle = defineComponentSlotStyle({
  base: {
    branch: {
      listStyle: "none",
    },
    branchContent: {
      marginLeft: "1.5rem",
      paddingLeft: "0.25rem",
    },
    branchControl: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      gap: "0.5rem",
      padding: "0.25rem",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _hover: {
        backgroundColor: "gray.100",
        _dark: {
          backgroundColor: "whiteAlpha.100",
        },
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "blue.500",
        outlineOffset: "2px",
      },
    },
    branchIndentGuide: {
      borderLeft: "1px solid",
      borderLeftColor: "gray.200",
      height: "100%",
      marginLeft: "0.75rem",
      position: "absolute",
      width: "1px",
      _dark: {
        borderLeftColor: "whiteAlpha.200",
      },
    },
    branchIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "0.75rem",
      justifyContent: "center",
      transitionDuration: "moderate",
      transitionProperty: "transform",
      width: "1rem",
      _expanded: {
        transform: "rotate(90deg)",
      },
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
      background: "none",
      border: 0,
      color: "inherit",
      cursor: "pointer",
      display: "flex",
      fontSize: "inherit",
      outline: 0,
      padding: 0,
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "blue.500",
        outlineOffset: "2px",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      gap: "0.5rem",
      padding: "0.25rem",
      rounded: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _selected: {
        backgroundColor: "blue.50",
        color: "blue.600",
        _dark: {
          backgroundColor: "blue.900",
          color: "blue.200",
        },
      },
      _hover: {
        backgroundColor: "gray.100",
        _dark: {
          backgroundColor: "whiteAlpha.100",
        },
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "blue.500",
        outlineOffset: "2px",
      },
    },
    itemIndicator: {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      fontSize: "0.75rem",
      justifyContent: "center",
      width: "1rem",
    },
    itemText: {
      flex: 1,
      fontSize: "sm",
      lineHeight: "1.5",
    },
    label: {
      fontSize: "sm",
      fontWeight: "medium",
      marginBottom: "0.5rem",
    },
    root: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    tree: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  },

  sizes: {
    sm: {
      branchControl: {
        minHeight: "6",
        padding: "0.125rem 0.25rem",
      },
      item: {
        minHeight: "6",
        padding: "0.125rem 0.25rem",
      },
      root: {
        fontSize: "sm",
      },
    },
    md: {
      branchControl: {
        minHeight: "8",
        padding: "0.25rem",
      },
      item: {
        minHeight: "8",
        padding: "0.25rem",
      },
      root: {
        fontSize: "md",
      },
    },
    lg: {
      branchControl: {
        minHeight: "10",
        padding: "0.375rem 0.5rem",
      },
      item: {
        minHeight: "10",
        padding: "0.375rem 0.5rem",
      },
      root: {
        fontSize: "lg",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type TreeStyle = typeof treeStyle
