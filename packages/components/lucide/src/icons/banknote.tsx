import { forwardRef } from "@yamada-ui/core"
import { Banknote as BanknoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BanknoteProps = LucideIconProps

/**
 * `Banknote` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Banknote = forwardRef<BanknoteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BanknoteIcon} {...props} />
))
