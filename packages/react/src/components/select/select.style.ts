import { defineComponentSlotStyle, focusRingStyle } from "../../core"
import { menuStyle } from "../menu"
import { nativeSelectStyle } from "../native-select"

export const selectStyle = defineComponentSlotStyle({
  base: {
    ...nativeSelectStyle.base,
    content: menuStyle.base?.content,
    field: {
      ...nativeSelectStyle.base?.field,
      alignItems: "center",
      display: "flex",
    },
    group: menuStyle.base?.group,
    indicator: menuStyle.base?.indicator,
    label: menuStyle.base?.label,
    option: menuStyle.base?.item,
    separator: menuStyle.base?.separator,
    valueText: { truncated: true, userSelect: "none" },
  },

  variants: {
    filled: {
      ...nativeSelectStyle.variants?.filled,
      field: {
        ...nativeSelectStyle.variants?.filled.field,
        _expanded: focusRingStyle.inside,
      },
    },
    flushed: {
      ...nativeSelectStyle.variants?.flushed,
      field: {
        ...nativeSelectStyle.variants?.flushed.field,
        _expanded: nativeSelectStyle.variants?.flushed.field?._focusVisible,
      },
    },
    outline: {
      ...nativeSelectStyle.variants?.outline,
      field: {
        ...nativeSelectStyle.variants?.outline.field,
        _expanded: focusRingStyle.inside,
      },
    },
    plain: {
      ...nativeSelectStyle.variants?.plain,
      field: {
        ...nativeSelectStyle.variants?.plain.field,
        _expanded: focusRingStyle.inside,
      },
    },
  },

  sizes: {
    xs: {
      ...nativeSelectStyle.sizes?.xs,
      content: menuStyle.sizes?.sm.content,
      indicator: menuStyle.sizes?.sm.indicator,
      label: menuStyle.sizes?.sm.label,
      option: menuStyle.sizes?.sm.item,
    },
    sm: {
      ...nativeSelectStyle.sizes?.sm,
      content: menuStyle.sizes?.md.content,
      indicator: menuStyle.sizes?.md.indicator,
      label: menuStyle.sizes?.md.label,
      option: menuStyle.sizes?.md.item,
    },
    md: {
      ...nativeSelectStyle.sizes?.md,
      content: menuStyle.sizes?.md.content,
      indicator: menuStyle.sizes?.md.indicator,
      label: menuStyle.sizes?.md.label,
      option: menuStyle.sizes?.md.item,
    },
    lg: {
      ...nativeSelectStyle.sizes?.lg,
      content: menuStyle.sizes?.lg.content,
      indicator: menuStyle.sizes?.lg.indicator,
      label: menuStyle.sizes?.lg.label,
      option: menuStyle.sizes?.lg.item,
    },
    xl: {
      ...nativeSelectStyle.sizes?.xl,
      content: menuStyle.sizes?.lg.content,
      indicator: menuStyle.sizes?.lg.indicator,
      label: menuStyle.sizes?.lg.label,
      option: menuStyle.sizes?.lg.item,
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type SelectStyle = typeof selectStyle
