# @yamada-ui/react

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
