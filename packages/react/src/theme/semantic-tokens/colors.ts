import { defineSemanticTokens } from "../../core"

export const colors = defineSemanticTokens.colors({
  current: "currentColor",
  transparent: "transparent",

  bg: {
    base: ["white", "black"],
    contrast: ["black", "white"],
    emphasized: ["black.300", "white.300"],
    error: ["error.50", "error.950"],
    ghost: ["black.50", "white.50"],
    info: ["info.50", "info.950"],
    muted: ["black.200", "white.200"],
    overlay: "blackAlpha.600",
    panel: ["black.bg", "white.bg"],
    subtle: ["black.100", "white.100"],
    success: ["success.50", "success.950"],
    warning: ["warning.50", "warning.950"],
  },
  border: {
    base: ["black.200", "white.300"],
    contrast: ["black", "white"],
    emphasized: ["black.300", "white.400"],
    error: ["error.500", "error.400"],
    info: ["info.500", "info.400"],
    muted: ["black.200", "white.300"],
    subtle: ["black.100", "white.200"],
    success: ["success.500", "success.400"],
    warning: ["warning.500", "warning.400"],
  },
  fg: {
    base: ["#171717", "#ededed"],
    contrast: ["#fafafa", "#000000"],
    emphasized: ["gray.600", "gray.300"],
    error: ["error.500", "error.500"],
    info: ["info.500", "info.500"],
    muted: ["gray.500", "gray.400"],
    subtle: ["gray.400", "gray.500"],
    success: ["success.500", "success.500"],
    warning: ["warning.500", "warning.500"],
  },

  black: {
    base: "#0a0b0b",
    bg: "#f8f8f8",
    contrast: "white",
    emphasized: "black.200",
    fg: "black.800",
    ghost: "black.100/50",
    muted: "black.100",
    outline: "black.900",
    solid: "black",
    subtle: "black.50",
  },
  white: {
    base: "#ffffff",
    bg: "#161616",
    contrast: "black",
    emphasized: "white.400/50",
    fg: "white.900",
    ghost: "white.200/50",
    muted: "white.300/50",
    outline: "white.800",
    solid: "white",
    subtle: "white.200/50",
  },

  gray: {
    base: "gray.500",
    bg: ["black.bg", "white.bg"],
    contrast: ["white", "white"],
    emphasized: ["black.200", "white.400/50"],
    fg: ["black.800", "white.900"],
    ghost: ["black.100/50", "white.200/50"],
    muted: ["black.100", "white.300/50"],
    outline: ["black.900", "white.800"],
    solid: ["gray.500", "gray.800"],
    subtle: ["black.50", "white.200/50"],
  },

  blue: {
    base: "blue.500",
    bg: ["blue.50/40", "blue.400/10"],
    contrast: ["white", "white"],
    emphasized: ["blue.200", "blue.700"],
    fg: ["blue.700", "blue.100"],
    ghost: ["blue.50", "blue.900/30"],
    muted: ["blue.100", "blue.800"],
    outline: ["blue.600", "blue.500"],
    solid: ["blue.500", "blue.600"],
    subtle: ["blue.50", "blue.900"],
  },
  cyan: {
    base: "cyan.500",
    bg: ["cyan.50/40", "cyan.400/10"],
    contrast: ["black", "black"],
    emphasized: ["cyan.200", "cyan.700"],
    fg: ["cyan.800", "cyan.100"],
    ghost: ["cyan.50", "cyan.900/30"],
    muted: ["cyan.100", "cyan.800"],
    outline: ["cyan.600", "cyan.500"],
    solid: ["cyan.400", "cyan.500"],
    subtle: ["cyan.50", "cyan.900"],
  },
  indigo: {
    base: "indigo.500",
    bg: ["indigo.50/40", "indigo.400/10"],
    contrast: ["white", "white"],
    emphasized: ["indigo.200", "indigo.700"],
    fg: ["indigo.700", "indigo.100"],
    ghost: ["indigo.50", "indigo.900/30"],
    muted: ["indigo.100", "indigo.800"],
    outline: ["indigo.600", "indigo.500"],
    solid: ["indigo.500", "indigo.600"],
    subtle: ["indigo.50", "indigo.900"],
  },
  sky: {
    base: "sky.500",
    bg: ["sky.50/40", "sky.400/10"],
    contrast: ["white", "white"],
    emphasized: ["sky.200", "sky.700"],
    fg: ["sky.700", "sky.100"],
    ghost: ["sky.50", "sky.900/30"],
    muted: ["sky.100", "sky.800"],
    outline: ["sky.600", "sky.500"],
    solid: ["sky.500", "sky.600"],
    subtle: ["sky.50", "sky.900"],
  },

  emerald: {
    base: "emerald.500",
    bg: ["emerald.50/40", "emerald.400/10"],
    contrast: ["white", "white"],
    emphasized: ["emerald.200", "emerald.700"],
    fg: ["emerald.700", "emerald.100"],
    ghost: ["emerald.50", "emerald.900/30"],
    muted: ["emerald.100", "emerald.800"],
    outline: ["emerald.600", "emerald.500"],
    solid: ["emerald.500", "emerald.600"],
    subtle: ["emerald.50", "emerald.900"],
  },
  green: {
    base: "green.500",
    bg: ["green.50/40", "green.400/10"],
    contrast: ["white", "white"],
    emphasized: ["green.200", "green.700"],
    fg: ["green.700", "green.100"],
    ghost: ["green.50", "green.900/30"],
    muted: ["green.100", "green.800"],
    outline: ["green.600", "green.500"],
    solid: ["green.500", "green.600"],
    subtle: ["green.50", "green.900"],
  },
  lime: {
    base: "lime.500",
    bg: ["lime.50/40", "lime.400/10"],
    contrast: ["black", "black"],
    emphasized: ["lime.200", "lime.700"],
    fg: ["lime.800", "lime.100"],
    ghost: ["lime.50", "lime.900/30"],
    muted: ["lime.100", "lime.800"],
    outline: ["lime.600", "lime.500"],
    solid: ["lime.400", "lime.500"],
    subtle: ["lime.50", "lime.900"],
  },
  teal: {
    base: "teal.500",
    bg: ["teal.50/40", "teal.400/10"],
    contrast: ["white", "white"],
    emphasized: ["teal.200", "teal.700"],
    fg: ["teal.700", "teal.100"],
    ghost: ["teal.50", "teal.900/30"],
    muted: ["teal.100", "teal.800"],
    outline: ["teal.600", "teal.500"],
    solid: ["teal.500", "teal.600"],
    subtle: ["teal.50", "teal.900"],
  },

  amber: {
    base: "amber.500",
    bg: ["amber.50/40", "amber.400/10"],
    contrast: ["black", "black"],
    emphasized: ["amber.200", "amber.700"],
    fg: ["amber.800", "amber.100"],
    ghost: ["amber.50", "amber.900/30"],
    muted: ["amber.100", "amber.800"],
    outline: ["amber.600", "amber.500"],
    solid: ["amber.400", "amber.500"],
    subtle: ["amber.50", "amber.900"],
  },
  yellow: {
    base: "yellow.500",
    bg: ["yellow.50/40", "yellow.400/10"],
    contrast: ["black", "black"],
    emphasized: ["yellow.200", "yellow.700"],
    fg: ["yellow.800", "yellow.100"],
    ghost: ["yellow.50", "yellow.900/30"],
    muted: ["yellow.100", "yellow.800"],
    outline: ["yellow.600", "yellow.500"],
    solid: ["yellow.400", "yellow.500"],
    subtle: ["yellow.50", "yellow.900"],
  },

  flashy: {
    base: "flashy.500",
    bg: ["flashy.50/40", "flashy.400/10"],
    contrast: ["white", "white"],
    emphasized: ["flashy.200", "flashy.700"],
    fg: ["flashy.700", "flashy.100"],
    ghost: ["flashy.50", "flashy.900/30"],
    muted: ["flashy.100", "flashy.800"],
    outline: ["flashy.600", "flashy.500"],
    solid: ["flashy.500", "flashy.600"],
    subtle: ["flashy.50", "flashy.900"],
  },
  orange: {
    base: "orange.500",
    bg: ["orange.50/40", "orange.400/10"],
    contrast: ["white", "white"],
    emphasized: ["orange.200", "orange.700"],
    fg: ["orange.700", "orange.100"],
    ghost: ["orange.50", "orange.900/30"],
    muted: ["orange.100", "orange.800"],
    outline: ["orange.600", "orange.500"],
    solid: ["orange.500", "orange.600"],
    subtle: ["orange.50", "orange.900"],
  },
  pink: {
    base: "pink.500",
    bg: ["pink.50/40", "pink.400/10"],
    contrast: ["white", "white"],
    emphasized: ["pink.200", "pink.700"],
    fg: ["pink.700", "pink.100"],
    ghost: ["pink.50", "pink.900/30"],
    muted: ["pink.100", "pink.800"],
    outline: ["pink.600", "pink.500"],
    solid: ["pink.500", "pink.600"],
    subtle: ["pink.50", "pink.900"],
  },
  red: {
    base: "red.500",
    bg: ["red.50/40", "red.400/10"],
    contrast: ["white", "white"],
    emphasized: ["red.200", "red.700"],
    fg: ["red.700", "red.100"],
    ghost: ["red.50", "red.900/30"],
    muted: ["red.100", "red.800"],
    outline: ["red.600", "red.500"],
    solid: ["red.500", "red.600"],
    subtle: ["red.50", "red.900"],
  },
  rose: {
    base: "rose.500",
    bg: ["rose.50/40", "rose.400/10"],
    contrast: ["white", "white"],
    emphasized: ["rose.200", "rose.700"],
    fg: ["rose.700", "rose.100"],
    ghost: ["rose.50", "rose.900/30"],
    muted: ["rose.100", "rose.800"],
    outline: ["rose.600", "rose.500"],
    solid: ["rose.500", "rose.600"],
    subtle: ["rose.50", "rose.900"],
  },

  fuchsia: {
    base: "fuchsia.500",
    bg: ["fuchsia.50/40", "fuchsia.400/10"],
    contrast: ["white", "white"],
    emphasized: ["fuchsia.200", "fuchsia.700"],
    fg: ["fuchsia.700", "fuchsia.100"],
    ghost: ["fuchsia.50", "fuchsia.900/30"],
    muted: ["fuchsia.100", "fuchsia.800"],
    outline: ["fuchsia.600", "fuchsia.500"],
    solid: ["fuchsia.500", "fuchsia.600"],
    subtle: ["fuchsia.50", "fuchsia.900"],
  },
  purple: {
    base: "purple.500",
    bg: ["purple.50/40", "purple.400/10"],
    contrast: ["white", "white"],
    emphasized: ["purple.200", "purple.700"],
    fg: ["purple.700", "purple.100"],
    ghost: ["purple.50", "purple.900/30"],
    muted: ["purple.100", "purple.800"],
    outline: ["purple.600", "purple.500"],
    solid: ["purple.500", "purple.600"],
    subtle: ["purple.50", "purple.900"],
  },
  violet: {
    base: "violet.500",
    bg: ["violet.50/40", "violet.400/10"],
    contrast: ["white", "white"],
    emphasized: ["violet.200", "violet.700"],
    fg: ["violet.700", "violet.100"],
    ghost: ["violet.50", "violet.900/30"],
    muted: ["violet.100", "violet.800"],
    outline: ["violet.600", "violet.500"],
    solid: ["violet.500", "violet.600"],
    subtle: ["violet.50", "violet.900"],
  },
})
