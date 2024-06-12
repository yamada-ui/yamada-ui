import { forwardRef } from "@yamada-ui/core"
import { Moon as MoonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoonProps = LucideIconProps

/**
 * `Moon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Moon = forwardRef<MoonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoonIcon} {...props} />
))
