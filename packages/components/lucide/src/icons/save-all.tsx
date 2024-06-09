import { forwardRef } from "@yamada-ui/core"
import { SaveAll as SaveAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SaveAllProps = LucideIconProps

/**
 * `SaveAll` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveAll = forwardRef<SaveAllProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SaveAllIcon} {...props} />
))
