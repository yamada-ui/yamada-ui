import { forwardRef } from "@yamada-ui/core"
import { Squirrel as SquirrelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquirrelProps = LucideIconProps

/**
 * `Squirrel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Squirrel = forwardRef<SquirrelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquirrelIcon} {...props} />
))
