import { forwardRef } from "@yamada-ui/core"
import { SquareCheck as SquareCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareCheckProps = LucideIconProps

/**
 * `SquareCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCheck = forwardRef<SquareCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareCheckIcon} {...props} />
))
