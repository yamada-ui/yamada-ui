import { Theme, ComponentDefaultProps, UsageTheme } from "@yamada-ui/core"
import { isArray, Union, merge } from "@yamada-ui/utils"

export const withDefaultSize =
  ({
    size,
    components,
  }: {
    size: ComponentDefaultProps["size"]
    components?: Union<keyof Theme["components"]>[]
  }) =>
  (theme: UsageTheme): UsageTheme => {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { size } }]),
      ),
    })
  }

export const withDefaultVariant =
  ({
    variant,
    components,
  }: {
    variant: ComponentDefaultProps["variant"]
    components?: Union<keyof Theme["components"]>[]
  }) =>
  (theme: UsageTheme): UsageTheme => {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { variant } }]),
      ),
    })
  }

export const withDefaultColorScheme =
  ({
    colorScheme,
    components,
  }: {
    colorScheme: ComponentDefaultProps["colorScheme"]
    components?: Union<keyof Theme["components"]>[]
  }) =>
  (theme: UsageTheme): UsageTheme => {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps: { colorScheme } }]),
      ),
    })
  }

export const withDefaultProps =
  ({
    defaultProps,
    components,
  }: {
    defaultProps: ComponentDefaultProps
    components?: Union<keyof Theme["components"]>[]
  }): UsageTheme =>
  (theme: UsageTheme) => {
    let keys: string[] = Object.keys(theme.components ?? {})

    if (isArray(components)) keys = components

    return merge(theme, {
      components: Object.fromEntries(
        keys.map((key) => [key, { defaultProps }]),
      ),
    })
  }
