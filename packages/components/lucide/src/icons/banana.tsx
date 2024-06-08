import { forwardRef } from "@yamada-ui/core"
import { Banana as BananaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BananaProps = LucideIconProps

/**
 * `Banana` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Banana = forwardRef<BananaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BananaIcon} {...props} />
))
