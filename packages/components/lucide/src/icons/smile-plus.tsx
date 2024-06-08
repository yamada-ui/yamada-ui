import { forwardRef } from "@yamada-ui/core"
import { SmilePlus as SmilePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SmilePlusProps = LucideIconProps

/**
 * `SmilePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmilePlus = forwardRef<SmilePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SmilePlusIcon} {...props} />
))
