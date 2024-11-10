import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BaggageClaim as OriginalBaggageClaim } from "lucide-react"

/**
 * `BaggageClaimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaggageClaimIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalBaggageClaim} {...props} />
))

/**
 * `BaggageClaim` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BaggageClaimIcon` instead.
 */
export const BaggageClaim = BaggageClaimIcon
