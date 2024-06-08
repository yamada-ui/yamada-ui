import { forwardRef } from "@yamada-ui/core"
import { Plus as PlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlusProps = LucideIconProps

/**
 * `Plus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Plus = forwardRef<PlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PlusIcon} {...props} />
))
