import { forwardRef } from "@yamada-ui/core"
import { SquarePi as SquarePiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePiProps = LucideIconProps

/**
 * `SquarePi` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePi = forwardRef<SquarePiProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquarePiIcon} {...props} />
))
