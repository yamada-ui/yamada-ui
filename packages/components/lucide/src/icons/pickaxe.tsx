import { forwardRef } from "@yamada-ui/core"
import { Pickaxe as PickaxeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PickaxeProps = LucideIconProps

/**
 * `Pickaxe` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pickaxe = forwardRef<PickaxeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PickaxeIcon} {...props} />
))
