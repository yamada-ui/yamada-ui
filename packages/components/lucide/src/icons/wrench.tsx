import { forwardRef } from "@yamada-ui/core"
import { Wrench as WrenchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WrenchProps = LucideIconProps

/**
 * `Wrench` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wrench = forwardRef<WrenchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WrenchIcon} {...props} />
))
