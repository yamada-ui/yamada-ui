# @yamada-ui/cli

## 2.0.2

### Patch Changes

- [#5287](https://github.com/yamada-ui/yamada-ui/pull/5287) [`d5b44c6`](https://github.com/yamada-ui/yamada-ui/commit/d5b44c64416bf2628dd6af71c48ab309856fa608) Thanks [@bmthd](https://github.com/bmthd)! - fix: add shebang to CLI binary via tsdown banner configuration

  Add `#!/usr/bin/env node` shebang to the CLI binary by configuring tsdown's banner option.
  This fixes execution issues on Linux where the CLI failed with "import: not found" errors
  because the shell tried to execute the JavaScript file as a shell script.

  Fixes #5286

## 2.0.1

### Patch Changes

- [`206a107`](https://github.com/yamada-ui/yamada-ui/commit/206a1076dae41d537ca305c71b9ca337a1394696) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Visit the [Migration Guide](https://yamada-ui.com/docs/get-started/migration).

- Updated dependencies [[`206a107`](https://github.com/yamada-ui/yamada-ui/commit/206a1076dae41d537ca305c71b9ca337a1394696)]:
  - @yamada-ui/utils@2.0.1

## 2.0.0

### Major Changes

- [`8eb0bd5`](https://github.com/yamada-ui/yamada-ui/commit/8eb0bd5a3474c75a98f1823d8551c39df095302d) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Visit the [Migration Guide](https://yamada-ui.com/docs/get-started/migration).
