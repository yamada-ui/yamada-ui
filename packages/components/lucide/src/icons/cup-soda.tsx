import { forwardRef } from "@yamada-ui/core"
import { CupSoda as CupSodaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CupSodaProps = LucideIconProps

/**
 * `CupSoda` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CupSoda = forwardRef<CupSodaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CupSodaIcon} {...props} />
))
