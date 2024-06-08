import { forwardRef } from "@yamada-ui/core"
import { SquareMenu as SquareMenuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareMenuProps = LucideIconProps

/**
 * `SquareMenu` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMenu = forwardRef<SquareMenuProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareMenuIcon} {...props} />
))
