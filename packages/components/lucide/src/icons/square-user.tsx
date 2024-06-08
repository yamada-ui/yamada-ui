import { forwardRef } from "@yamada-ui/core"
import { SquareUser as SquareUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareUserProps = LucideIconProps

/**
 * `SquareUser` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareUser = forwardRef<SquareUserProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareUserIcon} {...props} />
))
