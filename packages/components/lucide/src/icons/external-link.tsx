import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ExternalLink as LucideExternalLinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ExternalLinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ExternalLinkIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideExternalLinkIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ExternalLinkIcon` instead.
 */
export const ExternalLink = ExternalLinkIcon
