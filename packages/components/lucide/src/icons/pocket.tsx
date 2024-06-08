import { forwardRef } from "@yamada-ui/core"
import { Pocket as PocketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PocketProps = LucideIconProps

/**
 * `Pocket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pocket = forwardRef<PocketProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PocketIcon} {...props} />
))
