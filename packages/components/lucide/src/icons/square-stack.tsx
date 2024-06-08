import { forwardRef } from "@yamada-ui/core"
import { SquareStack as SquareStackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareStackProps = LucideIconProps

/**
 * `SquareStack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareStack = forwardRef<SquareStackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareStackIcon} {...props} />
))
