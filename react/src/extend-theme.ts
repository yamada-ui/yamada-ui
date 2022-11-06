import { UsageTheme } from '@yamada-ui/system'
import { defaultTheme } from '@yamada-ui/theme'
import { Dict, merge } from '@yamada-ui/utils'

export const extendTheme = (theme: UsageTheme): Dict => merge(defaultTheme, theme)
