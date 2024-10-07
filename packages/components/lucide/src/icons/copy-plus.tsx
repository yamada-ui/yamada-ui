import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopyPlus as CopyPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyPlus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyPlusIcon} {...props} />
))
