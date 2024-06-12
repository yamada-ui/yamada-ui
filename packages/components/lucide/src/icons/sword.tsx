import { forwardRef } from "@yamada-ui/core"
import { Sword as SwordIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SwordProps = LucideIconProps

/**
 * `Sword` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sword = forwardRef<SwordProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SwordIcon} {...props} />
))
