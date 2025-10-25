# @yamada-ui/react

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
