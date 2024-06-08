import { forwardRef } from "@yamada-ui/core"
import { Dna as DnaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DnaProps = LucideIconProps

/**
 * `Dna` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dna = forwardRef<DnaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DnaIcon} {...props} />
))
