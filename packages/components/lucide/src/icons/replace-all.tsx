import { forwardRef } from "@yamada-ui/core"
import { ReplaceAll as ReplaceAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReplaceAllProps = LucideIconProps

/**
 * `ReplaceAll` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplaceAll = forwardRef<ReplaceAllProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReplaceAllIcon} {...props} />
))
