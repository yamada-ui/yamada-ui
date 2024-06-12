import { forwardRef } from "@yamada-ui/core"
import { Settings as SettingsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SettingsProps = LucideIconProps

/**
 * `Settings` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Settings = forwardRef<SettingsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SettingsIcon} {...props} />
))
