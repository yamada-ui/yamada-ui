# @yamada-ui/cli

## 2.0.7

### Patch Changes

- [#5706](https://github.com/yamada-ui/yamada-ui/pull/5706) [`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad) Thanks [@hirotomoyamada](https://github.com/hirotomoyamada)! - Updated dependencies.

- Updated dependencies [[`1b12488`](https://github.com/yamada-ui/yamada-ui/commit/1b1248801bd5229913975da1d84e1b27661acbad)]:
  - @yamada-ui/utils@2.0.6

## 2.0.6

### Patch Changes

- Updated dependencies [[`b31a9e6`](https://github.com/yamada-ui/yamada-ui/commit/b31a9e6c1555a1cb0f05d735cc9591f44ad0485b), [`414ff70`](https://github.com/yamada-ui/yamada-ui/commit/414ff70331a844e1c2d94a09c8af451c3fe36c27)]:
  - @yamada-ui/utils@2.0.5

## 2.0.5

### Patch Changes

- Updated dependencies [[`371fedb`](https://github.com/yamada-ui/yamada-ui/commit/371fedbc66a67ee69d2bcc1a51d2b94ebd26d0ab)]:
  - @yamada-ui/utils@2.0.4

## 2.0.4

### Patch Changes

- [#5420](https://github.com/yamada-ui/yamada-ui/pull/5420) [`c69dc34`](https://github.com/yamada-ui/yamada-ui/commit/c69dc34a74cea99114826edaea50f651bdb24f40) Thanks [@bmthd](https://github.com/bmthd)! - Fix incorrect `devDependencies` installation command for `pnpm` in `packageAddArgs`.

- Updated dependencies [[`db5c713`](https://github.com/yamada-ui/yamada-ui/commit/db5c713c8c4df48257349d32d605e44ffb959d23)]:
  - @yamada-ui/utils@2.0.3

## 2.0.3

### Patch Changes

- Updated dependencies [[`e75d02b`](https://github.com/yamada-ui/yamada-ui/commit/e75d02b33e0be9b5ca47ff34c8f97d86472d5960)]:
  - @yamada-ui/utils@2.0.2

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
