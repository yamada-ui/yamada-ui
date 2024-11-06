import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dna as LucideDnaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DnaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DnaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDnaIcon} {...props} />
))

/**
 * @deprecated Use `DnaIcon` instead.
 */
export const Dna = DnaIcon
