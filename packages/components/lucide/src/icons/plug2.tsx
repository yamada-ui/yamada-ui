import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Plug2 as LucidePlug2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Plug2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Plug2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlug2Icon} {...props} />
))

/**
 * @deprecated Use `Plug2Icon` instead.
 */
export const Plug2 = Plug2Icon
