import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PilcrowLeft as PilcrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PilcrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowLeft = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PilcrowLeftIcon} {...props} />
))
