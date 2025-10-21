# @yamada-ui/react

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
