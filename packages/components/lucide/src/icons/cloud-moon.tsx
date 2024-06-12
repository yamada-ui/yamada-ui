import { forwardRef } from "@yamada-ui/core"
import { CloudMoon as CloudMoonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudMoonProps = LucideIconProps

/**
 * `CloudMoon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoon = forwardRef<CloudMoonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudMoonIcon} {...props} />
))
