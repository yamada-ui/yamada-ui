import { forwardRef } from "@yamada-ui/core"
import { AtSign as AtSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AtSignProps = LucideIconProps

/**
 * `AtSign` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AtSign = forwardRef<AtSignProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AtSignIcon} {...props} />
))
