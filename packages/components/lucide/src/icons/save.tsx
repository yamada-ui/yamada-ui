import { forwardRef } from "@yamada-ui/core"
import { Save as SaveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SaveProps = LucideIconProps

/**
 * `Save` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Save = forwardRef<SaveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SaveIcon} {...props} />
))
