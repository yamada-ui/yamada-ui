import { forwardRef } from "@yamada-ui/core"
import { Unlink as UnlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UnlinkProps = LucideIconProps

/**
 * `Unlink` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Unlink = forwardRef<UnlinkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UnlinkIcon} {...props} />
))
