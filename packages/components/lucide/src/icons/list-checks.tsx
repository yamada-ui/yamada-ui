import { forwardRef } from "@yamada-ui/core"
import { ListChecks as ListChecksIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListChecksProps = LucideIconProps

/**
 * `ListChecks` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListChecks = forwardRef<ListChecksProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListChecksIcon} {...props} />
))
