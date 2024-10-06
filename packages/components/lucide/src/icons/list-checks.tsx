import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListChecks as ListChecksIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListChecks` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListChecks = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListChecksIcon} {...props} />
))
