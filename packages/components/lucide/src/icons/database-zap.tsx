import { forwardRef } from "@yamada-ui/core"
import { DatabaseZap as DatabaseZapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DatabaseZapProps = LucideIconProps

/**
 * `DatabaseZap` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseZap = forwardRef<DatabaseZapProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DatabaseZapIcon} {...props} />
))
