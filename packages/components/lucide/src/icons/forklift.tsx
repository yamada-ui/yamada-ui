import { forwardRef } from "@yamada-ui/core"
import { Forklift as ForkliftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ForkliftProps = LucideIconProps

/**
 * `Forklift` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Forklift = forwardRef<ForkliftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ForkliftIcon} {...props} />
))
