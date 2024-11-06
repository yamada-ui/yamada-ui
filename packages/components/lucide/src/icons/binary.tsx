import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Binary as LucideBinaryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BinaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BinaryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBinaryIcon} {...props} />
))

/**
 * @deprecated Use `BinaryIcon` instead.
 */
export const Binary = BinaryIcon
