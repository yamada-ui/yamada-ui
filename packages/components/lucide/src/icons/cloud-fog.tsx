import { forwardRef } from "@yamada-ui/core"
import { CloudFog as CloudFogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudFogProps = LucideIconProps

/**
 * `CloudFog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudFog = forwardRef<CloudFogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudFogIcon} {...props} />
))
