import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Settings as LucideSettingsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SettingsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SettingsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSettingsIcon} {...props} />
))

/**
 * @deprecated Use `SettingsIcon` instead.
 */
export const Settings = SettingsIcon
