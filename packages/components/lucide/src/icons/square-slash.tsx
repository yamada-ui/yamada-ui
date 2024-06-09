import { forwardRef } from "@yamada-ui/core"
import { SquareSlash as SquareSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareSlashProps = LucideIconProps

/**
 * `SquareSlash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSlash = forwardRef<SquareSlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareSlashIcon} {...props} />
))
