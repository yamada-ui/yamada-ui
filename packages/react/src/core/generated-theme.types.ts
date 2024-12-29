import type { UITheme } from "./ui-theme.types"

export interface GeneratedTheme extends UITheme {
  animations: {} & string
  blurs: "2xl" | "lg" | "md" | "sm" | "xl" | ({} & string)
  borders: {} & string
  breakpoints: "2xl" | "lg" | "md" | "sm" | "xl" | ({} & string)
  colors:
    | "amber.50"
    | "amber.100"
    | "amber.200"
    | "amber.300"
    | "amber.400"
    | "amber.500"
    | "amber.600"
    | "amber.700"
    | "amber.800"
    | "amber.900"
    | "amber.950"
    | "black"
    | "black.50"
    | "black.100"
    | "black.200"
    | "black.300"
    | "black.400"
    | "black.500"
    | "black.600"
    | "black.700"
    | "black.800"
    | "black.900"
    | "black.950"
    | "blackAlpha.50"
    | "blackAlpha.100"
    | "blackAlpha.200"
    | "blackAlpha.300"
    | "blackAlpha.400"
    | "blackAlpha.500"
    | "blackAlpha.600"
    | "blackAlpha.700"
    | "blackAlpha.800"
    | "blackAlpha.900"
    | "blackAlpha.950"
    | "blue.50"
    | "blue.100"
    | "blue.200"
    | "blue.300"
    | "blue.400"
    | "blue.500"
    | "blue.600"
    | "blue.700"
    | "blue.800"
    | "blue.900"
    | "blue.950"
    | "border"
    | "colorScheme.50"
    | "colorScheme.100"
    | "colorScheme.200"
    | "colorScheme.300"
    | "colorScheme.400"
    | "colorScheme.500"
    | "colorScheme.600"
    | "colorScheme.700"
    | "colorScheme.800"
    | "colorScheme.900"
    | "colorScheme.950"
    | "colorScheme.contrast"
    | "colorScheme.emphasized"
    | "colorScheme.fg"
    | "colorScheme.muted"
    | "colorScheme.outline"
    | "colorScheme.solid"
    | "colorScheme.subtle"
    | "current"
    | "cyan.50"
    | "cyan.100"
    | "cyan.200"
    | "cyan.300"
    | "cyan.400"
    | "cyan.500"
    | "cyan.600"
    | "cyan.700"
    | "cyan.800"
    | "cyan.900"
    | "cyan.950"
    | "danger"
    | "danger.50"
    | "danger.100"
    | "danger.200"
    | "danger.300"
    | "danger.400"
    | "danger.500"
    | "danger.600"
    | "danger.700"
    | "danger.800"
    | "danger.900"
    | "danger.950"
    | "emerald.50"
    | "emerald.100"
    | "emerald.200"
    | "emerald.300"
    | "emerald.400"
    | "emerald.500"
    | "emerald.600"
    | "emerald.700"
    | "emerald.800"
    | "emerald.900"
    | "emerald.950"
    | "flashy.50"
    | "flashy.100"
    | "flashy.200"
    | "flashy.300"
    | "flashy.400"
    | "flashy.500"
    | "flashy.600"
    | "flashy.700"
    | "flashy.800"
    | "flashy.900"
    | "flashy.950"
    | "focus"
    | "fuchsia.50"
    | "fuchsia.100"
    | "fuchsia.200"
    | "fuchsia.300"
    | "fuchsia.400"
    | "fuchsia.500"
    | "fuchsia.600"
    | "fuchsia.700"
    | "fuchsia.800"
    | "fuchsia.900"
    | "fuchsia.950"
    | "gray.50"
    | "gray.100"
    | "gray.200"
    | "gray.300"
    | "gray.400"
    | "gray.500"
    | "gray.600"
    | "gray.700"
    | "gray.800"
    | "gray.900"
    | "gray.950"
    | "green.50"
    | "green.100"
    | "green.200"
    | "green.300"
    | "green.400"
    | "green.500"
    | "green.600"
    | "green.700"
    | "green.800"
    | "green.900"
    | "green.950"
    | "indigo.50"
    | "indigo.100"
    | "indigo.200"
    | "indigo.300"
    | "indigo.400"
    | "indigo.500"
    | "indigo.600"
    | "indigo.700"
    | "indigo.800"
    | "indigo.900"
    | "indigo.950"
    | "info"
    | "info.50"
    | "info.100"
    | "info.200"
    | "info.300"
    | "info.400"
    | "info.500"
    | "info.600"
    | "info.700"
    | "info.800"
    | "info.900"
    | "info.950"
    | "lime.50"
    | "lime.100"
    | "lime.200"
    | "lime.300"
    | "lime.400"
    | "lime.500"
    | "lime.600"
    | "lime.700"
    | "lime.800"
    | "lime.900"
    | "lime.950"
    | "link"
    | "link.50"
    | "link.100"
    | "link.200"
    | "link.300"
    | "link.400"
    | "link.500"
    | "link.600"
    | "link.700"
    | "link.800"
    | "link.900"
    | "link.950"
    | "muted"
    | "neutral.50"
    | "neutral.100"
    | "neutral.200"
    | "neutral.300"
    | "neutral.400"
    | "neutral.500"
    | "neutral.600"
    | "neutral.700"
    | "neutral.800"
    | "neutral.900"
    | "neutral.950"
    | "orange.50"
    | "orange.100"
    | "orange.200"
    | "orange.300"
    | "orange.400"
    | "orange.500"
    | "orange.600"
    | "orange.700"
    | "orange.800"
    | "orange.900"
    | "orange.950"
    | "pink.50"
    | "pink.100"
    | "pink.200"
    | "pink.300"
    | "pink.400"
    | "pink.500"
    | "pink.600"
    | "pink.700"
    | "pink.800"
    | "pink.900"
    | "pink.950"
    | "primary"
    | "primary.50"
    | "primary.100"
    | "primary.200"
    | "primary.300"
    | "primary.400"
    | "primary.500"
    | "primary.600"
    | "primary.700"
    | "primary.800"
    | "primary.900"
    | "primary.950"
    | "purple.50"
    | "purple.100"
    | "purple.200"
    | "purple.300"
    | "purple.400"
    | "purple.500"
    | "purple.600"
    | "purple.700"
    | "purple.800"
    | "purple.900"
    | "purple.950"
    | "red.50"
    | "red.100"
    | "red.200"
    | "red.300"
    | "red.400"
    | "red.500"
    | "red.600"
    | "red.700"
    | "red.800"
    | "red.900"
    | "red.950"
    | "rose.50"
    | "rose.100"
    | "rose.200"
    | "rose.300"
    | "rose.400"
    | "rose.500"
    | "rose.600"
    | "rose.700"
    | "rose.800"
    | "rose.900"
    | "rose.950"
    | "secondary"
    | "secondary.50"
    | "secondary.100"
    | "secondary.200"
    | "secondary.300"
    | "secondary.400"
    | "secondary.500"
    | "secondary.600"
    | "secondary.700"
    | "secondary.800"
    | "secondary.900"
    | "secondary.950"
    | "sky.50"
    | "sky.100"
    | "sky.200"
    | "sky.300"
    | "sky.400"
    | "sky.500"
    | "sky.600"
    | "sky.700"
    | "sky.800"
    | "sky.900"
    | "sky.950"
    | "success"
    | "success.50"
    | "success.100"
    | "success.200"
    | "success.300"
    | "success.400"
    | "success.500"
    | "success.600"
    | "success.700"
    | "success.800"
    | "success.900"
    | "success.950"
    | "teal.50"
    | "teal.100"
    | "teal.200"
    | "teal.300"
    | "teal.400"
    | "teal.500"
    | "teal.600"
    | "teal.700"
    | "teal.800"
    | "teal.900"
    | "teal.950"
    | "transparent"
    | "violet.50"
    | "violet.100"
    | "violet.200"
    | "violet.300"
    | "violet.400"
    | "violet.500"
    | "violet.600"
    | "violet.700"
    | "violet.800"
    | "violet.900"
    | "violet.950"
    | "warning"
    | "warning.50"
    | "warning.100"
    | "warning.200"
    | "warning.300"
    | "warning.400"
    | "warning.500"
    | "warning.600"
    | "warning.700"
    | "warning.800"
    | "warning.900"
    | "warning.950"
    | "white"
    | "white.50"
    | "white.100"
    | "white.200"
    | "white.300"
    | "white.400"
    | "white.500"
    | "white.600"
    | "white.700"
    | "white.800"
    | "white.900"
    | "white.950"
    | "whiteAlpha.50"
    | "whiteAlpha.100"
    | "whiteAlpha.200"
    | "whiteAlpha.300"
    | "whiteAlpha.400"
    | "whiteAlpha.500"
    | "whiteAlpha.600"
    | "whiteAlpha.700"
    | "whiteAlpha.800"
    | "whiteAlpha.900"
    | "whiteAlpha.950"
    | "yellow.50"
    | "yellow.100"
    | "yellow.200"
    | "yellow.300"
    | "yellow.400"
    | "yellow.500"
    | "yellow.600"
    | "yellow.700"
    | "yellow.800"
    | "yellow.900"
    | "yellow.950"
    | ({} & string)
  colorSchemes:
    | "amber"
    | "black"
    | "blackAlpha"
    | "blue"
    | "cyan"
    | "danger"
    | "emerald"
    | "flashy"
    | "fuchsia"
    | "gray"
    | "green"
    | "indigo"
    | "info"
    | "lime"
    | "link"
    | "mono"
    | "neutral"
    | "orange"
    | "pink"
    | "primary"
    | "purple"
    | "red"
    | "rose"
    | "secondary"
    | "sky"
    | "success"
    | "teal"
    | "violet"
    | "warning"
    | "white"
    | "whiteAlpha"
    | "yellow"
    | ({} & string)
  components: {
    Accordion: {
      sizes: {} & string
      variants: "basic" | "card" | "unstyled" | ({} & string)
    }
    Airy: { sizes: {} & string; variants: {} & string }
    Alert: {
      sizes: {} & string
      variants:
        | "basic"
        | "island-accent"
        | "left-accent"
        | "solid"
        | "subtle"
        | "surface"
        | "top-accent"
        | ({} & string)
    }
    AlphaSlider: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    AreaChart: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Autocomplete: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Avatar: {
      sizes: "2xl" | "2xs" | "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: {} & string
    }
    Badge: {
      sizes: {} & string
      variants: "outline" | "solid" | "subtle" | "surface" | ({} & string)
    }
    BarChart: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Blockquote: {
      sizes: {} & string
      variants: "plain" | "solid" | "subtle" | ({} & string)
    }
    Button: {
      sizes: "2xl" | "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants:
        | "ghost"
        | "link"
        | "outline"
        | "solid"
        | "subtle"
        | "surface"
        | "unstyled"
        | ({} & string)
    }
    Calendar: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: "solid" | "subtle" | "unstyled" | ({} & string)
    }
    Card: {
      sizes: "lg" | "md" | "normal" | "sm" | ({} & string)
      variants:
        | "elevated"
        | "outline"
        | "solid"
        | "subtle"
        | "unstyled"
        | ({} & string)
    }
    Carousel: {
      sizes: "lg" | "md" | "sm" | "xl" | ({} & string)
      variants: {} & string
    }
    Checkbox: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    CheckboxCard: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "outline" | "subtle" | "surface" | ({} & string)
    }
    CloseButton: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Code: {
      sizes: "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: "outline" | "solid" | "subtle" | "surface" | ({} & string)
    }
    ColorPicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    ColorSelector: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    ColorSwatch: {
      sizes: "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: "basic" | "rounded" | ({} & string)
    }
    DataList: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "bold" | "grid" | "subtle" | ({} & string)
    }
    DatePicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Dialog: {
      sizes:
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "full"
        | "lg"
        | "md"
        | "sm"
        | "xl"
        | "xs"
        | ({} & string)
      variants: {} & string
    }
    Divider: {
      sizes: {} & string
      variants: "dashed" | "dotted" | "solid" | ({} & string)
    }
    DonutChart: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Drawer: {
      sizes: "full" | "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: {} & string
    }
    Dropzone: {
      sizes: "full" | "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: "dashed" | "solid" | "unstyled" | ({} & string)
    }
    EmptyState: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    FileButton: {
      sizes: "2xl" | "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants:
        | "ghost"
        | "link"
        | "outline"
        | "solid"
        | "subtle"
        | "surface"
        | "unstyled"
        | ({} & string)
    }
    FileInput: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Flip: { sizes: {} & string; variants: {} & string }
    Heading: {
      sizes:
        | "2xl"
        | "3xl"
        | "4xl"
        | "lg"
        | "md"
        | "sm"
        | "xl"
        | "xs"
        | ({} & string)
      variants: {} & string
    }
    HueSlider: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Indicator: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "solid" | "subtle" | ({} & string)
    }
    Input: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    LineChart: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Mark: {
      sizes: {} & string
      variants:
        | "outline"
        | "solid"
        | "subtle"
        | "text-accent"
        | "unstyled"
        | ({} & string)
    }
    Modal: {
      sizes:
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "full"
        | "lg"
        | "md"
        | "sm"
        | "xl"
        | "xs"
        | ({} & string)
      variants: {} & string
    }
    MonthPicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    MultiAutocomplete: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    MultiDatePicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    MultiSelect: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    NativeSelect: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    NativeTable: {
      sizes: "lg" | "md" | "sm" | "xl" | ({} & string)
      variants: "simple" | "striped" | "unstyled" | ({} & string)
    }
    NumberInput: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Pagination: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants:
        | "ghost"
        | "outline"
        | "solid"
        | "subtle"
        | "surface"
        | "unstyled"
        | ({} & string)
    }
    PagingTable: {
      sizes: "lg" | "md" | "sm" | "xl" | ({} & string)
      variants: "simple" | "striped" | "unstyled" | ({} & string)
    }
    PasswordInput: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    PieChart: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    PinInput: {
      sizes: "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Progress: {
      sizes: "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: {} & string
    }
    RadarChart: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    RadialChart: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Radio: { sizes: "lg" | "md" | "sm" | ({} & string); variants: {} & string }
    RadioCard: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "outline" | "subtle" | "surface" | ({} & string)
    }
    RangeDatePicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    RangeSlider: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Rating: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: {} & string
    }
    Reorder: {
      sizes: "lg" | "md" | "normal" | "sm" | ({} & string)
      variants: "elevated" | "outline" | "unstyled" | ({} & string)
    }
    Resizable: {
      sizes: {} & string
      variants: "border" | "spacer" | "unstyled" | ({} & string)
    }
    Rotate: { sizes: {} & string; variants: {} & string }
    SaturationSlider: {
      sizes: "full" | "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    SegmentedControl: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "basic" | "rounded" | ({} & string)
    }
    Select: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Separator: {
      sizes: {} & string
      variants: "dashed" | "dotted" | "solid" | ({} & string)
    }
    Slider: { sizes: "lg" | "md" | "sm" | ({} & string); variants: {} & string }
    Status: { sizes: "lg" | "md" | "sm" | ({} & string); variants: {} & string }
    Stepper: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: {} & string
    }
    Switch: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "thick" | "thin" | ({} & string)
    }
    Table: {
      sizes: "lg" | "md" | "sm" | "xl" | ({} & string)
      variants: "simple" | "striped" | "unstyled" | ({} & string)
    }
    Tabs: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants:
        | "line"
        | "rounded"
        | "rounded-solid"
        | "rounded-subtle"
        | "sticky"
        | "sticky-solid"
        | "sticky-subtle"
        | "unstyled"
        | ({} & string)
    }
    Tag: {
      sizes: "lg" | "md" | "sm" | ({} & string)
      variants: "outline" | "solid" | "subtle" | "surface" | ({} & string)
    }
    Textarea: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
    Toggle: {
      sizes: "lg" | "md" | "sm" | "xs" | ({} & string)
      variants: "outline" | "solid" | "subtle" | "unstyled" | ({} & string)
    }
    YearPicker: {
      sizes: "lg" | "md" | "sm" | "xl" | "xs" | ({} & string)
      variants: "filled" | "flushed" | "outline" | "unstyled" | ({} & string)
    }
  }
  fonts: "body" | "heading" | "mono" | ({} & string)
  fontSizes:
    | "2xl"
    | "2xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "lg"
    | "md"
    | "sm"
    | "xl"
    | "xs"
    | ({} & string)
  fontWeights:
    | "black"
    | "bold"
    | "extrabold"
    | "hairline"
    | "light"
    | "medium"
    | "normal"
    | "semibold"
    | "thin"
    | ({} & string)
  gradients: {} & string
  layerStyles: {} & string
  letterSpacings:
    | "normal"
    | "tight"
    | "tighter"
    | "wide"
    | "wider"
    | "widest"
    | ({} & string)
  lineHeights:
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "base"
    | "none"
    | "normal"
    | "short"
    | "shorter"
    | "tall"
    | "taller"
    | ({} & string)
  radii:
    | "2xl"
    | "3xl"
    | "base"
    | "full"
    | "lg"
    | "md"
    | "none"
    | "sm"
    | "xl"
    | ({} & string)
  shadows:
    | "2xl"
    | "3xl"
    | "base"
    | "dark-lg"
    | "dark-md"
    | "dark-sm"
    | "inline"
    | "inner"
    | "lg"
    | "md"
    | "none"
    | "outline"
    | "sm"
    | "xl"
    | "xs"
    | ({} & string)
  sizes:
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "2xl"
    | "2xs"
    | "3"
    | "3.5"
    | "3xl"
    | "3xs"
    | "4"
    | "4.5"
    | "4xl"
    | "4xs"
    | "5"
    | "5.5"
    | "5xl"
    | "5xs"
    | "6"
    | "6.5"
    | "6xl"
    | "6xs"
    | "7"
    | "7.5"
    | "7xl"
    | "7xs"
    | "8"
    | "8xl"
    | "8xs"
    | "9"
    | "9xl"
    | "9xs"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "68"
    | "72"
    | "76"
    | "80"
    | "84"
    | "88"
    | "92"
    | "96"
    | "full"
    | "lg"
    | "max"
    | "md"
    | "min"
    | "px"
    | "sm"
    | "xl"
    | "xs"
    | ({} & string)
  spaces:
    | "-0.5"
    | "-1"
    | "-1.5"
    | "-2"
    | "-2.5"
    | "-2xl"
    | "-3"
    | "-3.5"
    | "-3xl"
    | "-4"
    | "-4.5"
    | "-4xl"
    | "-5"
    | "-5.5"
    | "-6"
    | "-6.5"
    | "-7"
    | "-7.5"
    | "-8"
    | "-9"
    | "-10"
    | "-11"
    | "-12"
    | "-13"
    | "-14"
    | "-15"
    | "-16"
    | "-20"
    | "-24"
    | "-28"
    | "-32"
    | "-36"
    | "-40"
    | "-44"
    | "-48"
    | "-52"
    | "-56"
    | "-60"
    | "-64"
    | "-68"
    | "-72"
    | "-76"
    | "-80"
    | "-84"
    | "-88"
    | "-92"
    | "-96"
    | "-lg"
    | "-md"
    | "-normal"
    | "-px"
    | "-sm"
    | "-xl"
    | "-xs"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "2xl"
    | "3"
    | "3.5"
    | "3xl"
    | "4"
    | "4.5"
    | "4xl"
    | "5"
    | "5.5"
    | "6"
    | "6.5"
    | "7"
    | "7.5"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "68"
    | "72"
    | "76"
    | "80"
    | "84"
    | "88"
    | "92"
    | "96"
    | "lg"
    | "md"
    | "normal"
    | "px"
    | "sm"
    | "xl"
    | "xs"
    | ({} & string)
  textStyles: {} & string
  themeSchemes: "base" | ({} & string)
  transitionDuration:
    | "fast"
    | "faster"
    | "normal"
    | "slow"
    | "slower"
    | "ultra-fast"
    | "ultra-slow"
    | ({} & string)
  transitionEasing: "ease-in" | "ease-in-out" | "ease-out" | ({} & string)
  transitionProperty:
    | "background"
    | "colors"
    | "common"
    | "dimensions"
    | "position"
    | ({} & string)
  zIndices:
    | "beerus"
    | "burter"
    | "dodoria"
    | "freeza"
    | "ginyu"
    | "guldo"
    | "jeice"
    | "kurillin"
    | "nappa"
    | "recoome"
    | "sonGoku"
    | "vegeta"
    | "yamcha"
    | "zarbon"
    | ({} & string)
}
