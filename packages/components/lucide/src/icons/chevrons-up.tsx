import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsUp as ChevronsUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChevronsUpIcon} {...props} />
))
