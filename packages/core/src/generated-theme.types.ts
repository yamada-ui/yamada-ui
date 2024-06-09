import type { UITheme } from "./ui-theme.types"

export interface GeneratedTheme extends UITheme {
  animations: string & {}
  blurs: "sm" | "md" | "lg" | "xl" | "2xl" | (string & {})
  borders: string & {}
  breakpoints: "sm" | "md" | "lg" | "xl" | "2xl" | (string & {})
  colors:
    | "transparent"
    | "current"
    | "black"
    | "white"
    | "border"
    | "focus"
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
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "link"
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
    | (string & {})
  colorSchemes:
    | "whiteAlpha"
    | "blackAlpha"
    | "gray"
    | "neutral"
    | "red"
    | "danger"
    | "rose"
    | "pink"
    | "flashy"
    | "orange"
    | "warning"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "success"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "primary"
    | "info"
    | "link"
    | "indigo"
    | "violet"
    | "secondary"
    | "purple"
    | "fuchsia"
    | (string & {})
  fonts: "heading" | "body" | "mono" | (string & {})
  fontSizes:
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | (string & {})
  fontWeights:
    | "hairline"
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
    | (string & {})
  gradients: string & {}
  layerStyles: string & {}
  letterSpacings:
    | "tighter"
    | "tight"
    | "normal"
    | "wide"
    | "wider"
    | "widest"
    | (string & {})
  lineHeights:
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "normal"
    | "none"
    | "shorter"
    | "short"
    | "base"
    | "tall"
    | "taller"
    | (string & {})
  radii:
    | "none"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full"
    | (string & {})
  shadows:
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "outline"
    | "inline"
    | "inner"
    | "none"
    | "dark-sm"
    | "dark-md"
    | "dark-lg"
    | (string & {})
  sizes:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "12"
    | "14"
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
    | "72"
    | "80"
    | "96"
    | "xs"
    | "sm"
    | "md"
    | "normal"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "px"
    | "0.5"
    | "1.5"
    | "2.5"
    | "3.5"
    | "max"
    | "min"
    | "full"
    | "9xs"
    | "8xs"
    | "7xs"
    | "6xs"
    | "5xs"
    | "4xs"
    | "3xs"
    | "2xs"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | (string & {})
  spaces:
    | "1"
    | "-1"
    | "2"
    | "-2"
    | "3"
    | "-3"
    | "4"
    | "-4"
    | "5"
    | "-5"
    | "6"
    | "-6"
    | "7"
    | "-7"
    | "8"
    | "-8"
    | "9"
    | "-9"
    | "10"
    | "-10"
    | "12"
    | "-12"
    | "14"
    | "-14"
    | "16"
    | "-16"
    | "20"
    | "-20"
    | "24"
    | "-24"
    | "28"
    | "-28"
    | "32"
    | "-32"
    | "36"
    | "-36"
    | "40"
    | "-40"
    | "44"
    | "-44"
    | "48"
    | "-48"
    | "52"
    | "-52"
    | "56"
    | "-56"
    | "60"
    | "-60"
    | "64"
    | "-64"
    | "72"
    | "-72"
    | "80"
    | "-80"
    | "96"
    | "-96"
    | "xs"
    | "-xs"
    | "sm"
    | "-sm"
    | "md"
    | "-md"
    | "normal"
    | "-normal"
    | "lg"
    | "-lg"
    | "xl"
    | "-xl"
    | "2xl"
    | "-2xl"
    | "3xl"
    | "-3xl"
    | "4xl"
    | "-4xl"
    | "px"
    | "-px"
    | "0.5"
    | "-0.5"
    | "1.5"
    | "-1.5"
    | "2.5"
    | "-2.5"
    | "3.5"
    | "-3.5"
    | (string & {})
  textStyles: string & {}
  themeSchemes: "base" | (string & {})
  transitionDuration:
    | "ultra-fast"
    | "faster"
    | "fast"
    | "normal"
    | "slow"
    | "slower"
    | "ultra-slow"
    | (string & {})
  transitionEasing: "ease-in" | "ease-out" | "ease-in-out" | (string & {})
  transitionProperty:
    | "common"
    | "colors"
    | "dimensions"
    | "position"
    | "background"
    | (string & {})
  zIndices:
    | "yamcha"
    | "kurillin"
    | "nappa"
    | "guldo"
    | "jeice"
    | "burter"
    | "recoome"
    | "ginyu"
    | "dodoria"
    | "zarbon"
    | "freeza"
    | "vegeta"
    | "sonGoku"
    | "beerus"
    | (string & {})
  components: {
    Accordion: {
      sizes: string & {}
      variants: "basic" | "card" | "unstyled" | (string & {})
    }
    Alert: {
      sizes: string & {}
      variants:
        | "basic"
        | "subtle"
        | "solid"
        | "island-accent"
        | "left-accent"
        | "top-accent"
        | (string & {})
    }
    AlphaSlider: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    AreaChart: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    Autocomplete: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Avatar: {
      sizes: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | (string & {})
      variants: string & {}
    }
    Badge: {
      sizes: string & {}
      variants: "solid" | "subtle" | "outline" | (string & {})
    }
    BarChart: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    Button: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants:
        | "solid"
        | "outline"
        | "link"
        | "ghost"
        | "unstyled"
        | (string & {})
    }
    Calendar: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: "solid" | "subtle" | "unstyled" | (string & {})
    }
    Card: {
      sizes: "sm" | "md" | "normal" | "lg" | (string & {})
      variants:
        | "elevated"
        | "outline"
        | "solid"
        | "subtle"
        | "unstyled"
        | (string & {})
    }
    Carousel: {
      sizes: "sm" | "md" | "lg" | "xl" | (string & {})
      variants: string & {}
    }
    Checkbox: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    CloseButton: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    ColorPicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    ColorSelector: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    ColorSwatch: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: "basic" | "rounded" | (string & {})
    }
    DatePicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Dialog: {
      sizes:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "full"
        | (string & {})
      variants: string & {}
    }
    Divider: {
      sizes: string & {}
      variants: "solid" | "dashed" | "dotted" | (string & {})
    }
    DonutChart: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    Drawer: {
      sizes: "xs" | "sm" | "md" | "lg" | "xl" | "full" | (string & {})
      variants: string & {}
    }
    Dropzone: {
      sizes: "xs" | "sm" | "md" | "lg" | "full" | (string & {})
      variants: "solid" | "dashed" | "unstyled" | (string & {})
    }
    FileInput: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Heading: {
      sizes:
        | "4xl"
        | "3xl"
        | "2xl"
        | "xl"
        | "lg"
        | "md"
        | "sm"
        | "xs"
        | (string & {})
      variants: string & {}
    }
    HueSlider: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    Indicator: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: "solid" | "subtle" | (string & {})
    }
    Input: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    LineChart: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    Mark: {
      sizes: string & {}
      variants:
        | "solid"
        | "subtle"
        | "outline"
        | "text-accent"
        | "unstyled"
        | (string & {})
    }
    Modal: {
      sizes:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "full"
        | (string & {})
      variants: string & {}
    }
    MonthPicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    MultiAutocomplete: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    MultiDatePicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    MultiSelect: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    NativeSelect: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    NumberInput: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Pagination: {
      sizes: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
      variants: "solid" | "outline" | "ghost" | "unstyled" | (string & {})
    }
    PagingTable: {
      sizes: "sm" | "md" | "lg" | "xl" | (string & {})
      variants: "simple" | "striped" | "unstyled" | (string & {})
    }
    PieChart: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    PinInput: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Progress: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    RadarChart: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    Radio: { sizes: "sm" | "md" | "lg" | (string & {}); variants: string & {} }
    RangeDatePicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    RangeSlider: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    Rating: {
      sizes: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
      variants: string & {}
    }
    Reorder: {
      sizes: "sm" | "md" | "normal" | "lg" | (string & {})
      variants: "elevated" | "outline" | "unstyled" | (string & {})
    }
    Resizable: {
      sizes: string & {}
      variants: "border" | "spacer" | "unstyled" | (string & {})
    }
    SaturationSlider: {
      sizes: "sm" | "md" | "lg" | "full" | (string & {})
      variants: string & {}
    }
    SegmentedControl: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: "basic" | "rounded" | (string & {})
    }
    Select: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    NativeTable: {
      sizes: "sm" | "md" | "lg" | "xl" | (string & {})
      variants: "simple" | "striped" | "unstyled" | (string & {})
    }
    Slider: { sizes: "sm" | "md" | "lg" | (string & {}); variants: string & {} }
    Stepper: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: string & {}
    }
    Switch: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: "thick" | "thin" | (string & {})
    }
    Table: {
      sizes: "sm" | "md" | "lg" | "xl" | (string & {})
      variants: "simple" | "striped" | "unstyled" | (string & {})
    }
    Tabs: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants:
        | "line"
        | "sticky"
        | "sticky-subtle"
        | "sticky-solid"
        | "rounded"
        | "rounded-subtle"
        | "rounded-solid"
        | "unstyled"
        | (string & {})
    }
    Tag: {
      sizes: "sm" | "md" | "lg" | (string & {})
      variants: "solid" | "subtle" | "outline" | (string & {})
    }
    Textarea: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
    Toggle: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "subtle" | "solid" | "outline" | "unstyled" | (string & {})
    }
    YearPicker: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {})
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {})
    }
  }
}
