import { forwardRef } from "@yamada-ui/core"
import { SquareM as SquareMIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareMProps = LucideIconProps

/**
 * `SquareM` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareM = forwardRef<SquareMProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareMIcon} {...props} />
))
