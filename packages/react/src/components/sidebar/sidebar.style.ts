import type {
  CSSObject,
  DefineComponentStyleSlotModifiers,
  DefineComponentStyleSlotProps,
} from "../../core"
import { defineComponentSlotStyle } from "../../core"

type Slot =
  | "button"
  | "content"
  | "footer"
  | "gap"
  | "group"
  | "groupContent"
  | "groupLabel"
  | "handle"
  | "header"
  | "item"
  | "itemContent"
  | "itemElement"
  | "itemIndicator"
  | "itemLabel"
  | "itemLink"
  | "itemTrigger"
  | "mainPanel"
  | "menu"
  | "root"
  | "sidePanel"

const sidebarMenuStyle: CSSObject = {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  fontSize: "{side-panel-item-font-size}",
  gap: "{side-panel-space}",
  h: "{side-panel-item-size}",
  lineHeight: "{side-panel-item-size}",
  minW: "{side-panel-item-size}",
  overflowX: "hidden",
  px: "{side-panel-space}",
  rounded: "{side-panel-item-rounded}",
  transitionDuration: "moderate",
  transitionProperty: "common",
  userSelect: "none",
  w: "full",
  _hover: { bg: "bg.subtle" },
  _disabled: { layerStyle: "disabled" },
}

const getSidebarTransitionStyle = (
  transitionProperty: CSSObject["transitionProperty"],
) => ({
  transitionDuration: "{side-panel-duration}",
  transitionProperty,
  transitionTimingFunction: "{side-panel-timing-function}",
})

export const sidebarStyle = defineComponentSlotStyle<
  Slot,
  DefineComponentStyleSlotProps<
    Slot,
    {
      mode: "icon" | "offcanvas"
      placement: "end" | "start"
      shape: "circle" | "rounded" | "square"
      withGroupGuideLine: "true"
      withGuideLine: "false" | "true"
    }
  >,
  DefineComponentStyleSlotModifiers<Slot>,
  DefineComponentStyleSlotModifiers<
    Slot,
    "outline" | "solid" | "subtle" | "surface"
  >
>({
  base: {
    button: {},
    content: {
      alignItems: "stretch",
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "{side-panel-gap}",
      overflowY: "auto",
      px: "{side-panel-space}",
    },
    footer: {
      "& [data-menu]": { h: "auto", minW: "auto", p: "{side-panel-space}" },
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      gap: "{side-panel-gap}",
      p: "{side-panel-space}",
    },
    gap: { _animated: getSidebarTransitionStyle("width") },
    group: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      _notFirst: { pt: "calc({side-panel-gap} * 3)" },
    },
    groupContent: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      gap: "{side-panel-gap}",
    },
    groupLabel: {
      color: "fg.muted",
      fontSize: "{side-panel-group-font-size}",
      h: "{side-panel-item-size}",
      lineHeight: "{side-panel-item-size}",
      mb: "{side-panel-gap}",
      minW: "{side-panel-item-size}",
      px: "{side-panel-space}",
      truncated: true,
    },
    handle: {
      focusVisibleRing: "none",
      insetY: "0",
      position: "absolute",
      transitionDuration: "moderate",
      transitionProperty: "backgrounds",
      w: "{side-panel-handle-width}",
      zIndex: "yamcha",
      _after: {
        insetY: "0",
        position: "absolute",
        transitionDuration: "moderate",
        transitionProperty: "left, right, background, transform",
        w: "1px",
      },
      _hover: { _after: { bg: "colorScheme.muted" } },
      _focusVisible: { _after: { bg: "colorScheme.outline" } },
    },
    header: {
      "& [data-menu]": { h: "auto", minW: "auto", p: "{side-panel-space}" },
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      p: "{side-panel-space}",
    },
    item: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    itemContent: {
      "& > :first-of-type": { mt: "{side-panel-gap}" },
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      gap: "{side-panel-gap}",
    },
    itemElement: {
      display: "inline-center",
      gap: "{side-panel-gap}",
      _icon: { fontSize: "{side-panel-item-icon-size}" },
    },
    itemIndicator: {
      color: "fg.subtle",
      fontSize: "{side-panel-item-icon-size}",
      transformOrigin: "center",
      _animated: {
        transitionDuration: "moderate",
        transitionProperty: "transform",
      },
      _expanded: { transform: "rotate(90deg)" },
    },
    itemLabel: { flex: "1", textAlign: "left", truncated: true },
    itemLink: { focusVisibleRing: "inside", ...sidebarMenuStyle },
    itemTrigger: { focusVisibleRing: "inside", ...sidebarMenuStyle },
    mainPanel: { flex: "1" },
    menu: sidebarMenuStyle,
    root: {
      "--height": "100dvh",
      "--side-panel-depth-space": "calc(({side-panel-space} * 2) - 1px)",
      "--side-panel-duration": "durations.moderate",
      "--side-panel-expanded-width": "min({sizes.xs}, {sizes.1/3})",
      "--side-panel-gap": "calc({side-panel-space} / 2)",
      "--side-panel-group-font-size": "fontSizes.xs",
      "--side-panel-handle-width": "calc({side-panel-space} * 2)",
      "--side-panel-height": "{height}",
      "--side-panel-item-font-size": "fontSizes.sm",
      "--side-panel-item-icon-size": "fontSizes.md",
      "--side-panel-item-size": "sizes.8",
      "--side-panel-space": "spaces.2",
      "--side-panel-timing-function": "linear",
      display: "flex",
      minH: "{height}",
      w: "full",
    },
    sidePanel: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      h: "{side-panel-height}",
      position: "fixed",
      w: "{side-panel-expanded-width}",
      _animated: getSidebarTransitionStyle("left, right, width"),
    },
  },

  props: {
    /**
     * The mode of the sidebar
     *
     * @default 'offcanvas'
     */
    mode: {
      icon: {
        footer: {
          "& [data-menu]": {
            _groupAnimated: getSidebarTransitionStyle("padding"),
            _groupCollapsed: { p: "0" },
          },
        },
        group: {
          _groupAnimated: getSidebarTransitionStyle("padding"),
          _groupCollapsed: { pt: "0" },
        },
        groupContent: {
          _groupAnimated: getSidebarTransitionStyle("padding"),
          _groupCollapsed: { ps: "0" },
        },
        groupLabel: {
          opacity: "1",
          _groupAnimated: getSidebarTransitionStyle("margin, opacity"),
          _groupCollapsed: {
            mt: "calc(({side-panel-item-size} + {side-panel-gap}) * -1)",
            opacity: "0",
            pointerEvents: "none",
          },
        },
        header: {
          "& [data-menu]": {
            _groupAnimated: getSidebarTransitionStyle("padding"),
            _groupCollapsed: { p: "0" },
          },
        },
        itemContent: {
          _groupAnimated: getSidebarTransitionStyle("padding"),
          _groupCollapsed: { ps: "0" },
        },
        itemIndicator: {
          opacity: "1",
          _groupAnimated: getSidebarTransitionStyle("opacity"),
          _groupCollapsed: { opacity: "0" },
        },
        itemLabel: {
          opacity: "1",
          _groupAnimated: getSidebarTransitionStyle("opacity"),
          _groupCollapsed: { opacity: "0" },
        },
        root: {
          "--side-panel-collapsed-width": "sizes.7xs",
        },
        sidePanel: {
          _groupCollapsed: { w: "{side-panel-collapsed-width}" },
        },
      },
      offcanvas: {
        handle: {
          _groupCollapsed: { _hover: { bg: "colorScheme.ghost" } },
        },
        root: {
          "--side-panel-collapsed-width": "0",
        },
      },
    },
    /**
     * The placement of the sidebar
     *
     * @default 'start'
     */
    placement: {
      end: {
        gap: {
          order: "2",
          w: "{side-panel-expanded-width}",
          _groupCollapsed: { w: "{side-panel-collapsed-width}" },
        },
        handle: {
          cursor: "e-resize",
          left: "0",
          transform: "translateX(-50%)",
          _after: {
            left: "50%",
            transform: "translateX(-50%)",
          },
          _groupCollapsed: { cursor: "w-resize" },
        },
        mainPanel: { order: "1" },
        sidePanel: { right: "0" },
      },
      start: {
        gap: {
          order: "1",
          w: "{side-panel-expanded-width}",
          _groupCollapsed: { w: "{side-panel-collapsed-width}" },
        },
        handle: {
          cursor: "w-resize",
          right: "0",
          transform: "translateX(50%)",
          _after: {
            right: "50%",
            transform: "translateX(50%)",
          },
          _groupCollapsed: { cursor: "e-resize" },
        },
        mainPanel: { order: "2" },
        sidePanel: { left: "0" },
      },
    },
    /**
     * The shape of the component
     *
     * @default 'rounded'
     */
    shape: {
      circle: {
        root: { "--side-panel-item-rounded": "radii.full" },
      },
      rounded: {
        root: { "--side-panel-item-rounded": "radii.l2" },
      },
      square: {
        root: { "--side-panel-item-rounded": "0" },
      },
    },
    /**
     * If `true`, display group guide lines.
     *
     * @default false
     */
    withGroupGuideLine: {
      true: {
        groupContent: {
          position: "relative",
          ps: "calc({side-panel-depth-space} * 2)",
          _before: {
            bg: "border",
            display: "block",
            h: "full",
            left: "{side-panel-depth-space}",
            position: "absolute",
            transform: "translateX(-50%)",
            w: "px",
            zIndex: "yamcha",
          },
        },
      },
    },
    /**
     * If `true`, display guide lines.
     *
     * @default false
     */
    withGuideLine: {
      false: {
        itemContent: { ps: "{side-panel-depth-space}" },
      },
      true: {
        itemContent: {
          position: "relative",
          ps: "calc({side-panel-depth-space} * 2)",
          _before: {
            bg: "border",
            display: "block",
            h: "calc({sizes.full} - {side-panel-gap})",
            left: "{side-panel-depth-space}",
            position: "absolute",
            top: "{side-panel-gap}",
            transform: "translateX(-50%)",
            w: "px",
            zIndex: "yamcha",
          },
        },
      },
    },
  },

  variants: {
    outline: {
      itemLink: { _selected: { layerStyle: "outline" } },
      itemTrigger: { _selected: { layerStyle: "outline" } },
    },
    solid: {
      itemLink: { _selected: { layerStyle: "solid" } },
      itemTrigger: { _selected: { layerStyle: "solid" } },
    },
    subtle: {
      itemLink: { _selected: { layerStyle: "subtle" } },
      itemTrigger: { _selected: { layerStyle: "subtle" } },
    },
    surface: {
      itemLink: { _selected: { layerStyle: "surface" } },
      itemTrigger: { _selected: { layerStyle: "surface" } },
    },
  },

  compounds: [
    {
      css: {
        handle: {
          _groupCollapsed: {
            _after: { right: "0", transform: "translateX(0%)" },
          },
        },
        sidePanel: {
          _groupCollapsed: { left: "calc({side-panel-expanded-width} * -1)" },
        },
      },
      mode: "offcanvas",
      placement: "start",
    },
    {
      css: {
        handle: {
          _groupCollapsed: {
            _after: { left: "0", transform: "translateX(0%)" },
          },
        },
        sidePanel: {
          _groupCollapsed: { right: "calc({side-panel-expanded-width} * -1)" },
        },
      },
      mode: "offcanvas",
      placement: "end",
    },
    {
      css: {
        groupContent: {
          _before: { ...getSidebarTransitionStyle("opacity") },
          _groupCollapsed: { _before: { opacity: "0", pointerEvents: "none" } },
        },
      },
      mode: "icon",
      withGroupGuideLine: true,
    },
    {
      css: {
        itemContent: {
          _before: getSidebarTransitionStyle("opacity"),
          _groupCollapsed: { _before: { opacity: "0", pointerEvents: "none" } },
        },
      },
      mode: "icon",
      withGuideLine: true,
    },
  ],

  defaultProps: {
    variant: "subtle",
    mode: "offcanvas",
    placement: "start",
    shape: "rounded",
    withGroupGuideLine: false,
    withGuideLine: false,
  },
})

export type SidebarStyle = typeof sidebarStyle
