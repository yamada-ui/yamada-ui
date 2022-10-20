import { ExtendTheme } from '@yamada-ui/system'
import { defaultTheme } from '@yamada-ui/theme'
import { Dict, merge } from '@yamada-ui/utils'

export const extendTheme = (extendTheme: ExtendTheme): Dict => merge(defaultTheme, extendTheme)
