import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pickaxe as LucidePickaxeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PickaxeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PickaxeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePickaxeIcon} {...props} />
))

/**
 * @deprecated Use `PickaxeIcon` instead.
 */
export const Pickaxe = PickaxeIcon
