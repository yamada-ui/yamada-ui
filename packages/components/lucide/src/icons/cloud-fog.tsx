import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudFog as CloudFogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudFog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudFog = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudFogIcon} {...props} />
))
