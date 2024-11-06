import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Unlink2 as LucideUnlink2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Unlink2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Unlink2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUnlink2Icon} {...props} />
))

/**
 * @deprecated Use `Unlink2Icon` instead.
 */
export const Unlink2 = Unlink2Icon
