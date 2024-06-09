import { forwardRef } from "@yamada-ui/core"
import { CloudLightning as CloudLightningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudLightningProps = LucideIconProps

/**
 * `CloudLightning` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudLightning = forwardRef<CloudLightningProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudLightningIcon} {...props} />,
)
