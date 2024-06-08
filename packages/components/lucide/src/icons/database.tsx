import { forwardRef } from "@yamada-ui/core"
import { Database as DatabaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DatabaseProps = LucideIconProps

/**
 * `Database` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Database = forwardRef<DatabaseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DatabaseIcon} {...props} />
))
