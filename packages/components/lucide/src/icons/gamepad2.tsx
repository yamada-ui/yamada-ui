import { forwardRef } from "@yamada-ui/core"
import { Gamepad2 as Gamepad2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Gamepad2Props = LucideIconProps

/**
 * `Gamepad2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gamepad2 = forwardRef<Gamepad2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Gamepad2Icon} {...props} />
))
