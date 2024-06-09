import { forwardRef } from "@yamada-ui/core"
import { SquarePlus as SquarePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePlusProps = LucideIconProps

/**
 * `SquarePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePlus = forwardRef<SquarePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquarePlusIcon} {...props} />
))
