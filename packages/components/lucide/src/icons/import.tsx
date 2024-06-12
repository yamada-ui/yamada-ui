import { forwardRef } from "@yamada-ui/core"
import { Import as ImportIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImportProps = LucideIconProps

/**
 * `Import` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Import = forwardRef<ImportProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImportIcon} {...props} />
))
