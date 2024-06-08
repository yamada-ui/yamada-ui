import { forwardRef } from "@yamada-ui/core"
import { University as UniversityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UniversityProps = LucideIconProps

/**
 * `University` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const University = forwardRef<UniversityProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UniversityIcon} {...props} />
))
