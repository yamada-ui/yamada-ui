import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Church as LucideChurchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChurchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChurchIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideChurchIcon} {...props} />
))

/**
 * @deprecated Use `ChurchIcon` instead.
 */
export const Church = ChurchIcon
