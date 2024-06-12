import { forwardRef } from "@yamada-ui/core"
import { CloudOff as CloudOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudOffProps = LucideIconProps

/**
 * `CloudOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudOff = forwardRef<CloudOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudOffIcon} {...props} />
))
