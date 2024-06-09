import { forwardRef } from "@yamada-ui/core"
import { CloudHail as CloudHailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudHailProps = LucideIconProps

/**
 * `CloudHail` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudHail = forwardRef<CloudHailProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudHailIcon} {...props} />
))
