import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Medal as LucideMedalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MedalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MedalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMedalIcon} {...props} />
))

/**
 * @deprecated Use `MedalIcon` instead.
 */
export const Medal = MedalIcon
