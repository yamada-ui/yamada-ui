import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Unlink2 as Unlink2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Unlink2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Unlink2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Unlink2Icon} {...props} />
))
