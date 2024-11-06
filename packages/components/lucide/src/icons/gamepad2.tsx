import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gamepad2 as LucideGamepad2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Gamepad2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gamepad2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGamepad2Icon} {...props} />
))

/**
 * @deprecated Use `Gamepad2Icon` instead.
 */
export const Gamepad2 = Gamepad2Icon
