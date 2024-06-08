import { forwardRef } from "@yamada-ui/core"
import { ExternalLink as ExternalLinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ExternalLinkProps = LucideIconProps

/**
 * `ExternalLink` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ExternalLink = forwardRef<ExternalLinkProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ExternalLinkIcon} {...props} />,
)
