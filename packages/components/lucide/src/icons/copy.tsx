import { forwardRef } from "@yamada-ui/core"
import { Copy as CopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopyProps = LucideIconProps

/**
 * `Copy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Copy = forwardRef<CopyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyIcon} {...props} />
))
