import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CupSoda as LucideCupSodaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CupSodaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CupSodaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCupSodaIcon} {...props} />
))

/**
 * @deprecated Use `CupSodaIcon` instead.
 */
export const CupSoda = CupSodaIcon
