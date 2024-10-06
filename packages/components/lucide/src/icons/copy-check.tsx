import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopyCheck as CopyCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyCheck = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyCheckIcon} {...props} />
))
