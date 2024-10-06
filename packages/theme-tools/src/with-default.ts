import type { ComponentDefaultProps, Theme, UsageTheme } from "@yamada-ui/core"
import type { Union } from "@yamada-ui/utils"
import { isArray, merge } from "@yamada-ui/utils"

export function withDefaultSize({
  components,
  size,
}: {
  size: ComponentDefaultProps["size"]
  components?: Union<keyof Theme["components"]>[]
}) {
  return function (theme: UsageTheme): UsageTheme {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { size } }]),
      ),
    })
  }
}

export function withDefaultVariant({
  components,
  variant,
}: {
  variant: ComponentDefaultProps["variant"]
  components?: Union<keyof Theme["components"]>[]
}) {
  return function (theme: UsageTheme): UsageTheme {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { variant } }]),
      ),
    })
  }
}

export function withDefaultColorScheme({
  colorScheme,
  components,
}: {
  colorScheme: ComponentDefaultProps["colorScheme"]
  components?: Union<keyof Theme["components"]>[]
}) {
  return function (theme: UsageTheme): UsageTheme {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { colorScheme } }]),
      ),
    })
  }
}

export function withDefaultProps({
  components,
  defaultProps,
}: {
  defaultProps: ComponentDefaultProps
  components?: Union<keyof Theme["components"]>[]
}): UsageTheme {
  return function (theme: UsageTheme) {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps }]),
      ),
    })
  }
}
