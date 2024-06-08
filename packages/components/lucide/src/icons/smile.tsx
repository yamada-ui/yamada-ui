import { forwardRef } from "@yamada-ui/core"
import { Smile as SmileIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SmileProps = LucideIconProps

/**
 * `Smile` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Smile = forwardRef<SmileProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SmileIcon} {...props} />
))
