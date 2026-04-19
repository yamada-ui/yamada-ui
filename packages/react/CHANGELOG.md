# @yamada-ui/react

## 2.2.1

### Patch Changes

- [#6586](https://github.com/yamada-ui/yamada-ui/pull/6586) [`9200ad4`](https://github.com/yamada-ui/yamada-ui/commit/9200ad437f288e5a5905fdff2b51110c6633c23d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `Autocomplete` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6614](https://github.com/yamada-ui/yamada-ui/pull/6614) [`d2dcc4c`](https://github.com/yamada-ui/yamada-ui/commit/d2dcc4cb12839e3db9c6460be28dbba767959121) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in Chart polar/cartesian/legend sub-components so user props merge with context/getter props without overwriting class names, styles, refs, and event handlers.

- [#6596](https://github.com/yamada-ui/yamada-ui/pull/6596) [`b535880`](https://github.com/yamada-ui/yamada-ui/commit/b535880a6ee27460049c01fe2754dd4df5a555c7) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `ColorPicker` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6597](https://github.com/yamada-ui/yamada-ui/pull/6597) [`8c1b7c0`](https://github.com/yamada-ui/yamada-ui/commit/8c1b7c06f92f7d3bc016aca201c2d152067d709b) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `ColorSelector` slider and color swatch sub-components so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6590](https://github.com/yamada-ui/yamada-ui/pull/6590) [`23d008b`](https://github.com/yamada-ui/yamada-ui/commit/23d008bc50926e5c6b12e53a265de10998182399) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `DatePicker` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6611](https://github.com/yamada-ui/yamada-ui/pull/6611) [`3a46156`](https://github.com/yamada-ui/yamada-ui/commit/3a46156e33fc88dc764f96bb7803e66f938dccf6) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `FileInput` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6588](https://github.com/yamada-ui/yamada-ui/pull/6588) [`7d51f73`](https://github.com/yamada-ui/yamada-ui/commit/7d51f732a10a28e8f2cbd8f2dd52ae47268333f1) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `NativeSelect` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6612](https://github.com/yamada-ui/yamada-ui/pull/6612) [`f32febe`](https://github.com/yamada-ui/yamada-ui/commit/f32febec0db688e3e2e70e0ad0e2d64b73e4fcd6) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `NumberInputRoot` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6618](https://github.com/yamada-ui/yamada-ui/pull/6618) [`bcfc8a9`](https://github.com/yamada-ui/yamada-ui/commit/bcfc8a9ed8037635021fd824bf87e8239b3c4eb3) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fix DataList term and description prop merging to preserve both context and user-provided props.

- [#6617](https://github.com/yamada-ui/yamada-ui/pull/6617) [`1ae2d09`](https://github.com/yamada-ui/yamada-ui/commit/1ae2d0919b83576385b13c2b06b9e551780e1a9b) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fix Pagination item triggers overwrite user props by merging props via mergeProps.

- [#6587](https://github.com/yamada-ui/yamada-ui/pull/6587) [`0eb231a`](https://github.com/yamada-ui/yamada-ui/commit/0eb231a15dbd7d64e19dacb9a6db2b192a161655) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `Select` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

- [#6619](https://github.com/yamada-ui/yamada-ui/pull/6619) [`1213843`](https://github.com/yamada-ui/yamada-ui/commit/1213843a7986f56a4b5f78322e56f122f7a03ad8) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - fix(rating): merge user props with context props via mergeProps

- [#6608](https://github.com/yamada-ui/yamada-ui/pull/6608) [`8377076`](https://github.com/yamada-ui/yamada-ui/commit/83770762a927f30bc4bd25986586ad595f5b8ca6) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Use `mergeProps` in `PasswordInput` and `StrengthMeter` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.

## 2.2.0

### Minor Changes

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `ExtractStyleValue` type.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - New icons have been added. Brand icons have been removed. If you were using brand icons, you need to replace them with alternative icons.

  - ChromiumIcon
  - CodepenIcon
  - CodesandboxIcon
  - DribbbleIcon
  - FacebookIcon
  - FigmaIcon
  - FramerIcon
  - GithubIcon
  - GitlabIcon
  - InstagramIcon
  - LinkedInIcon
  - PocketIcon
  - RailSymbolIcon
  - SlackIcon
  - TwitterIcon
  - TwitchIcon
  - TrelloIcon
  - YouTubeIcon

  We recommend to use the official SVG icons provided by the respective brands, most of them can be found on their websites or in their brand guidelines.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `"number"` variant to `Timeline` component.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Properties such as `placement` and `gutter` for components like `Popover` and `Select` now support responsive design and color mode.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `Tree` component.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - `usePopper` now supports the `"center-start-start"`, `"center-start-end"`, `"center-end-start"`, and `"center-end-end"` placements. Accordingly, `Popover` and `Tooltip` now also support these placements.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `ActionBar` component.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Changed from `getPopupAnimationProps` to `usePopupAnimationProps` to enable responsive design and color mode support for the `animationScheme` and `duration` properties of `Popover`.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_peer` to condition props.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `rootNode` to `UIProvider` component.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - The `animationScheme` and `duration` properties for components such as `Popover`, `Tooltip`, and `Modal` now support responsive design and color mode.

### Patch Changes

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `DefineComponentStyleProps`, `DefineComponentStyleModifiers`, `DefineComponentStyleSlotProps` and `DefineComponentStyleSlotModifiers` types.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the border style and thickness were being overwritten for `solid`, `subtle`, and `surface` in `layerStyle`.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `Sidebar` component.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_collapsed` and `_content` to condition props.

- [#6394](https://github.com/yamada-ui/yamada-ui/pull/6394) [`11b2933`](https://github.com/yamada-ui/yamada-ui/commit/11b2933f1a3f667d885de0f133c21352e0f57632) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Allowed `undefined` as an argument for `mergeProps`.

- [#6407](https://github.com/yamada-ui/yamada-ui/pull/6407) [`18cdb67`](https://github.com/yamada-ui/yamada-ui/commit/18cdb675ce76b95ebea588abd27bc42ce823ce96) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - `InfiniteScrollArea` now sets the `overflow` style by default.

- [#6405](https://github.com/yamada-ui/yamada-ui/pull/6405) [`0b551af`](https://github.com/yamada-ui/yamada-ui/commit/0b551af4f184cd2d4a0dfd842e4cf0a3c200ae29) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where React warnings appeared during rendering of `ColorModeScript` and `ThemeSchemeScript`.

- [#6377](https://github.com/yamada-ui/yamada-ui/pull/6377) [`9de8d1d`](https://github.com/yamada-ui/yamada-ui/commit/9de8d1d18a3cffc0d82f12fe8149e1e5baf54823) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Enabled setting arbitrary string values for each property in Style Props.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Adjusted the color of `colors.black.bg`.

- [#6386](https://github.com/yamada-ui/yamada-ui/pull/6386) [`df19405`](https://github.com/yamada-ui/yamada-ui/commit/df19405c30bd5de7d2bf3cc8a9594915fd87ce9a) Thanks [@taroj1205](https://github.com/taroj1205)! - Fixed `Input` and `Select` so padding is applied correctly.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed the `register` function in `useDescendant` generated by `createDescendants` to update the store on element re-render.

- [#6395](https://github.com/yamada-ui/yamada-ui/pull/6395) [`a766407`](https://github.com/yamada-ui/yamada-ui/commit/a7664077f1f8c40f8facfe7f8623515a630332f4) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where setting `duration` to `0` in components like `Drawer` was not handled correctly.

- [#6265](https://github.com/yamada-ui/yamada-ui/pull/6265) [`864639f`](https://github.com/yamada-ui/yamada-ui/commit/864639f6456c9e6d875a317d26c5a09092adb453) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed incorrect descriptions in the `_peer*` props.

- [#6396](https://github.com/yamada-ui/yamada-ui/pull/6396) [`69746af`](https://github.com/yamada-ui/yamada-ui/commit/69746afd70d62d03d2f6e90dedde797c86a51223) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_groupAnimated` and `_peerAnimated` to condition props.

## 2.1.7

### Patch Changes

- [#6346](https://github.com/yamada-ui/yamada-ui/pull/6346) [`fc5f9a2`](https://github.com/yamada-ui/yamada-ui/commit/fc5f9a2ea5a2bf5bea2f28af8377dd95168181c7) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted code.

- [#6346](https://github.com/yamada-ui/yamada-ui/pull/6346) [`fc5f9a2`](https://github.com/yamada-ui/yamada-ui/commit/fc5f9a2ea5a2bf5bea2f28af8377dd95168181c7) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

## 2.1.6

### Patch Changes

- [#6326](https://github.com/yamada-ui/yamada-ui/pull/6326) [`acc491e`](https://github.com/yamada-ui/yamada-ui/commit/acc491e773cff8ddf5e6ee87c68655e9bbffc22c) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `isInterpolation`.

- [#6326](https://github.com/yamada-ui/yamada-ui/pull/6326) [`acc491e`](https://github.com/yamada-ui/yamada-ui/commit/acc491e773cff8ddf5e6ee87c68655e9bbffc22c) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where fallback values for CSS variables in interpolation did not work correctly in `useInjectVarsIntoProps` and `useInjectVarsIntoCss`.

## 2.1.5

### Patch Changes

- [#6261](https://github.com/yamada-ui/yamada-ui/pull/6261) [`aa494e0`](https://github.com/yamada-ui/yamada-ui/commit/aa494e09649baec0bffdca1f6da1bf1ee388c0d8) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted code.

- [#6309](https://github.com/yamada-ui/yamada-ui/pull/6309) [`b4ca385`](https://github.com/yamada-ui/yamada-ui/commit/b4ca38563004851771ec3582a0c5b5ac28b6cdfb) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Refactored the styles of the `Button` component. There are no changes to the styles.

- [#6297](https://github.com/yamada-ui/yamada-ui/pull/6297) [`d58fcf3`](https://github.com/yamada-ui/yamada-ui/commit/d58fcf3d98903924f2c7b463ac76b3ac6b9d3675) Thanks [@bmthd](https://github.com/bmthd)! - Fix `useAsyncCallback` so that `deps` controls memoization like `useCallback`.

- [#6317](https://github.com/yamada-ui/yamada-ui/pull/6317) [`4ca9145`](https://github.com/yamada-ui/yamada-ui/commit/4ca91459625bc21e919d56c53a0809c5ae9966ac) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#6277](https://github.com/yamada-ui/yamada-ui/pull/6277) [`01125a4`](https://github.com/yamada-ui/yamada-ui/commit/01125a4d1c652e85b377d1efe58578bbeeec2adc) Thanks [@bmthd](https://github.com/bmthd)! - Fixed an issue where the opening animation in NativeAccordion did not run on the first open in SSR environments.

## 2.1.4

### Patch Changes

- [#6194](https://github.com/yamada-ui/yamada-ui/pull/6194) [`20694a1`](https://github.com/yamada-ui/yamada-ui/commit/20694a10c7878bca2cc8b590dd09ac9d4a9c4050) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted code.

- [#6249](https://github.com/yamada-ui/yamada-ui/pull/6249) [`1b421b9`](https://github.com/yamada-ui/yamada-ui/commit/1b421b9bc4f4e978242e0a8f577791cb51c8aa5a) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Enabled specifying the indicator background color using `--indicator-bg` on `Radio.Root`.

- [#6225](https://github.com/yamada-ui/yamada-ui/pull/6225) [`1aa1e86`](https://github.com/yamada-ui/yamada-ui/commit/1aa1e8643340d01e9c4bcb2290a66e0f41aa8b1e) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Exported `Accordion.ItemType` type.

- [#6257](https://github.com/yamada-ui/yamada-ui/pull/6257) [`109a631`](https://github.com/yamada-ui/yamada-ui/commit/109a6318d73d43816e81bb9dccf23af6b3584d01) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed the JSDoc link for `Modal.Root`.

- [#6249](https://github.com/yamada-ui/yamada-ui/pull/6249) [`1b421b9`](https://github.com/yamada-ui/yamada-ui/commit/1b421b9bc4f4e978242e0a8f577791cb51c8aa5a) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Enabled specifying the indicator background color using `--indicator-bg` on `Checkbox.Root`.

- [#6259](https://github.com/yamada-ui/yamada-ui/pull/6259) [`d8d2ab4`](https://github.com/yamada-ui/yamada-ui/commit/d8d2ab4d70247160053366b479bcf28a8aacabd6) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted code.

- [#6249](https://github.com/yamada-ui/yamada-ui/pull/6249) [`1b421b9`](https://github.com/yamada-ui/yamada-ui/commit/1b421b9bc4f4e978242e0a8f577791cb51c8aa5a) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where `aria-controls`, `aria-labelledby`, and `tabIndex` could not be set on the `input` element of `Checkbox`.

- [#6247](https://github.com/yamada-ui/yamada-ui/pull/6247) [`6e35538`](https://github.com/yamada-ui/yamada-ui/commit/6e355381a36f04b338cd77322aa50e80d45fa2ac) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Allowed specifying a node as an argument to `enabledValue` in the return value of `useDescendants` generated by `createDescendants`.

- [#6247](https://github.com/yamada-ui/yamada-ui/pull/6247) [`6e35538`](https://github.com/yamada-ui/yamada-ui/commit/6e355381a36f04b338cd77322aa50e80d45fa2ac) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Enabled AND-search on `props` in the arguments of `values`, `enabledValues`, `enabledPrevValue`, and `enabledNextValue` returned by `useDescendants` generated by `createDescendants`.

- [#6248](https://github.com/yamada-ui/yamada-ui/pull/6248) [`238db22`](https://github.com/yamada-ui/yamada-ui/commit/238db227334c4082344c97d1d6086ae2e4d3bf78) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_indicator`, `_hasGroup`, `_notHasGroup` and `_animated` to condition props.

- [#6246](https://github.com/yamada-ui/yamada-ui/pull/6246) [`e596cc0`](https://github.com/yamada-ui/yamada-ui/commit/e596cc0cdca67059931600360e304c2a72ea3442) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Adjusted the dark mode color for `colors.bg.subtle`.

- [#6249](https://github.com/yamada-ui/yamada-ui/pull/6249) [`1b421b9`](https://github.com/yamada-ui/yamada-ui/commit/1b421b9bc4f4e978242e0a8f577791cb51c8aa5a) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where `aria-controls`, `aria-labelledby`, and `tabIndex` could not be set on the `input` element of `Radio`.

- Updated dependencies [[`eaddd11`](https://github.com/yamada-ui/yamada-ui/commit/eaddd1185085d2eaa11e8a12416b0e4e8acbef5c), [`d28fc6e`](https://github.com/yamada-ui/yamada-ui/commit/d28fc6e2105a859e133b0f6290f2ae73c461e875), [`8abe31f`](https://github.com/yamada-ui/yamada-ui/commit/8abe31fead60b0928d59e0adc4e30cb3b83e22b3)]:
  - @yamada-ui/utils@2.1.2

## 2.1.3

### Patch Changes

- [#6107](https://github.com/yamada-ui/yamada-ui/pull/6107) [`4810a66`](https://github.com/yamada-ui/yamada-ui/commit/4810a66dc37e070688d6b2cdacf11663d06edbd5) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted code.

- [#6153](https://github.com/yamada-ui/yamada-ui/pull/6153) [`78ce712`](https://github.com/yamada-ui/yamada-ui/commit/78ce71226cec29ed528e813a62c707bd6152af9e) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a circular dependency issue between `Form` and `Fieldset`.

- [#6098](https://github.com/yamada-ui/yamada-ui/pull/6098) [`0726312`](https://github.com/yamada-ui/yamada-ui/commit/0726312c56452f71a2ff6232abb9a790de22cd45) Thanks [@taroj1205](https://github.com/taroj1205)! - Added a shared `wait` utility and updated internal consumers to use the same implementation.

- [#6063](https://github.com/yamada-ui/yamada-ui/pull/6063) [`1b22cb1`](https://github.com/yamada-ui/yamada-ui/commit/1b22cb1c4f9da862d4a4a4c3931410a639d7b208) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted the source code of `Accordion`.

- [#6057](https://github.com/yamada-ui/yamada-ui/pull/6057) [`66fef30`](https://github.com/yamada-ui/yamada-ui/commit/66fef30fec99241018af93e7a67537494f69722e) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where `rootRef` was not correctly set in `InfiniteScrollArea`.

- [#6111](https://github.com/yamada-ui/yamada-ui/pull/6111) [`f1308df`](https://github.com/yamada-ui/yamada-ui/commit/f1308df90c8557ca6aebe575d0716e2dfaa7095f) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#6057](https://github.com/yamada-ui/yamada-ui/pull/6057) [`66fef30`](https://github.com/yamada-ui/yamada-ui/commit/66fef30fec99241018af93e7a67537494f69722e) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added support for using the browser viewport as the scroll container in `InfiniteScrollArea`. To enable this, set `rootRef` to `null`.

- [#6095](https://github.com/yamada-ui/yamada-ui/pull/6095) [`be2245e`](https://github.com/yamada-ui/yamada-ui/commit/be2245e27eba53149f2a945a17f58d378d9b6662) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#6064](https://github.com/yamada-ui/yamada-ui/pull/6064) [`c8b1360`](https://github.com/yamada-ui/yamada-ui/commit/c8b13602c8f9851921d2ff85c13e5311919c3889) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where an unnecessary `role="group"` was assigned to `NativeAccordion.Item`.

- Updated dependencies [[`4810a66`](https://github.com/yamada-ui/yamada-ui/commit/4810a66dc37e070688d6b2cdacf11663d06edbd5), [`0726312`](https://github.com/yamada-ui/yamada-ui/commit/0726312c56452f71a2ff6232abb9a790de22cd45), [`f1308df`](https://github.com/yamada-ui/yamada-ui/commit/f1308df90c8557ca6aebe575d0716e2dfaa7095f), [`8d54c60`](https://github.com/yamada-ui/yamada-ui/commit/8d54c60d3139db0149ed07f37d3d4cb951c7a2e7)]:
  - @yamada-ui/utils@2.1.1

## 2.1.2

### Patch Changes

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - `SegmentedControl` now removes `aria-readonly` from the label and input element.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed `onBlur` incorrectly setting `focused` to `false` when clicking on the dropdown content in `Autocomplete` with `multiple` mode, which caused the separator to disappear during mousedown.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Remove `aria-checked` from native checkbox input and use the native `indeterminate` property instead to fix `aria-conditional-attr` a11y violation.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Removed unreachable dead code in `useDynamicAnimation`.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the `className` prop was not correctly applied to the `Table` component.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the fallback icon shown when the number of items in `AvatarGroup` exceeds the specified `max` incorrectly had a `role` of `"img"`.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Changed the return type of `createStore` to include the `queue` and `ref`.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Changed the `Calendar.Navigation` from `nav` to `div` for better accessibility.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where unnecessary spaces were inserted with `_media` and `_container`.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where values containing "grad", "turn", or "rad" in `rotate` were not handled correctly.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Allow custom `aria-label` to override default on Pagination nav element.

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `tabIndex="0"` to the scrollable root in `NativeTable` for keyboard focus (a11y).

- [`4f54a11`](https://github.com/yamada-ui/yamada-ui/commit/4f54a11f3b927a1a81b3a6e836be9d084e9bcb87) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Applied `aria-labelledby` to the visible control in `FileInput` and `FileButton` for better accessibility.

## 2.1.1

### Patch Changes

- [#5771](https://github.com/yamada-ui/yamada-ui/pull/5771) [`c38c9aa`](https://github.com/yamada-ui/yamada-ui/commit/c38c9aa8e8cb645454dbcf1584048dba7fe07bbe) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `areaStartFillOpacity` and `areaEndFillOpacity` to `AreaChart`. These properties are only effective when `withGradient` is set to `true` on `AreaChart.Area`.

- [#5778](https://github.com/yamada-ui/yamada-ui/pull/5778) [`46fa811`](https://github.com/yamada-ui/yamada-ui/commit/46fa81183de5d8429e413a24784346c8e347b87f) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#5771](https://github.com/yamada-ui/yamada-ui/pull/5771) [`c38c9aa`](https://github.com/yamada-ui/yamada-ui/commit/c38c9aa8e8cb645454dbcf1584048dba7fe07bbe) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where `fillOpacity` was not properly applied in both `AreaChart` and `RadarChart`.

- [#5770](https://github.com/yamada-ui/yamada-ui/pull/5770) [`015a208`](https://github.com/yamada-ui/yamada-ui/commit/015a208e60c9f7dd1f1926c287f2225fa78afcb8) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Made the type definition of `varAttr` generic.

- [#5774](https://github.com/yamada-ui/yamada-ui/pull/5774) [`b6f79f4`](https://github.com/yamada-ui/yamada-ui/commit/b6f79f40030697fc233c14f1f2966b52bbd89a9a) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `ComposedChart` component.

- [#5770](https://github.com/yamada-ui/yamada-ui/pull/5770) [`015a208`](https://github.com/yamada-ui/yamada-ui/commit/015a208e60c9f7dd1f1926c287f2225fa78afcb8) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the `swatch` color in `Tooltip` and `Legend` was not correctly reflected when using chart components with composition.

## 2.1.0

### Minor Changes

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added support for CSS [`@starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) at-rule.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `RadialChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `Form` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `RadarChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added the `QrCode` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Add `Tip` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added CSS custom properties to each variant and size for use with conditions such as [Container style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries).

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `PieChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `AreaChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Update `Accordion` to use `NativeAccordion` styles.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `BarChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Upgraded [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) from version 3 to 4. This update introduces several major changes:

  - `keyboardStep` prop of `Resizable.Root` has been removed.
  - `storageKey` and `storage` props of `Resizable.Root` have been removed. Please use `Resizable.useLayout` instead.
  - `onLayout` prop of `Resizable.Root` has been removed. Please use `Resizable.useLayoutChange` and `Resizable.useLayoutChanged` instead.
  - The `as` prop of `Resizable.Item` has been removed. Instead, apply styling directly to `Resizable.Item`.
  - The `defaultSize`, `minSize`, and `maxSize` props of `Resizable.Item` now support `%`, `rem`, and `vw` units. If you use a number, it will be converted from `%` to `px`, so you should change `30` to `"30%"`, etc.
  - The `onCollapse` and `onExpand` props of `Resizable.Item` have been removed. Please use `onResize` on `Resizable.Item` instead.
  - The `onDragging` prop of `Resizable.Trigger` has been removed.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - The `component` of both `createComponent` and `createSlotComponent` now supports initial props.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `NativeAccordion` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `DonutChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `LineChart` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added a condition to change the background color of components such as `Input` and `Checkbox` using [container style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) when the variant of `Form` or `Fieldset` is set to `panel` or `elevated`. However, this condition is not supported by some browsers, so developers need to style them manually for unsupported browsers.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `NativePopover` component.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added support for [Container style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries).

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Removed `withCloseButton` and added `CloseTrigger` to `Popover`.

### Patch Changes

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - The argument of `useCSS` now supports arrays.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_popoverOpen` to style props.

- [#5747](https://github.com/yamada-ui/yamada-ui/pull/5747) [`44e9fc9`](https://github.com/yamada-ui/yamada-ui/commit/44e9fc9cacd1dda20567775db022497cb0d7c275) Thanks [@odendayoko](https://github.com/odendayoko)! - Fixed `FileInput`/`FileButton` a11y by applying field aria state to the visible control and keeping `readOnly` focusable via `aria-disabled`.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where using a CSS variable as the percentage in `color-mix` did not work correctly.

- [#5753](https://github.com/yamada-ui/yamada-ui/pull/5753) [`cb06f8d`](https://github.com/yamada-ui/yamada-ui/commit/cb06f8d2ba8715834520ec053f896d059dc512fd) Thanks [@kaehehehe](https://github.com/kaehehehe)! - Internationalized `ColorSwatchGroup` `aria-label` using `useI18n` hook, supporting all 36 locales.

- [#5754](https://github.com/yamada-ui/yamada-ui/pull/5754) [`a44dc67`](https://github.com/yamada-ui/yamada-ui/commit/a44dc67443df3351fb57757427f1d00059cde727) Thanks [@kaehehehe](https://github.com/kaehehehe)! - Fixed `Dropzone` keyboard open (Space/Enter) breaking when `ref` is passed via `getRootProps` by preventing react-dropzone's internal `rootRef` from being overwritten.

- [#5743](https://github.com/yamada-ui/yamada-ui/pull/5743) [`c6427ff`](https://github.com/yamada-ui/yamada-ui/commit/c6427ff7e732e9c9ebab5bff845ba717c6024b36) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Formatted codes.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where extra elements were mounted in `Form` when `Form.Header` or `title` were not set.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Removed `d` from Style Props.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the display priority of the `icon` prop in `Accordion.Button` was too low.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_center` and `_inactive` to condition props.

- [#5750](https://github.com/yamada-ui/yamada-ui/pull/5750) [`238ca66`](https://github.com/yamada-ui/yamada-ui/commit/238ca66bcc42a4c057f6f3932ac6e1d33de66faf) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added new icons.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `_open`, `_groupOpen` and `_detailsContent` to style props.

- [#5750](https://github.com/yamada-ui/yamada-ui/pull/5750) [`238ca66`](https://github.com/yamada-ui/yamada-ui/commit/238ca66bcc42a4c057f6f3932ac6e1d33de66faf) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#5728](https://github.com/yamada-ui/yamada-ui/pull/5728) [`ac9fd97`](https://github.com/yamada-ui/yamada-ui/commit/ac9fd9761cfbd69d64377976bbf7ae15d5680254) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Improved type performance.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Removed unnecessary position property.

- [#5761](https://github.com/yamada-ui/yamada-ui/pull/5761) [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where values were not generated correctly when using CSS value functions or CSS variables with `varAttr`.

- Updated dependencies [[`c6427ff`](https://github.com/yamada-ui/yamada-ui/commit/c6427ff7e732e9c9ebab5bff845ba717c6024b36), [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d), [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d), [`4cddce4`](https://github.com/yamada-ui/yamada-ui/commit/4cddce463ac97ebc6e9d5bb835e1a19bd008f14d)]:
  - @yamada-ui/utils@2.1.0

## 2.0.9

### Patch Changes

- [#5706](https://github.com/yamada-ui/yamada-ui/pull/5706) [`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added new style props.

- [#5706](https://github.com/yamada-ui/yamada-ui/pull/5706) [`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- [#5650](https://github.com/yamada-ui/yamada-ui/pull/5650) [`4c7e42a`](https://github.com/yamada-ui/yamada-ui/commit/4c7e42a2fecb9f9cac9c515d3e9f62d3538e736f) Thanks [@SahilJat](https://github.com/SahilJat)! - Fixed an issue where `aria-label` and `aria-labelledby` were not correctly passed to the `input` element in `ColorPicker`, causing accessibility violations.

- [#5657](https://github.com/yamada-ui/yamada-ui/pull/5657) [`4f17dfb`](https://github.com/yamada-ui/yamada-ui/commit/4f17dfbbcfc4bc8ab7d717adcb52feff1e7ce285) Thanks [@watataku11xx](https://github.com/watataku11xx)! - Fixed a bug where unnecessary HTML tags were rendered when `title` or `description` was not provided.

- [#5236](https://github.com/yamada-ui/yamada-ui/pull/5236) [`ec04f5f`](https://github.com/yamada-ui/yamada-ui/commit/ec04f5fdf9bd58b05aff517019c623f7af68668a) Thanks [@kaehehehe](https://github.com/kaehehehe)! - Fixed `Carousel` next/prev control buttons affecting slide animations.

- [#5655](https://github.com/yamada-ui/yamada-ui/pull/5655) [`d4476e0`](https://github.com/yamada-ui/yamada-ui/commit/d4476e021228eb15f49ce581bf6e6651e1326ca6) Thanks [@watataku11xx](https://github.com/watataku11xx)! - Add `tabindex="0"` to scrollable root in `useInfiniteScroll` for keyboard focus (a11y).

- [#5652](https://github.com/yamada-ui/yamada-ui/pull/5652) [`0408223`](https://github.com/yamada-ui/yamada-ui/commit/04082237b43e7918e01da97d9f8e2519154decd9) Thanks [@SahilJat](https://github.com/SahilJat)! - Fixed a bug where `aria-labelledby` was not set correctly when rendering for the first time or when the element was displayed.

- [#5706](https://github.com/yamada-ui/yamada-ui/pull/5706) [`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added new icons.

- Updated dependencies [[`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad)]:
  - @yamada-ui/utils@2.0.6

## 2.0.8

### Patch Changes

- [#5618](https://github.com/yamada-ui/yamada-ui/pull/5618) [`499d68d`](https://github.com/yamada-ui/yamada-ui/commit/499d68d5bcd009db1c229e1baef9171d06878438) Thanks [@72umesh](https://github.com/72umesh)! - Fix SegmentedControl indicator border radius when fullRounded is enabled

- [#5608](https://github.com/yamada-ui/yamada-ui/pull/5608) [`fda1a1b`](https://github.com/yamada-ui/yamada-ui/commit/fda1a1baa9b32e64dce65f81bb1273904f07caa7) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `fullRounded` to `Tag` component.

- [#5632](https://github.com/yamada-ui/yamada-ui/pull/5632) [`c162fcb`](https://github.com/yamada-ui/yamada-ui/commit/c162fcb8e416aea752e9c99223160aeccae00385) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where `aria-labelledby` and `aria-describedby` were not set correctly when rendering for the first time or when the element was displayed.

- [#5641](https://github.com/yamada-ui/yamada-ui/pull/5641) [`599e51b`](https://github.com/yamada-ui/yamada-ui/commit/599e51b102ada0bc271bc534d312fce7dab5acd4) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where setting `"system"` as the `defaultValue` for `ColorModeScript` did not enable dynamic switching based on the system color mode.

- Updated dependencies [[`b31a9e6`](https://github.com/yamada-ui/yamada-ui/commit/b31a9e6c1555a1cb0f05d735cc9591f44ad0485b), [`414ff70`](https://github.com/yamada-ui/yamada-ui/commit/414ff70331a844e1c2d94a09c8af451c3fe36c27)]:
  - @yamada-ui/utils@2.0.5

## 2.0.7

### Patch Changes

- [#5609](https://github.com/yamada-ui/yamada-ui/pull/5609) [`7e3fb67`](https://github.com/yamada-ui/yamada-ui/commit/7e3fb67ea69a275653493d35036fb755ecbf2f30) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated style props.

- [#5609](https://github.com/yamada-ui/yamada-ui/pull/5609) [`7e3fb67`](https://github.com/yamada-ui/yamada-ui/commit/7e3fb67ea69a275653493d35036fb755ecbf2f30) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added new icons.

## 2.0.6

### Patch Changes

- [#5593](https://github.com/yamada-ui/yamada-ui/pull/5593) [`dda3659`](https://github.com/yamada-ui/yamada-ui/commit/dda3659e48e45cdb74f0679d4d9190dc6112fc17) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `itemProps` and `indicatorProps` to `SegmentedControl.Root`.

- [#5536](https://github.com/yamada-ui/yamada-ui/pull/5536) [`139f9fb`](https://github.com/yamada-ui/yamada-ui/commit/139f9fbd30cb85618d1808769808d477c987e60d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Adjusted the border color for the "outline" variant of the `Input` component.

- [#5328](https://github.com/yamada-ui/yamada-ui/pull/5328) [`6b44560`](https://github.com/yamada-ui/yamada-ui/commit/6b44560c567a2cf6cfd8d177c7a9186e2f788785) Thanks [@bmthd](https://github.com/bmthd)! - The type definition for `items` is now exported from each component's namespace.

- [#5591](https://github.com/yamada-ui/yamada-ui/pull/5591) [`d398f02`](https://github.com/yamada-ui/yamada-ui/commit/d398f021ae2c8852c12a8da70e3f00bbfb3a3a77) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Removed unnecessary type generic arguments.

- [#5536](https://github.com/yamada-ui/yamada-ui/pull/5536) [`39e87e1`](https://github.com/yamada-ui/yamada-ui/commit/39e87e1d919050427fc561ba3bc8d7b88de88f25) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Changed the default color scheme of the `CloseButton` and cancel button in `Modal` and `Drawer` to `mono`.

- [#5594](https://github.com/yamada-ui/yamada-ui/pull/5594) [`b6983fb`](https://github.com/yamada-ui/yamada-ui/commit/b6983fb4af423eda92bcddc067ffc996deaebbf9) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated the return value type definition when `defaultValue` is set to `createContext`.

- [#5592](https://github.com/yamada-ui/yamada-ui/pull/5592) [`bbd2d40`](https://github.com/yamada-ui/yamada-ui/commit/bbd2d40cb26e63a1febcb1adc2caf49d41025881) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Pass `loadingProps` to `Loading.Suspense` component.

## 2.0.5

### Patch Changes

- [#5435](https://github.com/yamada-ui/yamada-ui/pull/5435) [`b7d4d7c`](https://github.com/yamada-ui/yamada-ui/commit/b7d4d7c07fb9f17bd2d3407692350a431b5651ce) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the `Select` components inside the `Calendar` did not have correct styling when `DatePicker` had `invalid` set to `true`.

- [#5432](https://github.com/yamada-ui/yamada-ui/pull/5432) [`71baee5`](https://github.com/yamada-ui/yamada-ui/commit/71baee56d63f17c847fad6354e4203a0c7a2d72c) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where the popover did not open on focus when `allowInput` was enabled in `DatePicker` and `ColorPicker`.

- [#5432](https://github.com/yamada-ui/yamada-ui/pull/5432) [`eb55e1a`](https://github.com/yamada-ui/yamada-ui/commit/eb55e1ace3557443c32958350de946ba8ae436b5) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where focus did not move correctly in `DatePicker` and `ColorPicker`.

- [#5432](https://github.com/yamada-ui/yamada-ui/pull/5432) [`6a9d9bc`](https://github.com/yamada-ui/yamada-ui/commit/6a9d9bcdbf5b5643d95f5404e9519b3bf415df17) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `transferFocus` option to `usePopover`. If `true`, the focus will be transferred to the popover content when the tab key is pressed. Default is `true`.

- [#5489](https://github.com/yamada-ui/yamada-ui/pull/5489) [`2c464f3`](https://github.com/yamada-ui/yamada-ui/commit/2c464f3c0b2436e0d03b283d8c3f9576ba38c063) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the focused style for invalid input was incorrect when the variant was set to "flushed" for `Select`, `Autocomplete`, `DatePicker`, and `ColorPicker`.

- [#5432](https://github.com/yamada-ui/yamada-ui/pull/5432) [`bfff6d5`](https://github.com/yamada-ui/yamada-ui/commit/bfff6d58e71806b24077c3ad4b3a42cf09f32d9d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - `useCombobox` now returns `popoverProps`.

- [#5432](https://github.com/yamada-ui/yamada-ui/pull/5432) [`71baee5`](https://github.com/yamada-ui/yamada-ui/commit/71baee56d63f17c847fad6354e4203a0c7a2d72c) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where `openOnClick` was not working for `DatePicker`, `ColorPicker`, `Autocomplete`, and `Select`.

- Updated dependencies [[`371fedb`](https://github.com/yamada-ui/yamada-ui/commit/371fedbc66a67ee69d2bcc1a51d2b94ebd26d0ab)]:
  - @yamada-ui/utils@2.0.4

## 2.0.4

### Patch Changes

- [#5430](https://github.com/yamada-ui/yamada-ui/pull/5430) [`63b8cce`](https://github.com/yamada-ui/yamada-ui/commit/63b8cce7b303d58c7c7888aa655d34eddee47980) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the scroll position behaved incorrectly when using `reverse` with `InfiniteScrollArea` and `useInfiniteScroll`.

- [#5313](https://github.com/yamada-ui/yamada-ui/pull/5313) [`db5c713`](https://github.com/yamada-ui/yamada-ui/commit/db5c713c8c4df48257349d32d605e44ffb959d23) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `ColorPicker` and `ColorSelector` components.

- [#5427](https://github.com/yamada-ui/yamada-ui/pull/5427) [`6cc7a8a`](https://github.com/yamada-ui/yamada-ui/commit/6cc7a8aee4f0a19efeb94c2bcbd21dad4f9452e9) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where keyboard interactions did not work when displaying notifications using `useNotice`.

- [#5313](https://github.com/yamada-ui/yamada-ui/pull/5313) [`db5c713`](https://github.com/yamada-ui/yamada-ui/commit/db5c713c8c4df48257349d32d605e44ffb959d23) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `"xs"` and `"xl"` size variants to `Slider`.

- Updated dependencies [[`db5c713`](https://github.com/yamada-ui/yamada-ui/commit/db5c713c8c4df48257349d32d605e44ffb959d23)]:
  - @yamada-ui/utils@2.0.3

## 2.0.3

### Patch Changes

- [#5302](https://github.com/yamada-ui/yamada-ui/pull/5302) [`1938f0f`](https://github.com/yamada-ui/yamada-ui/commit/1938f0ffa86bbd750f3ec0acba520939a22bbc4c) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed the type definitions for `DatePickerProps` and `getCalendarProps` in `useDatePicker`.

- [#5415](https://github.com/yamada-ui/yamada-ui/pull/5415) [`e75d02b`](https://github.com/yamada-ui/yamada-ui/commit/e75d02b33e0be9b5ca47ff34c8f97d86472d5960) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the type definitions of `@yamada-ui/utils` were not exported.

- [#5417](https://github.com/yamada-ui/yamada-ui/pull/5417) [`1c2ea1c`](https://github.com/yamada-ui/yamada-ui/commit/1c2ea1c87f5f29cf81101ed873e86cd873d64f39) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the `locale` and `dir` set on `UIProvider` or `I18nProvider` were not correctly reflected during server-side rendering.

- [#5317](https://github.com/yamada-ui/yamada-ui/pull/5317) [`7f3683f`](https://github.com/yamada-ui/yamada-ui/commit/7f3683ff56e794ac4862aa7ef898f80082db33b5) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the background color of `NativeSelect` options did not reflect dark mode on Windows.

- Updated dependencies [[`e75d02b`](https://github.com/yamada-ui/yamada-ui/commit/e75d02b33e0be9b5ca47ff34c8f97d86472d5960)]:
  - @yamada-ui/utils@2.0.2

## 2.0.2

### Patch Changes

- [#5300](https://github.com/yamada-ui/yamada-ui/pull/5300) [`89264dd`](https://github.com/yamada-ui/yamada-ui/commit/89264dd68508aeb21cbcc39f404444b3ad627761) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where components such as `PasswordInput` and `NativeSelect` that use `InputGroup` internally did not apply spacing correctly when the `variant` was set to `"flushed"`.

- [#5304](https://github.com/yamada-ui/yamada-ui/pull/5304) [`f7791fb`](https://github.com/yamada-ui/yamada-ui/commit/f7791fb9023f32c45dd8b0fc6bf3b8d21a6ca298) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Exported `useSlider` hook.

- [#5308](https://github.com/yamada-ui/yamada-ui/pull/5308) [`ca32ee4`](https://github.com/yamada-ui/yamada-ui/commit/ca32ee46ecca6e6b73eb68a1ad9f10e5de9a53c0) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the `id` and `name` were not set on the `input` for `DatePicker`, `Autocomplete`, and `Select`.

- [#5309](https://github.com/yamada-ui/yamada-ui/pull/5309) [`0980b98`](https://github.com/yamada-ui/yamada-ui/commit/0980b98bed7f04cfe7bbb2793124d7b59481907e) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed an issue where the children of `Calendar` were not re-rendering correctly and the `descendants` were not properly managed.

- [#5309](https://github.com/yamada-ui/yamada-ui/pull/5309) [`878585f`](https://github.com/yamada-ui/yamada-ui/commit/878585f2ee656a16fe10b510c0a46ce491d9da24) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Changed the default value of `openOnFocus` to `true` for both `Autocomplete` and `DatePicker`.

- [#5308](https://github.com/yamada-ui/yamada-ui/pull/5308) [`ca32ee4`](https://github.com/yamada-ui/yamada-ui/commit/ca32ee46ecca6e6b73eb68a1ad9f10e5de9a53c0) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Added `focusOnClear` to `Select`. This option controls whether the field is focused when the clear button is clicked.

- [#5296](https://github.com/yamada-ui/yamada-ui/pull/5296) [`7cebf47`](https://github.com/yamada-ui/yamada-ui/commit/7cebf47e82412d721d7a1a60304b940f498986dd) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - `fieldStyle` have been prettied.

- [#5307](https://github.com/yamada-ui/yamada-ui/pull/5307) [`db0f8d2`](https://github.com/yamada-ui/yamada-ui/commit/db0f8d2ef97a7a22de4aee3b6933a6a188157daf) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Fixed a bug where `DatePicker`, `Autocomplete`, and `Select` allowed clearing the value even when they were in a `disabled` or `readOnly` state.

- [#5298](https://github.com/yamada-ui/yamada-ui/pull/5298) [`11471a3`](https://github.com/yamada-ui/yamada-ui/commit/11471a3fabd944223816193a57f54cc14e9c0417) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - The `@default` in the JSDoc for `defaultValue` of `useSaturationProps` was incorrect, so this has been fixed.

## 2.0.1

### Patch Changes

- [`206a107`](https://github.com/yamada-ui/yamada-ui/commit/206a1076dae41d537ca305c71b9ca337a1394696) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Visit the [Migration Guide](https://yamada-ui.com/docs/get-started/migration).

- Updated dependencies [[`206a107`](https://github.com/yamada-ui/yamada-ui/commit/206a1076dae41d537ca305c71b9ca337a1394696)]:
  - @yamada-ui/utils@2.0.1

## 2.0.0

### Major Changes

- [`8eb0bd5`](https://github.com/yamada-ui/yamada-ui/commit/8eb0bd5a3474c75a98f1823d8551c39df095302d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Visit the [Migration Guide](https://yamada-ui.com/docs/get-started/migration).
