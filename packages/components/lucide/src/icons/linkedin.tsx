import { forwardRef } from "@yamada-ui/core"
import { Linkedin as LinkedinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LinkedinProps = LucideIconProps

/**
 * `Linkedin` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Linkedin = forwardRef<LinkedinProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LinkedinIcon} {...props} />
))
