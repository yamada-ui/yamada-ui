import { forwardRef } from "@yamada-ui/core"
import { Bath as BathIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BathProps = LucideIconProps

/**
 * `Bath` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bath = forwardRef<BathProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BathIcon} {...props} />
))
