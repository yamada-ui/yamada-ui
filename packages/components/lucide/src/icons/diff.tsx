import { forwardRef } from "@yamada-ui/core"
import { Diff as DiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiffProps = LucideIconProps

/**
 * `Diff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Diff = forwardRef<DiffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiffIcon} {...props} />
))
