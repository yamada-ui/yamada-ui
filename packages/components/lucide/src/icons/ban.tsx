import { forwardRef } from "@yamada-ui/core"
import { Ban as BanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BanProps = LucideIconProps

/**
 * `Ban` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ban = forwardRef<BanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BanIcon} {...props} />
))
