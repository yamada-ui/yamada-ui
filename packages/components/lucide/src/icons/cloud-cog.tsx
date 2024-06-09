import { forwardRef } from "@yamada-ui/core"
import { CloudCog as CloudCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudCogProps = LucideIconProps

/**
 * `CloudCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudCog = forwardRef<CloudCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudCogIcon} {...props} />
))
