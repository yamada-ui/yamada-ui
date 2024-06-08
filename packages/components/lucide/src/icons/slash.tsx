import { forwardRef } from "@yamada-ui/core"
import { Slash as SlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SlashProps = LucideIconProps

/**
 * `Slash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Slash = forwardRef<SlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SlashIcon} {...props} />
))
